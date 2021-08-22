// ================================================================
// MKP_SpriteAnimManager.js
// 精灵动画管理器
// ================================================================
//  author : Mikan(MikanHako)
//  plugin : MKP_SpriteAnimManager.js 精灵动画管理器
// version : v0.3.3 2021/08/21 增加调用摧毁动画类方法
// ----------------------------------------------------------------
// [Twitter] https://twitter.com/_MikanHako/
// -[GitHub] https://github.com/MikanHako1024/
// ---[Blog] Coming soon
// -----[QQ] 312859582
// ================================================================
// MIT License
// Copyright (C) 2020-2021 Mikan(MikanHako)
// http://opensource.org/licenses/mit-license.php
// ================================================================




/*:
 * @plugindesc 精灵动画管理器 <MKP_SpriteAnimManager>
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.3.3.branch1 2021/08/22 更新插件说明
 *   v0.3.3 2021/08/21 增加调用摧毁动画类方法
 *   v0.3.2 2021/08/19 考虑绘制图标
 *   v0.3.1 2021/08/18 调整框架、及时清理对象、更详细的textState
 *     某些标签直接设置动画类对象的标签，不再写入TextSprite的标签
 *     消息框换页和关闭时，清理动画类对象和字母精灵类对象
 *     消息框的textState增加页数、行数、字数的状态
 *   v0.3.0-alpha 2021/08/18 更新框架 : TextSprite解耦
 *   v0.2.0.branch1 2021/08/17 清理冗余注释
 *   v0.2.0 2021/08/17 更新框架
 *     分离出 处理精灵动画播放效果的框架和所有的精灵动画类 作为新插件MKP_SpriteAnimationSet
 *   v0.1.1 2021/08/16 更新插件说明及规约
 *   v0.1.0 2020/11/11 完成基本框架和功能的demo
 *     把最初的MK_AnimatedMessage分成了MK_SpriteAnimManager和MK_TextSprite
 *   v0.0.0 2020/08/20 项目计划中
 * 
 * 
 * 
 * 
 * @help
 * 
 * 精灵动画管理器 <MKP_SpriteAnimManager>
 * 
 * 
 * ## 简要说明
 * 
 * 完成精灵动画功能的三个插件之一  
 * + 插件`MKP_TextSprite`
 *   - 用于支持绘制和控制播放动画等
 * + 插件`MKP_SpriteAnimationSet`
 *   - 用于提供处理动画效果等
 * + 插件`MKP_SpriteAnimManager`(本插件)
 *   - 用于设置动画和动画参数、处理消息框文字播放动画等
 * 
 * 首先对动画进行配置，
 * 每个动画id可以指定一个基础动画，并且可以配置一组参数，操作详见 【插件指令】  
 * 之后在编辑消息使用特殊字串触发一些播放动画的操作，详见 插件【MKP_TextSprite】  
 * 
 * #### 动画id
 * 动画分为基础动画和自定义参数动画  
 * + 基础动画拥有固定的默认参数，id分布在0~100  
 * + 自定义参数动画可以指定一个基础动画，并使用自己设置的参数，id分布在101及以后  
 * 
 * #### 动画参数
 * 可以在插件参数中配置初始动画参数  
 * + 每条配置：有一个动画id，一个基础动画id，和一组参数
 * + 每条参数：有一个参数序号或一个参数名，和一个参数值
 * 也可以通过插件指令，在游戏中修改动画参数，详见 【插件指令】  
 * 
 * 在游戏中进行的修改并不会保存，
 * 这里的建议是，在插件参数中配置需要大量使用的固定的参数组，需要使用时直接使用对应id即可  
 * 
 * 
 * ## 使用方法
 * 
 * 按顺序导入 完成精灵动画功能的三个插件  
 * + MKP_TextSprite
 * + MKP_SpriteAnimationSet
 * + MKP_SpriteAnimManager
 * 
 * 使用插件参数或插件指令对动画进行设置，
 * 再使用 插件【MKP_TextSprite】 播放动画  
 * 
 * 可参考 【使用示例】  
 * 
 * 
 * ## 插件指令
 * 
 * | description            | command |
 * | :----------------      | :------ |
 * | 设置或清除用户动画     | `AnimMgr setAnim 用户动画id 默认动画id` |
 * | 设置动画参数(按序号)   | `AnimMgr setParam 动画id 参数序号 参数值` |
 * | 设置动画参数(按参数名) | `AnimMgr setParamByKey 动画id 参数名 参数值` |
 * | 设置动画参数(所有参数) | `AnimMgr setParams 动画id 参数值1 参数值2 参数值3 ..` |
 * | 清除动画的全部参数     | `AnimMgr clearparams 动画id` |
 * 
 * #### 设置或清除用户动画
 * 设置一个用户动画，这个动画使用默认动画的模板，并且可以配置参数  
 * 
 * * `AnimMgr setAnim 用户动画id 默认动画id`
 * + AnimMgr
 *   - 主命令
 *   - 固定写法，不区分大小写
 * + setAnim
 *   - 子命令
 *   - 固定写法，不区分大小写
 * + 用户动画id
 *   - 所设置的用户动画的id
 *   - 数值，用户动画id，大于等于101
 * + 默认动画id
 *   - 作为模板的默认动画的id
 *   - 数值，默认动画id，小于等于100，大于等于0
 *   - 当设置为0时，表示清除用户动画
 * 
 * #### 设置动画参数(按序号)
 * 设置用户动画的一个参数的值  
 * 用 【其他说明】-【动画列表】 中的 [参数序号] 指定参数  
 * 
 * * `AnimMgr setParam 动画id 参数序号 参数值`
 * + AnimMgr
 * + setParam
 *   - 子命令
 *   - 固定写法，不区分大小写
 * + 动画id
 *   - 需要设置参数的用户动画的id
 *   - 同 【设置或清除用户动画】-【用户动画id】
 * + 参数序号
 *   - 需要设置的参数的序号
 *   - 数值，详见 【其他说明】-【动画列表】 的 [参数序号]
 * + 参数值
 *   - 需要设置的参数值
 *   - 数值或字串，详见 【其他说明】-【动画列表】 的 [参数类型]
 * 
 * #### 设置动画参数(按参数名)
 * 设置用户动画的一个参数的值  
 * 用 【其他说明】-【动画列表】 中的 [参数名] 指定参数  
 * 
 * * `AnimMgr setParamByKey 动画id 参数名 参数值`
 * + AnimMgr
 * + setParamByKey
 *   - 子命令
 *   - 固定写法，不区分大小写
 * + 动画id
 *   - 同 【设置动画参数(按序号)】-【动画id】
 * + 参数序号
 *   - 需要设置的参数的参数名
 *   - 数值，详见 【其他说明】-【动画列表】 的 [参数名]
 * + 参数值
 *   - 同 【设置动画参数(按序号)】-【参数值】
 * 
 * #### 设置动画参数(所有参数)
 * 设置用户动画的所有参数的值  
 * 按 【其他说明】-【动画列表】 中参数的顺序，设置每个参数的值  
 * 
 * * `AnimMgr setParams 动画id 参数值1 参数值2 参数值3 ..`
 * + AnimMgr
 * + setParams
 *   - 子命令
 *   - 固定写法，不区分大小写
 * + 动画id
 *   - 同 【设置动画参数(按序号)】-【动画id】
 * + `参数值1 参数值2 参数值3 ..`
 *   - 需要设置的所有参数的参数值
 *   - 按 【其他说明】-【动画列表】 中的参数顺序 排列
 *   - 每个参数值用一个空格分隔
 *   - 数值或字串，详见 【其他说明】-【动画列表】 的 [参数名]
 * 
 * #### 清除动画的全部参数
 * 清除用户动画的所有参数的值，恢复到默认参数值  
 * 
 * * `AnimMgr clearparams 动画id`
 * + AnimMgr
 * + clearparams
 *   - 子命令
 *   - 固定写法，不区分大小写
 * + 动画id
 *   - 同 【设置动画参数(按序号)】-【动画id】
 * 
 * 
 * ## 脚本说明
 * 
 * TODO
 * 
 * 
 * ## 使用示例
 * 
 * #### 播放【缩放】效果
 * + 事件
 *   - ◆插件指令：AnimMgr setAnim 101 3
 *   - ◆文本：无, 窗口, 底部
 *   - ：　　：以下文字播放缩放效果：\TEXTANIM[101]\TAPlay[101]只有这句话会受效果影响
 * 
 * 
 * ## 其他说明
 * 
 * #### 动画列表，详细说明和参数见插件【MKP_SpriteAnimationSet】
 * 注 : id 为 默认动画id  
 * | id | 动画效果 |
 * | :- | :------- |
 * |  2 | 淡入淡出 |
 * |  3 | 缩放     |
 * |  4 | 翻转     |
 * |  5 | 上下出现(未完成) |
 * |  6 | 震动     |
 * |  7 | 剧烈缩放 |
 * |  8 | 波浪缩放 |
 * |  9 | 旋涡     |
 * | 10 | 摇晃     |
 * | 11 | 随机     |
 * | 32 | 卡拉Ok   |
 * | 52 | 文字居中 |
 * 
 * 
 * #### 对于简化设置决定的说明
 * 
 * 简化设置方面，有两种方案：  
 * 一是保存在游戏存档中  
 * 可以保存，所以在游戏开始时进行统一设置即可，这样可能会因为使用过期存档而失效  
 * 二是使用插件参数进行设置  
 * 这样每次启动会重置设置，所以不能保存，但是不会因为使用过期存档而失效  
 * 二者不能兼得。  
 * 
 * 这里使用方案二，原因如下：  
 * 考虑到 固定设置的情况 比 根据游戏情况需要调整设置的情况 多；  
 * 因为变数多，而使得保险起见会在使用前再次进行设置，所以使用到保存数据的设置的情况较少；  
 * 多次使用固定设置时，为了方便调整设置，不建议在每次使用前都进行设置，  
 * 作为代替的是，使用固定的一组设置，并把这组设置放在插件参数中。  
 * 
 * 
 * ## 后续任务
 * 
 * - [ ] 更准确地功能划分 : SpriteAnimManager 用来管理和播放动画，TextSprite 只用于支持绘制和动画等功能
 * - [x] 更新插件说明
 * - [ ] 调整基础动画和用户动画的code，使得不会冲突
 * - [ ] 优化管理文本动画对象，不反复创建和清除对象，而是清空动画目标并禁用文本动画对象(文本动画类提供该方法)
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
 * Copyright (C) 2020-2021 Mikan(MikanHako)  
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
 * @param ---- 游戏参数配置 ----
 * 
 * @param ---- 内容数据配置 ----
 * 
 * @param AnimParamsConfig
 * @text 动画参数配置
 * @desc 
 * @type struct<AnimParams>[]
 * @default []
 * 
 * @param ---- endline ----
 * 
 */
/*~struct~AnimParams:
 *
 * @param animCode
 * @text 动画id
 * @desc 
 * @type number
 * @min 101
 * @default 101
 *
 * @param baseAnimCode
 * @text 基础动画id
 * @desc 
 * @type number
 * @min 0
 * @max 100
 * @default 0
 *
 * @param params
 * @text 
 * @desc 
 * @type struct<AnimParam>[]
 * @default []
 * 
 */
/*~struct~AnimParam:
 *
 * @param index
 * @text 
 * @desc 
 * @type number
 * @default 0
 *
 * @param key
 * @text 
 * @desc 
 * @type string
 * @default 
 *
 * @param value
 * @text 
 * @desc 
 * @type string
 * @default 
 * 
 */

var MK_Plugins = MK_Plugins || {};

function MK_SpriteAnimManager() {
    throw new Error("This is a static class");
}

MK_Plugins.paramGet = MK_Plugins.paramGet || {}, MK_Plugins.param = MK_Plugins.param || {}, 
MK_Plugins.paramParser = MK_Plugins.paramParser || {}, MK_Plugins.class = MK_Plugins.class || {}, 
MK_Plugins.datas = MK_Plugins.datas || {}, MK_Plugins.getPluginParam = MK_Plugins.getPluginParam || function(t) {
    var e = PluginManager.parameters(t);
    if (e && "{}" !== JSON.stringify(e)) return e;
    for (var i = $plugins.filter(function(e) {
        return e.description.contains("<" + t + ">");
    }), n = 0; n < i.length; n++) {
        var a = i[n].name;
        if (a !== t) return PluginManager.parameters(a);
    }
    return {};
}, function() {
    var e = "MKP_SpriteAnimManager";
    MK_Plugins.paramGet[e] = MK_Plugins.getPluginParam(e), MK_Plugins.param[e] = {}, 
    MK_Plugins.paramParser[e] = {};
    var t = MK_Plugins.paramGet[e], i = MK_Plugins.param[e], e = MK_Plugins.paramParser[e];
    function parseAnimParam(e) {
        e = e || '{"index":0,"key":"","value":""}';
        e = JSON.parse(e);
        return e.index = Number(e.index || 0), e.key = String(e.key || ""), e.value = String(e.value || ""), 
        e;
    }
    function parseAnimParams(e) {
        e = e || '{"animCode":101,"baseAnimCode":0,"params":[]}';
        var t = JSON.parse(e);
        t.animCode = Number(t.animCode || 100), t.baseAnimCode = Number(t.baseAnimCode || 0), 
        t.params = JSON.parse(t.params || "[]");
        for (var i = 0; i < t.params.length; i++) t.params[i] = parseAnimParam(t.params[i]);
        return t;
    }
    function getAnimParamsConfig(e) {
        e = e || "[]";
        for (var t = JSON.parse(e), i = 0; i < t.length; i++) t[i] = parseAnimParams(t[i]);
        return t;
    }
    e.parseAnimParam = parseAnimParam, e.parseAnimParams = parseAnimParams, e.getAnimParamsConfig = getAnimParamsConfig, 
    i.animParamsConfig = getAnimParamsConfig(t.AnimParamsConfig || "[]");
}(), MK_SpriteAnimManager.EMPTY_ANIM_CODE = 0, MK_SpriteAnimManager._baseAnimMapTable = [ "", "fade", "zoom", "zoom2", "wipe", "shake", "zoom3", "wave", "rotation", "swing", "random", "karaoke" ], 
MK_SpriteAnimManager.getBaseMapTable = function() {
    return this._baseAnimMapTable;
}, MK_SpriteAnimManager._userAnimMapping = [], MK_SpriteAnimManager.getUserMapTable = function() {
    return this._userAnimMapping;
}, MK_SpriteAnimManager.MAX_ANIM_SIZE = 100, MK_SpriteAnimManager.maxAnimSize = function() {
    return this.MAX_ANIM_SIZE;
}, MK_SpriteAnimManager.isBaseMappingCode = function(e) {
    return e <= this.maxAnimSize();
}, MK_SpriteAnimManager.isUserMappingCode = function(e) {
    return e > this.maxAnimSize();
}, MK_SpriteAnimManager.setUserMapping = function(e, t) {
    this.isUserMappingCode(e) && this.isBaseMappingCode(t) && (this.getUserMapTable()[e] = t);
}, MK_SpriteAnimManager.getUserMapping = function(e) {
    if (this.isUserMappingCode(e)) {
        e = this.getUserMapTable()[e];
        if (this.isBaseMappingCode(e)) return e;
    }
    return this.EMPTY_ANIM_CODE;
}, MK_SpriteAnimManager.codeToAnim = function(e) {
    return this.isUserMappingCode(e) ? this.getBaseMapping(this.getUserMapping(e)) : this.isBaseMappingCode(e) ? this.getBaseMapping(e) : this.EMPTY_ANIM_CODE;
}, MK_SpriteAnimManager._animParam = [], MK_SpriteAnimManager.setAnimParam = function(e, t, i) {
    this._animParam[e] || (this._animParam[e] = []), this._animParam[e][t] = i;
}, MK_SpriteAnimManager.setAnimParams = function(e, t) {
    Array.isArray(t) || (t = [ t ]), this._animParam[e] = t;
}, MK_SpriteAnimManager.getAnimParam = function(e, t) {
    return this._animParam[e] ? this._animParam[e][t] : void 0;
}, MK_SpriteAnimManager.getAnimParams = function(e) {
    return this._animParam[e] || [];
}, MK_SpriteAnimManager.getParamIndex = function(e, t) {
    return this.isUserMappingCode(e) && (e = this.getUserMapping(e)), animClass = this.getAnimClass(e), 
    animClass ? new animClass().getParamIndex(t) : t;
}, MK_SpriteAnimManager.setAnimParamByKey = function(e, t, i) {
    t = this.getParamIndex(e, t);
    this.setAnimParam(e, t, i);
}, MK_SpriteAnimManager.getAnimParamByKey = function(e, t) {
    t = this.getParamIndex(e, t);
    return this.getAnimParam(e, t);
}, MK_SpriteAnimManager.getAnimClass = function(e) {
    return MK_SpriteAnimationSet.getSpriteAnimClassByCode(e);
}, MK_SpriteAnimManager.createSpriteAnimByRealCode = function(e) {
    var t = this.getAnimClass(e);
    return t ? new t(...[ ...arguments ].splice(1)) : null;
}, MK_SpriteAnimManager.createSpriteAnim = function(e) {
    var t = this.isUserMappingCode(e) ? this.getUserMapping(e) : e;
    return this.createSpriteAnimByRealCode(t, e);
}, MK_SpriteAnimManager._spriteAnimObjects = [], MK_SpriteAnimManager.addSpriteAnimObject = function(e) {
    var t = this.createSpriteAnim(e);
    return this._spriteAnimObjects[e] = t;
}, MK_SpriteAnimManager.getSpriteAnimObject = function(e) {
    return this._spriteAnimObjects[e];
}, MK_SpriteAnimManager.clearSpriteAnimObject = function(e) {
    this._spriteAnimObjects[e] && (this._spriteAnimObjects[e].destroyMe(), this._spriteAnimObjects[e] = null);
}, MK_SpriteAnimManager.clearAllSpriteAnimObject = function() {
    this._spriteAnimObjects.splice(0);
}, MK_SpriteAnimManager.clearSpriteAnimObjectByTextSprite = function(i) {
    i && this._spriteAnimObjects.forEach(function(e, t) {
        i.getTextSpriteAnimFlag("anim", t) && this.clearSpriteAnimObject(t);
    }, this);
}, MK_SpriteAnimManager.initSpriteAnimTarget = function(t, e) {
    var i;
    t && (i = t.getAnimCode(), e.filterLetterObjectsByAnimFlag(i, "add").forEach(e => t.addTarget(e.sprite, e.data)), 
    "function" == typeof t.setMsgWindow && t.setMsgWindow(e._msgWindow));
}, MK_SpriteAnimManager.addNewSpriteAnimTarget = function(i, n) {
    this._spriteAnimObjects.forEach(function(e, t) {
        e && i.getLetterAnimFlag(n, "add", t) && e.addTarget(n.sprite, n.data);
    }, this);
}, function() {
    const t = MK_TextSprite.prototype.onAddLetterSprite;
    MK_TextSprite.prototype.onAddLetterSprite = function(e) {
        t.apply(this, arguments), MK_SpriteAnimManager.addNewSpriteAnimTarget(this, e);
    };
}(), MK_SpriteAnimManager.setSpriteAnimFlag = function(e, t, i) {
    t = this._spriteAnimObjects[t];
    t && (e = e.slice(0, 1).toUpperCase() + e.slice(1), void 0 === i || !!i ? t.setAnimFlagOn(e) : t.setAnimFlagOff(e));
}, MK_SpriteAnimManager.updateSpriteAnimtions = function(e) {
    this.updateSpriteAnimtionsFrameUpdate(e);
}, MK_SpriteAnimManager.updateSpriteAnimtionsFrameUpdate = function(i) {
    this._spriteAnimObjects.forEach(function(e, t) {
        e && i.getTextSpriteAnimFlag("anim", t) && e.update();
    });
}, MK_Plugins.class.MK_SpriteAnimManager = MK_SpriteAnimManager, function() {
    const o = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(e, t) {
        var i, n, a, r, s, p, m;
        o.apply(this, arguments), "animmgr" === (e || "").toLowerCase() && ("setanim" === (i = (t[0] || "").toLowerCase()) ? (n = Number(t[1] || 0), 
        a = Number(t[2] || 0), MK_SpriteAnimManager.setUserMapping(n, a)) : "setparam" === i ? (p = Number(t[1] || 0), 
        r = Number(t[2] || 0), s = Number(t[3] || null), MK_SpriteAnimManager.setAnimParam(p, r, s)) : "setparambykey" === i ? (p = Number(t[1] || 0), 
        r = Number(t[2] || ""), s = Number(t[3] || null), MK_SpriteAnimManager.setAnimParamByKey(p, r, s)) : "setparams" === i ? (p = Number(t[1] || 0), 
        m = t.concat().splice(2), MK_SpriteAnimManager.setAnimParams(p, m)) : "clearparams" === i && (p = Number(t[1] || 0), 
        MK_SpriteAnimManager.setAnimParams(p, m = [])));
    };
}(), MK_Plugins.param.MKP_SpriteAnimManager.animParamsConfig.forEach(function(t) {
    MK_SpriteAnimManager.setUserMapping(t.animCode, t.baseAnimCode), t.params.forEach(function(e) {
        e.key ? MK_SpriteAnimManager.setAnimParamByKey(t.animCode, e.key, e.value) : MK_SpriteAnimManager.setAnimParam(t.animCode, e.index, e.value);
    });
}), function() {
    const e = Window_Message.prototype._createAllParts;
    Window_Message.prototype._createAllParts = function() {
        e.apply(this, arguments), this._infoTextSprite = new MK_TextSprite(), this._windowContentsSprite.addChildAt(this._infoTextSprite, 0);
    };
    const t = Window_Message.prototype.createContents;
    Window_Message.prototype.createContents = function() {
        t.apply(this, arguments);
        var e = new MK_TextBitmap(this.contentsWidth(), this.contentsHeight());
        e.setTextSprite(this._infoTextSprite), e.textModeOn(), this.contents = e, this.resetFontSettings();
    };
    const i = Window_Message.prototype.update;
    Window_Message.prototype.update = function() {
        i.apply(this, arguments), MK_SpriteAnimManager.updateSpriteAnimtions(this._infoTextSprite);
    };
    const n = Window_Message.prototype.startMessage;
    Window_Message.prototype.startMessage = function() {
        this.textAnim_clearTextSprite(), this._infoTextSprite.setMsgWindow(this), n.apply(this, arguments);
    };
    const a = Window_Message.prototype.terminateMessage;
    Window_Message.prototype.terminateMessage = function() {
        a.apply(this, arguments), this.textAnim_clearTextSprite();
    }, Window_Message.prototype.textAnim_clearTextSprite = function() {
        MK_SpriteAnimManager.clearSpriteAnimObjectByTextSprite(this._infoTextSprite), this._infoTextSprite.clearAll();
    };
    const r = Window_Message.prototype.newPage;
    Window_Message.prototype.newPage = function(e) {
        r.apply(this, arguments), e.pageNum = (e.pageNum || 0) + 1, e.lineNum = 1, e.textNum = 1;
    };
    const s = Window_Message.prototype.processNewPage;
    Window_Message.prototype.processNewPage = function(e) {
        s.apply(this, arguments), e.pageNum++, e.lineNum = 1, e.textNum = 1;
    };
    const p = Window_Message.prototype.processNewLine;
    Window_Message.prototype.processNewLine = function(e) {
        p.apply(this, arguments), e.lineNum++, e.textNum = 1;
    };
    const m = Window_Message.prototype.processNormalCharacter;
    Window_Message.prototype.processNormalCharacter = function(e) {
        m.apply(this, arguments), e.textNum++;
    };
    const o = Window_Message.prototype.processDrawIcon;
    Window_Message.prototype.processDrawIcon = function(e, t) {
        o.apply(this, arguments), t.textNum++;
    };
    const g = Window_Message.prototype.processEscapeCharacter;
    Window_Message.prototype.processEscapeCharacter = function(e, t) {
        switch (e) {
          case "TEXTANIM":
            var i = this.obtainEscapeParam(t);
            this.textAnim_createTextAnim(i || 0);
            break;

          case "TAPLAY":
            i = this.obtainEscapeParam(t);
            this.textAnim_setFlagPlayOn(i || 0);
            break;

          case "TAPAUSE":
            i = this.obtainEscapeParam(t);
            this.textAnim_setFlagPauseOn(i || 0);
            break;

          case "TACONT":
            i = this.obtainEscapeParam(t);
            this.textAnim_setFlagContinueOn(i || 0);
            break;

          case "TASTOP":
            i = this.obtainEscapeParam(t);
            this.textAnim_setFlagStopOn(i || 0);
            break;

          case "TAADDON":
            i = this.obtainEscapeParam(t);
            this.textAnim_setFlagAllowAddOn(i || 0);
            break;

          case "TAADDOFF":
            i = this.obtainEscapeParam(t);
            this.textAnim_setFlagAllowAddOff(i || 0);
            break;

          case "TAACTON":
            i = this.obtainEscapeParam(t);
            this.textAnim_setFlagEnabledOn(i || 0);
            break;

          case "TAACTOFF":
            i = this.obtainEscapeParam(t);
            this.textAnim_setFlagEnabledOff(i || 0);
            break;

          default:
            g.apply(this, arguments);
        }
    }, Window_Message.prototype.textAnim_createTextAnim = function(e) {
        var t = MK_SpriteAnimManager.addSpriteAnimObject(e);
        MK_SpriteAnimManager.initSpriteAnimTarget(t, this._infoTextSprite), this.textAnim_setFlagAllowAddOn(e), 
        this.textAnim_setAnimFlagOn(e);
    }, Window_Message.prototype.textAnim_setFlagAutoOn = function(e) {
        MK_SpriteAnimManager.setSpriteAnimFlag("auto", e, !0);
    }, Window_Message.prototype.textAnim_setFlagAutoOff = function(e) {
        MK_SpriteAnimManager.setSpriteAnimFlag("auto", e, !1);
    }, Window_Message.prototype.textAnim_setFlagPlayOn = function(e) {
        MK_SpriteAnimManager.setSpriteAnimFlag("play", e, !0);
    }, Window_Message.prototype.textAnim_setFlagPauseOn = function(e) {
        MK_SpriteAnimManager.setSpriteAnimFlag("pause", e, !0);
    }, Window_Message.prototype.textAnim_setFlagContinueOn = function(e) {
        MK_SpriteAnimManager.setSpriteAnimFlag("continue", e, !0);
    }, Window_Message.prototype.textAnim_setFlagStopOn = function(e) {
        MK_SpriteAnimManager.setSpriteAnimFlag("stop", e, !0);
    }, Window_Message.prototype.textAnim_setFlagInitOn = function(e) {
        MK_SpriteAnimManager.setSpriteAnimFlag("init", e, !0);
    }, Window_Message.prototype.textAnim_setFlagEnabledOn = function(e) {
        MK_SpriteAnimManager.setSpriteAnimFlag("enabled", e, !0);
    }, Window_Message.prototype.textAnim_setFlagEnabledOff = function(e) {
        MK_SpriteAnimManager.setSpriteAnimFlag("enabled", e, !1);
    }, Window_Message.prototype.textAnim_setAnimFlagOn = function(e) {
        this._infoTextSprite.setTextSpriteAnimFlag("anim", e, !0);
    }, Window_Message.prototype.textAnim_setFlagAllowAddOn = function(e) {
        this._infoTextSprite.setNewLetterAnimFlag("add", e, !0);
    }, Window_Message.prototype.textAnim_setFlagAllowAddOff = function(e) {
        this._infoTextSprite.setNewLetterAnimFlag("add", e, !1);
    };
}();