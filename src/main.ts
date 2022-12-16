import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import "./assets/css/app.scss"
import "./assets/css/index.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import AntDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css' // or 'ant-design-vue/dist/antd.less'

createApp(App).use(router).use(createPinia())
.use(ElementPlus, {size: 'small', zIndex: 3000})
.use(AntDesignVue)
.mount('#app')
