/*n个接口函数
根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
[2、获取食品分类列表](#2获取食品分类列表)<br/>
[3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<b*/
/*
与后台交互模块
 */
import ajax from './ajax'

const BASE = '/api'

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (geohash) => ajax(`${BASE}/position/${geohash}`)

// 2、获取食品分类列表
export const reqCategories = () => ajax(BASE+'/index_category')

// 3. 根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE+'/shops', {latitude, longitude})
