# vue3-vite-pinia-template

Vue 3 + Vite + TypeScript + Pinia

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

这个模板应该可以帮助你开始在Vite中使用Vue3和Typescript进行开发。查看 [文档](https://cn.vuejs.org/api/sfc-script-setup.html) 以了解更多信息。

# 🔨配置的开发工具：

- Vue 3
- Vite
- Typescript
- Vue Router
- Pinia
- Axios
- ESLint - Prettier

## Vue2 与 Vue3 的区别

Vue3由于完全由TS进行重写，在应用中对类型判断的定义和使用有很强的表现。同一对象的多个键返回值必须通过定义对应的接口（interface）来进行类型定义。要不然在 ESLint 时都会报错。

vue2 的双向数据绑定是利用 ES5 的一个 API Object.definePropert()对数据进行劫持 结合 发布订阅模式的方式来实现的。Vue3 中使用了 es6 的 ProxyAPI 对数据代理。

Vue3支持碎片(Fragments)

Vue2 与 Vue3 最大的区别: Vue2 使用Options API而 Vue3 使用的Composition API

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

## 单文件组件

- [`<script setup>`](https://github.com/webVueBlog/vue3-vite-pinia-template/issues/1)
- [SFC 语法定义](https://github.com/webVueBlog/vue3-vite-pinia-template/issues/2)
- [css功能](https://github.com/webVueBlog/vue3-vite-pinia-template/issues/3)
- [应用实例 AP](https://github.com/webVueBlog/vue3-vite-pinia-template/issues4)


