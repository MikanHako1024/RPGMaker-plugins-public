# LightShadowSprite <光影Sprite>

本插件提供一种特殊的`Sprite`派生类--光影Sprite，
可以将`sprite.children`渲染到`sprite.texture`上，
之后再正常地渲染到场景上。  

主要目的是 :   
以正常的方式将一些sprite显示，
再将这些sprite以其他的`blendMode`显示。  
(直接修改`sprite.blendMode`，不能作用到`sprite.children`上)  


## 使用方法

本插件主要提供一种思路，不直接提供插件指令的使用方法  
使用脚本的方法，详见 【脚本说明】


## 脚本说明

#### 创建光影Sprite
`new MK_LightShadowSprite(width, height)`

#### 添加和移除特殊渲染的子sprite
| description    | script                                        |
| :----------    | :-------------------------------              |
| addChild       | `lsSprite.addLightChild(sprite)`              |
| addChildAt     | `lsSprite.addLightChildAt(sprite, index)`     |
| removeChild    | `lsSprite.removeLightChild(sprite)`           |
| removeChildAt  | `lsSprite.removeLightChildAt(sprite, index)`  |
| removeChildren | `lsSprite.removeLightChildren()`              |
| children       | `lsSprite.lightChildren`                      |


## 其他说明

请勿为光影Sprite对象添加bitmap或更改texture，否则可能将不再显示特殊渲染的图像  


## Author
Mikan(MikanHako)  
Copyright (C) 2021 Mikan(MikanHako)  
