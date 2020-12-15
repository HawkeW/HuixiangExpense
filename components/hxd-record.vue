<template>
  <view class="wrapper" @click="handleClick">
    <text class="time-wrapper time">{{ shortDate }}</text>
    <view>
      </image>
    </view>
    <view class="cate-wrapper">
      <image class="cate-icon" :src="iconUrl" mode="aspectFit">
        <text class="cate-text">{{ item.expense_name }}</text>
    </view>
    <text class="money">￥{{  money ? money : '' }} </text>
    <view @click="removeRecord">
      <image class="delete cate-icon" src="../static/images/delete-HL.png" mode=""></image>
    </view>
  </view>
</template>

<script>
  import { icons } from '@/common/icon.js'
  import { dateUtils, moenyUtils } from '@/common/util.js'
  export default {
    name: 'hxd-record',
    data() {
      return {
        img: '',
      }
    },
    computed:{
      shortDate(){
        return dateUtils.format_short(this.item.expense_time)
      },
      money(){
        return moenyUtils.twoDecimals(this.item.expense_cost)
      },
      iconUrl(){
        return require(`../static/images/categories/${icons[this.item.expense_name]}`)
      },
    },
    props: ['item'],
    methods: {
      handleClick(){
        this.$emit("modify")
      },
      removeRecord(){
        console.log('remove')
        this.$emit("remove")
      }
    },
    created() {
     console.log(icons[this.item.expense_name])
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
    border-bottom: 1px solid #e5e5e5;
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
