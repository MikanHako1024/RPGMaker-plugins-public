/*!
 * MKP_InputKeyExtend - v0.1.0
 * Updated : 2024-03-27T00:56:00+0800
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
 * @plugindesc Input按键拓展 <MKP_InputKeyExtend> v0.1.0
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.1.0 (2024-03-27T00:56:00+0800)
 *     完成基本功能
 *   v0.0.0 (2024-03-26T23:31:00+0800) Init File
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
 * Input按键拓展 <MKP_InputKeyExtend> v0.1.0
 * Updated : 2024-03-27T00:56:00+0800
 * 
 * 
 * ## 简要说明
 * 
 * 本插件拓展了 Input类  
 * 通过Input检测按键时，可以区分具体的按键  
 * (仅脚本)  
 * 
 * `Input.isTriggered('escape:88')`  
 * + 检测是否刚按下按键 X键
 * + 其他按键如 Esc键 则无效
 *   - 原版逻辑中 X键 和 Esc键 都可以取消或打开菜单
 * 
 * `Input.isTriggered('escape:27')`  
 * + 检测是否刚按下按键 Esc键
 * + 其他按键如 X键 则无效
 *   - 原版逻辑中 X键 和 Esc键 都可以取消或打开菜单
 * 
 * [兼容原版的检测方法]
 * `Input.isTriggered('escape')`  
 * + 检测是否刚按下按键 X键 或 Esc键 等取消键
 * + 和原版一样
 * 
 * 
 * ## 其他说明
 * 
 * #### 一些按键key
 * 
 * | key         | desc        |
 * | :---------- | :---------- |
 * | ok:13       | enter       |
 * | ok:32       | space       |
 * | ok:90       | Z           |
 * | ----------- | ----------- |
 * | control:17  | control     |
 * | control:18  | alt         |
 * | ----------- | ----------- |
 * | escape:27   | escape      |
 * | escape:45   | insert      |
 * | escape:88   | X           |
 * | escape:96   | numpad 0    |
 * | ----------- | ----------- |
 * | pageup:33   | pageup      |
 * | pageup:81   | Q           |
 * | ----------- | ----------- |
 * | pagedown:34 | pagedown    |
 * | pagedown:87 | W           |
 * | ----------- | ----------- |
 * | left:37     | left arrow  |
 * | left:100    | numpad 4    |
 * | ----------- | ----------- |
 * | up:38       | up arrow    |
 * | up:104      | numpad 8    |
 * | ----------- | ----------- |
 * | right:39    | right arrow |
 * | right:102   | numpad 6    |
 * | ----------- | ----------- |
 * | down:40     | down arrow  |
 * | down:98     | numpad 2    |
 * 
 * 
 * ## 版本支持
 * 
 * 开发环境 : RPG Maker MV v1.6.2 + RPG Maker MZ v1.8.0
 * + MV : 支持
 * + MZ : 支持
 * 
 * 
 * ## 脚本说明
 * 
 * 修改了部分 `Input.keyMapper` 内容  
 * 详见代码  
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

;(function() {
	// core
	const pluginData = {
		MikanPluginDataCoreUpdatedTime : '2024-01-01T013:00:00+0800',
		pluginName : 'MKP_InputKeyExtend',
		pluginVersion : 'v0.1.0',
		pluginUpdatedTime : '2024-03-27T00:56:00+0800',

		support : {
			supportForMV : true,
			notSupportForMV : false,
			engineNameMV : 'MV',
			engineVersionMV : '1.6.2',

			supportForMZ : true,
			notSupportForMZ : false,
			engineNameMZ : 'MZ',
			engineVersionMZ : '1.8.0',
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




;(function() {
	// logic

	const PLUGIN_NAME = 'MKP_InputKeyExtend';

	const CURRENT_ENGINE = (function() {
		const pluginData = MK_PluginData[PLUGIN_NAME];
		return pluginData.getRpgmakerEngine();
	})();

	/**
	 * Input 区分具体按键
	 * 
	 * keyNameA: Input内部按键状态key
	 * keyNameB: 检测按键key
	 * 
	 * 玩家按了Z键 Input内部标记按键状态 ok:90
	 * 此时通过 Input.isPressed 检测按键 ok
	 * 将会调用 _keyNameAIsBCompatible 检查按键名是否兼容 A = ok:90 , B = ok
	 * 'ok:90'(A) 开头包含 'ok:'(B:) 所以结果是按键名兼容 返回 true
	 * 
	 * 玩家按了space键(空格键) Input内部标记按键状态 ok:32
	 * 此时通过 Input.isPressed 检测按键 ok:32
	 * 将会调用 _keyNameAIsBCompatible 检查按键名是否兼容 A = ok:32 , B = ok:32
	 * 'ok:32'(A) 完全等于 'ok:32'(B) 所以结果是按键名兼容 返回 true
	 * 
	 * 玩家按了enter键(回车键) Input内部标记按键状态 ok:13
	 * 此时通过 Input.isPressed 检测按键 ok:90
	 * 将会调用 _keyNameAIsBCompatible 检查按键名是否兼容 A = ok:13 , B = ok:90
	 * 'ok:13'(A) 不完全等于 'ok:90'(B) 同时 开头不包含 'ok:90:'(B:)
	 * 所以结果是按键名不兼容 返回 false
	 * 
	 * @method _keyNameAIsBCompatible
	 * @for Input
	 * @static
	 * @param {string} Input内部按键状态key
	 * @param {string} 检测按键key
	 * @return {boolean} 按键名是否兼容
	 */
	Input._keyNameAIsBCompatible = function(keyNameA, keyNameB) {
		return keyNameA === keyNameB
			|| (typeof keyNameA === 'string' && keyNameA.startsWith(keyNameB + ':'));
	};

	Input.isPressed = function(keyName) {
		// copy from : rpg_core.js - Input.isPressed
		if (this._isEscapeCompatible(keyName) && this.isPressed('escape')) {
			return true;
		} else if (this._currentState[keyName]) {
			return true;
		} else {
			for (const name in this._currentState) {
				if (this._currentState[name]) {
					if (this._keyNameAIsBCompatible(name, keyName)) {
						return true;
					}
				}
			}
			return false;
		}
	};

	Input.isTriggered = function(keyName) {
		// copy from : rpg_core.js - Input.isTriggered
		if (this._isEscapeCompatible(keyName) && this.isTriggered('escape')) {
			return true;
		} else {
			return this._keyNameAIsBCompatible(this._latestButton, keyName)
				&& this._pressedTime === 0;
		}
	};

	Input.isRepeated = function(keyName) {
		// copy from : rpg_core.js - Input.isRepeated
		if (this._isEscapeCompatible(keyName) && this.isRepeated('escape')) {
			return true;
		} else {
			return (this._keyNameAIsBCompatible(this._latestButton, keyName)
				&& (this._pressedTime === 0 
					|| (this._pressedTime >= this.keyRepeatWait &&
						this._pressedTime % this.keyRepeatInterval === 0)
				));
		}
	};

	Input.isLongPressed = function(keyName) {
		// copy from : rpg_core.js - Input.isLongPressed
		if (this._isEscapeCompatible(keyName) && this.isLongPressed('escape')) {
			return true;
		} else {
			return this._keyNameAIsBCompatible(this._latestButton, keyName)
				&& this._pressedTime >= this.keyRepeatWait;
		}
	};

	(function() {

		const keyMapper = Input.keyMapper;
		keyMapper[13] = 'ok:13';       // enter
		keyMapper[17] = 'control:17';  // control
		keyMapper[18] = 'control:18';  // alt
		keyMapper[27] = 'escape:27';   // escape
		keyMapper[32] = 'ok:32';       // space
		keyMapper[33] = 'pageup:33';   // pageup
		keyMapper[34] = 'pagedown:34'; // pagedown
		keyMapper[37] = 'left:37';     // left arrow
		keyMapper[38] = 'up:38';       // up arrow
		keyMapper[39] = 'right:39';    // right arrow
		keyMapper[40] = 'down:40';     // down arrow
		keyMapper[45] = 'escape:45';   // insert
		keyMapper[81] = 'pageup:81';   // Q
		keyMapper[87] = 'pagedown:87'; // W
		keyMapper[88] = 'escape:88';   // X
		keyMapper[90] = 'ok:90';       // Z
		keyMapper[96] = 'escape:96';   // numpad 0
		keyMapper[98] = 'down:98';     // numpad 2
		keyMapper[100] = 'left:100';   // numpad 4
		keyMapper[102] = 'right:102';  // numpad 6
		keyMapper[104] = 'up:104';     // numpad 8
	})();

	(function() {

		return;

		// for debug

		const _MK_Scene_Map_updateMain = Scene_Map.prototype.updateMain;
		Scene_Map.prototype.updateMain = function() {
			//_MK_Scene_Map_updateMain.apply(this, arguments);

			const list = [
				'ok',
				'control',
				'escape',
				'pageup',
				'pagedown',
				'left',
				'up',
				'right',
				'down',
				'ok:13',
				'control:17',
				'control:18',
				'escape:27',
				'ok:32',
				'pageup:33',
				'pagedown:34',
				'left:37',
				'up:38',
				'right:39',
				'down:40',
				'escape:45',
				'pageup:81',
				'pagedown:87',
				'escape:88',
				'ok:90',
				'escape:96',
				'down:98',
				'left:100',
				'right:102',
				'up:104',
			];
			const triggered = [];
			for (const key of list) {
				if (Input.isTriggered(key)) {
					triggered.push(key);
				}
			}
			if (triggered.length > 0) {
				console.log(triggered.join(' '));
			}
		};
	})();
})();



