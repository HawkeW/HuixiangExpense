<template>
  <view class="content">
    <text class="header block">欢迎回来!</text>
    <form @submit="submit" class="form block center">
      <input class="input" type="text" v-model="user.name" maxlength="30" placeholder="请输入用户名" @focus="
            emailStatus = 0;
            formStatus = true;
          " />
      <input class="input" type="password" v-model="user.password" maxlength="24" placeholder="请输入登录密码" @focus="
            pwdStatus = true;
            formStatus = true;
          " />
      <view class="error-wrapper">
        <text class="error" v-if="!pwdStatus">密码错误</text>
      </view>
      <view class="reset-wrapper">
        <navigator url="./reset"><text class="reset">忘记密码 ？</text></navigator>
      </view>
      <view class="error-wrapper">
        <text class="form-error" v-if="!formStatus">信息填写不完整</text>
      </view>
      <view class="form-btn">
        <button form-type="submit" type="primary" class="button">登录</button>
        <button type="primary" plain="true" class="button" @click="toRegister">注册</button>
      </view>
    </form>
  </view>
</template>

<script>
  import {checkUser} from '@/common/api/user.js'
  import {
    mapMutations,
    mapState
  } from 'vuex';
  export default {
    data() {
      return {
        user: {
          name: '',
          password: ''
        },
        nameStatus: 0,
        pwdStatus: true,
        formStatus: true,
      };
    },
    computed: {
      ...mapState(['auth'])
    },
    methods: {
      ...mapMutations(['setUser', 'setHasLogin']),
      submit() {
        const validate = this.validateForm(this.user);
        if (validate) {
          // 验证成功
          checkUser({username:this.user.name, password:this.user.password}).then(res=>{
            const {data, errCod, errMsg } = res.data;
            console.log(errCod)
            if(errCod===0){
              this.setHasLogin(true);
              this.setUser(data);
              uni.switchTab({
                url:'../home/home'
              })
            }
          })
        }
      },
      toPage() {
        // 判断是否有浏览页面
        if (getCurrentPages().length > 1) {
          let pageCount = getCurrentPages().length - 2;
          let page = getCurrentPages()[pageCount].$page;
          if (page.meta.isTabBar) {
            uni.reLaunch({
              url: page.path
            });
          } else {
            uni.navigateBack();
          }
        } else {
          // 跳转首页
          uni.switchTab({
            url: '../home/home'
          });
        }
      },
      validateForm(user) {
        const email = '^[a-zA-Z_]+(\.[a-zA-Z0-9_]+)+$';
        if (user.name == '' || user.password == '') {
          this.formStatus = false;
          return false;
        }
        return true;
      },
      toRegister() {
        uni.navigateTo({
          url: './register'
        })
      }
    }
  };
</script>

<style>
  /* #ifndef APP-NVUE */
  button {
    border-radius: 0;
    background-color: #8ec756;
    border: 1px #8ec756 solid;
  }
  input{
    border: 1px #8ec756 solid;
  }
  button::hover {
    background-color: #8ec756;
  }

  uni-button[type=primary][plain] {
    color: #8ec756;
    border: 1px #8ec756 solid;
  }
  
  .button-hover[type=primary][plain] {
    color: #FFFFFF;
    background-color: #8ec756;
  }
  .block{
    display: block;
  }
  .center{
    align-items: center;
  }
  /* #endif */
  .content {
    width: 750rpx;
    align-items: center;
  }
  
  .header {
    margin-top: 24rpx;
    margin-bottom: 88rpx;
    color: #8ec756;
    text-align: center;
    font-size: 52rpx;
    font-weight: bold;
  }
  .form{
    width: 100%;
  }
  .input-wrapper {
    width: 686rpx;
    height: 92rpx;
    border-style: solid;
    border-width: 2rpx;
    border-color: #e5e5e5;

  }

  .input {
    height: 92rpx;
    width: 686rpx;
    padding-left: 32rpx;
    border-width: 1px;
    border-color: #8ec756;
    margin-bottom: 40rpx;
    margin-left: 14rpx;
  }

  .placeholder {
    position: absolute;
    top: 24rpx;
    left: 32rpx;
    color: #8d8d8d;
    font-size: 32rpx;
  }

  .reset-wrapper {
    text-align: right;
    margin-right: 14rpx;
    margin-bottom: 248rpx;
  }

  .reset {
    margin-top: 16rpx;
    font-size: 28rpx;
  }

  .button {
    width: 686rpx;
    margin-bottom: 38rpx;
    font-size: 36rpx;
    font-weight: bold;
    background-color: #8ec756;
  }

  .error-wrapper {
    height: 50rpx;
  }

  .error {
    font-size: 32rpx;
    color: #dd524d;
    text-align: right;
    align-items: flex-end;
  }

  .form-error {
    font-size: 32rpx;
    color: #dd524d;
    text-align: center;
    align-items: center;
  }
</style>
