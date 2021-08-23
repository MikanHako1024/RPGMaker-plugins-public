// ================================================================
// MKP_LogWriter.js
// 日志记录
// ================================================================
//  author : Mikan (MikanHako)
//  plugin : MKP_LogWriter.js 日志记录
// version : v1.0.4 自定义了序列化方法，解决JsonEx.stringify影响被序列化对象的问题
// ----------------------------------------------------------------
// [Twitter] https://twitter.com/_MikanHako/
// -[GitHub] https://github.com/MikanHako1024/
// ---[Blog] NONE
// -----[QQ] 312859582
// ================================================================
// MIT License
// Copyright (C) 2021 Mikan(MikanHako)
// http://opensource.org/licenses/mit-license.php
// ================================================================




/*:
 * @plugindesc 日志记录 <MKP_LogWriter>
 * @author Mikan(MikanHako)
 * @version 
 *   v1.0.4 自定义了序列化方法，解决JsonEx.stringify影响被序列化对象的问题
 *   v1.0.3 解决JsonEx.stringify报错问题
 *   v1.0.2 先显示按钮再显示文字 防止文字太长使得按钮不显示
 *   v1.0.1 增加按钮提示 + 可以通过插件参数设置按钮文字和颜色
 *   v1.0.0 2021/08/04 完成初版插件
 *   v0.0.0 2021/08/03 项目计划中
 * 
 * 
 * 
 * 
 * @help
 * 
 * ## 简要说明
 * 
 * 本插件用于显示和保存详细的错误信息  
 * 当报错让游戏无法进行时 将会出现以下三个按钮  
 * 
 * + retry
 *   > 重试加载文件，重新加载缺失图片或脚本  
 *   > 只有在相应场合才显示该按钮  
 * 
 * + save error info
 *   > 保存错误信息，并打开文件所在文件夹  
 *   > 错误日志文件存储在 `【游戏目录】/save/errorInfo.log`  
 * 
 * + show detail info in explorer
 *   > 显示详细信息，打开缓存数据文件夹  
 *   > 缓存数据文件夹在 `C:\Users\【用户名】\AppData\Local\【游戏名】\User Data\Default`  
 * 
 * 
 * ## 其他说明
 * 
 * 本插件针对 RPGMakerMV v1.6.2 版本  
 * 导入本插件时 必须置于插件管理器最上方  
 * 版本不同或未置于插件管理器最上方时 可能会出现一些问题  
 * 
 * 
 * ## 脚本说明
 * 
 * + 保存错误信息
 *   `ConsoleRecorder.saveMessageFile()`  
 * 
 * + 打开错误信息文件所在文件夹
 *   `ConsoleRecorder.showMessageFileInExplorer()`  
 * 
 * + 打开详细信息文件夹
 *   `ConsoleRecorder.showDetailInfoInExplorer()`  
 * 
 * 
 * ## 后续任务
 * 
 * - [x] 自己的序列化方法
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
 * @param ShowButton_Retry
 * @text 显示[重试加载文件]按钮
 * @type boolean
 * @on 显示
 * @off 不显示
 * @default true
 * 
 * @param ButtonText_Retry
 * @text [重试加载文件]按钮文本
 * @type string
 * @default retry
 * 
 * @param ButtonPrompt_Retry
 * @text [重试加载文件]按钮提示文本
 * @type string
 * @default reload picture or script file
 * 
 * @param 
 * 
 * @param ShowButton_SaveError
 * @text 显示[保存错误信息]按钮
 * @type boolean
 * @on 显示
 * @off 不显示
 * @default true
 * 
 * @param ButtonText_SaveError
 * @text [保存错误信息]按钮文本
 * @type string
 * @default save error info
 * 
 * @param ButtonPrompt_SaveError
 * @text [保存错误信息]按钮提示文本
 * @type string
 * @default collect error information for debugging
 * 
 * @param 
 * 
 * @param ShowButton_ShowDetail
 * @text 显示[显示详细信息]按钮
 * @type boolean
 * @on 显示
 * @off 不显示
 * @default true
 * 
 * @param ButtonText_ShowDetail
 * @text [显示详细信息]按钮文本
 * @type string
 * @default show detail info in explorer
 * 
 * @param ButtonPrompt_ShowDetail
 * @text [显示详细信息]按钮提示文本
 * @type string
 * @default show detail information for debugging
 * 
 * @param 
 * 
 * @param ButtonTextColor
 * @text 按钮文字颜色
 * @desc 可以输入 颜色英文 或 rbg(255, 255, 255) 型颜色 或 #FFFFFF 型颜色
 * @type string
 * @default #ffffff
 * 
 * @param ButtonPromptColor
 * @text 按钮提示文字颜色
 * @desc 可以输入 颜色英文 或 rbg(255, 255, 255) 型颜色 或 #FFFFFF 型颜色
 * @type string
 * @default orange
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

	var pluginName = 'MKP_LogWriter';
	MK_Plugins.paramGet[pluginName] = MK_Plugins.getPluginParam(pluginName);
	MK_Plugins.param[pluginName] = {};

	function parse_boolean(val, defVal) {
		if (val === 'true') return true;
		else if (val === 'false') return false;
		else return JSON.parse(JSON.stringify(defVal));
	}

	function parse_string(val, defVal) {
		if (!!val) return String(val);
		else return String(defVal);
	}

	var paramGet = MK_Plugins.paramGet[pluginName];
	var param = MK_Plugins.param[pluginName];

	param['ShowButton_Retry']       	 = parse_boolean(paramGet['ShowButton_Retry']   	, 'true');
	param['ButtonText_Retry']       	 = parse_string(paramGet['ButtonText_Retry']    	, 'retry');
	param['ButtonPrompt_Retry']     	 = parse_string(paramGet['ButtonPrompt_Retry']  	, 'reload picture or script file');

	param['ShowButton_SaveError']   	 = parse_boolean(paramGet['ShowButton_SaveError'] 	, 'true');
	param['ButtonText_SaveError']   	 = parse_string(paramGet['ButtonText_SaveError'] 	, 'save error info');
	param['ButtonPrompt_SaveError'] 	 = parse_string(paramGet['ButtonPrompt_SaveError'] 	, 'collect error information for debugging');

	param['ShowButton_ShowDetail']  	 = parse_boolean(paramGet['ShowButton_ShowDetail'] 	, 'true');
	param['ButtonText_ShowDetail']  	 = parse_string(paramGet['ButtonText_ShowDetail'] 	, 'show detail info in explorer');
	param['ButtonPrompt_ShowDetail'] 	 = parse_string(paramGet['ButtonPrompt_ShowDetail'] , 'show detail information for debugging');

	param['ButtonTextColor']        	 = parse_string(paramGet['ButtonTextColor']     	, '#ffffff');
	param['ButtonPromptColor']      	 = parse_string(paramGet['ButtonPromptColor']   	, 'orange');

})();




// ----------------------------------------------------------------
// ConsoleRecorder

function ConsoleRecorder() {
	throw new Error("\"ConsoleRecorder\" is a static class.");
};

// --------------------------------
// 初始化

ConsoleRecorder.initialize = function() {
	this.clearRecords();

	this._setupConsoleLogFunction();
	this._setupConsoleInfoFunction();
	this._setupConsoleWarnFunction();
	this._setupConsoleErrorFunction();
};

ConsoleRecorder.clearRecords = function() {
	this._records = [];
};


// --------------------------------
// 创造和添加记录

ConsoleRecorder.makeErrorStack = function(error, deep, abbreviated) {
	return error.stack
		.split('\n')
		//.slice(4)
		.slice(deep || 0)
		.map(each => 
			abbreviated
			 ? each.replace(
				/chrome-extension:\/\/[a-z]*?\//, ''
			)
			 : each.replace(
				/chrome-extension:\/\/[a-z]*?\//, 
				'file://' + nw.__dirname.replace(/\\/g, '/') + '/'
			)
		)
		.join('\n');
};

ConsoleRecorder.makeArgumentsString = function(...args) {
	/*
	return [...args].map(function(each) {
		try {
			return JsonEx.stringify(each);
			// ？JsonEx.stringify 给对象添加新数据 ...
			// ？执行 JsonEx.stringify(messageWindow) 会改变其 transform._worldId 最终导致报错 ...
			// TODO : ？自己的 序列化方法 ...
		}
		catch (e1) {
			// ？普通的 JSON.stringify 可能会因对象循环而报错 ...
			try {
				return JSON.stringify(each);
			}
			catch (e2) {
				//return `${String(object)}(can't stringify)`;
				try {
					return `${String(object)}(can't stringify)`;
				}
				catch (e3) {
					return `(unknown object)`;
				}
			}
		}
	}).join('  ');
	*/

	return [...args].map(each => this.stringify(each), this).join('  \n');
};

ConsoleRecorder._makeNewRecord = function(type, ...args) {
	//var stack = '';
	//try { throw new Error(); }
	//catch (e) { stack = e.stack; }
	var error = '';
	try { throw new Error(); }
	catch (e) { error = e; }
	return {
		type : type, 
		//msg : [...args].map(each => JSON.stringify(each)).join('  '), 
		//msg : [...args].map(each => JsonEx.stringify(each)).join('  '), 
		// 包含 无constructor的对象时 使用JsonEx.stringify 会报错 ...
		/*
		msg : [...args].map(function(each) {
			try {
				return JsonEx.stringify(each);
				// ？JsonEx.stringify 给对象添加新数据 ...
				// ？执行 JsonEx.stringify(messageWindow) 会改变其 transform._worldId 最终导致报错 ...
				// TODO : ？自己的 序列化方法 ...
			}
			catch (e1) {
				// ？普通的 JSON.stringify 可能会因对象循环而报错 ...
				try {
					return JSON.stringify(each);
				}
				catch (e2) {
					//return `${String(object)}(can't stringify)`;
					try {
						return `${String(object)}(can't stringify)`;
					}
					catch (e3) {
						return `(unknown object)`;
					}
				}
			}
		}).join('  '), 
		*/
		msg : this.makeArgumentsString(...args), 

		//stack : stack.split('\n').slice(4).join('\n'), 
		//stack : stack
		//	.split('\n')
		//	.slice(4)
		//	.map(each => 
		//		each.replace(
		//			/chrome-extension:\/\/[a-z]*?\//, 
		//			'file://' + nw.__dirname.replace(/\\/g, '/') + '/'
		//		))
		//	.join('\n'), 
		//stack : this.makeErrorStack(error), 
		stack : this.makeErrorStack(error, 4), 
		time : Date.now(), 
	};
};

ConsoleRecorder._addNewRecord = function(type, ...args) {
	this._records.push(this._makeNewRecord(type, ...args));
};


// --------------------------------
// 序列化方法

ConsoleRecorder.STRINGIFY_MAX_DEEP = 0;
ConsoleRecorder.stringify = function(value) {
	return JSON.stringify(this._stringifyEncode(value, 0));
};

ConsoleRecorder._stringifyEncode = function(value, deep) {
	var type = Object.prototype.toString.call(value);
	var resObj = '[Unknown]';
	if (type === '[object Object]') {
		if (deep > this.STRINGIFY_MAX_DEEP) {
			resObj = `[object Object : ${value.constructor ? value.constructor.name : 'Unknown'}]`;
		}
		else {
			resObj = {};
			for (var key in value) {
				if (typeof value[key] !== 'function') {
					resObj[key] = this._stringifyEncode(value[key], deep + 1);
				}
			}
		}
	}
	else if (type === '[object Array]') {
		resObj = [];
		for (var key in value) {
			resObj[key] = this._stringifyEncode(value[key], deep + 0);
		}
	}
	else if (type === '[object Function]') {
		//resObj = `[object Function ${value.constructor.name}]`;
		//resObj = `[object Function]`;
	}
	else if (type === '[object Boolean]') {
		resObj = value;
	}
	else if (type === '[object Number]') {
		resObj = value;
	}
	else if (type === '[object String]') {
		resObj = value;
	}
	else {
		resObj = type;
	}
	return resObj;
};


// --------------------------------
// 设置 console 函数

ConsoleRecorder._setupConsoleLogFunction = function() {
	this._console_log_function = console.log;
	console.log = function() {
		ConsoleRecorder._addNewRecord('log', ...arguments);
		ConsoleRecorder._console_log_function.apply(this, arguments);
	};
};
ConsoleRecorder._setupConsoleInfoFunction = function() {
	this._console_info_function = console.info;
	console.info = function() {
		ConsoleRecorder._addNewRecord('info', ...arguments);
		ConsoleRecorder._console_info_function.apply(this, arguments);
	};
};
ConsoleRecorder._setupConsoleWarnFunction = function() {
	this._console_warn_function = console.warn;
	console.warn = function() {
		ConsoleRecorder._addNewRecord('warn', ...arguments);
		ConsoleRecorder._console_warn_function.apply(this, arguments);
	};
};
ConsoleRecorder._setupConsoleErrorFunction = function() {
	this._console_error_function = console.error;
	console.error = function() {
		ConsoleRecorder._addNewRecord('error', ...arguments);
		ConsoleRecorder._console_error_function.apply(this, arguments);
	};
};


// --------------------------------
// 保存消息

ConsoleRecorder.makeSaveMessage = function() {
	return this._records
		.map(record => 
			[
				`[${ record.type }] [${ new Date(record.time).toJSON() }]`, 
				record.msg, 
				record.stack, 
			].join('\n')
		).join('\n\n');
};

ConsoleRecorder.messageFilePath = function() {
	return nw.__dirname + '\\save';
};
ConsoleRecorder.messageFileFullName = function() {
	return this.messageFilePath() + '\\errorInfo.log';
};

(function() {

const _MK_StorageManager_localFilePath = StorageManager.localFilePath;
StorageManager.localFilePath = function(savefileId) {
	if (savefileId === 'errorInfo') {
		return this.localFileDirectoryPath() + 'errorInfo.log';
	}
	else {
		return _MK_StorageManager_localFilePath.apply(this, arguments);
	}
};

const _MK_StorageManager_webStorageKey = StorageManager.webStorageKey;
StorageManager.webStorageKey = function(savefileId) {
	if (savefileId === 'errorInfo') {
		return 'Error Info';
	}
	else {
		return _MK_StorageManager_webStorageKey.apply(this, arguments);
	}
};

})();

ConsoleRecorder.saveMessageFile = function(callback) {
	StorageManager.save('errorInfo', this.makeSaveMessage());
};


// --------------------------------
// 显示文件

ConsoleRecorder.showMessageFileInExplorer = function() {
	nw.Shell.showItemInFolder(this.messageFileFullName());
};

ConsoleRecorder.showDetailInfoInExplorer = function() {
	//nw.Shell.openItem(nw.App.dataPath);
	nw.Shell.showItemInFolder(nw.App.dataPath);
};


MK_Plugins.class['ConsoleRecorder'] = ConsoleRecorder;


ConsoleRecorder.initialize();


// TODO : ？保存现场 ...




(function() {

const pluginName = 'MKP_LogWriter';
const param = MK_Plugins.param[pluginName];

Graphics.ERROR_PRINTER_SHOW_BUTTON_RETRY = param['ShowButton_Retry'];
Graphics.ERROR_PRINTER_BUTTON_TEXT_RETRY = param['ButtonText_Retry'];
Graphics.ERROR_PRINTER_BUTTON_PROMPT_RETRY = param['ButtonPrompt_Retry'];

Graphics.ERROR_PRINTER_SHOW_BUTTON_SAVE_ERROR = param['ShowButton_SaveError'];
Graphics.ERROR_PRINTER_BUTTON_TEXT_SAVE_ERROR = param['ButtonText_SaveError'];
Graphics.ERROR_PRINTER_BUTTON_PROMPT_SAVE_ERROR = param['ButtonPrompt_SaveError'];

Graphics.ERROR_PRINTER_SHOW_BUTTON_SHOW_DETAIL = param['ShowButton_ShowDetail'];
Graphics.ERROR_PRINTER_BUTTON_TEXT_SHOW_DETAIL = param['ButtonText_ShowDetail'];
Graphics.ERROR_PRINTER_BUTTON_PROMPT_SHOW_DETAIL = param['ButtonPrompt_ShowDetail'];

Graphics.ERROR_PRINTER_BUTTON_TEXT_COLOR = param['ButtonTextColor'];
Graphics.ERROR_PRINTER_BUTTON_PROMPT_COLOR = param['ButtonPromptColor'];

})();


(function() {

Graphics._createErrorPrinterButton = function(name, callback) {
	var button = document.createElement('button');
	button.innerHTML = name;
	button.style.margin = '5px';
	button.style.fontSize = '24px';
	//button.style.color = '#ffffff';
	button.style.color = this.ERROR_PRINTER_BUTTON_TEXT_COLOR;
	button.style.backgroundColor = '#000000';
	button.onmousedown = button.ontouchstart = callback;
	return button;
};

//Graphics._createErrorPrinterButtonPrompt = function(text, color) {
Graphics._createErrorPrinterButtonPrompt = function(text) {
	var font = document.createElement('font');
	font.innerHTML = text;
	//font.style.color = color;
	//font.style.color = 'orange';
	font.style.color = this.ERROR_PRINTER_BUTTON_PROMPT_COLOR;
	font.style.margin = '5px';
	return font;
};

Graphics._errorPrinterAddRetryLoad = function() {
	var button = this._createErrorPrinterButton(
		//'retry', 
		this.ERROR_PRINTER_BUTTON_TEXT_RETRY, 
		function(event) {
			ResourceHandler.retry();
			event.stopPropagation();
		});
	this._errorPrinter.appendChild(button);

	var msg = this._createErrorPrinterButtonPrompt(
		//'reload picture or script file', 
		//'orange');
		this.ERROR_PRINTER_BUTTON_PROMPT_RETRY);
	this._errorPrinter.appendChild(msg);
};

Graphics._errorPrinterAddSaveError = function() {
	var button = this._createErrorPrinterButton(
		//'save error info', 
		this.ERROR_PRINTER_BUTTON_TEXT_SAVE_ERROR, 
		function(event) {
			ConsoleRecorder.saveMessageFile();
			ConsoleRecorder.showMessageFileInExplorer();
		});
	this._errorPrinter.appendChild(button);

	var msg = this._createErrorPrinterButtonPrompt(
		//'collect error information for debugging', 
		//'orange');
		this.ERROR_PRINTER_BUTTON_PROMPT_SAVE_ERROR);
	this._errorPrinter.appendChild(msg);
};

Graphics._errorPrinterAddShowDetail = function() {
	var button = this._createErrorPrinterButton(
		//'show detail info in explorer', 
		this.ERROR_PRINTER_BUTTON_TEXT_SHOW_DETAIL, 
		function(event) {
			ConsoleRecorder.showDetailInfoInExplorer();
		});
	this._errorPrinter.appendChild(button);

	var msg = this._createErrorPrinterButtonPrompt(
		//'show detail information for debugging', 
		//'orange');
		this.ERROR_PRINTER_BUTTON_PROMPT_SHOW_DETAIL);
	this._errorPrinter.appendChild(msg);
};

Graphics._errorPrinterAddBr = function() {
	this._errorPrinter.appendChild(document.createElement('br'));
};

Graphics._errorPrinterAddErrorMessage = function(name, message) {
	var font1 = document.createElement('font');
	font1.color = 'yellow';
	font1.innerHTML = '<b>' + name + '</b>';

	var font2 = document.createElement('font');
	font2.color = 'white';
	font2.innerHTML = '' + message;

	this._errorPrinter.appendChild(font1);
	this._errorPrinterAddBr();
	this._errorPrinter.appendChild(font2);
	this._errorPrinterAddBr();
};


const _MK_Graphics__updateErrorPrinter = Graphics._updateErrorPrinter;
Graphics._updateErrorPrinter = function() {
	_MK_Graphics__updateErrorPrinter.apply(this, arguments);

	this._errorPrinter.height = this._height * 0.9;
	this._errorPrinter.style.textAlign = 'left';
	this._centerElement(this._errorPrinter);
};

const _MK_Graphics_printError = Graphics.printError;
Graphics.printError = function(name, message) {
	this._errorShowed = true;
	if (this._errorPrinter) {
		//this._errorPrinter.innerHTML = this._makeErrorHtml(name, message);

		if (this.ERROR_PRINTER_SHOW_BUTTON_SAVE_ERROR) {
			this._errorPrinterAddSaveError();
			this._errorPrinterAddBr();
		}

		if (this.ERROR_PRINTER_SHOW_BUTTON_SHOW_DETAIL) {
			this._errorPrinterAddShowDetail();
			this._errorPrinterAddBr();
		}

		this._errorPrinterAddErrorMessage(name, message);
	}
	this._applyCanvasFilter();
	this._clearUpperCanvas();
};

const _MK_Graphics_printLoadingError = Graphics.printLoadingError;
Graphics.printLoadingError = function(url) {
	if (this._errorPrinter && !this._errorShowed) {
		//this._errorPrinter.innerHTML = this._makeErrorHtml('Loading Error', 'Failed to load: ' + url);
		
		if (this.ERROR_PRINTER_SHOW_BUTTON_RETRY) {
			this._errorPrinterAddRetryLoad();
			this._errorPrinterAddBr();
		}

		if (this.ERROR_PRINTER_SHOW_BUTTON_SAVE_ERROR) {
			this._errorPrinterAddSaveError();
			this._errorPrinterAddBr();
		}

		if (this.ERROR_PRINTER_SHOW_BUTTON_SHOW_DETAIL) {
			this._errorPrinterAddShowDetail();
			this._errorPrinterAddBr();
		}

		this._errorPrinterAddErrorMessage('Loading Error', 'Failed to load: ' + url);

		this._loadingCount = -Infinity;
	}
};


const _MK_Graphics__createRenderer = Graphics._createRenderer;
Graphics._createRenderer = function() {
	PIXI.dontSayHello = true;
	var width = this._width;
	var height = this._height;
	var options = { view: this._canvas };
	try {
		switch (this._rendererType) {
		case 'canvas':
			this._renderer = new PIXI.CanvasRenderer(width, height, options);
			break;
		case 'webgl':
			this._renderer = new PIXI.WebGLRenderer(width, height, options);
			break;
		default:
			this._renderer = PIXI.autoDetectRenderer(width, height, options);
			break;
		}

		if(this._renderer && this._renderer.textureGC)
			this._renderer.textureGC.maxIdle = 1;

	} catch (e) {
		console.error('fail to Graphics._createRenderer', ConsoleRecorder.makeErrorStack(e));
		this._renderer = null;
	}
};

const _MK_WebAudio__createContext = WebAudio._createContext;
WebAudio._createContext = function() {
	try {
		if (typeof AudioContext !== 'undefined') {
			this._context = new AudioContext();
		} else if (typeof webkitAudioContext !== 'undefined') {
			this._context = new webkitAudioContext();
		}
	} catch (e) {
		console.error('fail to WebAudio._createContext', ConsoleRecorder.makeErrorStack(e));
		this._context = null;
	}
};

const _MK_DataManager_saveGame = DataManager.saveGame;
DataManager.saveGame = function(savefileId) {
	try {
		StorageManager.backup(savefileId);
		return this.saveGameWithoutRescue(savefileId);
	} catch (e) {
		console.error(e);
		try {
			StorageManager.remove(savefileId);
			StorageManager.restoreBackup(savefileId);
		} catch (e2) {
			console.error('fail to DataManager.saveGame', 
				ConsoleRecorder.makeErrorStack(e), 
				ConsoleRecorder.makeErrorStack(e2), 
			);
		}
		return false;
	}
};

/*
const _MK_SceneManager_run = SceneManager.run;
SceneManager.run = function(sceneClass) {
	try {
		this.initialize();
		this.goto(sceneClass);
		this.requestUpdate();
	} catch (e) {
		//console.error('fail to SceneManager.run', ConsoleRecorder.makeErrorStack(e));
		this.catchException(e);
	}
};
*/

/*
const _MK_SceneManager_update = SceneManager.update;
SceneManager.update = function() {
	try {
		this.tickStart();
		if (Utils.isMobileSafari()) {
			this.updateInputData();
		}
		this.updateManagers();
		this.updateMain();
		this.tickEnd();
	} catch (e) {
		//console.error('fail to SceneManager.update', ConsoleRecorder.makeErrorStack(e));
		this.catchException(e);
	}
};
*/

const _MK_SceneManager_onError = SceneManager.onError;
SceneManager.onError = function(e) {
	console.error(e.message);
	console.error(e.filename, e.lineno);
	try {
		this.stop();
		Graphics.printError('Error', e.message);
		AudioManager.stopAll();
	} catch (e2) {
		console.error('fail to SceneManager.onError', ConsoleRecorder.makeErrorStack(e));
	}
};

const _MK_SceneManager_catchException = SceneManager.catchException;
SceneManager.catchException = function(e) {
	if (e instanceof Error) {
		//Graphics.printError(e.name, e.message);
		//console.error(e.stack);
		console.error(ConsoleRecorder.makeErrorStack(e));
		Graphics.printError(
			e.name + '<br>' + e.message, 
			ConsoleRecorder.makeErrorStack(e, 1, true).replace(/\n/g, '<br>'), 
		);
	} else {
		Graphics.printError('UnknownError', e);
	}
	AudioManager.stopAll();
	this.stop();
};

})();



