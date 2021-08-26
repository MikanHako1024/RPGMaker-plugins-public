// ================================================================
// MKP_LightShadowSprite.js
// 光影Sprite
// ================================================================
//  author : Mikan(MikanHako)
//  plugin : MKP_LightShadowSprite.js 光影Sprite
// version : v0.0.2 2021/08/26 完成基础功能
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
 * @plugindesc 光影Sprite <MKP_LightShadowSprite>
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.0.2 2021/08/26 完成基础功能
 *   v0.0.1 2021/08/26 完成可行性尝试
 *   v0.0.0 2021/08/24 项目计划中
 * 
 * 
 * 
 * 
 * @help
 * 
 * 光影Sprite <MKP_LightShadowSprite>
 * 
 * 
 * ## 简要说明
 * 
 * 本插件提供一种特殊的`Sprite`派生类--光影Sprite，
 * 可以将`sprite.children`渲染到`sprite.texture`上，
 * 之后再正常地渲染到场景上。  
 * 
 * 主要目的是 :   
 * 以正常的方式将一些sprite显示，
 * 再将这些sprite以其他的`blendMode`显示。  
 * (直接修改`sprite.blendMode`，不能作用到`sprite.children`上)  
 * 
 * 
 * ## 使用方法
 * 
 * 本插件主要提供一种思路，不直接提供插件指令的使用方法  
 * 使用脚本的方法，详见 【脚本说明】
 * 
 * 
 * ## 脚本说明
 * 
 * #### 创建光影Sprite
 * `new MK_LightShadowSprite(width, height)`
 * 
 * #### 添加和移除特殊渲染的子sprite
 * | description    | script                                        |
 * | :----------    | :-------------------------------              |
 * | addChild       | `lsSprite.addLightChild(sprite)`              |
 * | addChildAt     | `lsSprite.addLightChildAt(sprite, index)`     |
 * | removeChild    | `lsSprite.removeLightChild(sprite)`           |
 * | removeChildAt  | `lsSprite.removeLightChildAt(sprite, index)`  |
 * | removeChildren | `lsSprite.removeLightChildren()`              |
 * | children       | `lsSprite.lightChildren`                      |
 * 
 * 
 * ## 其他说明
 * 
 * 请勿为光影Sprite对象添加bitmap或更改texture，否则可能将不再显示特殊渲染的图像  
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




// ----------------------------------------------------------------
// MK_LightShadowSprite

function MK_LightShadowSprite() {
	this.initialize.apply(this, arguments);
};
MK_LightShadowSprite.prototype = Object.create(Sprite.prototype);
MK_LightShadowSprite.prototype.constructor = MK_LightShadowSprite;

// --------------------------------
// 初始化

MK_LightShadowSprite.prototype.initialize = function(width, height) {
	width = width > 0 ? width : Graphics.width;
	height = height > 0 ? height : Graphics.height;

	Sprite.prototype.initialize.call(this);

	this.createRenderTexture(width, height);
	this.createContainerSprite();
	this.createBlackSprite(width, height);
	
	this._rendered = true;

	this.blendMode = 2;
};

MK_LightShadowSprite.prototype.createRenderTexture = function(width, height) {
	this.texture = PIXI.RenderTexture.create(width, height);
};

MK_LightShadowSprite.prototype.createContainerSprite = function() {
	this._container = new Sprite();
	this._container.visible = false;
	this.addChild(this._container);
};

MK_LightShadowSprite.prototype.createBlackSprite = function(width, height) {
	var bitmap = new Bitmap(width, height);
	bitmap.fillAll('#000000');
	this._blackSprite = new Sprite(bitmap);
	this.addLightChild(this._blackSprite);
};


// --------------------------------
// light child

MK_LightShadowSprite.prototype.addLightChild = function(child) {
	return this._container.addChild(...arguments);
};
MK_LightShadowSprite.prototype.addLightChildAt = function(child, index) {
	return this._container.addChildAt(...arguments);
};
MK_LightShadowSprite.prototype.removeLightChild = function(child) {
	return this._container.removeChild(...arguments);
};
MK_LightShadowSprite.prototype.removeLightChildAt = function(index) {
	return this._container.removeChildAt(...arguments);
};
MK_LightShadowSprite.prototype.removeLightChildren = function() {
	return this._container.removeChildren(...arguments);
};

Object.defineProperty(MK_LightShadowSprite.prototype, 'lightChildren', {
	get : function() {
		return this._container.children;
	}
});


// --------------------------------
// update

MK_LightShadowSprite.prototype.update = function() {
	Sprite.prototype.update.apply(this, arguments);
	this.updateRenderTexture();
};

MK_LightShadowSprite.prototype.updateRenderTexture = function() {
	if (this._rendered) {
		if (this.visible) {
			var renderer = Graphics._renderer;
			if (this._container) {
				this._container.visible = true;
				renderer.render(this._container, this.texture);
				this._container.visible = false;
				//if (renderer.gl && renderer.gl.flush) {
				//	renderer.gl.flush();
				//}
			}
		}
		this._rendered = false;
	}
};


// --------------------------------
// render

MK_LightShadowSprite.prototype._renderCanvas = function(renderer) {
	Sprite.prototype._renderCanvas.apply(this, arguments);
	this._rendered = true;
};
MK_LightShadowSprite.prototype._renderWebGL = function(renderer) {
	Sprite.prototype._renderWebGL.apply(this, arguments);
	this._rendered = true;
};



if (MK_Plugins.class) {
	MK_Plugins.class['MK_LightShadowSprite'] = MK_LightShadowSprite;
}



