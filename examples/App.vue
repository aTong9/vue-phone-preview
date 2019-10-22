<template>
  <div id="app">
    <div>
      <h1>测试 vuePhonePreview 组件</h1>
    </div>
    <vue-phone-preview :content="content"></vue-phone-preview>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'
import VuePhonePreview from '../src/index'
// Vue.use(VuePhonePreview)
@Component({
  components: {
    VuePhonePreview
  }
})
export default class TestVuePhonePreview extends Vue {
  protected content = `<section class="ouvJEz"><h1 class="_1RuRku">使用Vue-cli3.0创建的项目，如何发布npm包</h1><div class="rEsl9f"><div class="s-dsoj"><time datetime="2019-10-10T03:29:10.000Z">2019.10.10 11:29:10</time><span>字数 308</span><span>阅读 5</span></div></div><article class="_2rhmJa"><blockquote>
<p>在使用<code>vue</code>进行项目开发时，如果我们想要发布一个包，有时候会有点迷糊，不知道应该怎么修改脚手架的默认设置。这里记录一下一些常见的操作。</p>
</blockquote>
<h2>创建index.js进行模块的导出</h2>
<p>将我们需要导出的组件在<code>index.js</code>文件中进行统一导出，可能之前需要进行处理，是先进行全局注册<code>Vue.component</code>，还是用户自己注册。</p>
<pre class="line-numbers  language-jsx"><code class="  language-jsx"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span></span></code></pre>
<h2>修改vue.config.js配置文件</h2>
<p>修改<code>publicPath</code>的路径为相对路径</p>
<pre class="line-numbers  language-java"><code class="  language-java"><span class="token keyword">module</span><span class="token punctuation">.</span><span class="token keyword">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  lintOnSave<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  runtimeCompiler<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
  publicPath<span class="token operator">:</span> <span class="token string">'./'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span></span></code></pre>
<h2>修改package.json中的script</h2>
<p><code>vue-cli</code>默认给我们设置了<code>build</code>,但是我们不使用这个<code>build</code>，而是打包我们之前创建的<code>index.js</code>文件</p>
<p>新增<code>build-bundle</code></p>
<pre class="line-numbers  language-bash"><code class="  language-bash">  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "build-bundle": "vue-cli-service build --target lib --name AutoForm ./src/index.js",
    "lint": "vue-cli-service lint"
  },
<span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>
<h2>修改package.json中的main</h2>
<p>这里的main是打包后的程序入口，也就是我们通常下载一个包后使用<code>import xxx from YYY</code>默认从<code>node_modules</code>下查找的文件，因此，我们需要修改为我们打包后的文件名，否则查找不到这个文件。</p>
<pre class="line-numbers  language-bash"><code class="  language-bash">"main": "dist/AutoForm.common.js",
<span aria-hidden="true" class="line-numbers-rows"><span></span></span></code></pre>
<p>这样的话，一个包就修改完成，打包后正常发布就可以使用了。</p>
</article><div></div><div class="_1kCBjS"><div class="_18vaTa"><div class="_3BUZPB"><div class="_2Bo4Th" role="button" tabindex="-1" aria-label="给文章点赞"><i aria-label="ic-like" class="anticon"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#ic-like"></use></svg></i></div><span class="_1LOh_5" role="button" tabindex="-1" aria-label="查看点赞列表">0人点赞<i aria-label="icon: right" class="anticon anticon-right"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg></i></span></div><div class="_3BUZPB"><div class="_2Bo4Th" role="button" tabindex="-1"><i aria-label="ic-dislike" class="anticon"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#ic-dislike"></use></svg></i></div></div></div><div class="_18vaTa"><a class="_3BUZPB _1x1ok9 _1OhGeD" href="/nb/31122755" target="_blank" rel="noopener noreferrer"><i aria-label="ic-notebook" class="anticon"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#ic-notebook"></use></svg></i><span>Vue</span></a><div class="_3BUZPB ant-dropdown-trigger"><div class="_2Bo4Th"><i aria-label="ic-others" class="anticon"><svg width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><use xlink:href="#ic-others"></use></svg></i></div></div></div></div><div class="_19DgIp" style="margin-top:24px;margin-bottom:24px"></div><div class="_3W59v5"><div class="Uz-vZq"><div class="VwEQ52"><a class="_1OhGeD" href="/u/20c95846f61e" target="_blank" rel="noopener noreferrer"><img class="_3nYIo3" src="//upload.jianshu.io/users/upload_avatars/12754077/fc9e94fb-fc00-47ea-978d-346003db5261?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp" alt="  "></a><div class="_2lfNuF"><div class="Cqpr1X" title="海因斯坦"><a class="_1OhGeD" href="/u/20c95846f61e" target="_blank" rel="noopener noreferrer">海因斯坦</a></div><div class="_2qBui4"><span>拥有1钻 (约0.15元)</span></div></div><button data-locale="zh-CN" type="button" class="_1OyPqC _3Mi9q9"><span>关注</span></button></div><div class="VwEQ52 _13lIbp"><div class="_2lfNuF"><div class="Cqpr1X">"小礼物走一走，来简书关注我"</div></div><button type="button" class="_1OyPqC _3Mi9q9"><span>赞赏</span></button></div></div></div></section>`
}
</script>