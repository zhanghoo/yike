// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

const swiperOptions = {
  /* eslint-disable */
  direction: 'vertical',    //默认horizontal
  slidesPerView: 'auto',    //默认number 1
  clickable: true,          //默认false 分页器点击
  autoplay: false,          //默认false 自动切换 
  mousewheel: false,         //默认false 开启鼠标滚轮控制Swiper切换。
  freeMode: true,           //默认false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
  autoHeight: true,         //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
  roundLengths: true,       //防止某些分辨率的屏幕上文字或边界(border)模糊。
  observer: true,           //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
  observeParents: true      //当Swiper的父元素变化时，例如window.resize，Swiper更新
  /* eslint-enable */
}

Vue.use(VueAwesomeSwiper, swiperOptions)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      icon: {
        backgroundImage: `url(${require('../static/res/icon/img-icon.png')})`,
        backgroundRepeat: 'no-repeat'
      }
    }
  },
  router,
  store,
  template: '<App/>',
  components: { App }
})
