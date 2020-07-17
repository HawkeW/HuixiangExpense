<template>
	<view >
		<view class="hxd-fab">
		  <view class="fab">
        <text class="text">记一笔</text>
        </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.hxd-fab {
		position: fixed;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: center;
		align-items: center;
		z-index: 12;
    bottom: 130rpx;
    right: 30rpx;
	}
  
  .fab{
    background-color: #8ec756;
    border-radius: 44rpx;
    width: 230rpx;
    height: 86rpx;
    padding-top: 20rpx; 
    align-items: center;
  }
  .text{
    color: #FFFFFF;
    font-size: 17px;
    font-weight: bold;
  }
</style>
