<template>
	<view class="menu">
		<view class="box menu-item" :class="{ 'box-top': !isShow, 'box-top-none': isShow }">
			<radio-group name="" class="radios-hide" :class="{ 'radios-show': isShow }">
				<label v-for="(item, index) in selections" :key="index">
					<image class="image" :src="`@/static/images/categories/${item.image}`" mode="aspectFit"></image>
					<text class="text">{{ item.reason }}</text>
				</label>
			</radio-group>
			<label @click="isShow = !isShow">
				<image class="image" :src="`@/static/images/categories/c-transport.png`" mode="aspectFit"></image>
				<text class="text">交通</text>
			</label>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		selections: {
			type: Array,
			default: []
		},
		isShow: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style scoped>
.menu {
	display: flex;
	flex-direction: row;
	width: 250rpx;
	align-content: flex-start;
	flex-flow: wrap;
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
	transition: 0.5s;
	border-top-left-radius: 44rpx;
	border-top-right-radius: 44rpx;
}

.box-top-none {
	transition: 0.4s;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
}

.radios-hide {
	position: absolute;
	display: flex;
	flex-direction: column;
	border-top-right-radius: 22px;
	border-top-left-radius: 22px;
	transition: all 0.4s ease;
	max-height: 0px;
	background-color: #ffffff;
	bottom: 44px;
	width: 125px;
	overflow: hidden;
	opacity: 0;
}

.radios-show {
	position: absolute;
	display: flex;
	flex-direction: column;
	border-top-right-radius: 22px;
	border-top-left-radius: 22px;
	transition: all 0.4s ease;
	max-height: 560rpx;
	background-color: #ffffff;
	bottom: 88rpx;
	width: 250rpx;
	overflow: hidden;
	opacity: 1;
	transition: all 0.4s ease;
}

.image {
	height: 32rpx;
	width: 32rpx;
	margin-top: 28rpx;
	margin-left: 40rpx;
	margin-right: 16rpx;
}
.text {
	font-size: 32rpx;
	color: #333333;
}
</style>
