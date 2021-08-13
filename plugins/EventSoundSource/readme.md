# EventSoundSource <事件音源>

本插件提供模拟音源的效果，角色距离音源越远听到的声音越小  


## 使用方法

为事件添加 `Sound` 或 `SetSound` 标签 以设置一个音源  
详见 【标签设置】  


## 标签设置

| description              | note                                                           |
| :----------              | :--------------------------                                    |
| 为自身事件设置一个音源   | `<Sound : name, dist, play, loop, volume, pan, pitch>`        |
| 为非自身事件设置一个音源 | `<SetSound : 事件id, name, dist, status, volume, pan, pitch>` |

#### 为自身事件设置一个音源
添加事件备注 标记该事件为音源 同时将声音配置保存到该事件中  
标签含有多个参数，参数与标签名`Sound`用分号分隔，参数间用逗号分隔  

* `<Sound : name, dist, play, loop, volume, pan, pitch>`
  * 以该事件为音源 播放音乐`audio/bgs/City` 最大可听距离10格 默认播放且循环 : 
  * `<Sound : City, 10, on, loop>` (volume, pan, pitch 将使用默认值)
+ Sound
  - 主标签
  - 固定写法，区分大小写
+ name
  - 音乐文件名
  - 文件路径为 `audio/bgs/`
+ dist
  - 声音可听范围的最大距离限制
  - 距离为0时，声音为最大音量
  - 距离在最大距离限制以内时，音量随距离增加而线性降低
  - 特别的是，设置dist为0时，只有与音源重合才能听到声音
  - 数值，非负数，单位 : 格
+ play
  - 初始播放状态
  - 有`on`和`off`两种可选值，不区分大小写
  - `on` : 播放
  - `off` : 停止
  - 可缺省，默认 `on` (播放)
+ loop
  - 初始循环状态
  - 设置只播放一次后，不会直接停止，而是在下次结束后不重播
  - 有`loop`和`only`两种可选值，不区分大小写
  - `loop` : 循环播放
  - `only` : 播放一次
  - 可缺省，默认 `loop` (循环播放)
+ volume
  - 音量，最大音量
  - 数值，0 - 100
  - 可缺省，默认 90
+ pan
  - 音像
  - 数值，0 - 100
  - 可缺省，默认 0
+ pitch
  - 音调
  - 数值，0 - 100
  - 可缺省，默认 100

#### 为非自身事件设置一个音源
与 【为自身事件设置一个音源】 类似，但备注的事件只用于储存声音配置，将音源设置为其他事件  

* `<SetSound : 事件id, name, dist, status, volume, pan, pitch>`
  * 以事件6为音源 播放音乐`audio/bgs/City` 极限距离10格 默认播放且循环 :
  * `<SetSound : 6, City, 10, on, loop>` (volume, pan, pitch 将使用默认值)
+ SetSound
  - 主标签
  - 固定写法，区分大小写
+ 事件id
  - 音源事件的事件id
  - 数值，事件id
+ 其他同 【为自身事件设置一个音源】


## 插件指令

| description  | command |
| :----------  | :------ |
| 设置音源参数 | `SetSound 事件id [key] [value]` |
| 获取播放状态 | `CheckSound 事件id [key] 变量id或开关id` |

#### 设置音源参数
添加了标签`<Sound>`或`<SetSound>`的事件将作为 【声音配置事件】  
【声音配置事件】 将用于存储声音配置和控制播放等  
使用该插件指令 可以设置【声音配置事件】的声音配置或控制播放  

* `SetSound 事件id [key] [value]`
  * 设置声音配置事件6 的 音源事件为 事件8 : `SetSound 6 target 8`
  * 设置声音配置事件6 的 声音文件 为 `audio/bgs/Sea` : `SetSound 6 name Sea`
  * 设置声音配置事件6 的 距离限制 为 5格 : `SetSound 6 dist 5`
  * 让声音配置事件6 的音乐 只播放一次不循环 : `SetSound 6 loop only`
  * 让声音配置事件6 的音乐 停止 : `SetSound 6 play off`
  * 让声音配置事件6 的音乐 暂停 : `SetSound 6 pause pause`
+ SetSound
  - 主命令
  - 固定写法，区分大小写
+ 事件id
  - 指定一个声音配置事件
  - 不是声音目标事件，区别详见 【其他说明】
  - 数值，事件id
+ [key]
  - 需要设置的参数的参数名
  - [参数]中[key列]的固定字串，不区分大小写
+ [value]
  - 需要设置的参数的值
  - [参数]中[value列]所表示的值
+ [参数]
| key    | value          |
| :----- | :------------  |
| target | 声音目标事件id |
| name   | 音乐文件名     |
| dist   | 最大距离限制   |
| volume | 音量     |
| pan    | 音像     |
| pitch  | 音调     |
| loop   | 设置循环 |
| play   | 设置播放 |
| pause  | 设置暂停 |

+ [参数]-target
  - 声音目标事件的事件id
  - 声音目标事件的位置作为音源中心
  - 数值，事件id
+ [参数]-name
  - 音乐文件名
  - 文件路径为 `audio/bgs/`
+ [参数]-dist
  - 声音可听范围的最大距离限制
  - 同 【标签设置】-【为自身事件设置一个音源】-dist
+ [参数]-volume
  - 音量，最大音量
  - 数值，0 - 100
+ [参数]-pan
  - 音像
  - 数值，0 - 100
+ [参数]-pitch
  - 音调
  - 数值，0 - 100
+ [参数]-loop
  - 设置是否循环
  - 同 【标签设置】-【为自身事件设置一个音源】-play
+ [参数]-play
  - 设置播放状态
  - 同 【标签设置】-【为自身事件设置一个音源】-loop
+ [参数]-pause
  - 设置暂停状态
  - 区别于[停止]，暂停后可以继续原位置播放，而停止不行
  - 有`continue`和`pause`两种可选值，不区分大小写
  - `continue` : 继续
  - `pause` : 暂停
  - 在地图场景活动时会自动继续播放
  - 在地图场景冻结时会自动暂停
  - 一般的停止播放应该使用 `play off`

#### 获取播放状态
该插件指令可以获取【声音配置事件】的声音配置  
将获取值储存到 变量或开关 中  

* `CheckSound 事件id [key] 变量id或开关id`
  * 检查是否正在播放 存进开关1 : `CheckSound 6 play 1`
+ CheckSound
  - 主命令
  - 固定写法，区分大小写
+ 事件id
  - 同 【设置音源参数】 - 【事件id】
+ [key]
  - 需要获取的参数的参数名
  - 同 【设置音源参数】 - 【[key]】
+ 变量id或开关id
  - 指定 接受获取的参数的参数值 的 变量或开关
  - 获取的类型和值 见[参数]
  - 数值，变量id或开关id
+ [参数]
| key    | type | value          |
| :----- | :--- | :-----------   |
| target | 变量 | 声音目标事件id |
| name   | 变量 | 音乐文件名     |
| dist   | 变量 | 最大距离限制   |
| volume | 变量 | 音量           |
| pan    | 变量 | 音像           |
| pitch  | 变量 | 音调           |
| loop   | 开关 | 是否循环 (循环 ON  / 一次 OFF) |
| play   | 开关 | 是否播放 (播放 ON  / 停止 OFF) |
| pause  | 开关 | 是否暂停 (继续 OFF / 暂停 ON ) | 


## 其他说明

#### 声音配置事件 与 音源事件
声音配置文件 用于储存声音配置和控制播放等  
音源事件 以事件位置作为音源计算与角色的距离 距离越远声音音量越小  


## 后续任务

- [ ] 声音配置不再储存在事件里


## Author
Mikan(MikanHako)  
Copyright (C) 2020-2021 Mikan(MikanHako)  
