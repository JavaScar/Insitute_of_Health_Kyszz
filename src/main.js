// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'babel-polyfill'

//  注册element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 注册swiper（如果使用的是2.6.0以上的版本需要自己手动去加载css）
import VueAwesomeSwiper from 'vue-awesome-swiper'

// imageViewer
import imageViewer from '../src/components/imageViewer'

// videoViewer
import VueVideoPlayer from 'vue-video-player'

import axios from 'axios'

Vue.prototype.$http = axios
Vue.prototype.$http = axios
Vue.use(VueVideoPlayer)

Vue.use(imageViewer)

Vue.use(VueAwesomeSwiper)

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
