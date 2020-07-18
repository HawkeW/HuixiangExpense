<template>
	<view class="bill-item">
        <view class="bill-name"> <text class="font17">{{option.billName}}</text></view>
        <view class="week"><text  class="small"> 周：{{option.week}}</text></view>
        <view class="month"> <text class="small">月：{{option.month}}</text></view>
        <view class="total"><text  class="small"> 合计：{{option.total}}</text></view>
        <view class="arrow"><uni-icons type="forward" size="15"></uni-icons></view>
	</view>
</template>

<script>
  import uniIcons from '@/components/uni-icons/uni-icons.vue'
  export default {
    components:{
      uniIcons
    },
    props:{
      option:{
        type:Object,
        default: function (){
          return  {};
        }
      },
    }
  }
</script>

<style scoped>
.bill-item{
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  height: 60px;
  padding-top: 15px;
  box-sizing: border-box;
  border-bottom: #EEEEEE 1px solid;
}
.bill-item:hover{
  background-color: #E0E0E0;
}
.font17{
  font-size: 16px;
}
.small{
  font-size: 14px;
  color: #484848;
}
.bill-name{
  flex: 3;
  box-sizing: border-box;
  padding-left: 10px;
}
.week{
  flex:2;
}
.month{
  flex:2;
}
.total{
  flex: 3;
}
.arrow{
  flex: 1;
}
</style>