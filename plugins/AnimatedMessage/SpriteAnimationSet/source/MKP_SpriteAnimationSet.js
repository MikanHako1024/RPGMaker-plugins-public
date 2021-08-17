// ================================================================
// MKP_SpriteAnimationSet.js
// 精灵动画集
// ================================================================
//  author : Mikan(MikanHako)
//  plugin : MKP_SpriteAnimationSet.js 精灵动画集
// version : v0.1.0 2021/08/17 最初的版本
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
 * @plugindesc 精灵动画集 <MKP_SpriteAnimationSet>
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.1.0 2021/08/17 最初的版本
 *     从MKP_SpriteAnimManager中分离出 处理精灵动画播放效果的框架和所有的精灵动画类
 *   v0.0.0 2019/01/02 项目计划中
 * 
 * 
 * 
 * 
 * @help
 * 
 * 精灵动画集 <MKP_SpriteAnimationSet>
 * 
 * 
 * ## 简要说明
 * 
 * 完成精灵动画功能的三个插件之一  
 * + 插件`MKP_SpriteAnimationSet`(本插件)
 *   - 提供处理精灵动画播放的效果的类
 * + 插件`MKP_SpriteAnimManager`
 *   - 用来设置动画和动画参数
 * + 插件`MKP_TextSprite`
 *   - 用来播放动画
 * 
 * 文本动画的描述和参数列表 见 【其他说明】  
 * 
 * 
 * ## 使用方法
 * 
 * 导入本插件即可  
 * 
 * 
 * ## 脚本说明
 * 
 * TODO : 开发方法
 * 
 * 
 * ## 其他说明
 * 
 * #### 动画列表概要(MOG_AnimatedText)
 * 以下动画效果来自 插件[`MOG_AnimatedText`](https://github.com/DrillUp/drill_plugins/blob/master/js/plugins/MOG_AnimatedText.js)  
 * 注 : id 为 默认动画id  
 * 
 * | id | 动画效果 | 动画名  | 动画描述 |
 * | :- | :------- | :-----  | :------- |
 * |  1 | 淡入淡出 | Fade     | (todo) |
 * |  2 | 缩放     | Zoom     | (todo) |
 * |  3 | 翻转     | Zoom2    | (todo) |
 * |  4 | 上下出现(未完成) | Wipe     | (todo) |
 * |  5 | 震动     | Shake    | (todo) |
 * |  6 | 剧烈缩放 | Zoom3    | (todo) |
 * |  7 | 波浪缩放 | Wave     | (todo) |
 * |  8 | 旋涡     | Rotation | (todo) |
 * |  9 | 摇晃     | Swing    | (todo) |
 * | 10 | 随机     | Random   | (todo) |
 * 
 * #### 动画列表概要(新增)
 * 以下动画效果为新增的动画  
 * 注 : id 为 默认动画id  
 * 
 * | id | 动画效果 | 动画名  | 动画描述 |
 * | :- | :------- | :-----  | :------- |
 * | 11 | 卡拉OK(未完成)   | Karaoke | 模仿卡拉OK播放的效果 |
 * 
 * #### 动画参数
 * 
 * + 1 - 缩放 - Zoom
 * | 序号 | 描述             | 参数名       | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------     | :---------   | :----- | :----- | :--- |
 * |   0  | 初始不透明度     | opacityStart | 数值   | 0      |  |
 * |   1  | 结束不透明度     | opacityEnd   | 数值   | 255    |  |
 * |   2  | 不透明度变化速度 | opacitySpeed | 数值   | 5      |  |
 * 
 * + 2 - 淡入淡出 - Fade
 * | 序号 | 描述             | 参数名       | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------     | :---------   | :----- | :----- | :--- |
 * |   0  | 初始不透明度     | opacityStart | 数值  | 0     |  |
 * |   1  | 结束不透明度     | opacityEnd   | 数值  | 255   |  |
 * |   2  | 不透明度变化速度 | opacitySpeed | 数值  | 4     |  |
 * |   3  | 初始X缩放        | scaleXStart  | 数值  | 2.0   |  |
 * |   4  | 结束X缩放        | scaleXEnd    | 数值  | 1.0   |  |
 * |   5  | X缩放变化速度    | scaleXSpeed  | 数值  | -0.04 |  |
 * |   6  | 初始Y缩放        | scaleYStart  | 数值  | 2.0   |  |
 * |   7  | 结束Y缩放        | scaleYEnd    | 数值  | 1.0   |  |
 * |   8  | Y缩放变化速度    | scaleYSpeed  | 数值  | -0.04 |  |
 * 
 * + 3 - 翻转 - Zoom2
 * | 序号 | 描述             | 参数名       | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------     | :---------    | :----- | :----- | :--- |
 * |   0  | 初始不透明度     | opacityStart  | 数值  | 0     |  |
 * |   1  | 结束不透明度     | opacityEnd    | 数值  | 255   |  |
 * |   2  | 不透明度变化速度 | opacitySpeed | 数值  | 4     |  |
 * |   3  | 初始X缩放        | scaleXStart  | 数值  | -1.0  |  |
 * |   4  | 结束X缩放        | scaleXEnd    | 数值  | 1.0   |  |
 * |   5  | X缩放变化速度    | scaleXSpeed  | 数值  | 0.02  |  |
 * |   6  | 初始Y缩放        | scaleYStart  | 数值  | 2.0   |  |
 * |   7  | 结束Y缩放        | scaleYEnd    | 数值  | 1.0   |  |
 * |   8  | Y缩放变化速度    | scaleYSpeed  | 数值  | -0.02 |  |
 * 
 * + 4 - 上下出现 - Wipe
 * 
 * + 5 - 震动 - Shake
 * | 序号 | 描述                | 参数名          | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------        | :---------      | :----- | :----- | :--- |
 * |   0  | 震动间隔(帧数)      | shakeWaitCount  | 数值  | 3     |  |
 * |   1  | 震动幅度(像素)      | shakeAmplitude  | 数值  | 3     |  |
 * |   2  | 是否停止(0不停;1停) | shakeNeedStop   | 0或1  | 0     |  |
 * |   3  | 震动总计数(若停止)  | shakeTotalCount | 数值  | 12   |  |
 * 
 * + 6 - 剧烈缩放 - Zoom3
 * | 序号 | 描述              | 参数名         | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------      | :---------     | :----- | :----- | :--- |
 * |   0  | 初始不透明度      | opacityStart   | 数值  | 0      |  |
 * |   1  | 结束不透明度      | opacityEnd     | 数值  | 255    |  |
 * |   2  | 不透明度变化速度  | opacitySpeed   | 数值  | 20     |  |
 * |   3  | 初始X缩放         | scaleXStart    | 数值  | 4.0    |  |
 * |   4  | 结束X缩放         | scaleXEnd      | 数值  | 1.0    |  |
 * |   5  | X缩放变化速度     | scaleXSpeed    | 数值  | -0.2   |  |
 * |   6  | 初始Y缩放         | scaleYStart    | 数值  | 4.0    |  |
 * |   7  | 结束Y缩放         | scaleYEnd      | 数值  | 1.0    |  |
 * |   8  | Y缩放变化速度     | scaleYSpeed    | 数值  | -0.2   |  |
 * |   9  | 震动间隔(帧数)    | shakeWaitCount | 数值  | 3      |  |
 * |  10  | 震动幅度(像素)    | shakeAmplitude | 数值  | 3      |  |
 * |  11  | 是否停止          | shakeNeedStop   | 0或1  | 0     | 0不停;1停 |
 * |  12  | 震动总计数        | shakeTotalCount | 数值  | 12    | 若停止 |
 * 
 * + 7 - 剧烈缩放 - Zoom3
 * | 序号 | 描述       | 参数名     | 值类型 | 默认值 | 备注 |
 * | :--- | :-------   | :--------- | :----- | :----- | :--- |
 * |   0  | 缩放速度   | scaleSpeed | 数值   | 0.015  |  |
 * |   1  | 缩放帧数   | scaleCount | 数值   | 30     | 来或回一次的 |
 * |   2  | 总循环次数 | loopTotal  | 数值   | 1      |  |
 * 
 * + 8 - 旋涡 - Rotation
 * 
 * + 9 - 摇晃 - Swing
 * | 序号 | 描述         | 参数名       | 值类型 | 默认值 | 备注 |
 * | :--- | :---------   | :---------    | :----- | :----- | :--- |
 * |   0  | 旋转速度     | rotateSpeed    | 数值  | 0.02  | 角度/帧 |
 * |   1  | 初始旋转方向 | rotateInitDir  | 文本  | R     | L逆;R顺 |
 * |   2  | 初始角度     | angleInit      | 数值  | 0     | 正顺;负逆 |
 * |   3  | 角度左范围   | angleRangeL    | 数值  | -0.4  |  |
 * |   4  | 角度右范围   | angleRangeR    | 数值  | 0.4   |  |
 * 
 * + 10 - 随机 - Random
 * | 序号 | 描述             | 参数名        | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------     | :---------    | :----- | :----- | :--- |
 * |   0  | 初始不透明度     | opacityStart  | 数值   | 0     |  |
 * |   1  | 结束不透明度     | opacityEnd    | 数值   | 255   |  |
 * |   2  | 不透明度变化速度 | opacitySpeed  | 数值   | 4     |  |
 * |   3  | 缩放最小范围     | scaleRangeMin | 数值   | 0.7   |  |
 * |   4  | 缩放最大范围     | scaleRangeMax | 数值   | 1.4   |  |
 * |   5  | 旋转范围         | rotateRange   | 数值   | 0.4   |  |
 * |   6  | 旋转方向         | rotateDir     | 文本   | R     | L逆;R顺 |
 * 
 * + 11 - 卡拉OK - Karaoke
 * | 序号 | 描述               | 参数名     | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------       | :--------- | :----- | :----- | :--- |
 * |   0  | 初始不透明度       | playSpeed  | 数值  | 2       |  |
 * |   1  | 边框线宽           | lineWidth  | 数值  | 4       |  |
 * |   2  | 播放前文本边框颜色 | uLineColor | 文本  | #FFFFFF | 颜色 |
 * |   3  | 播放前文本颜色     | uTextColor | 文本  | #000000 | 颜色 |
 * |   4  | 播放后文本边框颜色 | dLineColor | 文本  | #000000 | 颜色 |
 * |   5  | 播放后文本颜色     | dTextColor | 文本  | #FFFFFF | 颜色 |
 * 
 * 
 * ## 用语说明
 * 
 * TODO
 * 
 * 
 * ## 后续任务
 * 
 * - [ ] 制作卡拉OK效果
 * - [ ] 尝试利用动画类完成其他的功能，比如文字居中
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
 */




// ----------------------------------------------------------------
// MK_SpriteAnimBase
// 精灵动画基类

// 用来 控制文本精灵动画的类(动画类) 的基类
// 定义了 控制文本精灵动画的类(动画类) 的接口

// 一个动画类实例指定一个需要控制的精灵
// 动画相关数据存在动画类实例中，而不储存在精灵中
// 动画类实例可以挂在文本精灵(MK_TextAminSprite)中被精灵调用帧更新，也可以在其他地方调用帧更新
// 动画分为多个阶段(见下方动画流程)，阶段之间的变化在动画类实例的帧更新中完成

// ？TODO : 直接把动画类做成精灵，让父精灵自动调用动画类帧更新，同时减少对文本精灵的耦合 ...

// ？有些动画不能只由一个精灵完成 ...
// ？可能需要多个精灵共同配合 ...
// ？所以目标不能只有一个，而应该是一个列表 ...

// 动画流程 v0.1
// on_create  -> on_play  -> on_update -> on_stop -> on_destroy
// (on_start)       ↑           ↓            ↑       (on_end)
// (on_draw)  on_continue <- on_pause  ->    ↑

// 动画流程 v0.2
// 针对播放前、暂停时可能也需要进行操作，添加一些新的阶段
// 改名on_update为on_playing，以区别update的开始与结束之间的阶段
// 针对可能需要不管阶段的日常操作，添加帧更新开始和结束的阶段
// 改变流程绘制格式
// 添加阶段标识
// 添加阶段变换条件
// 区分瞬时阶段和循环阶段
// update {
//     on_update_start
//     on_update {
//         phase :   0 -> [auto]     -> on_start -> phase : 101
//         // ？on_create on_start on_draw 决定是on_start，而on_create作为创建动画示例的触发
// 
//         phase : 101 -> [auto]     -> on_pending  -> phase : 101  {loop}
//         phase : 101 -> [play]     -> on_play     -> phase : 102
//         phase : 102 -> [auto]     -> on_playing  -> phase : 102  {loop}
//         phase : 102 -> [stop]     -> on_stop     -> phase : 103
// 
//         phase : 102 -> [pause]    -> on_pause    -> phase : 201
//         phase : 201 -> [auto]     -> on_pausing  -> phase : 201  {loop}
//         phase : 201 -> [continue] -> on_continue -> phase : 102
//         phase : 201 -> [stop]     -> on_stop     -> phase : 103
//
//         phase : 103 -> [auto]     -> on_destroy  -> phase :  -1
//
//         phase :  -1 -> [init]     -> on_init     -> phase :   0
//     }
//     on_update_end
// }
// ？同时，因为要考虑播放时加入精灵，所以还要有一个initTarget方法
// on_addTarget
// on_initTarget
// 
// 操作(operation)
// on_create
// on_start
// on_pending
// on_play
// on_playing
// on_pause
// on_pausing
// on_continue
// on_stop
// on_destroy
// on_init
// 阶段(phase)
//   0 : 未创建
// - 1 : 已销毁
// 101 : 准备
// 102 : 开始
// 103 : 停止
// 201 : 暂停
// 标志(flag)
// [auto] 无条件，也作为一种标志
// [play]
// [pause]
// [continue]
// [stop]
// [init]
// [enabled] 启用
// [allowAdd] 允许添加

// ？TODO : 用配置表配置流程变化，使派生类可以添加新阶段，并自定义流程 ...

function MK_SpriteAnimBase() {
    this.initialize.apply(this, arguments);
};

MK_SpriteAnimBase.prototype = Object.create(Object.prototype);
MK_SpriteAnimBase.prototype.constructor = MK_SpriteAnimBase;

MK_SpriteAnimBase.prototype.initialize = function(code) {
	// 动画code
	//this._animCode = 0;
	this.initAnimCode(code);

	// 参数映射
	// ？参数映射存在类实例中，而不是类中 ...
	// ？FINISH : 类中的需要时再初始化，而不是实例化一个类来获取 ...
	this._paramMapTable = {};
	this.initParamMapTable();

	// 目标
	//this._target = null;
	this._targets = [];

	// 阶段
	this._phase = 0;

	// 标志
	this._flagAuto = true;
	this._flagPlay = false;
	this._flagPause = false;
	this._flagContinue = false;
	this._flagStop = false;
	this._flagInit = false;

	this._flagEnabled = true; // 是否启用的标记，用来禁用
	this._flagAllowAdd = true; // ？是否允许添加精灵 ...

	this.onCreate();
};



// --------------------------------
// 动画code

// ？实例化时允许指定code作为用户
MK_SpriteAnimBase._DEFAULT_ANIM_CODE = 0;
MK_SpriteAnimBase.prototype.getDefaultAnimCode = function() {
	return this.constructor._DEFAULT_ANIM_CODE;
};

MK_SpriteAnimBase.prototype.getAnimCode = function() {
	return this._animCode;
};
MK_SpriteAnimBase.prototype.setAnimCode = function(code) {
	this._animCode = code;
};

MK_SpriteAnimBase.prototype.initAnimCode = function(code) {
	this.setAnimCode(code || this.getDefaultAnimCode());
};



// --------------------------------
// 目标列表

// 对于目标，分为多目标和单目标
// 多目标对应精灵列表
// 单目标对应精灵列表中的第一个

// ？精灵分组 ...

MK_SpriteAnimBase.prototype.setTargets = function(sprites) {
	if (!Array.isArray(sprites)) sprites = [sprites];
	//this._targets = sprites;
	this.initTargets();
	sprites.forEach(function(s) {
		this.addTarget(s);
	}, this);
};
//MK_SpriteAnimBase.prototype.setTarget = function(sprite, index) {
//	if (typeof index == 'number') {
//		this._targets[index] = sprite;
//	}
//	else {
//		//this._targets[index].push(sprite);
//		this._targets[0] = sprite;
//	}
//};

MK_SpriteAnimBase.prototype.getTargets = function() {
	//return this._targets;
	return this._targets || [];
};
MK_SpriteAnimBase.prototype.getTarget = function(index) {
	if (typeof index == 'number') {
		return this._targets[index];
	}
	else {
		return this._targets[0];
	}
};

MK_SpriteAnimBase.prototype.initTargets = function() {
	this._targets = [];
};



// --------------------------------
// 目标对象 (sprite + variable)

// 目标的变量不保存在目标精灵里
// 而是保存在动画类的目标中，并与精灵对应
// 所以添加目标时，要同时创建其保存变量的对象

MK_SpriteAnimBase.prototype.createTargetObjWithVar = function(sprite, varObj) {
	return {
		'sprite': sprite || null,
		'var': varObj || {},
	};
};
MK_SpriteAnimBase.prototype.createTargetObj = function(sprite) {
	return this.createTargetObjWithVar(sprite);
};



// --------------------------------
// 添加目标

MK_SpriteAnimBase.prototype.addTarget = function(sprite) {
	if (this._flagAllowAdd) {
		//this.onAddTarget(sprite);
		//this._targets.push(sprite);
		var targetObj = this.createTargetObj(sprite);
		this._targets.push(targetObj);
		var args = [...arguments].splice(1);
		this.onAddTarget(targetObj, ...args);
	}
};

//MK_SpriteAnimBase.prototype.onAddTarget = function(sprite) {
MK_SpriteAnimBase.prototype.onAddTarget = function(targetObj) {
	this.onInitTarget(...arguments);
};

MK_SpriteAnimBase.prototype.onInitTarget = function(targetObj) {
};



// --------------------------------
// 标记

/*
MK_SpriteAnimBase.prototype.setFlagAutoOn = function() {
	this._flagAuto = true;
};
MK_SpriteAnimBase.prototype.setFlagAutoOff = function() {
	this._flagAuto = false;
};
MK_SpriteAnimBase.prototype.getFlagAuto = function() {
	return this._flagAuto;
};

MK_SpriteAnimBase.prototype.setFlagPlayOn = function() {
	this._flagPlay = true;
};
MK_SpriteAnimBase.prototype.setFlagPlayOff = function() {
	this._flagPlay = false;
};
MK_SpriteAnimBase.prototype.getFlagPlay = function() {
	return this._flagPlay;
};

MK_SpriteAnimBase.prototype.setFlagPauseOn = function() {
	this._flagPause = true;
};
MK_SpriteAnimBase.prototype.setFlagPauseOff = function() {
	this._flagPause = false;
};
MK_SpriteAnimBase.prototype.getFlagPause = function() {
	return this._flagPause;
};

MK_SpriteAnimBase.prototype.setFlagContinueOn = function() {
	this._flagContinue = true;
};
MK_SpriteAnimBase.prototype.setFlagContinueOff = function() {
	this._flagContinue = false;
};
MK_SpriteAnimBase.prototype.getFlagContinue = function() {
	return this._flagContinue;
};

MK_SpriteAnimBase.prototype.setFlagStopOn = function() {
	this._flagStop = true;
};
MK_SpriteAnimBase.prototype.setFlagStopOff = function() {
	this._flagStop = false;
};
MK_SpriteAnimBase.prototype.getFlagStop = function() {
	return this._flagStop;
};

MK_SpriteAnimBase.prototype.setFlagInitOn = function() {
	this._flagInit = true;
};
MK_SpriteAnimBase.prototype.setFlagInitOff = function() {
	this._flagInit = false;
};
MK_SpriteAnimBase.prototype.getFlagInit = function() {
	return this._flagInit;
};
*/
// 兼容合并

MK_SpriteAnimBase.prototype.getAnimFlagKey = function(flagName) {
	return '_flag' + flagName;
};

MK_SpriteAnimBase.prototype.setAnimFlag = function(flagName, value) {
	this[this.getAnimFlagKey(flagName)] = !!value;
};
MK_SpriteAnimBase.prototype.setAnimFlagOn = function(flagName) {
	this.setAnimFlag(flagName, true);
};
MK_SpriteAnimBase.prototype.setAnimFlagOff = function(flagName) {
	this.setAnimFlag(flagName, false);
};
MK_SpriteAnimBase.prototype.getAnimFlag = function(flagName) {
	return this[this.getAnimFlagKey(flagName)];
};

MK_SpriteAnimBase.prototype.setFlagAutoOn = function() {
	this.setAnimFlag('Auto', true);
};
MK_SpriteAnimBase.prototype.setFlagAutoOff = function() {
	this.setAnimFlag('Auto', false);
};
MK_SpriteAnimBase.prototype.setFlagPlayOn = function() {
	this.setAnimFlag('Play', true);
};
MK_SpriteAnimBase.prototype.setFlagPlayOff = function() {
	this.setAnimFlag('Play', false);
};
MK_SpriteAnimBase.prototype.setFlagPauseOn = function() {
	this.setAnimFlag('Pause', true);
};
MK_SpriteAnimBase.prototype.setFlagPauseOff = function() {
	this.setAnimFlag('Pause', false);
};
MK_SpriteAnimBase.prototype.setFlagContinueOn = function() {
	this.setAnimFlag('Continue', true);
};
MK_SpriteAnimBase.prototype.setFlagContinueOff = function() {
	this.setAnimFlag('Continue', false);
};
MK_SpriteAnimBase.prototype.setFlagStopOn = function() {
	this.setAnimFlag('Stop', true);
};
MK_SpriteAnimBase.prototype.setFlagStopOff = function() {
	this.setAnimFlag('Stop', false);
};
MK_SpriteAnimBase.prototype.setFlagInitOn = function() {
	this.setAnimFlag('Init', true);
};
MK_SpriteAnimBase.prototype.setFlagInitOff = function() {
	this.setAnimFlag('Init', false);
};

MK_SpriteAnimBase.prototype.setFlagEnabledOn = function() {
	this.setAnimFlag('Enabled', true);
};
MK_SpriteAnimBase.prototype.setFlagEnabledOff = function() {
	this.setAnimFlag('Enabled', false);
};

MK_SpriteAnimBase.prototype.setFlagAllowAddOn = function() {
	this.setAnimFlag('AllowAdd', true);
};
MK_SpriteAnimBase.prototype.setFlagAllowAddOff = function() {
	this.setAnimFlag('AllowAdd', false);
};



// --------------------------------
// 阶段操作

MK_SpriteAnimBase.prototype.onCreate = function() {
};

MK_SpriteAnimBase.prototype.onStart = function() {
};

MK_SpriteAnimBase.prototype.onPending = function() {
};
MK_SpriteAnimBase.prototype.onPlay = function() {
};
MK_SpriteAnimBase.prototype.onPlaying = function() {
};
MK_SpriteAnimBase.prototype.onStop = function() {
};

MK_SpriteAnimBase.prototype.onPause = function() {
};
MK_SpriteAnimBase.prototype.onPausing = function() {
};
MK_SpriteAnimBase.prototype.onContinue = function() {
};

MK_SpriteAnimBase.prototype.onInit = function() {
};

MK_SpriteAnimBase.prototype.onDestroy = function() {
};

MK_SpriteAnimBase.prototype.onUpdateStart = function() {
};
MK_SpriteAnimBase.prototype.onUpdate = function() {
	// 按顺序并行判断操作是否要进行
	// ？TODO : 用配置代替硬编码，让判断的各种条件(phase,phaseTo,flag,operation)可以在配置中更改 ...

	if (this._phase ==   0 && this._flagAuto) {
		//this.onCreate();
		this.onStart();
		this._phase  = 101;
	}

	if (this._phase == 101 && this._flagAuto) {
		this.onPending();
	}
	if (this._phase == 101 && this._flagPlay) {
		this.onPlay();
		this._phase  = 102;
		this._flagPlay = false;
	}
	if (this._phase == 102 && this._flagAuto) {
		this.onPlaying();
	}
	if (this._phase == 102 && this._flagStop) {
		this.onStop();
		this._phase  = 103;
		this._flagStop = false;
	}

	if (this._phase == 102 && this._flagPause) {
		this.onPause();
		this._phase  = 201;
		this._flagPause = false;
	}
	if (this._phase == 201 && this._flagAuto) {
		this.onPausing();
	}
	if (this._phase == 201 && this._flagContinue) {
		this.onContinue();
		this._phase  = 102;
		this._flagContinue = false;
	}

	if (this._phase == 103 && this._flagAuto) {
		this.onDestroy();
		this._phase  =  -1;
	}

	if (this._phase ==  -1 && this._flagInit) {
		this.onInit();
		this._phase  =   0;
		this._flagInit = false;
	}
};
MK_SpriteAnimBase.prototype.onUpdateEnd = function() {
};

MK_SpriteAnimBase.prototype.update = function() {
	if (this._flagEnabled) {
		this.onUpdateStart();
		this.onUpdate();
		this.onUpdateEnd();
	}
};



// --------------------------------
// 参数配置

// [index -> [key, type, defaultValue]]
// type : string, number
// ？eval 类型 ...
// ？派生类必须重新设置这个 ...
// ？MK_SpriteAnimBase.prototype._PARAM_CONFIG ...
MK_SpriteAnimBase._PARAM_CONFIG = [
];

/*
MK_SpriteAnimBase.getParamConfig = function() {
	return this._PARAM_CONFIG;
};
*/

MK_SpriteAnimBase.prototype.getParamConfig = function() {
	return this.constructor._PARAM_CONFIG;
};

// ？相同类设置了不同的code，共用这个参数配置，这个参数实际是默认参数 ...
// ？实例自己的参数放在MK_SpriteAnimManager，通过管理器获取和修改参数 ...
// ？基础动画参数，通过插件参数进行修改，用户自定义动画参数，通过插件指令进行修改 ...

// ？MK_SpriteAnimBase 的参数获取 与 MK_SpriteAnimManager 耦合 ...
// ？TODO : 解耦合 ...
// ？其实 MK_SpriteAnimManager都是静态方法 完全可以直接写成 MK_SpriteAnimBase 的静态方法，只是因为更好看 ...



// --------------------------------
// 参数映射


// [index -> key]
//MK_SpriteAnimBase._PARAM_KEY_LIST = [
//];

/*
MK_SpriteAnimBase._paramMapTable = null;
// ？需要时再初始化 ...

MK_SpriteAnimBase.touchParamMapTable = function() {
	if (!this._paramMapTable) {
		this.initParamMapTable();
	}
};
MK_SpriteAnimBase.initParamMapTable = function() {
	this._paramMapTable = [];
	var keyList = this.getParamConfig();
	for (var i = 0; i < keyList.length; i++) {
		this._paramMapTable[keyList[i][0]] = i;
	}
};
*/

// {key -> index}
MK_SpriteAnimBase.prototype.initParamMapTable = function() {
	this._paramMapTable = {};
	// TODO : 改 硬编码 为 可以从配置文件更改
	//var keyList = this.constructor._PARAM_KEY_LIST;
	//for (var i = 0; i < keyList.length; i++) {
	//	this._paramMapTable[keyList[i]] = i;
	//}
	var keyList = this.getParamConfig();
	for (var i = 0; i < keyList.length; i++) {
		//this._paramMapTable[keyList[i]][0] = i;
		this._paramMapTable[keyList[i][0]] = i;
	}
};

/*
MK_SpriteAnimBase.getParamIndex = function(key) {
	this.touchParamMapTable();
	var index = this._paramMapTable[key];
	if (0 <= index) {
		return index;
	}
	else {
		console.error('key ' + key + ' not found');
		return 0;
	}
};
*/
// ？派生类不会继承这个方法 ...

MK_SpriteAnimBase.prototype.getParamIndex = function(key) {
	var index = this._paramMapTable[key];
	if (0 <= index) {
		return index;
	}
	else {
		console.error('key ' + key + ' not found');
		return 0;
	}
};



// --------------------------------
// 默认参数

// [index -> value]
//MK_SpriteAnimBase._PARAM_DEFAULT_VALUE_LIST = [
//];
//MK_SpriteAnimBase.prototype.getDefaultParams = function() {
//	return this.constructor._PARAM_DEFAULT_VALUE_LIST;
//};
//MK_SpriteAnimBase.prototype.getDefaultParam = function(index) {
//	return this.getDefaultParams()[index];
//};
MK_SpriteAnimBase.prototype.getDefaultParam = function(index) {
	return (this.getParamConfig()[index] || [])[2];
};



// --------------------------------
// 参数类型

// 得到参数的类型
MK_SpriteAnimBase.prototype.getParamType = function(index) {
	return (this.getParamConfig()[index] || [])[1];
};
// 得到类型化后的参数
MK_SpriteAnimBase.prototype.getTypedParam = function(param, index) {
	var type = this.getParamType(index);
	if (type == 'number') {
		return Number(param);
	}
	else if (type == 'string') {
		return String(param);
	}
	else {
		return param;
	}
};



// --------------------------------
// 获取参数

MK_SpriteAnimBase.prototype.getParams = function() {
	return MK_SpriteAnimManager.getAnimParams(this.getAnimCode()) || [];
};
MK_SpriteAnimBase.prototype.getParamByIndex = function(index) {
	//return this.getParams()[index];
	var value = this.getParams()[index];
	if (value == null || typeof value == 'undefined') {
		// 缺少时，使用默认参数
		return this.getDefaultParam(index);
	}
	else {
		return this.getTypedParam(value, index);
	}
};
MK_SpriteAnimBase.prototype.getParamByKey = function(key) {
	var index = this.getParamIndex(key);
	return this.getParamByIndex(index);
};
MK_SpriteAnimBase.prototype.getParam = function(key) {
	if (typeof key == 'number') {
		return this.getParamByIndex(key);
	}
	else {
		return this.getParamByKey(key);
	}
};

// TODO : 是否会影响到效率
// ？TODO : 改成只用key ...

// ？TODO : 或者 每次流程开始 获取所有参数，但不会更新流程中修改的参数 ...



// --------------------------------
// 设置参数

// ？通过 MK_SpriteAnimBase 的 code 对 MK_SpriteAnimManager 修改对应参数 ...
// ？可以做到 key 对 index 的映射 ...

// 其他注释见 本类的 【参数配置】

MK_SpriteAnimBase.prototype.setParamWithCode = function(code, index, value) {
	MK_SpriteAnimManager.setAnimParam(code, index, value);
};
MK_SpriteAnimBase.prototype.setParamByKeyWithCode = function(code, key, value) {
	var index = this.getParamIndex(key);
	MK_SpriteAnimManager.setParamWithCode(code, index, value);
};

MK_SpriteAnimBase.prototype.setParam = function(index, value) {
	var code = this.getAnimCode();
	MK_SpriteAnimManager.setAnimParam(code, index, value);
};
MK_SpriteAnimBase.prototype.setParamByKey = function(key, value) {
	var code = this.getAnimCode();
	MK_SpriteAnimManager.setAnimParam(code, index, value);
};





// ----------------------------------------------------------------
// MK_TextAnimBase
// 文本动画基类

// 区别于普通的MK_SpriteAnimBase，MK_TextAnimBase更加适合做文本的动画
// 允许设置消息窗口(messageWindow)或其contents和textStatus
// 以解决 需要获取messageWindow的contents和textStatus的功能 不方便改写MK_SpriteAnimBase 的尴尬

function MK_TextAnimBase() {
    this.initialize.apply(this, arguments);
};

MK_TextAnimBase.prototype = Object.create(MK_SpriteAnimBase.prototype);
MK_TextAnimBase.prototype.constructor = MK_TextAnimBase;

// 派生类必须重新设置这个
MK_TextAnimBase._PARAM_CONFIG = [
];

MK_TextAnimBase.prototype.initialize = function(code, msgWindow) {
	MK_SpriteAnimBase.prototype.initialize.apply(this, arguments);

	// 消息窗口
	this._msgWindow = msgWindow;
};



// --------------------------------
// 消息窗口

MK_TextAnimBase.prototype.setMsgWindow = function(msgWindow) {
	this._msgWindow = msgWindow;
};
MK_TextAnimBase.prototype.getMsgWindow = function() {
	return this._msgWindow;
};

MK_TextAnimBase.prototype.getMsgTextStatus = function() {
	if (!this._msgWindow) return null;
	else return this._msgWindow._textState; 
};

MK_TextAnimBase.prototype.getMsgContents = function() {
	if (!this._msgWindow) return null;
	else return this._msgWindow.contents; 
};



// --------------------------------
// 添加目标

// 示例
//MK_TextAnimBase.prototype.onAddTarget = function(targetObj, textStatus, contents) {
//	MK_SpriteAnimBase.prototype.onAddTarget.apply(this, arguments);
//	textStatus = textStatus || this.getMsgTextStatus;
//	contents   = contents   || this.getMsgContents;
//};

// 示例
//MK_TextAnimBase.prototype.onInitTarget = function(targetObj, textStatus, contents) {
//	MK_SpriteAnimBase.prototype.onInitTarget.apply(this, arguments);
//	textStatus = textStatus || this.getMsgTextStatus;
//	contents   = contents   || this.getMsgContents;
//};





// ----------------------------------------------------------------
// MK_TextAnim_Fade
// 文本动画派生类-fade

function MK_TextAnim_Fade() {
    this.initialize.apply(this, arguments);
};

MK_TextAnim_Fade.prototype = Object.create(MK_TextAnimBase.prototype);
MK_TextAnim_Fade.prototype.constructor = MK_TextAnim_Fade;

MK_TextAnim_Fade._DEFAULT_ANIM_CODE = 1;

MK_TextAnim_Fade._PARAM_CONFIG = [
	['opacityStart', 	'number', 0],
	['opacityEnd', 		'number', 255],
	['opacitySpeed', 	'number', 5],
];

////MK_TextAnim_Fade.prototype.onCreate = function() {
////	MK_TextAnimBase.prototype.onCreate.apply(this, arguments);
//MK_TextAnim_Fade.prototype.onStart = function() {
//	MK_TextAnimBase.prototype.onStart.apply(this, arguments);
//	////this._targets.forEach(function(s) {
//	////	s.opacity = 0;
//	////}, this);
//	////this._targets[0].opacity = 0;
//	//var s = this.getTarget();
//	//if (!s) return ;
//	////s.opacity = 0;
//	//s.opacity = this.getParam('opacityStart');
//	var opacityStart = this.getParam('opacityStart');
//	this.getTargets().forEach(function(obj) {
//		if (!obj || !obj.sprite) return ;
//		s = obj.sprite;
//		v = obj.var;
//		s.opacity = opacityStart;
//	}, this);
//};
MK_TextAnim_Fade.prototype.onInitTarget = function(obj) {
	MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
	if (!obj || !obj.sprite) return ;
	s = obj.sprite;
	v = obj.var;

	var opacityStart = this.getParam('opacityStart');

	s.opacity = opacityStart;
};

MK_TextAnim_Fade.prototype.onPlaying = function() {
	MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
	//var s = this.getTarget();
	//if (!s) return ;
	////if (s.opacity < this.getParam('opacityEnd')) {
	////	s.opacity += this.getParam('opacitySpeed');
	////}
	////else {
	////	this.setFlagStopOn();
	////}
	//// ？不一定从小变大，也能从大变小 ...
	//var startO = this.getParam('opacityStart');
	//var   endO = this.getParam('opacityEnd'  );
	//var speedO = this.getParam('opacitySpeed');
	//var hasChange = false;
	//var   nowO = s.opacity;
	//if ((startO <= nowO && nowO < endO) || (startO >= nowO && nowO > endO)) {
	//	// 在变化范围(startO~endO)内
	//	s.opacity += speedO;
	//	hasChange = true;
	//}
	//if (!hasChange) {
	//	this.setFlagStopOn();
	//}

	// ？部分动画不再自动停止 ...
	// ？因为目标精灵可能在播放时添加 ...
	// ？保证目标精灵在结束状态下时不再变化即可 ...

	var startO = this.getParam('opacityStart');
	var   endO = this.getParam('opacityEnd'  );
	var speedO = this.getParam('opacitySpeed');
	this.getTargets().forEach(function(obj) {
		if (!obj || !obj.sprite) return ;
		s = obj.sprite;
		v = obj.var;
		var nowO = s.opacity;
		if ((startO <= nowO && nowO < endO) || (startO >= nowO && nowO > endO)) {
			// 在变化范围(startO~endO)内
			s.opacity += speedO;
		}
	}, this);
};





// ----------------------------------------------------------------
// MK_TextAnim_Zoom
// 文本动画派生类-zoom

function MK_TextAnim_Zoom() {
    this.initialize.apply(this, arguments);
};

MK_TextAnim_Zoom.prototype = Object.create(MK_TextAnimBase.prototype);
MK_TextAnim_Zoom.prototype.constructor = MK_TextAnim_Zoom;

MK_TextAnim_Zoom._DEFAULT_ANIM_CODE = 2;

MK_TextAnim_Zoom._PARAM_CONFIG = [
	['opacityStart', 	'number', 0],
	['opacityEnd', 		'number', 255],
	['opacitySpeed', 	'number', 4],
	['scaleXStart', 	'number', 2.0],
	['scaleXEnd', 		'number', 1.0],
	['scaleXSpeed', 	'number', -0.04],
	['scaleYStart', 	'number', 2.0],
	['scaleYEnd', 		'number', 1.0],
	['scaleYSpeed', 	'number', -0.04],
];

MK_TextAnim_Zoom.prototype.onInitTarget = function(obj) {
	MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
	if (!obj || !obj.sprite) return ;
	s = obj.sprite;
	v = obj.var;

	var opacityStart = this.getParam('opacityStart');
	var scaleXStart  = this.getParam('scaleXStart');
	var scaleYStart  = this.getParam('scaleYStart');

	s.opacity = opacityStart;
	s.scale.x = scaleXStart;
	s.scale.y = scaleYStart;
};

MK_TextAnim_Zoom.prototype.onPlaying = function() {
	MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
	//var s = this.getTarget();
	//if (!s) return ;
	//var startO = this.getParam('opacityStart');
	//var   endO = this.getParam('opacityEnd'  );
	//var speedO = this.getParam('opacitySpeed');
	//var startX = this.getParam('scaleXStart');
	//var   endX = this.getParam('scaleXEnd'  );
	//var speedX = this.getParam('scaleXSpeed');
	//var startY = this.getParam('scaleYStart');
	//var   endY = this.getParam('scaleYEnd'  );
	//var speedY = this.getParam('scaleYSpeed');
	//
	//var hasChange = false;
	//
	//var   nowO = s.opacity;
	//if ((startO <= nowO && nowO < endO) || (startO >= nowO && nowO > endO)) {
	//	// 在变化范围(startO~endO)内
	//	s.opacity += speedO;
	//	hasChange = true;
	//}
	//var   nowX = s.scale.x;
	//if ((startX <= nowX && nowX < endX) || (startX >= nowX && nowX > endX)) {
	//	// 在变化范围(startO~endO)内
	//	s.scale.x += speedX;
	//	hasChange = true;
	//}
	//else {
	//	s.scale.x = endX;
	//}
	//var   nowY = s.scale.y;
	//if ((startY <= nowY && nowY < endY) || (startY >= nowY && nowY > endY)) {
	//	// 在变化范围(startO~endO)内
	//	s.scale.y += speedY;
	//	hasChange = true;
	//}
	//else {
	//	s.scale.y = endY;
	//}
	//
	//if (!hasChange) {
	//	this.setFlagStopOn();
	//}

	var startO = this.getParam('opacityStart');
	var   endO = this.getParam('opacityEnd'  );
	var speedO = this.getParam('opacitySpeed');
	var startX = this.getParam('scaleXStart');
	var   endX = this.getParam('scaleXEnd'  );
	var speedX = this.getParam('scaleXSpeed');
	var startY = this.getParam('scaleYStart');
	var   endY = this.getParam('scaleYEnd'  );
	var speedY = this.getParam('scaleYSpeed');

	this.getTargets().forEach(function(obj) {
		if (!obj || !obj.sprite) return ;
		s = obj.sprite;
		v = obj.var;
		var   nowO = s.opacity;
		if ((startO <= nowO && nowO < endO) || (startO >= nowO && nowO > endO)) {
			// 在变化范围(startO~endO)内
			s.opacity += speedO;
		}
		var   nowX = s.scale.x;
		if ((startX <= nowX && nowX < endX) || (startX >= nowX && nowX > endX)) {
			// 在变化范围(startO~endO)内
			s.scale.x += speedX;
		}
		else {
			s.scale.x = endX;
		}
		var   nowY = s.scale.y;
		if ((startY <= nowY && nowY < endY) || (startY >= nowY && nowY > endY)) {
			// 在变化范围(startO~endO)内
			s.scale.y += speedY;
		}
		else {
			s.scale.y = endY;
		}
	}, this);
};





// ----------------------------------------------------------------
// MK_TextAnim_Zoom2
// 文本动画派生类-zoom2

function MK_TextAnim_Zoom2() {
    this.initialize.apply(this, arguments);
};

MK_TextAnim_Zoom2.prototype = Object.create(MK_TextAnim_Zoom.prototype);
MK_TextAnim_Zoom2.prototype.constructor = MK_TextAnim_Zoom2;

MK_TextAnim_Zoom2._DEFAULT_ANIM_CODE = 3;

MK_TextAnim_Zoom2._PARAM_CONFIG = [
	['opacityStart', 	'number', 0],
	['opacityEnd', 		'number', 255],
	['opacitySpeed', 	'number', 4],
	['scaleXStart', 	'number', -1.0],
	['scaleXEnd', 		'number', 1.0],
	['scaleXSpeed', 	'number', +0.02],
	['scaleYStart', 	'number', 2.0],
	['scaleYEnd', 		'number', 1.0],
	['scaleYSpeed', 	'number', -0.02],
];





/*
// ----------------------------------------------------------------
// MK_TextAnim_Wipe
// 文本动画派生类-wipe

function MK_TextAnim_Shake() {
    this.initialize.apply(this, arguments);
};

MK_TextAnim_Wipe.prototype = Object.create(MK_TextAnimBase.prototype);
MK_TextAnim_Wipe.prototype.constructor = MK_TextAnim_Wipe;

MK_TextAnim_Wipe._DEFAULT_ANIM_CODE = 4;

MK_TextAnim_Wipe._PARAM_CONFIG = [
];

MK_TextAnim_Wipe.prototype.onStart = function() {
	MK_TextAnimBase.prototype.onStart.apply(this, arguments);
	var s = this.getTarget();
	if (!s) return ;
	//var np = this._letters[i].d === 0 ? this.fontsz() + 20 : -(this.fontsz() + 20);
	//if (this.pos() === 0) {
	//	this._letters[i].y += np;
	//} else {
	//	this._letters[i].x += np;
	//};
};
/*
xxx.onInitTarget = function(obj) {
	MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
	if (!obj || !obj.sprite) return ;
	s = obj.sprite;
	v = obj.var;
	* /

MK_TextAnim_Wipe.prototype.onPlaying = function() {
	MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
	var s = this.getTarget();
	if (!s) return ;

	this.getTargets().forEach(function(obj) {
		if (!obj || !obj.sprite) return ;
		s = obj.sprite;
		v = obj.var;
	}, this);

	if (this.pos() === 0) { // ？...
		if (s.y > s.org[1]) {
			s.y -= 1.5;
			if (s.y < s.org[1]) { s.y = s.org[1] };
		}
		else if (s.y < s.org[1]) {
			s.y += 1.5;
			if (s.y > s.org[1]) { s.y = s.org[1] };		 
		};
	} else {
		if (s.x > s.org[0]) {
			s.x -= 1.5;
			if (s.x < s.org[0]) { s.x = s.org[0] };
		}
		else if (s.x < s.org[0]) {
			s.x += 1.5;
			if (s.x > s.org[0]) { s.x = s.org[0] };		 
		};
	};
};

MK_TextAnim_Wipe.prototype.onStop = function() {
	MK_TextAnimBase.prototype.onStop.apply(this, arguments);
	var s = this.getTarget();
	if (!s) return ;
};
*/
// TODO





// ----------------------------------------------------------------
// MK_TextAnim_Shake
// 文本动画派生类-shake

function MK_TextAnim_Shake() {
    this.initialize.apply(this, arguments);
};

MK_TextAnim_Shake.prototype = Object.create(MK_TextAnimBase.prototype);
MK_TextAnim_Shake.prototype.constructor = MK_TextAnim_Shake;

MK_TextAnim_Shake._DEFAULT_ANIM_CODE = 5;

MK_TextAnim_Shake._PARAM_CONFIG = [
	['shakeWaitCount', 	'number', 3], // 震动等待计数(震动速度)
	['shakeAmplitude', 	'number', 3], // 震动幅度
	['shakeNeedStop', 	'number', 0], // 是否需要停止 (>0:需要)
	['shakeTotalCount', 'number', 12], // 震动总计数(震动时间)
];
// ？总帧数 是 整体帧数 还是 每个精灵的帧数 ...
// ？选择后者，因为前者可以用等待加手动停止实现 ...

MK_TextAnim_Shake.prototype.onInitTarget = function(obj) {
	MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
	//this._shakeCount = 0;
	//this._shakeWaitCount = 0;
	//var s = this.getTarget();
	//if (!s) return ;
	//this._orgX = s.x;
	//this._orgY = s.y;

	if (!obj || !obj.sprite) return ;
	s = obj.sprite;
	v = obj.var;

	v._orgX = s.x;
	v._orgY = s.y;
	v._shakeCount = 0;
	v._shakeWaitCount = 0;
};

MK_TextAnim_Shake.prototype.onPlaying = function() {
	MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
	//var s = this.getTarget();
	//if (!s) return ;
	//
	//var needStop = this.getParam('shakeNeedStop');
	//var totalCount = this.getParam('shakeTotalCount');
	//var waitCount = this.getParam('shakeWaitCount');
	//var amplitude = this.getParam('shakeAmplitude');
	//
	//this._shakeWaitCount++;
	//if (this._shakeWaitCount < waitCount) {
	//	this._shakeWaitCount = 0;
	//	var rnd1 = Math.randomInt(2 * amplitude) - amplitude;
	//	var rnd2 = Math.randomInt(2 * amplitude) - amplitude;
	//	s.x = rnd1 + this._orgX;
	//	s.y = rnd2 + this._orgY;
	//}
	//
	//this._shakeCount++;
	//if (needStop > 0 && this._shakeCount >= totalCount) {
	//	this.setFlagStopOn();
	//}

	var waitCount = this.getParam('shakeWaitCount');
	var amplitude = this.getParam('shakeAmplitude');
	var needStop = this.getParam('shakeNeedStop');
	var totalCount = this.getParam('shakeTotalCount');

	this.getTargets().forEach(function(obj) {
		if (!obj || !obj.sprite) return ;
		s = obj.sprite;
		v = obj.var;
		if (needStop > 0 && v._shakeCount >= totalCount) {
			s.x = v._orgX;
			s.y = v._orgY;
		}
		else {
			v._shakeCount++;
			v._shakeWaitCount++;
			if (v._shakeWaitCount >= waitCount) {
				v._shakeWaitCount = 0;
				var rnd1 = Math.randomInt(2 * amplitude) - amplitude;
				var rnd2 = Math.randomInt(2 * amplitude) - amplitude;
				s.x = rnd1 + v._orgX;
				s.y = rnd2 + v._orgY;
			}
		}
	}, this);
};

//MK_TextAnim_Shake.prototype.onStop = function() {
//	MK_TextAnimBase.prototype.onStop.apply(this, arguments);
//	var s = this.getTarget();
//	if (!s) return ;
//	s.x = s._orgX;
//	s.y = s._orgY;
//};





// ----------------------------------------------------------------
// MK_TextAnim_Zoom3
// 文本动画派生类-zoom3

function MK_TextAnim_Zoom3() {
    this.initialize.apply(this, arguments);
};

MK_TextAnim_Zoom3.prototype = Object.create(MK_TextAnim_Zoom.prototype);
MK_TextAnim_Zoom3.prototype.constructor = MK_TextAnim_Zoom3;

MK_TextAnim_Zoom3._DEFAULT_ANIM_CODE = 6;

MK_TextAnim_Zoom3._PARAM_CONFIG = [
	['opacityStart', 	'number', 0],
	['opacityEnd', 		'number', 255],
	['opacitySpeed', 	'number', 20],
	['scaleXStart', 	'number', 4.0],
	['scaleXEnd', 		'number', 1.0],
	['scaleXSpeed', 	'number', -0.2],
	['scaleYStart', 	'number', 4.0],
	['scaleYEnd', 		'number', 1.0],
	['scaleYSpeed', 	'number', -0.2],
	['shakeAmplitude', 	'number', 3], // 震动幅度
	['shakeWaitCount', 	'number', 3],  // 震动等待计数(震动速度)
	['shakeNeedStop', 	'number', 0], // 是否需要停止 (>0:需要)
	['shakeTotalCount', 'number', 12], // 震动总计数(震动时间)
];

MK_TextAnim_Zoom3.prototype.onInitTarget = function(obj) {
	MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
	//this._subPhase = 1;
	//this._shakeCount = 0;
	//this._shakeWaitCount = 0;
	//var s = this.getTarget();
	//if (!s) return ;
	//this._orgX = s.x;
	//this._orgY = s.y;

	if (!obj || !obj.sprite) return ;
	s = obj.sprite;
	v = obj.var;

	var opacityStart = this.getParam('opacityStart');

	s.opacity = opacityStart;
	v._subPhase = 1;
	v._shakeCount = 0;
	v._shakeWaitCount = 0;
	v._orgX = s.x;
	v._orgY = s.y;
};

MK_TextAnim_Zoom3.prototype.onPlaying = function() {
	MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
	//var s = this.getTarget();
	//if (!s) return ;
	//
	//if (this._subPhase == 1) {
	//	var startO = this.getParam('opacityStart');
	//	var   endO = this.getParam('opacityEnd'  );
	//	var speedO = this.getParam('opacitySpeed');
	//	var startX = this.getParam('scaleXStart');
	//	var   endX = this.getParam('scaleXEnd'  );
	//	var speedX = this.getParam('scaleXSpeed');
	//	var startY = this.getParam('scaleYStart');
	//	var   endY = this.getParam('scaleYEnd'  );
	//	var speedY = this.getParam('scaleYSpeed');
	//
	//	var hasChange = false;
	//
	//	var   nowO = s.opacity;
	//	if ((startO <= nowO && nowO < endO) || (startO >= nowO && nowO > endO)) {
	//		// 在变化范围(startO~endO)内
	//		s.opacity += speedO;
	//		hasChange = true;
	//	}
	//	var   nowX = s.scale.x;
	//	if ((startX <= nowX && nowX < endX) || (startX >= nowX && nowX > endX)) {
	//		// 在变化范围(startO~endO)内
	//		s.scale.x += speedX;
	//		hasChange = true;
	//	}
	//	else {
	//		s.scale.x = endX;
	//	}
	//	var   nowY = s.scale.y;
	//	if ((startY <= nowY && nowY < endY) || (startY >= nowY && nowY > endY)) {
	//		// 在变化范围(startO~endO)内
	//		s.scale.y += speedY;
	//		hasChange = true;
	//	}
	//	else {
	//		s.scale.y = endY;
	//	}
	//
	//	if (!hasChange) {
	//		this._subPhase = 2;
	//	}
	//}
	//
	//if (this._subPhase == 2) {
	//	var shakeTotalCount = this.getParam('shakeTotalCount');
	//	this._shakeCount++;
	//	this.onPlaying_shake();
	//	if (this._shakeCount >= shakeTotalCount) { 
	//		// 还原，也可以放在onStop
	//		s.x = s._orgX;
	//		s.y = s._orgY;
	//		this._subPhase = 3;
	//	};		 
	//};
	//
	//if (this._subPhase == 3) {
	//	this.setFlagStopOn();
	//}

	var startO = this.getParam('opacityStart');
	var   endO = this.getParam('opacityEnd'  );
	var speedO = this.getParam('opacitySpeed');
	var startX = this.getParam('scaleXStart');
	var   endX = this.getParam('scaleXEnd'  );
	var speedX = this.getParam('scaleXSpeed');
	var startY = this.getParam('scaleYStart');
	var   endY = this.getParam('scaleYEnd'  );
	var speedY = this.getParam('scaleYSpeed');

	var shakeWaitCount = this.getParam('shakeWaitCount');
	var shakeAmplitude = this.getParam('shakeAmplitude');

	var shakeNeedStop   = this.getParam('shakeNeedStop');
	var shakeTotalCount = this.getParam('shakeTotalCount');

	this.getTargets().forEach(function(obj) {
		if (!obj || !obj.sprite) return ;
		s = obj.sprite;
		v = obj.var;

		if (v._subPhase == 1) {
			var hasChange = false;
			var   nowO = s.opacity;
			if ((startO <= nowO && nowO < endO) || (startO >= nowO && nowO > endO)) {
				// 在变化范围(startO~endO)内
				s.opacity += speedO;
				hasChange = true;
			}
			var   nowX = s.scale.x;
			if ((startX <= nowX && nowX < endX) || (startX >= nowX && nowX > endX)) {
				// 在变化范围(startO~endO)内
				s.scale.x += speedX;
				hasChange = true;
			}
			else {
				s.scale.x = endX;
			}
			var   nowY = s.scale.y;
			if ((startY <= nowY && nowY < endY) || (startY >= nowY && nowY > endY)) {
				// 在变化范围(startO~endO)内
				s.scale.y += speedY;
				hasChange = true;
			}
			else {
				s.scale.y = endY;
			}
		
			if (!hasChange) {
				v._subPhase = 2;
			}
		}
		
		if (v._subPhase == 2) {
			v._shakeCount++;
			//v.onPlaying_shake();
			//v.playing_shake(obj);
			this.playing_shake(obj, shakeWaitCount, shakeAmplitude);
			if (shakeNeedStop > 0 && v._shakeCount >= shakeTotalCount) {
				s.x = v._orgX;
				s.y = v._orgY;
				v._subPhase = 3;
			};		 
		};
	}, this);
};

//MK_TextAnim_Zoom3.prototype.onPlaying_shake = function() {
//	this._shakeWaitCount++;
//	var shakeWaitCount = this.getParam('shakeWaitCount');
//	if (this._shakeWaitCount < shakeWaitCount) return ;
//	this._shakeWaitCount = 0;
//	var s = this.getTarget();
//	if (!s) return ;
//	var shakeAmplitude = this.getParam('shakeAmplitude');
//	var rnd1 = Math.randomInt(2 * shakeAmplitude) - shakeAmplitude;
//	var rnd2 = Math.randomInt(2 * shakeAmplitude) - shakeAmplitude;
//	s.x = rnd1 + this._orgX;
//	s.y = rnd2 + this._orgY;
//};

// ？不需要循环所有目标，需要指定目标 ...
// 这里只负责更新震动，不负责判断是否需要或者是否停止震动
// ？为了效率考虑，也不获取动画参数，而是靠传入 ...
MK_TextAnim_Zoom3.prototype.playing_shake = function(targetObj, waitCount, amplitude) {
	var obj = targetObj;
	if (!obj || !obj.sprite) return ;
	s = obj.sprite;
	v = obj.var;
	v._shakeWaitCount++;
	if (v._shakeWaitCount >= waitCount) {
		v._shakeWaitCount = 0;
		var rnd1 = Math.randomInt(2 * amplitude) - amplitude;
		var rnd2 = Math.randomInt(2 * amplitude) - amplitude;
		s.x = rnd1 + v._orgX;
		s.y = rnd2 + v._orgY;
	}
};

// ？TODO : 允许把多个动画拼接 ...





// ----------------------------------------------------------------
// MK_TextAnim_Wave
// 文本动画派生类-wave

function MK_TextAnim_Wave() {
    this.initialize.apply(this, arguments);
};

MK_TextAnim_Wave.prototype = Object.create(MK_TextAnimBase.prototype);
MK_TextAnim_Wave.prototype.constructor = MK_TextAnim_Wave;

MK_TextAnim_Wave._DEFAULT_ANIM_CODE = 7;

MK_TextAnim_Wave._PARAM_CONFIG = [
	['scaleSpeed', 	'number', 0.015], // 缩放速度
	['scaleCount', 	'number',    30], // 缩放帧数(来回共两次)
	['loopTotal', 	'number',     1], // 总循环次数
];

MK_TextAnim_Wave.prototype.onInitTarget = function(obj) {
	MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
	//var s = this.getTarget();
	//if (!s) return ;
	//
	//this._animCount = 0; // s.ani[0]
	//this._loopCount = 0;

	if (!obj || !obj.sprite) return ;
	s = obj.sprite;
	v = obj.var;

	v._animCount = 0; // s.ani[0]
	v._loopCount = 0;
};

MK_TextAnim_Wave.prototype.onPlaying = function() {
	MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
	//var s = this.getTarget();
	//if (!s) return ;
	//
	//var scaleSpeed = this.getParam('scaleSpeed');
	//var scaleCount = this.getParam('scaleCount');
	//var loopTotal  = this.getParam('loopTotal');
	//
	//this._animCount++; 
	//if (this._animCount <= 1 * scaleCount) {
	//	s.scale.x += scaleSpeed;
	//}
	//else if (this._animCount <= 2 * scaleCount) {
	//	s.scale.x -= scaleSpeed;
	//}
	//else {
	//	//s.scale.x = 1;
	//	this._animCount = 0;
	//	this._loopCount++;
	//};
	//s.scale.y = s.scale.x;
	//
	//if (this._loopCount >= loopTotal) {
	//	this.setFlagStopOn();
	//}

	var scaleSpeed = this.getParam('scaleSpeed');
	var scaleCount = this.getParam('scaleCount');
	var loopTotal  = this.getParam('loopTotal');

	this.getTargets().forEach(function(obj) {
		if (!obj || !obj.sprite) return ;
		s = obj.sprite;
		v = obj.var;
		v._animCount++; 
		if (v._animCount <= 1 * scaleCount) {
			s.scale.x += scaleSpeed;
		}
		else if (v._animCount <= 2 * scaleCount) {
			s.scale.x -= scaleSpeed;
		}
		else {
			//s.scale.x = 1;
			v._animCount = 0;
			v._loopCount++;
		};
		s.scale.y = s.scale.x;
		
		if (v._loopCount >= loopTotal) {
			s.scale.x = s.scale.y = 1.00;
		}
	}, this);
};

//MK_TextAnim_Wave.prototype.onStop = function() {
//	MK_TextAnimBase.prototype.onStop.apply(this, arguments);
//	var s = this.getTarget();
//	if (!s) return ;
//	s.scale.x = s.scale.y = 1.00;
//};





// ----------------------------------------------------------------
// MK_TextAnim_Rotation
// 文本动画派生类-rotation

function MK_TextAnim_Rotation() {
    this.initialize.apply(this, arguments);
};

MK_TextAnim_Rotation.prototype = Object.create(MK_TextAnimBase.prototype);
MK_TextAnim_Rotation.prototype.constructor = MK_TextAnim_Rotation;

MK_TextAnim_Rotation._DEFAULT_ANIM_CODE = 8;

MK_TextAnim_Rotation._PARAM_CONFIG = [
	['xx1', 	'number', 63], 
	['xx2', 	'number', 120], 
	['xx3', 	'number', 0.1], 
]; // TODO

MK_TextAnim_Rotation.prototype.onInitTarget = function(obj) {
	MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
	//var s = this.getTarget();
	//if (!s) return ;
	//this._animCount = 0;

	if (!obj) return ;
	s = obj.sprite;
	v = obj.var;

	v._animCount = 0;
};

MK_TextAnim_Rotation.prototype.onPlaying = function() {
	MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
	//var s = this.getTarget();
	//if (!s) return ;
	//
	//var xx1 = this.getParam('xx1');
	//var xx2 = this.getParam('xx2');
	//var xx3 = this.getParam('xx3');
	//
	//this._animCount++;
	//if (this._animCount <= xx1) {
	//	s.rotation += xx3;
	//}
	//else if (this._animCount <= xx2) {
	//	s.rotation = 0;
	//}
	//else {
	//	s.rotation = 0;
	//	this._animCount = 0;
	//};

	var xx1 = this.getParam('xx1');
	var xx2 = this.getParam('xx2');
	var xx3 = this.getParam('xx3');

	this.getTargets().forEach(function(obj) {
		if (!obj || !obj.sprite) return ;
		s = obj.sprite;
		v = obj.var;

		v._animCount++;
		if (v._animCount <= xx1) {
			s.rotation += xx3;
		}
		else if (v._animCount <= xx2) {
			s.rotation = 0;
		}
		else {
			s.rotation = 0;
			v._animCount = 0;
		};
	}, this);

    // TODO : 总播放帧
    // ？？改 总播放帧为循环次数 ...

};

//MK_TextAnim_Rotation.prototype.onStop = function() {
//	MK_TextAnimBase.prototype.onStop.apply(this, arguments);
//	var s = this.getTarget();
//	if (!s) return ;
//	//s.rotation = 0;
//};




// ----------------------------------------------------------------
// MK_TextAnim_Swing
// 文本动画派生类-swing

function MK_TextAnim_Swing() {
    this.initialize.apply(this, arguments);
};

MK_TextAnim_Swing.prototype = Object.create(MK_TextAnimBase.prototype);
MK_TextAnim_Swing.prototype.constructor = MK_TextAnim_Swing;

MK_TextAnim_Swing._DEFAULT_ANIM_CODE = 9;

MK_TextAnim_Swing._PARAM_CONFIG = [
	['rotateSpeed', 	'number', 0.02], // 旋转速度 (角度/帧)
	['rotateInitDir', 	'string',  'R'], // 初始旋转方向(L:逆时针,R:顺时针,其他:'L')
	['angleInit', 		'number',    0], // 初始角度
	['angleRangeL', 	'number', -0.4], // 角度左范围
	['angleRangeR', 	'number',  0.4], // 角度右范围
];

MK_TextAnim_Swing.prototype.onInitTarget = function(obj) {
	MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
	//var s = this.getTarget();
	//if (!s) return ;
	//
	//var rotateInitDir = this.getParam('rotateInitDir');
	//var angleInit     = this.getParam('angleInit');
	//
	//this._rotateR = (rotateInitDir == 'R');
	//s.rotation = angleInit;

	if (!obj || !obj.sprite) return ;
	s = obj.sprite;
	v = obj.var;

	var rotateInitDir = this.getParam('rotateInitDir');
	var angleInit     = this.getParam('angleInit');

	v._rotateR = (rotateInitDir == 'R');
	s.rotation = angleInit;
};

MK_TextAnim_Swing.prototype.onPlaying = function() {
	MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
	//var s = this.getTarget();
	//if (!s) return ;
	//
	//var rotateSpeed = this.getParam('rotateSpeed');
	//var angleRangeL = this.getParam('angleRangeL');
	//var angleRangeR = this.getParam('angleRangeR');
	//
	//if (this._rotateR) {
	//	s.rotation += rotateSpeed;
	//	if (s.rotation > angleRangeR) { 
	//	    s.rotation = angleRangeR;
	//        this._rotateR = false;
	//	};
	//} else {
	//	s.rotation -= rotateSpeed;
	//	if (s.rotation < angleRangeL) { 
	//	    s.rotation = angleRangeL;
	//        this._rotateR = true;
	//	};
	//};

	var rotateSpeed = this.getParam('rotateSpeed');
	var angleRangeL = this.getParam('angleRangeL');
	var angleRangeR = this.getParam('angleRangeR');

	this.getTargets().forEach(function(obj) {
		if (!obj || !obj.sprite) return ;
		s = obj.sprite;
		v = obj.var;
		if (v._rotateR) {
			s.rotation += rotateSpeed;
			if (s.rotation > angleRangeR) { 
			    s.rotation = angleRangeR;
		       v._rotateR = false;
			};
		} else {
			s.rotation -= rotateSpeed;
			if (s.rotation < angleRangeL) { 
			    s.rotation = angleRangeL;
		       v._rotateR = true;
			};
		};

    	// s.rotation = 0;

	}, this);

    // TODO : 总播放帧
};

//MK_TextAnim_Swing.prototype.onStop = function() {
//	MK_TextAnimBase.prototype.onStop.apply(this, arguments);
//	var s = this.getTarget();
//	if (!s) return ;
//	s.rotation = 0;
//};





// ----------------------------------------------------------------
// MK_TextAnim_Random
// 文本动画派生类-random

function MK_TextAnim_Random() {
    this.initialize.apply(this, arguments);
};

MK_TextAnim_Random.prototype = Object.create(MK_TextAnimBase.prototype);
MK_TextAnim_Random.prototype.constructor = MK_TextAnim_Random;

MK_TextAnim_Random._DEFAULT_ANIM_CODE = 10;

MK_TextAnim_Random._PARAM_CONFIG = [
	['opacityStart', 	'number', 0],
	['opacityEnd', 		'number', 255],
	['opacitySpeed', 	'number', 4],
	['scaleRangeMin', 	'number', 0.7], 
	['scaleRangeMax', 	'number', 1.4], 
	['rotateRange', 	'number', 0.4], 
	['rotateDir', 		'string', 'R'], // 旋转方向(L:逆时针,R:顺时针,其他:'L')
];

MK_TextAnim_Random.prototype.onInitTarget = function(obj) {
	MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
	//var s = this.getTarget();
	//if (!s) return ;
	//
	//var scaleRangeMin = this.getParam('scaleRangeMin');
	//var scaleRangeMax = this.getParam('scaleRangeMax');
	//var scaleRadomSize = scaleRangeMax - scaleRangeMin;
	//
	//var rotateRange = this.getParam('rotateRange');
	//var rotateDir = this.getParam('rotateDir');
	//
	//s.opacity = 0;
	//s.scale.x = s.scale.y = Math.random() * scaleRadomSize + scaleRangeMin;
	//s.rotation = (Math.random() * rotateRange) * (rotateDir == 'R' ? 1: -1);

	if (!obj || !obj.sprite) return ;
	s = obj.sprite;
	v = obj.var;

	var scaleRangeMin = this.getParam('scaleRangeMin');
	var scaleRangeMax = this.getParam('scaleRangeMax');
	var scaleRadomSize = scaleRangeMax - scaleRangeMin;

	var rotateRange = this.getParam('rotateRange');
	var rotateDir = this.getParam('rotateDir');
	
	s.opacity = 0;
	s.scale.x = s.scale.y = Math.random() * scaleRadomSize + scaleRangeMin;
	s.rotation = (Math.random() * rotateRange) * (rotateDir == 'R' ? 1: -1);
};

MK_TextAnim_Random.prototype.onPlaying = function() {
	MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
	//var s = this.getTarget();
	//if (!s) return ;
	//
	//var startO = this.getParam('opacityStart');
	//var   endO = this.getParam('opacityEnd');
	//var speedO = this.getParam('opacitySpeed');
	//
	//var hasChange = false;
	//
	//var   nowO = s.opacity;
	//if ((startO <= nowO && nowO < endO) || (startO >= nowO && nowO > endO)) {
	//	// 在变化范围(startO~endO)内
	//	s.opacity += speedO;
	//	hasChange = true;
	//}
	//
	//if (!hasChange) {
	//	this.setFlagStopOn();
	//}
	
	var startO = this.getParam('opacityStart');
	var   endO = this.getParam('opacityEnd');
	var speedO = this.getParam('opacitySpeed');

	this.getTargets().forEach(function(obj) {
		if (!obj || !obj.sprite) return ;
		s = obj.sprite;
		v = obj.var;
		var nowO = s.opacity;
		if ((startO <= nowO && nowO < endO) || (startO >= nowO && nowO > endO)) {
			// 在变化范围(startO~endO)内
			s.opacity += speedO;
		}
	}, this);

	// TODO : 总播放帧
};


// FINISH : 改成对所有目标有效





// ----------------------------------------------------------------
// MK_TextAnim_Karaoke
// 文本动画派生类-karaoke

// FINISH : 把 KTV 改名为 Karaoke

function MK_TextAnim_Karaoke() {
    this.initialize.apply(this, arguments);
};

MK_TextAnim_Karaoke.prototype = Object.create(MK_TextAnimBase.prototype);
MK_TextAnim_Karaoke.prototype.constructor = MK_TextAnim_Karaoke;

MK_TextAnim_Karaoke._DEFAULT_ANIM_CODE = 11;

MK_TextAnim_Karaoke._PARAM_CONFIG = [
	['playSpeed', 	'number', 2], // 播放速度(像素/帧)
	['lineWidth', 	'number', 4], 
	['uLineColor', 	'string', '#FFFFFF'], 
	['uTextColor', 	'string', '#000000'], 
	['dLineColor', 	'string', '#000000'], 
	['dTextColor', 	'string', '#FFFFFF'], 
];



/*
MK_TextAnim_Karaoke.prototype.initialize = function(code, msgWindow) {
	MK_TextAnimBase.prototype.initialize.apply(this, arguments);

	// 指定窗口
	// 为了 使用窗口的context的bitmap的配置
	// 为了 获取消息窗口的文本
	this._msgWindow = msgWindow || null;

	// 精灵分组
	//this._spriteGourp = [];
};
*/
// msgWindow部分移至MK_TextAnimBase



/*
// --------------------------------
// 精灵分组

// ？设置分组，然后以组为单位提出到目标列表 ...
// ？TODO : 这个功能是否可以写进基类 ...

MK_TextAnim_Karaoke.prototype.setSpriteGroup = function(groupIndex, sprites) {
	this._spriteGourp[groupIndex] = sprites;
};
MK_TextAnim_Karaoke.prototype.useSpriteGroup = function(groupIndex) {
	this.setTargets(this._spriteGourp[groupIndex]);
};
MK_TextAnim_Karaoke.prototype.getSpriteGroups = function() {
	return this._spriteGourp;
};

MK_TextAnim_Karaoke.prototype.addTargetToGroup = function(groupIndex, sprite) {
	if (!this._spriteGourp[groupIndex]) {
		this._spriteGourp[groupIndex] = [];
	}
	this._spriteGourp[groupIndex].push(sprite);
};

// ？改成 用分组对目标的所有精灵标记，标记播放的行号 ...


MK_TextAnim_Karaoke.prototype.addTargetToGroupByText = function(groupIndex, textState) {
	
};
*/
// ？暂时抛弃这个功能 ...
// ？直接用多个实例即可实现多行播放，而不需要在一个实例中处理 ...



// --------------------------------
// 当添加精灵

/*
MK_TextAnim_Karaoke.prototype.addTargetByMsgWindow = function() {
	if (!this._msgWindow) return ;
	var context = this._msgWindow.contents;
	var textState = this._msgWindow._textState;
	var text = textState.text[textState.index - 1];
*/
// ？动画类里不负责获取文本等逻辑，这部分逻辑由MK_TextBitmap完成 ...
// ？动画类里只负责 对获取到的文本和生成好的精灵进行处理 ...

//MK_TextAnim_Karaoke.prototype.onAddTarget = function(targetObj, textStatus, contents) {
//	MK_TextAnimBase.prototype.onAddTarget.apply(this, arguments);
//	textStatus = textStatus || this.getMsgTextStatus;
//	contents   = contents   || this.getMsgContents;
//	if (!textStatus || !contents) return ;
//	var text = textState.text[textState.index - 1];
//	this.initKtvSprite(targetObj, text, contents);
//};

MK_TextAnim_Karaoke.prototype.onInitTarget = function(targetObj, textStatus, contents) {
	MK_TextAnimBase.prototype.onAddTarget.apply(this, arguments);
	textStatus = textStatus || this.getMsgTextStatus;
	contents   = contents   || this.getMsgContents;
	var text = textState.text[textState.index - 1];
	this.initKtvSprite(targetObj, text, msgBitmap);
};

MK_TextAnim_Karaoke.prototype.initKtvSprite = function(targetObj, text, msgBitmap) {

	var dLineColor = this.getParam('dLineColor');
	var lineWidth  = this.getParam('lineWidth');
	var dTextColor = this.getParam('dTextColor');
	var uLineColor = this.getParam('uLineColor');
	var uTextColor = this.getParam('uTextColor');

	// 记录
	var oldBitmap = msgBitmap; // this._msgWindow.contents
	var old_canvas = oldBitmap._canvas;
	var old_context = oldBitmap._context;
	var old_outlineColor = oldBitmap.outlineColor;
	var old_lineWidth = oldBitmap.lineWidth;
	var old_textColor = oldBitmap.textColor;
	!!oldBitmap.textModeOff && oldBitmap.textModeOff(); // MK_TextBitmap

	// ？可以直接用 MK_TextBitmap 创建sprite ...

	// 下层(down)
	var bitmap1 = new Bitmap(sprite.width, sprite.height);
	var sprite1 = new Sprite(bitmap1);
	oldBitmap._canvas = bitmap1._canvas;
	oldBitmap._context = bitmap1._context;
	oldBitmap.outlineColor = dLineColor;
	oldBitmap.lineWidth = lineWidth;
	oldBitmap.textColor = dTextColor;
	oldBitmap.drawText(text, 0, 0, sprite.width, sprite.height);

	// 上层(up)
	var bitmap2 = new Bitmap(sprite.width, sprite.height);
	var sprite2 = new Sprite(bitmap2);
	oldBitmap._canvas = bitmap2._canvas;
	oldBitmap._context = bitmap2._context;
	oldBitmap.outlineColor = uLineColor;
	oldBitmap.lineWidth = lineWidth;
	oldBitmap.textColor = uTextColor;
	oldBitmap.drawText(text, 0, 0, sprite.width, sprite.height);
	sprite2.setFrame(0, 0, 0, 0);

	// 还原
	oldBitmap._canvas      = old_canvas;
	oldBitmap._context     = old_context;
	oldBitmap.outlineColor = old_outlineColor;
	oldBitmap.lineWidth    = old_lineWidth;
	oldBitmap.textColor    = old_textColor;
	!!oldBitmap.textModeOn && oldBitmap.textModeOn(); // MK_TextBitmap

	// 消除s.bitmap的图案
	s.setFrame(0, 0, 0, 0);

	v._karaokeSprite1 = sprite1;
	v._karaokeSprite2 = sprite2;
	s.addChild(sprite1);
	s.addChild(sprite2);
};



MK_TextAnim_Karaoke.prototype.onCreate = function() {
	MK_TextAnimBase.prototype.onCreate.apply(this, arguments);

	// TODO : create 里分组，

	var sprites = this.getTargets();

	this._endPosX = sprites
	.map(function(s) { return s.x; }, this)
	.filter(function(x) { return !Number.isNaN(x); }, this)
	.concat(0) // default value (min value)
	.reduce(function(xa, xb) { return xa > xb ? xa : xb; }, this); // max

	this._startPosX = sprites
	.map(function(s) { return s.x; }, this)
	.filter(function(x) { return !Number.isNaN(x); }, this)
	.concat(this._endPosX) // default value (max value)
	.reduce(function(xa, xb) { return xa < xb ? xa : xb; }, this); // min

	//this._playWidth = 0;
	//this._totalWidth = this._endPosX - this._startPosX;

	this._playPosX = this._startPosX;

	// 播放速度(像素/帧)，可以改变成员变量以改变播放速度
	// ？区别于用户主动设置的速度，主动设置的修改动画参数 ...
	// ？这个速度可能是动画类自己进行的修改，所以是成员变量，而不是动画参数 ...
	this._playSpeed = this.getParam('playSpeed');

	// === break ===

}; // TODO

MK_TextAnim_Karaoke.prototype.onPlaying = function() {
	MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);

	var sprites = this.getTargets();

	if (!(this._karaokeWidth >= 0)) {
		this._karaokeWidth = 0;
	}
	
	var totalWidth = 0;
	var animSpeed = this.getParam('animSpeed');

	this._karaokeWidth += animSpeed;
	//this._letters.forEach(function(s) {
	this._letters.forEach(function(letter) {
		var s = letter.sprite;
		if (s._needAnim) {
			// 暂时 s 只有一种动画  TODO : ...
	
			s._karaokeTime = totalWidth;
			s._karaokeWidth = this._karaokeWidth;
			//s._karaokeSpeed = animSpeed; // 不再需要计算总完成

			totalWidth += s.bitmap.width;
		}
	}, this);


	// === break ===


	var s = this.getTarget();
	if (!s) return ;

}; // TODO

MK_TextAnim_Karaoke.prototype.onStop = function() {
	MK_TextAnimBase.prototype.onStop.apply(this, arguments);
	var s = this.getTarget();
	if (!s) return ;
}; // TODO

/*
MK_TextSprite.prototype.updateLetter_karaoke = function() {
	if (s._karaokeTime <= s._karaokeWidth) {
		var t = s._karaokeWidth - s._karaokeTime;
    	var w = t > s._karaokeSprite2.bitmap.width ? s._karaokeSprite2.bitmap.width : t;
    	var h = s._karaokeSprite2.bitmap.height;
    	s._karaokeSprite2.setFrame(0, 0, w, h);
	}
};
*/




/*
// ----------------------------------------------------------------
// 配置管理器

// 告诉管理器每个code对应的类

(function () {
	var list = [
		// empty
		MK_TextAnimBase, 		// 0 empty

		// MOG_AnimterdText
		MK_TextAnim_Fade, 		// 1 fade
		MK_TextAnim_Zoom, 		// 2 zoom
		MK_TextAnim_Zoom2, 		// 3 zoom2
		//MK_TextAnim_Wipe, 	// 4 wipe
		null, // tmp
		MK_TextAnim_Shake, 		// 5 shake
		MK_TextAnim_Zoom3, 		// 6 zoom3
		MK_TextAnim_Wave, 		// 7 wave
		MK_TextAnim_Rotation, 	// 8 rotation
		MK_TextAnim_Swing, 		// 9 swing
		MK_TextAnim_Random, 	// 10 random

		// added
		//MK_TextAnim_Karaoke, 	// 11 karaoke
	];
	list.forEach(function(animClass, idx) {
		!!animClass && MK_SpriteAnimManager.setAnimClass(idx, animClass);
	});
})();

// TODO : 增加 通过key找到动画类


// ----------------------------------------------------------------
// 写入动画参数

(function() {

	var pluginName = 'MKP_SpriteAnimationSet';
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
*/



// ----------------------------------------------------------------
// MK_SpriteAnimationSet

function MK_SpriteAnimationSet() {
    throw new Error('MK_SpriteAnimationSet is a static class');
};

MK_SpriteAnimationSet._animationClasses = [];


// --------------------------------
// setter of animation object

MK_SpriteAnimationSet.addSpriteAnimationClass = function(animClass, name, index) {
	//if (animClass instanceof MK_TextAnimBase) {
	if (animClass.constructor instanceof MK_TextAnimBase.constructor) {
		var animObj = {
			class : animClass, 
			name : name || animClass.constructor.name, 
			code : this._animationClasses.length, 
			params : {}, // 暂不使用
		};
		if (index === undefined) {
			this._animationClasses.push(animObj);
		}
		else {
			animObj.code = index;
			this._animationClasses[index] = animObj;
		}
	}
	else {
		console.warn(`invalid sprite animtion class.`, animClass, name, index);
		this._animationClasses.push(null);
	}
};


// --------------------------------
// getter of animation object

MK_SpriteAnimationSet.getSpriteAnimObjByCode = function(code) {
	return this._animationClasses[code];
};
MK_SpriteAnimationSet.getSpriteAnimObjByName = function(name) {
	return this._animationClasses.find(obj => obj && obj.name == name);
};

MK_SpriteAnimationSet.getSpriteAnimClassByCode = function(code) {
	var obj = this.getSpriteAnimObjByCode(code);
	return !!obj ? obj.class : null;
};
MK_SpriteAnimationSet.getSpriteAnimClassByName = function(name) {
	var obj = this.getSpriteAnimObjByName(name);
	return !!obj ? obj.class : null;
};

MK_SpriteAnimationSet.getSpriteAnimParamsByCode = function(code) {
	var obj = this.getSpriteAnimObjByCode(code);
	return !!obj ? obj.params : null;
};
MK_SpriteAnimationSet.getSpriteAnimParamsByName = function(name) {
	var obj = this.getSpriteAnimObjByName(name);
	return !!obj ? obj.params : null;
};


// --------------------------------
// setter of animation default parameters

MK_SpriteAnimationSet.setSpriteAnimParamsByCode = function(code, key, value) {
	var obj = this.getSpriteAnimObjByCode(code);
	if (!!obj) {
		obj.params[key] = value;
	}
	else {
		console.warn(`not found animtion class by code "${code}".`, code, key, value);
	}
};
MK_SpriteAnimationSet.setSpriteAnimParamsByName = function(name, key, value) {
	var obj = this.getSpriteAnimObjByName(name);
	if (!!obj) {
		obj.params[key] = value;
	}
	else {
		console.warn(`not found animtion class by name "${name}".`, name, key, value);
	}
};


// --------------------------------
// getter of animation default parameters

MK_SpriteAnimationSet.getSpriteAnimParamsByCode = function(code, key) {
	var obj = this.getSpriteAnimObjByCode(code);
	if (!!obj) {
		return obj.params[key];
	}
	else {
		console.warn(`not found animtion class by code "${code}".`, code, key, value);
	}
};
MK_SpriteAnimationSet.getSpriteAnimParamsByName = function(name, key) {
	var obj = this.getSpriteAnimObjByName(name);
	if (!!obj) {
		return obj.params[key];
	}
	else {
		console.warn(`not found animtion class by name "${name}".`, name, key, value);
	}
};


MK_Plugins.class['MK_SpriteAnimationSet'] = MK_SpriteAnimationSet;


// --------------------------------
// init add animtion classes

/*
(function() {

// empty
MK_SpriteAnimationSet.addSpriteAnimationClass(MK_TextAnimBase); // 0 empty

// MOG_AnimterdText
MK_SpriteAnimationSet.addSpriteAnimationClass(MK_TextAnim_Fade); // 1 fade
MK_SpriteAnimationSet.addSpriteAnimationClass(MK_TextAnim_Zoom); // 2 zoom
MK_SpriteAnimationSet.addSpriteAnimationClass(MK_TextAnim_Zoom2); // 3 zoom2
MK_SpriteAnimationSet.addSpriteAnimationClass(MK_TextAnimBase); // 4 wipe (TODO : MK_TextAnim_Wipe)
MK_SpriteAnimationSet.addSpriteAnimationClass(MK_TextAnim_Shake); // 5 shake
MK_SpriteAnimationSet.addSpriteAnimationClass(MK_TextAnim_Zoom3); // 6 zoom3
MK_SpriteAnimationSet.addSpriteAnimationClass(MK_TextAnim_Wave); // 7 wave
MK_SpriteAnimationSet.addSpriteAnimationClass(MK_TextAnim_Rotation); // 8 rotation
MK_SpriteAnimationSet.addSpriteAnimationClass(MK_TextAnim_Swing); // 9 swing
MK_SpriteAnimationSet.addSpriteAnimationClass(MK_TextAnim_Random); // 10 random

// added
MK_SpriteAnimationSet.addSpriteAnimationClass(MK_TextAnim_Karaoke); // 11 karaoke

})();
*/

(function(list) {
	list.forEach(each => MK_SpriteAnimationSet.addSpriteAnimationClass(each));
})([
	// empty
	MK_TextAnimBase, // 0 empty

	// MOG_AnimterdText
	MK_TextAnim_Fade, // 1 fade
	MK_TextAnim_Zoom, // 2 zoom
	MK_TextAnim_Zoom2, // 3 zoom2
	MK_TextAnimBase, // 4 wipe
	MK_TextAnim_Shake, // 5 shake
	MK_TextAnim_Zoom3, // 6 zoom3
	MK_TextAnim_Wave, // 7 wave
	MK_TextAnim_Rotation, // 8 rotation
	MK_TextAnim_Swing, // 9 swing
	MK_TextAnim_Random, // 10 random

	// added
	MK_TextAnim_Karaoke, // 11 karaoke
]);


/*
// --------------------------------
// init set animtion default parameters

(function() {

	var pluginName = 'MKP_SpriteAnimationSet';
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
*/

// ？这个原本是 MK_SpriteAnimManager 用来设置 默认动画 和 用户动画的参数的 ...
// ？默认动画的参数也是可以缺省的 缺省时会使用文本动画类中的默认参数 ...
// ？所以这部分交给 MK_SpriteAnimManager 而不是 MK_SpriteAnimationSet ...
// ？同样地 也不需要储存参数 ...



