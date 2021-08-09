// ================================================================
// MKP_ParallaxPicture.js
// 视差图片
// ================================================================
//  author : Mikan (MikanHako)
//  plugin : MKP_ParallaxPicture.js 视差图片
// version : v1.0.3 2021/08/08 更新插件说明及规约
// ----------------------------------------------------------------
// [Twitter] https://twitter.com/_MikanHako/
// -[GitHub] https://github.com/MikanHako1024/
// ---[Blog] NONE
// -----[QQ] 312859582
// ================================================================
// MIT License
// Copyright (C) 2020-2021 Mikan(MikanHako)
// http://opensource.org/licenses/mit-license.php
// ================================================================




/*:
 * @plugindesc 视差图片 <MKP_ParallaxPicture>
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v1.0.3 2021/08/08 更新插件说明及规约
 *   v1.0.2 2020/06/14 回退到v1.0.0
 *   v1.0.1 2020/06/14 添加跟随玩家模式
 *   v1.0.0 2020/06/14 完成基本功能
 *   v0.0.0 2020/06/12 项目计划中
 * 
 * 
 * 
 * 
 * @help
 * 
 * ## 简要说明
 * 
 * 需求是能在地图滚动的时候，让前景、背景以不同的速度移动，
 * 以达到简单的伪3D的视觉效果。  
 * 
 * 原本打算控制【显示图片】来达到目的，
 * 但是为了能方便地控制图片层级，特别是与玩家、事件的层级，
 * 于是改用控制事件位置实现。  
 * 
 * 不自带 调整事件图像位置插件 的功能  
 * 
 * 通过事件标签配置视差事件  
 * 不提供修改功能，修改需求可以通过更换事件实现  
 * 
 * 
 * ## 使用方法
 * 
 * 开启本插件后，为事件添加标签设置其为视差事件  
 * 详见 【标签设置】
 * 
 * 
 * ## 标签设置
 * 
 * | description        | note                 |
 * | :----------        | :---                 |
 * | 设置事件为视差事件 | `<Parallax:a,b,c,d>` |
 * | 设置事件为视差事件，自动初始位置 | `<Parallax:a,b,here>` |
 * 
 * #### 设置事件为视差事件
 * 设置该事件为视差事件  
 * 图片将根据角色移动(实际是地图滚动)进行移动  
 * 图片的位置将实时设置为 `[初始位置] + [偏移比率] * 地图滚动`  
 * 
 * * `<Parallax:a,b,c,d>`
 *   * 模拟一个近景图像，横向速度0.5，纵向不移动 : `<Parallax:0.5,0,3,6>`
 *   * 模拟一个远景图像，横向速度1.1，纵向不移动 : `<Parallax:1.1,0,3,6>`
 * + Parallax
 *   - 主标签
 *   - 固定写法，区分大小写
 * + a
 *   - 横向的[偏移比率]
 *   - 数值，详见 [偏移比率]
 * + b
 *   - 纵向的[偏移比率]
 *   - 数值，详见 [偏移比率]
 * + c
 *   - [初始位置]的横坐标
 *   - 数值，详见 [初始位置]
 * + d
 *   - [初始位置]的纵坐标
 *   - 数值，详见 [初始位置]
 * + [偏移比率]
 *   - 视差事件移动速度 相对 地图滚动速度 的比率
 *   - 数值，允许小数和负数
 *   - ..~0 : 相对屏幕反向移动（与地图滚动反向）
 *   - 0    : 相对屏幕反向移动（相对地图静止）
 *   - 0~1  : 相对屏幕反向移动（与地图滚动同向，移动更慢）
 *   - 1    : 相对屏幕静止    （与地图滚动同向，速度相同）
 *   - 1~.. : 相对屏幕同向移动（与地图滚动同向，移动更快）
 * + [初始位置]
 *   - 地图滚动到最左上角(0,0)时，事件的位置(横坐标 或 纵坐标)
 *   - 数值，允许小数和负数，单位 : 图块格子
 * 
 * #### 设置事件为视差事件，自动初始位置
 * 设置该事件为视差事件，并用该事件初始的位置代替c,d配置[初始位置]  
 * 其他同 【设置事件为视差事件】
 * 
 * * `<Parallax:a,b,here>`
 *   * 事件设置在坐标(4,6) : `<Parallax:0.5,0,here>` 同 `<Parallax:0.5,0,4,6>`
 * + Parallax
 *   - 同 【设置事件为视差事件】
 * + a
 *   - 同 【设置事件为视差事件】
 * + b
 *   - 同 【设置事件为视差事件】
 * + here
 *   - 特殊标识
 *   - 固定写法，区分大小写
 * 
 * 
 * ## 后续任务
 * 
 * - [ ] 允许改变[初始位置]，实现移动或模拟自然运动的效果 (？[初始位置]依赖于另一事件的实时位置)
 * - [ ] 循环移动，设置一个循环范围，让事件移动能在范围内循环，以更好地出现在屏幕上
 * 
 * 
 * ## 联系方式
 * [Twitter] https://twitter.com/_MikanHako/  
 * -[GitHub] https://github.com/MikanHako1024/  
 * ---[Blog] NONE  
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




(function() {

	Game_Map.prototype.updateEventParallaxPicture = function() {
	    this.events().forEach(function(event) {
	        event.updateParallaxPicture();
	    });
	};

	var _MK_Game_Map_scrollDown   = Game_Map.prototype.scrollDown;
	Game_Map.prototype.scrollDown = function(distance) {
		_MK_Game_Map_scrollDown.apply(this, arguments);
		this.updateEventParallaxPicture();
	};

	var _MK_Game_Map_scrollLeft   = Game_Map.prototype.scrollLeft;
	Game_Map.prototype.scrollLeft = function(distance) {
		_MK_Game_Map_scrollLeft.apply(this, arguments);
		this.updateEventParallaxPicture();
	};

	var _MK_Game_Map_scrollRight   = Game_Map.prototype.scrollRight;
	Game_Map.prototype.scrollRight = function(distance) {
		_MK_Game_Map_scrollRight.apply(this, arguments);
		this.updateEventParallaxPicture();
	};

	var _MK_Game_Map_scrollUp   = Game_Map.prototype.scrollUp;
	Game_Map.prototype.scrollUp = function(distance) {
		_MK_Game_Map_scrollUp.apply(this, arguments);
		this.updateEventParallaxPicture();
	};


	var _MK_Game_Map_setDisplayPos   = Game_Map.prototype.setDisplayPos;
	Game_Map.prototype.setDisplayPos = function(x, y) {
		_MK_Game_Map_setDisplayPos.apply(this, arguments);
		this.updateEventParallaxPicture();
	};

	Game_Event.prototype.updateParallaxPicture = function() {
		this.initParallaxPictureConfigIfEmpty();
		if (this._parallaxMode) {
			this._x = this._realX = $gameMap.displayX() * this._parallax_xRate + this._parallax_xOffs;
			this._y = this._realY = $gameMap.displayY() * this._parallax_yRate + this._parallax_yOffs;
		}
	};


	Game_Event.prototype.initParallaxPictureConfig = function() {
		var regexp = /<Parallax:(.*?),(.*?),((.*?),(.*?)|here)>/;
		var res = regexp.exec(this.event().note);
		if (!!res) {
			var xRate = Number(res[1]) || 0;
			var yRate = Number(res[2]) || 0;
			if (res[3] === 'here') {
				var xOffs = this.event().x;
				var yOffs = this.event().y;
			}
			else {
				var xOffs = Number(res[4]) || 0;
				var yOffs = Number(res[5]) || 0;
			}

			this._parallaxMode = true;
			this._parallax_xRate = xRate;
			this._parallax_yRate = yRate;
			this._parallax_xOffs = xOffs;
			this._parallax_yOffs = yOffs;
		}
		else {
			this._parallaxMode = false;
		}
	};

	Game_Event.prototype.initParallaxPictureConfigIfEmpty = function() {
		if (typeof this._parallaxMode === 'undefined') {
			this.initParallaxPictureConfig();
		}
	};

})();



