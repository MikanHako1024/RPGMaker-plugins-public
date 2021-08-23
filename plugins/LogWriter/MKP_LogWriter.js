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

function ConsoleRecorder() {
    throw new Error('"ConsoleRecorder" is a static class.');
}

MK_Plugins.paramGet = MK_Plugins.paramGet || {}, MK_Plugins.param = MK_Plugins.param || {}, 
MK_Plugins.class = MK_Plugins.class || {}, MK_Plugins.datas = MK_Plugins.datas || {}, 
MK_Plugins.getPluginParam = MK_Plugins.getPluginParam || function(e) {
    var r = PluginManager.parameters(e);
    if (r && "{}" !== JSON.stringify(r)) return r;
    for (var o = $plugins.filter(function(r) {
        return r.description.contains("<" + e + ">");
    }), t = 0; t < o.length; t++) {
        var n = o[t].name;
        if (n !== e) return PluginManager.parameters(n);
    }
    return {};
}, function() {
    var r = "MKP_LogWriter";
    function parse_boolean(r, e) {
        return "true" === r || "false" !== r && JSON.parse(JSON.stringify(e));
    }
    function parse_string(r, e) {
        return r ? String(r) : String(e);
    }
    MK_Plugins.paramGet[r] = MK_Plugins.getPluginParam(r), MK_Plugins.param[r] = {};
    var e = MK_Plugins.paramGet[r], r = MK_Plugins.param[r];
    r.ShowButton_Retry = parse_boolean(e.ShowButton_Retry, "true"), r.ButtonText_Retry = parse_string(e.ButtonText_Retry, "retry"), 
    r.ButtonPrompt_Retry = parse_string(e.ButtonPrompt_Retry, "reload picture or script file"), 
    r.ShowButton_SaveError = parse_boolean(e.ShowButton_SaveError, "true"), r.ButtonText_SaveError = parse_string(e.ButtonText_SaveError, "save error info"), 
    r.ButtonPrompt_SaveError = parse_string(e.ButtonPrompt_SaveError, "collect error information for debugging"), 
    r.ShowButton_ShowDetail = parse_boolean(e.ShowButton_ShowDetail, "true"), r.ButtonText_ShowDetail = parse_string(e.ButtonText_ShowDetail, "show detail info in explorer"), 
    r.ButtonPrompt_ShowDetail = parse_string(e.ButtonPrompt_ShowDetail, "show detail information for debugging"), 
    r.ButtonTextColor = parse_string(e.ButtonTextColor, "#ffffff"), r.ButtonPromptColor = parse_string(e.ButtonPromptColor, "orange");
}(), ConsoleRecorder.initialize = function() {
    this.clearRecords(), this._setupConsoleLogFunction(), this._setupConsoleInfoFunction(), 
    this._setupConsoleWarnFunction(), this._setupConsoleErrorFunction();
}, ConsoleRecorder.clearRecords = function() {
    this._records = [];
}, ConsoleRecorder.makeErrorStack = function(r, e, o) {
    return r.stack.split("\n").slice(e || 0).map(r => o ? r.replace(/chrome-extension:\/\/[a-z]*?\//, "") : r.replace(/chrome-extension:\/\/[a-z]*?\//, "file://" + nw.__dirname.replace(/\\/g, "/") + "/")).join("\n");
}, ConsoleRecorder.makeArgumentsString = function(...r) {
    return [ ...r ].map(r => this.stringify(r), this).join("  \n");
}, ConsoleRecorder._makeNewRecord = function(r, ...e) {
    var o = "";
    try {
        throw new Error();
    } catch (r) {
        o = r;
    }
    return {
        type: r,
        msg: this.makeArgumentsString(...e),
        stack: this.makeErrorStack(o, 4),
        time: Date.now()
    };
}, ConsoleRecorder._addNewRecord = function(r, ...e) {
    this._records.push(this._makeNewRecord(r, ...e));
}, ConsoleRecorder.STRINGIFY_MAX_DEEP = 0, ConsoleRecorder.stringify = function(r) {
    return JSON.stringify(this._stringifyEncode(r, 0));
}, ConsoleRecorder._stringifyEncode = function(r, e) {
    var o = Object.prototype.toString.call(r), t = "[Unknown]";
    if ("[object Object]" === o) if (e > this.STRINGIFY_MAX_DEEP) t = `[object Object : ${r.constructor ? r.constructor.name : "Unknown"}]`; else for (var n in t = {}, 
    r) "function" != typeof r[n] && (t[n] = this._stringifyEncode(r[n], e + 1)); else if ("[object Array]" === o) for (var n in t = [], 
    r) t[n] = this._stringifyEncode(r[n], e + 0); else "[object Function]" === o || (t = "[object Boolean]" === o || "[object Number]" === o || "[object String]" === o ? r : o);
    return t;
}, ConsoleRecorder._setupConsoleLogFunction = function() {
    this._console_log_function = console.log, console.log = function() {
        ConsoleRecorder._addNewRecord("log", ...arguments), ConsoleRecorder._console_log_function.apply(this, arguments);
    };
}, ConsoleRecorder._setupConsoleInfoFunction = function() {
    this._console_info_function = console.info, console.info = function() {
        ConsoleRecorder._addNewRecord("info", ...arguments), ConsoleRecorder._console_info_function.apply(this, arguments);
    };
}, ConsoleRecorder._setupConsoleWarnFunction = function() {
    this._console_warn_function = console.warn, console.warn = function() {
        ConsoleRecorder._addNewRecord("warn", ...arguments), ConsoleRecorder._console_warn_function.apply(this, arguments);
    };
}, ConsoleRecorder._setupConsoleErrorFunction = function() {
    this._console_error_function = console.error, console.error = function() {
        ConsoleRecorder._addNewRecord("error", ...arguments), ConsoleRecorder._console_error_function.apply(this, arguments);
    };
}, ConsoleRecorder.makeSaveMessage = function() {
    return this._records.map(r => [ `[${r.type}] [${new Date(r.time).toJSON()}]`, r.msg, r.stack ].join("\n")).join("\n\n");
}, ConsoleRecorder.messageFilePath = function() {
    return nw.__dirname + "\\save";
}, ConsoleRecorder.messageFileFullName = function() {
    return this.messageFilePath() + "\\errorInfo.log";
}, function() {
    const e = StorageManager.localFilePath;
    StorageManager.localFilePath = function(r) {
        return "errorInfo" === r ? this.localFileDirectoryPath() + "errorInfo.log" : e.apply(this, arguments);
    };
    const o = StorageManager.webStorageKey;
    StorageManager.webStorageKey = function(r) {
        return "errorInfo" === r ? "Error Info" : o.apply(this, arguments);
    };
}(), ConsoleRecorder.saveMessageFile = function(r) {
    StorageManager.save("errorInfo", this.makeSaveMessage());
}, ConsoleRecorder.showMessageFileInExplorer = function() {
    nw.Shell.showItemInFolder(this.messageFileFullName());
}, ConsoleRecorder.showDetailInfoInExplorer = function() {
    nw.Shell.showItemInFolder(nw.App.dataPath);
}, (MK_Plugins.class.ConsoleRecorder = ConsoleRecorder).initialize(), function() {
    var r = MK_Plugins.param.MKP_LogWriter;
    Graphics.ERROR_PRINTER_SHOW_BUTTON_RETRY = r.ShowButton_Retry, Graphics.ERROR_PRINTER_BUTTON_TEXT_RETRY = r.ButtonText_Retry, 
    Graphics.ERROR_PRINTER_BUTTON_PROMPT_RETRY = r.ButtonPrompt_Retry, Graphics.ERROR_PRINTER_SHOW_BUTTON_SAVE_ERROR = r.ShowButton_SaveError, 
    Graphics.ERROR_PRINTER_BUTTON_TEXT_SAVE_ERROR = r.ButtonText_SaveError, Graphics.ERROR_PRINTER_BUTTON_PROMPT_SAVE_ERROR = r.ButtonPrompt_SaveError, 
    Graphics.ERROR_PRINTER_SHOW_BUTTON_SHOW_DETAIL = r.ShowButton_ShowDetail, Graphics.ERROR_PRINTER_BUTTON_TEXT_SHOW_DETAIL = r.ButtonText_ShowDetail, 
    Graphics.ERROR_PRINTER_BUTTON_PROMPT_SHOW_DETAIL = r.ButtonPrompt_ShowDetail, Graphics.ERROR_PRINTER_BUTTON_TEXT_COLOR = r.ButtonTextColor, 
    Graphics.ERROR_PRINTER_BUTTON_PROMPT_COLOR = r.ButtonPromptColor;
}(), function() {
    Graphics._createErrorPrinterButton = function(r, e) {
        var o = document.createElement("button");
        return o.innerHTML = r, o.style.margin = "5px", o.style.fontSize = "24px", o.style.color = this.ERROR_PRINTER_BUTTON_TEXT_COLOR, 
        o.style.backgroundColor = "#000000", o.onmousedown = o.ontouchstart = e, o;
    }, Graphics._createErrorPrinterButtonPrompt = function(r) {
        var e = document.createElement("font");
        return e.innerHTML = r, e.style.color = this.ERROR_PRINTER_BUTTON_PROMPT_COLOR, 
        e.style.margin = "5px", e;
    }, Graphics._errorPrinterAddRetryLoad = function() {
        var r = this._createErrorPrinterButton(this.ERROR_PRINTER_BUTTON_TEXT_RETRY, function(r) {
            ResourceHandler.retry(), r.stopPropagation();
        });
        this._errorPrinter.appendChild(r);
        r = this._createErrorPrinterButtonPrompt(this.ERROR_PRINTER_BUTTON_PROMPT_RETRY);
        this._errorPrinter.appendChild(r);
    }, Graphics._errorPrinterAddSaveError = function() {
        var r = this._createErrorPrinterButton(this.ERROR_PRINTER_BUTTON_TEXT_SAVE_ERROR, function(r) {
            ConsoleRecorder.saveMessageFile(), ConsoleRecorder.showMessageFileInExplorer();
        });
        this._errorPrinter.appendChild(r);
        r = this._createErrorPrinterButtonPrompt(this.ERROR_PRINTER_BUTTON_PROMPT_SAVE_ERROR);
        this._errorPrinter.appendChild(r);
    }, Graphics._errorPrinterAddShowDetail = function() {
        var r = this._createErrorPrinterButton(this.ERROR_PRINTER_BUTTON_TEXT_SHOW_DETAIL, function(r) {
            ConsoleRecorder.showDetailInfoInExplorer();
        });
        this._errorPrinter.appendChild(r);
        r = this._createErrorPrinterButtonPrompt(this.ERROR_PRINTER_BUTTON_PROMPT_SHOW_DETAIL);
        this._errorPrinter.appendChild(r);
    }, Graphics._errorPrinterAddBr = function() {
        this._errorPrinter.appendChild(document.createElement("br"));
    }, Graphics._errorPrinterAddErrorMessage = function(r, e) {
        var o = document.createElement("font");
        o.color = "yellow", o.innerHTML = "<b>" + r + "</b>";
        r = document.createElement("font");
        r.color = "white", r.innerHTML = "" + e, this._errorPrinter.appendChild(o), this._errorPrinterAddBr(), 
        this._errorPrinter.appendChild(r), this._errorPrinterAddBr();
    };
    const r = Graphics._updateErrorPrinter;
    Graphics._updateErrorPrinter = function() {
        r.apply(this, arguments), this._errorPrinter.height = .9 * this._height, this._errorPrinter.style.textAlign = "left", 
        this._centerElement(this._errorPrinter);
    };
    Graphics.printError;
    Graphics.printError = function(r, e) {
        this._errorShowed = !0, this._errorPrinter && (this.ERROR_PRINTER_SHOW_BUTTON_SAVE_ERROR && (this._errorPrinterAddSaveError(), 
        this._errorPrinterAddBr()), this.ERROR_PRINTER_SHOW_BUTTON_SHOW_DETAIL && (this._errorPrinterAddShowDetail(), 
        this._errorPrinterAddBr()), this._errorPrinterAddErrorMessage(r, e)), this._applyCanvasFilter(), 
        this._clearUpperCanvas();
    };
    Graphics.printLoadingError;
    Graphics.printLoadingError = function(r) {
        this._errorPrinter && !this._errorShowed && (this.ERROR_PRINTER_SHOW_BUTTON_RETRY && (this._errorPrinterAddRetryLoad(), 
        this._errorPrinterAddBr()), this.ERROR_PRINTER_SHOW_BUTTON_SAVE_ERROR && (this._errorPrinterAddSaveError(), 
        this._errorPrinterAddBr()), this.ERROR_PRINTER_SHOW_BUTTON_SHOW_DETAIL && (this._errorPrinterAddShowDetail(), 
        this._errorPrinterAddBr()), this._errorPrinterAddErrorMessage("Loading Error", "Failed to load: " + r), 
        this._loadingCount = -1 / 0);
    };
    Graphics._createRenderer;
    Graphics._createRenderer = function() {
        PIXI.dontSayHello = !0;
        var r = this._width, e = this._height, o = {
            view: this._canvas
        };
        try {
            switch (this._rendererType) {
              case "canvas":
                this._renderer = new PIXI.CanvasRenderer(r, e, o);
                break;

              case "webgl":
                this._renderer = new PIXI.WebGLRenderer(r, e, o);
                break;

              default:
                this._renderer = PIXI.autoDetectRenderer(r, e, o);
            }
            this._renderer && this._renderer.textureGC && (this._renderer.textureGC.maxIdle = 1);
        } catch (r) {
            console.error("fail to Graphics._createRenderer", ConsoleRecorder.makeErrorStack(r)), 
            this._renderer = null;
        }
    };
    WebAudio._createContext;
    WebAudio._createContext = function() {
        try {
            "undefined" != typeof AudioContext ? this._context = new AudioContext() : "undefined" != typeof webkitAudioContext && (this._context = new webkitAudioContext());
        } catch (r) {
            console.error("fail to WebAudio._createContext", ConsoleRecorder.makeErrorStack(r)), 
            this._context = null;
        }
    };
    DataManager.saveGame;
    DataManager.saveGame = function(r) {
        try {
            return StorageManager.backup(r), this.saveGameWithoutRescue(r);
        } catch (e) {
            console.error(e);
            try {
                StorageManager.remove(r), StorageManager.restoreBackup(r);
            } catch (r) {
                console.error("fail to DataManager.saveGame", ConsoleRecorder.makeErrorStack(e), ConsoleRecorder.makeErrorStack(r));
            }
            return !1;
        }
    };
    SceneManager.onError;
    SceneManager.onError = function(e) {
        console.error(e.message), console.error(e.filename, e.lineno);
        try {
            this.stop(), Graphics.printError("Error", e.message), AudioManager.stopAll();
        } catch (r) {
            console.error("fail to SceneManager.onError", ConsoleRecorder.makeErrorStack(e));
        }
    };
    SceneManager.catchException;
    SceneManager.catchException = function(r) {
        r instanceof Error ? (console.error(ConsoleRecorder.makeErrorStack(r)), Graphics.printError(r.name + "<br>" + r.message, ConsoleRecorder.makeErrorStack(r, 1, !0).replace(/\n/g, "<br>"))) : Graphics.printError("UnknownError", r), 
        AudioManager.stopAll(), this.stop();
    };
}();