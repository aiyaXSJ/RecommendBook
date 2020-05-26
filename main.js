import Vue from 'vue'
import App from './App'
// 首先引入
import { myRequest } from  './util/api.js'
Vue.config.productionTip = false
// 全局挂载
Vue.prototype.$myRequest = myRequest
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
