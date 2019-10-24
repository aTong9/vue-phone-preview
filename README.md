# vue-phone-preview

## 适用于pc端后台管理系统手机预览

> A VueCli3.x+TypeScript Toolkit for Web.

[demo](https://atong9.github.io/vue-phone-preview/)

## Demo pictures

<div style="text-align: center;">
  <img alt="" src="https://raw.githubusercontent.com/aTong9/vue-phone-preview/master/src/assets/example.png" width="300">
</div>

## Install
```
$ npm i --save vue-phone-preview
or
$ yarn add vue-phone-preview
```

## Quick Start
``` javascript
import Vue from 'vue'
import VuePhonePreview from 'vue-phone-preview';

Vue.use(VuePhonePreview)
@Component()
// or
import VuePhonePreview from 'vue-phone-preview'

@Component({
  components: {
    VuePhonePreview
  }
})

/**
 * 使用方法 
 * ①、如果使用第一种方法，从其他微信编辑器（135或者word文档等等）
 * 需要先把图片上传至第三方图片服务器，然后获取图片链接复制到文档里
 * 例如：private content = '<img src="http://file.haoxinqing.cn/group1/M00/11/61/Chw4wFwAlz2AX_iqAABOSgaernE854.jpg" style=" max-width: 100%; height: auto;">'
 * ②、就是iframe的形式，导入的是一个m端链接
 */ 
①、<vue-phone-preview :content="content"></vue-phone-preview>
②、<vue-phone-preview :url="`https://mp.haoxinqing.cn`"></vue-phone-preview>

```

## LICENSE
[MIT](LICENSE)

Copyright (c) 2019-present, YuBin
