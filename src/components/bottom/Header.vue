<template>
    <div id="head">
        <div class="header-top">
            <div class="headerNav">
                <span><img src="../../assets/图标  汤钻.png" alt=""></span>
                <span>汤钻</span>
                <span>{{num}}</span>
                <span><img src="../../assets/图标 健康力.png" alt=""></span>
                <span>健康力</span>
                <span>{{power}}</span>
            </div>
            <div class="header-nav-right">
                <span>1111</span>
                <span>333333</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'head',
  computed: {
    ...mapState({
      num: state => state.num,
      power: state => state.power
    })
    // ...mapGetters('cart', {
    //   products: 'cartProducts',
    //   total: 'cartTotalPrice'
    // })
  },
  created () {
    // console.log(this.dataList, 'header')
  }
}
</script>

<style scoped>
#head {
  box-sizing: border-box;
  width: 100%;
  height: 167px;
  padding: 40px 10px 0 20px;
  background-color: #000640;
}
.header-top {
  display: flex;
  justify-content: space-between;
}
.header-nav-right {
  height: 40px;
  border-radius: 20px;
  background-color: #091a5e;
}
.headerNav {
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background-color: #091a5e;
  padding: 0 10px;
  display: flex;
}
.headerNav span {
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 5px;
  font-size: 12px;
}
.headerNav span img {
  display: block;
  width: 16px;
}
</style>
