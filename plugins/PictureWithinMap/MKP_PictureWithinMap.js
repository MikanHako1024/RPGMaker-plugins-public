// ================================================================
// MKP_PictureWithinMap.js
// 图片置于地图内
// ================================================================
//  author : Mikan(MikanHako)
//  plugin : MKP_PictureWithinMap.js 图片置于地图内
// version : v0.1.0 2021/08/15 完成基本的
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
 * @plugindesc 图片置于地图内 <MKP_PictureWithinMap>
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.1.0 2021/08/15 完成基本的
 *   v0.0.0 2021/08/15 项目计划中
 * 
 * 
 * 
 * 
 * @help
 * 
 * 图片置于地图内 <MKP_PictureWithinMap>
 * 
 * 
 * ## 简要说明
 * 
 * 本插件调整一些图片的图层，使得能更灵活地设置一些视觉效果  
 * 
 * 典型例子为 :   
 * 使用 Tsukimi 的 [FilterController插件](https://github.com/cji3bp62000/hello-world/blob/master/RMMVplugins/FIlterController/FilterController.js)  
 * 添加crt效果，应用于target=21(tiles+characters+parallax)  
 * 可以使1-50的图片受到crt效果的影响，
 * 而51-100的图片将置于crt效果的上层，不受其影响  
 * 
 * 
 * ## 使用方法
 * 
 * 启用本插件后，命令【显示图片】 使用编号1-50，以显示下层图片，
 * 使用编号51-100，以显示上层图片  
 * 
 * 
 * ## 脚本说明
 * 
 * 下层图片将置于 scene._spriteset._baseSprite 的子精灵 内  
 * 上层图片仍然处于 scene._spriteset._baseSprite 后  
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
 * 
 * 
 * 
 * @param topPictureMinId
 * @text 上层图片第一个编号
 * @desc 
 * 下层图片将使用编号 1 ~ (n-1)
 * 上层图片将使用编号 n ~ 100
 * @type number
 * @min 1
 * @max 101
 * @default 51
 * 
 * @param ---- endline ----
 * 
 */




var MK_Plugins = MK_Plugins || {};
MK_Plugins.paramGet = MK_Plugins.paramGet || {};
MK_Plugins.param = MK_Plugins.param || {};
MK_Plugins.class = MK_Plugins.class || {};
MK_Plugins.datas = MK_Plugins.datas || {};

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

	var pluginName = 'MKP_PictureWithinMap';
	MK_Plugins.paramGet[pluginName] = MK_Plugins.getPluginParam(pluginName);
	MK_Plugins.param[pluginName] = {};

	var paramGet = MK_Plugins.paramGet[pluginName];
	var param = MK_Plugins.param[pluginName];

	param['topPictureMinId'] = Number(paramGet['topPictureMinId']) || 51;
	
})();




(function() {

const pluginName = 'MKP_PictureWithinMap';
const TOP_PICTURE_MIN_ID = MK_Plugins.param[pluginName]['topPictureMinId'];


// --------------------------------
// picture number

//const _MK_Game_Screen_maxPictures = Game_Screen.prototype.maxPictures;

// below picture number
//Game_Screen.prototype.maxPictures = function() {
//	return TOP_PICTURE_MIN_ID - 1;
//};
Game_Screen.prototype.maxBelowPictureId = function() {
	return TOP_PICTURE_MIN_ID - 1;
};

// top picture number
Game_Screen.prototype.minTopPictureId = function() {
	return TOP_PICTURE_MIN_ID;
};
Game_Screen.prototype.maxTopPictureId = function() {
	return this.maxPictures();
};


// --------------------------------
// create sprites

const _MK_Spriteset_Map_createPictures = Spriteset_Map.prototype.createPictures;

// create top pictures
Spriteset_Map.prototype.createPictures = function() {
	var width = Graphics.boxWidth;
	var height = Graphics.boxHeight;
	var x = (Graphics.width - width) / 2;
	var y = (Graphics.height - height) / 2;
	this._pictureContainer = new Sprite();
	this._pictureContainer.setFrame(x, y, width, height);
	for (var i = $gameScreen.minTopPictureId(); i <= $gameScreen.maxTopPictureId(); i++) {
		this._pictureContainer.addChild(new Sprite_Picture(i));
	}
	this.addChild(this._pictureContainer);
};

const _MK_Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function() {
	_MK_Spriteset_Map_createLowerLayer.apply(this, arguments);
	this.createBelowPictures();
};

// create below pictures
Spriteset_Map.prototype.createBelowPictures = function() {
	var width = Graphics.boxWidth;
	var height = Graphics.boxHeight;
	var x = (Graphics.width - width) / 2;
	var y = (Graphics.height - height) / 2;
	this._lowerLayerPictureContainer = new Sprite();
	this._lowerLayerPictureContainer.setFrame(x, y, width, height);
	for (var i = 1; i <= $gameScreen.maxBelowPictureId(); i++) {
		this._lowerLayerPictureContainer.addChild(new Sprite_Picture(i));
	}
	this._baseSprite.addChild(this._lowerLayerPictureContainer);
};

})();



