<template>
  <div class="hello">
    <img class="img" src="@/assets/bc.png" alt="">
    <transition-group name="fade">
      <!-- <keep-alive> -->
        <!-- <div> -->
          <span class="sss" ref="spbn" v-show="show" @click="showData(item)" :style="'position: absolute;left:'+Math.ceil(Math.random() * 300) + 'px'+';top:'+Math.ceil(Math.random() * 300) + 'px'" v-for="item in list" :key="item">
            <img src="@/assets/图标  汤钻.png" alt="">
            <span ref="span">{{(Math.random() * 100).toFixed(4)}}</span>
          </span>
        <!-- </div> -->
      <!-- </keep-alive> -->
    </transition-group>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      show: true,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showData (e) {
      // this.show = !this.show
      // console.log()
      this.$refs.spbn[e - 1].style.opacity = 0
      // this.list.splice(e - 1, 1)
      let num = this.$refs.span[e - 1].innerHTML
      // let total = this.dataList.returnObject.userInfo.diamond
      // let allTotal = parseInt(num) + total
      // console.log(Number(num))
      this.$store.dispatch('changeDiamondNum', Number(num))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  position: relative;
}
.sss {
  color: #fff;
  display: flex;
  flex-flow: column;
  align-items: center;
}
.sss{
  transition:all 1s
}
.hello > span img {
  display: block;
  width: 20px;
}
.img {
  display: block;
  width: 100%;
}
/* .fade-leave{
  opacity: 1;
} */
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-leave-to {
  opacity: 0;
}
</style>
