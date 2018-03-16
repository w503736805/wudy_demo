// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import {common} from './assets/js/common.js'
import "babel-polyfill"
import {headerObj} from './assets/js/common.js'
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import App from './App'
import VueCookie from 'vue-cookie'
import store from './store'
import VideoPlayer from 'vue-video-player'
import { AlertPlugin, ToastPlugin, WechatPlugin } from 'vux'
import 'video.js/dist/video-js.css'
require('./assets/css/video.css')
// import 'vue-video-player/src/custom-theme.css'
// 注册组件
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
// Vue.use(VueRouter)
Vue.use(WechatPlugin)
Vue.use(VueCookie)
Vue.use(VideoPlayer)
// Vue.use(common)
Vue.use(headerObj)
FastClick.attach(document.body)
Vue.prototype.$http = axios
Vue.prototype.globalMethod = function () {
  console.log('这是公用方法')
}
// document.documentElement.style.fontSize = window.innerWidth / 10.80 + 'px'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
