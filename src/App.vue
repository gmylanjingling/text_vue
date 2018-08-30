<template>
  <div id="#app">
    <router-view/>
   <FootGuide/>
  </div>
</template>
<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'
  /*import Msite from './pages/Msite/Msite.vue'
  import {reqAddress} from './api'*/
  export default {
  components:{
  FootGuide,
  },
    /*发送请求*/
    /*mounted () {
      // 分发给action发ajax获取address数据
      this.$store.dispatch('getAddress')
    },*/

    /*async mounted(){
    const result=await reqAddress('41.2008,116.36767')
      console.log(result)*/
      /*用来测试ajax请求设置是否成功*/

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
