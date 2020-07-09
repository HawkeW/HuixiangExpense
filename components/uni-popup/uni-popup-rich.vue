<template>
  <view class="uni-pop-rich wrapper">
		<view class="wrapper-child-left">
			<hxd-drop-menu
			:selections="reasons" 
			:isShow="showCate"
			:defalt="reason"
			@click=""/>
		</view>
    <view class="wrapper-child-right">
      <input class="input input-box" v-model="money"></input>
    </view>
    <view class="selector wrapper-child-left selector-top">
      <image class="icon" src="@/static/images/agenda.png" mode="aspectFit"></image>
      <text class="medium s-text">5月14日</text>
    </view>
    <view class="wrapper-child-right">
      <!-- <text class="input-text medium s-text">{{ reason }}</text> -->
      <input class="input input-box" v-model="note"></input>
    </view>
		<view class="wrapper-child-left">
			<hxd-drop-menu
			:selections="bills" 
			:isShow="showCate" 
			@click=""/>
		</view>
    <button class="btn wrapper-child-right" @click="close" >确认</button>
  </view>
</template>

<script>
	import hxdDropMenu from '@/components/hxd-drop-menu.vue'
  export default {
    name: 'UniPopupRich',
		components:{
			hxdDropMenu
		},
    props: {
      title: {
        type: String,
        default: "添加一条数据"
      }
    },
    inject: ['popup'],
    data() {
      return {
        note: '',
        reasons: [{
            id: '1',
            reason: '交通',
            icon: 'c-transport.png',
          },
          {
            id: '2',
            reason: '生活',
            icon: 'c-life.png',
          },
          {
            id: '3',
            reason: '日用',
            icon: 'c-daily.png',
          }, {
            id: '4',
            reason: '服饰',
            icon: 'c-clothes.png',
          }, {
            id: '5',
            reason: '餐饮',
            icon: 'c-food.png',
          }, {
            id: '6',
            reason: '娱乐',
            icon: 'c-game.png',
          },
        ],
        money: 20,
        showCate: false,
        showBill: false,
				reason:{
					id: '1',
					reason: '交通',
					icon: 'c-transport.png',
        },
				bills:[
					{
					    id: '1',
					    reason: '交通',
					    icon: 'c-transport.png',
					  },
					  {
					    id: '2',
					    reason: '生活',
					    icon: 'c-life.png',
					  },
				]
      }
    },
    computed: {},
    methods: {
      handleClick(e) {
        console.log(e)
      },
      /**
       * 定义的选择事件，选择内容后触发
       */
      select(item, index) {
        // 将事件发送到页面，在页面进行监听
        this.$emit('select', {
          item,
          index
        }, () => {
          // 延迟操作，执行父组件的close事件，关闭弹出层
          this.popup.close()
        })
      },
      /**
       * 关闭窗口
       */
      close() {
        // 执行父组件的close事件，关闭弹出层
        this.popup.close()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .uni-pop-rich {
    height: 440rpx;
    width: 750rpx;
    background-color: #262626;
    padding-top: 58rpx;
    padding-bottom: 58rpx;
    box-sizing: border-box;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    width: 750rpx;
    align-content: flex-start;
    flex-flow: wrap;
  }

  .wrapper-child-left {
    box-sizing: border-box;
    width: 30%;
    height: 88rpx;
		align-items: center;
  }
	.wrapper-child-right {
	  box-sizing: border-box;
	  width: 60%;
	  height: 88rpx;
		align-items: center;
	}

  .selector {
		position: relative;
    display: flex;
    flex-direction: row;
    width: 30%;
    height: 88rpx;
    background-color: #FFFFFF;
    border-style: solid;
    border-bottom-left-radius: 44rpx;
    border-bottom-right-radius: 44rpx;
    line-height: 88rpx;
  }

  .icon {
    height: 32rpx;
    width: 32rpx;
    margin-top: 28rpx;
    margin-left: 40rpx;
    margin-right: 16rpx;
  }

  .n-text {
    font-size: 32rpx;
    color: #333333;
  }

  .input {
    width: 410rpx;
    height: 88rpx;
    background-color: #FFFFFF;
    font-size: 32rpx;
    text-align: center;
    align-items: center;
    line-height: 88rpx;
  }

  .input-box {
    width: 410rpx;
    height: 88rpx;
    // display: none;
    color: #73B92D;
  }

  .input-text {}

  .unit {}

  .small {
    font-size: 28rpx;
  }

  .medium {
    font-size: 32rpx;
  }

  .s-text {
    color: #73B92D;
  }

  .btn {
    width: 410rpx;
    height: 88rpx;
    background-color: #73B92D;
    border-radius: 88rpx;
    color: #ffffff;
    font-size: 32rpx;
  }

  .btn ::hover {
    background-color: #3e7c00;
  }
</style>
