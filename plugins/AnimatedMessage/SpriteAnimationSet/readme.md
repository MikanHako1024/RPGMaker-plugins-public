# SpriteAnimationSet <精灵动画集>

完成精灵动画功能的三个插件之一  
+ 插件[`TextSprite`](./../TextSprite)(本插件)
  - 用于支持绘制和控制播放动画等
+ 插件[`SpriteAnimationSet`](./../SpriteAnimationSet)
  - 用于提供处理动画效果等
+ 插件[`SpriteAnimManager`](./../SpriteAnimManager)
  - 用于设置动画和动画参数、处理消息框文字播放动画等

本插件提供动画效果，本身无需配置插件参数和使用插件指令  
文本动画的描述和参数列表 见 【其他说明】  


## 使用方法

按顺序导入 完成精灵动画功能的三个插件  
+ [`TextSprite`](./../TextSprite)
+ [`SpriteAnimationSet`](./../SpriteAnimationSet)
+ [`SpriteAnimManager`](./../SpriteAnimManager)

配置和使用 见插件【SpriteAnimManager】和【TextSprite】  


## 其他说明

#### MOG_AnimatedText动画列表
以下动画效果来自 插件[`MOG_AnimatedText`](https://github.com/DrillUp/drill_plugins/blob/master/js/plugins/MOG_AnimatedText.js)  
注 : id 为 默认动画id  

| id | 动画效果 | 动画名  | 动画描述 |
| :- | :------- | :-----  | :------- |
|  2 | 淡入淡出 | Fade     | (todo) |
|  3 | 缩放     | Zoom     | (todo) |
|  4 | 翻转     | Zoom2    | (todo) |
|  5 | 上下出现(未完成) | Wipe     | (todo) |
|  6 | 震动     | Shake    | (todo) |
|  7 | 剧烈缩放 | Zoom3    | (todo) |
|  8 | 波浪缩放 | Wave     | (todo) |
|  9 | 旋涡     | Rotation | (todo) |
| 10 | 摇晃     | Swing    | (todo) |
| 11 | 随机     | Random   | (todo) |

#### 新增动画列表概要
以下动画效果为新增的动画  
注 : id 为 默认动画id  

| id | 动画效果 | 动画名  | 动画描述 |
| :- | :------- | :-----  | :------- |
| 32 | 卡拉OK   | Karaoke | 模仿卡拉OK播放的效果 |

#### 文本格式动画列表概要
以下动画效果为设置文字样式的动画  
注 : id 为 默认动画id  

| id | 动画效果 | 动画名  | 动画描述 |
| :- | :------- | :-----  | :------- |
| 52 | 文字居中 | TextCenter | 让显示的文字动态居中 |

#### 动画参数

+ 2 - 缩放 - Zoom
| 序号 | 描述             | 参数名       | 值类型 | 默认值 | 备注 |
| :--- | :-----------     | :---------   | :----- | :----- | :--- |
|   0  | 初始不透明度     | opacityStart | 数值   | 0      |  |
|   1  | 结束不透明度     | opacityEnd   | 数值   | 255    |  |
|   2  | 不透明度变化速度 | opacitySpeed | 数值   | 5      |  |

+ 3 - 淡入淡出 - Fade
| 序号 | 描述             | 参数名       | 值类型 | 默认值 | 备注 |
| :--- | :-----------     | :---------   | :----- | :----- | :--- |
|   0  | 初始不透明度     | opacityStart | 数值  | 0     |  |
|   1  | 结束不透明度     | opacityEnd   | 数值  | 255   |  |
|   2  | 不透明度变化速度 | opacitySpeed | 数值  | 4     |  |
|   3  | 初始X缩放        | scaleXStart  | 数值  | 2.0   |  |
|   4  | 结束X缩放        | scaleXEnd    | 数值  | 1.0   |  |
|   5  | X缩放变化速度    | scaleXSpeed  | 数值  | -0.04 |  |
|   6  | 初始Y缩放        | scaleYStart  | 数值  | 2.0   |  |
|   7  | 结束Y缩放        | scaleYEnd    | 数值  | 1.0   |  |
|   8  | Y缩放变化速度    | scaleYSpeed  | 数值  | -0.04 |  |

+ 4 - 翻转 - Zoom2
| 序号 | 描述             | 参数名       | 值类型 | 默认值 | 备注 |
| :--- | :-----------     | :---------    | :----- | :----- | :--- |
|   0  | 初始不透明度     | opacityStart  | 数值  | 0     |  |
|   1  | 结束不透明度     | opacityEnd    | 数值  | 255   |  |
|   2  | 不透明度变化速度 | opacitySpeed | 数值  | 4     |  |
|   3  | 初始X缩放        | scaleXStart  | 数值  | -1.0  |  |
|   4  | 结束X缩放        | scaleXEnd    | 数值  | 1.0   |  |
|   5  | X缩放变化速度    | scaleXSpeed  | 数值  | 0.02  |  |
|   6  | 初始Y缩放        | scaleYStart  | 数值  | 2.0   |  |
|   7  | 结束Y缩放        | scaleYEnd    | 数值  | 1.0   |  |
|   8  | Y缩放变化速度    | scaleYSpeed  | 数值  | -0.02 |  |

+ 5 - 上下出现 - Wipe

+ 6 - 震动 - Shake
| 序号 | 描述                | 参数名          | 值类型 | 默认值 | 备注 |
| :--- | :-----------        | :---------      | :----- | :----- | :--- |
|   0  | 震动间隔(帧数)      | shakeWaitCount  | 数值  | 3     |  |
|   1  | 震动幅度(像素)      | shakeAmplitude  | 数值  | 3     |  |
|   2  | 是否停止(0不停;1停) | shakeNeedStop   | 0或1  | 0     |  |
|   3  | 震动总计数(若停止)  | shakeTotalCount | 数值  | 12   |  |

+ 7 - 剧烈缩放 - Zoom3
| 序号 | 描述              | 参数名         | 值类型 | 默认值 | 备注 |
| :--- | :-----------      | :---------     | :----- | :----- | :--- |
|   0  | 初始不透明度      | opacityStart   | 数值  | 0      |  |
|   1  | 结束不透明度      | opacityEnd     | 数值  | 255    |  |
|   2  | 不透明度变化速度  | opacitySpeed   | 数值  | 20     |  |
|   3  | 初始X缩放         | scaleXStart    | 数值  | 4.0    |  |
|   4  | 结束X缩放         | scaleXEnd      | 数值  | 1.0    |  |
|   5  | X缩放变化速度     | scaleXSpeed    | 数值  | -0.2   |  |
|   6  | 初始Y缩放         | scaleYStart    | 数值  | 4.0    |  |
|   7  | 结束Y缩放         | scaleYEnd      | 数值  | 1.0    |  |
|   8  | Y缩放变化速度     | scaleYSpeed    | 数值  | -0.2   |  |
|   9  | 震动间隔(帧数)    | shakeWaitCount | 数值  | 3      |  |
|  10  | 震动幅度(像素)    | shakeAmplitude | 数值  | 3      |  |
|  11  | 是否停止          | shakeNeedStop   | 0或1  | 0     | 0不停;1停 |
|  12  | 震动总计数        | shakeTotalCount | 数值  | 12    | 若停止 |

+ 8 - 剧烈缩放 - Zoom3
| 序号 | 描述       | 参数名     | 值类型 | 默认值 | 备注 |
| :--- | :-------   | :--------- | :----- | :----- | :--- |
|   0  | 缩放速度   | scaleSpeed | 数值   | 0.015  |  |
|   1  | 缩放帧数   | scaleCount | 数值   | 30     | 来或回一次的 |
|   2  | 总循环次数 | loopTotal  | 数值   | 1      |  |

+ 9 - 旋涡 - Rotation

+ 10 - 摇晃 - Swing
| 序号 | 描述         | 参数名       | 值类型 | 默认值 | 备注 |
| :--- | :---------   | :---------    | :----- | :----- | :--- |
|   0  | 旋转速度     | rotateSpeed    | 数值  | 0.02  | 角度/帧 |
|   1  | 初始旋转方向 | rotateInitDir  | 文本  | R     | L逆;R顺 |
|   2  | 初始角度     | angleInit      | 数值  | 0     | 正顺;负逆 |
|   3  | 角度左范围   | angleRangeL    | 数值  | -0.4  |  |
|   4  | 角度右范围   | angleRangeR    | 数值  | 0.4   |  |

+ 11 - 随机 - Random
| 序号 | 描述             | 参数名        | 值类型 | 默认值 | 备注 |
| :--- | :-----------     | :---------    | :----- | :----- | :--- |
|   0  | 初始不透明度     | opacityStart  | 数值   | 0     |  |
|   1  | 结束不透明度     | opacityEnd    | 数值   | 255   |  |
|   2  | 不透明度变化速度 | opacitySpeed  | 数值   | 4     |  |
|   3  | 缩放最小范围     | scaleRangeMin | 数值   | 0.7   |  |
|   4  | 缩放最大范围     | scaleRangeMax | 数值   | 1.4   |  |
|   5  | 旋转范围         | rotateRange   | 数值   | 0.4   |  |
|   6  | 旋转方向         | rotateDir     | 文本   | R     | L逆;R顺 |

+ 32 - 卡拉OK - Karaoke
| 序号 | 描述               | 参数名       | 值类型 | 默认值 | 备注 |
| :--- | :-----------       | :---------   | :----- | :----- | :--- |
|   0  | krc歌词数据        | krcContents  | 文本  | 略      | krc歌词处理后的JSON数据 |
|   1  | 音频文件名         | audioName    | 文本  | 略      | 路径`audio/bgs` |
|   2  | 歌词偏移           | lyricOffset  | 数值  | 略      |  |
|   3  | 窗口左右间隔       | widthPadding | 数值  | 0       |  |
|   4  | 歌词行间隔         | lineSpace    | 数值  | 10      |  |
|   5  | 最小等待点数量     | minWaitPoint | 数值  | 3       |  |
|   6  | 最大等待点数量     | maxWaitPoint | 数值  | 5       |  |
|   7  | 等待点半径         | pointRadius  | 数值  | 12      |  |
|   8  | 等待点颜色         | pointColor   | 文本  | blue    | 颜色 |
|   9  | 等待点宽间隔       | pointWSpace  | 数值  | 10      |  |
|  10  | 等待点高间隔       | pointHSpace  | 数值  | 6       |  |
|  11  | 边框线宽           | lineWidth    | 数值  | 4       |  |
|  12  | 播放后文本边框颜色 | uLineColor   | 文本  | #FFFFFF | 颜色 |
|  13  | 播放后文本颜色     | uTextColor   | 文本  | #0000FF | 颜色 |
|  14  | 播放前文本边框颜色 | dLineColor   | 文本  | #000000 | 颜色 |
|  15  | 播放前文本颜色     | dTextColor   | 文本  | #FFFFFF | 颜色 |
krc歌词处理后的JSON数据结构 : 
```
{
  // 所有歌词行
  lyricLines : [
    // 第一行的数据
    {
      start : 100, // 行开始时间
      duration : 200, // 行持续时间
      content : [
        // 第一个字的数据
        {
          start : 0, // 字开始时间
          duration : 50, // 字持续时间
          text : 'A'
        },
        // 第二个字的数据
        {
          start : 50,
          duration : 150,
          text : 'B'
        },
        ...
      ]
    },
    // 第二行的数据
    {},
    ...
  ], 
  // 原krc中的各行内容
  sourceLines : [
    '',
    '',
    ...
  ]
}
```

+ 52 - 文字居中 - TextCenter
暂无参数


## 用语说明

TODO


## 脚本说明

TODO : 开发方法


## 后续任务

- [x] 制作卡拉OK效果
- [x] 尝试利用动画类完成其他的功能，比如文字居中
- [x] 更新插件说明
- [ ] 优化文本居中样式动画，缓存计算信息，并记录
- [ ] target对象的类和接口


## Author
Mikan(MikanHako)  
Copyright (C) 2019-2024 Mikan(MikanHako)  

