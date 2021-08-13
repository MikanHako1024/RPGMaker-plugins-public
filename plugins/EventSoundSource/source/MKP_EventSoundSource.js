// ================================================================
// MKP_EventSoundSource.js
// 事件音源
// ================================================================
//  author : Mikan (MikanHako)
//  plugin : MKP_EventSoundSource.js 事件音源
// version : v0.2.2 2020/04/25 解决读档回到同一地图导致配置错误的问题
// ----------------------------------------------------------------
// [Twitter] https://twitter.com/_MikanHako/
// -[GitHub] https://github.com/MikanHako1024/
// ---[Blog] Coming Soon
// -----[QQ] 312859582
// ================================================================
// MIT License
// Copyright (C) 2020-2021 Mikan(MikanHako)
// http://opensource.org/licenses/mit-license.php
// ================================================================




/*:
 * @plugindesc MKP_EventSoundSource <事件音源>
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.2.3 2021/08/13 更新插件说明及规约
 *   v0.2.2 2020/04/25 解决读档回到同一地图导致配置错误的问题
 *   v0.2.1 2020/02/02 解决了停止时打开菜单会播放的问题
 *   v0.2.0 2020/02/02 允许设置初始声音不播放或不循环
 *   v0.1.5 2020/02/02 优化了音频的清理
 *   v0.1.4 2020/02/01 添加了获取音乐播放状态的功能
 *   v0.1.3 2020/02/01 解决了读档bug 添加了控制、更变音乐的功能
 *   v0.1.2 2020/01/31 可以为非自身事件设置音源
 *   v0.1.1 2020/01/31 完成了最初的构架
 * 
 * 
 * @help
 * 
 * ## 简要说明
 * 
 * 本插件提供模拟音源的效果，角色距离音源越远听到的声音越小  
 * 
 * 
 * ## 使用方法
 * 
 * 为事件添加 `Sound` 或 `SetSound` 标签 以设置一个音源  
 * 详见 【标签设置】  
 * 
 * 
 * ## 标签设置
 * 
 * | description              | note                                                           |
 * | :----------              | :--------------------------                                    |
 * | 为自身事件设置一个音源   | `<Sound : name, dist, play, loop, volume, pan, pitch>`        |
 * | 为非自身事件设置一个音源 | `<SetSound : 事件id, name, dist, status, volume, pan, pitch>` |
 * 
 * #### 为自身事件设置一个音源
 * 添加事件备注 标记该事件为音源 同时将声音配置保存到该事件中  
 * 标签含有多个参数，参数与标签名`Sound`用分号分隔，参数间用逗号分隔  
 * 
 * * `<Sound : name, dist, play, loop, volume, pan, pitch>`
 *   * 以该事件为音源 播放音乐`audio/bgs/City` 最大可听距离10格 默认播放且循环 : 
 *   * `<Sound : City, 10, on, loop>` (volume, pan, pitch 将使用默认值)
 * + Sound
 *   - 主标签
 *   - 固定写法，区分大小写
 * + name
 *   - 音乐文件名
 *   - 文件路径为 `audio/bgs/`
 * + dist
 *   - 声音可听范围的最大距离限制
 *   - 距离为0时，声音为最大音量
 *   - 距离在最大距离限制以内时，音量随距离增加而线性降低
 *   - 特别的是，设置dist为0时，只有与音源重合才能听到声音
 *   - 数值，非负数，单位 : 格
 * + play
 *   - 初始播放状态
 *   - 有`on`和`off`两种可选值，不区分大小写
 *   - `on` : 播放
 *   - `off` : 停止
 *   - 可缺省，默认 `on` (播放)
 * + loop
 *   - 初始循环状态
 *   - 设置只播放一次后，不会直接停止，而是在下次结束后不重播
 *   - 有`loop`和`only`两种可选值，不区分大小写
 *   - `loop` : 循环播放
 *   - `only` : 播放一次
 *   - 可缺省，默认 `loop` (循环播放)
 * + volume
 *   - 音量，最大音量
 *   - 数值，0 - 100
 *   - 可缺省，默认 90
 * + pan
 *   - 音像
 *   - 数值，0 - 100
 *   - 可缺省，默认 0
 * + pitch
 *   - 音调
 *   - 数值，0 - 100
 *   - 可缺省，默认 100
 * 
 * #### 为非自身事件设置一个音源
 * 与 【为自身事件设置一个音源】 类似，但备注的事件只用于储存声音配置，将音源设置为其他事件  
 * 
 * * `<SetSound : 事件id, name, dist, status, volume, pan, pitch>`
 *   * 以事件6为音源 播放音乐`audio/bgs/City` 极限距离10格 默认播放且循环 :
 *   * `<SetSound : 6, City, 10, on, loop>` (volume, pan, pitch 将使用默认值)
 * + SetSound
 *   - 主标签
 *   - 固定写法，区分大小写
 * + 事件id
 *   - 音源事件的事件id
 *   - 数值，事件id
 * + 其他同 【为自身事件设置一个音源】
 * 
 * 
 * ## 插件指令
 * 
 * | description  | command |
 * | :----------  | :------ |
 * | 设置音源参数 | `SetSound 事件id [key] [value]` |
 * | 获取播放状态 | `CheckSound 事件id [key] 变量id或开关id` |
 * 
 * #### 设置音源参数
 * 添加了标签`<Sound>`或`<SetSound>`的事件将作为 【声音配置事件】  
 * 【声音配置事件】 将用于存储声音配置和控制播放等  
 * 使用该插件指令 可以设置【声音配置事件】的声音配置或控制播放  
 * 
 * * `SetSound 事件id [key] [value]`
 *   * 设置声音配置事件6 的 音源事件为 事件8 : `SetSound 6 target 8`
 *   * 设置声音配置事件6 的 声音文件 为 `audio/bgs/Sea` : `SetSound 6 name Sea`
 *   * 设置声音配置事件6 的 距离限制 为 5格 : `SetSound 6 dist 5`
 *   * 让声音配置事件6 的音乐 只播放一次不循环 : `SetSound 6 loop only`
 *   * 让声音配置事件6 的音乐 停止 : `SetSound 6 play off`
 *   * 让声音配置事件6 的音乐 暂停 : `SetSound 6 pause pause`
 * + SetSound
 *   - 主命令
 *   - 固定写法，区分大小写
 * + 事件id
 *   - 指定一个声音配置事件
 *   - 不是声音目标事件，区别详见 【其他说明】
 *   - 数值，事件id
 * + [key]
 *   - 需要设置的参数的参数名
 *   - [参数]中[key列]的固定字串，不区分大小写
 * + [value]
 *   - 需要设置的参数的值
 *   - [参数]中[value列]所表示的值
 * + [参数]
 * | key    | value          |
 * | :----- | :------------  |
 * | target | 声音目标事件id |
 * | name   | 音乐文件名     |
 * | dist   | 最大距离限制   |
 * | volume | 音量     |
 * | pan    | 音像     |
 * | pitch  | 音调     |
 * | loop   | 设置循环 |
 * | play   | 设置播放 |
 * | pause  | 设置暂停 |
 * 
 * + [参数]-target
 *   - 声音目标事件的事件id
 *   - 声音目标事件的位置作为音源中心
 *   - 数值，事件id
 * + [参数]-name
 *   - 音乐文件名
 *   - 文件路径为 `audio/bgs/`
 * + [参数]-dist
 *   - 声音可听范围的最大距离限制
 *   - 同 【标签设置】-【为自身事件设置一个音源】-dist
 * + [参数]-volume
 *   - 音量，最大音量
 *   - 数值，0 - 100
 * + [参数]-pan
 *   - 音像
 *   - 数值，0 - 100
 * + [参数]-pitch
 *   - 音调
 *   - 数值，0 - 100
 * + [参数]-loop
 *   - 设置是否循环
 *   - 同 【标签设置】-【为自身事件设置一个音源】-play
 * + [参数]-play
 *   - 设置播放状态
 *   - 同 【标签设置】-【为自身事件设置一个音源】-loop
 * + [参数]-pause
 *   - 设置暂停状态
 *   - 区别于[停止]，暂停后可以继续原位置播放，而停止不行
 *   - 有`continue`和`pause`两种可选值，不区分大小写
 *   - `continue` : 继续
 *   - `pause` : 暂停
 *   - 在地图场景活动时会自动继续播放
 *   - 在地图场景冻结时会自动暂停
 *   - 一般的停止播放应该使用 `play off`
 * 
 * #### 获取播放状态
 * 该插件指令可以获取【声音配置事件】的声音配置  
 * 将获取值储存到 变量或开关 中  
 * 
 * * `CheckSound 事件id [key] 变量id或开关id`
 *   * 检查是否正在播放 存进开关1 : `CheckSound 6 play 1`
 * + CheckSound
 *   - 主命令
 *   - 固定写法，区分大小写
 * + 事件id
 *   - 同 【设置音源参数】 - 【事件id】
 * + [key]
 *   - 需要获取的参数的参数名
 *   - 同 【设置音源参数】 - 【[key]】
 * + 变量id或开关id
 *   - 指定 接受获取的参数的参数值 的 变量或开关
 *   - 获取的类型和值 见[参数]
 *   - 数值，变量id或开关id
 * + [参数]
 * | key    | type | value          |
 * | :----- | :--- | :-----------   |
 * | target | 变量 | 声音目标事件id |
 * | name   | 变量 | 音乐文件名     |
 * | dist   | 变量 | 最大距离限制   |
 * | volume | 变量 | 音量           |
 * | pan    | 变量 | 音像           |
 * | pitch  | 变量 | 音调           |
 * | loop   | 开关 | 是否循环 (循环 ON  / 一次 OFF) |
 * | play   | 开关 | 是否播放 (播放 ON  / 停止 OFF) |
 * | pause  | 开关 | 是否暂停 (继续 OFF / 暂停 ON ) | 
 * 
 * 
 * ## 其他说明
 * 
 * #### 声音配置事件 与 音源事件
 * 声音配置文件 用于储存声音配置和控制播放等  
 * 音源事件 以事件位置作为音源计算与角色的距离 距离越远声音音量越小  
 * 
 * 
 * ## 后续任务
 * 
 * - [ ] 声音配置不再储存在事件里
 * 
 * 
 * ## 联系方式
 * [Twitter] https://twitter.com/_MikanHako/  
 * -[GitHub] https://github.com/MikanHako1024/  
 * ---[Blog] Coming Soon  
 * -----[QQ] 312859582  
 * 
 * 
 * ## 使用规约
 * MIT License  
 * Copyright (C) 2020-2021 Mikan(MikanHako)  
 * http://opensource.org/licenses/mit-license.php  
 * 
 * 本插件使用 MIT协议  
 * 这意味着：  
 * 1. 任何人可以使用、修改、复制、分发本插件。
 * 2. 使用形式不受限制，可以用于交流学习或者用于商用。
 * 3. 插件原作者不对使用本插件的创作作品做担保和负责。
 * 4. 在插件和插件的所有副本中都必须包含以上版权声明和本许可声明。
 * 
 * --------------------------------
 * ENDLINE
 * 
 */




// 暂时只支持 根据 事件坐标与玩家坐标的距离


// 暂时使用 线性公式 计算声音减弱


// 暂时不清楚 是否会因为 不清除事件的 bgsBuffer 导致内存堆积


// FINISH : 更换音乐


// 暂时不能 自动在事件消失时停止音乐



// ？有时候不能播放音乐 ...



// ？存档时 会记录 $gameMap 包括 拥有的 Game_Event 及事件的 _bgsBuffer ...
// ？读档时 事件不会再 initialize 但是其 _bgsBuffer 不能再使用 ...


// ？独立存放管理 bgsBuffer ...

// ？记录每个 bgs 进列表 ...


// ？用一个空事件来存储数据 ...



// TODO : 用独立开关的形式新增储存数据 使得可以保存



function MK_SoundSourceManager() {
    throw new Error('This is a static class');
}

var MK_Plugins = MK_Plugins || {};
MK_Plugins.paramGet = MK_Plugins.paramGet || {};
MK_Plugins.param = MK_Plugins.param || {};
MK_Plugins.class = MK_Plugins.class || {};

MK_Plugins.class['MK_SoundSourceManager'] = MK_SoundSourceManager;



MK_SoundSourceManager._soundBufferList = [];
MK_SoundSourceManager._soundList       = [];


MK_SoundSourceManager.addSound = function(sound) {
	if (!sound) return ;

	var bgs = sound;

	if (!bgs.name) return null;
	var bgsBuffer = AudioManager.createBuffer('bgs', bgs.name);
	AudioManager.updateBufferParameters(bgsBuffer, AudioManager._bgsVolume, bgs);

	var index = this._soundBufferList.push(bgsBuffer) - 1;
	this._soundList.push(bgs) - 1;
	bgs.index = index;

	return bgsBuffer;
};

MK_SoundSourceManager.removeAllSound = function() {
	//this.stopAllSound();
	this.pauseAllSound(); // ？暂停之前的音乐 防止之后还在播放 ...
	this._soundBufferList = [];
	this._soundList       = [];
};

MK_SoundSourceManager.removeSound = function(index) {
	var buffer = this._soundBufferList[index];
	buffer.stop();
	this._soundBufferList[index] = undefined;
	this._soundList[index] = undefined;
};


MK_SoundSourceManager.pullStatus = function(sound) {
	if (!sound) return ;
	if (this._soundList[sound.index] !== sound) return ;

	var index = sound.index;
	var buffer = this._soundBufferList[index];

	sound.pos  = !!buffer ? buffer.seek() : 0;
	//sound.play = !!buffer ? buffer.isPlaying() : false; 
		// ？不循环时 会自动结束 需要拉取状态 ...
	// ？暂停时 播放状态 也是 false ...
	// ？此时不能 设置 play 为 false ...
	//sound.play = !!buffer ? (buffer.isPlaying() || !!sound.pause) : false; 
	//	// ？isPlaying 为 false 时 若 pause 为 true 则不改变 play 即 true ...
	// ？错了 ...
	// ？在 停止时 即 play 为 false 时 自然也有 buffer.isPlaying() 为 false ...
	// ？若 场景结束 导致暂停 即 pause 为 true 则会计算得到 true 出错 ...
	// ？play  pause  playing  result ...
	// ？ T      T       F        T (？暂停导致结束播放 play 仍为 true ...)
	// ？ F      T       F        F (？停止时暂停 ...)
	// ？...
	// 
	// ？详细分析所有可能 ...
	// ？play  pause  playing  result ...
	// ？ T      T       T        ?
	// ？ T      T       F        T
	// ？ T      F       T        T
	// ？ T      F       F        F
	// ？ F      T       T        ?
	// ？ F      T       F        F
	// ？ F      F       T        T
	// ？ F      F       F        F
	// ？不暂停时 直接拉取 playing ...
	// ？暂停时 不管 playing 保留 play ...
	sound.play = sound.pause ? sound.play
			      : (!!buffer ? buffer.isPlaying() : false);


	//sound.pos = !sound.play ? 0 : sound.play;
	sound.pos = !sound.play ? 0 : sound.pos;
		// ？若结束播放 需要把 pos 恢复为 0 ...
		// ？否则 不循环时 结束音乐再播放 不能重新开始 ...
			// ？pushStatus 时 会读到 sound.pos ...

	// ...
};

MK_SoundSourceManager.pushStatus = function(sound) {
	if (!sound) return ;
	if (this._soundList[sound.index] !== sound) return ;

	var index = sound.index;
	var buffer = this._soundBufferList[index];
	//if (!buffer) return ;
	if (!buffer) {
		buffer = AudioManager.createBuffer('bgs', sound.name);
		AudioManager.updateBufferParameters(buffer, AudioManager._bgsVolume, sound);
		this._soundBufferList[index] = buffer;
	} // 待 测试

	var settoPlay  = sound.play && !sound.pause;
	var settoPause = sound.pause;
	var settoLoop  = sound.loop;
	//var nowPlay    = !!buffer ? buffer.isPlaying() : false;
	var nowPlay    = buffer.isPlaying();
	//var nowPos     = !!buffer ? buffer.seek() : 0;
	var nowPos     = buffer.seek();
	var settoPos   = nowPlay ? nowPos : sound.pos;

	var tmpBuffer = AudioManager.createBuffer('bgs', sound.name);
	if (tmpBuffer.url !== buffer.url) { // 更换了bgs
		buffer.stop();
		buffer = tmpBuffer;
		AudioManager.updateBufferParameters(buffer, AudioManager._bgsVolume, sound);
		this._soundBufferList[index] = buffer;
	}

	if (settoPlay) {
		buffer.play(settoLoop, settoPos);
	}
	else {
		if (settoPause) {
			sound.pos = nowPos;
			buffer.stop();
		}
		else {
			sound.pos = 0;
			buffer.stop();
		}
	}

	// ...
};


MK_SoundSourceManager.stopAllSound = function() {
	this._soundList.forEach(function(sound) {
		if (!sound) return ;
		sound.play = false;
		this.pushStatus(sound);
	}, this);
};

MK_SoundSourceManager.pauseAllSound = function() {
	this._soundList.forEach(function(sound) {
		if (!sound) return ;
		sound.pause = true;
		this.pushStatus(sound);
	}, this);
};

MK_SoundSourceManager.continueAllSound = function() {
	this._soundList.forEach(function(sound) {
		if (!sound) return ;
		sound.pause = false;
		this.pushStatus(sound);
	}, this);
};


//MK_SoundSourceManager.refreshAddAllSound = function() {
//	this._soundList.forEach(function(sound, idx) {
//		if (!sound) return ;
//		this._soundList[idx] = $gameMap.event(sound.configerId)._bgs;
//		this.pushStatus(sound);
//	}, this);
//};


// ？检查是否因为 切换场景 或 读档 ...
// ？导致 Game_Event 的 bgs 和 MK_SoundSourceManager 的 bgs 不再相同 ...
// ？检查刷新 或 不要 MK_SoundSourceManager 的 bgs ...
MK_SoundSourceManager.checkLossSound = function(sound) {
	if (!sound) return ;

	var index = sound.index;
	if (this._soundList[index] !== sound) {
		this._soundList[index] = sound;
		this.pushStatus(sound);
	}
};

MK_SoundSourceManager.checkAllLossSound = function() {
	$gameMap._events.forEach(function(event) {
		if (!event || !event._bgs) return ;
		this.checkLossSound(event._bgs);
	}, this);
};

MK_SoundSourceManager.checkAllRetainSound = function() {
	this._soundList.forEach(function(sound, idx) {
		if (!sound) return ;
		var event = $gameMap.event(sound.configerId);
		if (!event || !event._bgs) {
			this.removeSound(idx);
		}
	}, this);
};


MK_SoundSourceManager.calDistToPlayer = function(targetId) {
	var target = $gameMap.event(targetId);

	if (!target) return Number.POSITIVE_INFINITY;
	return Math.sqrt(
		  Math.pow($gamePlayer._realX - target._realX, 2) 
		+ Math.pow($gamePlayer._realY - target._realY, 2)
	);
};

MK_SoundSourceManager.calVolumeRate = function(sound) {
	var targetId = sound.targetId;
	var nowDist  = this.calDistToPlayer(targetId);
	var lmtDist  = sound.dist;

	//var rate = Math.max(0, Math.min(1,
	//		 1 - this.calDistToPlayer() / this._soundDist));
	// ？改 先除法再限制范围 为 先限制范围再除法 ...
	// ？还要考虑 lmtDist 为 0 的情况 ...
	var dist = Math.max(0, Math.min(lmtDist, nowDist));
	var rate = lmtDist === 0
			   ? (nowDist === 0 ? 1 : 0) 
			   : (1.0 - dist / lmtDist);

	sound.vRate = rate;
};

MK_SoundSourceManager.updateBufferWithDist = function(sound) {
	if (!sound) return ;
	if (this._soundList[sound.index] !== sound) return ;

	var index = sound.index;
	var buffer = this._soundBufferList[index];

	//AudioManager.updateBufferParameters(
	//	buffer, AudioManager._bgsVolume, sound);    

	var configVolume = AudioManager._bgsVolume;
	buffer.volume = configVolume * (sound.volume * sound.vRate || 0) / 10000;
    buffer.pitch  = (sound.pitch || 0) / 100;
    buffer.pan    = (sound.pan || 0) / 100;
};


MK_SoundSourceManager.formatSound = function(sound) {
	//if (typeof sound !== 'object') sound = {};
	if (typeof sound !== 'object') AudioManager.makeEmptyAudioObject();


	var targetId = sound.targetId;
	targetId = Math.floor(Number(targetId || 0));
	targetId = targetId <= 0 ? 0 : targetId;
	sound.targetId = targetId;

	var name = sound.name;
	name = String(name) || '';
	sound.name = name;

	// soundMode 暂时只有 bgs

	var dist = sound.dist;
	dist = Number(dist || 'inf');
	dist = Number.isNaN(dist) ? Number.POSITIVE_INFINITY : dist;
	dist = (dist < 0 && dist != -1) ? Number.POSITIVE_INFINITY : dist;
	sound.dist = dist;

	var volume = sound.volume;
	var volume = Number(volume || '90');
	volume = Number.isNaN(volume) ? 90 : volume;
	volume = Math.max(0, volume);
	sound.volume = volume;

	var pan = sound.pan;
	pan = Number(pan || '0');
	pan = Math.max(0, pan);
	sound.pan = pan;
	
	var pitch = sound.pitch;
	pitch = Number(pitch || '100');
	pitch = Number.isNaN(pitch) ? 100 : pitch;
	pitch = Math.max(0, pitch);
	sound.pitch = pitch;


	var pos = sound.pos;
	pos = Math.floor(Number(pos || '0'));
	pos = Number.isNaN(pos) ? 0 : pos;
	pos = Math.max(0, pos);
	sound.pos = pos;

	var loop = sound.loop;
	loop = typeof loop === 'undefined' ? true : loop;
	loop = typeof loop === 'string' ? !loop.match(/(false|only)/i) : !!loop;
	sound.loop = loop;

	var play = sound.play;
	play = typeof play === 'undefined' ? true : play;
	play = typeof play === 'string' ? !play.match(/(false|off)/i) : !!play;
	sound.play = play;

	var pause = sound.pause;
	pause = typeof pause === 'undefined' ? false : pause;
	pause = typeof pause === 'string' ? !!pause.match(/(true|pause)/i) : !!pause;
	sound.pause = pause;

	var index = sound.index;
	index = index !== 0 ? Math.floor(Number(index || '-1')) : index;
	index = Number.isNaN(index) ? -1 : index;
	index = index < -1 ? -1 : index;
	sound.index = index;

	var vRate = sound.vRate;
	vRate = Number(vRate || '0');
	vRate = Number.isNaN(vRate) ? 0 : vRate;
	vRate = Math.min(1, Math.max(0, vRate));
	sound.vRate = vRate;

	var configerId = sound.configerId;
	configerId = Math.floor(Number(configerId || 0));
	configerId = configerId <= 0 ? 0 : configerId;
	sound.configerId = configerId;


	return sound;
};



var _MK_Game_Event_initialize   = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function() {
	_MK_Game_Event_initialize.apply(this, arguments);
	//this._bgsBuffer = null;
	this.createEventSound();
	//this.playEventSound();
};

var _MK_Game_Event_update   = Game_Event.prototype.update;
Game_Event.prototype.update = function() {
	_MK_Game_Event_update.apply(this, arguments);
	this.updateEventSound();
};


Game_Event.prototype.createEventSound = function() {

	var note = this.event().note || '';
	var matchResult = note.match(/<(Sound|SetSound) *:(.*?)>/i);
	if (!!matchResult) {
		//var args = matchResult[1].split(' ')
		//						 .filter(function(str) { return !!str; });
		var args = matchResult[2].split(',')
								 .map(function(str) { return str.trim(); })
								 .filter(function(str) { return !!str; });
		var command = matchResult[1] || '';

		/*
		var targetId  = !!command.match(/SetSound/i) 
						  //? Number(args[0]) || this.eventId()
						  ? Number(args.shift()) || this.eventId()
						  : this.eventId();
		// ？SetSound : 把 音乐存储、更新 和 目标事件本身 分离 ...
			// ？控制 和 目标 分离 的思想 ...
		// ？为了防止占用事件的备注栏 ...


		var soundName = String(args[0]) || '';

		//var soundMode = String(args[1]) || ''; 
			// 暂时只有 bgs

		//var soundDist = Number(args[1]) || Number.POSITIVE_INFINITY; 
		// ？<0, =0 的情况...
		var soundDist = Number(args[1] || 'inf');
		soundDist = Number.isNaN(soundDist) ? Number.POSITIVE_INFINITY : soundDist;
		//soundDist = soundDist < 0 ? Number.POSITIVE_INFINITY : soundDist;
		soundDist = (soundDist < 0 && soundDist != -1) ? Number.POSITIVE_INFINITY : soundDist;
			// ？允许 -1 表示 无声 ...
			// ？注意 ==0 的情况 ...

		//var soundVolm = Number(args[2]) || '90'; // ？这样不能是 0 ...
		//var soundVolm = Number(args[2] || '90'); // ？这样不能是 非数字 ...
		var soundVolm = Number(args[2] || '90');
		soundVolm = Number.isNaN(soundVolm) ? 90 : soundVolm;
		
		//var soundPan  = Number(args[3]) || '0';
		var soundPan  = Number(args[3] || '0');
		
		//var soundPit  = Number(args[4]) || '100';
		var soundPit  = Number(args[4] || '100');
		soundPit = Number.isNaN(soundPit) ? 100 : soundPit;


		var bgs = AudioManager.makeEmptyAudioObject();
		bgs.name   = soundName;
		bgs.volume = soundVolm;
		bgs.pan    = soundPan ;
		bgs.pitch  = soundPit ;

		bgs.pos    = 0        ;
		bgs.loop   = true     ;
		bgs.play   = true     ; // needPlay / not stop
		bgs.puase  = false    ;
		bgs.index  = -1       ;
		bgs.vRate  = 0        ; // 音量比率

		bgs.configerId = this.eventId(); // 控制者Id
		*/
		// ？写成 format 方法 ...

		var bgs = AudioManager.makeEmptyAudioObject();
		bgs.targetId = !!command.match(/SetSound/i) 
						 ? Number(args.shift()) || this.eventId()
						 : this.eventId();
		bgs.configerId = this.eventId(); // 控制者Id
		bgs.name     = args[0];
		bgs.dist     = args[1];

		bgs.play     = args[2];
		bgs.loop     = args[3];

		bgs.volume   = args[4];
		bgs.pan      = args[5];
		bgs.pitch    = args[6];
		bgs = MK_SoundSourceManager.formatSound(bgs);


		if (!!bgs.name) {

			/*
			this._bgsBuffer = AudioManager.createBuffer('bgs', bgs.name);
			AudioManager.updateBufferParameters(
				this._bgsBuffer, AudioManager._bgsVolume, bgs);
			//this._bgsBuffer.play(true, 0);

			//AudioManager.playBgs(bgs);
			//AudioManager.playBgm(bgs);

			this._targetId  = targetId;
			this._bgs       = bgs;
			this._soundDist = soundDist;
			this._soundVolm = soundVolm;
			this._soundPos  = 0;
			*/
			// ？把数据都放进 bgs ...

			this._bgs = bgs;
			MK_SoundSourceManager.addSound(this._bgs);
		}
	}
};


Game_Event.prototype.needEventSound = function() {
	return !!this._bgs;
};

Game_Event.prototype.updateEventSound = function() {

	//if (!!this._bgsBuffer) {
	if (this.needEventSound()) {

		//MK_SoundSourceManager.checkLossSound(this._bgs);
		// ？在 Scene_Map.start 时 全部检查完毕了 ...

		//var volumeRate = 
		//	this._soundDist === Number.POSITIVE_INFINITY 
		//	? 1 
		//	: Math.max(0, Math.min(1,
		//		 1 - this.calDistToPlayer() / this._soundDist));
		//this._bgs.volume = Math.floor(this._soundVolm * volumeRate);

		MK_SoundSourceManager.calVolumeRate(this._bgs);

		//AudioManager.updateBufferParameters(
		//	this._bgsBuffer, AudioManager._bgsVolume, this._bgs);

		MK_SoundSourceManager.updateBufferWithDist(this._bgs);

		MK_SoundSourceManager.pullStatus(this._bgs);
	}
};

/*
Game_Event.prototype.calDistToPlayer = function() {
	//return Math.sqrt(
	//	  Math.pow($gamePlayer._realX - this._realX, 2) 
	//	+ Math.pow($gamePlayer._realY - this._realY, 2)
	//);
	var target = $gameMap.event(this._targetId);
	if (!target) return Number.POSITIVE_INFINITY;
	return Math.sqrt(
		  Math.pow($gamePlayer._realX - target._realX, 2) 
		+ Math.pow($gamePlayer._realY - target._realY, 2)
	);
};
*/


/*
Game_Event.prototype.playEventSound = function(pos) {

	//if (!!this._bgsBuffer) {
	if (this.needEventSound()) {
		this._bgsBuffer.play(true, pos || 0);
	}
};

Game_Event.prototype.playOnlyEventSound = function(pos) {

	//if (!!this._bgsBuffer) {
	if (this.needEventSound()) {
		this._bgsBuffer.play(false || pos);
	}
};

Game_Event.prototype.continueEventSound = function() {

	this.playEventSound(this._soundPos);
};

Game_Event.prototype.continueOnlyEventSound = function() {

	this.playOnlyEventSound(this._soundPos);
};

Game_Event.prototype.stopEventSound = function() {

	//if (!!this._bgsBuffer) {
	if (this.needEventSound()) {
		this._bgsBuffer.stop();
	}
};

Game_Event.prototype.pauseEventSound = function() {

	//if (!!this._bgsBuffer) {
	if (this.needEventSound()) {
		this._soundPos = this._bgsBuffer.seek();
		this._bgsBuffer.stop();
	}
};
*/


var _MK_Scene_Map_stop   = Scene_Map.prototype.stop;
Scene_Map.prototype.stop = function() {
	_MK_Scene_Map_stop.apply(this, arguments);

	//this._events.forEach(function(e) {
	// ？事件不在 Scene 里 而在 $gameMap 和 $dataMap 里 ...
	//$gameMap._events.forEach(function(e) {
	//	!!e && e.pauseEventSound();
	//});

	//MK_SoundSourceManager.pauseAllSound();

	// ？结束时 直接 全部清除 ...
	//MK_SoundSourceManager.removeAllSound();

	// ？读档回到不同档位的同一个地图时 用这种判断是否存在和丢失的方法 会导致MK_SoundSourceManager数据不同 ...
	// ？所以还是需要全部清除和还原 ...
	// ？退出地图时会移除 同时会停止播放 ...
	MK_SoundSourceManager.removeAllSound();
};

var _MK_Scene_Map_start   = Scene_Map.prototype.start;
Scene_Map.prototype.start = function() {
	_MK_Scene_Map_start.apply(this, arguments);
	
	//this._events.forEach(function(e) {
	//$gameMap._events.forEach(function(e) {
	//	!!e && e.continueEventSound();
	//});
	
	//MK_SoundSourceManager.refreshAddAllSound();
	//MK_SoundSourceManager.checkAllLossSound();
	//	// ？在继续播放前 要检查丢失 ...

	//MK_SoundSourceManager.removeAllSound();
	//MK_SoundSourceManager.checkAllLossSound();
	//	// ？每次开始时 清空后再添加 ...

	//MK_SoundSourceManager.checkAllRetainSound();
	//MK_SoundSourceManager.checkAllLossSound();
	//	// ？不全部清除 检查没有对应的事件即可 没有则删除 ...
	//
	//MK_SoundSourceManager.continueAllSound();

	// ？读档回到不同档位的同一个地图时 用这种判断是否存在和丢失的方法 会导致MK_SoundSourceManager数据不同 ...
	// ？所以还是需要全部清除和还原 ...
	// ？回到地图时 检查丢失的sound 从game_event重新找bgs ...
	MK_SoundSourceManager.checkAllLossSound();
	MK_SoundSourceManager.continueAllSound();
	// TODO : 做其他测试
};




var _MK_Game_Interpreter_pluginCommand   = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_MK_Game_Interpreter_pluginCommand.apply(this, arguments);

	if (!(command === 'SetSound' || 
		  command === 'ModifySound' || 
		  command === 'CheckSound')) {
		return ;
	}

	var configerId = Math.floor(Number(args[0] || '0'));
	if (configerId <= 0) return ;
	var event = $gameMap.event(configerId);
	if (!event || !event._bgs) return ;
	var sound = event._bgs;

	var key = String(args[1] || '');
	var value = args[2];

	var list = [
		['targetId', /target/i, false], 
		['name'    , /name/i  , false], 
		['dist'    , /dist/i  , false], 
		['volume'  , /vol/i   , false], 
		['pan'     , /pan/i   , false], 
		['pitch'   , /pitch/i , false], 
		['pos'     , /pos/i   , false], 
		['loop'    , /loop/i  , true ], 
		['play'    , /play/i  , true ], 
		['pause'   , /pause/i , true ],
	];

	for (var idx in list) {
		if (!!key.match(list[idx][1])) {
			key = list[idx][0];
				
			if (command === 'SetSound' || command === 'ModifySound') {
				sound[key] = value;
				MK_SoundSourceManager.formatSound(sound);
				MK_SoundSourceManager.pushStatus(sound);
			}
			else if (command === 'CheckSound') {
				value = Math.floor(Number(value || '0'));
				value = Number.isNaN(value) ? 0 : value;
				if (value <= 0) return ;

				var isSwitch = list[idx][2];
				var id = value;
				var gameList = isSwitch ? $gameSwitches : $gameVariables;
				gameList.setValue(id, sound[key]);
			}

			break;
		}
	}
};




