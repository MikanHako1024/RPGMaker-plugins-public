// ================================================================
// MKP_TextSprite.js
// 文本精灵
// ================================================================
//  author : Mikan(MikanHako)
//  plugin : MKP_TextSprite.js 文本精灵
// version : v0.1.0.fix1 2020/11/14 修复绘制文字不会同步字体的问题
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
 * 本插件`MKP_TextSprite`用来播放动画  
 * 设置动画和动画参数由另一个插件`MKP_SpriteAnimManager`负责  
 * 
 * 首先对动画进行配置，详细操作见 插件`MKP_SpriteAnimManager`  
 * 之后在编辑消息时，使用特殊字串触发一些播放动画的操作，
 * 如：创建动画、播放动画、暂停动画 等  
 * 详见 【使用方法】  
 * 
 * 
 * ## 使用方法
 * 
 * 在【显示文本】之前，需要设置动画，详见 插件`MKP_SpriteAnimManager`  
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
 * #### 动画列表，详细说明和参数见插件`MKP_SpriteAnimManager`
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
 * - [ ] 添加使用文本精灵模式的控制字符，以减少普通模式下的不稳定性
 * - [ ] 消息窗口关闭时，停止(?或销毁)动画实例
 * - [ ] 绘画文字时，考虑文字阴影，增加宽度
 * - [ ] 可以创建任意数量带id的无窗口的文本，显示时指定id，用id管理控制或关闭
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
// MK_TextBitmap
// 拓展contents 修改drawText

function MK_TextBitmap() {
    this.initialize.apply(this, arguments);
};

MK_TextBitmap.prototype = Object.create(Bitmap.prototype);
MK_TextBitmap.prototype.constructor = MK_TextBitmap;

MK_TextBitmap.prototype.initialize = function(width, height) {
    Bitmap.prototype.initialize.apply(this, arguments);

    this._textSprite = null;
    this._textMode = false;
};

MK_TextBitmap.prototype.setTextSprite = function(sprite) {
    this._textSprite = sprite;
};
MK_TextBitmap.prototype.textModeOn = function() {
    this._textMode = true;
};
MK_TextBitmap.prototype.textModeOff = function() {
    this._textMode = false;
};

MK_TextBitmap.prototype.needTextMode = function() {
    return this._textMode && this._textSprite;
};


MK_TextBitmap.prototype.drawText = function(text, x, y, maxWidth, lineHeight, align) {
	if (this.needTextMode()) {
		var bitmap = new Bitmap(this.measureTextWidth(text), lineHeight);

		var sprite = new Sprite(bitmap);
		sprite.x = x;
		sprite.y = y;

		var canvas = this._canvas;
		var context = this._context;

		this.__canvas = bitmap._canvas;
		this.__context = bitmap._context;

		this.textModeOff();
		this.drawText(text, 0, 0, maxWidth, lineHeight, align);
		this.textModeOn(); // 这里当做之前一定是on状态，所以还原时直接on了

		this.__canvas = canvas;
		this.__context = context;

		this._textSprite.addLetterSprite(sprite);
	}
	else {
		Bitmap.prototype.drawText.apply(this, arguments);
	}
};

MK_TextBitmap.prototype.clearTextSprite = function() {
	this._textSprite.clearLetters();
};

MK_TextBitmap.prototype.clear = function() {
	Bitmap.prototype.clear.apply(this, arguments);
	this.clearTextSprite();
};




// ----------------------------------------------------------------
// MK_TextSprite
// 字母容器

// 借助MK_TextBitmap，把本应该绘制在contents的文字，生成单独的精灵，挂在MK_TextSprite里

// MK_TextSprite不再存储动画参数，而是由MK_SpriteAnimManager储存
// MK_TextSprite不再处理动画，而是由MK_TextAnimBase处理动画逻辑，以及保存动画播放信息
// 每个精灵的信息 仍由文字的精灵存储
// MK_TextSprite是精灵容器，同时储存动画，控制动画

function MK_TextSprite() {
	this.initialize.apply(this, arguments);
};

MK_TextSprite.prototype = Object.create(Sprite.prototype);
MK_TextSprite.prototype.constructor = MK_TextSprite;

MK_TextSprite.prototype.initialize = function() {
	Sprite.prototype.initialize.apply(this, arguments);

	// 文字精灵列表
	this.initLetterList();

	// 文本动画列表
	this.initTextAnimList();

	// 消息窗口
	this._msgWindow = null;
};

MK_TextSprite.prototype.init = function() {
	this.bitmap = null;

	// 文字精灵列表
	this.initLetterList();

	// 文本动画列表
	this.initTextAnimList();

	// 消息窗口
	this._msgWindow = null;
};


// --------------------------------
// 文字精灵列表

MK_TextSprite.prototype.initLetterList = function() {
	this._letters = [];
};

MK_TextSprite.prototype.clearLetters = function() {
	this._letters = [];
	this.removeChildren();
};


// --------------------------------
// 添加文字精灵

MK_TextSprite.prototype.addLetterSprite = function(sprite) {
	this.addTextAnimTarget(sprite);

	this._letters.push(sprite);
	//this.initLetter(sprite); // TODO

	this.addChild(sprite);
};

MK_TextSprite.prototype.addTextAnimTarget = function(sprite) {
	this._textAnimList.forEach(function(textAnim) {
		textAnim.addTarget(sprite);
	}, this);
};


// --------------------------------
// 文本动画列表

MK_TextSprite.prototype.initTextAnimList = function() {
	this._textAnimList = [];
};

MK_TextSprite.prototype.getTextAnim = function(code) {
	return this._textAnimList[code];
};


// --------------------------------
// 添加文本动画

MK_TextSprite.prototype.addTextAnim = function(textAnim) {
	this._textAnimList[textAnim.getAnimCode()] = textAnim;
	textAnim.setTargets(this._letters);
};

MK_TextSprite.prototype.createTextAnim = function(code) {
	return MK_SpriteAnimManager.createSpriteAnim(code);
};

MK_TextSprite.prototype.addTextAnimByCode = function(code) {
	var textAnim = this.createTextAnim(code);
	!!textAnim && this.addTextAnim(textAnim);
};


// --------------------------------
// update

MK_TextSprite.prototype.update = function() {
	this.updateTextAnim();
	Sprite.prototype.update.apply(this, arguments);
};

MK_TextSprite.prototype.updateTextAnim = function() {
	this._textAnimList.forEach(function(textAnim) {
		!!textAnim && textAnim.update();
	}, this);
};


// --------------------------------
// 控制动画

MK_TextSprite.prototype.setFlagAutoOn = function(code) {
	var textAnim = this.getTextAnim(code);
	!!textAnim && textAnim.setFlagAutoOn();
};
MK_TextSprite.prototype.setFlagAutoOff = function(code) {
	var textAnim = this.getTextAnim(code);
	!!textAnim && textAnim.setFlagAutoOff();
};

MK_TextSprite.prototype.setFlagPlayOn = function(code) {
	var textAnim = this.getTextAnim(code);
	!!textAnim && textAnim.setFlagPlayOn();
};
MK_TextSprite.prototype.setFlagPauseOn = function(code) {
	var textAnim = this.getTextAnim(code);
	!!textAnim && textAnim.setFlagPauseOn();
};
MK_TextSprite.prototype.setFlagContinueOn = function(code) {
	var textAnim = this.getTextAnim(code);
	!!textAnim && textAnim.setFlagContinueOn();
};
MK_TextSprite.prototype.setFlagStopOn = function(code) {
	var textAnim = this.getTextAnim(code);
	!!textAnim && textAnim.setFlagStopOn();
};

MK_TextSprite.prototype.setFlagInitOn = function(code) {
	var textAnim = this.getTextAnim(code);
	!!textAnim && textAnim.setFlagInitOn();
};
MK_TextSprite.prototype.setFlagInitOff = function(code) {
	var textAnim = this.getTextAnim(code);
	!!textAnim && textAnim.setFlagInitOff();
};

MK_TextSprite.prototype.setFlagEnabledOn = function(code) {
	var textAnim = this.getTextAnim(code);
	!!textAnim && textAnim.setFlagEnabledOn();
};
MK_TextSprite.prototype.setFlagEnabledOff = function(code) {
	var textAnim = this.getTextAnim(code);
	!!textAnim && textAnim.setFlagEnabledOff();
};

MK_TextSprite.prototype.setFlagAllowAddOn = function(code) {
	var textAnim = this.getTextAnim(code);
	!!textAnim && textAnim.setFlagAllowAddOn();
};
MK_TextSprite.prototype.setFlagAllowAddOff = function(code) {
	var textAnim = this.getTextAnim(code);
	!!textAnim && textAnim.setFlagAllowAddOff();
};


// --------------------------------
// 还原letter


// --------------------------------
// 消息窗口

// 设置消息窗口，传给需要的动画实例使用

MK_TextSprite.prototype.setMsgWindow = function(msgWindow) {
	this._msgWindow = msgWindow;
};




// ----------------------------------------------------------------
// 修改 Window_Message

(function() {

var _MK_Window_Message__createAllParts   = Window_Message.prototype._createAllParts;
Window_Message.prototype._createAllParts = function() {
	_MK_Window_Message__createAllParts.apply(this, arguments);
	this._infoTextSprite = new MK_TextSprite();
	this._windowContentsSprite.addChildAt(this._infoTextSprite, 0);
};

var _MK_Window_Message_createContents   = Window_Message.prototype.createContents;
Window_Message.prototype.createContents = function() {
	_MK_Window_Message_createContents.apply(this, arguments);

    this.contents = new MK_TextBitmap(this.contentsWidth(), this.contentsHeight());
	this.contents.setTextSprite(this._infoTextSprite);
	this.contents.textModeOn();
    this.resetFontSettings();
};


var _MK_Window_Message_startMessage   = Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
	this._infoTextSprite.init();

	this._infoTextSprite.setMsgWindow(this);

	_MK_Window_Message_startMessage.apply(this, arguments);
};


var _MK_Window_Message_processEscapeCharacter   = Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
	switch (code) {

	case 'TEXTANIM': // create text anim
		var param = this.obtainEscapeParam(textState);
		this._infoTextSprite.addTextAnimByCode(param || 0);
		break;

	case 'TAPLAY': // text anim play
		var param = this.obtainEscapeParam(textState);
		this._infoTextSprite.setFlagPlayOn(param || 0);
		break;
	case 'TAPAUSE': // text anim pause
		var param = this.obtainEscapeParam(textState);
		this._infoTextSprite.setFlagPauseOn(param || 0);
		break;
	case 'TACONT': // text anim continue
		var param = this.obtainEscapeParam(textState);
		this._infoTextSprite.setFlagContinueOn(param || 0);
		break;
	case 'TASTOP': // text anim stop
		var param = this.obtainEscapeParam(textState);
		this._infoTextSprite.setFlagStopOn(param || 0);
		break;

	case 'TAADDON': // text anim add(allow add) on
		var param = this.obtainEscapeParam(textState);
		this._infoTextSprite.setFlagAllowAddOn(param || 0);
		break;
	case 'TAADDOFF': // text anim add(allow add) off
		var param = this.obtainEscapeParam(textState);
		this._infoTextSprite.setFlagAllowAddOff(param || 0);
		break;

	case 'TAACTON': // text anim active(enabled) on
		var param = this.obtainEscapeParam(textState);
		this._infoTextSprite.setFlagEnabledOn(param || 0);
		break;
	case 'TAACTOFF': // text anim active(enabled) off
		var param = this.obtainEscapeParam(textState);
		this._infoTextSprite.setFlagEnabledOff(param || 0);
		break;

	case 'MVX': // moveY / offsetX
		var param = this.obtainEscapeParam(textState);
		break;

	case 'MVY': // moveY / offsetY
		var param = this.obtainEscapeParam(textState);
		break;

	default:
		_MK_Window_Message_processEscapeCharacter.apply(this, arguments);
		break;
	}

	// TODO : 全部动画效果复原
};



})();




