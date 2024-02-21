/*!
 * MKP_TextSprite - v0.2.4.fix1
 * Updated : 2024-02-21T15:07:00+0800
 * 
 * MIT License
 * 
 * Copyright (C) 2019-2024 Mikan(MikanHako)
 * https://github.com/MikanHako1024
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
 * @plugindesc 文本精灵 <MKP_TextSprite> v0.2.4.fix1
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.2.4.fix1 (2024-02-21T15:07:00+0800)
 *     对MZ的支持 补充修改 blt 方法
 *   v0.2.4 (2024-02-19T04:11:00+0800)
 *     更新插件模板
 *     增加对 MZ 的支持
 *     插件说明中 控制字符部分 移动到 MKP_SpriteAnimManager
 *   v0.2.3.branch1 (2021-08-22T00:00:00+0800)
 *     更新插件说明
 *   v0.2.3 (2021-08-21T00:00:00+0800)
 *     增加绘制圆的方法、增加移除文字精灵的方法
 *   v0.2.2 (2021-08-19T00:00:00+0800)
 *     增加绘制图标的字母精灵
 *   v0.2.1 (2021-08-18T00:00:00+0800)
 *     调整字母对象框架、修复部分问题
 *       字母对象记录绘制位置和textState
 *       增加按某一动画code筛选字母对象的方法
 *       绘制时考虑文字外线
 *   v0.2.0-alpha (2021-08-18T00:00:00+0800)
 *     更新框架 : TextSprite解耦
 *   v0.1.2.branch1 (2021-08-17T00:00:00+0800)
 *     清理冗余注释
 *   v0.1.2 (2021-08-17T00:00:00+0800)
 *     更新MKP_SpriteAnimManager的框架 相应地更新插件说明
 *   v0.1.1 (2021-08-16T00:00:00+0800)
 *     更新插件说明及规约
 *   v0.1.0.fix1 (2020-11-14T00:00:00+0800)
 *     修复绘制文字不会同步字体的问题
 *   v0.1.0 (2020-11-11T00:00:00+0800)
 *     完成基本框架和功能的demo
 *       把最初的MK_AnimatedMessage分成了MK_SpriteAnimManager和MK_TextSprite
 *   v0.0.0 (2020-08-20T00:00:00+0800) Init File
 *     项目计划中
 * 
 * @sourcecode 发布版插件可能压缩了代码，如有需要源代码，可以联系插件作者
 * 
 * 
 * 
 * 
 * @target MV MZ
 * 
 * @orderBefore MKP_SpriteAnimationSet
 * @orderBefore MKP_SpriteAnimManager
 * 
 * 
 * @help
 * 
 * 文本精灵 <MKP_TextSprite> v0.2.4.fix1
 * Updated : 2024-02-21T15:07:00+0800
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
 * 本插件只提供前置基础  
 * 
 * 
 * ## 使用方法
 * 
 * 按顺序导入 完成精灵动画功能的三个插件  
 * + MKP_TextSprite
 * + MKP_SpriteAnimationSet
 * + MKP_SpriteAnimManager
 * 
 * 
 * ## 版本支持
 * 
 * 开发环境 : RPG Maker MV v1.6.2 + RPG Maker MZ v1.8.0
 * + MV : 支持
 * + MZ : 支持
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
 * 我的公开插件仓库:  
 * https://github.com/MikanHako1024/RPGMaker-plugins-public  
 * 
 * 如需在鸣谢名单中显示插件作者名，可以显示此ID :  
 * Mikan(MikanHako)  
 * 
 * 
 * ## 使用规约
 * MIT License  
 * Copyright (C) 2019-2024 Mikan(MikanHako)  
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
 * @param ---- startline ----
 * 
 * @param ---- endline ----
 * 
 */


"use strict";

var MK_PluginData = MK_PluginData || {};

(function() {
	const pluginData = {
		MikanPluginDataCoreUpdatedTime: "2024-01-01T013:00:00+0800",
		pluginName: "MKP_TextSprite",
		pluginVersion: "v0.2.4.fix1",
		pluginUpdatedTime: "2024-02-21T15:07:00+0800",
		support: {
			supportForMV: true,
			notSupportForMV: false,
			engineNameMV: "MV",
			engineVersionMV: "1.6.2",
			supportForMZ: true,
			notSupportForMZ: false,
			engineNameMZ: "MZ",
			engineVersionMZ: "1.8.0"
		},
		paramParser: {
			numberParser: function(str, defVal) {
				if (str === "") return defVal;
				if (typeof str !== "string" && typeof str !== "number") return defVal;
				var val = Number(str);
				return !Number.isNaN(val) ? val : defVal;
			},
			stringParser: function(str, defVal) {
				if (typeof str !== "string" && typeof str !== "number") return defVal;
				return String(str);
			},
			booleanParser: function(str, defVal) {
				if (str === "true") return true; else if (str === "false") return false; else return !!defVal;
			},
			structParser: function(str) {
				var data = null;
				try {
					data = JSON.parse(str || "{}");
				} catch (e) {
					console.warn(`Failed to parse json "${str}".`);
					data = null;
				}
				return data;
			},
			listParser: function(parser, str, defVals, ...args) {
				var data = null;
				try {
					data = JSON.parse(str || "[]");
				} catch (e) {
					console.warn(`Failed to parse json "${str}".`);
					data = null;
				}
				if (Array.isArray(data)) {
					data = Array.isArray(defVals) ? data.map((each, i) => parser(each, defVals[i], ...args)) : data.map(each => parser(each, defVals, ...args));
				} else {
					console.warn(`Json data "${str}" is not a array data.`);
					data = null;
				}
				return data;
			}
		},
		paramSource: null,
		param: {},
		class: {},
		datas: {},
		getRealPluginName: function(pluginName) {
			var param = PluginManager._parameters[(pluginName || "").toLowerCase()];
			if (!param) {
				var list = $plugins.filter(function(i) {
					return i.description.contains("<" + pluginName + ">");
				});
				for (var i = 0, l = list.length; i < l; ++i) {
					var realPluginName = list[i].name;
					if (realPluginName !== pluginName) return realPluginName;
				}
				return "";
			} else {
				return pluginName;
			}
		},
		fetchMyRealPluginName: function() {
			if (!this.realPluginName) {
				var realPluginName = this.getRealPluginName(this.pluginName);
				if (!realPluginName) {
					console.warn(`Don't found real plugin name by plugin name "${this.pluginName}".`);
					realPluginName = this.pluginName;
				}
				this.realPluginName = realPluginName;
			}
			return this.realPluginName;
		},
		getPluginParam: function(realPluginName) {
			var param = PluginManager.parameters(realPluginName);
			return param;
		},
		fetchMyPluginParam: function() {
			this.paramSource = this.getPluginParam(this.fetchMyRealPluginName());
			return this.paramSource;
		},
		checkRpgmakerEngine: function(name, version) {
			return !!Utils && (name || Utils.RPGMAKER_NAME) === Utils.RPGMAKER_NAME && (version || Utils.RPGMAKER_VERSION) === Utils.RPGMAKER_VERSION;
		},
		calRpgmakerEngine: function() {
			const EngineSupport = this.support;
			const PLUGIN_NAME = this.pluginName;
			const keyNone = "";
			const keyMV = "MV";
			const keyMZ = "MZ";
			if (!Utils) {
				console.error(`Load plugin "${PLUGIN_NAME}" failed, not found "Utils".`);
				return keyNone;
			} else if (this.checkRpgmakerEngine(keyMV, undefined)) {
				if (EngineSupport.notSupportForMV) {
					console.error(`Plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
					return keyNone;
				} else if (!EngineSupport.supportForMV) {
					console.warn(`Maybe plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
					return keyMV;
				} else {
					return keyMV;
				}
			} else if (this.checkRpgmakerEngine(keyMZ, undefined)) {
				if (EngineSupport.notSupportForMZ) {
					console.error(`Plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
					return keyNone;
				} else if (!EngineSupport.supportForMZ) {
					console.warn(`Maybe plugin "${PLUGIN_NAME}" don't support for "RPG Maker ${Utils.RPGMAKER_NAME}".`);
					return keyMZ;
				} else {
					return keyMZ;
				}
			} else {
				console.error(`Plugin "${PLUGIN_NAME}" don't support for unknown engine "RPG Maker ${Utils.RPGMAKER_NAME}".`);
				return keyNone;
			}
		},
		currentRpgmakerEngine: undefined,
		getRpgmakerEngine: function() {
			if (this.currentRpgmakerEngine === undefined) {
				try {
					this.currentRpgmakerEngine = this.calRpgmakerEngine();
				} catch (e) {
					console.warn(`Calculate rpgmaker engine failed.\n${e}`);
					this.currentRpgmakerEngine = "";
				}
			}
			return this.currentRpgmakerEngine;
		}
	};
	MK_PluginData[pluginData.pluginName] = pluginData;
})();

(function() {
	const PLUGIN_NAME = "MKP_TextSprite";
	const PLUGIN_PARAMS = function() {
		const pluginData = MK_PluginData[PLUGIN_NAME];
		const param = pluginData.param;
		return Object.assign({}, param);
	}();
	const CURRENT_ENGINE = function() {
		const pluginData = MK_PluginData[PLUGIN_NAME];
		return pluginData.getRpgmakerEngine();
	}();
	(function() {
		function MK_TextBitmap() {
			this.initialize.apply(this, arguments);
		}
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
		if (CURRENT_ENGINE === "MV") {
			MK_TextBitmap._bitmapCanvasKey = "__canvas";
			MK_TextBitmap._bitmapContextKey = "__context";
		} else {
			MK_TextBitmap._bitmapCanvasKey = "_canvas";
			MK_TextBitmap._bitmapContextKey = "_context";
		}
		MK_TextBitmap.prototype.drawText = function(text, drawX, drawY, maxWidth, lineHeight, align) {
			if (this.needTextMode()) {
				var textMetrics = this.measureTextWidthWithOutline(text);
				var bitmap = new Bitmap(textMetrics.width + textMetrics.offsetWidth, lineHeight + textMetrics.offsetHeight);
				var sprite = new Sprite(bitmap);
				sprite.x = drawX + textMetrics.offsetX;
				sprite.y = drawY + textMetrics.offsetY;
				this.drawTextTo(bitmap, text, -textMetrics.offsetX, -textMetrics.offsetY, maxWidth, lineHeight, align);
				this._textSprite.addLetterSprite(sprite, text, drawX, drawY, sprite.x, sprite.y);
			} else {
				Bitmap.prototype.drawText.apply(this, arguments);
			}
		};
		MK_TextBitmap.prototype.drawTextTo = function(bitmap, ...args) {
			const canvas = this[MK_TextBitmap._bitmapCanvasKey];
			const context = this[MK_TextBitmap._bitmapContextKey];
			this[MK_TextBitmap._bitmapCanvasKey] = bitmap[MK_TextBitmap._bitmapCanvasKey];
			this[MK_TextBitmap._bitmapContextKey] = bitmap[MK_TextBitmap._bitmapContextKey];
			const textMode = this._textMode;
			this.textModeOff();
			Bitmap.prototype.drawText.call(this, ...args);
			if (textMode) {
				this.textModeOn();
			}
			this[MK_TextBitmap._bitmapCanvasKey] = canvas;
			this[MK_TextBitmap._bitmapContextKey] = context;
		};
		MK_TextBitmap.prototype.blt = function(source, sx, sy, sw, sh, drawX, drawY, dw, dh) {
			if (this.needTextMode()) {
				dw = dw || sw;
				dh = dh || sh;
				var bitmap = new Bitmap(dw, dh);
				var sprite = new Sprite(bitmap);
				sprite.x = drawX;
				sprite.y = drawY;
				this.bltTo(bitmap, source, sx, sy, sw, sh, 0, 0, dw, dh);
				this._textSprite.addLetterSprite(sprite, "", drawX, drawY, sprite.x, sprite.y);
			} else {
				Bitmap.prototype.drawText.apply(this, arguments);
			}
		};
		MK_TextBitmap.prototype.bltTo = function(bitmap, ...args) {
			const canvas = this[MK_TextBitmap._bitmapCanvasKey];
			const context = this[MK_TextBitmap._bitmapContextKey];
			this[MK_TextBitmap._bitmapCanvasKey] = bitmap[MK_TextBitmap._bitmapCanvasKey];
			this[MK_TextBitmap._bitmapContextKey] = bitmap[MK_TextBitmap._bitmapContextKey];
			const textMode = this._textMode;
			this.textModeOff();
			Bitmap.prototype.blt.call(this, ...args);
			if (textMode) {
				this.textModeOn();
			}
			this[MK_TextBitmap._bitmapCanvasKey] = canvas;
			this[MK_TextBitmap._bitmapContextKey] = context;
		};
		MK_TextBitmap.prototype.drawCircle = function(drawX, drawY, radius, color) {
			if (this.needTextMode()) {
				var bitmap = new Bitmap(radius * 2, radius * 2);
				var sprite = new Sprite(bitmap);
				sprite.x = drawX - radius;
				sprite.y = drawY - radius;
				bitmap.drawCircle(radius, radius, radius, color);
				this._textSprite.addLetterSprite(sprite, "", drawX, drawY, sprite.x, sprite.y);
			} else {
				Bitmap.prototype.drawCircle.apply(this, arguments);
			}
		};
		MK_TextBitmap.prototype.clearTextSprite = function() {
			this._textSprite.clearLetters();
		};
		MK_TextBitmap.prototype.clear = function() {
			Bitmap.prototype.clear.apply(this, arguments);
			this.clearTextSprite();
		};
		MK_TextBitmap.prototype.measureTextWidthWithOutline = function(text) {
			var lineWidth = this.outlineWidth;
			var shadowBlur = this._context.shadowBlur;
			var width = this.measureTextWidth(text);
			var padding = lineWidth + shadowBlur;
			return {
				offsetX: -padding / 2,
				offsetY: -padding / 2,
				offsetWidth: padding,
				offsetHeight: padding,
				width: width
			};
		};
		window.MK_TextBitmap = MK_TextBitmap;
		return MK_TextBitmap;
	})();
	(function() {
		function MK_TextSprite() {
			this.initialize.apply(this, arguments);
		}
		MK_TextSprite.prototype = Object.create(Sprite.prototype);
		MK_TextSprite.prototype.constructor = MK_TextSprite;
		MK_TextSprite.prototype.initialize = function() {
			Sprite.prototype.initialize.apply(this, arguments);
			this.clearAll();
		};
		MK_TextSprite.prototype.clearAll = function() {
			this.initLetterList();
			this.clearAllFlag();
			this._msgWindow = null;
		};
		MK_TextSprite.prototype.initLetterList = function() {
			this._letters = [];
		};
		MK_TextSprite.prototype.clearLetters = function() {
			this._letters = [];
			this.removeChildren();
		};
		MK_TextSprite.prototype.onClearLetters = function() {};
		MK_TextSprite.prototype.makeNewLetterData = function(sprite, text, drawX, drawY, sx, sy) {
			var data = {
				spriteData: {
					text: text || "",
					drawX: drawX === undefined ? sprite.x : drawX,
					drawY: drawY === undefined ? sprite.y : drawY,
					x: sx === undefined ? sprite.x : sx,
					y: sy === undefined ? sprite.y : sy,
					width: sprite.width,
					height: sprite.height
				},
				textState: Object.assign({}, this._msgWindow ? this._msgWindow._textState : {})
			};
			return data;
		};
		MK_TextSprite.prototype.createLetterObject = function(sprite) {
			return {
				sprite: sprite,
				flag: Object.assign({}, this._newLetterFlag),
				data: this.makeNewLetterData(...arguments)
			};
		};
		MK_TextSprite.prototype.addLetterSprite = function(sprite, text, drawX, drawY, sx, sy) {
			if (!sprite) return;
			var letterObj = this.createLetterObject(...arguments);
			this._letters.push(letterObj);
			this.addChild(sprite);
			this.onAddLetterSprite(letterObj);
		};
		MK_TextSprite.prototype.onAddLetterSprite = function(letterObj) {};
		MK_TextSprite.prototype.removeLetterSprite = function(sprite) {
			var letterObjIndex = this._letters.findIndex(each => each && each.sprite === sprite);
			if (letterObjIndex >= 0) {
				var letterObj = this._letters[letterObjIndex];
				this._letters.splice(letterObjIndex, 1);
				this.removeSprite(sprite);
				this.onRemoveLetterSprite(letterObj);
			}
		};
		MK_TextSprite.prototype.onRemoveLetterSprite = function(letterObj) {};
		MK_TextSprite.prototype.clearNewLetterFlag = function() {
			this._newLetterFlag = {};
		};
		MK_TextSprite.prototype.clearTextSpriteFlag = function() {
			this._textSpriteFlag = {};
		};
		MK_TextSprite.prototype.clearTextSpriteData = function() {
			this._textSpriteData = {};
		};
		MK_TextSprite.prototype.clearAllFlag = function() {
			this.clearNewLetterFlag();
			this.clearTextSpriteFlag();
			this.clearTextSpriteData();
		};
		MK_TextSprite.prototype.setNewLetterFlag = function(key, value) {
			this._newLetterFlag[key] = value === undefined ? true : !!value;
		};
		MK_TextSprite.prototype.setTextSpriteFlag = function(key, value) {
			this._textSpriteFlag[key] = value === undefined ? true : !!value;
		};
		MK_TextSprite.prototype.setTextSpriteData = function(key, value) {
			this._textSpriteData[key] = value;
		};
		MK_TextSprite.prototype.animFlagFormat = function(key, code) {
			return key + "_" + code;
		};
		MK_TextSprite.prototype.setNewLetterAnimFlag = function(key, code, value) {
			this.setNewLetterFlag(this.animFlagFormat(key, code), value);
		};
		MK_TextSprite.prototype.setTextSpriteAnimFlag = function(key, code, value) {
			this.setTextSpriteFlag(this.animFlagFormat(key, code), value);
		};
		MK_TextSprite.prototype.setTextSpriteAnimData = function(key, code, value) {
			this.setTextSpriteData(this.animFlagFormat(key, code), value);
		};
		MK_TextSprite.prototype.getLetterFlag = function(letter, key) {
			return letter && letter.flag ? letter.flag[key] : false;
		};
		MK_TextSprite.prototype.getTextSpriteFlag = function(key) {
			return this._textSpriteFlag[key];
		};
		MK_TextSprite.prototype.getTextSpriteData = function(key) {
			return this._textSpriteData[key];
		};
		MK_TextSprite.prototype.getLetterAnimFlag = function(letter, key, code) {
			return letter && letter.flag ? letter.flag[this.animFlagFormat(key, code)] : false;
		};
		MK_TextSprite.prototype.getTextSpriteAnimFlag = function(key, code) {
			return this.getTextSpriteFlag(this.animFlagFormat(key, code));
		};
		MK_TextSprite.prototype.getTextSpriteAnimData = function(key, code) {
			return this.getTextSpriteData(this.animFlagFormat(key, code));
		};
		MK_TextSprite.prototype.getLetterObjects = function() {
			return this._letters;
		};
		MK_TextSprite.prototype.getLetterSprites = function() {
			return this.getLetterObjects().map(obj => obj.sprite);
		};
		MK_TextSprite.prototype.filterLetterObjects = function(onFlags, offFlags) {
			return this.getLetterObjects().filter(obj => {
				if (!!onFlags) {
					onFlags = Array.isArray(onFlags) ? onFlags : [ onFlags ];
					for (var i = 0, l = onFlags.length; i < l; i++) {
						if (!obj.flag[onFlags[i]]) return false;
					}
				}
				if (!!offFlags) {
					offFlags = Array.isArray(offFlags) ? offFlags : [ offFlags ];
					for (var i = 0, l = offFlags.length; i < l; i++) {
						if (!!obj.flag[offFlags[i]]) return false;
					}
				}
				return true;
			});
		};
		MK_TextSprite.prototype.filterLetterObjectsByAnimFlag = function(code, onKeys, offKeys) {
			onKeys = !!onKeys ? (Array.isArray(onKeys) ? onKeys : [ onKeys ]).map(key => this.animFlagFormat(key, code), this) : onKeys;
			offKeys = !!offKeys ? (Array.isArray(offKeys) ? offKeys : [ offKeys ]).map(key => this.animFlagFormat(key, code), this) : offKeys;
			return this.filterLetterObjects(code, onKeys, offKeys);
		};
		MK_TextSprite.prototype.setMsgWindow = function(msgWindow) {
			this._msgWindow = msgWindow;
		};
		window.MK_TextSprite = MK_TextSprite;
		return MK_TextSprite;
	})();
})();