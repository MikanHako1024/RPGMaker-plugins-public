// ================================================================
// MKP_MoreMsgSymbol.js
// 更多控制字符
// ================================================================
//  author : Mikan(MikanHako)
//  plugin : MKP_MoreMsgSymbol.js 更多控制字符
// version : v0.0.2 2020/11/11 增加任意帧数等待功能
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
 * @plugindesc 更多控制字符 <MKP_MoreMsgSymbol>
 * @author Mikan(MikanHako)
 * @version 
 *   v0.0.3 2021/08/12 更新插件说明及规约
 *   v0.0.2 2020/11/11 增加任意帧数等待功能
 *   v0.0.1 2020/11/09 最初的demo
 *     从MK_AnimatedMessage中分离出的独立的功能
 * 
 * 
 * 
 * 
 * @help
 * 
 * ## 简要说明
 * 
 * 本插件用于在消息窗口中增加额外的操作  
 * 
 * 在编辑消息文本时，可以使用类似 `\ABC` 或 `\ABC[123]` 的【控制字符】。  
 * 【控制字符】 可以用来 执行操作 或 显示特殊内容。  
 * 显示文本时，文字将会顺序显示，当到达控制字符时，将会执行对应操作或显示对应内容。  
 * 
 * 编辑【显示文本】时，把鼠标放在文本编辑框中等待数秒，可以看到RM自带的控制字符的官方描述。  
 * 
 * 插件新增的控制字符，详见【插件新增的控制字符】。  
 * 
 * 
 * ## 使用方法
 * 
 * 在【显示文本】中加入控制字符，以使用相应功能  
 * 
 * 
 * ## MV自带的控制字符
 * 
 * | description  | symbol   | param    |
 * | :----------  | :-----   | :------  |
 * | 改变文字颜色 | `\C[..]` | 颜色索引 |
 * | 显示图标     | `\I[..]` | 图标索引 |
 * | 增大一号字体 | `\{`     | ×        |
 * | 缩小一号字体 | `\}`     | ×        |
 * | 打开金钱窗口 | `\$`     | ×        |
 * | 等待15帧     | `\.`     | ×        |
 * | 等待60帧     | `\|`     | ×        |
 * | 开始等待     | `\!`     | ×        |
 * | 快速显示     | `\>`     | ×        |
 * | 结束快速显示 | `\<`     | ×        |
 * | 跳过等待     | `\^`     | ×        |
 * 
 * 
 * ## 插件新增的控制字符
 * 
 * | description | symbol       | param    |
 * | :---------- | :---------   | :------  |
 * | 控制箭头    | `\PSIGN[..]` | 0 或 1   |
 * | 等待        | `\WAIT[..]`  | 等待帧数 |
 * 
 * #### 控制箭头
 * (箭头指消息框中闪烁的箭头)  
 * 当顺序显示文字到达该控制字符时，执行操作  
 * 可以让箭头隐藏或者显示，显示和隐藏都只在这次显示文本有效，
 * 下一次显示文本时，将会箭头将会恢复显示  
 * 
 * * `\PSIGN[..]`
 *   * 隐藏箭头 : `\PSIGN[0]`
 *   * 显示箭头 : `\PSIGN[1]`
 * + 参数
 *   - 仅可以是 0 或 1
 *   - 0 : 隐藏箭头
 *   - 1 : 显示箭头
 * 
 * #### \WAIT[..]
 * 当顺序显示文字到达该控制字符时，执行操作  
 * 等待指定帧数后再显示之后的文字  
 * 
 * * `\WAIT[..]`
 *   * 等待8帧 : `\WAIT[8]`
 * + 参数
 *   - 等待的帧数
 *   - 数值，正整数，单位 : 帧
 * 
 * 
 * ## 其他说明
 * 
 * 在 【物品】-【说明】、【角色】-【简介】 等可以编辑文字的地方，也可以使用部分控制字符  
 * 详细情况待补充  
 * 
 * 
 * ## 后续任务
 * 
 * - [ ] 扩展控制字符的参数的格式，使得不再只能用数值，还可以用字母等
 * - [ ] 支持用脚本进行简单的逻辑控制等，可以以多语言为例
 * - [ ] 支持任意脚本
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




//-----------------------------------------------------------------------------
// 显示隐藏消息窗口的暂停箭头

// PSIGN[0], PSIGN[1]

(function () {

var _MK_Window_Message_startMessage   = Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
	this._hidePauseSign = false;
	_MK_Window_Message_startMessage.apply(this, arguments);
};

var _MK_Window_Message__updatePauseSign   = Window_Message.prototype._updatePauseSign;
Window_Message.prototype._updatePauseSign = function() {
	_MK_Window_Message__updatePauseSign.apply(this, arguments);
	if (this._hidePauseSign) {
		this._windowPauseSignSprite.visible = false;
	}
};

})();




//-----------------------------------------------------------------------------
// 修改 Window_Message

(function () {

var _MK_Window_Message_processEscapeCharacter   = Window_Message.prototype.processEscapeCharacter;
Window_Message.prototype.processEscapeCharacter = function(code, textState) {
	switch (code) {

	// 消息中的obtainEscapeCode获取到的字母是大写字母，且是纯字母

	case 'PSIGN': // pauseSign
		var param = this.obtainEscapeParam(textState);
		if (!!param) this._hidePauseSign = false;
		else this._hidePauseSign = true;
		break;

	case 'WAIT': // wait
		var param = this.obtainEscapeParam(textState);
		this.startWait(param || 0);
		break;

	default:
		_MK_Window_Message_processEscapeCharacter.apply(this, arguments);
		break;
	}
};

})();



