// ================================================================
// MKP_SpriteAnimManager.js
// 精灵动画管理器
// ================================================================
//  author : Mikan(MikanHako)
//  plugin : MKP_SpriteAnimManager.js 精灵动画管理器
// version : v0.3.2 2021/08/19 考虑绘制图标
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
 *   v0.3.2 2021/08/19 考虑绘制图标
 *   v0.3.1 2021/08/18 调整框架、及时清理对象、更详细的textState
 *     某些标签直接设置动画类对象的标签，不再写入TextSprite的标签
 *     消息框换页和关闭时，清理动画类对象和字母精灵类对象
 *     消息框的textState增加页数、行数、字数的状态
 *   v0.3.0-alpha 2021/08/18 更新框架 : TextSprite解耦
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
 * + 插件`MKP_TextSprite`
 *   - 支持播放动画
 * + 插件`MKP_SpriteAnimationSet`
 *   - 提供处理精灵动画播放的效果
 * + 插件`MKP_SpriteAnimManager`(本插件)
 *   - 用来设置动画和动画参数、处理消息框文字播放动画
 * 
 * 首先对动画进行配置，
 * 每个动画id可以指定一个基础动画，并且可以配置一组参数，操作详见 【插件指令】
 * 之后在编辑消息使用特殊字串触发一些播放动画的操作，详见 插件`MKP_TextSprite`
 * 
 * #### 动画id
 * 动画分为基础动画和自定义参数动画  
 * + 基础动画拥有固定的默认参数，id分布在0~100  
 * + 自定义参数动画可以指定一个基础动画，并使用自己设置的参数，id分布在101及以后  
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
 * 按顺序导入 完成精灵动画功能的三个插件  
 * + MKP_TextSprite
 * + MKP_SpriteAnimationSet
 * + MKP_SpriteAnimManager
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
 *   - 数值，用户动画id，大于等于101
 * + 默认动画id
 *   - 作为模板的默认动画的id
 *   - 数值，默认动画id，小于等于100，大于等于0
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
 * - [ ] 更新插件说明
 * - [ ] 调整基础动画和用户动画的code，使得不会冲突
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
 * @min 101
 * @default 101
 *
 * @param baseAnimCode
 * @text 基础动画id
 * @desc 
 * @type number
 * @min 0
 * @max 100
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
		str = str || '{"animCode":101,"baseAnimCode":0,"params":[]}';
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
// 基础映射表序号分布为 0 到 100(MAX_ANIM_SIZE)
// 用户映射表序号分布为 101(MAX_ANIM_SIZE+1)以后
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
// 暂时不用

// 用户映射表
MK_SpriteAnimManager._userAnimMapping = [];
MK_SpriteAnimManager.getUserMapTable = function() {
	return this._userAnimMapping;
};

// TODO : 保存映射表
// 暂时不保存

MK_SpriteAnimManager.MAX_ANIM_SIZE = 100;
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

// TODO : ？分开 基础动画 和 用户动画 的 code 范围 ...
// ？让用户动画可以使用任意code ...
// ？防止 当基础动画数量增长后 与之前设置的用户动画code 冲突 ...
// ？即 改 基础 : 0~100, 用户 : 101+ 为 基础 : 任意, 用户 : 任意 ...



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
// 创建文本动画对象

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
// 储存文本动画对象

MK_SpriteAnimManager._spriteAnimObjects = [];

MK_SpriteAnimManager.addSpriteAnimObject = function(code) {
	var spriteAnim = this.createSpriteAnim(code);
	this._spriteAnimObjects[code] = spriteAnim;
	// TODO : 考虑 占用同一 code 的问题
	return spriteAnim;
};

MK_SpriteAnimManager.getSpriteAnimObject = function(code) {
	return this._spriteAnimObjects[code];
};


// --------------------------------
// 清除文本动画对象

MK_SpriteAnimManager.clearSpriteAnimObject = function(code) {
	this._spriteAnimObjects[code] = null;
};
MK_SpriteAnimManager.clearAllSpriteAnimObject = function() {
	this._spriteAnimObjects.splice(0);
};

MK_SpriteAnimManager.clearSpriteAnimObjectByTextSprite = function(textSprite) {
	!!textSprite && this._spriteAnimObjects.forEach(function(spriteAnim, code) {
		if (textSprite.getTextSpriteAnimFlag('anim', code)) {
			this.clearSpriteAnimObject(code);
		}
	}, this);
};


// --------------------------------
// 精灵动画目标

// 添加新动画对象时，为其初始化字母精灵目标
//MK_SpriteAnimManager.initSpriteAnimTarget = function(spriteAnim, code, textSprite) {
// ？可以通过 spriteAnim.getAnimCode 获取 code ...
MK_SpriteAnimManager.initSpriteAnimTarget = function(spriteAnim, textSprite) {
	if (spriteAnim) {
		var code = spriteAnim.getAnimCode();
		//textSprite.filterLetterObjects(textSprite.animFlagFormat('add', code))
		textSprite.filterLetterObjectsByAnimFlag(code, 'add')
			.forEach(letterObj => spriteAnim.addTarget(letterObj.sprite, letterObj.data));
		// TODO : 使用 spriteAnim.setTargets 方法

		if (typeof spriteAnim.setMsgWindow === 'function') {
			spriteAnim.setMsgWindow(textSprite._msgWindow);
		}
		// TODO : 解耦 是否需要进行 setMsgWindow 应该由 spriteAnim 处理 ...
	}
};

// 添加新字母精灵时，为每个动画对象检查并添加字母精灵目标
MK_SpriteAnimManager.addNewSpriteAnimTarget = function(textSprite, letterObj) {
	this._spriteAnimObjects.forEach(
		function(spriteAnim, code) {
			if (spriteAnim) {
				//var key = textSprite.animFlagFormat('add', code);
				//if (letterObj.flag[key]) {
				if (textSprite.getLetterAnimFlag(letterObj, 'add', code)) {
					spriteAnim.addTarget(letterObj.sprite, letterObj.data);
				}
			}
		}, this);
};

(function() {

const _MK_MK_TextSprite_onAddLetterSprite = MK_TextSprite.prototype.onAddLetterSprite;
MK_TextSprite.prototype.onAddLetterSprite = function(letterObj) {
	_MK_MK_TextSprite_onAddLetterSprite.apply(this, arguments);
	MK_SpriteAnimManager.addNewSpriteAnimTarget(this, letterObj);
};

})();


// --------------------------------
// 设置精灵动画标签

//MK_SpriteAnimManager.setSpriteAnimFlag = function(code, flag, value) {
MK_SpriteAnimManager.setSpriteAnimFlag = function(flag, code, value) {
	var spriteAnim = this._spriteAnimObjects[code];
	if (spriteAnim) {
		flag = flag.slice(0, 1).toUpperCase() + flag.slice(1);
		var flagOn = value === undefined ? true : !!value;
		flagOn
			 ? spriteAnim.setAnimFlagOn(flag)
			 : spriteAnim.setAnimFlagOff(flag);
	}
};


// --------------------------------
// update

//MK_SpriteAnimManager.updateSpriteAnimtions = function() {
//	this._spriteAnimObjects.forEach(
//		spriteAnim => spriteAnim && spriteAnim.update());
//};

MK_SpriteAnimManager.updateSpriteAnimtions = function(textSprite) {
	//this.updateSpriteAnimtionsSetStatus(textSprite);
	this.updateSpriteAnimtionsFrameUpdate(textSprite);
};

MK_SpriteAnimManager.updateSpriteAnimtionsFrameUpdate = function(textSprite) {
	this._spriteAnimObjects.forEach(function(spriteAnim, code) {
		if (spriteAnim && textSprite.getTextSpriteAnimFlag('anim', code)) {
			spriteAnim.update();
		}
	});
};

/*
MK_SpriteAnimManager.updateSpriteAnimtionsSetStatus = function(textSprite) {
	this._spriteAnimObjects.forEach(function(spriteAnim, code) {
		//if (spriteAnim) {
		if (spriteAnim && textSprite.getTextSpriteAnimFlag('anim', code)) {
			[
				'Play', 
				'Pause', 
				'Continue', 
				'Stop', 
				'Init', 
			].forEach(flag => {
				if (textSprite.getTextSpriteAnimFlag(flag.toLowerCase(), code)) {
					spriteAnim.setAnimFlagOn(flag);
					textSprite.setTextSpriteAnimFlag(flag.toLowerCase(), code, false)
				}
			})
		}
	}, this);
};
*/

// ？和 精灵动画 SpriteAnim 耦合 ...
// ？想办法 解耦 ...

// ？控制字符调用时 不需要先设置 TextSprite对象 的标签 再更新到 SpriteAnim对象 的标签 ...
// ？而是直接设置 SpriteAnim对象 的标签 ...



// TODO : 想个办法 让 textsprite 使用的 动画不重复 ...
// ？动画不储存在 MK_SpriteAnimManager 里 ...

// ？因为 消息结束时 会清除动画 ...
// ？所以 如果只在 消息框里使用文本动画 且只有一个消息框的话 就不会有重复使用动画的问题 ...

// TODO : 再整理框架

// TODO : 清除动画


MK_Plugins.class['MK_SpriteAnimManager'] = MK_SpriteAnimManager;




// --------------------------------
// 插件指令

(function () {

const _MK_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
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
const _MK_DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
	var contents = _MK_DataManager_makeSaveContents.apply(this, arguments);
	contents.MK_SpriteAnimManager_UAnim = MK_SpriteAnimManager._userAnimMapping;
	contents.MK_SpriteAnimManager_Param = MK_SpriteAnimManager._animParam;
	return contents;
};

// 提取保存内容
const _MK_DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
	_MK_DataManager_extractSaveContents.apply(this, arguments);
	MK_SpriteAnimManager._userAnimMapping = contents.MK_SpriteAnimManager_UAnim || [];
	MK_SpriteAnimManager._animParam = contents.MK_SpriteAnimManager_Param || [];
};

})();
*/
// 与 通过插件参数配置 冲突，舍弃数据保存功能




// --------------------------------
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




// ----------------------------------------------------------------
// 修改 Window_Message

// ？TODO : 分离出 SpriteAnimationForMessageWindow ...

(function() {

// --------------------------------
// 初始化

const _MK_Window_Message__createAllParts = Window_Message.prototype._createAllParts;
Window_Message.prototype._createAllParts = function() {
	_MK_Window_Message__createAllParts.apply(this, arguments);
	this._infoTextSprite = new MK_TextSprite();
	this._windowContentsSprite.addChildAt(this._infoTextSprite, 0);
};

const _MK_Window_Message_createContents = Window_Message.prototype.createContents;
Window_Message.prototype.createContents = function() {
	_MK_Window_Message_createContents.apply(this, arguments);

	var textBitmap = new MK_TextBitmap(this.contentsWidth(), this.contentsHeight());
	textBitmap.setTextSprite(this._infoTextSprite);
	textBitmap.textModeOn();
	//textBitmap.textModeOff(); // ？默认关闭
	this.contents = textBitmap;

	this.resetFontSettings();

	// 改变了 this.contents.drawText
};

// TODO : 添加使用文本精灵模式的控制字符，以减少普通模式下的不稳定性


// --------------------------------
// update

const _MK_Window_Message_update = Window_Message.prototype.update;
Window_Message.prototype.update = function() {
	_MK_Window_Message_update.apply(this, arguments);
	//MK_SpriteAnimManager.updateSpriteAnimtions();
	MK_SpriteAnimManager.updateSpriteAnimtions(this._infoTextSprite);
	// TODO : windowMessage 的 textsprite 进行更新 且只更新自己的动画对象 ...
};

// ？TODO : 面向对象 ...


// --------------------------------
// 开始和结束消息

const _MK_Window_Message_startMessage = Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
	// 暂时
	//this._infoTextSprite.init();
	//this._infoTextSprite.clearAll();

	// ？开始时也要清除一次 ...
	// ？因为连续显示消息 不会关闭消息窗口 ...
	this.textAnim_clearTextSprite(); // TODO : 是否有必要
	//this._infoTextSprite.clearAll();

	// 把 messageWindow 的 textState 给他
	this._infoTextSprite.setMsgWindow(this);

	_MK_Window_Message_startMessage.apply(this, arguments);
};

/*
const _MK_Window_Message_newPage = Window_Message.prototype.newPage;
Window_Message.prototype.newPage = function(textState) {
	// ？newPage 时 会执行 this.contents.clear() ...
	// ？this.contents 是 TextBitmap 在 clear 时 清空 TextSprite 的 letter ...
	// ？此时还要 清空 SpriteAnim 的 target ...
	// TODO : TextSprite 是否需要 耦合 SpriteAnim 的 initTargets ...

	//this.textAnim_clearTextSprite();

	_MK_Window_Message_newPage.apply(this, arguments);
};
*/
// ？不需要 ...
// ？startMessage 时 会清除 TextSprite 同时也清除了 SpriteAnim ...
// ？所以之后必须要 再次创建 SpriteAnim ...

// 关闭时清除 TextSprite
/*
const _MK_Window_Message_updateClose = Window_Message.prototype.updateClose;
Window_Message.prototype.updateClose = function() {
	var noColsed = !this.isClosed();
	_MK_Window_Message_updateClose.apply(this, arguments);
	if (noColsed && this.isClosed()) {
		// 之前未完全关闭 现在完全关闭了
		//MK_SpriteAnimManager.clearSpriteAnimObjectByTextSprite(this._infoTextSprite);
		//this._infoTextSprite.clearAll();
		////MK_SpriteAnimManager.clearSpriteAnimObjectByTextSprite(this._infoTextSprite);
		//// ？要先清除 文本动画对象 在清除 文本精灵的标记 ...
		//// TODO : 清除方法 交给 this._infoTextSprite 执行
		this.textAnim_clearTextSprite();
	}
};
*/
// ？Window_Message对象 有 terminateMessage 方法 ...

const _MK_Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
Window_Message.prototype.terminateMessage = function() {
	_MK_Window_Message_terminateMessage.apply(this, arguments);
	this.textAnim_clearTextSprite();
};

Window_Message.prototype.textAnim_clearTextSprite = function() {
	MK_SpriteAnimManager.clearSpriteAnimObjectByTextSprite(this._infoTextSprite);
	this._infoTextSprite.clearAll();
	//MK_SpriteAnimManager.clearSpriteAnimObjectByTextSprite(this._infoTextSprite);
	// ？要先清除 文本动画对象 在清除 文本精灵的标记 ...
	// TODO : 清除方法 交给 this._infoTextSprite 执行
};


// --------------------------------
// 更详细的 textState

const _MK_Window_Message_newPage = Window_Message.prototype.newPage;
Window_Message.prototype.newPage = function(textState) {
	_MK_Window_Message_newPage.apply(this, arguments);
	textState.pageNum = (textState.pageNum || 0) + 1;
	textState.lineNum = 1;
	textState.textNum = 1;
};

const _MK_Window_Message_processNewPage = Window_Message.prototype.processNewPage;
Window_Message.prototype.processNewPage = function(textState) {
	_MK_Window_Message_processNewPage.apply(this, arguments);
	textState.pageNum++;
	textState.lineNum = 1;
	textState.textNum = 1;
};

const _MK_Window_Message_processNewLine = Window_Message.prototype.processNewLine;
Window_Message.prototype.processNewLine = function(textState) {
	_MK_Window_Message_processNewLine.apply(this, arguments);
	textState.lineNum++;
	textState.textNum = 1;
};

const _MK_Window_Message_processNormalCharacter = Window_Message.prototype.processNormalCharacter;
Window_Message.prototype.processNormalCharacter = function(textState) {
	_MK_Window_Message_processNormalCharacter.apply(this, arguments);
	textState.textNum++;
};

const _MK_Window_Message_processDrawIcon = Window_Message.prototype.processDrawIcon;
Window_Message.prototype.processDrawIcon = function(iconIndex, textState) {
	_MK_Window_Message_processDrawIcon.apply(this, arguments);
	textState.textNum++;
};


// --------------------------------
// 控制字符

const _MK_Window_Message_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
	switch (code) {

	// 消息中的obtainEscapeCode获取到的字母是大写字母，且是纯字母

	case 'TEXTANIM': // create text anim
		var param = this.obtainEscapeParam(textState);
		/*
		var code = param || 0;
		//this._infoTextSprite.addTextAnimByCode(code);
		var spriteAnim = MK_SpriteAnimManager.addSpriteAnimObject(code);
		MK_SpriteAnimManager.initSpriteAnimTarget(spriteAnim, code, this._infoTextSprite);
		// TODO : 可以从 spriteAnim 获取 code
		this.textAnim_setFlagAllowAddOn(code); // 默认开启
		this.textAnim_setAnimFlagOn(code);
		*/
		this.textAnim_createTextAnim(param || 0);
		break;

	case 'TAPLAY': // text anim play
		var param = this.obtainEscapeParam(textState);
		//this._infoTextSprite.setFlagPlayOn(param || 0);
		this.textAnim_setFlagPlayOn(param || 0);
		break;
	case 'TAPAUSE': // text anim pause
		var param = this.obtainEscapeParam(textState);
		//this._infoTextSprite.setFlagPauseOn(param || 0);
		this.textAnim_setFlagPauseOn(param || 0);
		break;
	case 'TACONT': // text anim continue
		var param = this.obtainEscapeParam(textState);
		//this._infoTextSprite.setFlagContinueOn(param || 0);
		this.textAnim_setFlagContinueOn(param || 0);
		break;
	case 'TASTOP': // text anim stop
		var param = this.obtainEscapeParam(textState);
		//this._infoTextSprite.setFlagStopOn(param || 0);
		this.textAnim_setFlagStopOn(param || 0);
		break;

	case 'TAADDON': // text anim add(allow add) on
		var param = this.obtainEscapeParam(textState);
		//this._infoTextSprite.setFlagAllowAddOn(param || 0);
		this.textAnim_setFlagAllowAddOn(param || 0);
		break;
	case 'TAADDOFF': // text anim add(allow add) off
		var param = this.obtainEscapeParam(textState);
		//this._infoTextSprite.setFlagAllowAddOff(param || 0);
		this.textAnim_setFlagAllowAddOff(param || 0);
		break;

	case 'TAACTON': // text anim active(enabled) on
		var param = this.obtainEscapeParam(textState);
		//this._infoTextSprite.setFlagEnabledOn(param || 0);
		this.textAnim_setFlagEnabledOn(param || 0);
		break;
	case 'TAACTOFF': // text anim active(enabled) off
		var param = this.obtainEscapeParam(textState);
		//this._infoTextSprite.setFlagEnabledOff(param || 0);
		this.textAnim_setFlagEnabledOff(param || 0);
		break;
	// 未使用

	// TODO : 在消息窗口中设置动画参数
	// ？调用多次 obtainEscapeParam 可以从 \XXX[12][34] 中获取多个纯数值参数 ...
	// ？以此 可以指定 anim code 和 param index 但不方便指定参数值 ..
	// ？可以提前在用户参数的其他闲置的索引位设置值，再在消息中把某个索引位的参数复制到另一位位置 ...
	// ？即 使用 \XX[1][2][3] 把animcode=1的参数2设置为参数3的值 ...


	//case 'RCV': case 'REC': // recover
	//	var param = this.obtainEscapeParam(textState);
	//	// ？是否有必要 ...
	//	// ？缺省时找不到[..]，不会修改textState.index ...
	//	this._infoTextSprite.recoverAllLetter();
	//	break;

	/*
	case 'MVX': // moveY / offsetX
		var param = this.obtainEscapeParam(textState);
		// TODO : ...
		break;

	case 'MVY': // moveY / offsetY
		var param = this.obtainEscapeParam(textState);
		// TODO : ...
		break;
	*/

	default:
		_MK_Window_Message_processEscapeCharacter.apply(this, arguments);
		break;
	}

	// TODO : 全部动画效果复原
};


Window_Message.prototype.textAnim_createTextAnim = function(code) {
	//this._infoTextSprite.addTextAnimByCode(code);
	var spriteAnim = MK_SpriteAnimManager.addSpriteAnimObject(code);
	//MK_SpriteAnimManager.initSpriteAnimTarget(spriteAnim, code, this._infoTextSprite);
	// ？可以从 spriteAnim 获取 code ...
	MK_SpriteAnimManager.initSpriteAnimTarget(spriteAnim, this._infoTextSprite);
	this.textAnim_setFlagAllowAddOn(code); // 默认开启
	this.textAnim_setAnimFlagOn(code);
};

/*
//MK_SpriteAnimManager.prototype.textAnim_setFlagAutoOn = function(code) {
//	//this.setTextSpriteFlag('auto' + '_' + code, true);
//	this.setTextSpriteAnimFlag('auto', code, true);
//};
//MK_SpriteAnimManager.prototype.setFlagAutoOff = function(code) {
//	//this.setTextSpriteFlag('auto' + '_' + code, false);
//	this.setTextSpriteAnimFlag('auto', code, false);
//};
Window_Message.prototype.textAnim_setFlagAutoOn = function(code) {
	this._infoTextSprite.setTextSpriteAnimFlag('auto', code, true);
};
Window_Message.prototype.textAnim_setFlagAutoOff = function(code) {
	this._infoTextSprite.setTextSpriteAnimFlag('auto', code, false);
};

Window_Message.prototype.textAnim_setFlagPlayOn = function(code) {
	this._infoTextSprite.setTextSpriteAnimFlag('play', code, true);
};
Window_Message.prototype.textAnim_setFlagPauseOn = function(code) {
	this._infoTextSprite.setTextSpriteAnimFlag('pause', code, true);
};
Window_Message.prototype.textAnim_setFlagContinueOn = function(code) {
	this._infoTextSprite.setTextSpriteAnimFlag('continue', code, true);
};
Window_Message.prototype.textAnim_setFlagStopOn = function(code) {
	this._infoTextSprite.setTextSpriteAnimFlag('stop', code, true);
};

Window_Message.prototype.textAnim_setFlagInitOn = function(code) {
	this._infoTextSprite.setTextSpriteAnimFlag('init', code, true);
};
//Window_Message.prototype.textAnim_setFlagInitOff = function(code) {
//	this._infoTextSprite.setTextSpriteAnimFlag('init', code, false);
//};

Window_Message.prototype.textAnim_setFlagEnabledOn = function(code) {
	this._infoTextSprite.setTextSpriteAnimFlag('enabled', code, true);
};
Window_Message.prototype.textAnim_setFlagEnabledOff = function(code) {
	this._infoTextSprite.setTextSpriteAnimFlag('enabled', code, false);
};
*/

Window_Message.prototype.textAnim_setFlagAutoOn = function(code) {
	MK_SpriteAnimManager.setSpriteAnimFlag('auto', code, true);
};
Window_Message.prototype.textAnim_setFlagAutoOff = function(code) {
	MK_SpriteAnimManager.setSpriteAnimFlag('auto', code, false);
};
// ？未使用

Window_Message.prototype.textAnim_setFlagPlayOn = function(code) {
	MK_SpriteAnimManager.setSpriteAnimFlag('play', code, true);
};
Window_Message.prototype.textAnim_setFlagPauseOn = function(code) {
	MK_SpriteAnimManager.setSpriteAnimFlag('pause', code, true);
};
Window_Message.prototype.textAnim_setFlagContinueOn = function(code) {
	MK_SpriteAnimManager.setSpriteAnimFlag('continue', code, true);
};
Window_Message.prototype.textAnim_setFlagStopOn = function(code) {
	MK_SpriteAnimManager.setSpriteAnimFlag('stop', code, true);
};
Window_Message.prototype.textAnim_setFlagInitOn = function(code) {
	MK_SpriteAnimManager.setSpriteAnimFlag('init', code, true);
};

Window_Message.prototype.textAnim_setFlagEnabledOn = function(code) {
	MK_SpriteAnimManager.setSpriteAnimFlag('enabled', code, true);
};
Window_Message.prototype.textAnim_setFlagEnabledOff = function(code) {
	MK_SpriteAnimManager.setSpriteAnimFlag('enabled', code, false);
};
// ？未使用

Window_Message.prototype.textAnim_setAnimFlagOn = function(code) {
	this._infoTextSprite.setTextSpriteAnimFlag('anim', code, true);
};
//Window_Message.prototype.textAnim_setAnimFlagOff = function(code) {
//	this._infoTextSprite.setTextSpriteAnimFlag('anim', code, false);
//};
// ？不建议 取消标记 anim ...
// ？防止创建 anim 后 无法及时清除 ...

Window_Message.prototype.textAnim_setFlagAllowAddOn = function(code) {
	this._infoTextSprite.setNewLetterAnimFlag('add', code, true);
};
Window_Message.prototype.textAnim_setFlagAllowAddOff = function(code) {
	this._infoTextSprite.setNewLetterAnimFlag('add', code, false);
};

})();



