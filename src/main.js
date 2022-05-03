import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入css 初始化
import './assets/css/base.css'
// 引入js 适配移动端
import './assets/js/phone'
// 引入vant 库
import './plugins/vant'
// 导入 echarts
// import echarts from 'echarts'

// Vue.prototype.$echarts = echarts;
// 使用开发的插件
import echarts from './plugins/echarts'
Vue.use(echarts)

// 引入 swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
