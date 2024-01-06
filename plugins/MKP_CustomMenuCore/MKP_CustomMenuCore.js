/*!
 * MKP_CustomMenuCore - v0.1.7
 * Updated : 2024-01-06T18:45:00+0800
 * 
 * https://github.com/MikanHako1024
 * Copyright (C) 2019-2024 Mikan(MikanHako)
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
 * @plugindesc 自定义菜单核心 <MKP_CustomMenuCore> v0.1.7
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.1.7 (2024-01-06T18:45:00+0800)
 *     整理代码
 *     补充插件说明
 * 
 * @sourcecode 发布版插件可能压缩了代码，如有需要源代码，可以联系插件作者
 * 
 * 
 * 
 * 
 * @target MV MZ
 * 
 * 
 * @help
 * 
 * 自定义菜单核心 <MKP_CustomMenuCore> v0.1.7
 * Updated : 2024-01-06T18:45:00+0800
 * 
 * 
 * ## 简要说明
 * 
 * 用json配置生成UI  
 * 
 * 
 * ## 使用方法
 * 
 * ```js
 * var config = {
 *     cell: { type: 'touchable', x: 50, y: 50 },
 *     hitArea: { type: 'ignore', x: 0, y: 0, w: 100, h: 100, hitKey: 'bg' },
 *     icons: {
 *         cellGrid: { startX: 0, startY: 0, stepX: 40, stepY: 32, count: 5, colsLimit: 3 },
 *         cellElem: {
 *             cell: { type: 'touchable', x: 0, y: 0 },
 *             hitArea: { type: 'ignore', x: 0, y: 0, w: 100, h: 100, hitKey: 'icon' },
 *             icon : { type: 'icon', x: 0, y: 0, iconSetId: 1, index: [16, 17, 18, 19, 20] },
 *         }
 *     }
 * };
 * 
 * var result = MK_CMenuManager.createCMenuByConfig(config);
 * //var menuSprite = result.sp;
 * //var menuData = result.da;
 * 
 * function MenuSprite_Test() {
 *     this.initialize(...arguments);
 * }
 * 
 * MenuSprite_Test.prototype = Object.create(MK_CMenuSprite_MenuBase.prototype);
 * MenuSprite_Test.prototype.constructor = MenuSprite_Test;
 * 
 * MenuSprite_Test.prototype.initialize = function(cmenuRes) {
 *     MK_CMenuSprite_MenuBase.prototype.initialize.call(this);
 *     this.initAllSprites(cmenuRes);
 * };
 * 
 * MenuSprite_Test.prototype.touchEventEnabled = function() {
 *     return true;
 * };
 * 
 * MenuSprite_Test.prototype.initAllSprites = function(cmenuRes) {
 *     this.addChild(cmenuRes.sp);
 *     // do something
 * };
 * 
 * MenuSprite_Test.prototype.refresh = function() {
 *     // do something
 * };
 * 
 * var menu = new MenuSprite_Test(result);
 * menu.setHandler('mouseExit', (hitSpr) => console.log('exit', hitSpr.getHitKey()));
 * menu.setTouchHandler('mouseEnter', 'icon', (hitKey, extData, hitSpr) => console.log('enter', hitKey, extData));
 * 
 * SceneManager._scene.addChild(menu);
 * ```
 * 
 * 
 * ## UI组件
 * 
 * #### 容器
 * ```json
 * {
 *   cell: { x: ##横坐标##, y: ##纵坐标## },
 *   ##子组件1##: { .. },
 *   ##子组件2##: { .. },
 * }
 * ```
 * 
 * #### 可点击容器
 * ```json
 * {
 *   cell: { type: 'touchable', x: ##横坐标##, y: ##纵坐标## },
 *   hitArea: {
 *     type: 'ignore', x: ##点击区域x##, y: ##点击区域y##, w: ##点击区域宽##, h: ##点击区域高##,
 *     hitKey: ##触摸键名##,
 *   },
 *   ##子组件1##: { .. },
 *   ##子组件2##: { .. },
 * }
 * ```
 * 
 * #### 列表容器
 * ```json
 * {
 *   cellGrid: {
 *     startX: ##横坐标起始##, startY: ##纵坐标起始##,
 *     stepX: ##横坐标移动##, stepY: ##纵坐标移动##,
 *     count: ##数量##, rowsLimit: ##行排列限制##, colsLimit: ##列排列限制## },
 *   },
 *   cellElem: {
 *     ##元素子组件1##: { .. },
 *     ##元素子组件2##: { .. },
 *   },
 * }
 * ```
 * 
 * #### 图像
 * ```json
 * { type: 'image', x: ##横坐标##, y: ##纵坐标##, image: ##图片名##, dir: ##图片目录## }
 * ```
 * 
 * #### 图标
 * ```json
 * { type: 'icon', x: ##横坐标##, y: ##纵坐标##, iconSetId: 1, index: ##索引## }
 * ```
 * 
 * #### 文本
 * ```json
 * {
 *   type: 'text',
 *   x: ##横坐标##, y: ##纵坐标##, w: ##宽度##, h: ##高度##,
 *   align: ##对其方向(left|center|right)##,
 *   fontSize: ##字号##, textMaxWidth: ##最大宽度##, lineHeight: ##行高##,
 *   textColor: ##文字颜色##, textPadding: ##文字框内距##,
 *   outlineColor: ##描边颜色##, outlineWidth: ##描边宽度##,
 *   fontFace: ##字体##,
 *   convertEscape: ##是否转义(boolean)##, autoLineFeed: ##是否自动换行(boolean)##,
 * }
 * ```
 * 
 * #### 数据
 * ```json
 * { type: 'data', ##数据key1##: ##数据value1##, ##数据key2##: ##数据value2## }
 * ```
 * 
 * 
 * ## 版本支持
 * 
 * 开发环境 : RPG Maker MV v1.6.2 + RPG Maker MZ v1.7.0
 * + MV : 支持
 * + MZ : 暂未支持
 * 
 * 
 * ## 后续任务
 * 
 * - [ ] ...
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

;(function() {
	// core
	const pluginData = {
		MikanPluginDataCoreUpdatedTime : '2024-01-01T013:00:00+0800',
		pluginName : 'MKP_CustomMenuCore',
		pluginVersion : 'v0.1.7',
		pluginUpdatedTime : '2024-01-06T18:45:00+0800',

		support : {
			supportForMV : true,
			notSupportForMV : false,
			engineNameMV : 'MV',
			engineVersionMV : '1.6.2',

			supportForMZ : true,
			notSupportForMZ : false,
			engineNameMZ : 'MZ',
			engineVersionMZ : '1.7.0',
		},

		paramParser : {
			numberParser : function(str, defVal) {
				if (str === '') return defVal;
				if (typeof(str) !== 'string' && typeof(str) !== 'number') return defVal;
				var val = Number(str);
				return !Number.isNaN(val) ? val : defVal;
			},
			stringParser : function(str, defVal) {
				if (typeof(str) !== 'string' && typeof(str) !== 'number') return defVal;
				return String(str);
			},
			booleanParser : function(str, defVal) {
				if (str === 'true') return true;
				else if (str === 'false') return false;
				else return !!defVal;
			},
			structParser : function(str) {
				var data = null;
				try {
					data = JSON.parse(str || '{}');
				}
				catch (e) {
					console.warn(`Failed to parse json "${str}".`);
					data = null;
				}
				return data;
			},
			listParser : function(parser, str, defVals, ...args) {
				var data = null;
				try {
					data = JSON.parse(str || '[]');
				}
				catch (e) {
					console.warn(`Failed to parse json "${str}".`);
					data = null;
				}
				if (Array.isArray(data)) {
					data = Array.isArray(defVals)
						? data.map((each, i) => parser(each, defVals[i], ...args))
						: data.map(each => parser(each, defVals, ...args));
				}
				else {
					console.warn(`Json data "${str}" is not a array data.`);
					data = null;
				}
				return data;
			},
		},
		paramSource : null,
		param : {},
		class : {},
		datas : {},

		getRealPluginName : function(pluginName) {
			var param = PluginManager._parameters[(pluginName || '').toLowerCase()];
			if (!param) {
				var list = $plugins.filter(function (i) {
					return i.description.contains('<' + pluginName + '>');
				});
				for (var i = 0, l = list.length; i < l; ++i) {
					var realPluginName = list[i].name;
					if (realPluginName !== pluginName)
						return realPluginName;
				}
				return '';
			}
			else {
				return pluginName;
			}
		},
		fetchMyRealPluginName : function() {
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

		getPluginParam : function(realPluginName) {
			var param = PluginManager.parameters(realPluginName);
			return param;
		},
		fetchMyPluginParam : function() {
			this.paramSource = this.getPluginParam(this.fetchMyRealPluginName());
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
			else if (this.checkRpgmakerEngine(keyMV, undefined)) {
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
			else if (this.checkRpgmakerEngine(keyMZ, undefined)) {
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

		currentRpgmakerEngine : undefined,
		getRpgmakerEngine : function() {
			if (this.currentRpgmakerEngine === undefined) {
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




// MK_Panel_Base
// 继承 Window_Base
// 只显示 contents 作为画板，不显示其他内容
// 可用作其他 UI 的基类
(function() {

	function MK_Panel_Base() {
		this.initialize.apply(this, arguments);
	}

	MK_Panel_Base.prototype = Object.create(Window_Base.prototype);
	MK_Panel_Base.prototype.constructor = MK_Panel_Base;

	MK_Panel_Base.prototype._createAllParts = function() {
		Window.prototype._createAllParts.apply(this, arguments);
		this.removeChild(this._windowSpriteContainer);
		this.removeChild(this._windowCursorSprite);
		// 保留 this._windowContentsSprite
		this.removeChild(this._downArrowSprite);
		this.removeChild(this._upArrowSprite);
		this.removeChild(this._windowPauseSignSprite);
	};

	MK_Panel_Base.prototype.standardPadding = function() {
		// override : Window_Base.prototype.standardPadding
		return 0;
	};

	window.MK_Panel_Base = MK_Panel_Base;
	return MK_Panel_Base;
})();

// MK_Panel_Text
// 继承 MK_Panel_Base
// 专门显示文字，可以保留字体配置
(function() {

	function MK_Panel_Text() {
		this.initialize.apply(this, arguments);
	}

	MK_Panel_Text.prototype = Object.create(MK_Panel_Base.prototype);
	MK_Panel_Text.prototype.constructor = MK_Panel_Text;

	MK_Panel_Text.prototype.initialize = function(x, y, width, height) {
		this._text = '';
		this._fontSettings = {
			// textPadding
			// fontFace
			// fontSize
			// textColor
			// lineHeight
			// outlineColor
			// outlineWidth
			// textMaxWidth
			// textAlign
			// convertEscape
			// autoLineFeed
		};
		MK_Panel_Base.prototype.initialize.apply(this, arguments);

		if (MK_Panel_Text.DebugTextMode) {
			MK_Panel_Text._debugInstList.push(this);
		}
	};

	MK_Panel_Text.prototype.setFontSetting = function(key, value) {
		this._fontSettings[key] = value;
		//this.refresh();
	};
	MK_Panel_Text.prototype.unsetFontSetting = function(key) {
		delete this._fontSettings[key];
		//this.refresh();
	};

	// Settings
	(function() {

		MK_Panel_Text.prototype.textPadding = function() {
			if ('textPadding' in this._fontSettings)
				return this._fontSettings.textPadding;
			else
				//return MK_Panel_Base.prototype.textPadding.apply(this, arguments);
				return 1;
		};
		MK_Panel_Text.prototype.standardFontFace = function() {
			if ('fontFace' in this._fontSettings)
				return this._fontSettings.fontFace;
			else
				return MK_Panel_Base.prototype.standardFontFace.apply(this, arguments);
		};
		MK_Panel_Text.prototype.standardFontSize = function() {
			if ('fontSize' in this._fontSettings)
				return this._fontSettings.fontSize;
			else
				return MK_Panel_Base.prototype.standardFontSize.apply(this, arguments);
		};
		MK_Panel_Text.prototype.normalColor = function() {
			if ('textColor' in this._fontSettings)
				return this._fontSettings.textColor;
			else
				return MK_Panel_Base.prototype.normalColor.apply(this, arguments);
		};
		MK_Panel_Text.prototype.lineHeight = function() {
			if ('lineHeight' in this._fontSettings)
				return this._fontSettings.lineHeight;
			else
				//return MK_Panel_Base.prototype.lineHeight.apply(this, arguments);
				return this.standardFontSize();
		};

		MK_Panel_Text.prototype.defaultOutlineColor = function() {
			return 'rgba(0, 0, 0, 0.5)';
		};
		MK_Panel_Text.prototype.outlineColor = function() {
			if ('outlineColor' in this._fontSettings)
				return this._fontSettings.outlineColor;
			else
				return this.defaultOutlineColor();
		};

		MK_Panel_Text.prototype.defaultOutlineWidth = function() {
			return 4;
		};
		MK_Panel_Text.prototype.outlineWidth = function() {
			if ('outlineWidth' in this._fontSettings)
				return this._fontSettings.outlineWidth;
			else
				return this.defaultOutlineWidth();
		};

		MK_Panel_Text.prototype.resetFontSettings = function() {
			MK_Panel_Base.prototype.resetFontSettings.apply(this, arguments);
			this.resetOutlineSettings();
		};

		MK_Panel_Text.prototype.resetOutlineSettings = function() {
			this.contents.outlineColor = this.outlineColor();
			this.contents.outlineWidth = this.outlineWidth();
		};

		MK_Panel_Text.prototype.defaultTextMaxWidth = function() {
			return this.contentsWidth() - 2 * this.textPadding();
		};
		MK_Panel_Text.prototype.textMaxWidth = function() {
			if ('textMaxWidth' in this._fontSettings)
				return this._fontSettings.textMaxWidth;
			else
				return this.defaultTextMaxWidth();
		};

		MK_Panel_Text.prototype.defaultTextAlign = function() {
			return 'left';
		};
		MK_Panel_Text.prototype.textAlign = function() {
			if ('textAlign' in this._fontSettings)
				return this._fontSettings.textAlign;
			else
				return this.defaultTextAlign();
		};

		MK_Panel_Text.prototype.defaultNeedsConvertEscape = function() {
			return false;
		};
		MK_Panel_Text.prototype.needsConvertEscape = function() {
			if ('convertEscape' in this._fontSettings)
				return !!this._fontSettings.convertEscape;
			else
				return this.defaultNeedsConvertEscape();
		};

		MK_Panel_Text.prototype.defaultNeedsAutoLineFeed = function() {
			return false;
		};
		MK_Panel_Text.prototype.needsAutoLineFeed = function() {
			if ('autoLineFeed' in this._fontSettings)
				return !!this._fontSettings.autoLineFeed;
			else
				return this.defaultNeedsAutoLineFeed();
		};
	})();

	MK_Panel_Text.prototype.setText = function(text) {
		text = String(text);
		if (this._text !== text) {
			this._text = text;
			this.refresh();
		}
	};

	MK_Panel_Text.prototype.refresh = function() {
		this.resetFontSettings();
		this.contents.clear();

		if (this.needsConvertEscape() || this.needsAutoLineFeed()) {
			this.drawTextEx(this._text, this.textPadding(), 0);
		}
		else {
			this.contents.drawText(this._text,
				this.textPadding(), 0,
				this.textMaxWidth(), this.lineHeight(), this.textAlign());
		}
	};

	MK_Panel_Text.prototype.createTextState = function(text, x, y) {
		const textState = { index: 0, x: x, y: y, left: x };
		textState.text = this.needsConvertEscape() ? this.convertEscapeCharacters(text) : text;
		//textState.height = this.calcTextHeight(textState, false);
		textState.height = this.lineHeight();
		textState.right = Math.min(this.contentsWidth() - this.textPadding(), this.textMaxWidth() || 0xffffffff);
		textState.autoLineFeed = this.needsAutoLineFeed();
		return textState;
	};

	MK_Panel_Text.prototype.drawTextEx = function(text, x, y) {
		// override : MK_Panel_Base.prototype.drawTextEx
		if (text) {
			this.resetFontSettings();
			const textState = this.createTextState(text, x, y);
			while (textState.index < textState.text.length) {
			    this.processCharacter(textState);
			}
			return textState.x - x;
		} else {
			return 0;
		}
	};

	MK_Panel_Text.prototype.processNormalCharacter = function(textState) {
		// override : MK_Panel_Base.prototype.processNormalCharacter
		var c = textState.text[textState.index++];
		var w = this.textWidth(c);
		if (textState.autoLineFeed && textState.x + w > textState.right) {
			//this.processNewLine(textState);
			//textState.index--;
			textState.x = textState.left;
			textState.y += this.lineHeight();
			textState.height = this.lineHeight();
		}
		this.contents.drawText(c, textState.x, textState.y, w * 2, textState.height);
		textState.x += w;
	};

	// Debug
	(function() {

		MK_Panel_Text.DebugTextMode = false;
		MK_Panel_Text._debugInstList = [];

		MK_Panel_Text.testTextArea = function(color1, color2) {
			for (const inst of this._debugInstList) {
				const width = inst.contents.width;
				const height = inst.contents.height;
				const sprite = new Sprite(new Bitmap(width, height));
				sprite.bitmap.fillAll(color1);
				const padding = inst.textPadding();
				sprite.bitmap.fillRect(padding, 0, width - 2 * padding, height, color2);
				if (inst._debugTextAreaSprite) {
					inst.removeChild(inst._debugTextAreaSprite);
				}
				inst._debugTextAreaSprite = sprite;
				inst.addChild(inst._debugTextAreaSprite);
			}
		};

		MK_Panel_Text.testTextFont = function(text) {
			for (const inst of this._debugInstList) {
				inst.setText(text);
				inst.refresh();
			}
		};
	})();

	window.MK_Panel_Text = MK_Panel_Text;
	return MK_Panel_Text;
})();

// 拓展 Sprite
// 使每个 sprite 都能 hitTest
// 以此 自上而下地检查点击
// 并且可以限制无法点击到被遮挡的物体
(function() {

	Sprite._ignoreHitKey = '.';

	const _MK_Sprite_initialize = Sprite.prototype.initialize;
	Sprite.prototype.initialize = function(bitmap) {
		_MK_Sprite_initialize.apply(this, arguments);
		this._hitKey = '';
		this._hitArea = null;
		this._hitExtData = undefined;
	};

	Sprite.prototype.getHitKey = function() {
		return this._hitKey || '';
	};
	Sprite.prototype.getHitArea = function() {
		if (this._hitArea) {
			return this._hitArea;
		}
		else {
			return new Rectangle(
				-this.anchor.x * this.width,
				-this.anchor.y * this.height,
				this.width,
				this.height,
			);
		}
	};
	Sprite.prototype.getHitExtData = function() {
		return this._hitExtData;
	};

	Sprite.prototype.isIgnoreHitKey = function() {
		return this._hitKey === Sprite._ignoreHitKey;
	};

	Sprite.prototype.setHitKey = function(hitKey, extData) {
		this._hitKey = hitKey || '';
		this.setHitExtData(extData);
	};
	Sprite.prototype.setHitArea = function(rect) {
		this._hitArea = rect || null;
	};
	Sprite.prototype.setHitExtData = function(extData) {
		this._hitExtData = extData;
	};

	Sprite.prototype.hitAreaTest = function(x, y) {
		if (this.visible && this.worldAlpha > 0) {
			if (this.children.length > 0) {
				for (var i = this.children.length - 1; i >= 0; i--) {
					if (typeof this.children[i].hitAreaTest === 'function') {
						const hit = this.children[i].hitAreaTouched();
						if (hit)
							return hit;
					}
				}
			}
			if (this._hitKey && this.getHitArea().contains(x, y)) {
				return this;
			}
			else
				return null;
		}
		return null;
	};

	Sprite.prototype.hitAreaTouched = function() {
		const touchPos = new Point(TouchInput.x, TouchInput.y);
		const localPos = this.worldTransform.applyInverse(touchPos);
		return this.hitAreaTest(localPos.x, localPos.y);
	};
})();

// 搬运 MZ 的 TouchInput._onMouseMove
// 以获得检测鼠标移动的能力
(function() {

	TouchInput._onMouseMove = function(event) {
		const x = Graphics.pageToCanvasX(event.pageX);
		const y = Graphics.pageToCanvasY(event.pageY);
		if (this._mousePressed) {
			this._onMove(x, y);
		} else if (Graphics.isInsideCanvas(x, y)) {
			//this._onHover(x, y);
			this._onMove(x, y);
		}
	};
})();

// MK_CMenuSprite_MenuBase
// 继承 Sprite
// CMenu菜单基类
// 有 handler 可以设置和调用方法
// 有简单的鼠标行为检测
(function() {

	function MK_CMenuSprite_MenuBase() {
		this.initialize(...arguments);
	}

	MK_CMenuSprite_MenuBase.prototype = Object.create(Sprite.prototype);
	MK_CMenuSprite_MenuBase.prototype.constructor = MK_CMenuSprite_MenuBase;

	MK_CMenuSprite_MenuBase.prototype.initialize = function() {
		Sprite.prototype.initialize.call(this);
		this._handlers = {};
		this._touchHandlers = {};
		this._touchingHitSpr = null;
		this._hoveringHitSpr = null;
		this._lastTickTouchEventEnabled = false;
		this.initBaseTouchHandlers();
	};

	MK_CMenuSprite_MenuBase.prototype.initBaseTouchHandlers = function() {
		const symbols = [
			'touchStart',
			'touchStay',
			'touchStop',
			'mouseStay',
			'mouseExit',
			'mouseEnter',
		];
		for (const symbol of symbols) {
			this.setHandler(symbol, this.callTouchHandler.bind(this, symbol));
		}
	};

	MK_CMenuSprite_MenuBase.prototype.setHandler = function(symbol, method) {
		this._handlers[symbol] = method;
	};
	MK_CMenuSprite_MenuBase.prototype.isHandled = function(symbol) {
		return !!this._handlers[symbol];
	};
	MK_CMenuSprite_MenuBase.prototype.callHandler = function(symbol, ...args) {
		if (this.isHandled(symbol)) {
			this._handlers[symbol](...args);
		}
	};

	MK_CMenuSprite_MenuBase.prototype.setTouchHandler = function(symbol, hitKey, method) {
		this._touchHandlers[symbol] = this._touchHandlers[symbol] || {};
		this._touchHandlers[symbol][hitKey] = method;
	};
	MK_CMenuSprite_MenuBase.prototype.isTouchHandled = function(symbol, hitKey) {
		return !!this._touchHandlers[symbol] && !!this._touchHandlers[symbol][hitKey];
	};
	MK_CMenuSprite_MenuBase.prototype.callTouchHandler = function(symbol, hitSpr, ...args) {
		if (hitSpr && hitSpr.getHitKey()) {
			const hitKey = hitSpr.getHitKey();
			const hitExtData = hitSpr.getHitExtData();
			if (this.isTouchHandled(symbol, hitKey)) {
				this._touchHandlers[symbol][hitKey](hitKey, hitExtData, hitSpr, ...args);
			}
		}
	};

	MK_CMenuSprite_MenuBase.prototype.touchEventEnabled = function() {
		return false;
	};

	MK_CMenuSprite_MenuBase.prototype.updateTouchEventEnabled = function() {
		const enabled = this.touchEventEnabled();
		if (this._lastTickTouchEventEnabled !== enabled) {
			this.clearTouchingState();
			this._lastTickTouchEventEnabled = enabled;
		}
	};

	MK_CMenuSprite_MenuBase.prototype.clearTouchingState = function() {
		this._touchingHitSpr = null;
		this._hoveringHitSpr = null;
	};

	MK_CMenuSprite_MenuBase.prototype.update = function() {
		Sprite.prototype.update.apply(this, arguments);
		this.updateTouchEventEnabled();
		if (this.touchEventEnabled()) {
			this.updateTouchHit();
		}
	};

	MK_CMenuSprite_MenuBase.prototype.updateTouchHit = function() {
		var hitSpr = this.hitAreaTouched() || null;
		if (hitSpr && hitSpr.isIgnoreHitKey()) {
			hitSpr = null;
		}
		//const hitKey = hitSpr ? hitSpr.getHitKey() : '';

		if (TouchInput.isTriggered()) {
			this._touchingHitSpr = hitSpr;
			if (this._touchingHitSpr) {
				this.callHandler('touchStart', this._touchingHitSpr);
			}
		}
		else if (TouchInput.isPressed()) {
			if (this._touchingHitSpr && this._touchingHitSpr !== hitSpr) {
				this._touchingHitSpr = null;
			}
			if (this._touchingHitSpr) {
				this.callHandler('touchStay', this._touchingHitSpr);
			}
		}
		else if (TouchInput.isReleased()) {
			if (this._touchingHitSpr && this._touchingHitSpr !== hitSpr) {
				this._touchingHitSpr = null;
			}
			if (this._touchingHitSpr) {
				this.callHandler('touchStop', this._touchingHitSpr);
			}
		}

		if (this._hoveringHitSpr || hitSpr) {
			if (this._hoveringHitSpr === hitSpr) {
				this.callHandler('mouseStay', this._hoveringHitSpr);
			}
			else {
				if (this._hoveringHitSpr) {
					this.callHandler('mouseExit', this._hoveringHitSpr);
					this._hoveringHitSpr = null;
				}
				if (hitSpr) {
					this._hoveringHitSpr = hitSpr;
					this.callHandler('mouseEnter', this._hoveringHitSpr);
				}
			}
		}
	};

	// TODO : 右键行为，复杂的右键行为，键盘按键行为

	window.MK_CMenuSprite_MenuBase = MK_CMenuSprite_MenuBase;
	return MK_CMenuSprite_MenuBase;
})();

// MK_CMenuSprite_Image
// 继承 Sprite
// CMenu组件 : 显示图片
(function() {

	function MK_CMenuSprite_Image() {
		this.initialize(...arguments);
	}

	MK_CMenuSprite_Image.prototype = Object.create(Sprite.prototype);
	MK_CMenuSprite_Image.prototype.constructor = MK_CMenuSprite_Image;

	MK_CMenuSprite_Image._imageLoadFunctions = {
		// dirKey -> funcName
		animations:   'loadAnimation',
		battlebacks1: 'loadBattleback1',
		battlebacks2: 'loadBattleback2',
		enemies:      'loadEnemy',
		characters:   'loadCharacter',
		faces:        'loadFace',
		parallaxes:   'loadParallax',
		pictures:     'loadPicture',
		sv_actors:    'loadSvActor',
		sv_enemies:   'loadSvEnemy',
		system:       'loadSystem',
		tilesets:     'loadTileset',
		titles1:      'loadTitle1',
		titles2:      'loadTitle2',
	};

	MK_CMenuSprite_Image.registerImageLoadFunc = function(dirKey, funcName) {
		this._imageLoadFunctions[dirKey] = funcName;
	};

	MK_CMenuSprite_Image.loadImageWithDirKey = function(dirKey, imageName) {
		const funcName = this._imageLoadFunctions[dirKey];
		if (funcName && typeof ImageManager[funcName] === 'function') {
			return ImageManager[funcName](imageName);
		}
		else if (!funcName) {
			console.warn(`MK_CMenuSprite_Image : Unknown image dir "${dirKey}".`);
		}
		else {
			console.warn(`MK_CMenuSprite_Image : ImageManager don't have function "${funcName}" for dir "${dirKey}".`);
		}
		return ImageManager.loadEmptyBitmap();
	};

	MK_CMenuSprite_Image.prototype.initialize = function(imageDirKey, imageName) {
		Sprite.prototype.initialize.call(this);
		this._imageDirKey = '';
		this._imageName = '';
		this.setImageDirKey(imageDirKey, imageName);
	};

	MK_CMenuSprite_Image.prototype.setImage = function(imageDirKey, imageName) {
		if (arguments.length >= 2)
			this.setImageDirKey(imageDirKey, imageName);
		else
			this.setImageName(imageDirKey); // imageName
	};

	MK_CMenuSprite_Image.prototype.setImageDirKey = function(imageDirKey, imageName) {
		imageDirKey = imageDirKey || '';
		imageName = arguments.length >= 2 ? (imageName || '') : this._imageName;
		if (this._imageDirKey != imageDirKey) {
			this._imageDirKey = imageDirKey;
			this._imageName = '';
			this.bitmap = null;
		}
		this.setImageName(imageName);
	};

	MK_CMenuSprite_Image.prototype.setImageName = function(imageName) {
		imageName = imageName || '';
		if (this._imageName != imageName) {
			this._imageName = imageName;
			this.bitmap = MK_CMenuSprite_Image.loadImageWithDirKey(this._imageDirKey, this._imageName);
		}
	};

	window.MK_CMenuSprite_Image = MK_CMenuSprite_Image;
	return MK_CMenuSprite_Image;
})();

// MK_CMenuSprite_Icon
// 继承 Sprite
// CMenu组件 : 显示IconSet图标
(function() {

	function MK_CMenuSprite_Icon() {
		this.initialize(...arguments);
	}

	MK_CMenuSprite_Icon.prototype = Object.create(Sprite.prototype);
	MK_CMenuSprite_Icon.prototype.constructor = MK_CMenuSprite_Icon;

	MK_CMenuSprite_Icon._iconSetImages = [];

	MK_CMenuSprite_Icon.registerIconSet = function(id, name, cols, blockWidth, blockHeight) {
		this._iconSetImages[id] = { name, cols, blockWidth, blockHeight };
	};
	MK_CMenuSprite_Icon.registerIconSet(1, 'IconSet', 16, 32, 32);

	MK_CMenuSprite_Icon.existsIconSet = function(id) {
		return id > 0 && !!this._iconSetImages[id];
	};

	MK_CMenuSprite_Icon.getIconSetName = function(id) {
		if (id > 0 && this._iconSetImages[id]) {
			return this._iconSetImages[id].name || '';
		}
		else {
			return '';
		}
	};
	MK_CMenuSprite_Icon.getIconFrame = function(id, index) {
		if (id > 0 && index > 0 && this._iconSetImages[id]) {
			const iconSetCfg = this._iconSetImages[id];
			const bx = index % iconSetCfg.cols;
			const by = Math.floor(index / iconSetCfg.cols);
			const bw = iconSetCfg.blockWidth;
			const bh = iconSetCfg.blockHeight;
			return [bx * bw, by * bh, bw, bh];
		}
		else {
			return [0, 0, 0, 0];
		}
	};

	MK_CMenuSprite_Icon.prototype.initialize = function(iconSetId, iconIndex) {
		Sprite.prototype.initialize.call(this);
		this._iconSetId = 0;
		this._iconIndex = 0;
		this.setIconSetId(iconSetId, iconIndex);
	};

	MK_CMenuSprite_Icon.prototype.setIcon = function(iconSetId, iconIndex) {
		if (arguments.length >= 2)
			this.setIconSetId(iconSetId, iconIndex);
		else
			this.setIconIndex(iconSetId); // iconIndex
	};

	MK_CMenuSprite_Icon.prototype.setIconSetId = function(iconSetId, iconIndex) {
		iconSetId = iconSetId > 0 ? iconSetId : 0;
		iconIndex = arguments.length >= 2
			? (iconIndex > 0 ? iconIndex : 0)
			: this._iconIndex;
		if (this._iconSetId != iconSetId) {
			this._iconSetId = iconSetId;
			this._iconIndex = 0;
			if (!MK_CMenuSprite_Icon.existsIconSet(this._iconSetId)) {
				console.warn(`MK_CMenuSprite_Icon : Don't found iconSet config for id=${this._iconSetId}.`);
			}
			this.bitmap = ImageManager.loadSystem(MK_CMenuSprite_Icon.getIconSetName(this._iconSetId));
			this.setFrame(0, 0, 0, 0);
		}
		this.setIconIndex(iconIndex);
	};

	MK_CMenuSprite_Icon.prototype.setIconIndex = function(iconIndex) {
		iconIndex = iconIndex > 0 ? iconIndex : 0;
		if (this._iconIndex != iconIndex) {
			this._iconIndex = iconIndex;
			this.setFrame(...MK_CMenuSprite_Icon.getIconFrame(this._iconSetId, this._iconIndex));
		}
	};

	window.MK_CMenuSprite_Icon = MK_CMenuSprite_Icon;
	return MK_CMenuSprite_Icon;
})();


// MK_CMenuManager
// 自定义菜单管理器
(function() {

	// 用在 Unity 开发 UI 的思路

	function MK_CMenuManager() {
		throw new Error('This is a static class');
	}

	// call it
	MK_CMenuManager.createCMenuByConfig = function(config) {
		return this._createComponentAnyComposite(config, {
			indexStack: [],
		});
	};


	MK_CMenuManager._getValueWithIndexStack = function(value, indexStack, depth) {
		if (Array.isArray(value)) {
			depth = depth || 0;
			if (depth < indexStack.length) {
				const index = indexStack[depth];
				return this._getValueWithIndexStack(value[index], indexStack, depth + 1);
			}
			else {
				return value;
			}
		}
		else {
			return value;
		}
	};

	MK_CMenuManager._createResultObj = function(sprite, data) {
		return {
			sp: sprite,
			da: data,
		};
	};

	MK_CMenuManager._createComponentAnyComposite = function(config, contexts, ...args) {
		if (!config) {
			return this._createComponentEmpty(config, contexts, ...args);
		}
		else if (config.cellGrid) {
			return this._createCompCellGridAnyType(config, contexts, ...args);
		}
		else if (config.cell) {
			return this._createCompCellAnyType(config, contexts, ...args);
		}
		else {
			return this._createComponentAnyType(config, contexts, ...args);
		}
	};


	MK_CMenuManager._compCellTypeCreateFunctions = {
		'': '_createCompCellContainer',
		'touchable': '_createCompCellTouchable',
	};
	MK_CMenuManager._createCompCellAnyType = function(config, contexts, ...args) {
		const compType = (config && config.cell && config.cell.type) ? config.cell.type : '';
		const funcName = this._compCellTypeCreateFunctions[compType];
		if (funcName && typeof this[funcName] === 'function') {
			return this[funcName](config, contexts, ...args);
		}
		else if (!funcName) {
			console.warn(`CMenuManager : Unknown component cell type "${compType}".`);
		}
		else {
			console.warn(`CMenuManager : MK_CMenuManager don't have function "${funcName}" for component cell type "${compType}".`);
		}
		return this._createCompCellContainer(config, contexts, ...args);
	};

	MK_CMenuManager._specialParamKeys = ['cellGrid', 'cellElem', 'cell', 'type'];
	MK_CMenuManager._createCompCellChildren = function(config, contexts) {
		const map = {};
		for (const key in config) {
			if (this._specialParamKeys.contains(key))
				continue;
			map[key] = this._createComponentAnyComposite(config[key], contexts);
		}
		return this._createResultObj(null, map);
	};

	MK_CMenuManager._createCompCellContainer = function(config, contexts) {
		const sprite = new Sprite();
		if (config.cell) {
			sprite.x = config.cell.x || 0;
			sprite.y = config.cell.y || 0;
		}
		const map = this._createCompCellChildren(config, contexts).da;
		for (const childResult of Object.values(map)) {
			if (childResult.sp) {
				sprite.addChild(childResult.sp);
			}
		}
		map.cell = null;
		return this._createResultObj(sprite, map);
	};

	// cell: { type: 'touchable', x: 0, y: 0 },
	// hitArea: { type: 'ignore', x: 0, y: 0, w: 32, h: 32, hitKey: 'actorSkillL_' },
	// hitArea: { type: 'ignore', x: 0, y: 0, w: 80, h: 80, hitKey: 'statusBtn' },
	// hitArea: { type: 'ignore', x: 0, y: 0, w: 452, h: 486, hitKey: '.' },
	MK_CMenuManager._createCompCellTouchable = function(config, contexts) {
		const { sp: sprite, da: map } = this._createCompCellContainer(config, contexts);
		if (config.hitArea) {
			const hitArea = config.hitArea;
			sprite.setHitArea(hitArea.w > 0 && hitArea.h > 0
				? new Rectangle(hitArea.x || 0, hitArea.y || 0, hitArea.w, hitArea.h)
				: null);
			if (hitArea.hitKey) {
				sprite.setHitKey(hitArea.hitKey, contexts.indexStack.slice(0).reverse());
			}
			else {
				sprite.setHitKey('');
			}
		}
		return this._createResultObj(sprite, map);
	};


	MK_CMenuManager._compCellGridTypeCreateFunctions = {
		'': '_createCompCellGridContainer',
	};
	MK_CMenuManager._createCompCellGridAnyType = function(config, contexts, ...args) {
		const compType = (config && config.cell && config.cell.type) ? config.cell.type : '';
		const funcName = this._compCellGridTypeCreateFunctions[compType];
		if (funcName && typeof this[funcName] === 'function') {
			return this[funcName](config, contexts, ...args);
		}
		else if (!funcName) {
			console.warn(`CMenuManager : Unknown component cellGrid type "${compType}".`);
		}
		else {
			console.warn(`CMenuManager : MK_CMenuManager don't have function "${funcName}" for component cellGrid type "${compType}".`);
		}
		//return this._createCompCellGridContainer(config, contexts, list, ...args);
		return this._createCompCellGridContainer(config, contexts, ...args);
	};

	// cellGrid: { x: 4, y: 4, stepX: 40, stepY: 0, count: 10, colsLimit: 0 },
	// cellGrid: { x: 10, y: 634, stepX: 144, stepY: 44, count: 4, rowsLimit: 2 },
	MK_CMenuManager._createCompCellGridElements = function(config, contexts) {
		const list = [];
		if ('colsLimit' in config.cellGrid || 'rowsLimit' in config.cellGrid) {
			const grid = config.cellGrid;
			const priorStepX = ('colsLimit' in grid) ? true : false;
			const limit = Math.abs(('colsLimit' in grid) ? grid.colsLimit : grid.rowsLimit) || grid.count;
			for (var i = 0, ix = 0, iy = 0; i < grid.count; i++) {
				contexts.indexStack.unshift(i);
				const childResult = this._createComponentAnyComposite(config.cellElem, contexts);
				contexts.indexStack.shift();
				if (childResult.sp) {
					childResult.sp.x = (grid.startX || 0) + ix * (grid.stepX || 0);
					childResult.sp.y = (grid.startY || 0) + iy * (grid.stepY || 0);
				}
				list.push(childResult);
				if (priorStepX) {
					ix = (ix + 1) % limit;
					iy = iy + (ix == 0 ? 1 : 0);
				}
				else {
					iy = (iy + 1) % limit;
					ix = ix + (iy == 0 ? 1 : 0);
				}
			}
		}
		else {
			console.warn(`CMenuManager : CellGrid don't have param colsLimit or rowsLimit.`);
		}
		return this._createResultObj(null, list);
	};
	// TODO : count = 0 (不限数量, 动态生成)

	MK_CMenuManager._createCompCellGridContainer = function(config, contexts) {
		const sprite = new Sprite();
		if (config.cell) {
			sprite.x = config.cell.x || 0;
			sprite.y = config.cell.y || 0;
		}
		const list = this._createCompCellGridElements(config, contexts).da;
		for (const childResult of list) {
			if (childResult.sp) {
				sprite.addChild(childResult.sp);
			}
		}
		return this._createResultObj(sprite, { cell: null, cellGrid: list });
	};


	MK_CMenuManager._compTypeCreateFunctions = {
		'': '_createComponentEmpty',
		'ignore': '_createComponentIgnore',
		'data': '_createComponentData',
		'image': '_createComponentImage',
		'icon': '_createComponentIcon',
		'text': '_createComponentText',
	};
	MK_CMenuManager._createComponentAnyType = function(config, contexts, ...args) {
		const compType = config ? (config.type || '') : '';
		const funcName = this._compTypeCreateFunctions[compType];
		if (funcName && typeof this[funcName] === 'function') {
			return this[funcName](config, contexts, ...args);
		}
		else if (!funcName) {
			console.warn(`CMenuManager : Unknown component type "${compType}".`);
		}
		else {
			console.warn(`CMenuManager : MK_CMenuManager don't have function "${funcName}" for component type "${compType}".`);
		}
		return this._createComponentEmpty(config, contexts, ...args);
	};

	MK_CMenuManager._createComponentEmpty = function(config, contexts) {
		return this._createResultObj(new Sprite(), null);
	};
	MK_CMenuManager._createComponentIgnore = function(config, contexts) {
		return this._createResultObj(null, null);
	};
	MK_CMenuManager._createComponentData = function(config, contexts) {
		//const data = Object.assign({}, config);
		const data = JSON.parse(JSON.stringify(config));
		delete data.type;
		return this._createResultObj(null, data);
	};

	// menuBg: { type: 'image', x: 0, y: 0, image: 'BgItems', dir: 'UI' },
	// face: { type: 'image', x: 6+46, y: 6, image: '', dir: 'monsters' },
	MK_CMenuManager._createComponentImage = function(config, contexts) {
		const sprite = new MK_CMenuSprite_Image();
		sprite.x = config.x || 0;
		sprite.y = config.y || 0;
		const imageDir = this._getValueWithIndexStack(config.dir || '', contexts.indexStack);
		const imageName = this._getValueWithIndexStack(config.image || '', contexts.indexStack);
		sprite.setImageDirKey(imageDir, imageName);
		return this._createResultObj(sprite, null);
	};

	// icon: { type: 'icon', x: 0, y: 0, iconSetId: 1, index: [19, 20, 21, 22] },
	// icon: { type: 'icon', x: 0, y: 0, iconSetId: 2, index: 1 },
	MK_CMenuManager._createComponentIcon = function(config, contexts) {
		const sprite = new MK_CMenuSprite_Icon();
		sprite.x = config.x || 0;
		sprite.y = config.y || 0;
		const iconSetId = this._getValueWithIndexStack(config.iconSetId || 1, contexts.indexStack);
		const iconIndex = this._getValueWithIndexStack(config.index || 0, contexts.indexStack);
		sprite.setIconSetId(iconSetId, iconIndex);
		return this._createResultObj(sprite, null);
	};

	// exp: { type: 'text', x: 432, y: 58, w: 142, h: 20, align: 'center', fontSize: 20 },
	// name: { type: 'text', x: 6, y: 9, w: 168, h: 22, align: 'left', fontSize: 22 },
	MK_CMenuManager._textSettingsMap = {
		// MK_Panel_Text settings key -> cmenu text config key
		textPadding:  'textPadding',
		fontFace:     'fontFace',
		fontSize:     'fontSize',
		textColor:    'textColor',
		lineHeight:   'lineHeight',
		outlineColor: 'outlineColor',
		outlineWidth: 'outlineWidth',
		textMaxWidth: 'textMaxWidth',
		textAlign:    'align',
		convertEscape: 'convertEscape',
		autoLineFeed:  'autoLineFeed',
	};
	MK_CMenuManager._createComponentText = function(config, contexts) {
		const textPanel = new MK_Panel_Text(config.x || 0, config.y || 0, config.w, config.h);
		for (const settingsKey in this._textSettingsMap) {
			const cfgKey = this._textSettingsMap[settingsKey];
			if (cfgKey in config) {
				const value = this._getValueWithIndexStack(config[cfgKey], contexts.indexStack);
				textPanel.setFontSetting(settingsKey, value);
			}
		}
		return this._createResultObj(textPanel, null);
	};


	// TODO : out : 快捷获取该组件


	window.MK_CMenuManager = MK_CMenuManager;
	return MK_CMenuManager;
})();



