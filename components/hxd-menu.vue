<template>
	<view>
		<view class="menu">
		  <view class="box menu-item box-top">
		    <label  class="lable" @click="handleClick">
		      <image class="image" :src="current.icon" mode="aspectFit"></image>
		      <text class="text">{{current.reason}}</text>
		    </label>
		    <!-- 单选 -->
		    <radio-group v-if="type==='radio'" class="radios-hide" :class="{ 'radios-show': show }" style="z-index:1;">
		      <label v-for="(item, index1) in options" :key="index1" class="item" :class="{ selected:index1===index }"
		        @click="select(index1)">
		        <image class="image" :src="item.icon" mode="aspectFit"></image>
		        <text class="text">{{ item.reason }}</text>
		      </label>
		      <view class="bottom"></view>
		    </radio-group>
		    <!-- 复选-->
		    <checkbox-group v-else   class="radios-hide" :class="{ 'radios-show': show }" style="z-index:1;" @change="check">
		      <label v-for="(item, index1) in options" :key="index1" class="check-item">
		            <checkbox :value="item.reason"  color="#73B92D" class="checkbox" :checked="item.checked" />
		            <text class="text">{{ item.reason }}</text>
		      </label>
		      <view class="bottom"></view>
		    </checkbox-group>
		  </view>
		</view>
	</view>
</template>

<script>
  /**
   * HxdDropMenu 下拉框（向上展开）
   * @options 所有选项
   * @index 单选选中的对象
   * @type radio单选
   * @type checkbox 多选
   * @ 方法
   *   @select, 选中单选选项
   *   @check, 复选框选项更改
   */
  export default {
    data() {
      return {
        show: false
      };
    },
    computed: {
      current() {
        return this.options[this.index];
      }
    },
    props: {
      options: {
        type: Array,
        default: function(){
          return []
        }
      },
      index: {
        type: Number,
        default: 0
      },
      type: {
        type: String,
        default: "radio"
      }
    },
    methods: {
      select(index) {
        this.$emit("select", index)
        this.show = !this.show;
      },
      handleClick() {
        this.show = !this.show;
      },
      check(e) {
        this.$emit("check", e.detail);
      }
    }
  };
</script>

<style scoped>
  .item:hover {
    background-color: #73B92D;
  }

  .lable {
    width: 125px;
    z-index: 2;
  }

  .menu {
    display: flex;
    flex-direction: row;
    width: 250rpx;
    align-content: flex-start;
    flex-flow: wrap;
    z-index: 3;
  }

  .menu-item {
    box-sizing: border-box;
    width: 50%;
    height: 88rpx;
  }

  .box {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 250rpx;
    height: 88rpx;
    background-color: #ffffff;
    border-style: solid;
    border-bottom-left-radius: 44rpx;
    border-bottom-right-radius: 44rpx;
    line-height: 88rpx;
  }

  .box-top {
    /* transition: 0.5s; */
    border-top-left-radius: 44rpx;
    border-top-right-radius: 44rpx;
  }

  .radios-hide {
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 22px;
    transition: all 0.4s ease;
    max-height: 0px;
    background-color: #ffffff;
    bottom: 0px;
    width: 125px;
    overflow: hidden;
    /* padding-bottom: 88rpx; */
    opacity: 0;
  }

  .radios-show {
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 22px;
    transition: all 0.4s ease;
    max-height: 1000rpx;
    background-color: #ffffff;
    bottom: 0rpx;
    width: 250rpx;
    overflow: hidden;
    opacity: 1;
    transition: all 0.4s ease;
    /* padding-bottom: 88rpx; */
  }

  .selected {
    background-color: #73B92D;
  }

  .image {
    display: inline-block;
    height: 32rpx;
    width: 32rpx;
    margin-top: 28rpx;
    margin-left: 40rpx;
    margin-right: 16rpx;
  }

  .text {
    font-size: 32rpx;
    color: #333333;
    bottom: 4rpx;
  }

  .bottom {
    height: 44px;
    background-color: #FFFFFF;
    opacity: 1;
  }

  .uni-checkbox-input {
    width: 32rpx;
  }
  .checkbox{
    transform:scale(0.7);
    margin-left: 30rpx;
  }
</style>
