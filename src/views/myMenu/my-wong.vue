<template>
  <div>
    <div class="header">
      <div class="sw">
        <img src="../../css/tou.png" alt="" />
      </div>
      <div class="name">
        <p>超级用户: <span>采购员</span></p>
        <div class="account_name">
          <p>账号名: <span>8888888888888888</span></p>
        </div>
        <div class="fans">
          <p>粉丝：<span>999999</span></p>
        </div>
      </div>
      <div class="set_icon">
        <van-icon name="setting-o" size="25px" dot></van-icon>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="navigation2">
      <div class="bannerHeader">
        <div class="find">
          <p>我的订单</p>
        </div>
        <div class="entire">
          <p>全部></p>
        </div>
      </div>
      <div class="navBody">
        <div class="icon_item2">
          <van-icon name="balance-pay" size="35px"><p>待付款</p></van-icon>
        </div>
        <div class="icon_item2">
          <van-icon name="idcard" size="35px"><p>代发货</p></van-icon>
        </div>
        <div class="icon_item2">
          <van-icon name="logistics" size="35px"><p>待收货</p></van-icon>
        </div>
        <div class="icon_item2">
          <van-icon name="chat-o" size="35px"><p>待评价</p></van-icon>
        </div>
        <div class="icon_item2">
          <van-icon name="after-sale" size="35px"><p>退款/售后</p></van-icon>
        </div>
      </div>
    </div>

    <div class="navigation">
      <div class="icon_item">
        <van-icon name="gem" color="#ffd729" size="35px" />
        <p><span>会员中心</span><br />查看权益</p>
      </div>
      <div class="icon_item">
        <van-icon name="idcard" size="35px" />
        <p><span>淘宝省钱卡</span><br />领100元红包</p>
      </div>
      <div class="icon_item">
        <van-icon name="label" color="#fc011a" size="35px" />
        <p><span>红包卡券</span><br />查看可用优惠</p>
      </div>
      <div class="icon_item">
        <van-icon name="bill" color="#fc011a" size="35px" />
        <p><span>红包签到</span><br />点击领红包</p>
      </div>
    </div>
    <div class="navigation3">
      <div class="icon_item3">
        <van-icon name="completed" color="#fc011a" size="40px" />
        <p><span>试用领取</span></p>
      </div>
      <div class="icon_item3">
        <van-icon name="completed" color="#fc011a" size="40px" />
        <p><span>一起摇现金</span></p>
      </div>
      <div class="icon_item3">
        <van-icon name="completed" color="#fc011a" size="40px" />
        <p><span>店铺会员</span></p>
      </div>
      <div class="icon_item3">
        <van-icon name="completed" color="#fc011a" size="40px" />
        <p><span>领券中心</span></p>
      </div>
      <div class="icon_item3">
        <van-icon name="completed" color="#fc011a" size="40px" />
        <p><span>收获地址</span></p>
      </div>
      <div class="icon_item3">
        <van-icon name="completed" color="#fc011a" size="40px" />
        <p><span>官方客服</span></p>
      </div>
      <div class="icon_item3">
        <van-icon name="completed" color="#fc011a" size="40px" />
        <p><span>我的快递</span></p>
      </div>
      <div class="icon_item3">
        <van-icon name="completed" color="#fc011a" size="40px" />
        <p><span>我的评价</span></p>
      </div>
      <div class="icon_item3">
        <van-icon name="completed" color="#fc011a" size="40px" />
        <p><span>主题护肤</span></p>
      </div>
      <div class="icon_item3">
        <van-icon name="completed" color="#fc011a" size="40px" />
        <p><span>绿动乐园</span></p>
      </div>
    </div>
    <!-- 页面尾部 -->
    <div class="often">
      <div class="often1"><p>我常逛的店铺</p></div>
      <div class="often2"><p>查看更多 ></p></div>
    </div>
    <div class="ending">
      <div class="stores">
        <p><img src="../../css/tou.png" /></p>
      </div>
      <div class="store_name">
        <p><span>小米官方旗舰店</span></p>
        <p>5年好店 | 看过<span>1</span>次</p>
      </div>
      <div class="photo">
        <img width="180px" height="150px" fit="contain" src="../../assets/logo.png" alt="" />
      </div>
    </div>
    <navBar></navBar>
  </div>
</template>

<script>
import navBar from "../../components/navBar.vue";

export default {
  components: {
    navBar,
  },
};
</script>

<style lang="less" scoped>
.body {
  background: url(../../css/beijing.jpg) no-repeat;
}
.header {
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
  .sw {
    height: 105px;
    img {
      // width: 100%;
      height: 100%;
    }
  }
}
.name {
  margin-left: 15px;
  font-size: 18px;
  font-weight: bolder;
  color: #000000;
  flex-direction: column;
}
.account_name {
  font-size: 12px;
  font-weight: normal;
}
.fans {
  font-weight: normal;
  font-size: 12px;
}
.set_icon {
  margin-left: 35px;
  margin-top: 12px;
}
.navigation {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 15px;
  justify-content: space-around;
  height: 150px;
  border-radius: 30px;
  background-color: #fff;
  align-items: center;
}

.navigation2 {
  display: flex;
  margin: 10px;
  padding: 15px;
  flex-flow: column;
  justify-content: space-around;
  height: 140px;
  border-radius: 30px;
  background-color: #fff;
  .navBody {
    flex-flow: row;
    display: flex;
    justify-content: space-around;
  }
  .bannerHeader {
    display: flex;
    justify-content: space-between;
  }
}
.icon_item {
  // flex: 1;
  flex-direction: column;
  align-items: center;
  margin-left: -3px;
}
.icon_item2 {
  // flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: -3px;
}
.navigation3 {
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
  padding: 15px;
  justify-content: space-around;
  height: 190px;
  border-radius: 30px;
  background-color: #fff;
  align-items: center;
  .icon_item3 {
    align-items: center;
    // margin-left: -3px;
  }
}
.often {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  .often1 {
    font-size: 18px;
    font-weight: bolder;
    color: #000000;
  }
}
.ending {
  display: flex;
  flex-wrap: wrap;
  width: 280px;
  height: 400px;
  margin: 10px;
  // padding: 15px;
  border-radius: 30px;
  background-color: #fff;
  .stores{
    height: 50px;
  }
  .stores p img {
    width: 70%;
    height: 100%;
    padding-left: 25px;
    text-align: center;
    // line-height: 100%;
  }
  .store_name {
    margin-left: -20px;
    margin-top: 5px;
    padding-right: 15px;
    // text-align: center;
    // font-size: 11px;
  }
  .photo {
  //  display: flex;
  text-align: center;
  justify-content: space-around;
  line-height: 100%;
  padding-left: 15px;
  }
}
</style>
