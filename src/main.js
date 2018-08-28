import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HeadTop from './components/HeadTop/HeadTop.vue'
import store from './store'
Vue.component('HeadTop',HeadTop);

/* eslint-disable no-new */
new Vue({
  el:'#app',
  /*components:{App},*/
  /*template:'<App/>'*/
  render:h=>h(App),
  /*h()是一个函数调用，箭头函数返回一个App标签
  * 转换为普通函数是
  **/
  router  ,
  store     /*注册路由*/
});
