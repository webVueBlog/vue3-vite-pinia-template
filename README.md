# Vue 3 + TypeScript + Vite + Pinia

企业级前端开发与构建框架

- vue3：vue团队官宣：2022年2月7日，vue3作为vue的默认版本。现在打开[vue官网](https://cn.vuejs.org/guide/introduction.html)，界面默认显示的是vue3版本的指导文档。vue团队在2020年9月18日就已经发布了vue3.0版本，俗称vue3。
- vite：下一代前端开发与构建工具，由尤大大团队开发，突出了“快”的特点。[vite官网](https://vitejs.cn/)介绍了六大特点：极速的服务启动、轻量快速的热重载、丰富的功能、优化的构建、通用的插件、完全类型化的API。
- pinia：一种新的状态管理工具，进入[官网](https://pinia.web3doc.top/)
- element-plus：[element-plus](https://element-plus.gitee.io/zh-CN/guide/design.html)是基于Vue3、面向设计师和开发者的组件库
- vue-router: [next.router.vuejs.org/zh/guide/](https://router.vuejs.org/zh/guide/)

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS .vueTS 中对导入的类型支持
  
由于 TypeScript 无法处理.vue导入的类型信息，因此默认情况下它们被填充为通用 Vue 组件类型。在大多数情况下，如果您并不真正关心模板之外的组件道具类型，这很好。但是，如果您希望在.vue导入中获取实际的道具类型（例如，在使用手动调用时获取道具验证），您可以通过从 VSCode 命令面板运行h(...)来启用 Volar 的.vue类型支持插件。Volar: Switch TS Plugin on/off

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

## 路由

```js
# 安装路由
yarn add vue-router
```

vue-router4.x 支持 typescript，配置路由的类型是 RouteRecordRaw，这里 meta 可以让我们有更多的发挥空间。

- title: string；页面标题
- icon?: string；图标，一般配合菜单使用
- auth?: boolean；是否需要登录权限
- ignoreAuth?: boolean；是否忽略权限
- roles?: RoleEnum[]；可以访问的角色
- keepAlive?: boolean；是否开启页面缓存
- hideMenu?: boolean；有些路由我们并不想在菜单中显示，比如某些编辑页面
- order?: number；菜单排序
- frameUrl?: string；嵌套外链

## 状态管理 pinia

由于 vuex 4 对 typescript 的支持让人感到难过，所以状态管理弃用了 vuex 而采取了 pinia. pinia 的作者是 Vue 核心团队成员

```js
yarn add pinia
```

### 安装 pinia

Pinia 与 Vuex 的区别:

- id 是必要的，它将所使用 store 连接到 devtools。
- 创建方式： `new Vuex.Store(...)` (vuex3)，`createStore(...)` (vuex4)。
- 对比于 vuex3，state 现在是一个 函数返回对象。
- 没有 mutations，不用担心，state 的变化依然记录在 devtools 中。

```js
# 安装
yarn add pinia@next
```

`main.ts` 中增加

```js
# 引入
import { createPinia } from "pinia";
# 创建根存储库并将其传递给应用程序
app.use(createPinia())
```

### Pinia 让 Actions 更加的灵活：

- 可以通过组件或其他 action 调用
- 可以从其他 store 的 action 中调用
- 直接在 store 实例上调用
- 支持同步或异步
- 有任意数量的参数
- 可以包含有关如何更改状态的逻辑（也就是 vuex 的 mutations 的作用）
- 可以 $patch 方法直接更改状态属性

## 测试

![1670990363134](https://user-images.githubusercontent.com/59645426/207502455-d96af1dc-ae30-4f9f-b443-55c00197e857.png)

- eslint 可以保证项目的质量
- prettier 可以保证项目的统一格式，风格

```js
// eslint . 为指定lint当前项目中的文件
// --ext 为指定lint哪些后缀的文件
// --fix 开启自动修复
"lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"

yarn lint
```

.prettierrc.js

```js
module.exports = {
    // 一行的字符数，如果超过会进行换行，默认为80
    printWidth: 80, 
    // 一个tab代表几个空格数，默认为80
    tabWidth: 2, 
    // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
    useTabs: false, 
    // 字符串是否使用单引号，默认为false，使用双引号
    singleQuote: true, 
    // 行位是否使用分号，默认为true
    semi: false, 
    // 是否使用尾逗号，有三个可选值"<none|es5|all>"
    trailingComma: "none", 
    // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
    bracketSpacing: true
}
```

在package.json中的script中添加以下命令

```js
{
    "scripts": {
        "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
    }
}
```

运行该命令，会将我们项目中的文件都格式化一遍，后续如果添加其他格式的文件，可在该命令中添加，例如：.less后缀的文件

## 解决eslint与prettier的冲突

在理想的状态下，eslint与prettier应该各司其职。eslint负责我们的代码质量，prettier负责我们的代码格式。但是在使用的过程中会发现，由于我们开启了自动化的eslint修复与自动化的根据prettier来格式化代码。所以我们已保存代码，会出现屏幕闪一起后又恢复到了报错的状态。

这其中的根本原因就是eslint有部分规则与prettier冲突了，所以保存的时候显示运行了eslint的修复命令，然后再运行prettier格式化，所以就会出现屏幕闪一下然后又恢复到报错的现象。这时候你可以检查一下是否存在冲突的规则。
查阅资料会发现，社区已经为我们提供了一个非常成熟的方案，即eslint-config-prettier + eslint-plugin-prettier。

eslint-plugin-prettier： 基于 prettier 代码风格的 eslint 规则，即eslint使用pretter规则来格式化代码。

eslint-config-prettier： 禁用所有与格式相关的 eslint 规则，解决 prettier 与 eslint 规则冲突，确保将其放在 extends 队列最后，这样它将覆盖其他配置

## 配置husky

虽然上面已经配置好了eslint、preitter与stylelint，但是还是存在以下问题。

对于不使用vscode的，或者没有安装eslint、preitter与stylelint插件的同学来说，就不能实现在保存的时候自动的去修复与和格式化代码。

这样提交到git仓库的代码还是不符合要求的。因此需要引入强制的手段来保证提交到git仓库的代码时符合我们的要求的。

husky是一个用来管理git hook的工具，git hook即在我们使用git提交代码的过程中会触发的钩子。

# 🚀如何开始？

- 1️⃣克隆存储库
- 2️⃣安装依赖项
- 3️⃣使用 Vite 进行编译和 HMR 开发
- 4️⃣编译和缩小以用于生产
- 5️⃣lints 和修复文件

```js
$ yarn install
$ yarn dev
```

## commit 📦 (开箱即用)

- add: Vue 3 + TypeScript + Vite + Pinia 📦 (开箱即用)
- 💡 feat: 增加新功能
- 🛠️ fix: 修复bug
- ⚡ build: 构造工具的或者外部依赖的改动，例如webpack，npm
- 📦 chore: 不修改src或者test的其余修改，例如构建过程或辅助工具的变动
- 🚀 ci: 与CI(持续集成服务）有关的改动
- 📄 docs：只改动了文档相关的内容
- 💧style: 不影响代码含义的改动，例如去掉空格，改变缩进，增删分号
- 🔑 perf: 提高性能的改动
- 🍃 refactor: 代码重构时使用
- 🤖 revert: 执行git revert打印的message
- 🔩 test: 添加测试或者修改现有测试

## 单文件组件

- [`<script setup>`](https://github.com/webVueBlog/vue3-vite-pinia-template/issues/1)
- [SFC 语法定义](https://github.com/webVueBlog/vue3-vite-pinia-template/issues/2)
- [css功能](https://github.com/webVueBlog/vue3-vite-pinia-template/issues/3)
- [应用实例 AP](https://github.com/webVueBlog/vue3-vite-pinia-template/issues4)
