# vue3-vite-pinia-template

Vue 3 + Vite + TypeScript + Pinia

这个模板应该可以帮助你开始在Vite中使用Vue3和Typescript进行开发。该模板使用Vue3<script setup>SFC, 查看 [脚本设置文档](https://cn.vuejs.org/api/sfc-script-setup.html) 以了解更多信息。

# 🔨配置的开发工具：

- Vue 3
- Vite
- Typescript
- Vue Router
- Pinia
- Axios
- ESLint - Prettier

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

- 单文件组件[`<script setup>`](https://github.com/webVueBlog/vue3-vite-pinia-template/issues/1)



