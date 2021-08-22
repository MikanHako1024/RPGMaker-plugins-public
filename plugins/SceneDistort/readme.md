# SceneDistort <场景扭曲>

本插件可以让场景产生扭曲效果  


## 使用方法

导入该插件后，使用插件指令产生扭曲效果，详见【插件指令】  


## 插件指令

| description            | command            |
| :----------            | :------            |
| 使用预设参数产生扭曲效果 | `DistortEffect 时间 preset [name]` |
| 输入参数产生扭曲效果(未完成) | `DistortEffect 时间 params [arguments]` |

#### 使用预设参数产生扭曲效果
在插件参数里配置扭曲效果的参数组，指定参数组名，使用对应参数产生扭曲效果  

* `DistortEffect 时间 preset [name]`
  * 用参数组`strong`产生30s的扭曲效果 : `DistortEffect 30 preset strong`
+ DistortEffect
  - 主命令
  - 固定写法，区分大小写
+ 时间
  - 效果的作用时间
  - 数组，单位 : 帧
+ preset
  - 子命令
  - 固定写法，区分大小写
+ [name]
  - 参数组名
  - 使用 插件参数中 【预设参数组】里设置的【参数组名称】

#### 使用非预设参数产生扭曲效果(未完成)

* `DistortEffect 时间 params [arguments]`
+ DistortEffect
+ 时间
  - 同 【使用预设参数产生扭曲效果】 - 【时间】
+ params
  - 子命令
  - 固定写法，区分大小写
+ [arguments]
  - 


## 使用示例

#### 产生扭曲效果
+ 事件
  - ◆插件指令：DistortEffect 30
  - ◆插件指令：DistortEffect 30 preset strong

#### 离开地图产生扭曲效果
+ 事件
  - ◆插件指令：DistortEffect 30
  - ◆等待：30帧
  - ◆场所移动：MAP002 (8,6) (淡入淡出: 无)

#### 进入地图产生扭曲效果
+ 事件(自动执行)
  - ◆插件指令：DistortEffect 30
  - ◆等待：30帧
  - ◆暂时消除事件


## 后续任务

- [ ] shader实现


## Author
Mikan(MikanHako)  
Copyright (C) 2019-2021 Mikan(MikanHako)  
