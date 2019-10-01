<template>
  <div id="app">
    <Header></Header>
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive>
    <router-view/>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/bottom/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
  data () {
    return {
      dataList: {
      // 00 表示接口请求成功
        errorCode: '00',
        errorMessage: '请求成功',
        returnObject: {
        // 可以领取的钻石，根据该值进行拆分
          amount: '0.0004',
          // 用户详细信息
          userInfo: {
            id: 'e94301fbc62343c8b90ac36591a60dac',
            nickName: '用户昵称',
            // 拥有的钻石数量
            diamond: 100,
            // 拥有的健康力数量
            power: 2000
          }
        }
      }
    }
  },
  created () {
    this.$store.dispatch('firstDiamondNum', {num: this.dataList.returnObject.userInfo.diamond, power: this.dataList.returnObject.userInfo.power})
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
