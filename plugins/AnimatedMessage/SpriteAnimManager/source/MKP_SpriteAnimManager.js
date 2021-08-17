// ================================================================
// MKP_SpriteAnimManager.js
// 精灵动画管理器
// ================================================================
//  author : Mikan(MikanHako)
//  plugin : MKP_SpriteAnimManager.js 精灵动画管理器
// version : v0.2.0 2021/08/17 更新框架
// ----------------------------------------------------------------
// [Twitter] https://twitter.com/_MikanHako/
// -[GitHub] https://github.com/MikanHako1024/
// ---[Blog] Coming soon
// -----[QQ] 312859582
// ================================================================
// MIT License
// Copyright (C) 2020-2021 Mikan(MikanHako)
// http://opensource.org/licenses/mit-license.php
// ================================================================




/*:
 * @plugindesc 精灵动画管理器 <MKP_SpriteAnimManager>
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.2.0.branch1 2021/08/17 清理冗余注释
 *   v0.2.0 2021/08/17 更新框架
 *     分离出 处理精灵动画播放效果的框架和所有的精灵动画类 作为新插件MKP_SpriteAnimationSet
 *   v0.1.1 2021/08/16 更新插件说明及规约
 *   v0.1.0 2020/11/11 完成基本框架和功能的demo
 *     把最初的MK_AnimatedMessage分成了MK_SpriteAnimManager和MK_TextSprite
 *   v0.0.0 2020/08/20 项目计划中
 * 
 * 
 * 
 * 
 * @help
 * 
 * 精灵动画管理器 <MKP_SpriteAnimManager>
 * 
 * 
 * ## 简要说明
 * 
 * 完成精灵动画功能的三个插件之一  
 * + 插件`MKP_SpriteAnimationSet`
 *   - 提供处理精灵动画播放的效果的类
 * + 插件`MKP_SpriteAnimManager`(本插件)
 *   - 用来设置动画和动画参数
 * + 插件`MKP_TextSprite`
 *   - 用来播放动画
 * 
 * 首先对动画进行配置，
 * 每个动画id可以指定一个基础动画，并且可以配置一组参数，操作详见 【插件指令】
 * 之后在编辑消息使用特殊字串触发一些播放动画的操作，详见 插件`MKP_TextSprite`
 * 
 * #### 动画id
 * 动画分为基础动画和自定义参数动画  
 * + 基础动画拥有固定的默认参数，id分布在0~99  
 * + 自定义参数动画可以指定一个基础动画，并使用自己设置的参数，id分布在100及以后  
 * 
 * #### 动画参数
 * 可以在插件参数中配置初始动画参数  
 * + 每条配置：有一个动画id，一个基础动画id，和一组参数
 * + 每条参数：有一个参数序号或一个参数名，和一个参数值
 * 也可以通过插件指令，在游戏中修改动画参数，详见 【插件指令】  
 * 
 * 在游戏中进行的修改并不会保存，
 * 这里的建议是，在插件参数中配置需要大量使用的固定的参数组，需要使用时直接使用对应id即可  
 * 
 * 
 * ## 使用方法
 * 
 * 导入 完成精灵动画功能的三个插件  
 * + MKP_SpriteAnimationSet
 * + MKP_SpriteAnimManager
 * + MKP_TextSprite
 * 
 * 使用插件参数或插件指令对动画进行设置，
 * 再使用 插件`MKP_TextSprite` 播放动画  
 * 
 * 
 * ## 插件指令
 * 
 * | description            | command |
 * | :----------------      | :------ |
 * | 设置或清除用户动画     | `AnimMgr setAnim 用户动画id 默认动画id` |
 * | 设置动画参数(按序号)   | `AnimMgr setParam 动画id 参数序号 参数值` |
 * | 设置动画参数(按参数名) | `AnimMgr setParamByKey 动画id 参数名 参数值` |
 * | 设置动画参数(所有参数) | `AnimMgr setParams 动画id 参数值1 参数值2 参数值3 ..` |
 * | 清除动画的全部参数     | `AnimMgr clearparams 动画id` |
 * 
 * #### 设置或清除用户动画
 * 设置一个用户动画，这个动画使用默认动画的模板，并且可以配置参数  
 * 
 * * `AnimMgr setAnim 用户动画id 默认动画id`
 * + AnimMgr
 *   - 主命令
 *   - 固定写法，不区分大小写
 * + setAnim
 *   - 子命令
 *   - 固定写法，不区分大小写
 * + 用户动画id
 *   - 所设置的用户动画的id
 *   - 数值，用户动画id，大于100
 * + 默认动画id
 *   - 作为模板的默认动画的id
 *   - 数值，默认动画id，小于99，大于等于0
 *   - 当设置为0时，表示清除用户动画
 * 
 * #### 设置动画参数(按序号)
 * 设置用户动画的一个参数的值  
 * 用 【其他说明】-【动画列表】 中的 [参数序号] 指定参数  
 * 
 * * `AnimMgr setParam 动画id 参数序号 参数值`
 * + AnimMgr
 * + setParam
 *   - 子命令
 *   - 固定写法，不区分大小写
 * + 动画id
 *   - 需要设置参数的用户动画的id
 *   - 同 【设置或清除用户动画】-【用户动画id】
 * + 参数序号
 *   - 需要设置的参数的序号
 *   - 数值，详见 【其他说明】-【动画列表】 的 [参数序号]
 * + 参数值
 *   - 需要设置的参数值
 *   - 数值或字串，详见 【其他说明】-【动画列表】 的 [参数类型]
 * 
 * #### 设置动画参数(按参数名)
 * 设置用户动画的一个参数的值  
 * 用 【其他说明】-【动画列表】 中的 [参数名] 指定参数  
 * 
 * * `AnimMgr setParamByKey 动画id 参数名 参数值`
 * + AnimMgr
 * + setParamByKey
 *   - 子命令
 *   - 固定写法，不区分大小写
 * + 动画id
 *   - 同 【设置动画参数(按序号)】-【动画id】
 * + 参数序号
 *   - 需要设置的参数的参数名
 *   - 数值，详见 【其他说明】-【动画列表】 的 [参数名]
 * + 参数值
 *   - 同 【设置动画参数(按序号)】-【参数值】
 * 
 * #### 设置动画参数(所有参数)
 * 设置用户动画的所有参数的值  
 * 按 【其他说明】-【动画列表】 中参数的顺序，设置每个参数的值  
 * 
 * * `AnimMgr setParams 动画id 参数值1 参数值2 参数值3 ..`
 * + AnimMgr
 * + setParams
 *   - 子命令
 *   - 固定写法，不区分大小写
 * + 动画id
 *   - 同 【设置动画参数(按序号)】-【动画id】
 * + `参数值1 参数值2 参数值3 ..`
 *   - 需要设置的所有参数的参数值
 *   - 按 【其他说明】-【动画列表】 中的参数顺序 排列
 *   - 每个参数值用一个空格分隔
 *   - 数值或字串，详见 【其他说明】-【动画列表】 的 [参数名]
 * 
 * #### 清除动画的全部参数
 * 清除用户动画的所有参数的值，恢复到默认参数值  
 * 
 * * `AnimMgr clearparams 动画id`
 * + AnimMgr
 * + clearparams
 *   - 子命令
 *   - 固定写法，不区分大小写
 * + 动画id
 *   - 同 【设置动画参数(按序号)】-【动画id】
 * 
 * 
 * ## 脚本说明
 * 
 * TODO
 * 
 * 
 * ## 其他说明
 * 
 * #### 动画列表，详细说明和参数见插件`MKP_SpriteAnimationSet`
 * 注 : id 为 默认动画id  
 * | id | 动画效果 |
 * | :- | :------- |
 * |  1 | 淡入淡出 |
 * |  2 | 缩放     |
 * |  3 | 翻转     |
 * |  4 | 上下出现(未完成) |
 * |  5 | 震动     |
 * |  6 | 剧烈缩放 |
 * |  7 | 波浪缩放 |
 * |  8 | 旋涡     |
 * |  9 | 摇晃     |
 * | 10 | 随机     |
 * | 11 | 卡拉Ok   |
 * 
 * 
 * #### 对于简化设置决定的说明
 * 
 * 简化设置方面，有两种方案：  
 * 一是保存在游戏存档中  
 * 可以保存，所以在游戏开始时进行统一设置即可，这样可能会因为使用过期存档而失效  
 * 二是使用插件参数进行设置  
 * 这样每次启动会重置设置，所以不能保存，但是不会因为使用过期存档而失效  
 * 二者不能兼得。  
 * 
 * 这里使用方案二，原因如下：  
 * 考虑到 固定设置的情况 比 根据游戏情况需要调整设置的情况 多；  
 * 因为变数多，而使得保险起见会在使用前再次进行设置，所以使用到保存数据的设置的情况较少；  
 * 多次使用固定设置时，为了方便调整设置，不建议在每次使用前都进行设置，  
 * 作为代替的是，使用固定的一组设置，并把这组设置放在插件参数中。  
 * 
 * 
 * ## 后续任务
 * 
 * - [ ] 更准确地功能划分 : SpriteAnimManager 用来管理和播放动画，TextSprite 只用于支持绘制和动画等功能
 * 
 * 
 * ## 联系方式
 * [Twitter] https://twitter.com/_MikanHako/  
 * -[GitHub] https://github.com/MikanHako1024/  
 * ---[Blog] Coming soon  
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
 * 
 * 
 * 
 * @param ---- 游戏参数配置 ----
 * 
 * @param ---- 内容数据配置 ----
 * 
 * @param AnimParamsConfig
 * @text 动画参数配置
 * @desc 
 * @type struct<AnimParams>[]
 * @default []
 * 
 * @param ---- endline ----
 * 
 */
/*~struct~AnimParams:
 *
 * @param animCode
 * @text 动画id
 * @desc 
 * @type number
 * @default 100
 *
 * @param baseAnimCode
 * @text 基础动画id
 * @desc 
 * @type number
 * @default 0
 *
 * @param params
 * @text 
 * @desc 
 * @type struct<AnimParam>[]
 * @default []
 * 
 */
/*~struct~AnimParam:
 *
 * @param index
 * @text 
 * @desc 
 * @type number
 * @default 0
 *
 * @param key
 * @text 
 * @desc 
 * @type string
 * @default 
 *
 * @param value
 * @text 
 * @desc 
 * @type string
 * @default 
 * 
 */




// ？人物行走图动画也可以用这种动画框架 ...


// TODO : MK_SpriteAnimManager 里也能按 key 储存参数


// TODO : 更符合Karaoke的节奏
// 因为一个字内也可能节奏变化，所以不能用在字之间设置速度(宽/帧)的方法实现




var MK_Plugins = MK_Plugins || {};
MK_Plugins.paramGet    = MK_Plugins.paramGet || {};
MK_Plugins.param       = MK_Plugins.param || {};
MK_Plugins.paramParser = MK_Plugins.paramParser || {};
MK_Plugins.class       = MK_Plugins.class || {};
MK_Plugins.datas       = MK_Plugins.datas || {};

MK_Plugins.getPluginParam = MK_Plugins.getPluginParam ||
function (pluginName) {
	var param = PluginManager.parameters(pluginName);
	if (!param || JSON.stringify(param) === '{}') {
		var list = $plugins.filter(function (i) {
			return i.description.contains('<' + pluginName + '>');
		});
		for (var i = 0; i < list.length; i++) {
			var realPluginName = list[i].name;
			if (realPluginName !== pluginName)
				return PluginManager.parameters(realPluginName);
		}
		return {};
	}
	return param;
};




(function() {

	var pluginName = 'MKP_SpriteAnimManager';
	MK_Plugins.paramGet[pluginName] = MK_Plugins.getPluginParam(pluginName);
	MK_Plugins.param[pluginName] = {};
	MK_Plugins.paramParser[pluginName] = {};

	var paramGet    = MK_Plugins.paramGet[pluginName];
	var param       = MK_Plugins.param[pluginName];
	var paramParser = MK_Plugins.paramParser[pluginName];

	function parseAnimParam(str) {
		str = str || '{"index":0,"key":"","value":""}';
		var data = JSON.parse(str);
		data.index = Number(data.index ||  0);
		data.key   = String(data.key   || '');
		data.value = String(data.value || '');
		return data;
	}
	paramParser['parseAnimParam'] = parseAnimParam;

	function parseAnimParams(str) {
		str = str || '{"animCode":100,"baseAnimCode":0,"params":[]}';
		var data = JSON.parse(str);
		data.animCode     = Number(data.animCode     || 100);
		data.baseAnimCode = Number(data.baseAnimCode ||   0);
		data.params       = JSON.parse(data.params || '[]');
		for (var i = 0; i < data.params.length; i++) {
			data.params[i] = parseAnimParam(data.params[i]);
		}
		return data;
	}
	paramParser['parseAnimParams'] = parseAnimParams;

	function getAnimParamsConfig(str) {
		str = str || '[]';
		var data = JSON.parse(str);
		for (var i = 0; i < data.length; i++) {
			data[i] = parseAnimParams(data[i]);
		}
		return data;
	}
	paramParser['getAnimParamsConfig'] = getAnimParamsConfig;

	param['animParamsConfig'] = getAnimParamsConfig(paramGet['AnimParamsConfig'] || '[]');

})();




// ----------------------------------------------------------------
// MK_SpriteAnimManager
// 文本动画管理器

function MK_SpriteAnimManager() {
    throw new Error('This is a static class');
};


// --------------------------------
// 动画编号映射表

// 映射表MapTable 映射值Mapping
// 映射表分为基础映射表和用户映射表
// 基础映射表序号分布为 0 到 99(MAX_ANIM_SIZE)
// 用户映射表序号分布为 100(MAX_ANIM_SIZE+1)以后
// 基础映射表为所有基础动画(系统动画)的code->key映射
// 用户映射表为用户设定的uCode->bCode(基础动画code)

MK_SpriteAnimManager.EMPTY_ANIM_CODE = 0;

// 基础映射表
MK_SpriteAnimManager._baseAnimMapTable = [
	// Empty
	'', 		// 0

	// MOG_AnimterdText
	'fade', 	// 1
	'zoom', 	// 2
	'zoom2', 	// 3
	'wipe', 	// 4
	'shake', 	// 5
	'zoom3', 	// 6
	'wave', 	// 7
	'rotation', // 8
	'swing', 	// 9
	'random', 	// 10

	// added
	'karaoke', 		// 11 // TODO
];
MK_SpriteAnimManager.getBaseMapTable = function() {
	return this._baseAnimMapTable;
};

// 用户映射表
MK_SpriteAnimManager._userAnimMapping = [];
MK_SpriteAnimManager.getUserMapTable = function() {
	return this._userAnimMapping;
};

// TODO : 保存映射表
// 暂时不保存

MK_SpriteAnimManager.MAX_ANIM_SIZE = 99;
MK_SpriteAnimManager.maxAnimSize = function() {
	return this.MAX_ANIM_SIZE;
};
MK_SpriteAnimManager.isBaseMappingCode = function(code) {
	return code <= this.maxAnimSize();
};
MK_SpriteAnimManager.isUserMappingCode = function(code) {
	return code > this.maxAnimSize();
};

MK_SpriteAnimManager.setUserMapping = function(uCode, bCode) {
	if (this.isUserMappingCode(uCode) && this.isBaseMappingCode(bCode)) {
		this.getUserMapTable()[uCode] = bCode;
	}
};
MK_SpriteAnimManager.getUserMapping = function(uCode) {
	if (this.isUserMappingCode(uCode)) {
		var bCode = this.getUserMapTable()[uCode];
		if (this.isBaseMappingCode(bCode)) {
			return bCode;
		}
	}
	return this.EMPTY_ANIM_CODE;
};

// TODO : ？用RM的变量指定 ...



// --------------------------------
// ？动画编号映射

MK_SpriteAnimManager.codeToAnim = function(code) {
	if (this.isUserMappingCode(code)) {
		return this.getBaseMapping(this.getUserMapping(code));
	}
	else if (this.isBaseMappingCode(code)) {
		return this.getBaseMapping(code);
	}
	else {
		return this.EMPTY_ANIM_CODE;
	}
};



// --------------------------------
// 动画参数

// 每个动画的参数列表
// 基础动画的参数值为默认参数值，不可修改
// 用户动画的参数值默认为对应基础动画参数值，可以修改，不严格限制参数格式

// TODO : 保存参数

// TODO： 指定MV变量

// TODO : 改 索引列表储存 为 映射表存储

// ？基础动画参数，通过插件参数进行修改，用户自定义动画参数，通过插件指令进行修改 ...

MK_SpriteAnimManager._animParam = [];

MK_SpriteAnimManager.setAnimParam = function(code, index, value) {
	if (!this._animParam[code]) {
		this._animParam[code] = [];
	}
	this._animParam[code][index] = value;
};
MK_SpriteAnimManager.setAnimParams = function(code, values) {
	if (!Array.isArray(values)) {
		values = [values];
	}
	this._animParam[code] = values;
};

MK_SpriteAnimManager.getAnimParam = function(code, index) {
	if (!this._animParam[code]) return ;
	else return this._animParam[code][index];
};
MK_SpriteAnimManager.getAnimParams = function(code) {
	return this._animParam[code] || [];
};



// --------------------------------
// 参数 通过key

// 有 动画派生类列表 就可以获取 key->index 映射
MK_SpriteAnimManager.getParamIndex = function(code, key) {
	if (this.isUserMappingCode(code)) {
		code = this.getUserMapping(code);
	}
	animClass = this.getAnimClass(code);
	if (!!animClass) {
		//return animClass.getParamIndex(key);
		// ？getParamIndex不是类的静态方法 ...
		// ？暂时实例化一个类 以获取映射表 ...
		// TODO : 优化
		return (new animClass()).getParamIndex(key);
	}
	else {
		return key;
	}
};

MK_SpriteAnimManager.setAnimParamByKey = function(code, key, value) {
	var index = this.getParamIndex(code, key);
	this.setAnimParam(code, index, value);
};
MK_SpriteAnimManager.getAnimParamByKey = function(code, key) {
	var index = this.getParamIndex(code, key);
	return this.getAnimParam(code, index);
};



// --------------------------------
// 动画派生类列表

// ？暂时通过储存每个动画派生类的code及其对应的类 ...
// ？这样可以管理器通过code找到对应的类 ...
// ？于是可以使用对应类的key->index映射 ...

MK_SpriteAnimManager.getAnimClass = function(code) {
	return MK_SpriteAnimationSet.getSpriteAnimClassByCode(code);
};

MK_SpriteAnimManager.createSpriteAnimByRealCode = function(code) {
	var animClass = this.getAnimClass(code);
	if (!!animClass) {
		var args = [...arguments].splice(1);
		return new animClass(...args);
	}
	else {
		return null;
	}
};

MK_SpriteAnimManager.createSpriteAnim = function(code) {
	var bCode = this.isUserMappingCode(code) ? this.getUserMapping(code) : code;
	return this.createSpriteAnimByRealCode(bCode, code);
};



// --------------------------------
// 插件指令

(function () {

var _MK_Game_Interpreter_pluginCommand   = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
	_MK_Game_Interpreter_pluginCommand.apply(this, arguments);

	// AnimMgr
	if ((command || '').toLowerCase() === 'animmgr') {
		var comm = (args[0] || '').toLowerCase();
		if (comm === 'setanim') { // setAnim
			var uCode = Number(args[1] || 0);
			var bCode = Number(args[2] || 0);
			MK_SpriteAnimManager.setUserMapping(uCode, bCode);
			// 不会自动清除动画参数
		}
		else if (comm === 'setparam') { // setParam
			var code  = Number(args[1] || 0);
			var index = Number(args[2] || 0);
			var value = Number(args[3] || null);
			MK_SpriteAnimManager.setAnimParam(code, index, value);
		}
		else if (comm === 'setparambykey') { // setParamByKey
			var code  = Number(args[1] || 0);
			var key   = Number(args[2] || '');
			var value = Number(args[3] || null);
			MK_SpriteAnimManager.setAnimParamByKey(code, key, value);
		}
		else if (comm === 'setparams') { // setParams
			var code   = Number(args[1] || 0);
			var values = args.concat().splice(2);
			MK_SpriteAnimManager.setAnimParams(code, values);
		}
		else if (comm === 'clearparams') { // clearParams
			// 清除参数，既设置参数列表为空列表
			var code   = Number(args[1] || 0);
			var values = [];
			MK_SpriteAnimManager.setAnimParams(code, values);
		}
	}
};

})();



// --------------------------------
// 数据保存
/*
(function() {

// 制作保存内容
var _MK_DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
    var contents = _MK_DataManager_makeSaveContents.apply(this, arguments);
    contents.MK_SpriteAnimManager_UAnim = MK_SpriteAnimManager._userAnimMapping;
    contents.MK_SpriteAnimManager_Param = MK_SpriteAnimManager._animParam;
    return contents;
};

// 提取保存内容
var _MK_DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
    _MK_DataManager_extractSaveContents.apply(this, arguments);
    MK_SpriteAnimManager._userAnimMapping = contents.MK_SpriteAnimManager_UAnim || [];
    MK_SpriteAnimManager._animParam = contents.MK_SpriteAnimManager_Param || [];
};

})();
*/
// 与 通过插件参数配置 冲突，舍弃数据保存功能




// ----------------------------------------------------------------
// 写入动画参数

(function() {

	var pluginName = 'MKP_SpriteAnimManager';
	var param = MK_Plugins.param[pluginName];

	param['animParamsConfig'].forEach(function(animParams) {
		MK_SpriteAnimManager.setUserMapping(animParams.animCode, animParams.baseAnimCode);
		animParams.params.forEach(function(params) {
			if (!!params.key) {
				MK_SpriteAnimManager.setAnimParamByKey(
					animParams.animCode, params.key, params.value);
			}
			else {
				MK_SpriteAnimManager.setAnimParam(
					animParams.animCode, params.index, params.value);
			}
		});
	});

})();



