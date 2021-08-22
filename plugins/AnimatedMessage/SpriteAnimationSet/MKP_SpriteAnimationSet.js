// ================================================================
// MKP_SpriteAnimationSet.js
// 精灵动画集
// ================================================================
//  author : Mikan(MikanHako)
//  plugin : MKP_SpriteAnimationSet.js 精灵动画集
// version : v0.2.3.branch1 2021/08/22 清理冗余注释、完善插件说明
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
 *   v0.2.3.branch1 2021/08/22 清理冗余注释、完善插件说明
 *   v0.2.3-alpha 2021/08/21 完成卡拉OK效果
 *   v0.2.2 2021/08/19 增加动画类的名称、调整动画类code、考虑带脸图的消息框的文字居中样式
 *   v0.2.1 2021/08/18 调整框架、增加文本样式基类
 *     删除允许添加目标的标签
 *     修复变量名错误
 *     增加文本样式动画基类、增加文本居中样式动画类
 *   v0.2.0-alpha 2021/08/18 更新框架 : TextSprite解耦
 *   v0.1.0.branch1 2021/08/17 清理冗余注释
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
 * + 插件`MKP_TextSprite`
 *   - 用于支持绘制和控制播放动画等
 * + 插件`MKP_SpriteAnimationSet`(本插件)
 *   - 用于提供处理动画效果等
 * + 插件`MKP_SpriteAnimManager`
 *   - 用于设置动画和动画参数、处理消息框文字播放动画等
 * 
 * 本插件提供动画效果，本身无需配置插件参数和使用插件指令  
 * 文本动画的描述和参数列表 见 【其他说明】  
 * 
 * 
 * ## 使用方法
 * 
 * 按顺序导入 完成精灵动画功能的三个插件  
 * + MKP_TextSprite
 * + MKP_SpriteAnimationSet
 * + MKP_SpriteAnimManager
 * 
 * 配置和使用 见插件【MKP_SpriteAnimManager】和【MKP_TextSprite】  
 * 
 * 
 * ## 其他说明
 * 
 * #### MOG_AnimatedText动画列表
 * 以下动画效果来自 插件[`MOG_AnimatedText`](https://github.com/DrillUp/drill_plugins/blob/master/js/plugins/MOG_AnimatedText.js)  
 * 注 : id 为 默认动画id  
 * 
 * | id | 动画效果 | 动画名  | 动画描述 |
 * | :- | :------- | :-----  | :------- |
 * |  2 | 淡入淡出 | Fade     | (todo) |
 * |  3 | 缩放     | Zoom     | (todo) |
 * |  4 | 翻转     | Zoom2    | (todo) |
 * |  5 | 上下出现(未完成) | Wipe     | (todo) |
 * |  6 | 震动     | Shake    | (todo) |
 * |  7 | 剧烈缩放 | Zoom3    | (todo) |
 * |  8 | 波浪缩放 | Wave     | (todo) |
 * |  9 | 旋涡     | Rotation | (todo) |
 * | 10 | 摇晃     | Swing    | (todo) |
 * | 11 | 随机     | Random   | (todo) |
 * 
 * #### 新增动画列表概要
 * 以下动画效果为新增的动画  
 * 注 : id 为 默认动画id  
 * 
 * | id | 动画效果 | 动画名  | 动画描述 |
 * | :- | :------- | :-----  | :------- |
 * | 32 | 卡拉OK   | Karaoke | 模仿卡拉OK播放的效果 |
 * 
 * #### 文本格式动画列表概要
 * 以下动画效果为设置文字样式的动画  
 * 注 : id 为 默认动画id  
 * 
 * | id | 动画效果 | 动画名  | 动画描述 |
 * | :- | :------- | :-----  | :------- |
 * | 52 | 文字居中 | TextCenter | 让显示的文字动态居中 |
 * 
 * #### 动画参数
 * 
 * + 2 - 缩放 - Zoom
 * | 序号 | 描述             | 参数名       | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------     | :---------   | :----- | :----- | :--- |
 * |   0  | 初始不透明度     | opacityStart | 数值   | 0      |  |
 * |   1  | 结束不透明度     | opacityEnd   | 数值   | 255    |  |
 * |   2  | 不透明度变化速度 | opacitySpeed | 数值   | 5      |  |
 * 
 * + 3 - 淡入淡出 - Fade
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
 * + 4 - 翻转 - Zoom2
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
 * + 5 - 上下出现 - Wipe
 * 
 * + 6 - 震动 - Shake
 * | 序号 | 描述                | 参数名          | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------        | :---------      | :----- | :----- | :--- |
 * |   0  | 震动间隔(帧数)      | shakeWaitCount  | 数值  | 3     |  |
 * |   1  | 震动幅度(像素)      | shakeAmplitude  | 数值  | 3     |  |
 * |   2  | 是否停止(0不停;1停) | shakeNeedStop   | 0或1  | 0     |  |
 * |   3  | 震动总计数(若停止)  | shakeTotalCount | 数值  | 12   |  |
 * 
 * + 7 - 剧烈缩放 - Zoom3
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
 * + 8 - 剧烈缩放 - Zoom3
 * | 序号 | 描述       | 参数名     | 值类型 | 默认值 | 备注 |
 * | :--- | :-------   | :--------- | :----- | :----- | :--- |
 * |   0  | 缩放速度   | scaleSpeed | 数值   | 0.015  |  |
 * |   1  | 缩放帧数   | scaleCount | 数值   | 30     | 来或回一次的 |
 * |   2  | 总循环次数 | loopTotal  | 数值   | 1      |  |
 * 
 * + 9 - 旋涡 - Rotation
 * 
 * + 10 - 摇晃 - Swing
 * | 序号 | 描述         | 参数名       | 值类型 | 默认值 | 备注 |
 * | :--- | :---------   | :---------    | :----- | :----- | :--- |
 * |   0  | 旋转速度     | rotateSpeed    | 数值  | 0.02  | 角度/帧 |
 * |   1  | 初始旋转方向 | rotateInitDir  | 文本  | R     | L逆;R顺 |
 * |   2  | 初始角度     | angleInit      | 数值  | 0     | 正顺;负逆 |
 * |   3  | 角度左范围   | angleRangeL    | 数值  | -0.4  |  |
 * |   4  | 角度右范围   | angleRangeR    | 数值  | 0.4   |  |
 * 
 * + 11 - 随机 - Random
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
 * + 32 - 卡拉OK - Karaoke
 * | 序号 | 描述               | 参数名       | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------       | :---------   | :----- | :----- | :--- |
 * |   0  | krc歌词数据        | krcContents  | 文本  | 略      | krc歌词处理后的JSON数据 |
 * |   1  | 音频文件名         | audioName    | 文本  | 略      | 路径`audio/bgs` |
 * |   2  | 歌词偏移           | lyricOffset  | 数值  | 略      |  |
 * |   3  | 窗口左右间隔       | widthPadding | 数值  | 0       |  |
 * |   4  | 歌词行间隔         | lineSpace    | 数值  | 10      |  |
 * |   5  | 最小等待点数量     | minWaitPoint | 数值  | 3       |  |
 * |   6  | 最大等待点数量     | maxWaitPoint | 数值  | 5       |  |
 * |   7  | 等待点半径         | pointRadius  | 数值  | 12      |  |
 * |   8  | 等待点颜色         | pointColor   | 文本  | blue    | 颜色 |
 * |   9  | 等待点宽间隔       | pointWSpace  | 数值  | 10      |  |
 * |  10  | 等待点高间隔       | pointHSpace  | 数值  | 6       |  |
 * |  11  | 边框线宽           | lineWidth    | 数值  | 4       |  |
 * |  12  | 播放后文本边框颜色 | uLineColor   | 文本  | #FFFFFF | 颜色 |
 * |  13  | 播放后文本颜色     | uTextColor   | 文本  | #0000FF | 颜色 |
 * |  14  | 播放前文本边框颜色 | dLineColor   | 文本  | #000000 | 颜色 |
 * |  15  | 播放前文本颜色     | dTextColor   | 文本  | #FFFFFF | 颜色 |
 * krc歌词处理后的JSON数据结构 : 
 * ```
 * {
 *   // 所有歌词行
 *   lyricLines : [
 *     // 第一行的数据
 *     {
 *       start : 100, // 行开始时间
 *       duration : 200, // 行持续时间
 *       content : [
 *         // 第一个字的数据
 *         {
 *           start : 0, // 字开始时间
 *           duration : 50, // 字持续时间
 *           text : 'A'
 *         },
 *         // 第二个字的数据
 *         {
 *           start : 50,
 *           duration : 150,
 *           text : 'B'
 *         },
 *         ...
 *       ]
 *     },
 *     // 第二行的数据
 *     {},
 *     ...
 *   ], 
 *   // 原krc中的各行内容
 *   sourceLines : [
 *     '',
 *     '',
 *     ...
 *   ]
 * }
 * ```
 * 
 * + 52 - 文字居中 - TextCenter
 * 暂无参数
 * 
 * 
 * ## 用语说明
 * 
 * TODO
 * 
 * 
 * ## 脚本说明
 * 
 * TODO : 开发方法
 * 
 * 
 * ## 后续任务
 * 
 * - [x] 制作卡拉OK效果
 * - [x] 尝试利用动画类完成其他的功能，比如文字居中
 * - [x] 更新插件说明
 * - [ ] 优化文本居中样式动画，缓存计算信息，并记录
 * - [ ] target对象的类和接口
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

function MK_SpriteAnimBase() {
    this.initialize.apply(this, arguments);
}

function MK_TextAnimBase() {
    this.initialize.apply(this, arguments);
}

function MK_TextAnim_Fade() {
    this.initialize.apply(this, arguments);
}

function MK_TextAnim_Zoom() {
    this.initialize.apply(this, arguments);
}

function MK_TextAnim_Zoom2() {
    this.initialize.apply(this, arguments);
}

function MK_TextAnim_Shake() {
    this.initialize.apply(this, arguments);
}

function MK_TextAnim_Zoom3() {
    this.initialize.apply(this, arguments);
}

function MK_TextAnim_Wave() {
    this.initialize.apply(this, arguments);
}

function MK_TextAnim_Rotation() {
    this.initialize.apply(this, arguments);
}

function MK_TextAnim_Swing() {
    this.initialize.apply(this, arguments);
}

function MK_TextAnim_Random() {
    this.initialize.apply(this, arguments);
}

function MK_TextMakerAnimBase() {
    this.initialize.apply(this, arguments);
}

function MK_TextMakerAnim_Karaoke() {
    this.initialize.apply(this, arguments);
}

MK_SpriteAnimBase.prototype = Object.create(Object.prototype), (MK_SpriteAnimBase.prototype.constructor = MK_SpriteAnimBase).prototype.initialize = function(t, ...e) {
    this.initAnimCode(t), this._paramMapTable = {}, this.initParamMapTable(), this._targets = [], 
    this._phase = 0, this._flagAuto = !0, this._flagPlay = !1, this._flagPause = !1, 
    this._flagContinue = !1, this._flagStop = !1, this._flagInit = !1, this._flagEnabled = !0, 
    this.onCreate(...e);
}, MK_SpriteAnimBase._DEFAULT_ANIM_CODE = 0, MK_SpriteAnimBase.prototype.getDefaultAnimCode = function() {
    return this.constructor._DEFAULT_ANIM_CODE;
}, MK_SpriteAnimBase.prototype.getAnimCode = function() {
    return this._animCode;
}, MK_SpriteAnimBase.prototype.setAnimCode = function(t) {
    this._animCode = t;
}, MK_SpriteAnimBase.prototype.initAnimCode = function(t) {
    this.setAnimCode(t || this.getDefaultAnimCode());
}, MK_SpriteAnimBase._DEFAULT_ANIM_NAME = "SpriteAnimBase", MK_SpriteAnimBase.prototype.setTargets = function(t, i) {
    Array.isArray(t) || (t = [ t ]), Array.isArray(i) || (i = [ i ]), this.initTargets(), 
    t.forEach(function(t, e) {
        this.addTarget(t, i[e] || {});
    }, this);
}, MK_SpriteAnimBase.prototype.getTargets = function() {
    return this._targets || [];
}, MK_SpriteAnimBase.prototype.getTarget = function(t) {
    return "number" == typeof t ? this._targets[t] : this._targets[0];
}, MK_SpriteAnimBase.prototype.initTargets = function() {
    this._targets = [];
}, MK_SpriteAnimBase.prototype.createTargetObjWithVar = function(t, e, i) {
    return {
        sprite: t || null,
        data: e || {},
        var: i || {}
    };
}, MK_SpriteAnimBase.prototype.createTargetObj = function(t, e) {
    return this.createTargetObjWithVar(t, e);
}, MK_SpriteAnimBase.prototype.addTarget = function(t, e) {
    var i = this.createTargetObj(t, e);
    this._targets.push(i);
    var a = [ ...arguments ].splice(1);
    this.onAddTarget(i, ...a);
}, MK_SpriteAnimBase.prototype.onAddTarget = function(t) {
    this.onInitTarget(...arguments);
}, MK_SpriteAnimBase.prototype.onInitTarget = function(t) {}, MK_SpriteAnimBase.prototype.getAnimFlagKey = function(t) {
    return "_flag" + t;
}, MK_SpriteAnimBase.prototype.setAnimFlag = function(t, e) {
    var i = this.getAnimFlagKey(t);
    void 0 !== this[i] ? this[i] = !!e : console.warn(`unknown flagName "${t}"`, t, i, e);
}, MK_SpriteAnimBase.prototype.setAnimFlagOn = function(t) {
    this.setAnimFlag(t, !0);
}, MK_SpriteAnimBase.prototype.setAnimFlagOff = function(t) {
    this.setAnimFlag(t, !1);
}, MK_SpriteAnimBase.prototype.getAnimFlag = function(t) {
    return this[this.getAnimFlagKey(t)];
}, MK_SpriteAnimBase.prototype.setFlagAutoOn = function() {
    this.setAnimFlag("Auto", !0);
}, MK_SpriteAnimBase.prototype.setFlagAutoOff = function() {
    this.setAnimFlag("Auto", !1);
}, MK_SpriteAnimBase.prototype.setFlagPlayOn = function() {
    this.setAnimFlag("Play", !0);
}, MK_SpriteAnimBase.prototype.setFlagPlayOff = function() {
    this.setAnimFlag("Play", !1);
}, MK_SpriteAnimBase.prototype.setFlagPauseOn = function() {
    this.setAnimFlag("Pause", !0);
}, MK_SpriteAnimBase.prototype.setFlagPauseOff = function() {
    this.setAnimFlag("Pause", !1);
}, MK_SpriteAnimBase.prototype.setFlagContinueOn = function() {
    this.setAnimFlag("Continue", !0);
}, MK_SpriteAnimBase.prototype.setFlagContinueOff = function() {
    this.setAnimFlag("Continue", !1);
}, MK_SpriteAnimBase.prototype.setFlagStopOn = function() {
    this.setAnimFlag("Stop", !0);
}, MK_SpriteAnimBase.prototype.setFlagStopOff = function() {
    this.setAnimFlag("Stop", !1);
}, MK_SpriteAnimBase.prototype.setFlagInitOn = function() {
    this.setAnimFlag("Init", !0);
}, MK_SpriteAnimBase.prototype.setFlagInitOff = function() {
    this.setAnimFlag("Init", !1);
}, MK_SpriteAnimBase.prototype.setFlagEnabledOn = function() {
    this.setAnimFlag("Enabled", !0);
}, MK_SpriteAnimBase.prototype.setFlagEnabledOff = function() {
    this.setAnimFlag("Enabled", !1);
}, MK_SpriteAnimBase.prototype.setFlagAllowAddOn = function() {
    this.setAnimFlag("AllowAdd", !0);
}, MK_SpriteAnimBase.prototype.setFlagAllowAddOff = function() {
    this.setAnimFlag("AllowAdd", !1);
}, MK_SpriteAnimBase.prototype.onCreate = function() {}, MK_SpriteAnimBase.prototype.onStart = function() {}, 
MK_SpriteAnimBase.prototype.onPending = function() {}, MK_SpriteAnimBase.prototype.onPlay = function() {}, 
MK_SpriteAnimBase.prototype.onPlaying = function() {}, MK_SpriteAnimBase.prototype.onStop = function() {}, 
MK_SpriteAnimBase.prototype.onPause = function() {}, MK_SpriteAnimBase.prototype.onPausing = function() {}, 
MK_SpriteAnimBase.prototype.onContinue = function() {}, MK_SpriteAnimBase.prototype.onInit = function() {}, 
MK_SpriteAnimBase.prototype.onDestroy = function() {}, MK_SpriteAnimBase.prototype.onUpdateStart = function() {}, 
MK_SpriteAnimBase.prototype.onUpdate = function() {
    0 == this._phase && this._flagAuto && (this.onStart(), this._phase = 101), 101 == this._phase && this._flagAuto && this.onPending(), 
    101 == this._phase && this._flagPlay && (this.onPlay(), this._phase = 102, this._flagPlay = !1), 
    102 == this._phase && this._flagAuto && this.onPlaying(), 102 == this._phase && this._flagStop && (this.onStop(), 
    this._phase = 103, this._flagStop = !1), 102 == this._phase && this._flagPause && (this.onPause(), 
    this._phase = 201, this._flagPause = !1), 201 == this._phase && this._flagAuto && this.onPausing(), 
    201 == this._phase && this._flagContinue && (this.onContinue(), this._phase = 102, 
    this._flagContinue = !1), 103 == this._phase && this._flagAuto && (this.onDestroy(), 
    this._phase = -1), -1 == this._phase && this._flagInit && (this.onInit(), this._phase = 0, 
    this._flagInit = !1);
}, MK_SpriteAnimBase.prototype.onUpdateEnd = function() {}, MK_SpriteAnimBase.prototype.update = function() {
    this._flagEnabled && (this.onUpdateStart(), this.onUpdate(), this.onUpdateEnd());
}, MK_SpriteAnimBase.prototype.destroyMe = function() {}, MK_SpriteAnimBase._PARAM_CONFIG = [], 
MK_SpriteAnimBase.prototype.getParamConfig = function() {
    return this.constructor._PARAM_CONFIG;
}, MK_SpriteAnimBase.prototype.initParamMapTable = function() {
    this._paramMapTable = {};
    for (var t = this.getParamConfig(), e = 0; e < t.length; e++) this._paramMapTable[t[e][0]] = e;
}, MK_SpriteAnimBase.prototype.getParamIndex = function(t) {
    var e = this._paramMapTable[t];
    return 0 <= e ? e : (console.error("key " + t + " not found"), 0);
}, MK_SpriteAnimBase.prototype.getDefaultParam = function(t) {
    return (this.getParamConfig()[t] || [])[2];
}, MK_SpriteAnimBase.prototype.getParamType = function(t) {
    return (this.getParamConfig()[t] || [])[1];
}, MK_SpriteAnimBase.prototype.getTypedParam = function(t, e) {
    e = this.getParamType(e);
    return "number" == e ? Number(t) : "string" == e ? String(t) : t;
}, MK_SpriteAnimBase.prototype.getParams = function() {
    return MK_SpriteAnimManager.getAnimParams(this.getAnimCode()) || [];
}, MK_SpriteAnimBase.prototype.getParamByIndex = function(t) {
    var e = this.getParams()[t];
    return null == e || void 0 === e ? this.getDefaultParam(t) : this.getTypedParam(e, t);
}, MK_SpriteAnimBase.prototype.getParamByKey = function(t) {
    t = this.getParamIndex(t);
    return this.getParamByIndex(t);
}, MK_SpriteAnimBase.prototype.getParam = function(t) {
    return "number" == typeof t ? this.getParamByIndex(t) : this.getParamByKey(t);
}, MK_SpriteAnimBase.prototype.setParamWithCode = function(t, e, i) {
    MK_SpriteAnimManager.setAnimParam(t, e, i);
}, MK_SpriteAnimBase.prototype.setParamByKeyWithCode = function(t, e, i) {
    e = this.getParamIndex(e);
    MK_SpriteAnimManager.setParamWithCode(t, e, i);
}, MK_SpriteAnimBase.prototype.setParam = function(t, e) {
    var i = this.getAnimCode();
    MK_SpriteAnimManager.setAnimParam(i, t, e);
}, MK_SpriteAnimBase.prototype.setParamByKey = function(t, e) {
    var i = this.getAnimCode();
    MK_SpriteAnimManager.setAnimParam(i, index, e);
}, MK_TextAnimBase.prototype = Object.create(MK_SpriteAnimBase.prototype), (MK_TextAnimBase.prototype.constructor = MK_TextAnimBase)._DEFAULT_ANIM_CODE = 1, 
MK_TextAnimBase._DEFAULT_ANIM_NAME = "TextAnimBase", MK_TextAnimBase._PARAM_CONFIG = [], 
MK_TextAnimBase.prototype.onCreate = function(t, ...e) {
    MK_SpriteAnimBase.prototype.onCreate.apply(this, arguments), this.setMsgWindow(t);
}, MK_TextAnimBase.prototype.setMsgWindow = function(t) {
    this._msgWindow = t;
}, MK_TextAnimBase.prototype.getMsgWindow = function() {
    return this._msgWindow;
}, MK_TextAnimBase.prototype.getMsgTextState = function() {
    return this._msgWindow ? this._msgWindow._textState : null;
}, MK_TextAnimBase.prototype.getMsgContents = function() {
    return this._msgWindow ? this._msgWindow.contents : null;
}, MK_TextAnim_Fade.prototype = Object.create(MK_TextAnimBase.prototype), (MK_TextAnim_Fade.prototype.constructor = MK_TextAnim_Fade)._DEFAULT_ANIM_CODE = 2, 
MK_TextAnim_Fade._DEFAULT_ANIM_NAME = "TextAnim_Fade", MK_TextAnim_Fade._PARAM_CONFIG = [ [ "opacityStart", "number", 0 ], [ "opacityEnd", "number", 255 ], [ "opacitySpeed", "number", 5 ] ], 
MK_TextAnim_Fade.prototype.onInitTarget = function(t) {
    var e, i;
    MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments), t && t.sprite && (e = t.sprite, 
    t.var, i = this.getParam("opacityStart"), e.opacity = i);
}, MK_TextAnim_Fade.prototype.onPlaying = function() {
    MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
    var i = this.getParam("opacityStart"), a = this.getParam("opacityEnd"), n = this.getParam("opacitySpeed");
    this.getTargets().forEach(function(t) {
        var e;
        t && t.sprite && (e = t.sprite, t.var, t = e.opacity, (i <= t && t < a || t <= i && a < t) && (e.opacity += n));
    }, this);
}, MK_TextAnim_Zoom.prototype = Object.create(MK_TextAnimBase.prototype), (MK_TextAnim_Zoom.prototype.constructor = MK_TextAnim_Zoom)._DEFAULT_ANIM_CODE = 3, 
MK_TextAnim_Zoom._DEFAULT_ANIM_NAME = "TextAnim_Zoom", MK_TextAnim_Zoom._PARAM_CONFIG = [ [ "opacityStart", "number", 0 ], [ "opacityEnd", "number", 255 ], [ "opacitySpeed", "number", 4 ], [ "scaleXStart", "number", 2 ], [ "scaleXEnd", "number", 1 ], [ "scaleXSpeed", "number", -.04 ], [ "scaleYStart", "number", 2 ], [ "scaleYEnd", "number", 1 ], [ "scaleYSpeed", "number", -.04 ] ], 
MK_TextAnim_Zoom.prototype.onInitTarget = function(t) {
    var e, i, a, n;
    MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments), t && t.sprite && (e = t.sprite, 
    t.var, i = this.getParam("opacityStart"), a = this.getParam("scaleXStart"), n = this.getParam("scaleYStart"), 
    e.opacity = i, e.scale.x = a, e.scale.y = n);
}, MK_TextAnim_Zoom.prototype.onPlaying = function() {
    MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
    var i = this.getParam("opacityStart"), a = this.getParam("opacityEnd"), n = this.getParam("opacitySpeed"), r = this.getParam("scaleXStart"), o = this.getParam("scaleXEnd"), s = this.getParam("scaleXSpeed"), p = this.getParam("scaleYStart"), _ = this.getParam("scaleYEnd"), m = this.getParam("scaleYSpeed");
    this.getTargets().forEach(function(t) {
        var e;
        t && t.sprite && (e = t.sprite, t.var, t = e.opacity, (i <= t && t < a || t <= i && a < t) && (e.opacity += n), 
        t = e.scale.x, r <= t && t < o || t <= r && o < t ? e.scale.x += s : e.scale.x = o, 
        t = e.scale.y, p <= t && t < _ || t <= p && _ < t ? e.scale.y += m : e.scale.y = _);
    }, this);
}, MK_TextAnim_Zoom2.prototype = Object.create(MK_TextAnim_Zoom.prototype), (MK_TextAnim_Zoom2.prototype.constructor = MK_TextAnim_Zoom2)._DEFAULT_ANIM_CODE = 4, 
MK_TextAnim_Zoom2._DEFAULT_ANIM_NAME = "TextAnim_Zoom2", MK_TextAnim_Zoom2._PARAM_CONFIG = [ [ "opacityStart", "number", 0 ], [ "opacityEnd", "number", 255 ], [ "opacitySpeed", "number", 4 ], [ "scaleXStart", "number", -1 ], [ "scaleXEnd", "number", 1 ], [ "scaleXSpeed", "number", .02 ], [ "scaleYStart", "number", 2 ], [ "scaleYEnd", "number", 1 ], [ "scaleYSpeed", "number", -.02 ] ], 
MK_TextAnim_Shake.prototype = Object.create(MK_TextAnimBase.prototype), (MK_TextAnim_Shake.prototype.constructor = MK_TextAnim_Shake)._DEFAULT_ANIM_CODE = 6, 
MK_TextAnim_Shake._DEFAULT_ANIM_NAME = "TextAnim_Shake", MK_TextAnim_Shake._PARAM_CONFIG = [ [ "shakeWaitCount", "number", 3 ], [ "shakeAmplitude", "number", 3 ], [ "shakeNeedStop", "number", 0 ], [ "shakeTotalCount", "number", 12 ] ], 
MK_TextAnim_Shake.prototype.onInitTarget = function(t) {
    var e, i;
    MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments), t && t.sprite && (e = t.sprite, 
    (i = t.var)._orgX = e.x, i._orgY = e.y, i._shakeCount = 0, i._shakeWaitCount = 0);
}, MK_TextAnim_Shake.prototype.onPlaying = function() {
    MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
    var n = this.getParam("shakeWaitCount"), r = this.getParam("shakeAmplitude"), o = this.getParam("shakeNeedStop"), s = this.getParam("shakeTotalCount");
    this.getTargets().forEach(function(t) {
        var e, i, a;
        t && t.sprite && (e = t.sprite, i = t.var, 0 < o && i._shakeCount >= s ? (e.x = i._orgX, 
        e.y = i._orgY) : (i._shakeCount++, i._shakeWaitCount++, i._shakeWaitCount >= n && (i._shakeWaitCount = 0, 
        a = Math.randomInt(2 * r) - r, t = Math.randomInt(2 * r) - r, e.x = a + i._orgX, 
        e.y = t + i._orgY)));
    }, this);
}, MK_TextAnim_Zoom3.prototype = Object.create(MK_TextAnim_Zoom.prototype), (MK_TextAnim_Zoom3.prototype.constructor = MK_TextAnim_Zoom3)._DEFAULT_ANIM_CODE = 7, 
MK_TextAnim_Zoom3._DEFAULT_ANIM_NAME = "TextAnim_Zoom3", MK_TextAnim_Zoom3._PARAM_CONFIG = [ [ "opacityStart", "number", 0 ], [ "opacityEnd", "number", 255 ], [ "opacitySpeed", "number", 20 ], [ "scaleXStart", "number", 4 ], [ "scaleXEnd", "number", 1 ], [ "scaleXSpeed", "number", -.2 ], [ "scaleYStart", "number", 4 ], [ "scaleYEnd", "number", 1 ], [ "scaleYSpeed", "number", -.2 ], [ "shakeAmplitude", "number", 3 ], [ "shakeWaitCount", "number", 3 ], [ "shakeNeedStop", "number", 0 ], [ "shakeTotalCount", "number", 12 ] ], 
MK_TextAnim_Zoom3.prototype.onInitTarget = function(t) {
    var e, i, a;
    MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments), t && t.sprite && (e = t.sprite, 
    i = t.var, a = this.getParam("opacityStart"), e.opacity = a, i._subPhase = 1, i._shakeCount = 0, 
    i._shakeWaitCount = 0, i._orgX = e.x, i._orgY = e.y);
}, MK_TextAnim_Zoom3.prototype.onPlaying = function() {
    MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
    var r = this.getParam("opacityStart"), o = this.getParam("opacityEnd"), s = this.getParam("opacitySpeed"), p = this.getParam("scaleXStart"), _ = this.getParam("scaleXEnd"), m = this.getParam("scaleXSpeed"), u = this.getParam("scaleYStart"), d = this.getParam("scaleYEnd"), h = this.getParam("scaleYSpeed"), c = this.getParam("shakeWaitCount"), x = this.getParam("shakeAmplitude"), A = this.getParam("shakeNeedStop"), y = this.getParam("shakeTotalCount");
    this.getTargets().forEach(function(t) {
        var e, i, a, n;
        t && t.sprite && (e = t.sprite, 1 == (i = t.var)._subPhase && (a = !1, n = e.opacity, 
        (r <= n && n < o || n <= r && o < n) && (e.opacity += s, a = !0), n = e.scale.x, 
        p <= n && n < _ || n <= p && _ < n ? (e.scale.x += m, a = !0) : e.scale.x = _, n = e.scale.y, 
        u <= n && n < d || n <= u && d < n ? (e.scale.y += h, a = !0) : e.scale.y = d, a || (i._subPhase = 2)), 
        2 == i._subPhase && (i._shakeCount++, this.playing_shake(t, c, x), 0 < A && i._shakeCount >= y && (e.x = i._orgX, 
        e.y = i._orgY, i._subPhase = 3)));
    }, this);
}, MK_TextAnim_Zoom3.prototype.playing_shake = function(t, e, i) {
    var a;
    t && t.sprite && (a = t.sprite, (t = t.var)._shakeWaitCount++, t._shakeWaitCount >= e && (t._shakeWaitCount = 0, 
    e = Math.randomInt(2 * i) - i, i = Math.randomInt(2 * i) - i, a.x = e + t._orgX, 
    a.y = i + t._orgY));
}, MK_TextAnim_Wave.prototype = Object.create(MK_TextAnimBase.prototype), (MK_TextAnim_Wave.prototype.constructor = MK_TextAnim_Wave)._DEFAULT_ANIM_CODE = 8, 
MK_TextAnim_Wave._DEFAULT_ANIM_NAME = "TextAnim_Wave", MK_TextAnim_Wave._PARAM_CONFIG = [ [ "scaleSpeed", "number", .015 ], [ "scaleCount", "number", 30 ], [ "loopTotal", "number", 1 ] ], 
MK_TextAnim_Wave.prototype.onInitTarget = function(t) {
    var e;
    MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments), t && t.sprite && (t.sprite, 
    (e = t.var)._animCount = 0, e._loopCount = 0);
}, MK_TextAnim_Wave.prototype.onPlaying = function() {
    MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
    var i = this.getParam("scaleSpeed"), a = this.getParam("scaleCount"), n = this.getParam("loopTotal");
    this.getTargets().forEach(function(t) {
        var e;
        t && t.sprite && (e = t.sprite, (t = t.var)._animCount++, t._animCount <= +a ? e.scale.x += i : t._animCount <= 2 * a ? e.scale.x -= i : (t._animCount = 0, 
        t._loopCount++), e.scale.y = e.scale.x, t._loopCount >= n && (e.scale.x = e.scale.y = 1));
    }, this);
}, MK_TextAnim_Rotation.prototype = Object.create(MK_TextAnimBase.prototype), (MK_TextAnim_Rotation.prototype.constructor = MK_TextAnim_Rotation)._DEFAULT_ANIM_CODE = 9, 
MK_TextAnim_Rotation._DEFAULT_ANIM_NAME = "TextAnim_Rotation", MK_TextAnim_Rotation._PARAM_CONFIG = [ [ "xx1", "number", 63 ], [ "xx2", "number", 120 ], [ "xx3", "number", .1 ] ], 
MK_TextAnim_Rotation.prototype.onInitTarget = function(t) {
    MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments), t && (t.sprite, t.var._animCount = 0);
}, MK_TextAnim_Rotation.prototype.onPlaying = function() {
    MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
    var i = this.getParam("xx1"), a = this.getParam("xx2"), n = this.getParam("xx3");
    this.getTargets().forEach(function(t) {
        var e;
        t && t.sprite && (e = t.sprite, (t = t.var)._animCount++, t._animCount <= i ? e.rotation += n : t._animCount <= a ? e.rotation = 0 : (e.rotation = 0, 
        t._animCount = 0));
    }, this);
}, MK_TextAnim_Swing.prototype = Object.create(MK_TextAnimBase.prototype), (MK_TextAnim_Swing.prototype.constructor = MK_TextAnim_Swing)._DEFAULT_ANIM_CODE = 10, 
MK_TextAnim_Swing._DEFAULT_ANIM_NAME = "TextAnim_Swing", MK_TextAnim_Swing._PARAM_CONFIG = [ [ "rotateSpeed", "number", .02 ], [ "rotateInitDir", "string", "R" ], [ "angleInit", "number", 0 ], [ "angleRangeL", "number", -.4 ], [ "angleRangeR", "number", .4 ] ], 
MK_TextAnim_Swing.prototype.onInitTarget = function(t) {
    var e, i, a, n;
    MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments), t && t.sprite && (e = t.sprite, 
    i = t.var, a = this.getParam("rotateInitDir"), n = this.getParam("angleInit"), i._rotateR = "R" == a, 
    e.rotation = n);
}, MK_TextAnim_Swing.prototype.onPlaying = function() {
    MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
    var i = this.getParam("rotateSpeed"), a = this.getParam("angleRangeL"), n = this.getParam("angleRangeR");
    this.getTargets().forEach(function(t) {
        var e;
        t && t.sprite && (e = t.sprite, (t = t.var)._rotateR ? (e.rotation += i, e.rotation > n && (e.rotation = n, 
        t._rotateR = !1)) : (e.rotation -= i, e.rotation < a && (e.rotation = a, t._rotateR = !0)));
    }, this);
}, MK_TextAnim_Random.prototype = Object.create(MK_TextAnimBase.prototype), (MK_TextAnim_Random.prototype.constructor = MK_TextAnim_Random)._DEFAULT_ANIM_CODE = 11, 
MK_TextAnim_Random._DEFAULT_ANIM_NAME = "TextAnim_Random", MK_TextAnim_Random._PARAM_CONFIG = [ [ "opacityStart", "number", 0 ], [ "opacityEnd", "number", 255 ], [ "opacitySpeed", "number", 4 ], [ "scaleRangeMin", "number", .7 ], [ "scaleRangeMax", "number", 1.4 ], [ "rotateRange", "number", .4 ], [ "rotateDir", "string", "R" ] ], 
MK_TextAnim_Random.prototype.onInitTarget = function(t) {
    var e, i, a, n, r;
    MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments), t && t.sprite && (e = t.sprite, 
    t.var, i = this.getParam("scaleRangeMin"), a = this.getParam("scaleRangeMax") - i, 
    n = this.getParam("rotateRange"), r = this.getParam("rotateDir"), e.opacity = 0, 
    e.scale.x = e.scale.y = Math.random() * a + i, e.rotation = Math.random() * n * ("R" == r ? 1 : -1));
}, MK_TextAnim_Random.prototype.onPlaying = function() {
    MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
    var i = this.getParam("opacityStart"), a = this.getParam("opacityEnd"), n = this.getParam("opacitySpeed");
    this.getTargets().forEach(function(t) {
        var e;
        t && t.sprite && (e = t.sprite, t.var, t = e.opacity, (i <= t && t < a || t <= i && a < t) && (e.opacity += n));
    }, this);
}, MK_TextMakerAnimBase.prototype = Object.create(MK_TextAnimBase.prototype), (MK_TextMakerAnimBase.prototype.constructor = MK_TextMakerAnimBase)._DEFAULT_ANIM_CODE = 31, 
MK_TextMakerAnimBase._DEFAULT_ANIM_NAME = "TextMakerAnimBase", MK_TextMakerAnimBase._PARAM_CONFIG = [], 
MK_TextMakerAnimBase.prototype.onCreate = function(t, ...e) {
    MK_TextAnimBase.prototype.onCreate.apply(this, arguments), this._extraTargets = [], 
    this._drawForExtraContent = !1;
}, MK_TextMakerAnimBase.prototype.createExtraTargetObjWithVar = function(t, e, i) {
    return MK_TextAnimBase.prototype.createTargetObjWithVar.apply(this, arguments);
}, MK_TextMakerAnimBase.prototype.createExtraTargetObj = function(t, e) {
    return MK_TextAnimBase.prototype.createTargetObj.apply(this, arguments);
}, MK_TextMakerAnimBase.prototype.addExtraTarget = function(t, e) {
    var i = this.createExtraTargetObj(t, e);
    this._extraTargets.push(i);
    var a = [ ...arguments ].splice(1);
    this.onAddExtraTarget(i, ...a);
}, MK_TextMakerAnimBase.prototype.onAddExtraTarget = function(t) {
    this.onInitExtraTarget(...arguments);
}, MK_TextMakerAnimBase.prototype.onInitExtraTarget = function(t) {}, MK_TextMakerAnimBase.prototype.startDrawExtraContent = function() {
    this._drawForExtraContent = !0;
}, MK_TextMakerAnimBase.prototype.endDrawExtraContent = function() {
    this._drawForExtraContent = !1;
}, MK_TextMakerAnimBase.prototype.isDrawForExtraContent = function() {
    return this._drawForExtraContent;
}, MK_TextMakerAnimBase.prototype.addTarget = function(t, e) {
    this.isDrawForExtraContent() ? this.addExtraTarget(...arguments) : MK_TextAnimBase.prototype.addTarget.apply(this, arguments);
}, MK_TextMakerAnimBase.prototype.addExtraContent = function() {
    this.startDrawExtraContent(), this.drawExtraContent(...arguments), this.endDrawExtraContent();
}, MK_TextMakerAnimBase.prototype.drawExtraContent = function() {}, MK_TextMakerAnim_Karaoke.prototype = Object.create(MK_TextMakerAnimBase.prototype), 
(MK_TextMakerAnim_Karaoke.prototype.constructor = MK_TextMakerAnim_Karaoke)._DEFAULT_ANIM_CODE = 32, 
MK_TextMakerAnim_Karaoke._DEFAULT_ANIM_NAME = "TextMakerAnim_Karaoke", MK_TextMakerAnim_Karaoke._PARAM_CONFIG = [ [ "krcContents", "string", '{"lyricLines": [{"start": 868, "duration": 6369, "content": [{"start": 0, "duration": 153, "text": "羽"}, {"start": 153, "duration": 202, "text": "ば"}, {"start": 355, "duration": 151, "text": "た"}, {"start": 506, "duration": 757, "text": "い"}, {"start": 1263, "duration": 759, "text": "た"}, {"start": 2022, "duration": 1214, "text": "ら"}, {"start": 3236, "duration": 152, "text": "戻"}, {"start": 3388, "duration": 150, "text": "ら"}, {"start": 3538, "duration": 810, "text": "な"}, {"start": 4348, "duration": 505, "text": "い"}, {"start": 4853, "duration": 152, "text": "と"}, {"start": 5005, "duration": 203, "text": "言"}, {"start": 5208, "duration": 253, "text": "っ"}, {"start": 5461, "duration": 908, "text": "て"}]}, {"start": 7237, "duration": 6663, "content": [{"start": 0, "duration": 203, "text": "目"}, {"start": 203, "duration": 151, "text": "指"}, {"start": 354, "duration": 150, "text": "し"}, {"start": 504, "duration": 707, "text": "た"}, {"start": 1211, "duration": 655, "text": "の"}, {"start": 1866, "duration": 1159, "text": "は"}, {"start": 3025, "duration": 203, "text": "苍"}, {"start": 3228, "duration": 557, "text": "い"}, {"start": 3785, "duration": 201, "text": "苍"}, {"start": 3986, "duration": 606, "text": "い"}, {"start": 4592, "duration": 202, "text": "あ"}, {"start": 4794, "duration": 656, "text": "の"}, {"start": 5450, "duration": 1213, "text": "空"}]}, {"start": 26455, "duration": 2985, "content": [{"start": 0, "duration": 101, "text": "悲"}, {"start": 101, "duration": 202, "text": "し"}, {"start": 303, "duration": 152, "text": "み"}, {"start": 455, "duration": 151, "text": "は"}, {"start": 606, "duration": 203, "text": "ま"}, {"start": 809, "duration": 456, "text": "だ"}, {"start": 1265, "duration": 253, "text": "覚"}, {"start": 1518, "duration": 203, "text": "え"}, {"start": 1721, "duration": 253, "text": "ら"}, {"start": 1974, "duration": 354, "text": "れ"}, {"start": 2328, "duration": 657, "text": "ず"}]}, {"start": 29440, "duration": 2986, "content": [{"start": 0, "duration": 154, "text": "切"}, {"start": 154, "duration": 151, "text": "な"}, {"start": 305, "duration": 151, "text": "さ"}, {"start": 456, "duration": 355, "text": "は"}, {"start": 811, "duration": 201, "text": "今"}, {"start": 1012, "duration": 507, "text": "つ"}, {"start": 1519, "duration": 303, "text": "か"}, {"start": 1822, "duration": 203, "text": "み"}, {"start": 2025, "duration": 202, "text": "始"}, {"start": 2227, "duration": 203, "text": "め"}, {"start": 2430, "duration": 556, "text": "た"}]}, {"start": 32776, "duration": 3075, "content": [{"start": 0, "duration": 201, "text": "あ"}, {"start": 201, "duration": 202, "text": "な"}, {"start": 403, "duration": 202, "text": "た"}, {"start": 605, "duration": 555, "text": "へ"}, {"start": 1160, "duration": 302, "text": "と"}, {"start": 1462, "duration": 252, "text": "抱"}, {"start": 1714, "duration": 303, "text": "く"}, {"start": 2017, "duration": 151, "text": "こ"}, {"start": 2168, "duration": 202, "text": "の"}, {"start": 2370, "duration": 151, "text": "感"}, {"start": 2521, "duration": 151, "text": "情"}, {"start": 2672, "duration": 403, "text": "も"}]}, {"start": 36021, "duration": 2722, "content": [{"start": 0, "duration": 251, "text": "今"}, {"start": 251, "duration": 153, "text": "言"}, {"start": 404, "duration": 151, "text": "叶"}, {"start": 555, "duration": 202, "text": "に"}, {"start": 757, "duration": 402, "text": "代"}, {"start": 1159, "duration": 151, "text": "わ"}, {"start": 1310, "duration": 403, "text": "っ"}, {"start": 1713, "duration": 455, "text": "て"}, {"start": 2168, "duration": 554, "text": "く"}]}, {"start": 39035, "duration": 6164, "content": [{"start": 0, "duration": 203, "text": "未"}, {"start": 203, "duration": 202, "text": "知"}, {"start": 405, "duration": 251, "text": "な"}, {"start": 656, "duration": 759, "text": "る"}, {"start": 1415, "duration": 202, "text": "世"}, {"start": 1617, "duration": 556, "text": "界"}, {"start": 2173, "duration": 302, "text": "の"}, {"start": 2475, "duration": 606, "text": "梦"}, {"start": 3081, "duration": 453, "text": "か"}, {"start": 3534, "duration": 1315, "text": "ら"}, {"start": 4849, "duration": 152, "text": "目"}, {"start": 5001, "duration": 153, "text": "覚"}, {"start": 5154, "duration": 455, "text": "め"}, {"start": 5609, "duration": 555, "text": "て"}]}, {"start": 45725, "duration": 5660, "content": [{"start": 0, "duration": 152, "text": "こ"}, {"start": 152, "duration": 302, "text": "の"}, {"start": 454, "duration": 202, "text": "羽"}, {"start": 656, "duration": 254, "text": "を"}, {"start": 910, "duration": 201, "text": "広"}, {"start": 1111, "duration": 304, "text": "げ"}, {"start": 1415, "duration": 354, "text": "飞"}, {"start": 1769, "duration": 505, "text": "び"}, {"start": 2274, "duration": 605, "text": "立"}, {"start": 2879, "duration": 2781, "text": "つ"}]}, {"start": 51467, "duration": 6221, "content": [{"start": 0, "duration": 151, "text": "羽"}, {"start": 151, "duration": 201, "text": "ば"}, {"start": 352, "duration": 202, "text": "た"}, {"start": 554, "duration": 556, "text": "い"}, {"start": 1110, "duration": 607, "text": "た"}, {"start": 1717, "duration": 1265, "text": "ら"}, {"start": 2982, "duration": 203, "text": "戻"}, {"start": 3185, "duration": 151, "text": "ら"}, {"start": 3336, "duration": 912, "text": "な"}, {"start": 4248, "duration": 557, "text": "い"}, {"start": 4805, "duration": 203, "text": "と"}, {"start": 5008, "duration": 253, "text": "言"}, {"start": 5261, "duration": 254, "text": "っ"}, {"start": 5515, "duration": 706, "text": "て"}]}, {"start": 57688, "duration": 6470, "content": [{"start": 0, "duration": 201, "text": "目"}, {"start": 201, "duration": 202, "text": "指"}, {"start": 403, "duration": 253, "text": "し"}, {"start": 656, "duration": 607, "text": "た"}, {"start": 1263, "duration": 556, "text": "の"}, {"start": 1819, "duration": 1264, "text": "は"}, {"start": 3083, "duration": 302, "text": "白"}, {"start": 3385, "duration": 506, "text": "い"}, {"start": 3891, "duration": 253, "text": "白"}, {"start": 4144, "duration": 455, "text": "い"}, {"start": 4599, "duration": 354, "text": "あ"}, {"start": 4953, "duration": 505, "text": "の"}, {"start": 5458, "duration": 1012, "text": "云"}]}, {"start": 64158, "duration": 6254, "content": [{"start": 0, "duration": 150, "text": "突"}, {"start": 150, "duration": 202, "text": "き"}, {"start": 352, "duration": 251, "text": "抜"}, {"start": 603, "duration": 757, "text": "け"}, {"start": 1360, "duration": 454, "text": "た"}, {"start": 1814, "duration": 1060, "text": "ら"}, {"start": 2874, "duration": 301, "text": "见"}, {"start": 3175, "duration": 253, "text": "つ"}, {"start": 3428, "duration": 403, "text": "か"}, {"start": 3831, "duration": 454, "text": "る"}, {"start": 4285, "duration": 454, "text": "と"}, {"start": 4739, "duration": 202, "text": "知"}, {"start": 4941, "duration": 405, "text": "っ"}, {"start": 5346, "duration": 908, "text": "て"}]}, {"start": 70490, "duration": 2810, "content": [{"start": 0, "duration": 127, "text": "振"}, {"start": 127, "duration": 304, "text": "り"}, {"start": 431, "duration": 305, "text": "切"}, {"start": 736, "duration": 454, "text": "る"}, {"start": 1190, "duration": 608, "text": "ほ"}, {"start": 1798, "duration": 1012, "text": "ど"}]}, {"start": 73300, "duration": 3437, "content": [{"start": 0, "duration": 304, "text": "苍"}, {"start": 304, "duration": 607, "text": "い"}, {"start": 911, "duration": 252, "text": "苍"}, {"start": 1163, "duration": 455, "text": "い"}, {"start": 1618, "duration": 454, "text": "あ"}, {"start": 2072, "duration": 405, "text": "の"}, {"start": 2477, "duration": 960, "text": "空"}]}, {"start": 76737, "duration": 3139, "content": [{"start": 0, "duration": 252, "text": "苍"}, {"start": 252, "duration": 406, "text": "い"}, {"start": 658, "duration": 201, "text": "苍"}, {"start": 859, "duration": 559, "text": "い"}, {"start": 1418, "duration": 455, "text": "あ"}, {"start": 1873, "duration": 407, "text": "の"}, {"start": 2280, "duration": 859, "text": "空"}]}, {"start": 79878, "duration": 100000, "content": [{"start": 0, "duration": 106, "text": "苍"}, {"start": 106, "duration": 555, "text": "い"}, {"start": 661, "duration": 202, "text": "苍"}, {"start": 863, "duration": 505, "text": "い"}, {"start": 1368, "duration": 402, "text": "あ"}, {"start": 1770, "duration": 353, "text": "の"}, {"start": 2123, "duration": 2982, "text": "空"}]}], "sourceLines": ["[id:$01F111A3]", "[ar:日本ACG]", "[ti:ブルーバード]", "[by:]", "[hash:5da2e0f88d81c06f26c2a4da9bb8b680]", "[al:]", "[sign:]", "[qq:]", "[total:100000]", "[offset:500]", "[language:eyJjb250ZW50IjpbeyJsYW5ndWFnZSI6MCwibHlyaWNDb250ZW50IjpbWyJcdTYyMTFcdThCRjRcdTRFMDBcdTY1RTZcdTYzMkZcdTdGQzVcdTk4REVcdTdGRDRcdTVDMzFcdTRFMERcdTRGMUFcdTU2REVcdTY3NjUiXSxbIlx1NTQxMVx1NUY4MFx1NzY4NFx1NzZFRVx1NjgwN1x1NjYyRlx1OTBBM1x1ODUxQVx1ODRERFx1NzY4NFx1ODJDRFx1N0E3OSJdLFsiXHU4RkQ4XHU2NzJBXHU4QkIwXHU0RjRGXHU4RkQ5XHU2MEIyXHU0RjI0Il0sWyJcdTczQjBcdTU3MjhcdTVGMDBcdTU5Q0JcdTRFODZcdTg5RTNcdTRFODZcdTc1REJcdTgyRTYiXSxbIlx1NjAwMFx1Nzc0MFx1NUJGOVx1NEY2MFx1NzY4NFx1OEZEOVx1NEVGRFx1NjExRlx1NjBDNSJdLFsiXHU3M0IwXHU1NzI4XHU1MzE2XHU0RTNBXHU4QTAwXHU4QkVEIl0sWyJcdTRFQ0VcdTY3MkFcdTc3RTVcdTRFMTZcdTc1NENcdTc2ODRcdTY4QTZcdTRFMkRcdThCQTlcdTYyMTFcdTg5QzlcdTkxOTIiXSxbIlx1NUM1NVx1NUYwMFx1N0ZDNVx1ODE4MFx1OThERVx1NTQxMVx1OEZEQ1x1NjVCOSJdLFsiXHU2MjExXHU4QkY0XHU0RTAwXHU2NUU2XHU2MzJGXHU3RkM1XHU5OERFXHU3RkQ0XHU1QzMxXHU0RTBEXHU0RjFBXHU1NkRFXHU2NzY1Il0sWyJcdTU0MTFcdTVGODBcdTc2ODRcdTc2RUVcdTY4MDdcdTY2MkZcdTkwQTNcdTk2RUFcdTc2N0RcdTc2ODRcdTk2RUFcdTc2N0RcdTc2ODRcdTRFOTEiXSxbIlx1NjIxMVx1NzdFNVx1OTA1M1x1N0E3Rlx1OEZDN1x1NUI4M1x1NUMzMVx1ODBGRFx1NjI3RVx1NTIzMCJdLFsiXHU3QUVEXHU1MjlCXHU2NDQ2XHU4MTMxIl0sWyJcdTg1MUFcdTg0RERcdTc2ODRcdTg1MUFcdTg0RERcdTc2ODRcdTU5MjlcdTdBN0EiXSxbIlx1ODUxQVx1ODRERFx1NzY4NFx1ODUxQVx1ODRERFx1NzY4NFx1NTkyOVx1N0E3QSJdLFsiXHU4NTFBXHU4NEREXHU3Njg0XHU4NTFBXHU4NEREXHU3Njg0XHU1OTI5XHU3QTdBIl1dLCJ0eXBlIjoxfV0sInZlcnNpb24iOjF9]", "[868,6369]<0,153,0>羽<153,202,0>ば<355,151,0>た<506,757,0>い<1263,759,0>た<2022,1214,0>ら<3236,152,0>戻<3388,150,0>ら<3538,810,0>な<4348,505,0>い<4853,152,0>と<5005,203,0>言<5208,253,0>っ<5461,908,0>て", "[7237,6663]<0,203,0>目<203,151,0>指<354,150,0>し<504,707,0>た<1211,655,0>の<1866,1159,0>は<3025,203,0>苍<3228,557,0>い<3785,201,0>苍<3986,606,0>い<4592,202,0>あ<4794,656,0>の<5450,1213,0>空", "[26455,2985]<0,101,0>悲<101,202,0>し<303,152,0>み<455,151,0>は<606,203,0>ま<809,456,0>だ<1265,253,0>覚<1518,203,0>え<1721,253,0>ら<1974,354,0>れ<2328,657,0>ず", "[29440,2986]<0,154,0>切<154,151,0>な<305,151,0>さ<456,355,0>は<811,201,0>今<1012,507,0>つ<1519,303,0>か<1822,203,0>み<2025,202,0>始<2227,203,0>め<2430,556,0>た", "[32776,3075]<0,201,0>あ<201,202,0>な<403,202,0>た<605,555,0>へ<1160,302,0>と<1462,252,0>抱<1714,303,0>く<2017,151,0>こ<2168,202,0>の<2370,151,0>感<2521,151,0>情<2672,403,0>も", "[36021,2722]<0,251,0>今<251,153,0>言<404,151,0>叶<555,202,0>に<757,402,0>代<1159,151,0>わ<1310,403,0>っ<1713,455,0>て<2168,554,0>く", "[39035,6164]<0,203,0>未<203,202,0>知<405,251,0>な<656,759,0>る<1415,202,0>世<1617,556,0>界<2173,302,0>の<2475,606,0>梦<3081,453,0>か<3534,1315,0>ら<4849,152,0>目<5001,153,0>覚<5154,455,0>め<5609,555,0>て", "[45725,5660]<0,152,0>こ<152,302,0>の<454,202,0>羽<656,254,0>を<910,201,0>広<1111,304,0>げ<1415,354,0>飞<1769,505,0>び<2274,605,0>立<2879,2781,0>つ", "[51467,6221]<0,151,0>羽<151,201,0>ば<352,202,0>た<554,556,0>い<1110,607,0>た<1717,1265,0>ら<2982,203,0>戻<3185,151,0>ら<3336,912,0>な<4248,557,0>い<4805,203,0>と<5008,253,0>言<5261,254,0>っ<5515,706,0>て", "[57688,6470]<0,201,0>目<201,202,0>指<403,253,0>し<656,607,0>た<1263,556,0>の<1819,1264,0>は<3083,302,0>白<3385,506,0>い<3891,253,0>白<4144,455,0>い<4599,354,0>あ<4953,505,0>の<5458,1012,0>云", "[64158,6254]<0,150,0>突<150,202,0>き<352,251,0>抜<603,757,0>け<1360,454,0>た<1814,1060,0>ら<2874,301,0>见<3175,253,0>つ<3428,403,0>か<3831,454,0>る<4285,454,0>と<4739,202,0>知<4941,405,0>っ<5346,908,0>て", "[70490,2810]<0,127,0>振<127,304,0>り<431,305,0>切<736,454,0>る<1190,608,0>ほ<1798,1012,0>ど", "[73300,3437]<0,304,0>苍<304,607,0>い<911,252,0>苍<1163,455,0>い<1618,454,0>あ<2072,405,0>の<2477,960,0>空", "[76737,3139]<0,252,0>苍<252,406,0>い<658,201,0>苍<859,559,0>い<1418,455,0>あ<1873,407,0>の<2280,859,0>空", "[79878,100000]<0,106,0>苍<106,555,0>い<661,202,0>苍<863,505,0>い<1368,402,0>あ<1770,353,0>の<2123,2982,0>空", ""]}' ], [ "audioName", "string", "日本ACG-ブルーバード" ], [ "lyricOffset", "number", -500 ], [ "widthPadding", "number", 0 ], [ "lineSpace", "number", 10 ], [ "minWaitPoint", "number", 3 ], [ "maxWaitPoint", "number", 5 ], [ "pointRadius", "number", 12 ], [ "pointColor", "string", "blue" ], [ "pointWSpace", "number", 10 ], [ "pointHSpace", "number", 6 ], [ "lineWidth", "number", 4 ], [ "uLineColor", "string", "#FFFFFF" ], [ "uTextColor", "string", "#0000FF" ], [ "dLineColor", "string", "#000000" ], [ "dTextColor", "string", "#FFFFFF" ] ], 
MK_TextMakerAnim_Karaoke.prototype.onCreate = function() {
    MK_TextMakerAnimBase.prototype.onCreate.apply(this, arguments), this._audioName = "", 
    this._krcData = null, this._lyricData = null, this._lyricLineTargets = {}, this._drawingState = {
        drawLineIndex: 1,
        drawTextIndex: 1,
        drawX: 0
    }, this._playingState = {
        lineIndex: 0,
        textIndex: 0,
        isTopLine: !0,
        waitPointNum: 0,
        waitPointShowedNum: 0,
        waiting: !1,
        seek: 0,
        playing: !1,
        played: !1,
        lineStarted: !1,
        textStarted: !1,
        lineFinished: !1,
        textFinished: !1,
        topLineIndex: 0,
        botLineIndex: 0
    }, this._minWaitSec = +this.getParam("minWaitPoint"), this._maxWaitSec = +this.getParam("maxWaitPoint"), 
    this._bgsObject = null, this._bgsBuffer = null, this.initKrcData();
}, MK_TextMakerAnim_Karaoke.prototype.initKrcData = function() {
    this._audioName = this.getParam("audioName");
    var e = this.getParam("krcContents");
    try {
        this._krcData = JSON.parse(e), this.initLyricData();
    } catch (t) {
        this._krcData = null, this._lyricData = null, console.error("error parsed krc contents.", e);
    }
}, MK_TextMakerAnim_Karaoke.prototype.initLyricData = function() {
    var t = JSON.parse(JSON.stringify(this._krcData.lyricLines)), e = this.getParam("lyricOffset");
    t.forEach(t => t && (t.start += e)), this._lyricData = t;
}, MK_TextMakerAnim_Karaoke.prototype.createLyricLineSprites = function(t) {
    if (this._lyricLineTargets[t]) this.initLyricLineSprites(t); else if (0 === t) {
        var e = this.getParam("maxWaitPoint"), i = this.getParam("pointRadius"), a = this.getParam("pointColor"), n = this.getParam("pointWSpace"), r = this._drawingState, o = [];
        this._lyricLineTargets[t] = o, r.drawLineIndex = t, r.drawX = 0;
        for (var s = 1; s <= e; s++) {
            r.drawTextIndex = s, this.addExtraContent("circle", r.drawX + i, i, i, a);
            var p = o[o.length - 1];
            r.drawX += p.data.spriteData.width + n;
        }
        this.initLyricLineSprites(t);
    } else {
        var _ = this.getParam("lineWidth"), m = this.getParam("uLineColor"), u = this.getParam("uTextColor"), d = this.getParam("dLineColor"), h = this.getParam("dTextColor"), r = this._drawingState, c = this._lyricData[t - 1];
        if (c) {
            for (var x = 0; x <= 1; x++) {
                var A = [ t, "UP" + t ][x], o = [];
                this._lyricLineTargets[A] = o, r.drawLineIndex = A, r.drawX = 0;
                for (var s = 1, y = c.content.length; s <= y; s++) {
                    var l = c.content[s - 1];
                    r.drawTextIndex = s, this.addExtraContent("text", l.text, r.drawX, 0, [ h, u ][x], _, [ d, m ][x]);
                    p = o[o.length - 1];
                    r.drawX += p.data.spriteData.width, p.var.start = l.start, p.var.duration = l.duration, 
                    p.var.text = l.text;
                }
            }
            this.initLyricLineSprites(t);
        }
    }
}, MK_TextMakerAnim_Karaoke.prototype.initLyricLineSprites = function(i) {
    var t = [];
    if (0 === i) t.push(this.getLyricLineSprites(i)); else for (var e = 0; e <= 1; e++) t.push(this.getLyricLineSprites(i, e));
    t.forEach((t, e) => t.forEach(t => t && t.sprite && 0 === i ? this.initWaitPointSprite(t.sprite) : this.initLyricSprite(t.sprite, e), this));
}, MK_TextMakerAnim_Karaoke.prototype.initLyricSprite = function(t, e) {
    t.visible = !1, (e = arguments.length < 2 || e) && t.setFrame(0, 0, 0, 0);
}, MK_TextMakerAnim_Karaoke.prototype.initWaitPointSprite = function(t) {
    t.visible = !1;
}, MK_TextMakerAnim_Karaoke.prototype.getLyricLineSprites = function(t, e) {
    return this._lyricLineTargets[e ? "UP" + t : t];
}, MK_TextMakerAnim_Karaoke.prototype.getOrCreateLyricLineSprites = function(t, e) {
    var i = this.getLyricLineSprites(t, e);
    return i || (this.createLyricLineSprites(t), i = this.getLyricLineSprites(t, e)), 
    i;
}, MK_TextMakerAnim_Karaoke.prototype.drawExtraContent = function(t, ...e) {
    MK_TextMakerAnimBase.prototype.drawExtraContent.apply(this, arguments), "text" == t ? this.drawExtraContent_text(...e) : "circle" == t ? this.drawExtraContent_circle(...e) : console.warn(`unknown drawExtraContent type "${t}".`);
}, MK_TextMakerAnim_Karaoke.prototype.drawExtraContent_text = function(t, e, i, a, n, r, o, s) {
    var p, _, m;
    this._msgWindow && (p = this._msgWindow.contents.textColor, _ = this._msgWindow.contents.outlineWidth, 
    m = this._msgWindow.contents.outlineColor, this._msgWindow.changeTextColor(a || p), 
    this._msgWindow.contents.outlineColor = r || m, this._msgWindow.contents.outlineWidth = n || _, 
    this._msgWindow.drawText(t, e, i, o, s), this._msgWindow.changeTextColor(p), this._msgWindow.contents.outlineColor = m, 
    this._msgWindow.contents.outlineWidth = _);
}, MK_TextMakerAnim_Karaoke.prototype.drawExtraContent_circle = function(t, e, i, a) {
    this._msgWindow && this._msgWindow.contents.drawCircle(t, e, i, a);
}, MK_TextMakerAnim_Karaoke.prototype.onInitExtraTarget = function(t, ...e) {
    var i, a, n;
    MK_TextMakerAnimBase.prototype.onInitExtraTarget.apply(this, arguments), t && (t.sprite, 
    i = t.var, a = this._drawingState.drawLineIndex, n = this._drawingState.drawTextIndex, 
    i.lineIndex = a, i.textIndex = n, this._lyricLineTargets[a] || (this._lyricLineTargets[a] = []), 
    this._lyricLineTargets[a][n] = t);
}, MK_TextMakerAnim_Karaoke.prototype.calLyricLinePosition = function(t, e, i) {
    var a = this.getLyricLineSprites(t, i);
    if (a && 1 < a.length) {
        var n = this.getParam("widthPadding"), r = this.getParam("lineSpace"), o = this.getParam("pointRadius"), s = this.getParam("pointHSpace"), p = this._msgWindow.contentsWidth(), _ = this._msgWindow.contentsHeight(), m = this._msgWindow.lineHeight(), _ = Math.floor((_ - 2 * m - r) / 2);
        if (0 === t) return {
            x: n,
            y: _ - 2 * o - s
        };
        s = a[1].data.spriteData.x, a = a[a.length - 1].data.spriteData.x + a[a.length - 1].data.spriteData.width;
        return {
            x: (e = !(2 <= arguments.length) || e) ? n : p - n - (a - s),
            y: e ? _ : _ + m + r
        };
    }
    return {
        x: 0,
        y: 0
    };
}, MK_TextMakerAnim_Karaoke.prototype.calLyricLineY = function(t, e) {
    this.getParam("widthPadding");
    var i = this.getParam("lineSpace"), a = this.getParam("pointRadius"), n = this.getParam("pointHSpace"), r = this._msgWindow.contentsHeight(), o = this._msgWindow.lineHeight(), r = Math.floor((r - 2 * o - i) / 2);
    return 0 === t ? r - 2 * a - n : (e = !(2 <= arguments.length) || e) ? r : r + o + i;
}, MK_TextMakerAnim_Karaoke.prototype.showLyricLineSprites = function(t, e) {
    if (!(t <= 0)) {
        var i = [], n = [];
        if (0 === t) i.push(this.getOrCreateLyricLineSprites(t)), n.push(this.calLyricLinePosition(t)); else {
            e = !(2 <= arguments.length) || e;
            for (var a = 0; a <= 1; a++) i.push(this.getOrCreateLyricLineSprites(t, !!a)), n.push(this.calLyricLinePosition(t, e, !!a));
        }
        i.forEach((t, a) => t && n[a] && t.forEach(function(t, e) {
            var i;
            t && t.sprite && (i = n[a], t.sprite.x = t.data.spriteData.drawX + i.x, t.sprite.y = t.data.spriteData.drawY + i.y, 
            t.sprite.visible = !0);
        }));
    }
}, MK_TextMakerAnim_Karaoke.prototype.hideLyricLineSprites = function(t) {
    if (!(t <= 0)) {
        var e = [];
        if (0 === t) e.push(this.getLyricLineSprites(t)); else for (var i = 0; i <= 1; i++) e.push(this.getLyricLineSprites(t, !!i));
        e.forEach(t => t && t.forEach(function(t) {
            t && t.sprite && (t.sprite.visible = !1);
        }));
    }
}, MK_TextMakerAnim_Karaoke.prototype.onPlay = function() {
    var t, e;
    MK_TextMakerAnimBase.prototype.onPlay.apply(this, arguments), this.canPlay() ? (t = this.getParam("minWaitPoint"), 
    e = this.getParam("maxWaitPoint"), this._minWaitSec = +t, this._maxWaitSec = +e, 
    (e = this._playingState).playing = !0, e.played = !1, e.lineIndex = 1, e.textIndex = 1, 
    e.seek = 0, e.lineStarted = !1, e.textStarted = !1, e.lineFinished = !1, e.textFinished = !1, 
    this.updateOnPlaying(), this.playKaraokeAudio()) : this.setFlagStopOn();
}, MK_TextMakerAnim_Karaoke.prototype.canPlay = function() {
    return this._audioName && this._lyricData;
}, MK_TextMakerAnim_Karaoke.prototype.playKaraokeAudio = function() {
    var t;
    this._audioName && (t = this.createAudioObject(), this.stopKaraokeAudio(), t.name && (this._bgsBuffer = this.createAudioBuffer(t.name)), 
    AudioManager.updateBufferParameters(this._bgsBuffer, AudioManager._bgsVolume, t), 
    this._bgsBuffer.play());
}, MK_TextMakerAnim_Karaoke.prototype.stopKaraokeAudio = function() {
    this._bgsBuffer && this._bgsBuffer.stop();
}, MK_TextMakerAnim_Karaoke.prototype.karaokeAudioPlaying = function() {
    return this._bgsBuffer && this._bgsBuffer.isPlaying();
}, MK_TextMakerAnim_Karaoke.prototype.karaokeAudioSeek = function() {
    return this._bgsBuffer && this._bgsBuffer.isPlaying() ? this._bgsBuffer.seek() : 0;
}, MK_TextMakerAnim_Karaoke.prototype.createAudioObject = function() {
    var t = this._bgsObject || AudioManager.makeEmptyAudioObject();
    return t.name = this._audioName, t.pan = 0, t.pitch = 100, t.volume = 90, this._bgsObject = t, 
    this._bgsObject;
}, MK_TextMakerAnim_Karaoke.prototype.createAudioBuffer = function(t) {
    var e = AudioManager.audioFileExt(), e = AudioManager._path + "bgs/" + encodeURIComponent(t) + e;
    if (this._bgsBuffer && e === this._bgsBuffer.url) return this._bgsBuffer;
    e = new WebAudio(e);
    return e.autoPlay = !1, e;
}, MK_TextMakerAnim_Karaoke.prototype.onPlaying = function() {
    MK_TextMakerAnimBase.prototype.onPlaying.apply(this, arguments), this.updateOnPlaying();
}, MK_TextMakerAnim_Karaoke.prototype.updateOnPlaying = function() {
    this.updatePlayingState(), this.updateLyricLinesSprites(), this.updateLyricTextsSprites(), 
    this.updateWaitPointSprites(), this.updateStopKaraokeAudio();
}, MK_TextMakerAnim_Karaoke.prototype.updatePlayingState = function() {
    var t = this._playingState, e = this.playingSeek(), i = this.lyricLineTextSeek(e);
    t.seek = e, t.lineIndex = i.lineIndex, t.lineStarted = i.lineStarted, t.lineFinished = i.lineFinished, 
    t.waitPointNum = i.waitPointNum, t.textIndex = i.textIndex, t.textStarted = i.textStarted, 
    t.textFinished = i.textFinished, t.waiting = 0 < !!t.waitPointNum;
}, MK_TextMakerAnim_Karaoke.prototype.updateLyricLinesSprites = function() {
    var t = this._playingState;
    t.lineIndex <= 0 || (t.lineIndex == t.topLineIndex ? t.lineIndex + 1 <= this._lyricData.length && this.updateLyricLineSpritesShow(t.lineIndex + 1, !1) : t.lineIndex == t.botLineIndex ? t.lineIndex + 1 <= this._lyricData.length && this.updateLyricLineSpritesShow(t.lineIndex + 1, !0) : t.played ? (this.updateLyricLineSpritesHide(t.topLineIndex), 
    this.updateLyricLineSpritesHide(t.botLineIndex)) : (t.isTopLine = !0, this.updateLyricLineSpritesShow(t.lineIndex, t.isTopLine), 
    this.updateLyricLineSpritesShow(t.lineIndex + 1, !t.isTopLine), t.played = !0));
}, MK_TextMakerAnim_Karaoke.prototype.updateLyricLineSpritesHide = function(t) {
    var e = this._playingState;
    e.topLineIndex == t ? (this.hideLyricLineSprites(...arguments), e.topLineIndex = -1) : e.botLineIndex == t && (this.hideLyricLineSprites(...arguments), 
    e.botLineIndex = -1);
}, MK_TextMakerAnim_Karaoke.prototype.updateLyricLineSpritesShow = function(t, e) {
    var i = this._playingState, a = e ? "topLineIndex" : "botLineIndex";
    i[a] != t && (this.updateLyricLineSpritesHide(i[a]), this.showLyricLineSprites(...arguments), 
    i[a] = t);
}, MK_TextMakerAnim_Karaoke.prototype.updateLyricTextsSprites = function() {
    var i, t = this._playingState, e = t.lineIndex, a = t.seek;
    0 < e && this._lyricData && (t = this.getOrCreateLyricLineSprites(e, !0), i = this._lyricData[e - 1], 
    t && i && t.forEach(function(t) {
        var e;
        t && t.sprite && (e = i.content[t.var.textIndex - 1], e = ((a - i.start - e.start) / e.duration).clamp(0, 1), 
        e = Math.floor(t.data.spriteData.width * e), t.sprite.setFrame(0, 0, e, t.data.spriteData.height));
    }, this));
};

const MK_TextMakerAnim_Karaoke_DEBUG_AUDIO_SEEK = !(MK_TextMakerAnim_Karaoke.prototype.updateWaitPointSprites = function() {
    var t = this._playingState, i = t.waitPointNum, e = this.getOrCreateLyricLineSprites(0);
    0 < i ? (e.forEach((t, e) => t && t.sprite && (t.sprite.visible = e <= i)), t.waitPointShowedNum = i) : (0 < t.waitPointShowedNum && e.forEach(t => t && t.sprite && (t.sprite.visible = !1)), 
    t.waitPointShowedNum = 0);
});

function MK_TextMakerAnim_Phonetic() {
    this.initialize.apply(this, arguments);
}

function MK_TextStyleAnimBase() {
    this.initialize.apply(this, arguments);
}

function MK_TextStyleAnim_Center() {
    this.initialize.apply(this, arguments);
}

function MK_SpriteAnimationSet() {
    throw new Error("MK_SpriteAnimationSet is a static class");
}

MK_TextMakerAnim_Karaoke_DEBUG_AUDIO_SEEK ? MK_TextMakerAnim_Karaoke.prototype.playingSeek = function() {
    return this._debug_audioSeek || 0;
} : MK_TextMakerAnim_Karaoke.prototype.playingSeek = function() {
    return 1e3 * this.karaokeAudioSeek();
}, MK_TextMakerAnim_Karaoke.prototype.minWaitSec = function() {
    return this._minWaitSec;
}, MK_TextMakerAnim_Karaoke.prototype.maxWaitSec = function() {
    return this._maxWaitSec;
}, MK_TextMakerAnim_Karaoke.prototype.calWaitPointNum = function(t, e) {
    t = Math.ceil((e - t) / 1e3);
    return this._playingState.waiting || t >= this.minWaitSec() ? t >= this.maxWaitSec() ? this.maxWaitSec() : t : 0;
}, MK_TextMakerAnim_Karaoke.prototype.lyricLineSeek = function(t) {
    var t = 1 <= arguments.length ? t : this.playingSeek(), e = this._playingState ? this._playingState.lineIndex : 1, i = -1, a = !1, n = !1, r = 0;
    if (this._lyricData) {
        for (var o, s, p = 0; p <= 1; p++) {
            for (var _ = this._lyricData, m = e <= 0 ? p ? _.length : 0 : p ? e - 1 : _.length, u = e <= 0 || p ? 0 : e - 1; u < m; u++) if (o = _[u], 
            s = _[u + 1], !(t < o.start)) {
                if (t < o.start + o.duration) {
                    i = u, n = !(a = !0);
                    break;
                }
                if (s && t < s.start) {
                    if (r = this.calWaitPointNum(t, s.start), s.start - t > 1e3 * this.maxWaitSec()) {
                        i = u, n = a = !0;
                        break;
                    }
                    i = u + 1, n = a = !1;
                    break;
                }
                if (!s) {
                    i = u + 1, n = !(a = !1);
                    break;
                }
            }
            if (0 <= i) break;
        }
        i < 0 && (n = a = !1, this._lyricData[i = 0] && (r = this.calWaitPointNum(t, this._lyricData[0].start)));
    }
    return {
        lineIndex: i + 1,
        lineStarted: a,
        lineFinished: n,
        waitPointNum: r
    };
}, MK_TextMakerAnim_Karaoke.prototype.lyricLineTextSeek = function(t) {
    var t = 1 <= arguments.length ? t : this.playingSeek(), e = this.lyricLineSeek(t), i = e.lineIndex, a = (e.lineFinished, 
    e.waitPointNum, this._playingState ? this._playingState.lineIndex : 1), n = this._playingState ? this._playingState.textIndex : 1, r = -1, o = !1, s = !1;
    if (this._lyricData && 0 < i && this._lyricData[i - 1]) {
        for (var p, _, m = 0; m <= 1; m++) {
            for (var u = this._lyricData[i - 1].content, d = a != i || n <= 0 ? m ? u.length : 0 : m ? n - 1 : u.length, h = a != i || n <= 0 || m ? 0 : n - 1; h < d; h++) if (p = u[h], 
            _ = u[h + 1], !(t < p.start)) {
                if (t < p.start + p.duration) {
                    r = h, s = !(o = !0);
                    break;
                }
                if (_ && t < _.start) {
                    r = h, s = o = !0;
                    break;
                }
                if (!_) {
                    r = h + 1, s = !(o = !1);
                    break;
                }
            }
            if (0 <= r) break;
        }
        r < 0 && (r = 0, s = o = !1);
    }
    return Object.assign({
        textIndex: r + 1,
        textStarted: o,
        textFinished: s
    }, e);
}, MK_TextMakerAnim_Karaoke.prototype.mesasgeWindowClosed = function() {
    return !this._msgWindow || this._msgWindow.isClosed();
}, MK_TextMakerAnim_Karaoke.prototype.updateStopKaraokeAudio = function() {
    this.karaokeAudioPlaying() && this.mesasgeWindowClosed() && this.stopKaraokeAudio();
}, MK_TextMakerAnim_Karaoke.prototype.destroyMe = function() {
    MK_TextMakerAnimBase.prototype.destroyMe.apply(this, arguments), this.stopKaraokeAudio();
}, MK_TextMakerAnim_Phonetic.prototype = Object.create(MK_TextMakerAnimBase.prototype), 
(MK_TextMakerAnim_Phonetic.prototype.constructor = MK_TextMakerAnim_Phonetic)._DEFAULT_ANIM_CODE = 33, 
MK_TextMakerAnim_Phonetic._DEFAULT_ANIM_NAME = "TextMakerAnim_Phonetic", MK_TextMakerAnim_Phonetic._PARAM_CONFIG = [ [ "phonetic", "string", "一(yi)二(er)三(san)四(si\\(4\\))" ] ], 
MK_TextMakerAnim_Phonetic.prototype.onCreate = function() {
    MK_TextMakerAnimBase.prototype.onCreate.apply(this, arguments), this._phoneticList = [];
}, MK_TextMakerAnim_Phonetic.prototype.onPlay = function() {
    MK_TextMakerAnimBase.prototype.onPlay.apply(this, arguments);
}, MK_TextStyleAnimBase.prototype = Object.create(MK_TextAnimBase.prototype), (MK_TextStyleAnimBase.prototype.constructor = MK_TextStyleAnimBase)._DEFAULT_ANIM_CODE = 51, 
MK_TextStyleAnimBase._DEFAULT_ANIM_NAME = "TextStyleAnimBase", MK_TextStyleAnimBase._PARAM_CONFIG = [], 
MK_TextStyleAnim_Center.prototype = Object.create(MK_TextStyleAnimBase.prototype), 
(MK_TextStyleAnim_Center.prototype.constructor = MK_TextStyleAnim_Center)._DEFAULT_ANIM_CODE = 52, 
MK_TextStyleAnim_Center._DEFAULT_ANIM_NAME = "TextStyleAnim_Center", MK_TextStyleAnim_Center._PARAM_CONFIG = [], 
MK_TextStyleAnim_Center.prototype.onInitTarget = function(t) {
    MK_TextStyleAnimBase.prototype.onInitTarget.apply(this, arguments);
    var e = this.getMsgContents();
    if (e && 0 < e.width) {
        var i, a = e.width, e = this.getTargets(), n = {};
        for (i in e.forEach(function(t) {
            var e = t.data.spriteData, i = t.data.textState, i = i.pageNum + "_" + i.lineNum;
            n[i] = n[i] || {
                maxX: e.x + e.width,
                arr: []
            }, n[i].arr.push(t), n[i].maxX < e.x + e.width && (n[i].maxX = e.x + e.width);
        }, this), n) {
            var r = Math.floor((a - n[i].maxX) / 2);
            n[i].arr.forEach(function(t) {
                t.sprite.x = r + t.data.spriteData.x;
            }, this);
        }
    }
}, MK_SpriteAnimationSet._animationClasses = [], MK_SpriteAnimationSet.addSpriteAnimationClass = function(t, e) {
    var i;
    t === MK_SpriteAnimBase || t && t.prototype && t.prototype instanceof MK_SpriteAnimBase ? (i = {
        class: t,
        name: e || t.name,
        code: this._animationClasses.length,
        params: {}
    }, this._animationClasses.push(i)) : (console.warn("invalid sprite animtion class.", t, e), 
    this._animationClasses.push(null));
}, MK_SpriteAnimationSet.addSpriteAnimationClassAt = function(t, e, i) {
    var a, n;
    e === MK_SpriteAnimBase || e && e.prototype && e.prototype instanceof MK_SpriteAnimBase ? (a = {
        class: e,
        name: i || e.name,
        code: t,
        params: {}
    }, this._animationClasses[t] && (n = this._animationClasses[t], console.warn(`sprite animation code ${t} exists. ${a.name} -> ${n.name}`)), 
    this._animationClasses[t] = a) : console.warn("invalid sprite animtion class.", t, e, i);
}, MK_SpriteAnimationSet.getSpriteAnimObjByCode = function(t) {
    return this._animationClasses[t];
}, MK_SpriteAnimationSet.getSpriteAnimObjByName = function(e) {
    return this._animationClasses.find(t => t && t.name == e);
}, MK_SpriteAnimationSet.getSpriteAnimClassByCode = function(t) {
    t = this.getSpriteAnimObjByCode(t);
    return t ? t.class : null;
}, MK_SpriteAnimationSet.getSpriteAnimClassByName = function(t) {
    t = this.getSpriteAnimObjByName(t);
    return t ? t.class : null;
}, MK_SpriteAnimationSet.getSpriteAnimParamsByCode = function(t) {
    t = this.getSpriteAnimObjByCode(t);
    return t ? t.params : null;
}, MK_SpriteAnimationSet.getSpriteAnimParamsByName = function(t) {
    t = this.getSpriteAnimObjByName(t);
    return t ? t.params : null;
}, MK_SpriteAnimationSet.setSpriteAnimParamsByCode = function(t, e, i) {
    var a = this.getSpriteAnimObjByCode(t);
    a ? a.params[e] = i : console.warn(`not found animtion class by code "${t}".`, t, e, i);
}, MK_SpriteAnimationSet.setSpriteAnimParamsByName = function(t, e, i) {
    var a = this.getSpriteAnimObjByName(t);
    a ? a.params[e] = i : console.warn(`not found animtion class by name "${t}".`, t, e, i);
}, MK_SpriteAnimationSet.getSpriteAnimParamsByCode = function(t, e) {
    var i = this.getSpriteAnimObjByCode(t);
    if (i) return i.params[e];
    console.warn(`not found animtion class by code "${t}".`, t, e, value);
}, MK_SpriteAnimationSet.getSpriteAnimParamsByName = function(t, e) {
    var i = this.getSpriteAnimObjByName(t);
    if (i) return i.params[e];
    console.warn(`not found animtion class by name "${t}".`, t, e, value);
}, [ MK_SpriteAnimBase ].forEach((t, e) => MK_SpriteAnimationSet.addSpriteAnimationClassAt(0 + e, t)), 
[ MK_TextAnimBase, MK_TextAnim_Fade, MK_TextAnim_Zoom, MK_TextAnim_Zoom2, MK_TextAnimBase, MK_TextAnim_Shake, MK_TextAnim_Zoom3, MK_TextAnim_Wave, MK_TextAnim_Rotation, MK_TextAnim_Swing, MK_TextAnim_Random ].forEach((t, e) => MK_SpriteAnimationSet.addSpriteAnimationClassAt(1 + e, t)), 
[ MK_TextMakerAnimBase, MK_TextMakerAnim_Karaoke ].forEach((t, e) => MK_SpriteAnimationSet.addSpriteAnimationClassAt(31 + e, t)), 
[ MK_TextStyleAnimBase, MK_TextStyleAnim_Center ].forEach((t, e) => MK_SpriteAnimationSet.addSpriteAnimationClassAt(51 + e, t));