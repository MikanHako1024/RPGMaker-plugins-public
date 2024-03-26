# InputKeyExtend <Input按键拓展>

本插件拓展了 Input类  
通过Input检测按键时，可以区分具体的按键  
(仅脚本)  

`Input.isTriggered('escape:88')`  
+ 检测是否刚按下按键 X键
+ 其他按键如 Esc键 则无效
  - 原版逻辑中 X键 和 Esc键 都可以取消或打开菜单

`Input.isTriggered('escape:27')`  
+ 检测是否刚按下按键 Esc键
+ 其他按键如 X键 则无效
  - 原版逻辑中 X键 和 Esc键 都可以取消或打开菜单

[兼容原版的检测方法]  
`Input.isTriggered('escape')`  
+ 检测是否刚按下按键 X键 或 Esc键 等取消键
+ 和原版一样


## 其他说明

#### 一些按键key

| key         | desc        |
| :---------- | :---------- |
| ok:13       | enter       |
| ok:32       | space       |
| ok:90       | Z           |
| ----------- | ----------- |
| control:17  | control     |
| control:18  | alt         |
| ----------- | ----------- |
| escape:27   | escape      |
| escape:45   | insert      |
| escape:88   | X           |
| escape:96   | numpad 0    |
| ----------- | ----------- |
| pageup:33   | pageup      |
| pageup:81   | Q           |
| ----------- | ----------- |
| pagedown:34 | pagedown    |
| pagedown:87 | W           |
| ----------- | ----------- |
| left:37     | left arrow  |
| left:100    | numpad 4    |
| ----------- | ----------- |
| up:38       | up arrow    |
| up:104      | numpad 8    |
| ----------- | ----------- |
| right:39    | right arrow |
| right:102   | numpad 6    |
| ----------- | ----------- |
| down:40     | down arrow  |
| down:98     | numpad 2    |


## 脚本说明

修改了部分 `Input.keyMapper` 内容  
详见代码  


## Author
Mikan(MikanHako)  
Copyright (C) 2024 Mikan(MikanHako)  

