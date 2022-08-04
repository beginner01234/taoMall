<template>
  <div id="app">
    <router-view />
    <!-- <div>
      <van-tabbar>
        <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item name="search" icon="new-o">逛逛</van-tabbar-item>
        <van-tabbar-item name="friends" icon="chat-o">消息</van-tabbar-item>
        <van-tabbar-item name="setting" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item name="login" icon="contact">个人中心</van-tabbar-item>
      </van-tabbar>
    </div> -->
  </div>
</template>

<script>
// import navBarVue from './components/navBar.vue'
export default {
  name: 'App',
  components: {
    // navBarVue,
  },
  data() {
    return {
      // active: 'home',
    };
  },
}
</script>

<style>

</style>
