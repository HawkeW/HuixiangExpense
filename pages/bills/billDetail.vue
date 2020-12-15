<template>
  <view class="container">
    <view>
      <h-record v-for="(item,index) in dataList" :key="index" :item="item" :id="item.id" @modify="modify(index)">
      </h-record>
    </view>
    <uni-popup ref="popup" type="bottom" :maskClick="true" :animation="true">
      <uni-popup-rich @update="handleUpdate" :current="current" @confirm="add"></uni-popup-rich>
      <view class="bottom"></view>
    </uni-popup>
    <view class="" @click="toAdd">
      <hxd-fab />
    </view>
      <view class="uni-tabbar"></view>
  </view>
</template>

<script>
  import hRecord from '@/components/hxd-record.vue'
  import uniPopup from '@/components/uni-popup/uni-popup.vue'
  import uniFab from '@/components/uni-fab/uni-fab.vue'
  import uniPopupRich from '@/components/uni-popup/uni-popup-rich.vue'
  import hxdFab from '@/components/hxd-fab.vue'
  import {
    dateUtils
  } from '@/common/util.js'
  export default {
    components: {
      hRecord,
      uniPopup,
      uniFab,
      uniPopupRich,
      hxdFab
    },
    data() {
      return {
        dataList: [{
            id: '15',
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
            money: '6.9',
            note: '',
          },
          {
            id: '16',
            time: '2020-07-12',
            reason: {
              id: 2,
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
            money: '3',
            note: '',
          },
          {
            id: '17',
            time: '2020-07-15',
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
            money: '5.03',
            note: '',
          },
          {
            id: '18',
            time: '2020-07-17',
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
            money: '11',
            note: '',
          }
        ],
        current: {},
        currentIndex: 0
      }
    },
    methods: {
      modify(index) {
        this.currentIndex = index;
        this.current = this.dataList[index];
        this.$refs.popup.open();
      },
      toAdd() {
        let date = dateUtils.yyyymmdd();
        let reason = {
          id: 1,
          reason: '交通',
          icon: '../../static/images/categories/c-transport.png',
        };
        let bills = this.dataList[0].bills
        this.current = {
          time: date,
          reason: reason,
          bills: bills,
          money: 0,
          note: '',
        };

        this.open()
      },
      add(item) {
        item.id = this.dataList.length + 200;
        console.log(item)
        this.dataList.push(item)
      },
      open() {
        this.$refs.popup.open();
      },
      handleUpdate(data) {
        this.dataList[this.currentIndex] = data;
      }
    }
  }
</script>

<style>
  page{
    padding: 0;
    background-color: "#f2f2f2"
  }
  .bottom {
    height: 100rpx;
  }
  .uni-tabbar{
    height: 50px;
    position:fixed;
    bottom: 0;
  }
</style>
