/*!
 * MKP_SpriteAnimationSet - v0.2.4
 * Updated : 2024-02-19T04:11:00+0800
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
 * @plugindesc 精灵动画集 <MKP_SpriteAnimationSet> v0.2.4
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.2.4 (2024-02-19T04:11:00+0800)
 *     更新插件模板
 *     增加对 MZ 的支持
 *   v0.2.3.branch1 (2021-08-22T00:00:00+0800)
 *     清理冗余注释、完善插件说明
 *   v0.2.3-alpha (2021-08-21T00:00:00+0800)
 *     完成卡拉OK效果
 *   v0.2.2 (2021-08-19T00:00:00+0800)
 *     增加动画类的名称、调整动画类code、考虑带脸图的消息框的文字居中样式
 *   v0.2.1 (2021-08-18T00:00:00+0800)
 *     调整框架、增加文本样式基类
 *       删除允许添加目标的标签
 *       修复变量名错误
 *       增加文本样式动画基类、增加文本居中样式动画类
 *   v0.2.0-alpha (2021-08-18T00:00:00+0800)
 *     更新框架 : TextSprite解耦
 *   v0.1.0.branch1 (2021-08-17T00:00:00+0800)
 *     清理冗余注释
 *   v0.1.0 (2021-08-17T00:00:00+0800)
 *     最初的版本
 *       从MKP_SpriteAnimManager中分离出 处理精灵动画播放效果的框架和所有的精灵动画类
 *   v0.0.0 (2021-08-17T00:00:00+0800) Init File
 *     项目计划中
 * 
 * @sourcecode 发布版插件可能压缩了代码，如有需要源代码，可以联系插件作者
 * 
 * 
 * 
 * 
 * @target MV MZ
 * 
 * @base MKP_TextSprite
 * @orderAfter MKP_TextSprite
 * @orderBefore MKP_SpriteAnimManager
 * 
 * 
 * @help
 * 
 * 精灵动画集 <MKP_SpriteAnimationSet> v0.2.4
 * Updated : 2024-02-19T04:11:00+0800
 * 
 * 
 * ## 简要说明
 * 
 * 完成精灵动画功能的三个插件之一  
 * + 插件`MKP_TextSprite`
 *   - 用于支持绘制和控制播放动画等
 * + 插件`MKP_SpriteAnimationSet`(本插件)
 *   - 用于提供处理动画效果等
 * + 插件`MKP_SpriteAnimManager`
 *   - 用于设置动画和动画参数、处理消息框文字播放动画等
 * 
 * 本插件提供动画效果，本身无需配置插件参数和使用插件指令  
 * 文本动画的描述和参数列表 见 【其他说明】  
 * 
 * 
 * ## 使用方法
 * 
 * 按顺序导入 完成精灵动画功能的三个插件  
 * + MKP_TextSprite
 * + MKP_SpriteAnimationSet
 * + MKP_SpriteAnimManager
 * 
 * 配置和使用 见插件【MKP_SpriteAnimManager】和【MKP_TextSprite】  
 * 
 * 
 * ## 版本支持
 * 
 * 开发环境 : RPG Maker MV v1.6.2 + RPG Maker MZ v1.8.0
 * + MV : 支持
 * + MZ : 支持
 * 
 * 
 * ## 其他说明
 * 
 * #### MOG_AnimatedText动画列表
 * 以下动画效果来自 插件[`MOG_AnimatedText`](https://github.com/DrillUp/drill_plugins/blob/master/js/plugins/MOG_AnimatedText.js)  
 * 注 : id 为 默认动画id  
 * 
 * | id | 动画效果 | 动画名  | 动画描述 |
 * | :- | :------- | :-----  | :------- |
 * |  2 | 淡入淡出 | Fade     | (todo) |
 * |  3 | 缩放     | Zoom     | (todo) |
 * |  4 | 翻转     | Zoom2    | (todo) |
 * |  5 | 上下出现(未完成) | Wipe     | (todo) |
 * |  6 | 震动     | Shake    | (todo) |
 * |  7 | 剧烈缩放 | Zoom3    | (todo) |
 * |  8 | 波浪缩放 | Wave     | (todo) |
 * |  9 | 旋涡     | Rotation | (todo) |
 * | 10 | 摇晃     | Swing    | (todo) |
 * | 11 | 随机     | Random   | (todo) |
 * 
 * #### 新增动画列表概要
 * 以下动画效果为新增的动画  
 * 注 : id 为 默认动画id  
 * 
 * | id | 动画效果 | 动画名  | 动画描述 |
 * | :- | :------- | :-----  | :------- |
 * | 32 | 卡拉OK   | Karaoke | 模仿卡拉OK播放的效果 |
 * 
 * #### 文本格式动画列表概要
 * 以下动画效果为设置文字样式的动画  
 * 注 : id 为 默认动画id  
 * 
 * | id | 动画效果 | 动画名  | 动画描述 |
 * | :- | :------- | :-----  | :------- |
 * | 52 | 文字居中 | TextCenter | 让显示的文字动态居中 |
 * 
 * #### 动画参数
 * 
 * + 2 - 缩放 - Zoom
 * | 序号 | 描述             | 参数名       | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------     | :---------   | :----- | :----- | :--- |
 * |   0  | 初始不透明度     | opacityStart | 数值   | 0      |  |
 * |   1  | 结束不透明度     | opacityEnd   | 数值   | 255    |  |
 * |   2  | 不透明度变化速度 | opacitySpeed | 数值   | 5      |  |
 * 
 * + 3 - 淡入淡出 - Fade
 * | 序号 | 描述             | 参数名       | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------     | :---------   | :----- | :----- | :--- |
 * |   0  | 初始不透明度     | opacityStart | 数值  | 0     |  |
 * |   1  | 结束不透明度     | opacityEnd   | 数值  | 255   |  |
 * |   2  | 不透明度变化速度 | opacitySpeed | 数值  | 4     |  |
 * |   3  | 初始X缩放        | scaleXStart  | 数值  | 2.0   |  |
 * |   4  | 结束X缩放        | scaleXEnd    | 数值  | 1.0   |  |
 * |   5  | X缩放变化速度    | scaleXSpeed  | 数值  | -0.04 |  |
 * |   6  | 初始Y缩放        | scaleYStart  | 数值  | 2.0   |  |
 * |   7  | 结束Y缩放        | scaleYEnd    | 数值  | 1.0   |  |
 * |   8  | Y缩放变化速度    | scaleYSpeed  | 数值  | -0.04 |  |
 * 
 * + 4 - 翻转 - Zoom2
 * | 序号 | 描述             | 参数名       | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------     | :---------    | :----- | :----- | :--- |
 * |   0  | 初始不透明度     | opacityStart  | 数值  | 0     |  |
 * |   1  | 结束不透明度     | opacityEnd    | 数值  | 255   |  |
 * |   2  | 不透明度变化速度 | opacitySpeed | 数值  | 4     |  |
 * |   3  | 初始X缩放        | scaleXStart  | 数值  | -1.0  |  |
 * |   4  | 结束X缩放        | scaleXEnd    | 数值  | 1.0   |  |
 * |   5  | X缩放变化速度    | scaleXSpeed  | 数值  | 0.02  |  |
 * |   6  | 初始Y缩放        | scaleYStart  | 数值  | 2.0   |  |
 * |   7  | 结束Y缩放        | scaleYEnd    | 数值  | 1.0   |  |
 * |   8  | Y缩放变化速度    | scaleYSpeed  | 数值  | -0.02 |  |
 * 
 * + 5 - 上下出现 - Wipe
 * 
 * + 6 - 震动 - Shake
 * | 序号 | 描述                | 参数名          | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------        | :---------      | :----- | :----- | :--- |
 * |   0  | 震动间隔(帧数)      | shakeWaitCount  | 数值  | 3     |  |
 * |   1  | 震动幅度(像素)      | shakeAmplitude  | 数值  | 3     |  |
 * |   2  | 是否停止(0不停;1停) | shakeNeedStop   | 0或1  | 0     |  |
 * |   3  | 震动总计数(若停止)  | shakeTotalCount | 数值  | 12   |  |
 * 
 * + 7 - 剧烈缩放 - Zoom3
 * | 序号 | 描述              | 参数名         | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------      | :---------     | :----- | :----- | :--- |
 * |   0  | 初始不透明度      | opacityStart   | 数值  | 0      |  |
 * |   1  | 结束不透明度      | opacityEnd     | 数值  | 255    |  |
 * |   2  | 不透明度变化速度  | opacitySpeed   | 数值  | 20     |  |
 * |   3  | 初始X缩放         | scaleXStart    | 数值  | 4.0    |  |
 * |   4  | 结束X缩放         | scaleXEnd      | 数值  | 1.0    |  |
 * |   5  | X缩放变化速度     | scaleXSpeed    | 数值  | -0.2   |  |
 * |   6  | 初始Y缩放         | scaleYStart    | 数值  | 4.0    |  |
 * |   7  | 结束Y缩放         | scaleYEnd      | 数值  | 1.0    |  |
 * |   8  | Y缩放变化速度     | scaleYSpeed    | 数值  | -0.2   |  |
 * |   9  | 震动间隔(帧数)    | shakeWaitCount | 数值  | 3      |  |
 * |  10  | 震动幅度(像素)    | shakeAmplitude | 数值  | 3      |  |
 * |  11  | 是否停止          | shakeNeedStop   | 0或1  | 0     | 0不停;1停 |
 * |  12  | 震动总计数        | shakeTotalCount | 数值  | 12    | 若停止 |
 * 
 * + 8 - 剧烈缩放 - Zoom3
 * | 序号 | 描述       | 参数名     | 值类型 | 默认值 | 备注 |
 * | :--- | :-------   | :--------- | :----- | :----- | :--- |
 * |   0  | 缩放速度   | scaleSpeed | 数值   | 0.015  |  |
 * |   1  | 缩放帧数   | scaleCount | 数值   | 30     | 来或回一次的 |
 * |   2  | 总循环次数 | loopTotal  | 数值   | 1      |  |
 * 
 * + 9 - 旋涡 - Rotation
 * 
 * + 10 - 摇晃 - Swing
 * | 序号 | 描述         | 参数名       | 值类型 | 默认值 | 备注 |
 * | :--- | :---------   | :---------    | :----- | :----- | :--- |
 * |   0  | 旋转速度     | rotateSpeed    | 数值  | 0.02  | 角度/帧 |
 * |   1  | 初始旋转方向 | rotateInitDir  | 文本  | R     | L逆;R顺 |
 * |   2  | 初始角度     | angleInit      | 数值  | 0     | 正顺;负逆 |
 * |   3  | 角度左范围   | angleRangeL    | 数值  | -0.4  |  |
 * |   4  | 角度右范围   | angleRangeR    | 数值  | 0.4   |  |
 * 
 * + 11 - 随机 - Random
 * | 序号 | 描述             | 参数名        | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------     | :---------    | :----- | :----- | :--- |
 * |   0  | 初始不透明度     | opacityStart  | 数值   | 0     |  |
 * |   1  | 结束不透明度     | opacityEnd    | 数值   | 255   |  |
 * |   2  | 不透明度变化速度 | opacitySpeed  | 数值   | 4     |  |
 * |   3  | 缩放最小范围     | scaleRangeMin | 数值   | 0.7   |  |
 * |   4  | 缩放最大范围     | scaleRangeMax | 数值   | 1.4   |  |
 * |   5  | 旋转范围         | rotateRange   | 数值   | 0.4   |  |
 * |   6  | 旋转方向         | rotateDir     | 文本   | R     | L逆;R顺 |
 * 
 * + 32 - 卡拉OK - Karaoke
 * | 序号 | 描述               | 参数名       | 值类型 | 默认值 | 备注 |
 * | :--- | :-----------       | :---------   | :----- | :----- | :--- |
 * |   0  | krc歌词数据        | krcContents  | 文本  | 略      | krc歌词处理后的JSON数据 |
 * |   1  | 音频文件名         | audioName    | 文本  | 略      | 路径`audio/bgs` |
 * |   2  | 歌词偏移           | lyricOffset  | 数值  | 略      |  |
 * |   3  | 窗口左右间隔       | widthPadding | 数值  | 0       |  |
 * |   4  | 歌词行间隔         | lineSpace    | 数值  | 10      |  |
 * |   5  | 最小等待点数量     | minWaitPoint | 数值  | 3       |  |
 * |   6  | 最大等待点数量     | maxWaitPoint | 数值  | 5       |  |
 * |   7  | 等待点半径         | pointRadius  | 数值  | 12      |  |
 * |   8  | 等待点颜色         | pointColor   | 文本  | blue    | 颜色 |
 * |   9  | 等待点宽间隔       | pointWSpace  | 数值  | 10      |  |
 * |  10  | 等待点高间隔       | pointHSpace  | 数值  | 6       |  |
 * |  11  | 边框线宽           | lineWidth    | 数值  | 4       |  |
 * |  12  | 播放后文本边框颜色 | uLineColor   | 文本  | #FFFFFF | 颜色 |
 * |  13  | 播放后文本颜色     | uTextColor   | 文本  | #0000FF | 颜色 |
 * |  14  | 播放前文本边框颜色 | dLineColor   | 文本  | #000000 | 颜色 |
 * |  15  | 播放前文本颜色     | dTextColor   | 文本  | #FFFFFF | 颜色 |
 * krc歌词处理后的JSON数据结构 :  
 * ```
 * {
 *   // 所有歌词行
 *   lyricLines : [
 *     // 第一行的数据
 *     {
 *       start : 100, // 行开始时间
 *       duration : 200, // 行持续时间
 *       content : [
 *         // 第一个字的数据
 *         {
 *           start : 0, // 字开始时间
 *           duration : 50, // 字持续时间
 *           text : 'A'
 *         },
 *         // 第二个字的数据
 *         {
 *           start : 50,
 *           duration : 150,
 *           text : 'B'
 *         },
 *         ...
 *       ]
 *     },
 *     // 第二行的数据
 *     {},
 *     ...
 *   ], 
 *   // 原krc中的各行内容
 *   sourceLines : [
 *     '',
 *     '',
 *     ...
 *   ]
 * }
 * ```
 * 
 * + 52 - 文字居中 - TextCenter
 * 暂无参数  
 * 
 * 
 * ## 用语说明
 * 
 * TODO  
 * 
 * 
 * ## 脚本说明
 * 
 * TODO : 开发方法  
 * 
 * 
 * ## 后续任务
 * 
 * - [x] 制作卡拉OK效果
 * - [x] 尝试利用动画类完成其他的功能，比如文字居中
 * - [x] 更新插件说明
 * - [ ] 优化文本居中样式动画，缓存计算信息，并记录
 * - [ ] target对象的类和接口
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
		pluginName: "MKP_SpriteAnimationSet",
		pluginVersion: "v0.2.4",
		pluginUpdatedTime: "2024-02-19T04:11:00+0800",
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
	const PLUGIN_NAME = "MKP_SpriteAnimationSet";
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
		(function() {})();
		function MK_SpriteAnimBase() {
			this.initialize.apply(this, arguments);
		}
		MK_SpriteAnimBase.prototype = Object.create(Object.prototype);
		MK_SpriteAnimBase.prototype.constructor = MK_SpriteAnimBase;
		MK_SpriteAnimBase.prototype.initialize = function(code, ...args) {
			this.initAnimCode(code);
			this._paramMapTable = {};
			this.initParamMapTable();
			this._targets = [];
			this._phase = 0;
			this._flagAuto = true;
			this._flagPlay = false;
			this._flagPause = false;
			this._flagContinue = false;
			this._flagStop = false;
			this._flagInit = false;
			this._flagEnabled = true;
			this.onCreate(...args);
		};
		(function() {
			MK_SpriteAnimBase._DEFAULT_ANIM_CODE = 0;
			MK_SpriteAnimBase.prototype.getDefaultAnimCode = function() {
				return this.constructor._DEFAULT_ANIM_CODE;
			};
			MK_SpriteAnimBase.prototype.getAnimCode = function() {
				return this._animCode;
			};
			MK_SpriteAnimBase.prototype.setAnimCode = function(code) {
				this._animCode = code;
			};
			MK_SpriteAnimBase.prototype.initAnimCode = function(code) {
				this.setAnimCode(code || this.getDefaultAnimCode());
			};
		})();
		(function() {
			MK_SpriteAnimBase._DEFAULT_ANIM_NAME = "SpriteAnimBase";
		})();
		(function() {
			MK_SpriteAnimBase.prototype.setTargets = function(sprites, datas) {
				if (!Array.isArray(sprites)) sprites = [ sprites ];
				if (!Array.isArray(datas)) datas = [ datas ];
				this.initTargets();
				sprites.forEach(function(s, i) {
					this.addTarget(s, datas[i] || {});
				}, this);
			};
			MK_SpriteAnimBase.prototype.getTargets = function() {
				return this._targets || [];
			};
			MK_SpriteAnimBase.prototype.getTarget = function(index) {
				if (typeof index == "number") {
					return this._targets[index];
				} else {
					return this._targets[0];
				}
			};
			MK_SpriteAnimBase.prototype.initTargets = function() {
				this._targets = [];
			};
		})();
		(function() {
			MK_SpriteAnimBase.prototype.createTargetObjWithVar = function(sprite, data, varObj) {
				return {
					sprite: sprite || null,
					data: data || {},
					var: varObj || {}
				};
			};
			MK_SpriteAnimBase.prototype.createTargetObj = function(sprite, data) {
				return this.createTargetObjWithVar(sprite, data);
			};
		})();
		(function() {
			MK_SpriteAnimBase.prototype.addTarget = function(sprite, data) {
				var targetObj = this.createTargetObj(sprite, data);
				this._targets.push(targetObj);
				var args = [ ...arguments ].splice(1);
				this.onAddTarget(targetObj, ...args);
			};
			MK_SpriteAnimBase.prototype.onAddTarget = function(targetObj) {
				this.onInitTarget(...arguments);
			};
			MK_SpriteAnimBase.prototype.onInitTarget = function(targetObj, ...args) {};
		})();
		(function() {
			MK_SpriteAnimBase.prototype.getAnimFlagKey = function(flagName) {
				return "_flag" + flagName;
			};
			MK_SpriteAnimBase.prototype.setAnimFlag = function(flagName, value) {
				var key = this.getAnimFlagKey(flagName);
				if (this[key] !== undefined) {
					this[key] = !!value;
				} else {
					console.warn(`unknown flagName "${flagName}"`, flagName, key, value);
				}
			};
			MK_SpriteAnimBase.prototype.setAnimFlagOn = function(flagName) {
				this.setAnimFlag(flagName, true);
			};
			MK_SpriteAnimBase.prototype.setAnimFlagOff = function(flagName) {
				this.setAnimFlag(flagName, false);
			};
			MK_SpriteAnimBase.prototype.getAnimFlag = function(flagName) {
				return this[this.getAnimFlagKey(flagName)];
			};
			MK_SpriteAnimBase.prototype.setFlagAutoOn = function() {
				this.setAnimFlag("Auto", true);
			};
			MK_SpriteAnimBase.prototype.setFlagAutoOff = function() {
				this.setAnimFlag("Auto", false);
			};
			MK_SpriteAnimBase.prototype.setFlagPlayOn = function() {
				this.setAnimFlag("Play", true);
			};
			MK_SpriteAnimBase.prototype.setFlagPlayOff = function() {
				this.setAnimFlag("Play", false);
			};
			MK_SpriteAnimBase.prototype.setFlagPauseOn = function() {
				this.setAnimFlag("Pause", true);
			};
			MK_SpriteAnimBase.prototype.setFlagPauseOff = function() {
				this.setAnimFlag("Pause", false);
			};
			MK_SpriteAnimBase.prototype.setFlagContinueOn = function() {
				this.setAnimFlag("Continue", true);
			};
			MK_SpriteAnimBase.prototype.setFlagContinueOff = function() {
				this.setAnimFlag("Continue", false);
			};
			MK_SpriteAnimBase.prototype.setFlagStopOn = function() {
				this.setAnimFlag("Stop", true);
			};
			MK_SpriteAnimBase.prototype.setFlagStopOff = function() {
				this.setAnimFlag("Stop", false);
			};
			MK_SpriteAnimBase.prototype.setFlagInitOn = function() {
				this.setAnimFlag("Init", true);
			};
			MK_SpriteAnimBase.prototype.setFlagInitOff = function() {
				this.setAnimFlag("Init", false);
			};
			MK_SpriteAnimBase.prototype.setFlagEnabledOn = function() {
				this.setAnimFlag("Enabled", true);
			};
			MK_SpriteAnimBase.prototype.setFlagEnabledOff = function() {
				this.setAnimFlag("Enabled", false);
			};
			MK_SpriteAnimBase.prototype.setFlagAllowAddOn = function() {
				this.setAnimFlag("AllowAdd", true);
			};
			MK_SpriteAnimBase.prototype.setFlagAllowAddOff = function() {
				this.setAnimFlag("AllowAdd", false);
			};
		})();
		(function() {
			MK_SpriteAnimBase.prototype.onCreate = function(...args) {};
			MK_SpriteAnimBase.prototype.onStart = function() {};
			MK_SpriteAnimBase.prototype.onPending = function() {};
			MK_SpriteAnimBase.prototype.onPlay = function() {};
			MK_SpriteAnimBase.prototype.onPlaying = function() {};
			MK_SpriteAnimBase.prototype.onStop = function() {};
			MK_SpriteAnimBase.prototype.onPause = function() {};
			MK_SpriteAnimBase.prototype.onPausing = function() {};
			MK_SpriteAnimBase.prototype.onContinue = function() {};
			MK_SpriteAnimBase.prototype.onInit = function() {};
			MK_SpriteAnimBase.prototype.onDestroy = function() {};
			MK_SpriteAnimBase.prototype.onUpdateStart = function() {};
			MK_SpriteAnimBase.prototype.onUpdate = function() {
				if (this._phase == 0 && this._flagAuto) {
					this.onStart();
					this._phase = 101;
				}
				if (this._phase == 101 && this._flagAuto) {
					this.onPending();
				}
				if (this._phase == 101 && this._flagPlay) {
					this.onPlay();
					this._phase = 102;
					this._flagPlay = false;
				}
				if (this._phase == 102 && this._flagAuto) {
					this.onPlaying();
				}
				if (this._phase == 102 && this._flagStop) {
					this.onStop();
					this._phase = 103;
					this._flagStop = false;
				}
				if (this._phase == 102 && this._flagPause) {
					this.onPause();
					this._phase = 201;
					this._flagPause = false;
				}
				if (this._phase == 201 && this._flagAuto) {
					this.onPausing();
				}
				if (this._phase == 201 && this._flagContinue) {
					this.onContinue();
					this._phase = 102;
					this._flagContinue = false;
				}
				if (this._phase == 103 && this._flagAuto) {
					this.onDestroy();
					this._phase = -1;
				}
				if (this._phase == -1 && this._flagInit) {
					this.onInit();
					this._phase = 0;
					this._flagInit = false;
				}
			};
			MK_SpriteAnimBase.prototype.onUpdateEnd = function() {};
			MK_SpriteAnimBase.prototype.update = function() {
				if (this._flagEnabled) {
					this.onUpdateStart();
					this.onUpdate();
					this.onUpdateEnd();
				}
			};
		})();
		(function() {
			MK_SpriteAnimBase.prototype.destroyMe = function() {};
		})();
		(function() {
			MK_SpriteAnimBase._PARAM_CONFIG = [];
			MK_SpriteAnimBase.prototype.getParamConfig = function() {
				return this.constructor._PARAM_CONFIG;
			};
		})();
		(function() {
			MK_SpriteAnimBase.prototype.initParamMapTable = function() {
				this._paramMapTable = {};
				var keyList = this.getParamConfig();
				for (var i = 0; i < keyList.length; i++) {
					this._paramMapTable[keyList[i][0]] = i;
				}
			};
			MK_SpriteAnimBase.prototype.getParamIndex = function(key) {
				var index = this._paramMapTable[key];
				if (0 <= index) {
					return index;
				} else {
					console.error("key " + key + " not found");
					return 0;
				}
			};
		})();
		(function() {
			MK_SpriteAnimBase.prototype.getDefaultParam = function(index) {
				return (this.getParamConfig()[index] || [])[2];
			};
		})();
		(function() {
			MK_SpriteAnimBase.prototype.getParamType = function(index) {
				return (this.getParamConfig()[index] || [])[1];
			};
			MK_SpriteAnimBase.prototype.getTypedParam = function(param, index) {
				var type = this.getParamType(index);
				if (type == "number") {
					return Number(param);
				} else if (type == "string") {
					return String(param);
				} else {
					return param;
				}
			};
		})();
		(function() {
			MK_SpriteAnimBase.prototype.getParams = function() {
				return MK_SpriteAnimManager.getAnimParams(this.getAnimCode()) || [];
			};
			MK_SpriteAnimBase.prototype.getParamByIndex = function(index) {
				var value = this.getParams()[index];
				if (value == null || typeof value == "undefined") {
					return this.getDefaultParam(index);
				} else {
					return this.getTypedParam(value, index);
				}
			};
			MK_SpriteAnimBase.prototype.getParamByKey = function(key) {
				var index = this.getParamIndex(key);
				return this.getParamByIndex(index);
			};
			MK_SpriteAnimBase.prototype.getParam = function(key) {
				if (typeof key == "number") {
					return this.getParamByIndex(key);
				} else {
					return this.getParamByKey(key);
				}
			};
		})();
		(function() {
			MK_SpriteAnimBase.prototype.setParamWithCode = function(code, index, value) {
				MK_SpriteAnimManager.setAnimParam(code, index, value);
			};
			MK_SpriteAnimBase.prototype.setParamByKeyWithCode = function(code, key, value) {
				var index = this.getParamIndex(key);
				MK_SpriteAnimManager.setParamWithCode(code, index, value);
			};
			MK_SpriteAnimBase.prototype.setParam = function(index, value) {
				var code = this.getAnimCode();
				MK_SpriteAnimManager.setAnimParam(code, index, value);
			};
			MK_SpriteAnimBase.prototype.setParamByKey = function(key, value) {
				var code = this.getAnimCode();
				MK_SpriteAnimManager.setAnimParam(code, index, value);
			};
		})();
		window.MK_SpriteAnimBase = MK_SpriteAnimBase;
		return MK_SpriteAnimBase;
	})();
	(function() {
		function MK_TextAnimBase() {
			this.initialize.apply(this, arguments);
		}
		MK_TextAnimBase.prototype = Object.create(MK_SpriteAnimBase.prototype);
		MK_TextAnimBase.prototype.constructor = MK_TextAnimBase;
		MK_TextAnimBase._DEFAULT_ANIM_CODE = 1;
		MK_TextAnimBase._DEFAULT_ANIM_NAME = "TextAnimBase";
		MK_TextAnimBase._PARAM_CONFIG = [];
		MK_TextAnimBase.prototype.onCreate = function(msgWindow, ...args) {
			MK_SpriteAnimBase.prototype.onCreate.apply(this, arguments);
			this.setMsgWindow(msgWindow);
		};
		(function() {
			MK_TextAnimBase.prototype.setMsgWindow = function(msgWindow) {
				this._msgWindow = msgWindow;
			};
			MK_TextAnimBase.prototype.getMsgWindow = function() {
				return this._msgWindow;
			};
			MK_TextAnimBase.prototype.getMsgTextState = function() {
				if (!this._msgWindow) return null; else return this._msgWindow._textState;
			};
			MK_TextAnimBase.prototype.getMsgContents = function() {
				if (!this._msgWindow) return null; else return this._msgWindow.contents;
			};
		})();
		(function() {})();
		window.MK_TextAnimBase = MK_TextAnimBase;
		return MK_TextAnimBase;
	})();
	(function() {
		function MK_TextAnim_Fade() {
			this.initialize.apply(this, arguments);
		}
		MK_TextAnim_Fade.prototype = Object.create(MK_TextAnimBase.prototype);
		MK_TextAnim_Fade.prototype.constructor = MK_TextAnim_Fade;
		MK_TextAnim_Fade._DEFAULT_ANIM_CODE = 2;
		MK_TextAnim_Fade._DEFAULT_ANIM_NAME = "TextAnim_Fade";
		MK_TextAnim_Fade._PARAM_CONFIG = [ [ "opacityStart", "number", 0 ], [ "opacityEnd", "number", 255 ], [ "opacitySpeed", "number", 5 ] ];
		MK_TextAnim_Fade.prototype.onInitTarget = function(obj) {
			MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
			if (!obj || !obj.sprite) return;
			var s = obj.sprite;
			var v = obj.var;
			var opacityStart = this.getParam("opacityStart");
			s.opacity = opacityStart;
		};
		MK_TextAnim_Fade.prototype.onPlaying = function() {
			MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
			var startO = this.getParam("opacityStart");
			var endO = this.getParam("opacityEnd");
			var speedO = this.getParam("opacitySpeed");
			this.getTargets().forEach(function(obj) {
				if (!obj || !obj.sprite) return;
				var s = obj.sprite;
				var v = obj.var;
				var nowO = s.opacity;
				if (startO <= nowO && nowO < endO || startO >= nowO && nowO > endO) {
					s.opacity += speedO;
				}
			}, this);
		};
		window.MK_TextAnim_Fade = MK_TextAnim_Fade;
		return MK_TextAnim_Fade;
	})();
	(function() {
		function MK_TextAnim_Zoom() {
			this.initialize.apply(this, arguments);
		}
		MK_TextAnim_Zoom.prototype = Object.create(MK_TextAnimBase.prototype);
		MK_TextAnim_Zoom.prototype.constructor = MK_TextAnim_Zoom;
		MK_TextAnim_Zoom._DEFAULT_ANIM_CODE = 3;
		MK_TextAnim_Zoom._DEFAULT_ANIM_NAME = "TextAnim_Zoom";
		MK_TextAnim_Zoom._PARAM_CONFIG = [ [ "opacityStart", "number", 0 ], [ "opacityEnd", "number", 255 ], [ "opacitySpeed", "number", 4 ], [ "scaleXStart", "number", 2 ], [ "scaleXEnd", "number", 1 ], [ "scaleXSpeed", "number", -.04 ], [ "scaleYStart", "number", 2 ], [ "scaleYEnd", "number", 1 ], [ "scaleYSpeed", "number", -.04 ] ];
		MK_TextAnim_Zoom.prototype.onInitTarget = function(obj) {
			MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
			if (!obj || !obj.sprite) return;
			var s = obj.sprite;
			var v = obj.var;
			var opacityStart = this.getParam("opacityStart");
			var scaleXStart = this.getParam("scaleXStart");
			var scaleYStart = this.getParam("scaleYStart");
			s.opacity = opacityStart;
			s.scale.x = scaleXStart;
			s.scale.y = scaleYStart;
		};
		MK_TextAnim_Zoom.prototype.onPlaying = function() {
			MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
			var startO = this.getParam("opacityStart");
			var endO = this.getParam("opacityEnd");
			var speedO = this.getParam("opacitySpeed");
			var startX = this.getParam("scaleXStart");
			var endX = this.getParam("scaleXEnd");
			var speedX = this.getParam("scaleXSpeed");
			var startY = this.getParam("scaleYStart");
			var endY = this.getParam("scaleYEnd");
			var speedY = this.getParam("scaleYSpeed");
			this.getTargets().forEach(function(obj) {
				if (!obj || !obj.sprite) return;
				var s = obj.sprite;
				var v = obj.var;
				var nowO = s.opacity;
				if (startO <= nowO && nowO < endO || startO >= nowO && nowO > endO) {
					s.opacity += speedO;
				}
				var nowX = s.scale.x;
				if (startX <= nowX && nowX < endX || startX >= nowX && nowX > endX) {
					s.scale.x += speedX;
				} else {
					s.scale.x = endX;
				}
				var nowY = s.scale.y;
				if (startY <= nowY && nowY < endY || startY >= nowY && nowY > endY) {
					s.scale.y += speedY;
				} else {
					s.scale.y = endY;
				}
			}, this);
		};
		window.MK_TextAnim_Zoom = MK_TextAnim_Zoom;
		return MK_TextAnim_Zoom;
	})();
	(function() {
		function MK_TextAnim_Zoom2() {
			this.initialize.apply(this, arguments);
		}
		MK_TextAnim_Zoom2.prototype = Object.create(MK_TextAnim_Zoom.prototype);
		MK_TextAnim_Zoom2.prototype.constructor = MK_TextAnim_Zoom2;
		MK_TextAnim_Zoom2._DEFAULT_ANIM_CODE = 4;
		MK_TextAnim_Zoom2._DEFAULT_ANIM_NAME = "TextAnim_Zoom2";
		MK_TextAnim_Zoom2._PARAM_CONFIG = [ [ "opacityStart", "number", 0 ], [ "opacityEnd", "number", 255 ], [ "opacitySpeed", "number", 4 ], [ "scaleXStart", "number", -1 ], [ "scaleXEnd", "number", 1 ], [ "scaleXSpeed", "number", +.02 ], [ "scaleYStart", "number", 2 ], [ "scaleYEnd", "number", 1 ], [ "scaleYSpeed", "number", -.02 ] ];
		window.MK_TextAnim_Zoom2 = MK_TextAnim_Zoom2;
		return MK_TextAnim_Zoom2;
	})();
	(function() {
		function MK_TextAnim_Shake() {
			this.initialize.apply(this, arguments);
		}
		MK_TextAnim_Shake.prototype = Object.create(MK_TextAnimBase.prototype);
		MK_TextAnim_Shake.prototype.constructor = MK_TextAnim_Shake;
		MK_TextAnim_Shake._DEFAULT_ANIM_CODE = 6;
		MK_TextAnim_Shake._DEFAULT_ANIM_NAME = "TextAnim_Shake";
		MK_TextAnim_Shake._PARAM_CONFIG = [ [ "shakeWaitCount", "number", 3 ], [ "shakeAmplitude", "number", 3 ], [ "shakeNeedStop", "number", 0 ], [ "shakeTotalCount", "number", 12 ] ];
		MK_TextAnim_Shake.prototype.onInitTarget = function(obj) {
			MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
			if (!obj || !obj.sprite) return;
			var s = obj.sprite;
			var v = obj.var;
			v._orgX = s.x;
			v._orgY = s.y;
			v._shakeCount = 0;
			v._shakeWaitCount = 0;
		};
		MK_TextAnim_Shake.prototype.onPlaying = function() {
			MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
			var waitCount = this.getParam("shakeWaitCount");
			var amplitude = this.getParam("shakeAmplitude");
			var needStop = this.getParam("shakeNeedStop");
			var totalCount = this.getParam("shakeTotalCount");
			this.getTargets().forEach(function(obj) {
				if (!obj || !obj.sprite) return;
				var s = obj.sprite;
				var v = obj.var;
				if (needStop > 0 && v._shakeCount >= totalCount) {
					s.x = v._orgX;
					s.y = v._orgY;
				} else {
					v._shakeCount++;
					v._shakeWaitCount++;
					if (v._shakeWaitCount >= waitCount) {
						v._shakeWaitCount = 0;
						var rnd1 = Math.randomInt(2 * amplitude) - amplitude;
						var rnd2 = Math.randomInt(2 * amplitude) - amplitude;
						s.x = rnd1 + v._orgX;
						s.y = rnd2 + v._orgY;
					}
				}
			}, this);
		};
		window.MK_TextAnim_Shake = MK_TextAnim_Shake;
		return MK_TextAnim_Shake;
	})();
	(function() {
		function MK_TextAnim_Zoom3() {
			this.initialize.apply(this, arguments);
		}
		MK_TextAnim_Zoom3.prototype = Object.create(MK_TextAnim_Zoom.prototype);
		MK_TextAnim_Zoom3.prototype.constructor = MK_TextAnim_Zoom3;
		MK_TextAnim_Zoom3._DEFAULT_ANIM_CODE = 7;
		MK_TextAnim_Zoom3._DEFAULT_ANIM_NAME = "TextAnim_Zoom3";
		MK_TextAnim_Zoom3._PARAM_CONFIG = [ [ "opacityStart", "number", 0 ], [ "opacityEnd", "number", 255 ], [ "opacitySpeed", "number", 20 ], [ "scaleXStart", "number", 4 ], [ "scaleXEnd", "number", 1 ], [ "scaleXSpeed", "number", -.2 ], [ "scaleYStart", "number", 4 ], [ "scaleYEnd", "number", 1 ], [ "scaleYSpeed", "number", -.2 ], [ "shakeAmplitude", "number", 3 ], [ "shakeWaitCount", "number", 3 ], [ "shakeNeedStop", "number", 0 ], [ "shakeTotalCount", "number", 12 ] ];
		MK_TextAnim_Zoom3.prototype.onInitTarget = function(obj) {
			MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
			if (!obj || !obj.sprite) return;
			var s = obj.sprite;
			var v = obj.var;
			var opacityStart = this.getParam("opacityStart");
			s.opacity = opacityStart;
			v._subPhase = 1;
			v._shakeCount = 0;
			v._shakeWaitCount = 0;
			v._orgX = s.x;
			v._orgY = s.y;
		};
		MK_TextAnim_Zoom3.prototype.onPlaying = function() {
			MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
			var startO = this.getParam("opacityStart");
			var endO = this.getParam("opacityEnd");
			var speedO = this.getParam("opacitySpeed");
			var startX = this.getParam("scaleXStart");
			var endX = this.getParam("scaleXEnd");
			var speedX = this.getParam("scaleXSpeed");
			var startY = this.getParam("scaleYStart");
			var endY = this.getParam("scaleYEnd");
			var speedY = this.getParam("scaleYSpeed");
			var shakeWaitCount = this.getParam("shakeWaitCount");
			var shakeAmplitude = this.getParam("shakeAmplitude");
			var shakeNeedStop = this.getParam("shakeNeedStop");
			var shakeTotalCount = this.getParam("shakeTotalCount");
			this.getTargets().forEach(function(obj) {
				if (!obj || !obj.sprite) return;
				var s = obj.sprite;
				var v = obj.var;
				if (v._subPhase == 1) {
					var hasChange = false;
					var nowO = s.opacity;
					if (startO <= nowO && nowO < endO || startO >= nowO && nowO > endO) {
						s.opacity += speedO;
						hasChange = true;
					}
					var nowX = s.scale.x;
					if (startX <= nowX && nowX < endX || startX >= nowX && nowX > endX) {
						s.scale.x += speedX;
						hasChange = true;
					} else {
						s.scale.x = endX;
					}
					var nowY = s.scale.y;
					if (startY <= nowY && nowY < endY || startY >= nowY && nowY > endY) {
						s.scale.y += speedY;
						hasChange = true;
					} else {
						s.scale.y = endY;
					}
					if (!hasChange) {
						v._subPhase = 2;
					}
				}
				if (v._subPhase == 2) {
					v._shakeCount++;
					this.playing_shake(obj, shakeWaitCount, shakeAmplitude);
					if (shakeNeedStop > 0 && v._shakeCount >= shakeTotalCount) {
						s.x = v._orgX;
						s.y = v._orgY;
						v._subPhase = 3;
					}
				}
			}, this);
		};
		MK_TextAnim_Zoom3.prototype.playing_shake = function(targetObj, waitCount, amplitude) {
			var obj = targetObj;
			if (!obj || !obj.sprite) return;
			var s = obj.sprite;
			var v = obj.var;
			v._shakeWaitCount++;
			if (v._shakeWaitCount >= waitCount) {
				v._shakeWaitCount = 0;
				var rnd1 = Math.randomInt(2 * amplitude) - amplitude;
				var rnd2 = Math.randomInt(2 * amplitude) - amplitude;
				s.x = rnd1 + v._orgX;
				s.y = rnd2 + v._orgY;
			}
		};
		window.MK_TextAnim_Zoom3 = MK_TextAnim_Zoom3;
		return MK_TextAnim_Zoom3;
	})();
	(function() {
		function MK_TextAnim_Wave() {
			this.initialize.apply(this, arguments);
		}
		MK_TextAnim_Wave.prototype = Object.create(MK_TextAnimBase.prototype);
		MK_TextAnim_Wave.prototype.constructor = MK_TextAnim_Wave;
		MK_TextAnim_Wave._DEFAULT_ANIM_CODE = 8;
		MK_TextAnim_Wave._DEFAULT_ANIM_NAME = "TextAnim_Wave";
		MK_TextAnim_Wave._PARAM_CONFIG = [ [ "scaleSpeed", "number", .015 ], [ "scaleCount", "number", 30 ], [ "loopTotal", "number", 1 ] ];
		MK_TextAnim_Wave.prototype.onInitTarget = function(obj) {
			MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
			if (!obj || !obj.sprite) return;
			var s = obj.sprite;
			var v = obj.var;
			v._animCount = 0;
			v._loopCount = 0;
		};
		MK_TextAnim_Wave.prototype.onPlaying = function() {
			MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
			var scaleSpeed = this.getParam("scaleSpeed");
			var scaleCount = this.getParam("scaleCount");
			var loopTotal = this.getParam("loopTotal");
			this.getTargets().forEach(function(obj) {
				if (!obj || !obj.sprite) return;
				var s = obj.sprite;
				var v = obj.var;
				v._animCount++;
				if (v._animCount <= 1 * scaleCount) {
					s.scale.x += scaleSpeed;
				} else if (v._animCount <= 2 * scaleCount) {
					s.scale.x -= scaleSpeed;
				} else {
					v._animCount = 0;
					v._loopCount++;
				}
				s.scale.y = s.scale.x;
				if (v._loopCount >= loopTotal) {
					s.scale.x = s.scale.y = 1;
				}
			}, this);
		};
		window.MK_TextAnim_Wave = MK_TextAnim_Wave;
		return MK_TextAnim_Wave;
	})();
	(function() {
		function MK_TextAnim_Rotation() {
			this.initialize.apply(this, arguments);
		}
		MK_TextAnim_Rotation.prototype = Object.create(MK_TextAnimBase.prototype);
		MK_TextAnim_Rotation.prototype.constructor = MK_TextAnim_Rotation;
		MK_TextAnim_Rotation._DEFAULT_ANIM_CODE = 9;
		MK_TextAnim_Rotation._DEFAULT_ANIM_NAME = "TextAnim_Rotation";
		MK_TextAnim_Rotation._PARAM_CONFIG = [ [ "xx1", "number", 63 ], [ "xx2", "number", 120 ], [ "xx3", "number", .1 ] ];
		MK_TextAnim_Rotation.prototype.onInitTarget = function(obj) {
			MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
			if (!obj) return;
			var s = obj.sprite;
			var v = obj.var;
			v._animCount = 0;
		};
		MK_TextAnim_Rotation.prototype.onPlaying = function() {
			MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
			var xx1 = this.getParam("xx1");
			var xx2 = this.getParam("xx2");
			var xx3 = this.getParam("xx3");
			this.getTargets().forEach(function(obj) {
				if (!obj || !obj.sprite) return;
				var s = obj.sprite;
				var v = obj.var;
				v._animCount++;
				if (v._animCount <= xx1) {
					s.rotation += xx3;
				} else if (v._animCount <= xx2) {
					s.rotation = 0;
				} else {
					s.rotation = 0;
					v._animCount = 0;
				}
			}, this);
		};
		window.MK_TextAnim_Rotation = MK_TextAnim_Rotation;
		return MK_TextAnim_Rotation;
	})();
	(function() {
		function MK_TextAnim_Swing() {
			this.initialize.apply(this, arguments);
		}
		MK_TextAnim_Swing.prototype = Object.create(MK_TextAnimBase.prototype);
		MK_TextAnim_Swing.prototype.constructor = MK_TextAnim_Swing;
		MK_TextAnim_Swing._DEFAULT_ANIM_CODE = 10;
		MK_TextAnim_Swing._DEFAULT_ANIM_NAME = "TextAnim_Swing";
		MK_TextAnim_Swing._PARAM_CONFIG = [ [ "rotateSpeed", "number", .02 ], [ "rotateInitDir", "string", "R" ], [ "angleInit", "number", 0 ], [ "angleRangeL", "number", -.4 ], [ "angleRangeR", "number", .4 ] ];
		MK_TextAnim_Swing.prototype.onInitTarget = function(obj) {
			MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
			if (!obj || !obj.sprite) return;
			var s = obj.sprite;
			var v = obj.var;
			var rotateInitDir = this.getParam("rotateInitDir");
			var angleInit = this.getParam("angleInit");
			v._rotateR = rotateInitDir == "R";
			s.rotation = angleInit;
		};
		MK_TextAnim_Swing.prototype.onPlaying = function() {
			MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
			var rotateSpeed = this.getParam("rotateSpeed");
			var angleRangeL = this.getParam("angleRangeL");
			var angleRangeR = this.getParam("angleRangeR");
			this.getTargets().forEach(function(obj) {
				if (!obj || !obj.sprite) return;
				var s = obj.sprite;
				var v = obj.var;
				if (v._rotateR) {
					s.rotation += rotateSpeed;
					if (s.rotation > angleRangeR) {
						s.rotation = angleRangeR;
						v._rotateR = false;
					}
				} else {
					s.rotation -= rotateSpeed;
					if (s.rotation < angleRangeL) {
						s.rotation = angleRangeL;
						v._rotateR = true;
					}
				}
			}, this);
		};
		window.MK_TextAnim_Swing = MK_TextAnim_Swing;
		return MK_TextAnim_Swing;
	})();
	(function() {
		function MK_TextAnim_Random() {
			this.initialize.apply(this, arguments);
		}
		MK_TextAnim_Random.prototype = Object.create(MK_TextAnimBase.prototype);
		MK_TextAnim_Random.prototype.constructor = MK_TextAnim_Random;
		MK_TextAnim_Random._DEFAULT_ANIM_CODE = 11;
		MK_TextAnim_Random._DEFAULT_ANIM_NAME = "TextAnim_Random";
		MK_TextAnim_Random._PARAM_CONFIG = [ [ "opacityStart", "number", 0 ], [ "opacityEnd", "number", 255 ], [ "opacitySpeed", "number", 4 ], [ "scaleRangeMin", "number", .7 ], [ "scaleRangeMax", "number", 1.4 ], [ "rotateRange", "number", .4 ], [ "rotateDir", "string", "R" ] ];
		MK_TextAnim_Random.prototype.onInitTarget = function(obj) {
			MK_TextAnimBase.prototype.onInitTarget.apply(this, arguments);
			if (!obj || !obj.sprite) return;
			var s = obj.sprite;
			var v = obj.var;
			var scaleRangeMin = this.getParam("scaleRangeMin");
			var scaleRangeMax = this.getParam("scaleRangeMax");
			var scaleRadomSize = scaleRangeMax - scaleRangeMin;
			var rotateRange = this.getParam("rotateRange");
			var rotateDir = this.getParam("rotateDir");
			s.opacity = 0;
			s.scale.x = s.scale.y = Math.random() * scaleRadomSize + scaleRangeMin;
			s.rotation = Math.random() * rotateRange * (rotateDir == "R" ? 1 : -1);
		};
		MK_TextAnim_Random.prototype.onPlaying = function() {
			MK_TextAnimBase.prototype.onPlaying.apply(this, arguments);
			var startO = this.getParam("opacityStart");
			var endO = this.getParam("opacityEnd");
			var speedO = this.getParam("opacitySpeed");
			this.getTargets().forEach(function(obj) {
				if (!obj || !obj.sprite) return;
				var s = obj.sprite;
				var v = obj.var;
				var nowO = s.opacity;
				if (startO <= nowO && nowO < endO || startO >= nowO && nowO > endO) {
					s.opacity += speedO;
				}
			}, this);
		};
		window.MK_TextAnim_Random = MK_TextAnim_Random;
		return MK_TextAnim_Random;
	})();
	(function() {
		function MK_TextMakerAnimBase() {
			this.initialize.apply(this, arguments);
		}
		MK_TextMakerAnimBase.prototype = Object.create(MK_TextAnimBase.prototype);
		MK_TextMakerAnimBase.prototype.constructor = MK_TextMakerAnimBase;
		MK_TextMakerAnimBase._DEFAULT_ANIM_CODE = 31;
		MK_TextMakerAnimBase._DEFAULT_ANIM_NAME = "TextMakerAnimBase";
		MK_TextMakerAnimBase._PARAM_CONFIG = [];
		MK_TextMakerAnimBase.prototype.onCreate = function(msgWindow, ...args) {
			MK_TextAnimBase.prototype.onCreate.apply(this, arguments);
			this._extraTargets = [];
			this._drawForExtraContent = false;
		};
		(function() {
			MK_TextMakerAnimBase.prototype.createExtraTargetObjWithVar = function(sprite, data, varObj) {
				return MK_TextAnimBase.prototype.createTargetObjWithVar.apply(this, arguments);
			};
			MK_TextMakerAnimBase.prototype.createExtraTargetObj = function(sprite, data) {
				return MK_TextAnimBase.prototype.createTargetObj.apply(this, arguments);
			};
		})();
		(function() {
			MK_TextMakerAnimBase.prototype.addExtraTarget = function(sprite, data) {
				var targetObj = this.createExtraTargetObj(sprite, data);
				this._extraTargets.push(targetObj);
				var args = [ ...arguments ].splice(1);
				this.onAddExtraTarget(targetObj, ...args);
			};
			MK_TextMakerAnimBase.prototype.onAddExtraTarget = function(targetObj) {
				this.onInitExtraTarget(...arguments);
			};
			MK_TextMakerAnimBase.prototype.onInitExtraTarget = function(targetObj, ...args) {};
		})();
		(function() {
			MK_TextMakerAnimBase.prototype.startDrawExtraContent = function() {
				this._drawForExtraContent = true;
			};
			MK_TextMakerAnimBase.prototype.endDrawExtraContent = function() {
				this._drawForExtraContent = false;
			};
			MK_TextMakerAnimBase.prototype.isDrawForExtraContent = function() {
				return this._drawForExtraContent;
			};
			MK_TextMakerAnimBase.prototype.addTarget = function(sprite, data) {
				if (this.isDrawForExtraContent()) {
					this.addExtraTarget(...arguments);
				} else {
					MK_TextAnimBase.prototype.addTarget.apply(this, arguments);
				}
			};
		})();
		(function() {
			MK_TextMakerAnimBase.prototype.addExtraContent = function() {
				this.startDrawExtraContent();
				this.drawExtraContent(...arguments);
				this.endDrawExtraContent();
			};
			MK_TextMakerAnimBase.prototype.drawExtraContent = function(...args) {};
		})();
		(function() {})();
		window.MK_TextMakerAnimBase = MK_TextMakerAnimBase;
		return MK_TextMakerAnimBase;
	})();
	(function() {
		function MK_TextMakerAnim_Karaoke() {
			this.initialize.apply(this, arguments);
		}
		MK_TextMakerAnim_Karaoke.prototype = Object.create(MK_TextMakerAnimBase.prototype);
		MK_TextMakerAnim_Karaoke.prototype.constructor = MK_TextMakerAnim_Karaoke;
		MK_TextMakerAnim_Karaoke._DEFAULT_ANIM_CODE = 32;
		MK_TextMakerAnim_Karaoke._DEFAULT_ANIM_NAME = "TextMakerAnim_Karaoke";
		MK_TextMakerAnim_Karaoke._PARAM_CONFIG = [ [ "krcContents", "string", '{"lyricLines": [{"start": 868, "duration": 6369, "content": [{"start": 0, "duration": 153, "text": "羽"}, {"start": 153, "duration": 202, "text": "ば"}, {"start": 355, "duration": 151, "text": "た"}, {"start": 506, "duration": 757, "text": "い"}, {"start": 1263, "duration": 759, "text": "た"}, {"start": 2022, "duration": 1214, "text": "ら"}, {"start": 3236, "duration": 152, "text": "戻"}, {"start": 3388, "duration": 150, "text": "ら"}, {"start": 3538, "duration": 810, "text": "な"}, {"start": 4348, "duration": 505, "text": "い"}, {"start": 4853, "duration": 152, "text": "と"}, {"start": 5005, "duration": 203, "text": "言"}, {"start": 5208, "duration": 253, "text": "っ"}, {"start": 5461, "duration": 908, "text": "て"}]}, {"start": 7237, "duration": 6663, "content": [{"start": 0, "duration": 203, "text": "目"}, {"start": 203, "duration": 151, "text": "指"}, {"start": 354, "duration": 150, "text": "し"}, {"start": 504, "duration": 707, "text": "た"}, {"start": 1211, "duration": 655, "text": "の"}, {"start": 1866, "duration": 1159, "text": "は"}, {"start": 3025, "duration": 203, "text": "苍"}, {"start": 3228, "duration": 557, "text": "い"}, {"start": 3785, "duration": 201, "text": "苍"}, {"start": 3986, "duration": 606, "text": "い"}, {"start": 4592, "duration": 202, "text": "あ"}, {"start": 4794, "duration": 656, "text": "の"}, {"start": 5450, "duration": 1213, "text": "空"}]}, {"start": 26455, "duration": 2985, "content": [{"start": 0, "duration": 101, "text": "悲"}, {"start": 101, "duration": 202, "text": "し"}, {"start": 303, "duration": 152, "text": "み"}, {"start": 455, "duration": 151, "text": "は"}, {"start": 606, "duration": 203, "text": "ま"}, {"start": 809, "duration": 456, "text": "だ"}, {"start": 1265, "duration": 253, "text": "覚"}, {"start": 1518, "duration": 203, "text": "え"}, {"start": 1721, "duration": 253, "text": "ら"}, {"start": 1974, "duration": 354, "text": "れ"}, {"start": 2328, "duration": 657, "text": "ず"}]}, {"start": 29440, "duration": 2986, "content": [{"start": 0, "duration": 154, "text": "切"}, {"start": 154, "duration": 151, "text": "な"}, {"start": 305, "duration": 151, "text": "さ"}, {"start": 456, "duration": 355, "text": "は"}, {"start": 811, "duration": 201, "text": "今"}, {"start": 1012, "duration": 507, "text": "つ"}, {"start": 1519, "duration": 303, "text": "か"}, {"start": 1822, "duration": 203, "text": "み"}, {"start": 2025, "duration": 202, "text": "始"}, {"start": 2227, "duration": 203, "text": "め"}, {"start": 2430, "duration": 556, "text": "た"}]}, {"start": 32776, "duration": 3075, "content": [{"start": 0, "duration": 201, "text": "あ"}, {"start": 201, "duration": 202, "text": "な"}, {"start": 403, "duration": 202, "text": "た"}, {"start": 605, "duration": 555, "text": "へ"}, {"start": 1160, "duration": 302, "text": "と"}, {"start": 1462, "duration": 252, "text": "抱"}, {"start": 1714, "duration": 303, "text": "く"}, {"start": 2017, "duration": 151, "text": "こ"}, {"start": 2168, "duration": 202, "text": "の"}, {"start": 2370, "duration": 151, "text": "感"}, {"start": 2521, "duration": 151, "text": "情"}, {"start": 2672, "duration": 403, "text": "も"}]}, {"start": 36021, "duration": 2722, "content": [{"start": 0, "duration": 251, "text": "今"}, {"start": 251, "duration": 153, "text": "言"}, {"start": 404, "duration": 151, "text": "叶"}, {"start": 555, "duration": 202, "text": "に"}, {"start": 757, "duration": 402, "text": "代"}, {"start": 1159, "duration": 151, "text": "わ"}, {"start": 1310, "duration": 403, "text": "っ"}, {"start": 1713, "duration": 455, "text": "て"}, {"start": 2168, "duration": 554, "text": "く"}]}, {"start": 39035, "duration": 6164, "content": [{"start": 0, "duration": 203, "text": "未"}, {"start": 203, "duration": 202, "text": "知"}, {"start": 405, "duration": 251, "text": "な"}, {"start": 656, "duration": 759, "text": "る"}, {"start": 1415, "duration": 202, "text": "世"}, {"start": 1617, "duration": 556, "text": "界"}, {"start": 2173, "duration": 302, "text": "の"}, {"start": 2475, "duration": 606, "text": "梦"}, {"start": 3081, "duration": 453, "text": "か"}, {"start": 3534, "duration": 1315, "text": "ら"}, {"start": 4849, "duration": 152, "text": "目"}, {"start": 5001, "duration": 153, "text": "覚"}, {"start": 5154, "duration": 455, "text": "め"}, {"start": 5609, "duration": 555, "text": "て"}]}, {"start": 45725, "duration": 5660, "content": [{"start": 0, "duration": 152, "text": "こ"}, {"start": 152, "duration": 302, "text": "の"}, {"start": 454, "duration": 202, "text": "羽"}, {"start": 656, "duration": 254, "text": "を"}, {"start": 910, "duration": 201, "text": "広"}, {"start": 1111, "duration": 304, "text": "げ"}, {"start": 1415, "duration": 354, "text": "飞"}, {"start": 1769, "duration": 505, "text": "び"}, {"start": 2274, "duration": 605, "text": "立"}, {"start": 2879, "duration": 2781, "text": "つ"}]}, {"start": 51467, "duration": 6221, "content": [{"start": 0, "duration": 151, "text": "羽"}, {"start": 151, "duration": 201, "text": "ば"}, {"start": 352, "duration": 202, "text": "た"}, {"start": 554, "duration": 556, "text": "い"}, {"start": 1110, "duration": 607, "text": "た"}, {"start": 1717, "duration": 1265, "text": "ら"}, {"start": 2982, "duration": 203, "text": "戻"}, {"start": 3185, "duration": 151, "text": "ら"}, {"start": 3336, "duration": 912, "text": "な"}, {"start": 4248, "duration": 557, "text": "い"}, {"start": 4805, "duration": 203, "text": "と"}, {"start": 5008, "duration": 253, "text": "言"}, {"start": 5261, "duration": 254, "text": "っ"}, {"start": 5515, "duration": 706, "text": "て"}]}, {"start": 57688, "duration": 6470, "content": [{"start": 0, "duration": 201, "text": "目"}, {"start": 201, "duration": 202, "text": "指"}, {"start": 403, "duration": 253, "text": "し"}, {"start": 656, "duration": 607, "text": "た"}, {"start": 1263, "duration": 556, "text": "の"}, {"start": 1819, "duration": 1264, "text": "は"}, {"start": 3083, "duration": 302, "text": "白"}, {"start": 3385, "duration": 506, "text": "い"}, {"start": 3891, "duration": 253, "text": "白"}, {"start": 4144, "duration": 455, "text": "い"}, {"start": 4599, "duration": 354, "text": "あ"}, {"start": 4953, "duration": 505, "text": "の"}, {"start": 5458, "duration": 1012, "text": "云"}]}, {"start": 64158, "duration": 6254, "content": [{"start": 0, "duration": 150, "text": "突"}, {"start": 150, "duration": 202, "text": "き"}, {"start": 352, "duration": 251, "text": "抜"}, {"start": 603, "duration": 757, "text": "け"}, {"start": 1360, "duration": 454, "text": "た"}, {"start": 1814, "duration": 1060, "text": "ら"}, {"start": 2874, "duration": 301, "text": "见"}, {"start": 3175, "duration": 253, "text": "つ"}, {"start": 3428, "duration": 403, "text": "か"}, {"start": 3831, "duration": 454, "text": "る"}, {"start": 4285, "duration": 454, "text": "と"}, {"start": 4739, "duration": 202, "text": "知"}, {"start": 4941, "duration": 405, "text": "っ"}, {"start": 5346, "duration": 908, "text": "て"}]}, {"start": 70490, "duration": 2810, "content": [{"start": 0, "duration": 127, "text": "振"}, {"start": 127, "duration": 304, "text": "り"}, {"start": 431, "duration": 305, "text": "切"}, {"start": 736, "duration": 454, "text": "る"}, {"start": 1190, "duration": 608, "text": "ほ"}, {"start": 1798, "duration": 1012, "text": "ど"}]}, {"start": 73300, "duration": 3437, "content": [{"start": 0, "duration": 304, "text": "苍"}, {"start": 304, "duration": 607, "text": "い"}, {"start": 911, "duration": 252, "text": "苍"}, {"start": 1163, "duration": 455, "text": "い"}, {"start": 1618, "duration": 454, "text": "あ"}, {"start": 2072, "duration": 405, "text": "の"}, {"start": 2477, "duration": 960, "text": "空"}]}, {"start": 76737, "duration": 3139, "content": [{"start": 0, "duration": 252, "text": "苍"}, {"start": 252, "duration": 406, "text": "い"}, {"start": 658, "duration": 201, "text": "苍"}, {"start": 859, "duration": 559, "text": "い"}, {"start": 1418, "duration": 455, "text": "あ"}, {"start": 1873, "duration": 407, "text": "の"}, {"start": 2280, "duration": 859, "text": "空"}]}, {"start": 79878, "duration": 100000, "content": [{"start": 0, "duration": 106, "text": "苍"}, {"start": 106, "duration": 555, "text": "い"}, {"start": 661, "duration": 202, "text": "苍"}, {"start": 863, "duration": 505, "text": "い"}, {"start": 1368, "duration": 402, "text": "あ"}, {"start": 1770, "duration": 353, "text": "の"}, {"start": 2123, "duration": 2982, "text": "空"}]}], "sourceLines": ["[id:$01F111A3]", "[ar:日本ACG]", "[ti:ブルーバード]", "[by:]", "[hash:5da2e0f88d81c06f26c2a4da9bb8b680]", "[al:]", "[sign:]", "[qq:]", "[total:100000]", "[offset:500]", "[language:eyJjb250ZW50IjpbeyJsYW5ndWFnZSI6MCwibHlyaWNDb250ZW50IjpbWyJcdTYyMTFcdThCRjRcdTRFMDBcdTY1RTZcdTYzMkZcdTdGQzVcdTk4REVcdTdGRDRcdTVDMzFcdTRFMERcdTRGMUFcdTU2REVcdTY3NjUiXSxbIlx1NTQxMVx1NUY4MFx1NzY4NFx1NzZFRVx1NjgwN1x1NjYyRlx1OTBBM1x1ODUxQVx1ODRERFx1NzY4NFx1ODJDRFx1N0E3OSJdLFsiXHU4RkQ4XHU2NzJBXHU4QkIwXHU0RjRGXHU4RkQ5XHU2MEIyXHU0RjI0Il0sWyJcdTczQjBcdTU3MjhcdTVGMDBcdTU5Q0JcdTRFODZcdTg5RTNcdTRFODZcdTc1REJcdTgyRTYiXSxbIlx1NjAwMFx1Nzc0MFx1NUJGOVx1NEY2MFx1NzY4NFx1OEZEOVx1NEVGRFx1NjExRlx1NjBDNSJdLFsiXHU3M0IwXHU1NzI4XHU1MzE2XHU0RTNBXHU4QTAwXHU4QkVEIl0sWyJcdTRFQ0VcdTY3MkFcdTc3RTVcdTRFMTZcdTc1NENcdTc2ODRcdTY4QTZcdTRFMkRcdThCQTlcdTYyMTFcdTg5QzlcdTkxOTIiXSxbIlx1NUM1NVx1NUYwMFx1N0ZDNVx1ODE4MFx1OThERVx1NTQxMVx1OEZEQ1x1NjVCOSJdLFsiXHU2MjExXHU4QkY0XHU0RTAwXHU2NUU2XHU2MzJGXHU3RkM1XHU5OERFXHU3RkQ0XHU1QzMxXHU0RTBEXHU0RjFBXHU1NkRFXHU2NzY1Il0sWyJcdTU0MTFcdTVGODBcdTc2ODRcdTc2RUVcdTY4MDdcdTY2MkZcdTkwQTNcdTk2RUFcdTc2N0RcdTc2ODRcdTk2RUFcdTc2N0RcdTc2ODRcdTRFOTEiXSxbIlx1NjIxMVx1NzdFNVx1OTA1M1x1N0E3Rlx1OEZDN1x1NUI4M1x1NUMzMVx1ODBGRFx1NjI3RVx1NTIzMCJdLFsiXHU3QUVEXHU1MjlCXHU2NDQ2XHU4MTMxIl0sWyJcdTg1MUFcdTg0RERcdTc2ODRcdTg1MUFcdTg0RERcdTc2ODRcdTU5MjlcdTdBN0EiXSxbIlx1ODUxQVx1ODRERFx1NzY4NFx1ODUxQVx1ODRERFx1NzY4NFx1NTkyOVx1N0E3QSJdLFsiXHU4NTFBXHU4NEREXHU3Njg0XHU4NTFBXHU4NEREXHU3Njg0XHU1OTI5XHU3QTdBIl1dLCJ0eXBlIjoxfV0sInZlcnNpb24iOjF9]", "[868,6369]<0,153,0>羽<153,202,0>ば<355,151,0>た<506,757,0>い<1263,759,0>た<2022,1214,0>ら<3236,152,0>戻<3388,150,0>ら<3538,810,0>な<4348,505,0>い<4853,152,0>と<5005,203,0>言<5208,253,0>っ<5461,908,0>て", "[7237,6663]<0,203,0>目<203,151,0>指<354,150,0>し<504,707,0>た<1211,655,0>の<1866,1159,0>は<3025,203,0>苍<3228,557,0>い<3785,201,0>苍<3986,606,0>い<4592,202,0>あ<4794,656,0>の<5450,1213,0>空", "[26455,2985]<0,101,0>悲<101,202,0>し<303,152,0>み<455,151,0>は<606,203,0>ま<809,456,0>だ<1265,253,0>覚<1518,203,0>え<1721,253,0>ら<1974,354,0>れ<2328,657,0>ず", "[29440,2986]<0,154,0>切<154,151,0>な<305,151,0>さ<456,355,0>は<811,201,0>今<1012,507,0>つ<1519,303,0>か<1822,203,0>み<2025,202,0>始<2227,203,0>め<2430,556,0>た", "[32776,3075]<0,201,0>あ<201,202,0>な<403,202,0>た<605,555,0>へ<1160,302,0>と<1462,252,0>抱<1714,303,0>く<2017,151,0>こ<2168,202,0>の<2370,151,0>感<2521,151,0>情<2672,403,0>も", "[36021,2722]<0,251,0>今<251,153,0>言<404,151,0>叶<555,202,0>に<757,402,0>代<1159,151,0>わ<1310,403,0>っ<1713,455,0>て<2168,554,0>く", "[39035,6164]<0,203,0>未<203,202,0>知<405,251,0>な<656,759,0>る<1415,202,0>世<1617,556,0>界<2173,302,0>の<2475,606,0>梦<3081,453,0>か<3534,1315,0>ら<4849,152,0>目<5001,153,0>覚<5154,455,0>め<5609,555,0>て", "[45725,5660]<0,152,0>こ<152,302,0>の<454,202,0>羽<656,254,0>を<910,201,0>広<1111,304,0>げ<1415,354,0>飞<1769,505,0>び<2274,605,0>立<2879,2781,0>つ", "[51467,6221]<0,151,0>羽<151,201,0>ば<352,202,0>た<554,556,0>い<1110,607,0>た<1717,1265,0>ら<2982,203,0>戻<3185,151,0>ら<3336,912,0>な<4248,557,0>い<4805,203,0>と<5008,253,0>言<5261,254,0>っ<5515,706,0>て", "[57688,6470]<0,201,0>目<201,202,0>指<403,253,0>し<656,607,0>た<1263,556,0>の<1819,1264,0>は<3083,302,0>白<3385,506,0>い<3891,253,0>白<4144,455,0>い<4599,354,0>あ<4953,505,0>の<5458,1012,0>云", "[64158,6254]<0,150,0>突<150,202,0>き<352,251,0>抜<603,757,0>け<1360,454,0>た<1814,1060,0>ら<2874,301,0>见<3175,253,0>つ<3428,403,0>か<3831,454,0>る<4285,454,0>と<4739,202,0>知<4941,405,0>っ<5346,908,0>て", "[70490,2810]<0,127,0>振<127,304,0>り<431,305,0>切<736,454,0>る<1190,608,0>ほ<1798,1012,0>ど", "[73300,3437]<0,304,0>苍<304,607,0>い<911,252,0>苍<1163,455,0>い<1618,454,0>あ<2072,405,0>の<2477,960,0>空", "[76737,3139]<0,252,0>苍<252,406,0>い<658,201,0>苍<859,559,0>い<1418,455,0>あ<1873,407,0>の<2280,859,0>空", "[79878,100000]<0,106,0>苍<106,555,0>い<661,202,0>苍<863,505,0>い<1368,402,0>あ<1770,353,0>の<2123,2982,0>空", ""]}' ], [ "audioName", "string", "日本ACG-ブルーバード" ], [ "lyricOffset", "number", -500 ], [ "widthPadding", "number", 0 ], [ "lineSpace", "number", 10 ], [ "minWaitPoint", "number", 3 ], [ "maxWaitPoint", "number", 5 ], [ "pointRadius", "number", 12 ], [ "pointColor", "string", "blue" ], [ "pointWSpace", "number", 10 ], [ "pointHSpace", "number", 6 ], [ "lineWidth", "number", 4 ], [ "uLineColor", "string", "#FFFFFF" ], [ "uTextColor", "string", "#0000FF" ], [ "dLineColor", "string", "#000000" ], [ "dTextColor", "string", "#FFFFFF" ] ];
		(function() {
			MK_TextMakerAnim_Karaoke.prototype.onCreate = function() {
				MK_TextMakerAnimBase.prototype.onCreate.apply(this, arguments);
				this._audioName = "";
				this._krcData = null;
				this._lyricData = null;
				this._lyricLineTargets = {};
				this._drawingState = {
					drawLineIndex: 1,
					drawTextIndex: 1,
					drawX: 0
				};
				this._playingState = {
					lineIndex: 0,
					textIndex: 0,
					isTopLine: true,
					waitPointNum: 0,
					waitPointShowedNum: 0,
					waiting: false,
					seek: 0,
					playing: false,
					played: false,
					lineStarted: false,
					textStarted: false,
					lineFinished: false,
					textFinished: false,
					topLineIndex: 0,
					botLineIndex: 0
				};
				this._minWaitSec = this.getParam("minWaitPoint") * 1;
				this._maxWaitSec = this.getParam("maxWaitPoint") * 1;
				this._bgsObject = null;
				this._bgsBuffer = null;
				this.initKrcData();
			};
			MK_TextMakerAnim_Karaoke.prototype.initKrcData = function() {
				this._audioName = this.getParam("audioName");
				var krcContents = this.getParam("krcContents");
				try {
					this._krcData = JSON.parse(krcContents);
					this.initLyricData();
				} catch (e) {
					this._krcData = null;
					this._lyricData = null;
					console.error(`error parsed krc contents.`, krcContents);
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.initLyricData = function() {
				var lyricData = JSON.parse(JSON.stringify(this._krcData.lyricLines));
				var lyricOffset = this.getParam("lyricOffset");
				lyricData.forEach(line => line && (line.start += lyricOffset));
				this._lyricData = lyricData;
			};
		})();
		(function() {
			MK_TextMakerAnim_Karaoke.prototype.createLyricLineSprites = function(lineIndex) {
				if (!this._lyricLineTargets[lineIndex]) {
					if (lineIndex === 0) {
						var maxWaitPoint = this.getParam("maxWaitPoint");
						var r = this.getParam("pointRadius");
						var color = this.getParam("pointColor");
						var pointWSpace = this.getParam("pointWSpace");
						var state = this._drawingState;
						var targets = [];
						this._lyricLineTargets[lineIndex] = targets;
						state.drawLineIndex = lineIndex;
						state.drawX = 0;
						for (var i = 1; i <= maxWaitPoint; i++) {
							state.drawTextIndex = i;
							this.addExtraContent("circle", state.drawX + r, r, r, color);
							var obj = targets[targets.length - 1];
							state.drawX += obj.data.spriteData.width + pointWSpace;
						}
						this.initLyricLineSprites(lineIndex);
					} else {
						var lineWidth = this.getParam("lineWidth");
						var uLineColor = this.getParam("uLineColor");
						var uTextColor = this.getParam("uTextColor");
						var dLineColor = this.getParam("dLineColor");
						var dTextColor = this.getParam("dTextColor");
						var state = this._drawingState;
						var lyricLineData = this._lyricData[lineIndex - 1];
						if (!lyricLineData) {
							return;
						}
						for (var upperLayer = 0; upperLayer <= 1; upperLayer++) {
							var realLineIndex = [ lineIndex, "UP" + lineIndex ][upperLayer];
							var targets = [];
							this._lyricLineTargets[realLineIndex] = targets;
							state.drawLineIndex = realLineIndex;
							state.drawX = 0;
							for (var i = 1, l = lyricLineData.content.length; i <= l; i++) {
								var textData = lyricLineData.content[i - 1];
								state.drawTextIndex = i;
								this.addExtraContent("text", textData.text, state.drawX, 0, [ dTextColor, uTextColor ][upperLayer], lineWidth, [ dLineColor, uLineColor ][upperLayer]);
								var obj = targets[targets.length - 1];
								state.drawX += obj.data.spriteData.width;
								obj.var.start = textData.start;
								obj.var.duration = textData.duration;
								obj.var.text = textData.text;
							}
						}
						this.initLyricLineSprites(lineIndex);
					}
				} else {
					this.initLyricLineSprites(lineIndex);
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.initLyricLineSprites = function(lineIndex) {
				var targetsList = [];
				if (lineIndex === 0) {
					targetsList.push(this.getLyricLineSprites(lineIndex));
				} else {
					for (var upperLayer = 0; upperLayer <= 1; upperLayer++) {
						targetsList.push(this.getLyricLineSprites(lineIndex, upperLayer));
					}
				}
				targetsList.forEach((targets, upperLayer) => targets.forEach(obj => obj && obj.sprite && lineIndex === 0 ? this.initWaitPointSprite(obj.sprite) : this.initLyricSprite(obj.sprite, upperLayer), this));
			};
			MK_TextMakerAnim_Karaoke.prototype.initLyricSprite = function(sprite, isTopLine) {
				sprite.visible = false;
				isTopLine = arguments.length < 2 ? true : isTopLine;
				if (isTopLine) {
					sprite.setFrame(0, 0, 0, 0);
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.initWaitPointSprite = function(sprite) {
				sprite.visible = false;
			};
		})();
		(function() {
			MK_TextMakerAnim_Karaoke.prototype.getLyricLineSprites = function(lineIndex, upperLayer) {
				var realLineIndex = !!upperLayer ? "UP" + lineIndex : lineIndex;
				return this._lyricLineTargets[realLineIndex];
			};
			MK_TextMakerAnim_Karaoke.prototype.getOrCreateLyricLineSprites = function(lineIndex, upperLayer) {
				var targets = this.getLyricLineSprites(lineIndex, upperLayer);
				if (!targets) {
					this.createLyricLineSprites(lineIndex);
					targets = this.getLyricLineSprites(lineIndex, upperLayer);
				}
				return targets;
			};
		})();
		(function() {
			MK_TextMakerAnim_Karaoke.prototype.drawExtraContent = function(type, ...args) {
				MK_TextMakerAnimBase.prototype.drawExtraContent.apply(this, arguments);
				if (type == "text") {
					this.drawExtraContent_text(...args);
				} else if (type == "circle") {
					this.drawExtraContent_circle(...args);
				} else {
					console.warn(`unknown drawExtraContent type "${type}".`);
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.drawExtraContent_text = function(text, x, y, color, outlineWidth, outlineColor, maxWidth, align) {
				if (this._msgWindow) {
					var oldColor = this._msgWindow.contents.textColor;
					var oldOutlineWidth = this._msgWindow.contents.outlineWidth;
					var oldOutlineColor = this._msgWindow.contents.outlineColor;
					this._msgWindow.changeTextColor(color || oldColor);
					this._msgWindow.contents.outlineColor = outlineColor || oldOutlineColor;
					this._msgWindow.contents.outlineWidth = outlineWidth || oldOutlineWidth;
					this._msgWindow.drawText(text, x, y, maxWidth, align);
					this._msgWindow.changeTextColor(oldColor);
					this._msgWindow.contents.outlineColor = oldOutlineColor;
					this._msgWindow.contents.outlineWidth = oldOutlineWidth;
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.drawExtraContent_circle = function(x, y, radius, color) {
				if (this._msgWindow) {
					this._msgWindow.contents.drawCircle(x, y, radius, color);
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.onInitExtraTarget = function(obj, ...args) {
				MK_TextMakerAnimBase.prototype.onInitExtraTarget.apply(this, arguments);
				if (!obj) return;
				var s = obj.sprite;
				var v = obj.var;
				var lineIndex = this._drawingState.drawLineIndex;
				var textIndex = this._drawingState.drawTextIndex;
				v.lineIndex = lineIndex;
				v.textIndex = textIndex;
				if (!this._lyricLineTargets[lineIndex]) {
					this._lyricLineTargets[lineIndex] = [];
				}
				this._lyricLineTargets[lineIndex][textIndex] = obj;
			};
		})();
		(function() {
			MK_TextMakerAnim_Karaoke.prototype.calLyricLinePosition = function(lineIndex, isTopLine, upperLayer) {
				var targets = this.getLyricLineSprites(lineIndex, upperLayer);
				if (targets && targets.length > 1) {
					var widthPadding = this.getParam("widthPadding");
					var lineSpace = this.getParam("lineSpace");
					var pointRadius = this.getParam("pointRadius");
					var pointHSpace = this.getParam("pointHSpace");
					var contentsWidth = this._msgWindow.contentsWidth();
					var contentsHeight = this._msgWindow.contentsHeight();
					var lineHeight = this._msgWindow.lineHeight();
					var heightPadding = Math.floor((contentsHeight - 2 * lineHeight - lineSpace) / 2);
					if (lineIndex === 0) {
						var lineX = widthPadding;
						var lineY = heightPadding - 2 * pointRadius - pointHSpace;
						return {
							x: lineX,
							y: lineY
						};
					} else {
						isTopLine = arguments.length >= 2 ? isTopLine : true;
						var minX = targets[1].data.spriteData.x;
						var maxX = targets[targets.length - 1].data.spriteData.x + targets[targets.length - 1].data.spriteData.width;
						var lineX = isTopLine ? widthPadding : contentsWidth - widthPadding - (maxX - minX);
						var lineY = isTopLine ? heightPadding : heightPadding + lineHeight + lineSpace;
						return {
							x: lineX,
							y: lineY
						};
					}
				} else {
					return {
						x: 0,
						y: 0
					};
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.calLyricLineY = function(lineIndex, isTopLine) {
				var widthPadding = this.getParam("widthPadding");
				var lineSpace = this.getParam("lineSpace");
				var pointRadius = this.getParam("pointRadius");
				var pointHSpace = this.getParam("pointHSpace");
				var contentHeight = this._msgWindow.contentsHeight();
				var lineHeight = this._msgWindow.lineHeight();
				var heightPadding = Math.floor((contentHeight - 2 * lineHeight - lineSpace) / 2);
				if (lineIndex === 0) {
					return heightPadding - 2 * pointRadius - pointHSpace;
				} else {
					isTopLine = arguments.length >= 2 ? isTopLine : true;
					return isTopLine ? heightPadding : heightPadding + lineHeight + lineSpace;
				}
			};
		})();
		(function() {
			MK_TextMakerAnim_Karaoke.prototype.showLyricLineSprites = function(lineIndex, isTopLine) {
				if (lineIndex <= 0) return;
				var targetsList = [];
				var offsetList = [];
				if (lineIndex === 0) {
					targetsList.push(this.getOrCreateLyricLineSprites(lineIndex));
					offsetList.push(this.calLyricLinePosition(lineIndex));
				} else {
					isTopLine = arguments.length >= 2 ? isTopLine : true;
					for (var upperLayer = 0; upperLayer <= 1; upperLayer++) {
						targetsList.push(this.getOrCreateLyricLineSprites(lineIndex, !!upperLayer));
						offsetList.push(this.calLyricLinePosition(lineIndex, isTopLine, !!upperLayer));
					}
				}
				targetsList.forEach((targets, targetIndex) => targets && offsetList[targetIndex] && targets.forEach(function(obj, i) {
					if (obj && obj.sprite) {
						var offset = offsetList[targetIndex];
						obj.sprite.x = obj.data.spriteData.drawX + offset.x;
						obj.sprite.y = obj.data.spriteData.drawY + offset.y;
						obj.sprite.visible = true;
					}
				}));
			};
			MK_TextMakerAnim_Karaoke.prototype.hideLyricLineSprites = function(lineIndex) {
				if (lineIndex <= 0) return;
				var targetsList = [];
				if (lineIndex === 0) {
					targetsList.push(this.getLyricLineSprites(lineIndex));
				} else {
					for (var upperLayer = 0; upperLayer <= 1; upperLayer++) {
						targetsList.push(this.getLyricLineSprites(lineIndex, !!upperLayer));
					}
				}
				targetsList.forEach(targets => targets && targets.forEach(function(obj) {
					if (obj && obj.sprite) {
						obj.sprite.visible = false;
					}
				}));
			};
		})();
		(function() {
			MK_TextMakerAnim_Karaoke.prototype.onPlay = function() {
				MK_TextMakerAnimBase.prototype.onPlay.apply(this, arguments);
				if (this.canPlay()) {
					var minWaitPoint = this.getParam("minWaitPoint");
					var maxWaitPoint = this.getParam("maxWaitPoint");
					this._minWaitSec = minWaitPoint * 1;
					this._maxWaitSec = maxWaitPoint * 1;
					var state = this._playingState;
					state.playing = true;
					state.played = false;
					state.lineIndex = 1;
					state.textIndex = 1;
					state.seek = 0;
					state.lineStarted = false;
					state.textStarted = false;
					state.lineFinished = false;
					state.textFinished = false;
					this.updateOnPlaying();
					this.playKaraokeAudio();
				} else {
					this.setFlagStopOn();
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.canPlay = function() {
				return this._audioName && this._lyricData;
			};
		})();
		(function() {
			MK_TextMakerAnim_Karaoke.prototype.playKaraokeAudio = function() {
				if (this._audioName) {
					var bgsObj = this.createAudioObject();
					this.stopKaraokeAudio();
					if (bgsObj.name) {
						this._bgsBuffer = this.createAudioBuffer(bgsObj.name);
					}
					AudioManager.updateBufferParameters(this._bgsBuffer, AudioManager._bgsVolume, bgsObj);
					this._bgsBuffer.play();
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.stopKaraokeAudio = function() {
				if (this._bgsBuffer) {
					this._bgsBuffer.stop();
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.karaokeAudioPlaying = function() {
				return this._bgsBuffer && this._bgsBuffer.isPlaying();
			};
			MK_TextMakerAnim_Karaoke.prototype.karaokeAudioSeek = function() {
				return this._bgsBuffer && this._bgsBuffer.isPlaying() ? this._bgsBuffer.seek() : 0;
			};
			MK_TextMakerAnim_Karaoke.prototype.createAudioObject = function() {
				var bgsObj = this._bgsObject ? this._bgsObject : AudioManager.makeEmptyAudioObject();
				bgsObj.name = this._audioName;
				bgsObj.pan = 0;
				bgsObj.pitch = 100;
				bgsObj.volume = 90;
				this._bgsObject = bgsObj;
				return this._bgsObject;
			};
			MK_TextMakerAnim_Karaoke.prototype.createAudioBuffer = function(name) {
				var ext = AudioManager.audioFileExt();
				var folder = "bgs";
				var url = AudioManager._path + folder + "/" + encodeURIComponent(name) + ext;
				if (!this._bgsBuffer || url !== this._bgsBuffer.url) {
					var audio = new WebAudio(url);
					audio.autoPlay = false;
					return audio;
				} else {
					return this._bgsBuffer;
				}
			};
		})();
		(function() {
			MK_TextMakerAnim_Karaoke.prototype.onPlaying = function() {
				MK_TextMakerAnimBase.prototype.onPlaying.apply(this, arguments);
				this.updateOnPlaying();
			};
			MK_TextMakerAnim_Karaoke.prototype.updateOnPlaying = function() {
				this.updatePlayingState();
				this.updateLyricLinesSprites();
				this.updateLyricTextsSprites();
				this.updateWaitPointSprites();
				this.updateStopKaraokeAudio();
			};
			MK_TextMakerAnim_Karaoke.prototype.updatePlayingState = function() {
				var state = this._playingState;
				var seek = this.playingSeek();
				var lineTextSeek = this.lyricLineTextSeek(seek);
				state.seek = seek;
				state.lineIndex = lineTextSeek.lineIndex;
				state.lineStarted = lineTextSeek.lineStarted;
				state.lineFinished = lineTextSeek.lineFinished;
				state.waitPointNum = lineTextSeek.waitPointNum;
				state.textIndex = lineTextSeek.textIndex;
				state.textStarted = lineTextSeek.textStarted;
				state.textFinished = lineTextSeek.textFinished;
				state.waiting = !!state.waitPointNum > 0;
			};
			MK_TextMakerAnim_Karaoke.prototype.updateLyricLinesSprites = function() {
				var state = this._playingState;
				if (state.lineIndex <= 0) {} else if (state.lineIndex == state.topLineIndex) {
					if (state.lineIndex + 1 <= this._lyricData.length) {
						this.updateLyricLineSpritesShow(state.lineIndex + 1, false);
					}
				} else if (state.lineIndex == state.botLineIndex) {
					if (state.lineIndex + 1 <= this._lyricData.length) {
						this.updateLyricLineSpritesShow(state.lineIndex + 1, true);
					}
				} else if (!state.played) {
					state.isTopLine = true;
					this.updateLyricLineSpritesShow(state.lineIndex, state.isTopLine);
					this.updateLyricLineSpritesShow(state.lineIndex + 1, !state.isTopLine);
					state.played = true;
				} else {
					this.updateLyricLineSpritesHide(state.topLineIndex);
					this.updateLyricLineSpritesHide(state.botLineIndex);
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.updateLyricLineSpritesHide = function(lineIndex) {
				var state = this._playingState;
				if (state.topLineIndex == lineIndex) {
					this.hideLyricLineSprites(...arguments);
					state.topLineIndex = -1;
				} else if (state.botLineIndex == lineIndex) {
					this.hideLyricLineSprites(...arguments);
					state.botLineIndex = -1;
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.updateLyricLineSpritesShow = function(lineIndex, isTopLine) {
				var state = this._playingState;
				var key = isTopLine ? "topLineIndex" : "botLineIndex";
				if (state[key] != lineIndex) {
					this.updateLyricLineSpritesHide(state[key]);
					this.showLyricLineSprites(...arguments);
					state[key] = lineIndex;
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.updateLyricTextsSprites = function() {
				var state = this._playingState;
				var lineIndex = state.lineIndex;
				var seek = state.seek;
				if (lineIndex > 0 && this._lyricData) {
					var targets = this.getOrCreateLyricLineSprites(lineIndex, true);
					var lyricLineData = this._lyricData[lineIndex - 1];
					if (targets && lyricLineData) {
						targets.forEach(function(obj) {
							if (obj && obj.sprite) {
								var text = lyricLineData.content[obj.var.textIndex - 1];
								var realDuration = seek - lyricLineData.start - text.start;
								var widthRate = (realDuration / text.duration).clamp(0, 1);
								var w = Math.floor(obj.data.spriteData.width * widthRate);
								obj.sprite.setFrame(0, 0, w, obj.data.spriteData.height);
							}
						}, this);
					}
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.updateWaitPointSprites = function() {
				var state = this._playingState;
				var waitPointNum = state.waitPointNum;
				var targets = this.getOrCreateLyricLineSprites(0);
				if (waitPointNum > 0) {
					targets.forEach((obj, i) => obj && obj.sprite && (obj.sprite.visible = i <= waitPointNum));
					state.waitPointShowedNum = waitPointNum;
				} else {
					if (state.waitPointShowedNum > 0) {
						targets.forEach(obj => obj && obj.sprite && (obj.sprite.visible = false));
					}
					state.waitPointShowedNum = 0;
				}
			};
		})();
		(function() {
			const MK_TextMakerAnim_Karaoke_DEBUG_AUDIO_SEEK = false;
			if (!MK_TextMakerAnim_Karaoke_DEBUG_AUDIO_SEEK) {
				MK_TextMakerAnim_Karaoke.prototype.playingSeek = function() {
					return this.karaokeAudioSeek() * 1e3;
				};
			} else {
				MK_TextMakerAnim_Karaoke.prototype.playingSeek = function() {
					return this._debug_audioSeek || 0;
				};
			}
			MK_TextMakerAnim_Karaoke.prototype.minWaitSec = function() {
				return this._minWaitSec;
			};
			MK_TextMakerAnim_Karaoke.prototype.maxWaitSec = function() {
				return this._maxWaitSec;
			};
			MK_TextMakerAnim_Karaoke.prototype.calWaitPointNum = function(seek, nextStart) {
				var deltaSec = Math.ceil((nextStart - seek) / 1e3);
				if (this._playingState.waiting) {
					if (deltaSec >= this.maxWaitSec()) {
						return this.maxWaitSec();
					}
					return deltaSec;
				} else {
					if (deltaSec >= this.minWaitSec()) {
						if (deltaSec >= this.maxWaitSec()) {
							return this.maxWaitSec();
						}
						return deltaSec;
					}
					return 0;
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.lyricLineSeek = function(seek) {
				var seek = arguments.length >= 1 ? seek : this.playingSeek();
				var currentLineIndex = this._playingState ? this._playingState.lineIndex : 1;
				var foundIndex = -1;
				var lineStarted = false;
				var lineFinished = false;
				var waitPointNum = 0;
				if (this._lyricData) {
					var line = null, nextLine = null;
					for (var findBeforeList = 0; findBeforeList <= 1; findBeforeList++) {
						var arr = this._lyricData;
						var startIndex = currentLineIndex <= 0 ? findBeforeList ? 0 : 0 : findBeforeList ? 0 : currentLineIndex - 1;
						var endIndex = currentLineIndex <= 0 ? findBeforeList ? arr.length : 0 : findBeforeList ? currentLineIndex - 1 : arr.length;
						for (var i = startIndex; i < endIndex; i++) {
							line = arr[i];
							nextLine = arr[i + 1];
							if (seek < line.start) {} else if (seek < line.start + line.duration) {
								foundIndex = i;
								lineStarted = true;
								lineFinished = false;
								break;
							} else if (nextLine && seek < nextLine.start) {
								waitPointNum = this.calWaitPointNum(seek, nextLine.start);
								if (nextLine.start - seek > this.maxWaitSec() * 1e3) {
									foundIndex = i;
									lineStarted = true;
									lineFinished = true;
									break;
								} else {
									foundIndex = i + 1;
									lineStarted = false;
									lineFinished = false;
									break;
								}
							} else if (!nextLine) {
								foundIndex = i + 1;
								lineStarted = false;
								lineFinished = true;
								break;
							}
						}
						if (foundIndex >= 0) {
							break;
						}
					}
					if (foundIndex < 0) {
						foundIndex = 0;
						lineStarted = false;
						lineFinished = false;
						if (this._lyricData[0]) {
							waitPointNum = this.calWaitPointNum(seek, this._lyricData[0].start);
						}
					}
				}
				return {
					lineIndex: foundIndex + 1,
					lineStarted: lineStarted,
					lineFinished: lineFinished,
					waitPointNum: waitPointNum
				};
			};
			MK_TextMakerAnim_Karaoke.prototype.lyricLineTextSeek = function(seek) {
				var seek = arguments.length >= 1 ? seek : this.playingSeek();
				var lineSeek = this.lyricLineSeek(seek);
				var lineIndex = lineSeek.lineIndex;
				var lineFinished = lineSeek.lineFinished;
				var waitPointNum = lineSeek.waitPointNum;
				var currentLineIndex = this._playingState ? this._playingState.lineIndex : 1;
				var currentTextIndex = this._playingState ? this._playingState.textIndex : 1;
				var foundIndex = -1;
				var textStarted = false;
				var textFinished = false;
				if (this._lyricData && lineIndex > 0 && this._lyricData[lineIndex - 1]) {
					var text = null, nextText = null;
					for (var findBeforeText = 0; findBeforeText <= 1; findBeforeText++) {
						var arr = this._lyricData[lineIndex - 1].content;
						var startIndex = currentLineIndex != lineIndex || currentTextIndex <= 0 ? findBeforeText ? 0 : 0 : findBeforeText ? 0 : currentTextIndex - 1;
						var endIndex = currentLineIndex != lineIndex || currentTextIndex <= 0 ? findBeforeText ? arr.length : 0 : findBeforeText ? currentTextIndex - 1 : arr.length;
						for (var i = startIndex; i < endIndex; i++) {
							text = arr[i];
							nextText = arr[i + 1];
							if (seek < text.start) {} else if (seek < text.start + text.duration) {
								foundIndex = i;
								textStarted = true;
								textFinished = false;
								break;
							} else if (nextText && seek < nextText.start) {
								foundIndex = i;
								textStarted = true;
								textFinished = true;
								break;
							} else if (!nextText) {
								foundIndex = i + 1;
								textStarted = false;
								textFinished = true;
								break;
							}
						}
						if (foundIndex >= 0) {
							break;
						}
					}
					if (foundIndex < 0) {
						foundIndex = 0;
						textStarted = false;
						textFinished = false;
					}
				}
				return Object.assign({
					textIndex: foundIndex + 1,
					textStarted: textStarted,
					textFinished: textFinished
				}, lineSeek);
			};
		})();
		(function() {
			MK_TextMakerAnim_Karaoke.prototype.mesasgeWindowClosed = function() {
				return !this._msgWindow || this._msgWindow.isClosed();
			};
			MK_TextMakerAnim_Karaoke.prototype.updateStopKaraokeAudio = function() {
				if (this.karaokeAudioPlaying() && this.mesasgeWindowClosed()) {
					this.stopKaraokeAudio();
				}
			};
			MK_TextMakerAnim_Karaoke.prototype.destroyMe = function() {
				MK_TextMakerAnimBase.prototype.destroyMe.apply(this, arguments);
				this.stopKaraokeAudio();
			};
		})();
		window.MK_TextMakerAnim_Karaoke = MK_TextMakerAnim_Karaoke;
		return MK_TextMakerAnim_Karaoke;
	})();
	(function() {
		function MK_TextMakerAnim_Phonetic() {
			this.initialize.apply(this, arguments);
		}
		MK_TextMakerAnim_Phonetic.prototype = Object.create(MK_TextMakerAnimBase.prototype);
		MK_TextMakerAnim_Phonetic.prototype.constructor = MK_TextMakerAnim_Phonetic;
		MK_TextMakerAnim_Phonetic._DEFAULT_ANIM_CODE = 33;
		MK_TextMakerAnim_Phonetic._DEFAULT_ANIM_NAME = "TextMakerAnim_Phonetic";
		MK_TextMakerAnim_Phonetic._PARAM_CONFIG = [ [ "phonetic", "string", "一(yi)二(er)三(san)四(si\\(4\\))" ] ];
		MK_TextMakerAnim_Phonetic.prototype.onCreate = function() {
			MK_TextMakerAnimBase.prototype.onCreate.apply(this, arguments);
			this._phoneticList = [];
		};
		MK_TextMakerAnim_Phonetic.prototype.onPlay = function() {
			MK_TextMakerAnimBase.prototype.onPlay.apply(this, arguments);
		};
		window.MK_TextMakerAnim_Phonetic = MK_TextMakerAnim_Phonetic;
		return MK_TextMakerAnim_Phonetic;
	})();
	(function() {
		function MK_TextStyleAnimBase() {
			this.initialize.apply(this, arguments);
		}
		MK_TextStyleAnimBase.prototype = Object.create(MK_TextAnimBase.prototype);
		MK_TextStyleAnimBase.prototype.constructor = MK_TextStyleAnimBase;
		MK_TextStyleAnimBase._DEFAULT_ANIM_CODE = 51;
		MK_TextStyleAnimBase._DEFAULT_ANIM_NAME = "TextStyleAnimBase";
		MK_TextStyleAnimBase._PARAM_CONFIG = [];
		(function() {})();
		window.MK_TextStyleAnimBase = MK_TextStyleAnimBase;
		return MK_TextStyleAnimBase;
	})();
	(function() {
		function MK_TextStyleAnim_Center() {
			this.initialize.apply(this, arguments);
		}
		MK_TextStyleAnim_Center.prototype = Object.create(MK_TextStyleAnimBase.prototype);
		MK_TextStyleAnim_Center.prototype.constructor = MK_TextStyleAnim_Center;
		MK_TextStyleAnim_Center._DEFAULT_ANIM_CODE = 52;
		MK_TextStyleAnim_Center._DEFAULT_ANIM_NAME = "TextStyleAnim_Center";
		MK_TextStyleAnim_Center._PARAM_CONFIG = [];
		MK_TextStyleAnim_Center.prototype.onInitTarget = function(newObj) {
			MK_TextStyleAnimBase.prototype.onInitTarget.apply(this, arguments);
			var contents = this.getMsgContents();
			if (contents && contents.width > 0) {
				var width = contents.width;
				var targets = this.getTargets();
				var eachLine = {};
				targets.forEach(function(obj) {
					var d = obj.data.spriteData;
					var t = obj.data.textState;
					var key = t.pageNum + "_" + t.lineNum;
					eachLine[key] = eachLine[key] || {
						maxX: d.x + d.width,
						arr: []
					};
					eachLine[key].arr.push(obj);
					if (eachLine[key].maxX < d.x + d.width) {
						eachLine[key].maxX = d.x + d.width;
					}
				}, this);
				for (var key in eachLine) {
					var offsetX = Math.floor((width - eachLine[key].maxX) / 2);
					eachLine[key].arr.forEach(function(obj) {
						obj.sprite.x = offsetX + obj.data.spriteData.x;
					}, this);
				}
			}
		};
		window.MK_TextStyleAnim_Center = MK_TextStyleAnim_Center;
		return MK_TextStyleAnim_Center;
	})();
	(function() {
		function MK_SpriteAnimationSet() {
			throw new Error("MK_SpriteAnimationSet is a static class");
		}
		MK_SpriteAnimationSet._animationClasses = [];
		(function() {
			MK_SpriteAnimationSet.addSpriteAnimationClass = function(animClass, name) {
				if (animClass === MK_SpriteAnimBase || animClass && animClass.prototype && animClass.prototype instanceof MK_SpriteAnimBase) {
					var animObj = {
						class: animClass,
						name: name || animClass.name,
						code: this._animationClasses.length,
						params: {}
					};
					this._animationClasses.push(animObj);
				} else {
					console.warn(`invalid sprite animtion class.`, animClass, name);
					this._animationClasses.push(null);
				}
			};
			MK_SpriteAnimationSet.addSpriteAnimationClassAt = function(index, animClass, name) {
				if (animClass === MK_SpriteAnimBase || animClass && animClass.prototype && animClass.prototype instanceof MK_SpriteAnimBase) {
					var animObj = {
						class: animClass,
						name: name || animClass.name,
						code: index,
						params: {}
					};
					if (!!this._animationClasses[index]) {
						var oldAnimObj = this._animationClasses[index];
						console.warn(`sprite animation code ${index} exists. ${animObj.name} -> ${oldAnimObj.name}`);
					}
					this._animationClasses[index] = animObj;
				} else {
					console.warn(`invalid sprite animtion class.`, index, animClass, name);
				}
			};
		})();
		(function() {
			MK_SpriteAnimationSet.getSpriteAnimObjByCode = function(code) {
				return this._animationClasses[code];
			};
			MK_SpriteAnimationSet.getSpriteAnimObjByName = function(name) {
				return this._animationClasses.find(obj => obj && obj.name == name);
			};
			MK_SpriteAnimationSet.getSpriteAnimClassByCode = function(code) {
				var obj = this.getSpriteAnimObjByCode(code);
				return !!obj ? obj.class : null;
			};
			MK_SpriteAnimationSet.getSpriteAnimClassByName = function(name) {
				var obj = this.getSpriteAnimObjByName(name);
				return !!obj ? obj.class : null;
			};
			MK_SpriteAnimationSet.getSpriteAnimParamsByCode = function(code) {
				var obj = this.getSpriteAnimObjByCode(code);
				return !!obj ? obj.params : null;
			};
			MK_SpriteAnimationSet.getSpriteAnimParamsByName = function(name) {
				var obj = this.getSpriteAnimObjByName(name);
				return !!obj ? obj.params : null;
			};
		})();
		(function() {
			MK_SpriteAnimationSet.setSpriteAnimParamsByCode = function(code, key, value) {
				var obj = this.getSpriteAnimObjByCode(code);
				if (!!obj) {
					obj.params[key] = value;
				} else {
					console.warn(`not found animtion class by code "${code}".`, code, key, value);
				}
			};
			MK_SpriteAnimationSet.setSpriteAnimParamsByName = function(name, key, value) {
				var obj = this.getSpriteAnimObjByName(name);
				if (!!obj) {
					obj.params[key] = value;
				} else {
					console.warn(`not found animtion class by name "${name}".`, name, key, value);
				}
			};
		})();
		(function() {
			MK_SpriteAnimationSet.getSpriteAnimParamsByCode = function(code, key) {
				var obj = this.getSpriteAnimObjByCode(code);
				if (!!obj) {
					return obj.params[key];
				} else {
					console.warn(`not found animtion class by code "${code}".`, code, key, value);
				}
			};
			MK_SpriteAnimationSet.getSpriteAnimParamsByName = function(name, key) {
				var obj = this.getSpriteAnimObjByName(name);
				if (!!obj) {
					return obj.params[key];
				} else {
					console.warn(`not found animtion class by name "${name}".`, name, key, value);
				}
			};
		})();
		window.MK_SpriteAnimationSet = MK_SpriteAnimationSet;
		return MK_SpriteAnimationSet;
	})();
	(function() {
		(function(list, startIndex) {
			list.forEach((each, i) => MK_SpriteAnimationSet.addSpriteAnimationClassAt(startIndex + i, each));
		})([ MK_SpriteAnimBase ], 0);
		(function(list, startIndex) {
			list.forEach((each, i) => MK_SpriteAnimationSet.addSpriteAnimationClassAt(startIndex + i, each));
		})([ MK_TextAnimBase, MK_TextAnim_Fade, MK_TextAnim_Zoom, MK_TextAnim_Zoom2, MK_TextAnimBase, MK_TextAnim_Shake, MK_TextAnim_Zoom3, MK_TextAnim_Wave, MK_TextAnim_Rotation, MK_TextAnim_Swing, MK_TextAnim_Random ], 1);
		(function(list, startIndex) {
			list.forEach((each, i) => MK_SpriteAnimationSet.addSpriteAnimationClassAt(startIndex + i, each));
		})([ MK_TextMakerAnimBase, MK_TextMakerAnim_Karaoke ], 31);
		(function(list, startIndex) {
			list.forEach((each, i) => MK_SpriteAnimationSet.addSpriteAnimationClassAt(startIndex + i, each));
		})([ MK_TextStyleAnimBase, MK_TextStyleAnim_Center ], 51);
	})();
})();