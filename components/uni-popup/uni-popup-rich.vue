<template>
  <view class="">
    <view class="uni-pop-rich wrapper" v-show="!calendarShow">
      <!-- 分类 -->
      <view class="wrapper-child-left">
        <hxd-drop-menu :selections="reasons" :selected="item.reason.id" :show="showReasons" type="radio" @select="selectReason" />
      </view>
      <!--金额 -->
      <view class="wrapper-child-right">
        <input class="input input-box" v-model="item.money" placeholder="消费金额" type="digit"></input>
      </view>
      <!--日期 -->
      <view class="wrapper-child-left">
        <view class="selector" @click="showCalendar">
          <image class="icon" src="@/static/images/agenda.png" mode="aspectFit"></image>
          <text class="medium s-text">{{shortDate}}</text>
        </view>
      </view>
      <!--备注 -->
      <view class="wrapper-child-right">
        <input class="input input-box" v-model="item.note" placeholder="备注, 如: 早餐"></input>
      </view>
      <view class="wrapper-child-left">
        <hxd-drop-menu :selections="item.bills" :show="showBill" type="checkbox" @check="checkBills" />
      </view>
      <button class="btn wrapper-child-right" @click="close">确认</button>
    </view>
    <uni-calendar :date="item.time" :showMonth="false" :insert="true" v-show="calendarShow" ref="calendar" @change="changeDate" />
  </view>
</template>

<script>
  import hxdDropMenu from '@/components/hxd-drop-menu.vue'
  import {
    dateUtils
  } from '@/common/util.js'
  export default {
    name: 'UniPopupRich',
    components: {
      hxdDropMenu
    },
    props: {
      title: {
        type: String,
        default: "添加一条数据"
      },
      current:{
        type:Object,
        default: function() {
          let obj = {
              id: '99',
              time: '2020-07-11',
              reason: {
                id: 1,
                reason: '交通',
                icon: '../../static/images/categories/c-transport.png',
              },
              bills: [{
                  id: 2,
                  reason: '个人账单',
                  icon: '../../static/images/bill.png',
                  checked: false
                },
                {
                  id: 3,
                  reason: '家',
                  icon: '../../static/images/bill.png',
                  checked: true
                },
                {
                  id: 4,
                  reason: '吃',
                  icon: '../../static/images/bill.png',
                  checked: false
                },
              ],
              money: '0',
              note: '',
            };
          return obj;
        }
      }
    },
    inject: ['popup'],
    data() {
      return {
        item: {},
        calendarShow: false,
        reasons: [{
            id: 1,
            reason: '交通',
            icon: '../../static/images/categories/c-transport.png',
          },
          {
            id: 2,
            reason: '生活',
            icon: '../../static/images/categories/c-life.png',
          },
          {
            id: 3,
            reason: '日用',
            icon: '../../static/images/categories/c-daily.png',
          }, {
            id: 4,
            reason: '服饰',
            icon: '../../static/images/categories/c-clothes.png',
          }, {
            id: 5,
            reason: '餐饮',
            icon: '../../static/images/categories/c-food.png',
          }, {
            id: 6,
            reason: '娱乐',
            icon: '../../static/images/categories/c-game.png',
          },
        ],
        showReasons: false,
        showBill: false,
      }
    },
    created() {
        this.item = this.current;
      console.log( this.current)
    },
    computed: {
      shortDate() {
        return dateUtils.format_short(this.item.time);
      }
    },
    methods: {
      handleClick(e) {
        console.log(e);
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
      },
      selectReason(index) {
        this.item.reason = this.reasons[index];
         this.$emit("update", this.item);
      },
      checkBills(arr) {
        var billIds = [];
        billIds = arr.value;
        if(this.item.hasOwnProperty("id")){
          //获取选中的账单
          this.item.bills.forEach(bill => {
            if (billIds.indexOf(bill.id.toString()) !== -1) {
              bill.checked = true;
            } else {
              bill.checked = false;
            }
          })
        }else{
          //获取选中的账单
          this.item.bills.forEach(bill => {
            if (billIds.indexOf(bill.id.toString()) !== -1) {
              bill.checked = true;
            } else {
              bill.checked = false;
            }
          })
        }

        
      },
      showCalendar() {
        this.calendarShow = !this.calendarShow;
        this.$refs.calendar.open()
      },
      changeDate(e) {
        this.item.time = e.fulldate;
        
        this.$emit("update", this.item)
        
        this.showCalendar();
        this.$refs.calendar.close()
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

  .wrapper-child-left,
  .wrapper-child-right {
    box-sizing: border-box;
    height: 88rpx;
    align-items: center;
    margin-bottom: 30rpx;
  }

  .wrapper-child-left {
    width: 39%;
  }

  .wrapper-child-right {
    width: 61%;
  }


  .selector {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 250rpx;
    height: 88rpx;
    background-color: #FFFFFF;
    border-style: solid;
    border-radius: 44rpx;
    line-height: 88rpx;
  }

  .selector-top {
    transition: .5s;
    border-top-left-radius: 44rpx;
    border-top-right-radius: 44rpx;
  }

  .selector-top-none {
    transition: .4s;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .catesShow {
    position: absolute;
    border-top-right-radius: 44rpx;
    border-top-left-radius: 44rpx;
    transition: all .4s ease;
    height: 560rpx;
    background-color: #ffffff;
    bottom: 88rpx;
    display: flex;
    width: 250rpx;
    overflow: hidden;
    flex-direction: column;
  }

  .cates {
    border-top-right-radius: 44rpx;
    border-top-left-radius: 44rpx;
    transition: all .4s ease;
    height: 0rpx;
    bottom: 88rpx;
    display: flex;
    width: 250rpx;
    overflow: hidden;
    flex-direction: column;
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

  .calendar {
    position: absolute;
    z-index: 999;
  }
</style>
