<template>
  <view class="content">
    <text class="header">注册</text>
    <form>
      <view class="input-wrapper">
        <text class="placeholder" v-if="!user.username">用户名</text>
        <input class="input" type="text" v-model="user.username" maxlength="20" @input="" @focus="nameStatus = 0;formStatus=true" />
      </view>
      <view class="error-wrapper">
        <text class="error" v-if="nameStatus == 2">用户名重复</text>
      </view>
      <view class="input-wrapper">
        <text class="placeholder" v-if="!user.email">手机号</text>
        <input class="input" type="text" v-model="user.email" maxlength="30" @focus="emailStatus = 0;formStatus=true" />
      </view>
      <view class="error-wrapper">
        <text class="error" v-if="emailStatus == 1">电子邮箱格式错误</text>
        <text class="error" v-if="emailStatus == 2">电子邮箱已注册</text>
      </view>
      <view class="input-wrapper">
        <text class="placeholder" v-if="!user.pwd">输入密码</text>
        <input class="input" type="password" maxlength="24" v-model="user.pwd" @focus="pwdStatus = 0;formStatus=true" />
      </view>
      <view class="error-wrapper">
        <text class="error" v-if="pwdStatus == 1">密码可由6-24位的数字、大小写英文组成</text>
      </view>
      <view class="input-wrapper">
        <text class="placeholder" v-if="!pwd2">确认密码</text>
        <input class="input" type="password" maxlength="24" v-model="pwd2" @focus="pwdStatus = 0;formStatus=true" />
      </view>
      <view class="error-wrapper">
        <text class="error" v-if="pwdStatus == 2">两次密码输入不一致</text>
      </view>
      <view class="error-wrapper">
        <text class="form-error" v-if="!formStatus">信息填写不完整</text>
      </view>
      <button @click="toSubmit" type="primary" class="button">注册</button>
      <view class="login-wrapper">
        <text @click="toLogin" class="login">已有账号，登录</text>
      </view>
    </form>
  </view>
</template>

<script>
  import {
    baseUrl
  } from '../home/home';
  export default {
    data() {
      return {
        user: {
          username: '',
          email: '',
          pwd: ''
        },
        pwd2: '',
        formStatus: true,
        emailStatus: 0,
        pwdStatus: 0,
        nameStatus: true
      };
    },
    computed: {},
    methods: {
      toSubmit() {
        this.checkForm();
      },
      checkForm() {
        const pwd = '[a-zA-Z0-9]{6,24}';
        const email = '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$';
        if (!(this.user.username && this.user.email && this.user.pwd && this.pwd2)) {
          this.formStatus = false;
          return;
        }
        this.formStatus = true;
        if (!this.user.email.match(email)) {
          this.emailStatus = 1;
          console.log(this.emailStatus)
          return;
        }
        if (!this.user.pwd.match(pwd)) {
          this.pwdStatus = 1;
          return;
        }
        if (this.user.pwd != this.pwd2) {
          this.pwdStatus = 2;
          return;
        }
        this.register(this.user);
      },
      register(user) {
        uni.request({
          url: baseUrl + '/user/newUser',
          method: 'POST',
          data: user,
          success: res => {
            if (res.data.status == '200') {
              uni.showToast({
                title: '注册成功',
                icon: 'success'
              });
              setTimeout(() => {
                uni.navigateBack();
              }, 2000);
            } else {
              if(res.data.message=="email已存在"){
                this.emailStatus = 2;
                return;
              }
              uni.showToast({
                title: res.data.message + "\n请修改用户名，或稍后重试",
                icon: 'none'
              });
            }
          }
        });
      },
      toLogin() {
        uni.navigateBack();
      }
    }
  };
</script>

<style>
  /* #ifndef APP-NVUE */
  button {
    border-radius: 0;
    background-color: #8ec756;
  }

  button::hover {
    background-color: #8ec756;
  }

  .button-hover[type=primary]{
    color: #eeeeee;
    background-color: #8ec756;
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

  .input-wrapper {
    /* #ifdef H5 */
    display: flex;
    /* #endif */
    flex-direction: column;
    width: 686rpx;
    height: 92rpx;
    border-width: 2rpx;
    border-color: #e5e5e5;
  }

  .input {
    position: absolute;
    top: 24rpx;
    left: 32rpx;
    width: 686rpx;
    height: 44rpx;
  }

  .placeholder {
    position: absolute;
    top: 24rpx;
    left: 32rpx;
    color: #8d8d8d;
    font-size: 32rpx;
    /*  	height: 92rpx; */
  }

  .login-wrapper {
    align-items: flex-end;
    /* margin-bottom: 248rpx; */
  }

  .button {
    width: 686rpx;
    margin-bottom: 38rpx;
    font-size: 36rpx;
    font-weight: bold;
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
