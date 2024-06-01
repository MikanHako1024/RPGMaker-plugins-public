/*!
 * MKP_CustomizablePluginCmd - v0.2.1.fix2
 * Updated : 2024-06-01T19:13:00+0800
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
 * @plugindesc 自定义插件指令 <MKP_CustomizablePluginCmd> v0.2.1.fix2
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024
 * @version 
 *   v0.2.1.fix2 (2024-06-01T19:13:00+0800) 
 *     修复 MZ无法执行MV的插件指令 的问题
 *   v0.2.1.fix1 (2024-05-31T22:32:00+0800) 
 *     补充缺少的参数结构 PluginCmdUnit
 *   v0.2.1 (2024-01-06T20:04:00+0800) 
 *     更新插件模板
 *   v0.2.0 (2023-04-11T01:55:00+0800) 
 *     增加 转换插件指令中控制字符的功能
 *   v0.1.0 (2023-04-09T16:43:00+0800) 
 *     完成基本功能
 *   v0.0.0 (2023-04-09T15:33:00+0800) Init File
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
 * 自定义插件指令 <MKP_CustomizablePluginCmd> v0.2.1.fix2
 * Updated : 2024-06-01T19:13:00+0800
 * 
 * 
 * ## 简要说明
 * 
 * [自定义插件指令]  
 * 本插件可以自定义插件指令  
 * 自定义插件指令会将参数设置到变量，并执行公共事件  
 * 
 * [插件指令变量参数]  
 * 在一条插件指令前加上`ConvertCmd`  
 * 可以将插件指令中的 \V,\N 等控制字符转换成对应的值  
 * 详见【插件指令】  
 * (需要将本插件置于插件管理器列表的末位)  
 * 
 * [MZ执行MV的插件指令]  
 * MZ中使用【插件指令】-【插件指令MV】 还可以执行MV的插件指令  
 * (不保证 MV的插件一定兼容MZ)  
 * 
 * 
 * ## 使用方法
 * 
 * 在插件参数【自定义插件指令】中添加自定义插件指令  
 * MV中 : 直接使用【插件指令】 调用自定义插件指令  
 * MZ中 : 使用【插件指令】-【插件指令MV】 调用自定义插件指令  
 * 
 * 
 * ## 版本支持
 * 
 * 开发环境 : RPG Maker MV v1.6.2 + RPG Maker MZ v1.7.0
 * + MV : 支持
 * + MZ : 支持
 * 
 * 
 * ## 插件指令 (MV)
 * 
 * | description           | command                      |
 * | :-------------------- | :--------------------------- |
 * | 转换参数             | `ConvertCmd [原插件指令]`  |
 * | 转换参数并重新切分 | `ConvertCmdRe [原插件指令]` |
 * 
 * #### 转换参数
 * 在一条插件指令前加上`ConvertCmd`  
 * 可以将插件指令中的 \V,\N 等控制字符转换成对应的值  
 * 就像【显示文本】的转换一样  
 * Ps:不会重新切分参数  
 *    如 \N[1]="ab cd" 转换后 "ab cd"将是一个整体 不会视作两个参数  
 * 
 * `ConvertCmd [原插件指令]`
 *   + 示例
 *     * 使用变量#2的值作为 SetBtnPic 的第一个参数 :
 *     * `ConvertCmd SetBtnPic \V[2] 3`
 *   + ConvertCmd
 *     - 主命令
 *     - 固定写法，区分大小写
 *   + [原插件指令]
 *     - 需要转换参数的插件指令
 * 
 * #### 转换参数并重新切分
 * 类似【转换参数】，但会重新切分参数  
 * 如 \N[1]="ab cd" 转换后 "ab cd"将会切分空格 而视作两个参数  
 * 
 * `ConvertCmdRe [原插件指令]`
 *   + ConvertCmdRe
 *     - 主命令
 *     - 固定写法，区分大小写
 *   + [原插件指令]
 *     - 需要转换参数的插件指令
 * 
 * 
 * ## 插件指令 (MZ)
 * 
 * | description        |
 * | :----------------- |
 * | 转换参数           |
 * | 转换参数并重新切分 |
 * 
 * 
 * ## 使用示例
 * 
 * 在插件参数【自定义插件指令】中添加一条自定义插件指令  
 * - 公共事件 = 1
 * - 命令 = My_Test
 * - 参数 = [2,3]
 * 对应插件指令 : `My_Test 参数1 参数2`  
 * 如 `My_Test aa bb` (区分大小写)  
 * 插件指令将设置 变量#2=aa, 变量#3=bb 对应【参数】的配置  
 * 并执行公共事件#1 对应【公共事件】的配置  
 * 
 * 
 * ## 其他说明
 * 
 * 将一个字符串写入变量  
 * 示例为将字符串 abcd 写入变量#3  
 * + 【脚本】 : $gameVariables.setValue(3, "abcd");
 * + 或 【变量操作】 - 【脚本】 : "abcd"
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
 * @command CallPluginCmd
 * @text 插件指令MV
 * @desc MZ执行MV的插件指令
 * 
 *   @arg cmd
 *   @text 插件指令
 *   @desc 
 *   @type string
 *   @default 
 * 
 * 
 * 
 * 
 * @param ---- startline ----
 * 
 * @param CustomCommands
 * @text 自定义插件指令
 * @desc e.g. 公共事件=1 命令=My_Test 参数=[2,3] 对应插件指令:
 * `My_Test aa bb` 将设置变量#2=aa,#3=bb 并执行公共事件#1
 * @type struct<PluginCmdUnit>[]
 * @default []
 * 
 * @param ---- endline ----
 * 
 */
/*~struct~PluginCmdUnit:
 * 
 * @param _
 * @text 描述
 * @desc 描述, 可自由修改
 * @type note
 * @default 
 * 
 * @param eid
 * @text 公共事件
 * @desc 
 * @type common_event
 * @default 0
 * 
 * @param cmd
 * @text 命令
 * @desc 自定义插件指令的命令名
 * 不可包含空格，可用空格以外的任意字符
 * @type string
 * @default 
 * 
 * @param vars
 * @text 参数
 * @desc 自定义插件指令的参数
 * 插件指令的参数将依次储存到对应变量
 * @type variable[]
 * @default []
 */




"use strict";

var MK_PluginData = MK_PluginData || {};

;(function() {
	// core
	const pluginData = {
		MikanPluginDataCoreUpdatedTime : '2024-01-01T013:00:00+0800',
		pluginName : 'MKP_CustomizablePluginCmd',
		pluginVersion : 'v0.2.1.fix2',
		pluginUpdatedTime : '2024-06-01T19:13:00+0800',

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
	// parser
	const pluginData = MK_PluginData['MKP_CustomizablePluginCmd'];

	const paramParser = pluginData.paramParser;

	const numberParser  = paramParser['numberParser' ];
	const stringParser  = paramParser['stringParser' ];
	const booleanParser = paramParser['booleanParser'];
	const structParser  = paramParser['structParser' ];
	const listParser    = paramParser['listParser'   ];

	function structPluginCmdUnitParser(str, defVal) {
		var data = Object.assign({
			eid : 0, 
			cmd : '', 
			vars : '[]', 
		}, structParser(str || defVal));
		data._ = '';
		data.eid = numberParser(data.eid, 0);
		data.cmd = stringParser(data.cmd, '');
		data.vars = listParser(numberParser, data.vars || '[]');
		return data;
	};
	paramParser['structPluginCmdUnitParser'] = structPluginCmdUnitParser;

	function listStructPluginCmdUnitParser(str, defVal) {
		var data = listParser(structPluginCmdUnitParser, str || defVal);
		return data;
	};
	paramParser['listStructPluginCmdUnitParser'] = listStructPluginCmdUnitParser;
})();

;(function() {
	// param
	const pluginData = MK_PluginData['MKP_CustomizablePluginCmd'];

	const paramParser = pluginData.paramParser;

	const numberParser  = paramParser['numberParser' ];
	const stringParser  = paramParser['stringParser' ];
	const booleanParser = paramParser['booleanParser'];
	const structParser  = paramParser['structParser' ];
	const listParser    = paramParser['listParser'   ];

	const listStructPluginCmdUnitParser = paramParser['listStructPluginCmdUnitParser'];


	const config = [];

	config.push(['CustomCommands', listStructPluginCmdUnitParser, '[]']);

	const paramSource = pluginData.fetchMyPluginParam();
	const param = pluginData.param;
	config.forEach(arr => param[arr[0]] = arr[1](paramSource[arr[0]], arr[2]));
})();




// ？改 自定义插件指令的参数可以设置成需要转换控制字符 ...

// ？为 任意插件指令中 特殊标识如 ${} 包裹控制字符 表示需要转换控制字符 ...
// ？如 Command Arg1 ${\V[2]}

// ？或 使用前缀型插件指令调用下一条插件指令，并转换下一条插件指令的控制字符 ...
// ？如 ConvertCmd  ,  Command Arg1 \V[2]

// ？或 直接在原插件指令前加一个命令表示需要转换 ...
// ？如 ConvertCmd Command Arg1 \V[2]




;(function() {
	// logic

	const PLUGIN_NAME = 'MKP_CustomizablePluginCmd';

	const PLUGIN_PARAMS = (function() {
		const pluginData = MK_PluginData[PLUGIN_NAME];
		const param = pluginData.param;
		return Object.assign({}, param);
	})();

	const CURRENT_ENGINE = (function() {
		const pluginData = MK_PluginData[PLUGIN_NAME];
		return pluginData.getRpgmakerEngine();
	})();


	Game_Interpreter.prototype.customPluginCommand = function(command, args) {
		for (var each of PLUGIN_PARAMS.CustomCommands) {
			if (command == each.cmd) {
				for (var i = 0, l = each.vars.length; i < l; ++i) {
					$gameVariables.setValue(each.vars[i], args[i] || '');
				}

				// copy from : rpg_objects.js - Game_Interpreter.prototype.command117
				var commonEvent = $dataCommonEvents[each.eid];
				if (commonEvent) {
					var eventId = this.isOnCurrentMap() ? this._eventId : 0;
					this.setupChild(commonEvent.list, eventId);
					return true;
				}
			}
		}
	};


	Game_Interpreter._MK_argConverter = null;

	Game_Interpreter.MK_converterArg = function(text) {
		if (!this._MK_argConverter) {
			this._MK_argConverter = new Window_Base();
		}
		text = arguments.length >= 1 ? String(text) : '';
		return this._MK_argConverter.convertEscapeCharacters(text);
	};

	Game_Interpreter.prototype.MK_convertArgs = function(args, resplit) {
		if (resplit) {
			return Game_Interpreter.MK_converterArg(args.join(' ')).split(' ');
		}
		else {
			return args.map(each => Game_Interpreter.MK_converterArg(each));
		}
	};
})();




;(function() {
	// command

	const PLUGIN_NAME = 'MKP_CustomizablePluginCmd';
	const REAL_PLUGIN_NAME = MK_PluginData[PLUGIN_NAME].fetchMyRealPluginName();

	const ParamParser = (function() {
		const pluginData = MK_PluginData[PLUGIN_NAME];
		return pluginData.paramParser;
	})();

	const CURRENT_ENGINE = (function() {
		const pluginData = MK_PluginData[PLUGIN_NAME];
		return pluginData.getRpgmakerEngine();
	})();

	if (CURRENT_ENGINE === 'MV') {
		const _MK_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
		Game_Interpreter.prototype.pluginCommand = function(command, args) {
			var realCommand = command;
			var realArgs = args;
			if (command === 'ConvertCmd') {
				realArgs = this.MK_convertArgs(args, false);
				realCommand = realArgs.shift();
			}
			else if (command === 'ConvertCmdResplit' || command === 'ConvertCmdRe') {
				realArgs = this.MK_convertArgs(args, true);
				realCommand = realArgs.shift();
			}
			_MK_Game_Interpreter_pluginCommand.call(this, realCommand, realArgs);
			this.customPluginCommand.call(this, realCommand, realArgs);
		};
	}

	if (CURRENT_ENGINE === 'MZ') {
		function registerCommand(commandName, func) {
			var pluginName = REAL_PLUGIN_NAME;
			PluginManager.registerCommand(pluginName, commandName, func);
		}

		Game_Interpreter.prototype.MK_pluginCommandLikeMVForMZ = function(command, args) {
			var realCommand = command;
			var realArgs = args;
			if (command === 'ConvertCmd') {
				realArgs = this.MK_convertArgs(args, false);
				realCommand = realArgs.shift();
			}
			else if (command === 'ConvertCmdResplit' || command === 'ConvertCmdRe') {
				realArgs = this.MK_convertArgs(args, true);
				realCommand = realArgs.shift();
			}
			_MK_Game_Interpreter_pluginCommand.call(this, realCommand, realArgs);
			this.customPluginCommand.call(this, realCommand, realArgs);
		};

		registerCommand('CallPluginCmd', function(args) {
			const cmd = ParamParser.stringParser(args.cmd, '');
			// copy from : rpg_objects.js - Game_Interpreter.prototype.command356
			const mvArgs = cmd.split(" ");
			const mvCommand = mvArgs.shift();
			this.MK_pluginCommandLikeMVForMZ(mvCommand, mvArgs);
			return true;
		});
	}
})();



