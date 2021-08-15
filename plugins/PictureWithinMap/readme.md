# PictureWithinMap <图片置于地图内>

本插件调整一些图片的图层，使得能更灵活地设置一些视觉效果  

典型例子为 :   
使用 Tsukimi 的 [FilterController插件](https://github.com/cji3bp62000/hello-world/blob/master/RMMVplugins/FIlterController/FilterController.js)  
添加crt效果，应用于target=21(tiles+characters+parallax)  
可以使1-50的图片受到crt效果的影响，
而51-100的图片将置于crt效果的上层，不受其影响  


## 使用方法

启用本插件后，命令【显示图片】 使用编号1-50，以显示下层图片，
使用编号51-100，以显示上层图片  


## 脚本说明

下层图片将置于 scene._spriteset._baseSprite 的子精灵 内  
上层图片仍然处于 scene._spriteset._baseSprite 后  


## Author
Mikan(MikanHako)  
Copyright (C) 2021 Mikan(MikanHako)  
