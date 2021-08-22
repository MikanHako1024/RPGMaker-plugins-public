# TextSprite <文本精灵>

完成精灵动画功能的三个插件之一  
+ 插件[`TextSprite`](./../TextSprite)(本插件)
  - 用于支持绘制和控制播放动画等
+ 插件[`SpriteAnimationSet`](./../SpriteAnimationSet)
  - 用于提供处理动画效果等
+ 插件[`SpriteAnimManager`](./../SpriteAnimManager)
  - 用于设置动画和动画参数、处理消息框文字播放动画等

首先对动画进行配置，详细操作见 插件【MKP_SpriteAnimManager】  
之后在编辑消息时，使用特殊字串触发一些播放动画的操作，
如：创建动画、播放动画、暂停动画 等  
详见 【使用方法】  


## 使用方法

按顺序导入 完成精灵动画功能的三个插件  
+ [`TextSprite`](./../TextSprite)
+ [`SpriteAnimationSet`](./../SpriteAnimationSet)
+ [`SpriteAnimManager`](./../SpriteAnimManager)

在【显示文本】之前，需要设置动画，详见 插件【SpriteAnimManager】  
之后在【显示文本】里编辑消息时，使用控制字符触发操作，详见 【控制字符】  


## 控制字符

在编辑消息文本时，可以使用类似 `\ABC` 或 `\ABC[123]` 的控制字符。  
控制字符 可以用来 执行操作 或 显示特殊内容。  
显示文本时，文字将会顺序显示，当到达控制字符时，将会执行对应操作或显示对应内容。  
控制字符不区分大小写，参数只能使用数字  

| description | symbol          | param |
| :---------- | :-------------- | :---- |
| 创建动画     | `\TEXTANIM[..]` | 动画id |
| 播放动画     | `\TAPLAY[..]`   | 动画id |
| 停止动画(未完成)     | `\TASTOP[..]`   | 动画id |
| 暂停动画(未完成)     | `\TAPAUSE[..]`  | 动画id |
| 继续动画(未完成)     | `\TACONT[..]`   | 动画id |
| 开始添加文本(未完成) | `\TAADDON[..]`  | 动画id |
| 停止添加文本(未完成) | `\TAADDOFF[..]` | 动画id |

#### 创建动画
为文本创建一个动画  
显示文字进行到该控制字符时，将会创建动画  
创建动画后，动画会开始准备，但不会直接播放  
TEXTANIM : text animation  

* `\TEXTANIM[..]`
+ 参数
  - 动画id

#### 播放动画
播放指定动画(创建动画后不会自动播放)  
TAPLAY : text animtion play  

* `\TAPLAY[..]`
+ 参数
  - 动画id

#### 停止动画
停止指定动画  
TAPAUSE : text animtion stop  

* `\TASTOP[..]`
+ 参数
  - 动画id

#### 暂停动画
暂停指定动画  
TACONT : text animtion pause  

* `\TAPAUSE[..]`
+ 参数
  - 动画id

#### 继续动画
继续指定动画  
TASTOP : text animtion continue  

* `\TACONT[..]`
+ 参数
  - 动画id

#### 开始添加文本
关闭指定动画添加文本  
TAADDOFF : text animtion add on  

* `\TAADDON[..]`
+ 参数
  - 动画id

#### 停止添加文本
开启指定动画添加文本(默认开启)  
TAADDOFF : text animtion add off  

* `\TAADDOFF[..]`
+ 参数
  - 动画id


## 其他说明

#### 动画列表，详细说明和参数见插件`SpriteAnimManager`
注 : id 为 默认动画id  
| id | 动画效果 |
| :- | :------- |
|  2 | 淡入淡出 |
|  3 | 缩放     |
|  4 | 翻转     |
|  5 | 上下出现(未完成) |
|  6 | 震动     |
|  7 | 剧烈缩放 |
|  8 | 波浪缩放 |
|  9 | 旋涡     |
| 10 | 摇晃     |
| 11 | 随机     |
| 32 | 卡拉Ok   |
| 52 | 文字居中 |


## 使用示例

#### 让一段文字同时淡入显示
配置动画id=101为基础动画id=1  
在【显示文本】中编辑 : `\TextAnim[101]\>我是一段文字\TAplay[101]`  

说明 :  
首先创建动画，使得之后的文字能被动画识别 : `\TextAnim[101]`  
文字需要同时显示，所以需要开启快速显示模式 : `\>`  
之后输入需要的文字  
最后开启动画，使得文字同时进行动画 : `\TAplay[101]`  


## 后续任务

- [ ] ?添加使用文本精灵模式的控制字符，以减少普通模式下的不稳定性
- [ ] ?消息窗口关闭时，停止(?或销毁)动画实例
- [x] 绘画文字时，考虑文字阴影，增加宽度
- [ ] ?可以创建任意数量带id的无窗口的文本，显示时指定id，用id管理控制或关闭
- [x] 更新插件说明
- [ ] 默认关闭特殊绘制模式，需要时再打开
- [ ] 优化创建字母精灵，缓存一些sprite和bitmap，防止创建太多


## Author
Mikan(MikanHako)  
Copyright (C) 2020-2021 Mikan(MikanHako)  
