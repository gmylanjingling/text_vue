/*
vuex的actions模块
 */
import {RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS} from "./mutation-types";
 //引入异步函数
import {reqAddress,
        reqCategories,
        reqShops
} from '../api'
export default {
  //异步获取当前地址信息
  async getAddress({commit,state}){
    //分发异步ajax请求
    const {latitude, longitude} = state
    const geohash = `${latitude},${longitude}`
    const result = await reqAddress(geohash)  // {code:0, data: address}
    // 有了结果提交mutation
    const address = result.data
    commit(RECEIVE_ADDRESS, {address})
  },
  // 异步获取食品分类列表
  async getCategories ({commit}) {
    // 发异步ajax请求
    const result = await reqCategories()
    // 有了结果提交mutation
    const categories = result.data
    commit(RECEIVE_CATEGORIES, {categories})
  },

  // 异步获取商家列表
  async getShops ({commit, state}) {
    // 发异步ajax请求
    const {latitude, longitude} = state
    const result = await reqShops(longitude, latitude)
    // 有了结果提交mutation
    const shops = result.data
    commit(RECEIVE_SHOPS, {shops})
  }
}

