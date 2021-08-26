// ================================================================
// MKP_TextSprite.js
// 文本精灵
// ================================================================
//  author : Mikan(MikanHako)
//  plugin : MKP_TextSprite.js 文本精灵
// version : v0.2.3 2021/08/21 增加绘制圆的方法、增加移除文字精灵的方法
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
 * @plugindesc 文本精灵 <MKP_TextSprite>
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.2.3.branch1 2021/08/22 更新插件说明
 *   v0.2.3 2021/08/21 增加绘制圆的方法、增加移除文字精灵的方法
 *   v0.2.2 2021/08/19 增加绘制图标的字母精灵
 *   v0.2.1 2021/08/18 调整字母对象框架、修复部分问题
 *     字母对象记录绘制位置和textState
 *     增加按某一动画code筛选字母对象的方法
 *     绘制时考虑文字外线
 *   v0.2.0-alpha 2021/08/18 更新框架 : TextSprite解耦
 *   v0.1.2.branch1 2021/08/17 清理冗余注释
 *   v0.1.2 2021/08/17 更新MKP_SpriteAnimManager的框架 相应地更新插件说明
 *   v0.1.1 2021/08/16 更新插件说明及规约
 *   v0.1.0.fix1 2020/11/14 修复绘制文字不会同步字体的问题
 *   v0.1.0 2020/11/11 完成基本框架和功能的demo
 *     把最初的MK_AnimatedMessage分成了MK_SpriteAnimManager和MK_TextSprite
 *   v0.0.0 2020/08/20 项目计划中
 * 
 * 
 * 
 * 
 * @help
 * 
 * 文本精灵 <MKP_TextSprite>
 * 
 * 
 * ## 简要说明
 * 
 * 完成精灵动画功能的三个插件之一  
 * + 插件`MKP_TextSprite`(本插件)
 *   - 用于支持绘制和控制播放动画等
 * + 插件`MKP_SpriteAnimationSet`
 *   - 用于提供处理动画效果等
 * + 插件`MKP_SpriteAnimManager`
 *   - 用于设置动画和动画参数、处理消息框文字播放动画等
 * 
 * 首先对动画进行配置，详细操作见 插件【MKP_SpriteAnimManager】  
 * 之后在编辑消息时，使用特殊字串触发一些播放动画的操作，
 * 如：创建动画、播放动画、暂停动画 等  
 * 详见 【使用方法】  
 * 
 * 
 * ## 使用方法
 * 
 * 按顺序导入 完成精灵动画功能的三个插件  
 * + MKP_TextSprite
 * + MKP_SpriteAnimationSet
 * + MKP_SpriteAnimManager
 * 
 * 在【显示文本】之前，需要设置动画，详见 插件【MKP_SpriteAnimManager】  
 * 之后在【显示文本】里编辑消息时，使用控制字符触发操作，详见 【控制字符】  
 * 
 * 
 * ## 控制字符
 * 
 * 在编辑消息文本时，可以使用类似 `\ABC` 或 `\ABC[123]` 的控制字符。  
 * 控制字符 可以用来 执行操作 或 显示特殊内容。  
 * 显示文本时，文字将会顺序显示，当到达控制字符时，将会执行对应操作或显示对应内容。  
 * 控制字符不区分大小写，参数只能使用数字  
 * 
 * | description | symbol          | param |
 * | :---------- | :-------------- | :---- |
 * | 创建动画     | `\TEXTANIM[..]` | 动画id |
 * | 播放动画     | `\TAPLAY[..]`   | 动画id |
 * | 停止动画(未完成)     | `\TASTOP[..]`   | 动画id |
 * | 暂停动画(未完成)     | `\TAPAUSE[..]`  | 动画id |
 * | 继续动画(未完成)     | `\TACONT[..]`   | 动画id |
 * | 开始添加文本(未完成) | `\TAADDON[..]`  | 动画id |
 * | 停止添加文本(未完成) | `\TAADDOFF[..]` | 动画id |
 * 
 * #### 创建动画
 * 为文本创建一个动画  
 * 显示文字进行到该控制字符时，将会创建动画  
 * 创建动画后，动画会开始准备，但不会直接播放  
 * TEXTANIM : text animation  
 * 
 * * `\TEXTANIM[..]`
 * + 参数
 *   - 动画id
 * 
 * #### 播放动画
 * 播放指定动画(创建动画后不会自动播放)  
 * TAPLAY : text animtion play  
 * 
 * * `\TAPLAY[..]`
 * + 参数
 *   - 动画id
 * 
 * #### 停止动画
 * 停止指定动画  
 * TAPAUSE : text animtion stop  
 * 
 * * `\TASTOP[..]`
 * + 参数
 *   - 动画id
 * 
 * #### 暂停动画
 * 暂停指定动画  
 * TACONT : text animtion pause  
 * 
 * * `\TAPAUSE[..]`
 * + 参数
 *   - 动画id
 * 
 * #### 继续动画
 * 继续指定动画  
 * TASTOP : text animtion continue  
 * 
 * * `\TACONT[..]`
 * + 参数
 *   - 动画id
 * 
 * #### 开始添加文本
 * 关闭指定动画添加文本  
 * TAADDOFF : text animtion add on  
 * 
 * * `\TAADDON[..]`
 * + 参数
 *   - 动画id
 * 
 * #### 停止添加文本
 * 开启指定动画添加文本(默认开启)  
 * TAADDOFF : text animtion add off  
 * 
 * * `\TAADDOFF[..]`
 * + 参数
 *   - 动画id
 * 
 * 
 * ## 其他说明
 * 
 * #### 动画列表，详细说明和参数见插件【MKP_SpriteAnimationSet】
 * 注 : id 为 默认动画id  
 * | id | 动画效果 |
 * | :- | :------- |
 * |  2 | 淡入淡出 |
 * |  3 | 缩放     |
 * |  4 | 翻转     |
 * |  5 | 上下出现(未完成) |
 * |  6 | 震动     |
 * |  7 | 剧烈缩放 |
 * |  8 | 波浪缩放 |
 * |  9 | 旋涡     |
 * | 10 | 摇晃     |
 * | 11 | 随机     |
 * | 32 | 卡拉Ok   |
 * | 52 | 文字居中 |
 * 
 * 
 * ## 使用示例
 * 
 * #### 让一段文字同时淡入显示
 * 配置动画id=101为基础动画id=1  
 * 在【显示文本】中编辑 : `\TextAnim[101]\>我是一段文字\TAplay[101]`  
 * 
 * 说明 :  
 * 首先创建动画，使得之后的文字能被动画识别 : `\TextAnim[101]`  
 * 文字需要同时显示，所以需要开启快速显示模式 : `\>`  
 * 之后输入需要的文字  
 * 最后开启动画，使得文字同时进行动画 : `\TAplay[101]`  
 * 
 * 
 * ## 后续任务
 * 
 * - [ ] ?添加使用文本精灵模式的控制字符，以减少普通模式下的不稳定性
 * - [ ] ?消息窗口关闭时，停止(?或销毁)动画实例
 * - [x] 绘画文字时，考虑文字阴影，增加宽度
 * - [ ] ?可以创建任意数量带id的无窗口的文本，显示时指定id，用id管理控制或关闭
 * - [x] 更新插件说明
 * - [ ] 默认关闭特殊绘制模式，需要时再打开
 * - [ ] 优化创建字母精灵，缓存一些sprite和bitmap，防止创建太多
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

function MK_TextBitmap() {
    this.initialize.apply(this, arguments);
}

function MK_TextSprite() {
    this.initialize.apply(this, arguments);
}

MK_TextBitmap.prototype = Object.create(Bitmap.prototype), (MK_TextBitmap.prototype.constructor = MK_TextBitmap).prototype.initialize = function(t, e) {
    Bitmap.prototype.initialize.apply(this, arguments), this._textSprite = null, this._textMode = !1;
}, MK_TextBitmap.prototype.setTextSprite = function(t) {
    this._textSprite = t;
}, MK_TextBitmap.prototype.textModeOn = function() {
    this._textMode = !0;
}, MK_TextBitmap.prototype.textModeOff = function() {
    this._textMode = !1;
}, MK_TextBitmap.prototype.needTextMode = function() {
    return this._textMode && this._textSprite;
}, MK_TextBitmap.prototype.drawText = function(t, e, i, r, p, o) {
    var a, n, s, x, h;
    this.needTextMode() ? (a = this.measureTextWidthWithOutline(t), n = new Bitmap(a.width + a.offsetWidth, p + a.offsetHeight), 
    (s = new Sprite(n)).x = e + a.offsetX, s.y = i + a.offsetY, x = this._canvas, h = this._context, 
    this.__canvas = n._canvas, this.__context = n._context, this.textModeOff(), Bitmap.prototype.drawText.call(this, t, -a.offsetX, -a.offsetY, r, p, o), 
    this.textModeOn(), this.__canvas = x, this.__context = h, this._textSprite.addLetterSprite(s, t, e, i, s.x, s.y)) : Bitmap.prototype.drawText.apply(this, arguments);
}, MK_TextBitmap.prototype.blt = function(t, e, i, r, p, o, a, n, s) {
    var x, h, l, _;
    this.needTextMode() ? (n = n || r, s = s || p, x = new Bitmap(n, s), (h = new Sprite(x)).x = o, 
    h.y = a, l = this._canvas, _ = this._context, this.__canvas = x._canvas, this.__context = x._context, 
    this.textModeOff(), Bitmap.prototype.blt.call(this, t, e, i, r, p, 0, 0, n, s), 
    this.textModeOn(), this.__canvas = l, this.__context = _, this._textSprite.addLetterSprite(h, "", o, a, h.x, h.y)) : Bitmap.prototype.drawText.apply(this, arguments);
}, MK_TextBitmap.prototype.drawCircle = function(t, e, i, r) {
    var p, o;
    this.needTextMode() ? (p = new Bitmap(2 * i, 2 * i), (o = new Sprite(p)).x = t - i, 
    o.y = e - i, p.drawCircle(i, i, i, r), this._textSprite.addLetterSprite(o, "", t, e, o.x, o.y)) : Bitmap.prototype.drawCircle.apply(this, arguments);
}, MK_TextBitmap.prototype.clearTextSprite = function() {
    this._textSprite.clearLetters();
}, MK_TextBitmap.prototype.clear = function() {
    Bitmap.prototype.clear.apply(this, arguments), this.clearTextSprite();
}, MK_TextBitmap.prototype.measureTextWidthWithOutline = function(t) {
    var e = this.outlineWidth + this._context.shadowBlur;
    return {
        offsetX: -e / 2,
        offsetY: -e / 2,
        offsetWidth: e,
        offsetHeight: e,
        width: this.measureTextWidth(t)
    };
}, MK_TextSprite.prototype = Object.create(Sprite.prototype), (MK_TextSprite.prototype.constructor = MK_TextSprite).prototype.initialize = function() {
    Sprite.prototype.initialize.apply(this, arguments), this.clearAll();
}, MK_TextSprite.prototype.clearAll = function() {
    this.initLetterList(), this.clearAllFlag(), this._msgWindow = null;
}, MK_TextSprite.prototype.initLetterList = function() {
    this._letters = [];
}, MK_TextSprite.prototype.clearLetters = function() {
    this._letters = [], this.removeChildren();
}, MK_TextSprite.prototype.onClearLetters = function() {}, MK_TextSprite.prototype.makeNewLetterData = function(t, e, i, r, p, o) {
    return {
        spriteData: {
            text: e || "",
            drawX: void 0 === i ? t.x : i,
            drawY: void 0 === r ? t.y : r,
            x: void 0 === p ? t.x : p,
            y: void 0 === o ? t.y : o,
            width: t.width,
            height: t.height
        },
        textState: Object.assign({}, this._msgWindow ? this._msgWindow._textState : {})
    };
}, MK_TextSprite.prototype.createLetterObject = function(t) {
    return {
        sprite: t,
        flag: Object.assign({}, this._newLetterFlag),
        data: this.makeNewLetterData(...arguments)
    };
}, MK_TextSprite.prototype.addLetterSprite = function(t, e, i, r, p, o) {
    var a;
    t && (a = this.createLetterObject(...arguments), this._letters.push(a), this.addChild(t), 
    this.onAddLetterSprite(a));
}, MK_TextSprite.prototype.onAddLetterSprite = function(t) {}, MK_TextSprite.prototype.removeLetterSprite = function(e) {
    var t, i = this._letters.findIndex(t => t && t.sprite === e);
    0 <= i && (t = this._letters[i], this._letters.splice(i, 1), this.removeSprite(e), 
    this.onRemoveLetterSprite(t));
}, MK_TextSprite.prototype.onRemoveLetterSprite = function(t) {}, MK_TextSprite.prototype.clearNewLetterFlag = function() {
    this._newLetterFlag = {};
}, MK_TextSprite.prototype.clearTextSpriteFlag = function() {
    this._textSpriteFlag = {};
}, MK_TextSprite.prototype.clearTextSpriteData = function() {
    this._textSpriteData = {};
}, MK_TextSprite.prototype.clearAllFlag = function() {
    this.clearNewLetterFlag(), this.clearTextSpriteFlag(), this.clearTextSpriteData();
}, MK_TextSprite.prototype.setNewLetterFlag = function(t, e) {
    this._newLetterFlag[t] = void 0 === e || !!e;
}, MK_TextSprite.prototype.setTextSpriteFlag = function(t, e) {
    this._textSpriteFlag[t] = void 0 === e || !!e;
}, MK_TextSprite.prototype.setTextSpriteData = function(t, e) {
    this._textSpriteData[t] = e;
}, MK_TextSprite.prototype.animFlagFormat = function(t, e) {
    return t + "_" + e;
}, MK_TextSprite.prototype.setNewLetterAnimFlag = function(t, e, i) {
    this.setNewLetterFlag(this.animFlagFormat(t, e), i);
}, MK_TextSprite.prototype.setTextSpriteAnimFlag = function(t, e, i) {
    this.setTextSpriteFlag(this.animFlagFormat(t, e), i);
}, MK_TextSprite.prototype.setTextSpriteAnimData = function(t, e, i) {
    this.setTextSpriteData(this.animFlagFormat(t, e), i);
}, MK_TextSprite.prototype.getLetterFlag = function(t, e) {
    return !(!t || !t.flag) && t.flag[e];
}, MK_TextSprite.prototype.getTextSpriteFlag = function(t) {
    return this._textSpriteFlag[t];
}, MK_TextSprite.prototype.getTextSpriteData = function(t) {
    return this._textSpriteData[t];
}, MK_TextSprite.prototype.getLetterAnimFlag = function(t, e, i) {
    return !(!t || !t.flag) && t.flag[this.animFlagFormat(e, i)];
}, MK_TextSprite.prototype.getTextSpriteAnimFlag = function(t, e) {
    return this.getTextSpriteFlag(this.animFlagFormat(t, e));
}, MK_TextSprite.prototype.getTextSpriteAnimData = function(t, e) {
    return this.getTextSpriteData(this.animFlagFormat(t, e));
}, MK_TextSprite.prototype.getLetterObjects = function() {
    return this._letters;
}, MK_TextSprite.prototype.getLetterSprites = function() {
    return this.getLetterObjects().map(t => t.sprite);
}, MK_TextSprite.prototype.filterLetterObjects = function(r, p) {
    return this.getLetterObjects().filter(t => {
        if (r) for (var e = 0, i = (r = Array.isArray(r) ? r : [ r ]).length; e < i; e++) if (!t.flag[r[e]]) return !1;
        if (p) for (e = 0, i = (p = Array.isArray(p) ? p : [ p ]).length; e < i; e++) if (t.flag[p[e]]) return !1;
        return !0;
    });
}, MK_TextSprite.prototype.filterLetterObjectsByAnimFlag = function(e, t, i) {
    return t = t && (Array.isArray(t) ? t : [ t ]).map(t => this.animFlagFormat(t, e), this), 
    i = i && (Array.isArray(i) ? i : [ i ]).map(t => this.animFlagFormat(t, e), this), 
    this.filterLetterObjects(e, t, i);
}, MK_TextSprite.prototype.setMsgWindow = function(t) {
    this._msgWindow = t;
};