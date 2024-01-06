# MKP_PixiStats <Pixi性能统计>

包含并使用了 [stats.js](https://github.com/mrdoob/stats.js)
包含并使用了 [gstatsjs](https://github.com/eXponenta/gstatsjs)
取代了 RM 自带的性能监测工具 fpsmeter (MV) 或 FPSCounter (MZ)

This class provides an info box that will help you monitor your code performance.
+ stats.js
  - FPS Frames rendered in the last second. The higher the number the better.
  - MS Milliseconds needed to render a frame. The lower the number the better.
  - MB MBytes of allocated memory. (Run Chrome with --enable-precise-memory-info)
+ gstatsjs
  - DC Draw Calls made within one frame.
  - TC Texture Count used within one frame.


## 使用方法

按 Ctrl + F2 显示、切换、隐藏 监测画布
按 Ctrl + Alt + F2 显示全部 监测画布


## 后续任务

- [ ] 修正 fps 统计数据，使之和 RM 统计的 fps 相同
- [ ] 更多性能统计数据


## Author
Mikan(MikanHako)  
Copyright (C) 2023-2024 Mikan(MikanHako)  
