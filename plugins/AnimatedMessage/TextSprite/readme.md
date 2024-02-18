# TextSprite <文本精灵>

完成精灵动画功能的三个插件之一  
+ 插件[`TextSprite`](./../TextSprite)(本插件)
  - 用于支持绘制和控制播放动画等
+ 插件[`SpriteAnimationSet`](./../SpriteAnimationSet)
  - 用于提供处理动画效果等
+ 插件[`SpriteAnimManager`](./../SpriteAnimManager)
  - 用于设置动画和动画参数、处理消息框文字播放动画等

本插件只提供前置基础  


## 使用方法

按顺序导入 完成精灵动画功能的三个插件  
+ [`TextSprite`](./../TextSprite)
+ [`SpriteAnimationSet`](./../SpriteAnimationSet)
+ [`SpriteAnimManager`](./../SpriteAnimManager)


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
Copyright (C) 2019-2024 Mikan(MikanHako)  
