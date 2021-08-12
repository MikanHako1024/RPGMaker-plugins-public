# LogWriter <日志记录>

本插件用于显示和保存详细的错误信息  
当报错让游戏无法进行时 将会出现以下三个按钮  

+ retry
  > 重试加载文件，重新加载缺失图片或脚本  
  > 只有在相应场合才显示该按钮  

+ save error info
  > 保存错误信息，并打开文件所在文件夹  
  > 错误日志文件存储在 `【游戏目录】/save/errorInfo.log`  

+ show detail info in explorer
  > 显示详细信息，打开缓存数据文件夹  
  > 缓存数据文件夹在 `C:\Users\【用户名】\AppData\Local\【游戏名】\User Data\Default`  


## 其他说明

本插件针对 RPGMakerMV v1.6.2 版本  
导入本插件时 必须置于插件管理器最上方  
版本不同或未置于插件管理器最上方时 可能会出现一些问题  


## 脚本说明

+ 保存错误信息
  `ConsoleRecorder.saveMessageFile()`  

+ 打开错误信息文件所在文件夹
  `ConsoleRecorder.showMessageFileInExplorer()`  

+ 打开详细信息文件夹
  `ConsoleRecorder.showDetailInfoInExplorer()`  


## Author
Mikan(MikanHako)  
Copyright (C) 2021 Mikan(MikanHako)  
