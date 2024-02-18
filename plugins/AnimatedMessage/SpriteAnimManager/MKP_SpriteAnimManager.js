/*!
 * MKP_SpriteAnimManager - v0.3.4
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
 * @plugindesc 精灵动画管理器 <MKP_SpriteAnimManager> v0.3.4
 * @author Mikan(MikanHako)
 * @url https://github.com/MikanHako1024/RPGMaker-plugins-public
 * @version 
 *   v0.3.4 (2024-02-19T04:11:00+0800)
 *     更新插件模板
 *     增加对 MZ 的支持
 *     插件说明中 增加从 MKP_TextSprite 移动来的控制字符部分
 *   v0.3.3.branch1 (2021-08-22T00:00:00+0800)
 *     更新插件说明
 *   v0.3.3 (2021-08-21T00:00:00+0800)
 *     增加调用摧毁动画类方法
 *   v0.3.2 (2021-08-19T00:00:00+0800)
 *     考虑绘制图标
 *   v0.3.1 (2021-08-18T00:00:00+0800)
 *     调整框架、及时清理对象、更详细的textState
 *       某些标签直接设置动画类对象的标签，不再写入TextSprite的标签
 *       消息框换页和关闭时，清理动画类对象和字母精灵类对象
 *       消息框的textState增加页数、行数、字数的状态
 *   v0.3.0-alpha (2021-08-18T00:00:00+0800)
 *     更新框架 : TextSprite解耦
 *   v0.2.0.branch1 (2021-08-17T00:00:00+0800)
 *     清理冗余注释
 *   v0.2.0 (2021-08-17T00:00:00+0800)
 *     更新框架
 *       分离出 处理精灵动画播放效果的框架和所有的精灵动画类 作为新插件MKP_SpriteAnimationSet
 *   v0.1.1 (2021-08-16T00:00:00+0800)
 *     更新插件说明及规约
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
 * @base MKP_TextSprite
 * @base MKP_SpriteAnimationSet
 * @orderAfter MKP_TextSprite
 * @orderAfter MKP_SpriteAnimationSet
 * 
 * 
 * @help
 * 
 * 精灵动画管理器 <MKP_SpriteAnimManager> v0.3.4
 * Updated : 2024-02-19T04:11:00+0800
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
 * 之后在编辑消息使用控制字符触发一些播放或控制动画的操作，详见 插件【控制字符】  
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
 * 使用插件参数或插件指令对动画进行设置  
 * 在【显示文本】之前，需要设置动画，详见 【插件指令】  
 * 之后在【显示文本】里编辑消息时，使用控制字符触发操作，详见 【控制字符】  
 * 
 * 可参考 【使用示例】  
 * 
 * 
 * ## 版本支持
 * 
 * 开发环境 : RPG Maker MV v1.6.2 + RPG Maker MZ v1.8.0
 * + MV : 支持
 * + MZ : 支持
 * 
 * 
 * ## 插件指令 (MV)
 * 
 * | description            | command                 |
 * | :--------------------- | :---------------------- |
 * | 设置或清除用户动画     | `AnimMgr setAnim 用户动画id 默认动画id` |
 * | 设置动画参数(按序号)   | `AnimMgr setParam 动画id 参数序号 参数值` |
 * | 设置动画参数(按参数名) | `AnimMgr setParamByKey 动画id 参数名 参数值` |
 * | 设置动画参数(所有参数) | `AnimMgr setParams 动画id 参数值1 参数值2 参数值3 ..` |
 * | 清除动画的全部参数     | `AnimMgr clearparams 动画id` |
 * 
 * #### 设置或清除用户动画
 * 设置一个用户动画，这个动画使用默认动画的模板，并且可以配置参数  
 * 不会自动清除动画参数  
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
 * + 参数名
 *   - 需要设置的参数的参数名
 *   - 字符串，详见 【其他说明】-【动画列表】 的 [参数名]
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
 * ## 插件指令 (MZ)
 * 
 * | description            |
 * | :--------------------- |
 * | 设置用户动画           |
 * | 清除用户动画           |
 * | 设置动画参数(按序号)   |
 * | 设置动画参数(按参数名) |
 * | 设置动画参数(所有参数) |
 * | 清除动画的全部参数     |
 * 
 * 
 * ## 控制字符
 * 
 * 在编辑消息文本时，可以使用类似 `\ABC` 或 `\ABC[123]` 的控制字符。  
 * 控制字符 可以用来 执行操作 或 显示特殊内容。  
 * 显示文本时，文字将会顺序显示，当到达控制字符时，将会执行对应操作或显示对应内容。  
 * 控制字符不区分大小写，参数只能使用数字  
 * 
 * | description | symbol          | param |
 * | :---------- | :-------------- | :---- |
 * | 创建动画     | `\TEXTANIM[..]` | 动画id |
 * | 播放动画     | `\TAPLAY[..]`   | 动画id |
 * | 停止动画(未完成)     | `\TASTOP[..]`   | 动画id |
 * | 暂停动画(未完成)     | `\TAPAUSE[..]`  | 动画id |
 * | 继续动画(未完成)     | `\TACONT[..]`   | 动画id |
 * | 开始添加文本(未完成) | `\TAADDON[..]`  | 动画id |
 * | 停止添加文本(未完成) | `\TAADDOFF[..]` | 动画id |
 * 
 * #### 创建动画
 * 为文本创建一个动画  
 * 显示文字进行到该控制字符时，将会创建动画  
 * 创建动画后，动画会开始准备，但不会直接播放  
 * TEXTANIM : text animation  
 * 
 * * `\TEXTANIM[..]`
 * + 参数
 *   - 动画id
 * 
 * #### 播放动画
 * 播放指定动画(创建动画后不会自动播放)  
 * TAPLAY : text animtion play  
 * 
 * * `\TAPLAY[..]`
 * + 参数
 *   - 动画id
 * 
 * #### 停止动画
 * 停止指定动画  
 * TAPAUSE : text animtion stop  
 * 
 * * `\TASTOP[..]`
 * + 参数
 *   - 动画id
 * 
 * #### 暂停动画
 * 暂停指定动画  
 * TACONT : text animtion pause  
 * 
 * * `\TAPAUSE[..]`
 * + 参数
 *   - 动画id
 * 
 * #### 继续动画
 * 继续指定动画  
 * TASTOP : text animtion continue  
 * 
 * * `\TACONT[..]`
 * + 参数
 *   - 动画id
 * 
 * #### 开始添加文本
 * 关闭指定动画添加文本  
 * TAADDOFF : text animtion add on  
 * 
 * * `\TAADDON[..]`
 * + 参数
 *   - 动画id
 * 
 * #### 停止添加文本
 * 开启指定动画添加文本(默认开启)  
 * TAADDOFF : text animtion add off  
 * 
 * * `\TAADDOFF[..]`
 * + 参数
 *   - 动画id
 * 
 * 
 * ## 使用示例
 * 
 * #### 让一段文字同时淡入显示
 * 配置动画id=101为基础动画id=1  
 * 在【显示文本】中编辑 : `\TextAnim[101]\>我是一段文字\TAplay[101]`  
 * 
 * 说明 :  
 * 首先创建动画，使得之后的文字能被动画识别 : `\TextAnim[101]`  
 * 文字需要同时显示，所以需要开启快速显示模式 : `\>`  
 * 之后输入需要的文字  
 * 最后开启动画，使得文字同时进行动画 : `\TAplay[101]`  
 * 
 * #### 播放【缩放】效果
 * + 事件
 *   - ◆插件指令：AnimMgr setAnim 101 3
 *   - ◆文本：无, 窗口, 底部
 *   - ：　　：以下文字播放缩放效果：\TEXTANIM[101]\TAPlay[101]只有这句话会受效果影响
 * 
 * 
 * ## 脚本说明
 * 
 * TODO
 * 
 * 
 * ## 其他说明
 * 
 * #### 动画列表
 * 详细说明和参数见插件【MKP_SpriteAnimationSet】  
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
 * @command SetAnim
 * @text 设置用户动画
 * @desc 设置一个用户动画，这个动画使用默认动画的模板，并且可以配置参数
 *       不会自动清除动画参数
 * 
 *   @arg uCode
 *   @text 用户动画id
 *   @desc 所设置的用户动画的id
 *         用户动画id，大于等于101
 *   @type number
 *   @min 101 @max 1e5
 *   @default 101
 * 
 *   @arg bCode
 *   @text 默认动画id
 *   @desc 作为模板的默认动画的id
 *         默认动画id，小于等于100，大于等于0   0:清除用户动画
 *   @type number
 *   @min 0 @max 100
 *   @default 0
 * 
 * 
 * @command ClearAnim
 * @text 清除用户动画
 * @desc 设置指定的用户动画
 *       不会自动清除动画参数
 * 
 *   @arg uCode
 *   @text 用户动画id
 *   @desc 所设置的用户动画的id
 *         用户动画id，大于等于101
 *   @type number
 *   @min 101 @max 1e5
 *   @default 101
 * 
 * 
 * @command SetParam
 * @text 设置动画参数(按序号)
 * @desc 
 * 
 *   @arg code
 *   @text 动画id
 *   @desc 需要设置参数的用户动画的id
 *   @type number
 *   @min 101 @max 1e5
 *   @default 101
 * 
 *   @arg index
 *   @text 参数序号
 *   @desc 需要设置的参数的序号
 *         详见 【其他说明】-【动画列表】 的 [参数序号]
 *   @type number
 *   @min 0 @max 1e5
 *   @default 0
 * 
 *   @arg value
 *   @text 参数值
 *   @desc 需要设置的参数值
 *   @type string
 *   @default 0
 * 
 * 
 * @command SetParamByKey
 * @text 设置动画参数(按参数名)
 * @desc 
 * 
 *   @arg code
 *   @text 动画id
 *   @desc 需要设置参数的用户动画的id
 *   @type number
 *   @min 101 @max 1e5
 *   @default 101
 * 
 *   @arg key
 *   @text 参数名
 *   @desc 需要设置的参数的参数名
 *         详见 【其他说明】-【动画列表】 的 [参数名]
 *   @type string
 *   @default 
 * 
 *   @arg value
 *   @text 参数值
 *   @desc 需要设置的参数值
 *   @type string
 *   @default 0
 * 
 * 
 * @command SetParams
 * @text 设置动画参数(所有参数)
 * @desc 
 * 
 *   @arg code
 *   @text 动画id
 *   @desc 需要设置参数的用户动画的id
 *   @type number
 *   @min 101 @max 1e5
 *   @default 101
 * 
 *   @arg values
 *   @text 参数列表
 *   @desc 按 【其他说明】-【动画列表】 中的参数顺序 排列
 *   @type string[]
 *   @default []
 * 
 * 
 * @command ClearParams
 * @text 清除动画的全部参数
 * @desc 
 * 
 *   @arg code
 *   @text 动画id
 *   @desc 需要设置参数的用户动画的id
 *   @type number
 *   @min 101 @max 1e5
 *   @default 101
 * 
 * 
 * 
 * @param ---- startline ----
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
 * @param _
 * @text 描述
 * @desc 描述(备注)，不影响游戏，可自由修改
 * @type string
 * @default 
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


"use strict";

var MK_PluginData = MK_PluginData || {};

(function() {
	const pluginData = {
		MikanPluginDataCoreUpdatedTime: "2024-01-01T013:00:00+0800",
		pluginName: "MKP_SpriteAnimManager",
		pluginVersion: "v0.3.4",
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
	const pluginData = MK_PluginData["MKP_SpriteAnimManager"];
	const paramParser = pluginData.paramParser;
	const numberParser = paramParser["numberParser"];
	const stringParser = paramParser["stringParser"];
	const booleanParser = paramParser["booleanParser"];
	const structParser = paramParser["structParser"];
	const listParser = paramParser["listParser"];
	function listNumberParser(str, defVal) {
		const data = listParser(numberParser, str || defVal);
		return data;
	}
	paramParser["listNumberParser"] = listNumberParser;
	function structAnimParamParser(str, defVal) {
		const data = Object.assign({
			index: 0,
			key: "",
			value: ""
		}, structParser(str || defVal));
		data.index = numberParser(data.index, 0);
		data.key = stringParser(data.key, "");
		data.value = stringParser(data.value, "");
		return data;
	}
	paramParser["structAnimParamParser"] = structAnimParamParser;
	function listStructAnimParamParser(str, defVal) {
		const data = listParser(structAnimParamParser, str || defVal);
		return data;
	}
	paramParser["listStructAnimParamParser"] = listStructAnimParamParser;
	function structAnimParamsParser(str, defVal) {
		const data = Object.assign({
			_: "",
			animCode: 0,
			baseAnimCode: 0,
			params: "[]"
		}, structParser(str || defVal));
		data._ = "";
		data.animCode = numberParser(data.animCode, 0);
		data.baseAnimCode = numberParser(data.baseAnimCode, 0);
		data.params = listStructAnimParamParser(data.params, "[]");
		return data;
	}
	paramParser["structAnimParamsParser"] = structAnimParamsParser;
	function listStructAnimParamsParser(str, defVal) {
		const data = listParser(structAnimParamsParser, str || defVal);
		return data;
	}
	paramParser["listStructAnimParamsParser"] = listStructAnimParamsParser;
})();

(function() {
	const pluginData = MK_PluginData["MKP_SpriteAnimManager"];
	const paramParser = pluginData.paramParser;
	const numberParser = paramParser["numberParser"];
	const stringParser = paramParser["stringParser"];
	const booleanParser = paramParser["booleanParser"];
	const structParser = paramParser["structParser"];
	const listParser = paramParser["listParser"];
	const listStructAnimParamsParser = paramParser["listStructAnimParamsParser"];
	const config = [];
	config.push([ "AnimParamsConfig", listStructAnimParamsParser, "[]" ]);
	const paramSource = pluginData.fetchMyPluginParam();
	const param = pluginData.param;
	config.forEach(arr => param[arr[0]] = arr[1](paramSource[arr[0]], arr[2]));
})();

(function() {
	const PLUGIN_NAME = "MKP_SpriteAnimManager";
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
		function MK_SpriteAnimManager() {
			throw new Error("This is a static class");
		}
		(function() {
			MK_SpriteAnimManager.EMPTY_ANIM_CODE = 0;
			MK_SpriteAnimManager._baseAnimMapTable = [ "", "fade", "zoom", "zoom2", "wipe", "shake", "zoom3", "wave", "rotation", "swing", "random", "karaoke" ];
			MK_SpriteAnimManager.getBaseMapTable = function() {
				return this._baseAnimMapTable;
			};
			MK_SpriteAnimManager._userAnimMapping = [];
			MK_SpriteAnimManager.getUserMapTable = function() {
				return this._userAnimMapping;
			};
			MK_SpriteAnimManager.MAX_ANIM_SIZE = 100;
			MK_SpriteAnimManager.maxAnimSize = function() {
				return this.MAX_ANIM_SIZE;
			};
			MK_SpriteAnimManager.isBaseMappingCode = function(code) {
				return code <= this.maxAnimSize();
			};
			MK_SpriteAnimManager.isUserMappingCode = function(code) {
				return code > this.maxAnimSize();
			};
			MK_SpriteAnimManager.setUserMapping = function(uCode, bCode) {
				if (this.isUserMappingCode(uCode) && this.isBaseMappingCode(bCode)) {
					this.getUserMapTable()[uCode] = bCode;
				}
			};
			MK_SpriteAnimManager.getUserMapping = function(uCode) {
				if (this.isUserMappingCode(uCode)) {
					var bCode = this.getUserMapTable()[uCode];
					if (this.isBaseMappingCode(bCode)) {
						return bCode;
					}
				}
				return this.EMPTY_ANIM_CODE;
			};
		})();
		(function() {
			MK_SpriteAnimManager.codeToAnim = function(code) {
				if (this.isUserMappingCode(code)) {
					return this.getBaseMapping(this.getUserMapping(code));
				} else if (this.isBaseMappingCode(code)) {
					return this.getBaseMapping(code);
				} else {
					return this.EMPTY_ANIM_CODE;
				}
			};
		})();
		(function() {
			MK_SpriteAnimManager._animParam = [];
			MK_SpriteAnimManager.setAnimParam = function(code, index, value) {
				if (!this._animParam[code]) {
					this._animParam[code] = [];
				}
				this._animParam[code][index] = value;
			};
			MK_SpriteAnimManager.setAnimParams = function(code, values) {
				if (!Array.isArray(values)) {
					values = [ values ];
				}
				this._animParam[code] = values;
			};
			MK_SpriteAnimManager.getAnimParam = function(code, index) {
				if (!this._animParam[code]) return; else return this._animParam[code][index];
			};
			MK_SpriteAnimManager.getAnimParams = function(code) {
				return this._animParam[code] || [];
			};
		})();
		(function() {
			MK_SpriteAnimManager.getParamIndex = function(code, key) {
				if (this.isUserMappingCode(code)) {
					code = this.getUserMapping(code);
				}
				animClass = this.getAnimClass(code);
				if (!!animClass) {
					return new animClass().getParamIndex(key);
				} else {
					return key;
				}
			};
			MK_SpriteAnimManager.setAnimParamByKey = function(code, key, value) {
				var index = this.getParamIndex(code, key);
				this.setAnimParam(code, index, value);
			};
			MK_SpriteAnimManager.getAnimParamByKey = function(code, key) {
				var index = this.getParamIndex(code, key);
				return this.getAnimParam(code, index);
			};
		})();
		(function() {
			MK_SpriteAnimManager.getAnimClass = function(code) {
				return MK_SpriteAnimationSet.getSpriteAnimClassByCode(code);
			};
			MK_SpriteAnimManager.createSpriteAnimByRealCode = function(code) {
				var animClass = this.getAnimClass(code);
				if (!!animClass) {
					var args = [ ...arguments ].splice(1);
					return new animClass(...args);
				} else {
					return null;
				}
			};
			MK_SpriteAnimManager.createSpriteAnim = function(code) {
				var bCode = this.isUserMappingCode(code) ? this.getUserMapping(code) : code;
				return this.createSpriteAnimByRealCode(bCode, code);
			};
		})();
		(function() {
			MK_SpriteAnimManager._spriteAnimObjects = [];
			MK_SpriteAnimManager.addSpriteAnimObject = function(code) {
				var spriteAnim = this.createSpriteAnim(code);
				this._spriteAnimObjects[code] = spriteAnim;
				return spriteAnim;
			};
			MK_SpriteAnimManager.getSpriteAnimObject = function(code) {
				return this._spriteAnimObjects[code];
			};
		})();
		(function() {
			MK_SpriteAnimManager.clearSpriteAnimObject = function(code) {
				if (this._spriteAnimObjects[code]) {
					this._spriteAnimObjects[code].destroyMe();
					this._spriteAnimObjects[code] = null;
				}
			};
			MK_SpriteAnimManager.clearAllSpriteAnimObject = function() {
				this._spriteAnimObjects.splice(0);
			};
			MK_SpriteAnimManager.clearSpriteAnimObjectByTextSprite = function(textSprite) {
				!!textSprite && this._spriteAnimObjects.forEach(function(spriteAnim, code) {
					if (textSprite.getTextSpriteAnimFlag("anim", code)) {
						this.clearSpriteAnimObject(code);
					}
				}, this);
			};
		})();
		(function() {
			MK_SpriteAnimManager.initSpriteAnimTarget = function(spriteAnim, textSprite) {
				if (spriteAnim) {
					var code = spriteAnim.getAnimCode();
					textSprite.filterLetterObjectsByAnimFlag(code, "add").forEach(letterObj => spriteAnim.addTarget(letterObj.sprite, letterObj.data));
					if (typeof spriteAnim.setMsgWindow === "function") {
						spriteAnim.setMsgWindow(textSprite._msgWindow);
					}
				}
			};
			MK_SpriteAnimManager.addNewSpriteAnimTarget = function(textSprite, letterObj) {
				this._spriteAnimObjects.forEach(function(spriteAnim, code) {
					if (spriteAnim) {
						if (textSprite.getLetterAnimFlag(letterObj, "add", code)) {
							spriteAnim.addTarget(letterObj.sprite, letterObj.data);
						}
					}
				}, this);
			};
			const _MK_MK_TextSprite_onAddLetterSprite = MK_TextSprite.prototype.onAddLetterSprite;
			MK_TextSprite.prototype.onAddLetterSprite = function(letterObj) {
				_MK_MK_TextSprite_onAddLetterSprite.apply(this, arguments);
				MK_SpriteAnimManager.addNewSpriteAnimTarget(this, letterObj);
			};
		})();
		(function() {
			MK_SpriteAnimManager.setSpriteAnimFlag = function(flag, code, value) {
				var spriteAnim = this._spriteAnimObjects[code];
				if (spriteAnim) {
					flag = flag.slice(0, 1).toUpperCase() + flag.slice(1);
					var flagOn = value === undefined ? true : !!value;
					flagOn ? spriteAnim.setAnimFlagOn(flag) : spriteAnim.setAnimFlagOff(flag);
				}
			};
		})();
		(function() {
			MK_SpriteAnimManager.updateSpriteAnimtions = function(textSprite) {
				this.updateSpriteAnimtionsFrameUpdate(textSprite);
			};
			MK_SpriteAnimManager.updateSpriteAnimtionsFrameUpdate = function(textSprite) {
				this._spriteAnimObjects.forEach(function(spriteAnim, code) {
					if (spriteAnim && textSprite.getTextSpriteAnimFlag("anim", code)) {
						spriteAnim.update();
					}
				});
			};
		})();
		window.MK_SpriteAnimManager = MK_SpriteAnimManager;
		return MK_SpriteAnimManager;
	})();
	(function() {
		PLUGIN_PARAMS.AnimParamsConfig.forEach(function(animParams) {
			MK_SpriteAnimManager.setUserMapping(animParams.animCode, animParams.baseAnimCode);
			animParams.params.forEach(function(params) {
				if (!!params.key) {
					MK_SpriteAnimManager.setAnimParamByKey(animParams.animCode, params.key, params.value);
				} else {
					MK_SpriteAnimManager.setAnimParam(animParams.animCode, params.index, params.value);
				}
			});
		});
	})();
	(function() {
		(function() {
			if (CURRENT_ENGINE === "MV") {
				const _MK_Window_Message__createAllParts = Window_Message.prototype._createAllParts;
				Window_Message.prototype._createAllParts = function() {
					_MK_Window_Message__createAllParts.apply(this, arguments);
					this._infoTextSprite = new MK_TextSprite();
					this._windowContentsSprite.addChildAt(this._infoTextSprite, 0);
				};
			} else {
				const _MK_Window_Message__createAllParts = Window_Message.prototype._createAllParts;
				Window_Message.prototype._createAllParts = function() {
					_MK_Window_Message__createAllParts.apply(this, arguments);
					this._infoTextSprite = new MK_TextSprite();
					this._contentsSprite.addChildAt(this._infoTextSprite, 0);
				};
			}
			const _MK_Window_Message_createContents = Window_Message.prototype.createContents;
			Window_Message.prototype.createContents = function() {
				_MK_Window_Message_createContents.apply(this, arguments);
				var textBitmap = new MK_TextBitmap(this.contentsWidth(), this.contentsHeight());
				textBitmap.setTextSprite(this._infoTextSprite);
				textBitmap.textModeOn();
				this.contents = textBitmap;
				this.resetFontSettings();
			};
		})();
		(function() {
			const _MK_Window_Message_update = Window_Message.prototype.update;
			Window_Message.prototype.update = function() {
				_MK_Window_Message_update.apply(this, arguments);
				MK_SpriteAnimManager.updateSpriteAnimtions(this._infoTextSprite);
			};
		})();
		(function() {
			const _MK_Window_Message_startMessage = Window_Message.prototype.startMessage;
			Window_Message.prototype.startMessage = function() {
				this.textAnim_clearTextSprite();
				this._infoTextSprite.setMsgWindow(this);
				_MK_Window_Message_startMessage.apply(this, arguments);
			};
			const _MK_Window_Message_terminateMessage = Window_Message.prototype.terminateMessage;
			Window_Message.prototype.terminateMessage = function() {
				_MK_Window_Message_terminateMessage.apply(this, arguments);
				this.textAnim_clearTextSprite();
			};
			Window_Message.prototype.textAnim_clearTextSprite = function() {
				MK_SpriteAnimManager.clearSpriteAnimObjectByTextSprite(this._infoTextSprite);
				this._infoTextSprite.clearAll();
			};
		})();
		(function() {
			const _MK_Window_Message_newPage = Window_Message.prototype.newPage;
			Window_Message.prototype.newPage = function(textState) {
				_MK_Window_Message_newPage.apply(this, arguments);
				textState.pageNum = (textState.pageNum || 0) + 1;
				textState.lineNum = 1;
				textState.textNum = 1;
			};
			const _MK_Window_Message_processNewPage = Window_Message.prototype.processNewPage;
			Window_Message.prototype.processNewPage = function(textState) {
				_MK_Window_Message_processNewPage.apply(this, arguments);
				textState.pageNum++;
				textState.lineNum = 1;
				textState.textNum = 1;
			};
			const _MK_Window_Message_processNewLine = Window_Message.prototype.processNewLine;
			Window_Message.prototype.processNewLine = function(textState) {
				_MK_Window_Message_processNewLine.apply(this, arguments);
				textState.lineNum++;
				textState.textNum = 1;
			};
			const _MK_Window_Message_processNormalCharacter = Window_Message.prototype.processNormalCharacter;
			Window_Message.prototype.processNormalCharacter = function(textState) {
				_MK_Window_Message_processNormalCharacter.apply(this, arguments);
				textState.textNum++;
			};
			const _MK_Window_Message_processDrawIcon = Window_Message.prototype.processDrawIcon;
			Window_Message.prototype.processDrawIcon = function(iconIndex, textState) {
				_MK_Window_Message_processDrawIcon.apply(this, arguments);
				textState.textNum++;
			};
		})();
		(function() {
			const _MK_Window_Message_processEscapeCharacter = Window_Message.prototype.processEscapeCharacter;
			Window_Message.prototype.processEscapeCharacter = function(code, textState) {
				switch (code) {
				  case "TEXTANIM":
					var param = this.obtainEscapeParam(textState);
					this.textAnim_createTextAnim(param || 0);
					break;

				  case "TAPLAY":
					var param = this.obtainEscapeParam(textState);
					this.textAnim_setFlagPlayOn(param || 0);
					break;

				  case "TAPAUSE":
					var param = this.obtainEscapeParam(textState);
					this.textAnim_setFlagPauseOn(param || 0);
					break;

				  case "TACONT":
					var param = this.obtainEscapeParam(textState);
					this.textAnim_setFlagContinueOn(param || 0);
					break;

				  case "TASTOP":
					var param = this.obtainEscapeParam(textState);
					this.textAnim_setFlagStopOn(param || 0);
					break;

				  case "TAADDON":
					var param = this.obtainEscapeParam(textState);
					this.textAnim_setFlagAllowAddOn(param || 0);
					break;

				  case "TAADDOFF":
					var param = this.obtainEscapeParam(textState);
					this.textAnim_setFlagAllowAddOff(param || 0);
					break;

				  case "TAACTON":
					var param = this.obtainEscapeParam(textState);
					this.textAnim_setFlagEnabledOn(param || 0);
					break;

				  case "TAACTOFF":
					var param = this.obtainEscapeParam(textState);
					this.textAnim_setFlagEnabledOff(param || 0);
					break;

				  default:
					_MK_Window_Message_processEscapeCharacter.apply(this, arguments);
					break;
				}
			};
			Window_Message.prototype.textAnim_createTextAnim = function(code) {
				var spriteAnim = MK_SpriteAnimManager.addSpriteAnimObject(code);
				MK_SpriteAnimManager.initSpriteAnimTarget(spriteAnim, this._infoTextSprite);
				this.textAnim_setFlagAllowAddOn(code);
				this.textAnim_setAnimFlagOn(code);
			};
			Window_Message.prototype.textAnim_setFlagAutoOn = function(code) {
				MK_SpriteAnimManager.setSpriteAnimFlag("auto", code, true);
			};
			Window_Message.prototype.textAnim_setFlagAutoOff = function(code) {
				MK_SpriteAnimManager.setSpriteAnimFlag("auto", code, false);
			};
			Window_Message.prototype.textAnim_setFlagPlayOn = function(code) {
				MK_SpriteAnimManager.setSpriteAnimFlag("play", code, true);
			};
			Window_Message.prototype.textAnim_setFlagPauseOn = function(code) {
				MK_SpriteAnimManager.setSpriteAnimFlag("pause", code, true);
			};
			Window_Message.prototype.textAnim_setFlagContinueOn = function(code) {
				MK_SpriteAnimManager.setSpriteAnimFlag("continue", code, true);
			};
			Window_Message.prototype.textAnim_setFlagStopOn = function(code) {
				MK_SpriteAnimManager.setSpriteAnimFlag("stop", code, true);
			};
			Window_Message.prototype.textAnim_setFlagInitOn = function(code) {
				MK_SpriteAnimManager.setSpriteAnimFlag("init", code, true);
			};
			Window_Message.prototype.textAnim_setFlagEnabledOn = function(code) {
				MK_SpriteAnimManager.setSpriteAnimFlag("enabled", code, true);
			};
			Window_Message.prototype.textAnim_setFlagEnabledOff = function(code) {
				MK_SpriteAnimManager.setSpriteAnimFlag("enabled", code, false);
			};
			Window_Message.prototype.textAnim_setAnimFlagOn = function(code) {
				this._infoTextSprite.setTextSpriteAnimFlag("anim", code, true);
			};
			Window_Message.prototype.textAnim_setFlagAllowAddOn = function(code) {
				this._infoTextSprite.setNewLetterAnimFlag("add", code, true);
			};
			Window_Message.prototype.textAnim_setFlagAllowAddOff = function(code) {
				this._infoTextSprite.setNewLetterAnimFlag("add", code, false);
			};
		})();
	})();
})();

(function() {
	const PLUGIN_NAME = "MKP_SpriteAnimManager";
	const REAL_PLUGIN_NAME = MK_PluginData[PLUGIN_NAME].fetchMyRealPluginName();
	const ParamParser = function() {
		const pluginData = MK_PluginData[PLUGIN_NAME];
		return pluginData.paramParser;
	}();
	const CURRENT_ENGINE = function() {
		const pluginData = MK_PluginData[PLUGIN_NAME];
		return pluginData.getRpgmakerEngine();
	}();
	if (CURRENT_ENGINE === "MV") {
		const _MK_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
		Game_Interpreter.prototype.pluginCommand = function(command, args) {
			_MK_Game_Interpreter_pluginCommand.apply(this, arguments);
			if ((command || "").toLowerCase() === "animmgr") {
				var subCommand = ParamParser.stringParser(args[0], "");
				subCommand = subCommand.toLowerCase();
				if (subCommand === "setanim") {
					var uCode = ParamParser.numberParser(args[1], 0);
					var bCode = ParamParser.numberParser(args[2], 0);
					MK_SpriteAnimManager.setUserMapping(uCode, bCode);
				} else if (subCommand === "setparam") {
					var code = ParamParser.numberParser(args[1], 0);
					var index = ParamParser.numberParser(args[2], 0);
					var value = ParamParser.numberParser(args[3], null);
					MK_SpriteAnimManager.setAnimParam(code, index, value);
				} else if (subCommand === "setparambykey") {
					var code = ParamParser.numberParser(args[1], 0);
					var key = ParamParser.stringParser(args[2], "");
					var value = ParamParser.numberParser(args[3], null);
					MK_SpriteAnimManager.setAnimParamByKey(code, key, value);
				} else if (subCommand === "setparams") {
					var code = ParamParser.numberParser(args[1], 0);
					var values = args.slice(2);
					MK_SpriteAnimManager.setAnimParams(code, values);
				} else if (subCommand === "clearparams") {
					var code = ParamParser.numberParser(args[1], 0);
					var values = [];
					MK_SpriteAnimManager.setAnimParams(code, values);
				} else {
					console.warn(`Unknown plugin AnimMgr subCommand "${subCommand}".`);
				}
			}
		};
	}
	if (CURRENT_ENGINE === "MZ") {
		function registerCommand(commandName, func) {
			var pluginName = REAL_PLUGIN_NAME;
			PluginManager.registerCommand(pluginName, commandName, func);
		}
		registerCommand("SetAnim", function(args) {
			var uCode = ParamParser.numberParser(args.uCode, 0);
			var bCode = ParamParser.numberParser(args.bCode, 0);
			MK_SpriteAnimManager.setUserMapping(uCode, bCode);
		});
		registerCommand("ClearAnim", function(args) {
			var uCode = ParamParser.numberParser(args.uCode, 0);
			var bCode = 0;
			MK_SpriteAnimManager.setUserMapping(uCode, bCode);
		});
		registerCommand("SetParam", function(args) {
			var code = ParamParser.numberParser(args.code, 0);
			var index = ParamParser.numberParser(args.index, 0);
			var value = ParamParser.numberParser(args.value, null);
			MK_SpriteAnimManager.setAnimParam(code, index, value);
		});
		registerCommand("SetParamByKey", function(args) {
			var code = ParamParser.numberParser(args.code, 0);
			var key = ParamParser.stringParser(args.key, "");
			var value = ParamParser.numberParser(args.value, null);
			MK_SpriteAnimManager.setAnimParamByKey(code, key, value);
		});
		registerCommand("SetParams", function(args) {
			var code = ParamParser.numberParser(args.code, 0);
			var values = ParamParser.listNumberParser(args.values, "[]");
			MK_SpriteAnimManager.setAnimParams(code, values);
		});
		registerCommand("ClearParams", function(args) {
			var code = ParamParser.numberParser(args.code, 0);
			var values = [];
			MK_SpriteAnimManager.setAnimParams(code, values);
		});
	}
})();