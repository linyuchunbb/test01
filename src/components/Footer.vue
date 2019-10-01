<template>
    <div id="foot">
        <van-tabbar inactive-color="#fff" class="footer" route>
      <van-tabbar-item replace to="/" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/find" icon="search">
        发现
      </van-tabbar-item>
      <van-tabbar-item replace to="/tash" icon="search">
        任务
      </van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="search">
        我的
      </van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script>
export default {
  name: 'foot'
}
</script>

<style  scoped>
    .footer{
        background-color: #00022a
    }
</style>
