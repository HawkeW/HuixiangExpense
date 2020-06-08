<template>
  <view class="wrapper">
    <text class="time-wrapper time">{{ time }}</text>
    <view>
      </image>
    </view>
    <view class="cate-wrapper">
      <image class="cate-icon" :src="`../../static/images/categories/${ icon }`" mode="aspectFit">
        <text class="cate-text">{{ reason }}</text>
    </view>
    <text class="money">￥{{  money ?  money : '' }} </text>
    <view>
      <image class="delete cate-icon" src="../../static/images/delete-HL.png" mode=""></image>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'h-record',
    data() {
      return {
        img: '',
      }
    },
    props: ['image', 'time', 'icon', 'reason', 'money'],
    methods: {

    },
    created() {
      this.img = this.image || ''; //从组件获取图片，如果没有则不显示图片
    }
  }
</script>

<style>
  .wrapper {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    height: 120rpx;
    flex-direction: row;
    line-height: 120rpx;
    border-bottom: 2rpx;
    border-color: #E5E5E5;
    border-style: solid;
     padding-left: 30rpx;
     padding-right: 30rpx;
  }
.wrapper:hover{
   background-color: #cccccc;
}
  .time-wrapper {
    width: 160rpx;
    height: 118rpx;
    text-align: center;
    align-items: center;
  }

  .time {
    font-size: 20rpx;
    color: #999999;
  }

  .cate-wrapper {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    width: 242rpx;
  }

  .cate-icon {
    height: 32rpx;
    width: 32rpx;
    margin-top: 45rpx;
    margin-left: 68rpx;
    margin-right: 20rpx;
  }

  .cate-text {
    font-size: 32rpx;
    color: #333333;
  }

  .money {
    font-size: 32rpx;
    color: #333333;
    width: 242rpx;
    padding-left: 20rpx;
  }

  .delete {
    margin-left: 74rpx;
  }
</style>
