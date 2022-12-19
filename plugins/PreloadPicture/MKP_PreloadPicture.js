/*!
 * MKP_PreloadPicture - v1.1.3
 * Updated : 2022-11-04T21:42:00+0800
 * 
 * https://github.com/MikanHako1024/RPGMaker-plugins-public
 * Copyright (C) 2022 Mikan(MikanHako)
 * 
 * Released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */


/*:
 * ================================================================
 * [Twitter] https://twitter.com/_MikanHako/
 * -[GitHub] https://github.com/MikanHako1024/
 * ---[Blog] Coming soon
 * -----[QQ] 312859582
 * ================================================================
 * 
 * @plugindesc 图片预加载 <MKP_PreloadPicture> v1.1.3
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v1.1.3 (2022-11-04T21:42:00+0800)
 *     保留图片缓存不被自动清除，离开地图自动清除该地图的图片缓存
 *   v1.1.2 (2022-11-04T18:16:00+0800)
 *     更新插件说明样式和插件规约
 *     修正加载时机 : 在场景 create 时加载图片 并且等待 ImageManager.isReady
 *   v1.1.1 (2020-07-30T00:00:00+0800)
 *     [已回退]
 *     尝试修复加载量过多的问题(每次设置事件页时进行加载)
 *   v1.1.0 (2020-07-19T00:00:00+0800) 
 *     添加了对人物行走图的加载
 *   v1.0.2 (2020-04-28T00:00:00+0800) 
 *     修复了一些问题
 *     修复了预加载无事件页的事件时报错的问题
 *     修复了不预加载非当前事件页图片的问题
 *   v1.0.1 (2020-04-27T00:00:00+0800) 
 *     修复了读档报错问题
 *   v1.0.0 (2020-04-27T00:00:00+0800) 
 *     完成基本功能
 * 
 * 
 * 
 * 
 * @help
 * 
 * 图片预加载 <MKP_PreloadPicture> v1.1.3
 * Updated : 2022-11-04T21:42:00+0800
 * 
 * 
 * ## 简要说明
 * 
 * 自动预加载图片  
 * 
 * 
 * ## 使用方法
 * 
 * 事件备注中添加 <preload> 可以预加载事件中的显示图片和行走图  
 * 
 * 可以直接为控制逻辑的事件备注  
 * 也可以额外用一个事件，配置所有可能出现的图片  
 * 
 * 
 * ## 版本支持
 * 
 * 开发环境 : RPG Maker MV v1.6.2
 * + MV : 推荐
 * + MZ : 不支持 (不需要)
 * 
 * 
 * ## 事件标签
 * 
 * | description | note        |
 * | :---------- | :-------    |
 * | 预加载图片   | `<preload>` |
 * 
 * #### 预加载图片
 * 进入地图场景前，将自动加载标记了该标签的事件中的各种图片  
 * + 会预加载事件中的【显示图片】项的图片  
 * + 会预加载事件中的【更改角色图像】项的行走图  
 * + 会预加载事件中的【设置移动路线】-【图像】项的行走图  
 * 
 * * `<preload>`
 * + preload
 *   - 主标签
 *   - 固定写法，区分大小写
 * 
 * 
 * ## 后续任务
 * 
 * - [ ] 显示 Loading
 * - [x] 对人物行走图加载
 * - [ ] 用Game_Interpreter的执行脚本项进行加载，并设置image等待
 * - [ ] ？第一次使用【显示图片】显示大图片时会卡顿一下 (?v1.1.1)
 * - [ ] 移植 MZ 的图片缓存机制，切换场景时移除非 system 的图片
 * 
 * 
 * ## 联系方式
 * [Twitter] https://twitter.com/_MikanHako/  
 * -[GitHub] https://github.com/MikanHako1024/  
 * ---[Blog] Coming soon  
 * -----[QQ] 312859582  
 * 
 * 如需在鸣谢名单中显示插件作者名，可以显示此ID :  
 * Mikan(MikanHako)  
 * 
 * 
 * ## 使用规约
 * MIT License  
 * Copyright (C) 2022 Mikan(MikanHako)  
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
 */




"use strict";

var MK_PluginData = MK_PluginData || {};

(function() {
	// core
	const pluginData = {
		MikanPluginDataCoreUpdatedTime : '2022-09-22T20:00:00+0800', 
		pluginName : 'MKP_PreloadPicture', 
		pluginVersion : 'v1.1.3', 
		pluginUpdatedTime : '2022-11-04T21:42:00+0800', 

		support : {
			supportForMV : true, 
			notSupportForMV : false, 
			engineNameMV : 'MV', 
			engineVersionMV : '1.6.2', 

			supportForMZ : false, 
			notSupportForMZ : false, 
			engineNameMZ : 'MZ', 
			engineVersionMZ : '1.5.0', 
		}, 

		paramParser : {
			numberParser : function(str, defVal) {
				if (str === '') return defVal;
				if (typeof(str) !== 'string' && typeof(str) !== 'number') return defVal;
				var val = Number(str);
				return !Number.isNaN(val) ? val : defVal;
			}, 
			stringParser : function(str, defVal) {
				str = typeof(str) == 'string' ? String(str) : defVal;
				return str;
			}, 
			booleanParser : function(str, defVal) {
				if (str === 'true') return true;
				else if (str === 'false') return false;
				else return !!defVal;
			}, 
			structParser : function(str) {
				var data = null;
				try {
					data = JSON.parse(str);
				}
				catch (e) {
					console.warn(`error json "${str}".`);
					data = {};
				}
				return data;
			}, 
			listParser : function(parser, str, ...args) {
				var data = null;
				try {
					data = JSON.parse(str || '[]');
				}
				catch (e) {
					console.warn(`error json "${str}".`);
					data = [];
				}
				data = data.map(each => parser(each, ...args));
				return data;
			}, 
		}, 
		paramSource : null, 
		param : {}, 
		class : {}, 
		datas : {}, 

		getPluginParam : function(pluginName) {
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
		}, 
		fetchMyPluginParam : function() {
			this.paramSource = this.getPluginParam(this.pluginName);
			return this.paramSource;
		}, 

		checkRpgmakerEngine : function(name, version) {
			return !!Utils
				 && ((name || Utils.RPGMAKER_NAME) === Utils.RPGMAKER_NAME)
				 && ((version || Utils.RPGMAKER_VERSION) === Utils.RPGMAKER_VERSION);
		}, 
		calRpgmakerEngine : function() {
			const EngineSupport = this.support;
			const PLUGIN_NAME = this.pluginName;

			const keyNone = '';
			const keyMV = 'MV';
			const keyMZ = 'MZ';

			if (!Utils) {
				console.error(`Load plugin "${PLUGIN_NAME}" failed, not found "Utils".`);
				return keyNone;
			}
			else if (this.checkRpgmakerEngine(keyMV, null)) {
				if (EngineSupport.notSupportForMV) {
					console.error(`Plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
					return keyNone;
				}
				else if (!EngineSupport.supportForMV) {
					console.warn(`Maybe plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
					return keyMV;
				}
				else {
					return keyMV;
				}
			}
			else if (this.checkRpgmakerEngine(keyMZ, null)) {
				if (EngineSupport.notSupportForMZ) {
					console.error(`Plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
					return keyNone;
				}
				else if (!EngineSupport.supportForMZ) {
					console.warn(`Maybe plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
					return keyMZ;
				}
				else {
					return keyMZ;
				}
			}
			else {
				console.error(`Plugin "${PLUGIN_NAME}" don't support for unknown engine "RPG Maker ${Utils.RPGMAKER_NAME}".`);
				return keyNone;
			}
		}, 

		currentRpgmakerEngine : null, 
		getRpgmakerEngine : function() {
			if (this.currentRpgmakerEngine === null) {
				try {
					this.currentRpgmakerEngine = this.calRpgmakerEngine();
				}
				catch (e) {
					console.warn(`Calculate rpgmaker engine failed.\n${e}`);
					this.currentRpgmakerEngine = '';
				}
			}
			return this.currentRpgmakerEngine;
		}, 
	};
	MK_PluginData[pluginData.pluginName] = pluginData;
})();




(function() {
	// logic

	const PLUGIN_NAME = 'MKP_PreloadPicture';

	const CurrentEngine = (function() {
		const pluginData = MK_PluginData[PLUGIN_NAME];
		return pluginData.getRpgmakerEngine();
	})();

	if (CurrentEngine === 'MV') {

		(function() {

			const _MK_Scene_Map_initialize = Scene_Map.prototype.initialize;
			Scene_Map.prototype.initialize = function() {
				_MK_Scene_Map_initialize.apply(this, arguments);
				this._picturePreloaded = false;
			};

			const _MK_Scene_Map_isReady = Scene_Map.prototype.isReady;
			Scene_Map.prototype.isReady = function() {
				if (!this._picturePreloaded && DataManager.isMapLoaded()) {
					this.preloadPicture();
					this.preloadCharacter();
					this._picturePreloaded = true;
				}
				return this._picturePreloaded && _MK_Scene_Map_isReady.apply(this, arguments);
			};


			Scene_Map.prototype.preloadPicture = function() {
				var pictureDict = {};
				$dataMap.events.filter(function(event) {
					return !!event && event.meta['preload'];
				}).forEach(function(event) {
					event.pages.forEach(function(page) {

						page.list.forEach(function(line) {
							if (line.code == 231) { // 显示图片
								pictureDict[line.parameters[1]] = true;
							}
						});
					});
				});
				for (var name in pictureDict) {
					ImageManager.loadPicture(name);
					ImageManager.reservePicture(name, 0, null);
				}
			};

			Scene_Map.prototype.preloadCharacter = function() {
				var characterDict = {};
				
				$dataMap.events.filter(function(event) {
					return !!event && event.meta['preload'];
				}).forEach(function(event) {
					event.pages.forEach(function(page) {

						page.list.forEach(function(line) {
							if (line.code == 322) { // 更改角色图像
								characterDict[line.parameters[1]] = true;
							}
							else if (line.code == 205) { // 设置移动路线
								line.parameters[1].list.forEach(function(moveRoute) {
									if (moveRoute.code == 41) { // 图像
										characterDict[moveRoute.parameters[0]] = true;
									}
								});
							}
						});
					});
				});
				for (var name in characterDict) {
					ImageManager.loadCharacter(name);
					ImageManager.reserveCharacter(name, 0, null);
				}
			};
		})();
	}
})();



