<template>
    <div>
      <van-tabbar route>
        <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="search" icon="new-o">逛逛</van-tabbar-item>
        <van-tabbar-item replace to="friends" icon="chat-o">消息</van-tabbar-item>
        <van-tabbar-item replace to="setting" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item replace to="my" icon="contact">个人中心</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
export default {
 name: 'nav-bar'
}
</script>

<style>

</style>