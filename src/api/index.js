/*n个接口函数
根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
[2、获取食品分类列表](#2获取食品分类列表)<br/>
[3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<b*/
/*
与后台交互模块
 */
import ajax from './ajax'
export const reqAddress = geohash => ajax('/api/position/' + geohash)
export const reqCategories = () => ajax('/api/index_category')
export const reqShops = ({latitude, longitude}) => ajax('/api/shops', {latitude, longitude})


