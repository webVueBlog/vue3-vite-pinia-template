# Vue 3 + TypeScript + Vite + Pinia

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## 介绍 vite

Vite：下一代前端开发与构建工具

- 💡 极速的开发服务器启动
- ⚡️ 轻量快速的热模块重载（HMR）
- 🛠️ 丰富的功能
- 📦 自带优化的构建
- 🔩 通用的插件接口
- 🔑 完全类型化的 API

> Vite （法语意为 “迅速”，发音 /vit/）是一种全新的前端构建工具，它极大地改善了前端开发体验。

### 它主要由两部分组成：

一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，速度快到惊人的 模块热更新（HMR）。

一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源。

Vite 意在提供开箱即用的配置，同时它的 插件 API 和 JavaScript API 带来了高度的可扩展性，并有完整的类型支持。

这个模板应该可以帮助你开始在 Vite 中使用 Vue3 和 Typescript 进行开发。查看 [文档](https://cn.vuejs.org/api/sfc-script-setup.html) 以了解更多信息。

# 🔨配置的开发工具：

- 🌈 Vue 3
- 🚀 Vite
- Typescript
- Vue Router
- Pinia
- Axios
- ESLint - Prettier

## 特性

- 🌈  Vue 3
- 🚀  所有数据都具有响应式
- 🔄  轮询请求
- 🤖  自动处理错误重试
- 🗄  内置请求缓存
- 💧  节流请求与防抖请求
- 🎯  聚焦页面时自动重新请求
- ⚙️  强大的分页扩展以及加载更多扩展
- 📠  完全使用 Typescript 编写，具有强大的类型提示
- ⚡️  兼容 Vite
- 🍃  轻量化
- 📦  开箱即用

## Vue2 与 Vue3 的区别

Vue3由于完全由TS进行重写，在应用中对类型判断的定义和使用有很强的表现。同一对象的多个键返回值必须通过定义对应的接口（interface）来进行类型定义。要不然在 ESLint 时都会报错。

vue2 的双向数据绑定是利用 ES5 的一个 API Object.definePropert() 对数据进行劫持 结合 发布订阅模式的方式来实现的。Vue3 中使用了 es6 的 ProxyAPI 对数据代理。

Vue3支持碎片(Fragments)

Vue2 与 Vue3 最大的区别: Vue2 使用Options API 而 Vue3 使用的 Composition API

生命周期钩子变化:

```js
Vue2 ~~~~~~~~~~~ vue3
beforeCreate  -> setup()
created       -> setup()
beforeMount   -> onBeforeMount
mounted       -> onMounted
beforeUpdate  -> onBeforeUpdate
updated       -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed     -> onUnmounted
activated     -> onActivated
deactivated   -> onDeactivated
```

## 使用 vite 快速创建脚手架

兼容性注意: Vite 需要 Node.js 版本 >= 12.0.0。

第一步: 在需要创建项目文件目录下打开 cmd 运行以下命令

```js
# npm 6.x
npm init @vitejs/app vite_vue3_ts --template

# npm 7+, 需要额外的双横线：
npm init @vitejs/app vite_vue3_ts -- --template

# yarn
yarn create @vitejs/app vite_vue3_ts --template
```

这里我采用 yarn 来安装

![1669791519825](https://user-images.githubusercontent.com/59645426/204728784-cfcb772e-2a6d-4488-b42d-2b15cc59a259.png)

选择 vue 回车 => vue-ts 回车

![1669791576470](https://user-images.githubusercontent.com/59645426/204728955-53bf97b3-6f2d-4add-acbd-77cfcca92c9e.png)

cd 到项目文件夹,安装依赖,启动项目

```js
Done. Now run:

  cd vite_vue3_ts
  yarn
  yarn dev
```

![1669791940575](https://user-images.githubusercontent.com/59645426/204729985-87066f7e-ff61-4227-a184-7f47d0ecaaa9.png)

## 约束代码风格

Eslint 支持

```js
yarn add eslint --dev
yarn add eslint-plugin-vue --dev
yarn add vite-plugin-eslint --dev
yarn add prettier --dev
yarn add eslint-plugin-prettier --dev
yarn add @typescript-eslint/parser --dev
yarn add @typescript-eslint/eslint-plugin --dev
yarn add @vue/eslint-config-prettier --dev
yarn add @vue/eslint-config-typescript --dev
```

eslint检查，与自动格式化

## 配置 husky + lint-staged

```js
yarn add husky --dev
yarn add lint-staged --dev
```

```js
"husky": {
	"hooks": {
		"pre-commit": "lint-staged"
	}
},
"lint-staged": {
	"*.{js,jsx,vue,ts,tsx}": [
		"yarn lint",
		"prettier --write",
		"git add",
		"eslint --fix"
	]
}
```

> 添加配置文件引用别名 alias (vite.config.ts && tsconfig.json)

## 配置 css 预处理器 scss

虽然 vite 原生支持 `less/sass/scss/stylus`，但是你必须手动安装他们的预处理器依赖

通过 sass-loader 把 scss 源码转换为 css 代码，再把 css 代码交给 css-loader 去处理；css-loader 会找出 css 代码中的 @import 和 url() 这样的导入语句，告诉依赖这些资源。同时还支持 css Modules，压缩 css 等功能，处理完后再把结果交给 style-loader 去处理；style-loader 会把 css 代码转换成字符串后，注入到 JavaScript 代码中去，通过 JavaScript 去给 DOM 增加样式。如果你想把 css 代码提取到一个单独的文件而不是和 JavaScript 混合再一起，可以使用 ExtractTextPlugin。

接入 sass-loader，需要的依赖：

```js
# sass-loader 依赖 node-sass
yarn add node-sass --dev
yarn add sass-loader css-loader style-loader --dev
```

css预处理器：Vite 同时提供了对 `.scss, .sass, .less, .styl 和 .stylus` 文件的内置支持。没有必要为它们安装特定的 `Vite` 插件，但必须安装相应的预处理器依赖：

所有针对性的安装：

```js
# .scss and .sass
npm add -D sass

# .less
npm add -D less

# .styl and .stylus
npm add -D stylus

# vue3-vite-pinia-template
yarn add sass --dev
```

如果使用的是单文件组件，可以通过`<style lang="sass"></style>` 自动开启。

Vite 为 Sass 和 Less 改进了 `@import` 解析，以保证 Vite 别名也能被使用。另外，`url()` 中的相对路径引用的，与根文件不同目录中的 `Sass/Less` 文件会自动变基以保证准确性。

由于 `Stylus API` 限制，`@import` 别名和 `URL` 变基不支持 `Stylus`。

你还可以通过在文件扩展名前加上 `.module` 来结合使用 `CSS modules` 和预处理器，例如 `style.module.scss`。

### 配置全局 scss 样式文件

在 src/assets 下新增 style 文件夹，用于存放全局样式文件，新建 main.scss，设置一个用于测试的颜色变量：

```js
$test-color: blue;
```

如何将这个全局样式文件 全局注入 到项目中？配置代码到 `vite.config.ts`

## vite.config.ts 配置优化

```js
yarn add vite-plugin-compression --dev // gzip压缩 生产环境生产 .gz 文件
```

# 单元测试工具

- Jest

# 推荐的 IDE 设置

- VSCode + Volar

# .vueTS 中对导入的类型支持
  
由于 TypeScript 无法处理.vue导入的类型信息，因此默认情况下它们被填充为通用 Vue 组件类型。在大多数情况下，如果您并不真正关心模板之外的组件道具类型，这很好。但是，如果您希望在.vue导入中获取实际的道具类型（例如，在使用手动调用时获取道具验证），您可以通过从 VSCode 命令面板运行h(...)来启用 Volar 的.vue类型支持插件。Volar: Switch TS Plugin on/off

# 🚀如何开始？

- 1️⃣克隆存储库
- 2️⃣安装依赖项
- 3️⃣使用 Vite 进行编译和 HMR 开发
- 4️⃣编译和缩小以用于生产
- 5️⃣lints 和修复文件

## yarn install

```js
$ yarn install
yarn install v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
warning " > @vue/vue3-jest@27.0.0-alpha.4" has unmet peer dependency "@babel/core@7.x".
warning " > @vue/vue3-jest@27.0.0-alpha.4" has unmet peer dependency "babel-jest@27.x".
warning "@vue/vue3-jest > @babel/plugin-transform-modules-commonjs@7.16.8" has unmet peer dependency "@babel/core@^7.0.0-0".
[4/4] Building fresh packages...
Done in 84.89s.
```

## yarn dev

```js
$ yarn dev
yarn run v1.22.19
$ vite
Pre-bundling dependencies:
  vue
  pinia
  vue-router
  axios
(this will be run only when your dependencies or config have changed)

  vite v2.7.10 dev server running at:

  > Local: http://localhost:3000/
  > Network: use `--host` to expose

  ready in 7539ms.
```

## commit 📦 (开箱即用)

- add: Vue 3 + TypeScript + Vite + Pinia 📦 (开箱即用)
- feat: 增加新功能
- fix: 修复bug
- build: 构造工具的或者外部依赖的改动，例如webpack，npm
- chore: 不修改src或者test的其余修改，例如构建过程或辅助工具的变动
- ci: 与CI(持续集成服务）有关的改动
- docs：只改动了文档相关的内容
- style: 不影响代码含义的改动，例如去掉空格，改变缩进，增删分号
- perf: 提高性能的改动
- refactor: 代码重构时使用
- revert: 执行git revert打印的message
- test: 添加测试或者修改现有测试

## 单文件组件

- [`<script setup>`](https://github.com/webVueBlog/vue3-vite-pinia-template/issues/1)
- [SFC 语法定义](https://github.com/webVueBlog/vue3-vite-pinia-template/issues/2)
- [css功能](https://github.com/webVueBlog/vue3-vite-pinia-template/issues/3)
- [应用实例 AP](https://github.com/webVueBlog/vue3-vite-pinia-template/issues4)
