// ================================================================
// MKP_CorrectGameTime.js
// 修正游戏时间
// ================================================================
//  author : Mikan (MikanHako)
//  plugin : MKP_CorrectGameTime.js 修正游戏时间
// version : v0.2.0 2021/08/13 增加MZ版本
// ----------------------------------------------------------------
// [Twitter] https://twitter.com/_MikanHako/
// -[GitHub] https://github.com/MikanHako1024/
// ---[Blog] Coming soon
// -----[QQ] 312859582
// ================================================================
// MIT License
// Copyright (C) 2021 Mikan(MikanHako)
// http://opensource.org/licenses/mit-license.php
// ================================================================




/*:
 * @plugindesc 修正游戏时间 <MKP_CorrectGameTime>
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.2.0 2021/08/13 增加MZ版本
 *   v0.1.1 2021/08/12 修复读档时游戏时间缺省时显示问题
 *   v0.1.0 2021/08/12 完成基本功能
 *   v0.0.0 2021/08/12 项目计划中
 * 
 * 
 * 
 * 
 * @help
 * 
 * 修正游戏时间 <MKP_CorrectGameTime>
 * 
 * 
 * ## 简要说明
 * 
 * 在显示器刷新率超过60Hz时，游戏时间会表现得不正常  
 * 本插件将修正这一问题  
 * 
 * 基本原理为：
 * 用实际经过时间作为游戏时间，而不是用渲染次数计算游戏时间  
 * 所以暂停中的时间可能也会算入 (这点在MZ中表得正常)  
 * 
 * MV / MZ 均适用  
 * 
 * 
 * ## 使用方法
 * 
 * 导入本插件即可
 * 
 * 
 * ## 后续任务
 * 
 * - [x] MZ版本
 * - [ ] 测试时间是否正确的工具/脚本
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
 * Copyright (C) 2021 Mikan(MikanHako)  
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




(function(isMV, isMZ) {


// --------------------------------
// Graphics.realGameTime

Graphics.realGameTime = 0;

const _MK_DataManager_setupNewGame = DataManager.setupNewGame;
DataManager.setupNewGame = function() {
	_MK_DataManager_setupNewGame.apply(this, arguments);
	Graphics.realGameTime = 0;
};

Graphics.needAccumulateRealGameTime = function() {
	return true;
};
Graphics.realGameTimeFly = function(deltaTime) {
	if (this.needAccumulateRealGameTime()) {
		this.realGameTime += deltaTime;
	}
};


// --------------------------------
// Game_System

const _MK_Game_System_onBeforeSave = Game_System.prototype.onBeforeSave;
Game_System.prototype.onBeforeSave = function() {
	_MK_Game_System_onBeforeSave.apply(this, arguments);
	this._realGameTimeOnSave = Graphics.realGameTime;
};

const _MK_Game_System_onAfterLoad = Game_System.prototype.onAfterLoad;
Game_System.prototype.onAfterLoad = function() {
	_MK_Game_System_onAfterLoad.apply(this, arguments);
	Graphics.realGameTime = this._realGameTimeOnSave || (Graphics.frameCount / 60 * 1000);
};

const _MK_Game_System_playtime = Game_System.prototype.playtime;
Game_System.prototype.playtime = function() {
	return Math.floor(Graphics.realGameTime / 1000);
};


// --------------------------------
// update

if (isMV) {

	SceneManager._currentRealGameTime = Date.now();

	SceneManager.refreshRealGameTime = function() {
		var nowTime = Date.now();
		var elapsed = nowTime - this._currentRealGameTime;
		this._currentRealGameTime = nowTime;

		Graphics.realGameTimeFly(elapsed);
	};

	const _MK_SceneManager_tickEnd = SceneManager.tickEnd;
	SceneManager.tickEnd = function() {
		this.refreshRealGameTime();
		_MK_SceneManager_tickEnd.apply(this, arguments);
	};

}
else if (isMZ) {

	const _MK_SceneManager_update = SceneManager.update;
	SceneManager.update = function(deltaTime) {
		_MK_SceneManager_update.apply(this, arguments);

		Graphics.realGameTimeFly(deltaTime * 1000);
	};

}

})(
	Utils.RPGMAKER_NAME == 'MV', 
	Utils.RPGMAKER_NAME == 'MZ'
);


/*
console.log(
	`现实 : ${new Date().toLocaleString()} | 游戏 : ${$gameSystem.playtimeText()}`);
setTimeout(
	() => console.log(
		`现实 : ${new Date().toLocaleString()} | 游戏 : ${$gameSystem.playtimeText()}`), 
	1 * 60 * 1000);
*/



