<template>
  <div class="good">
    <div class="good_header">
      <div class="signIn">
        <van-icon
          name="bill"
          color="#f35530"
          size="27px"
          style="vertical-align: -10%"
        />
        <span>签到</span>
      </div>
      <div class="good_tab">
        <van-tabs v-model="active">
          <van-tab title="订阅"></van-tab>
          <van-tab title="推荐"></van-tab>
        </van-tabs>
      </div>
      <div class="code">
        <van-icon
          name="enlarge"
          color="#f35530"
          size="27px"
          style="vertical-align: -10%"
        />
        <span>会员码</span>
      </div>
    </div>
    <van-sticky>
      <div>
        <van-search
          v-model="value"
          show-action
          label="地址"
          placeholder="请输入搜索关键词"
          @search="onSearch"
        >
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
      </div>
    </van-sticky>
    <!-- 中间部分 -->
    <div class="good_main">
      <div class="carousel_img">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";
export default {
  data() {
    return {
      active: 2,
      value: "",
      images: [
        "https://img1.baidu.com/it/u=1128456831,2700448983&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1657386000&t=69ef2259f7291a8dfcf319326faf1c09",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("");
    },
  },
  components: {
    navBar,
  },
};
</script>

<style lang="less" scoped>
.body {
  background: url(../../css/beijing.jpg) no-repeat;
}
.good {
  // height: 100%;
  display: flex;
  flex-flow: column;
  background-color: #fff;
  .good_header {
    // flex: 1;
    display: flex;
    justify-content: space-between;
    // height: 100%;
    // margin: 0 auto;
    overflow: hidden;
  }
  .signIn {
    // display: flex;
    flex: 1;
    width: 10px;
    height: 25px;
    border-radius: 25%;
    // vertical-align:middle;
    background-color: #ff9e36;
  }
  .good_tab {
    flex: 1;
    padding: 20px;
  }
  .code {
    flex: 1;
    width: 25px;
    height: 25px;
    border-radius: 25%;
    background-color: #ff9e36;
  }
}
.good_main {
  // overflow: hidden;
}
</style>
