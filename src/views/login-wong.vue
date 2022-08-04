<template>
  <div>
    <div class="avatar_box">
      <img src="../css/uTools_1657030110651.png" alt="">
    </div>
    <van-form @submit="onSubmit" :model="loginFrom" ref="loginFromRef" class="login_from" >
    <!-- 登录组件 -->
      <van-field
        v-model="loginFrom.username"
        prop="username"
        name="userName"
        label="用户名"
        label-width="50px"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          {min:2,max:7,message: '用户名在2-7位数中间',trigger:'blur'}
        ]"
      />
      <van-field
        v-model="loginFrom.password"
        type="password"
        name="password"
        label="密码"
        label-width="50px"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          {min:3,max:8,message: '密码在3-8位数中间',trigger:'blur'}
          ]"
      />
      <!-- 登录 -->
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" @click="login"
          >登录</van-button>
      </div>
      <!-- 注册 -->
      <div style="margin: 16px">
        <van-button round block type="info" native-type="button"
          >注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    
    return {
      loginFrom:{
        username: "123",
        password: "123",
      },
      // // 表单的验证规则对象
      // loginFromRules:{
      //   // 验证用户名是否合法
      //   username:[
      //     { required: true, message: '请填写用户名',trigger:"blur" },
      //     {min:2,max:7,message: '用户名在2-7位数中间',trigger:"blur"}
      //   ],
      //   // 验证密码是否合法
      //   password:[
      //     { required: true, message: '请输入密码',trigger:"blur" },
      //     {min:3,max:8,message: '密码在3-8位数中间',trigger:"blur"}
      //   ]
      // }
      
    };
  },
  methods: {
    login() {
        this.$refs.loginFromRef.validate(valid => {
          console.log(valid);
        });
      },
    onSubmit(values) {
      console.log("submit", values);
      this.axios
        .post("http://yapi.smart-xwork.cn/mock/159431/login", values)
        .then((res) => {
          console.log(res);
          if (res.data.code === 0) {
            localStorage.setItem("username", this.loginFrom.username);
            this.$router.push("/");
            setTimeout(() => {
              localStorage.removeItem("username");
            }, 100000);
          }
        });
    },
  },
};
</script>

<style lang="less" scoped>
.login_from{
  position: absolute;
  bottom: 0;
  top:35%;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.avatar_box {
  width: 150px;
  height: 110px;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%);
  img{
    width: 100%;
    height: 100%;
}
}
</style>
