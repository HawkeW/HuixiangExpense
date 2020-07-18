<template>
	<view>
    <view v-for="(item,index) in dataList" :key="index">
      <bill-item :option = "item" @click.native="detail(index)"></bill-item>
    </view>
	</view>
</template>

<script>
import billItem from "./billItem"
	export default {
    components:{
      billItem
    },
		data() {
			return {
				dataList:[
          {
            "billId": "001",   //账单id
            "billName":"家庭支出", //账单名称
            "startDate":"2020-04-01 08:00", //账单创建时间
            "month":50,
            "week":20,
            "total": 50, //账单金额
            "authority":"admin"
          },
          {
            "billId": "002",   //账单id
            "billName":"买车",  //账单名称
            "startDate":"2020-04-01 08:00", //账单创建时间
            "month":10,
            "week":0,
            "total": 100, //账单金额
            "authority":"user"
          }
        ],
			}
		},
		methods: {
			detail(index){
        console.log(index)
        uni.navigateTo({
          url:'./billDetail'
        })
      }
		}
	}
</script>

<style>

</style>
