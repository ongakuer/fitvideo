#jQeury fitVideo plugin

###[Demo] (http://ongakuer.github.com/fitvideo/)


##使用教程
引入fitvideo.js后，在你的jQuery中使用

```js
//type 1: fitLayout：需要自动适应的选择器
$('.video').fitVideo({fitLayout:".wrapper"});
                     
//type 2: 如果不填选择器，则会自动适应父元素
$('.video').fitVideo();
```

##场景实例
```html
<div class="wrapper">
    <h1>fitVideo</h1>
    <div class="video">
        <embed src="http://player.youku.com/player.php/sid/XMTg1NjA4NTg4/v.swf" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
    </div>
</div>
```