# CustomMenuCore <自定义菜单核心>

用json配置生成UI


## 使用方法

```js
var config = {
    cell: { type: 'touchable', x: 50, y: 50 },
    hitArea: { type: 'ignore', x: 0, y: 0, w: 100, h: 100, hitKey: 'bg' },
    icons: {
        cellGrid: { startX: 0, startY: 0, stepX: 40, stepY: 32, count: 5, colsLimit: 3 },
        cellElem: {
            cell: { type: 'touchable', x: 0, y: 0 },
            hitArea: { type: 'ignore', x: 0, y: 0, w: 100, h: 100, hitKey: 'icon' },
            icon : { type: 'icon', x: 0, y: 0, iconSetId: 1, index: [16, 17, 18, 19, 20] },
        }
    }
};

var result = MK_CMenuManager.createCMenuByConfig(config);
//var menuSprite = result.sp;
//var menuData = result.da;

function MenuSprite_Test() {
    this.initialize(...arguments);
}

MenuSprite_Test.prototype = Object.create(MK_CMenuSprite_MenuBase.prototype);
MenuSprite_Test.prototype.constructor = MenuSprite_Test;

MenuSprite_Test.prototype.initialize = function(cmenuRes) {
    MK_CMenuSprite_MenuBase.prototype.initialize.call(this);
    this.initAllSprites(cmenuRes);
};

MenuSprite_Test.prototype.touchEventEnabled = function() {
    return true;
};

MenuSprite_Test.prototype.initAllSprites = function(cmenuRes) {
    this.addChild(cmenuRes.sp);
    // do something
};

MenuSprite_Test.prototype.refresh = function() {
    // do something
};

var menu = new MenuSprite_Test(result);
menu.setHandler('mouseExit', (hitSpr) => console.log('exit', hitSpr.getHitKey()));
menu.setTouchHandler('mouseEnter', 'icon', (hitKey, extData, hitSpr) => console.log('enter', hitKey, extData));

SceneManager._scene.addChild(menu);
```


## UI组件

#### 容器
```json
{
  cell: { x: ##横坐标##, y: ##纵坐标## },
  ##子组件1##: { .. },
  ##子组件2##: { .. },
}
```

#### 可点击容器
```json
{
  cell: { type: 'touchable', x: ##横坐标##, y: ##纵坐标## },
  hitArea: {
    type: 'ignore', x: ##点击区域x##, y: ##点击区域y##, w: ##点击区域宽##, h: ##点击区域高##,
    hitKey: ##触摸键名##,
  },
  ##子组件1##: { .. },
  ##子组件2##: { .. },
}
```

#### 列表容器
```json
{
  cellGrid: {
    startX: ##横坐标起始##, startY: ##纵坐标起始##,
    stepX: ##横坐标移动##, stepY: ##纵坐标移动##,
    count: ##数量##, rowsLimit: ##行排列限制##, colsLimit: ##列排列限制## },
  },
  cellElem: {
    ##元素子组件1##: { .. },
    ##元素子组件2##: { .. },
  },
}
```

#### 图像
```json
{ type: 'image', x: ##横坐标##, y: ##纵坐标##, image: ##图片名##, dir: ##图片目录## }
```

#### 图标
```json
{ type: 'icon', x: ##横坐标##, y: ##纵坐标##, iconSetId: 1, index: ##索引## }
```

#### 文本
```json
{
  type: 'text',
  x: ##横坐标##, y: ##纵坐标##, w: ##宽度##, h: ##高度##,
  align: ##对其方向(left|center|right)##,
  fontSize: ##字号##, textMaxWidth: ##最大宽度##, lineHeight: ##行高##,
  textColor: ##文字颜色##, textPadding: ##文字框内距##,
  outlineColor: ##描边颜色##, outlineWidth: ##描边宽度##,
  fontFace: ##字体##,
  convertEscape: ##是否转义(boolean)##, autoLineFeed: ##是否自动换行(boolean)##,
}
```

#### 数据
```json
{ type: 'data', ##数据key1##: ##数据value1##, ##数据key2##: ##数据value2## }
```


## Author
Mikan(MikanHako)  
Copyright (C) 2024 Mikan(MikanHako)  
