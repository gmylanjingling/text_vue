/*
vuex的核心管理对象store对象模块
 */
/*引入vue,vuex;声明使用*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from'./getters'
Vue.use(Vuex);
//创建Store对象
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
