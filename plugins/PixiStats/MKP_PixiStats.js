/*!
 * MKP_PixiStats - v0.2.2
 * Updated : 2024-01-06T20:12:00+0800
 * 
 * https://github.com/MikanHako1024
 * Copyright (C) 2019-2024 Mikan(MikanHako)
 * 
 * Released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 * 
 * Include stats.js (https://github.com/mrdoob/stats.js)
 * Include gstatsjs (https://github.com/eXponenta/gstatsjs)
 */


/*:
 * ================================================================
 * [Twitter] https://twitter.com/_MikanHako/
 * -[GitHub] https://github.com/MikanHako1024/
 * ---[Blog] Coming soon
 * -----[QQ] 312859582
 * ================================================================
 * 
 * @plugindesc Pixi性能统计 <MKP_PixiStats> v0.2.2
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024
 * @version 
 *   v0.2.2 (2024-01-06T20:12:00+0800)
 *     更新插件模板
 *   v0.2.1 (2023-11-28T04:53:00+0800)
 *     可以显示原性能统计工具
 *     可以同时显示多个统计图标
 *     防止数据位数变化带来的文字抖动
 *   v0.2.0 (2023-11-28T03:07:00+0800)
 *     引入 gstatsjs 增加 DC, TC 的监测
 *   v0.1.0 (2023-11-28T02:19:00+0800)
 *     完成基本功能
 *   v0.0.0 (2023-11-28T01:17:00+0800) Init File
 *     项目计划中
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
 * Pixi性能统计 <MKP_PixiStats> v0.2.2
 * Updated : 2024-01-06T20:12:00+0800
 * 
 * 
 * ## 简要说明
 * 
 * 包含并使用了 stats.js (https://github.com/mrdoob/stats.js)  
 * 包含并使用了 gstatsjs (https://github.com/eXponenta/gstatsjs)  
 * 取代了 RM 自带的性能监测工具 fpsmeter (MV) 或 FPSCounter (MZ)  
 * 
 * This class provides an info box that will help you monitor your code performance.  
 * + stats.js
 *   - FPS Frames rendered in the last second. The higher the number the better.
 *   - MS Milliseconds needed to render a frame. The lower the number the better.
 *   - MB MBytes of allocated memory. (Run Chrome with --enable-precise-memory-info)
 * + gstatsjs
 *   - DC Draw Calls made within one frame.
 *   - TC Texture Count used within one frame.
 * 
 * 
 * ## 使用方法
 * 
 * 按 Ctrl + F2 显示、切换、隐藏 监测画布  
 * 按 Ctrl + Alt + F2 显示全部 监测画布  
 * 
 * 
 * ## 版本支持
 * 
 * 开发环境 : RPG Maker MV v1.6.2 + RPG Maker MZ v1.7.0
 * + MV : 支持
 * + MZ : 支持
 * 
 * 
 * ## 后续任务
 * 
 * - [ ] 修正 fps 统计数据，使之和 RM 统计的 fps 相同
 * - [ ] 更多性能统计数据
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
		pluginName : 'MKP_PixiStats',
		pluginVersion : 'v0.2.2',
		pluginUpdatedTime : '2024-01-06T20:12:00+0800',

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




(function() {
	// logic

	const PLUGIN_NAME = 'MKP_PixiStats';

	const PLUGIN_PARAMS = (function() {
		const pluginData = MK_PluginData[PLUGIN_NAME];
		const param = pluginData.param;
		return { ...param };
	})();

	const CURRENT_ENGINE = (function() {
		const pluginData = MK_PluginData[PLUGIN_NAME];
		return pluginData.getRpgmakerEngine();
	})();


	// Include stats.js (https://github.com/mrdoob/stats.js)
	// https://github.com/mrdoob/stats.js/blob/master/src/Stats.js
	const Stats = (function() {
		var Stats = function() {
			var mode = 0;
			var container = document.createElement("div");
			container.style.cssText = "position:fixed;top:0;left:0;opacity:0.9;z-index:10000";
			function addPanel(panel) {
				container.appendChild(panel.dom);
				return panel;
			}
			function setMultiPanelMode(multiMode) {
				for (var i = 0; i < container.children.length; i++) {
					const panelDom = container.children[i];
					panelDom.style.position = multiMode ? 'relative' : '';
					//panelDom.style.top = multiMode ? `${48 * i}px` : '';
					panelDom.style.top = multiMode ? `${4 * i}px` : '';
					panelDom.style.display = multiMode ? "block" : (i === mode ? "block" : "none");
				}
			}
			function showPanel(id) {
				mode = id;
				setMultiPanelMode(false);
			}
			var beginTime = (performance || Date).now(), prevTime = beginTime, frames = 0;
			var fpsPanel = addPanel(new Stats.Panel("FPS", "#0ff", "#002"));
			var msPanel = addPanel(new Stats.Panel("MS", "#0f0", "#020"));
			if (self.performance && self.performance.memory) {
				var memPanel = addPanel(new Stats.Panel("MB", "#f08", "#201"));
			}
			showPanel(0);
			return {
				REVISION: 16,
				dom: container,
				addPanel: addPanel,
				showPanel: showPanel,
				setMultiPanelMode: setMultiPanelMode,
				begin: function() {
					beginTime = (performance || Date).now();
				},
				end: function() {
					frames++;
					var time = (performance || Date).now();
					msPanel.update(time - beginTime, 200);
					if (time >= prevTime + 1e3) {
						fpsPanel.update(frames * 1e3 / (time - prevTime), 100);
						prevTime = time;
						frames = 0;
						if (memPanel) {
							var memory = performance.memory;
							memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
						}
					}
					return time;
				},
				update: function() {
					beginTime = this.end();
				},
				domElement: container,
				setMode: showPanel
			};
		};
		Stats.Panel = function(name, fg, bg) {
			var min = Infinity, max = 0, round = Math.round;
			var PR = round(window.devicePixelRatio || 1);
			var WIDTH = 120 * PR, HEIGHT = 48 * PR, TEXT_X = 3 * PR, TEXT_Y = 2 * PR, GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR, GRAPH_WIDTH = 114 * PR, GRAPH_HEIGHT = 30 * PR;
			var canvas = document.createElement("canvas");
			canvas.width = WIDTH;
			canvas.height = HEIGHT;
			canvas.style.cssText = "width:120px;height:48px";
			var context = canvas.getContext("2d");
			context.font = "bold " + 9 * PR + "px Helvetica,Arial,sans-serif";
			context.textBaseline = "top";
			context.fillStyle = bg;
			context.fillRect(0, 0, WIDTH, HEIGHT);
			context.fillStyle = fg;
			context.fillText(name, TEXT_X, TEXT_Y);
			context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
			context.fillStyle = bg;
			context.globalAlpha = .9;
			context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
			return {
				dom: canvas,
				update: function(value, maxValue) {
					min = Math.min(min, value);
					max = Math.max(max, value);
					const padLen = Math.min(3, Math.max(Math.round(min).toString().length, Math.round(max).toString().length));
					context.fillStyle = bg;
					context.globalAlpha = 1;
					context.fillRect(0, 0, WIDTH, GRAPH_Y);
					context.fillStyle = fg;
					context.fillText((round(value).toString().padStart(padLen, '0')) + " " + name + " (" + round(min) + "-" + round(max) + ")", TEXT_X, TEXT_Y);
					context.drawImage(canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT);
					context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);
					context.fillStyle = bg;
					context.globalAlpha = .9;
					context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round((1 - value / maxValue) * GRAPH_HEIGHT));
				}
			};
		};
		return Stats;
	})();
	window.Stats = Stats;
	// 有所修改

	// Include gstatsjs (https://github.com/eXponenta/gstatsjs)
	// https://github.com/eXponenta/gstatsjs/blob/master/dist/gstats.js
	const GStats = (function() {
		"use strict";
		var GStats;
		(function (GStats) {
			var BaseHooks = /** @class */ (function () {
				function BaseHooks() {
					this._drawCalls = -1;
					this._maxDeltaDrawCalls = -1;
				}
				BaseHooks.prototype.attach = function (gl) {
					this.glhook = new GStats.GLHook(gl);
					this.texturehook = new GStats.TextureHook(gl);
				};
				Object.defineProperty(BaseHooks.prototype, "drawCalls", {
					get: function () {
						if (this.glhook && this.glhook.isInit) {
							return this.glhook.drawPasses;
						}
						return -1;
					},
					enumerable: true,
					configurable: true
				});
				Object.defineProperty(BaseHooks.prototype, "maxDeltaDrawCalls", {
					get: function () {
						return this._maxDeltaDrawCalls;
					},
					enumerable: true,
					configurable: true
				});
				Object.defineProperty(BaseHooks.prototype, "deltaDrawCalls", {
					get: function () {
						if (this._drawCalls == -1) {
							this._drawCalls = this.drawCalls;
							return 0;
						}
						var dc = this.drawCalls;
						var delta = dc - this._drawCalls;
						this._drawCalls = dc;
						this._maxDeltaDrawCalls = Math.max(this._maxDeltaDrawCalls, delta);
						return delta;
					},
					enumerable: true,
					configurable: true
				});
				Object.defineProperty(BaseHooks.prototype, "maxTextureCount", {
					get: function () {
						if (this.texturehook && this.texturehook.isInit)
							return this.texturehook.maxTexturesCount;
						return 0;
					},
					enumerable: true,
					configurable: true
				});
				Object.defineProperty(BaseHooks.prototype, "texturesCount", {
					get: function () {
						if (this.texturehook && this.texturehook.isInit)
							return this.texturehook.currentTextureCount;
						return 0;
					},
					enumerable: true,
					configurable: true
				});
				BaseHooks.prototype.reset = function () {
					this._maxDeltaDrawCalls = -1;
					this._drawCalls = -1;
					if (this.glhook)
						this.glhook.reset();
					if (this.texturehook)
						this.texturehook.reset();
				};
				BaseHooks.prototype.release = function () {
					if (this.glhook)
						this.glhook.release();
					if (this.texturehook)
						this.texturehook.release();
				};
				return BaseHooks;
			}());
			GStats.BaseHooks = BaseHooks;
		})(GStats || (GStats = {}));
		var GStats;
		(function (GStats) {
			var GLHook = /** @class */ (function () {
				function GLHook(_gl) {
					this.drawPasses = 0;
					this.isInit = false;
					this.realGLDrawElements = function () { };
					if (_gl) {
						if (_gl.__proto__.drawElements) {
							this.gl = _gl;
							this.realGLDrawElements = _gl.__proto__.drawElements;
							//replace to new function
							_gl.__proto__.drawElements = this.fakeGLdrawElements.bind(this);
							this.isInit = true;
							console.log("[GLHook] GL was Hooked!");
						}
					}
					else {
						console.error("[GLHook] GL can't be NULL");
					}
				}
				GLHook.prototype.fakeGLdrawElements = function (mode, count, type, offset) {
					this.drawPasses++;
					this.realGLDrawElements.call(this.gl, mode, count, type, offset);
				};
				GLHook.prototype.reset = function () {
					this.drawPasses = 0;
				};
				GLHook.prototype.release = function () {
					if (this.isInit) {
						this.gl.__proto__.drawElements = this.realGLDrawElements;
						console.log("[GLHook] Hook was removed!");
					}
					this.isInit = false;
				};
				return GLHook;
			}());
			GStats.GLHook = GLHook;
		})(GStats || (GStats = {}));
		var __extends = (this && this.__extends) || (function () {
			var extendStatics = Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
				function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
			return function (d, b) {
				extendStatics(d, b);
				function __() { this.constructor = d; }
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
		})();
		var GStats;
		(function (GStats) {
			var PhaserHooks = /** @class */ (function (_super) {
				__extends(PhaserHooks, _super);
				function PhaserHooks(game) {
					var _this = _super.call(this) || this;
					if (!game) {
						console.error("[Phaser Hooks]Phaser Game can't passed or NULL");
						return _this;
					}
					var _w = window;
					if (_w.Phaser) {
						var version = _w.Phaser.VERSION;
						if (version.startsWith("3")) {
							if (game.renderer.gl && game.renderer.gl instanceof WebGLRenderingContext) {
								_this.attach(game.renderer.gl);
							}
							else {
								console.error("[Phaser 3 Hooks]Canvas renderer is not allowed");
							}
						}
						else {
							if (game.renderer instanceof PIXI.WebGLRenderer) {
								_this.attach(game.renderer.gl);
							}
							else {
								console.error("[Phaser 2 Hooks]Canvas renderer is not allowed");
							}
						}
					}
					else {
						console.error("[Phaser Hooks] THIS HOOK ONLY FOR PHASER 2CE or PHASER 3!!!!");
					}
					return _this;
				}
				return PhaserHooks;
			}(GStats.BaseHooks));
			GStats.PhaserHooks = PhaserHooks;
		})(GStats || (GStats = {}));
		var GStats;
		(function (GStats) {
			var PIXIHooks = /** @class */ (function (_super) {
				__extends(PIXIHooks, _super);
				function PIXIHooks(app) {
					var _this = _super.call(this) || this;
					if (!app) {
						console.error("PIXI Application can't passed or NULL");
						return _this;
					}
					if (app.renderer instanceof PIXI.WebGLRenderer) {
						_this.attach(app.renderer.gl);
						var start_textures = app.renderer.textureManager._managedTextures;
						if (start_textures && _this.texturehook) {
							console.log("[PIXI Hooks] Collect used textures:", start_textures.length);
							for (var i = 0; i < start_textures.length; ++i) {
								var txr = start_textures[i];
								var gltextures = txr._glTextures;
								for (var j = 0; j < gltextures.length; ++j) {
									if (gltextures[j].gl === app.renderer.gl) {
										_this.texturehook.registerTexture(gltextures[j].texture);
									}
								}
							}
						}
					}
					else {
						console.error("[PIXI Hook]Canvas renderer is not allowed");
					}
					return _this;
				}
				return PIXIHooks;
			}(GStats.BaseHooks));
			GStats.PIXIHooks = PIXIHooks;
		})(GStats || (GStats = {}));
		var GStats;
		(function (GStats) {
			var StatsJSAdapter = /** @class */ (function () {
				function StatsJSAdapter(_hook, _stats) {
					this.hook = _hook;
					if (_stats) {
						this.stats = _stats;
					}
					else {
						this.stats = null;
						if (window.Stats) {
							this.stats = new (window.Stats)();
						}
					}
					if (this.stats) {
						this.dcPanel = this.stats.addPanel(new window.Stats.Panel("DC:", "#330570", "#A69700"));
						this.tcPanel = this.stats.addPanel(new window.Stats.Panel("TC:", "#A62500", "#00B454"));
						this.stats.showPanel(0);
					}
					else {
						console.error("Stats can't found in window, pass instance of Stats.js as second param");
					}
				}
				StatsJSAdapter.prototype.update = function () {
					if (this.stats) {
						if (this.hook) {
							this.dcPanel.update(this.hook.deltaDrawCalls, Math.max(50, this.hook.maxDeltaDrawCalls));
							this.tcPanel.update(this.hook.texturesCount, Math.max(20, this.hook.maxTextureCount));
						}
						this.stats.update();
					}
				};
				StatsJSAdapter.prototype.reset = function () {
					if (this.hook)
						this.hook.reset();
				};
				return StatsJSAdapter;
			}());
			GStats.StatsJSAdapter = StatsJSAdapter;
		})(GStats || (GStats = {}));
		var GStats;
		(function (GStats) {
			var TextureHook = /** @class */ (function () {
				function TextureHook(_gl) {
					this.createdTextures = new Array();
					this.maxTexturesCount = 0;
					this.isInit = false;
					this.realGLCreateTexture = function () { };
					this.realGLDeleteTexture = function () { };
					if (_gl) {
						if (_gl.__proto__.createTexture) {
							this.gl = _gl;
							this.realGLCreateTexture = _gl.__proto__.createTexture;
							this.realGLDeleteTexture = _gl.__proto__.deleteTexture;
							//replace to new function
							_gl.__proto__.createTexture = this.fakeGLCreateTexture.bind(this);
							_gl.__proto__.deleteTexture = this.fakeGLDeleteTexture.bind(this);
							this.isInit = true;
							console.log("[TextureHook] GL was Hooked!");
						}
					}
					else {
						console.error("[TextureHook] GL can't be NULL");
					}
				}
				Object.defineProperty(TextureHook.prototype, "currentTextureCount", {
					get: function () {
						return this.createdTextures.length;
					},
					enumerable: true,
					configurable: true
				});
				TextureHook.prototype.registerTexture = function (texture) {
					this.createdTextures.push(texture); // ++;
					this.maxTexturesCount = Math.max(this.createdTextures.length, this.maxTexturesCount);
				};
				TextureHook.prototype.fakeGLCreateTexture = function () {
					var texture = this.realGLCreateTexture.call(this.gl);
					this.registerTexture(texture);
					return texture;
				};
				TextureHook.prototype.fakeGLDeleteTexture = function (texture) {
					var index = this.createdTextures.indexOf(texture);
					if (index > -1) {
						this.createdTextures.splice(index, 1);
					}
					this.realGLDeleteTexture.call(this.gl, texture);
				};
				TextureHook.prototype.reset = function () {
					this.createdTextures = new Array();
					this.maxTexturesCount = 0;
				};
				TextureHook.prototype.release = function () {
					if (this.isInit) {
						this.gl.__proto__.createTexture = this.realGLCreateTexture;
						this.gl.__proto__.deleteTexture = this.realGLDeleteTexture;
						console.log("[TextureHook] Hook was removed!");
					}
					this.isInit = false;
				};
				return TextureHook;
			}());
			GStats.TextureHook = TextureHook;
		})(GStats || (GStats = {}));
		//# sourceMappingURL=gstats.js.map

		(function (GStats) {
			var PIXIHooksRMMV = /** @class */ (function (_super) {
				__extends(PIXIHooksRMMV, _super);
				function PIXIHooksRMMV(renderer) {
					var _this = _super.call(this) || this;
					if (renderer instanceof PIXI.WebGLRenderer) {
						_this.attach(renderer.gl);
						var start_textures = renderer.textureManager._managedTextures;
						if (start_textures && _this.texturehook) {
							console.log("[PIXI Hooks] Collect used textures:", start_textures.length);
							for (var i = 0; i < start_textures.length; ++i) {
								var txr = start_textures[i];
								var gltextures = txr._glTextures;
								for (var j = 0; j < gltextures.length; ++j) {
									if (gltextures[j].gl === renderer.gl) {
										_this.texturehook.registerTexture(gltextures[j].texture);
									}
								}
							}
						}
					}
					else {
						console.error("[PIXI Hook]Canvas renderer is not allowed");
					}
					return _this;
				}
				return PIXIHooksRMMV;
			}(GStats.BaseHooks));
			GStats.PIXIHooksRMMV = PIXIHooksRMMV;
		})(GStats || (GStats = {}));

		return GStats;
	})();
	window.GStats = GStats;
	// 有所修改


	// Graphics
	(function() {

		const _MK_Graphics_initialize = Graphics.initialize;
		Graphics.initialize = function(width, height, type) {
			this._pixiStatsInst = null;
			this._pixiStatsType = -1;
			this._pixiStatsTypeCount = 0;
			const result = _MK_Graphics_initialize.apply(this, arguments);
			this._createPixiStatsInst();
			return result;
		};

		Graphics._createPixiStatsInst = function() {
			//this._pixiStatsInst = new Stats();
			this._createPixiStatsHooksInst();
			this._pixiStatsJSAdapterInst = new GStats.StatsJSAdapter(this._pixiStatsHooksInst);
			this._pixiStatsInst = this._pixiStatsJSAdapterInst.stats;
			this._pixiStatsTypeCount = this._pixiStatsInst.dom.children.length;
			this._pixiStatsInst.showPanel(this._pixiStatsType);
			document.body.appendChild(this._pixiStatsInst.dom);
		};

		if (CURRENT_ENGINE === 'MV') {
			Graphics._createPixiStatsHooksInst = function() {
				this._pixiStatsHooksInst = new GStats.PIXIHooksRMMV(this._renderer);
				//var gl = this._renderer.gl; // WebGL2RenderingContext;
				//this._pixiStatsHooksInst = new GStats.BaseHooks();
				//this._pixiStatsHooksInst.attach(gl);
			};
		}
		else if (CURRENT_ENGINE === 'MZ') {
			Graphics._createPixiStatsHooksInst = function() {
				//this._pixiStatsHooksInst = new GStats.PIXIHooks(this._app);
				var gl = this._app.renderer.gl; // WebGL2RenderingContext;
				this._pixiStatsHooksInst = new GStats.BaseHooks();
				this._pixiStatsHooksInst.attach(gl);
			};
		}

		Graphics._switchPixiStatsPanel = function(multiMode) {
			if (multiMode) {
				this._pixiStatsType = -2;
				if (this._pixiStatsInst) {
					this._pixiStatsInst.setMultiPanelMode(true);
				}
			}
			else {
				if (++this._pixiStatsType >= this._pixiStatsTypeCount) {
					this._pixiStatsType = -1;
				}
				if (this._pixiStatsInst) {
					this._pixiStatsInst.showPanel(this._pixiStatsType);
				}
			}
		};

		Graphics.hidePixiStatsPanel = function() {
			this._pixiStatsType = -1;
			if (this._pixiStatsInst) {
				this._pixiStatsInst.showPanel(this._pixiStatsType);
			}
		};

		const _MK_Graphics__onKeyDown = Graphics._onKeyDown;
		Graphics._onKeyDown = function(event) {
			if (!!event.ctrlKey && !event.altKey && event.keyCode === 113) {
				// Ctrl + F2
				event.preventDefault();
				this.hideFps();
				this._switchPixiStatsPanel();
			}
			else if (!!event.ctrlKey && !!event.altKey && event.keyCode === 113) {
				// Ctrl + Alt + F2
				event.preventDefault();
				this.hideFps();
				this._switchPixiStatsPanel(true);
			}
			else if (!event.ctrlKey && !event.altKey && event.keyCode === 113) {
				// F2
				this.hidePixiStatsPanel();
				_MK_Graphics__onKeyDown.apply(this, arguments);
			}
			else {
				_MK_Graphics__onKeyDown.apply(this, arguments);
			}
		};

		if (CURRENT_ENGINE === 'MZ') {
			Graphics.FPSCounter.prototype.hide = function() {
				this._boxDiv.style.display = "none";
				this._update();
			};
			Graphics.hideFps = function() {
				if (this._fpsCounter) {
					this._fpsCounter.hide();
				}
			};
		}

		if (CURRENT_ENGINE === 'MV') {
			const _MK_Graphics_tickStart = Graphics.tickStart;
			Graphics.tickStart = function() {
				if (this._pixiStatsInst) {
					this._pixiStatsInst.begin();
				}
				_MK_Graphics_tickStart.apply(this, arguments);
			};
			const _MK_Graphics_tickEnd = Graphics.tickEnd;
			Graphics.tickEnd = function() {
				_MK_Graphics_tickEnd.apply(this, arguments);
				if (this._pixiStatsInst && this._rendered) {
					this._pixiStatsInst.end();
				}
				if (this._pixiStatsJSAdapterInst) {
					this._pixiStatsJSAdapterInst.update();
				}
			};
		}
		else if (CURRENT_ENGINE === 'MZ') {
			const _MK_Graphics__onTick = Graphics._onTick;
			Graphics._onTick = function(deltaTime) {
				this._pixiStatsInst.begin();
				_MK_Graphics__onTick.apply(this, arguments);
				this._pixiStatsJSAdapterInst.update();
				this._pixiStatsInst.end();
			};
		}
	})();
})();



