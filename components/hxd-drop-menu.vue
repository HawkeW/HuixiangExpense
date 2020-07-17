<template>
  <view class="menu">
    <view class="box menu-item box-top">
      <label @click="clickLable" class="lable">
        <image class="image" :src="current.icon" mode="aspectFit"></image>
        <text class="text">{{current.reason}}</text>
      </label>
      <!-- 单选 -->
      <radio-group v-if="type==='radio'" name="" class="radios-hide" :class="{ 'radios-show': showRadios }" style="z-index:1;">
        <label v-for="(item, index) in selections" :key="index" class="item" :class="{ selected:item.id===selected }"
          @click="clickSelection(index)">
          <image class="image" :src="item.icon" mode="aspectFit"></image>
          <text class="text">{{ item.reason }}</text>
        </label>
        <view class="bottom"></view>
      </radio-group>
      <!-- 复选-->
      <checkbox-group @change="checkLable"  v-else name="" class="radios-hide" :class="{ 'radios-show': showRadios }" style="z-index:1;">
        <label v-for="(item, index) in selections" :key="index" class="check-item">
              <checkbox :value="String(item.id)"  color="#73B92D" class="checkbox" :checked="item.checked" />
              <text class="text">{{item.reason}}</text>
        </label>
        <view class="bottom"></view>
      </checkbox-group>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        showRadios: false
      };
    },
    computed: {
      current() {
        return this.selections[this.selected - 1];
      }
    },
    created() {
      console.log(this.selections)
    },
    props: {
      selections: {
        type: Array,
        default: function(){
          return []
        }
      },
      selected: {
        type: Number,
        default: 1
      },
      show: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: ""
      }
    },
    methods: {
      clickSelection(index) {
        this.$emit("select", index)
        this.showRadios = !this.showRadios;
        console.log(index)
      },
      _updateCurrent() {
        this.$emit("select");
      },
      clickLable() {
        this.showRadios = !this.showRadios;
      },
      checkLable(e) {
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
