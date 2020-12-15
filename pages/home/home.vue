<template>
  <view class="container">
    <view>
      <hxd-record v-for="(item,index) in dataList" :key="index" :item="item" :id="item.id" @modify="modify(index)" />
    </view>
    <uni-popup ref="popup" type="bottom" :maskClick="true" :animation="true">
      <uni-popup-rich 
      :options="reasons"
      :options2="bills"
      :firstInput="current.expense_cost"
      :secondInput="current.expense_content"
      :date="current.expense_time"
      @update="handleUpdate" 
      @confirm="add"></uni-popup-rich>
      <view class="bottom"></view>
    </uni-popup>
    <view class="" @click="toAdd">
      <hxd-fab />
    </view>

  </view>
</template>

<script>
  import {getExpenses} from '@/common/api/bill.js'
  import {mapState, mapMutations} from 'vuex'
  import hxdRecord from '@/components/hxd-record.vue'
  import uniPopup from '@/components/uni-popup/uni-popup.vue'
  import uniFab from '@/components/uni-fab/uni-fab.vue'
  import uniPopupRich from '@/components/uni-popup/uni-popup-rich.vue'
  import hxdFab from '@/components/hxd-fab.vue'
  import {
    dateUtils
  } from '@/common/util.js'
  export default {
    computed:{
      ...mapState(['user','hasLogin']),
      current(){
        console.log(this.dataList[this.currentIndex])
        return this.dataList[this.currentIndex];
      }
    },
    components: {
      hxdRecord,
      uniPopup,
      uniFab,
      uniPopupRich,
      hxdFab
    },
    onLoad(){
      // try{
      //   const user = uni.getStorageSync('user')
      //   console.log(user)
      //   if(user.hasOwnProperty('user_id')){
      //     this.setHasLogin(true);
      //     this.setUser(user);
      //   }
      // }catch(err){
      //   console.log(err)
      // }
      // if(!this.hasLogin){
      //   uni.navigateTo({url:'../login/login'})
      // }else{
      //    this.getList()
      // }
    },
    data() {
      return {
        dataList: [
          {
            expense_cost:0,
            expense_time:"2020-07-15 12:10:10",
            expense_content:"打车",
            expense_name:"交通"
          }
        ],
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
        currentIndex: 0,
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
      }
    },
    methods: {
      ...mapMutations(['setUser','setHasLogin']),
      getList(){
        getExpenses({user_id:this.user.user_id+'' }).then(res=>{
          const { data, errCod, errMsg } = res.data;
          if(errCod===0){
            this.dataList = data;
            console.log(data)
          }
        })
      },
      modify(index) {
        this.currentIndex = index;
        this.$refs.popup.open();
      },
      toAdd() {
        let date = dateUtils.yyyymmdd();
        let reason = {
          id: 1,
          reason: '交通',
          icon: '../../static/images/categories/c-transport.png',
        };
        let bills = this.bills
        const current = {
          expense_time: date,
          expense_name: "交通",
          bills: bills,
          expense_cost: "0.00",
          expense_content: '',
        };
        this.dataList.push(current);
        this.currentIndex = this.dataList.length - 1;
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
  .bottom {
    height: 100rpx;
  }
</style>
