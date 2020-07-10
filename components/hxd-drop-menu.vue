<template>
	<view class="menu">
		<view class="box menu-item box-top">
			<radio-group name="" class="radios-hide" :class="{ 'radios-show': isShow }">
				<label 
				v-for="(item, index) in selections" 
				:key="index" 
				class="item" :class="{selected:item.id===selected}"
				@click.native="handleSelect"
				>
					<image class="image" :src="item.icon" mode="aspectFit"></image>
					<text class="text">{{ item.reason }}</text>
				</label>
			</radio-group>
			<label @click.native="this.isShow=!this.isShow">
				<image class="image" :src="current.icon" mode="aspectFit"></image>
				<text class="text">{{current.reason}}</text>
			</label>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			selected:null,
			isShow:false
		};
	},
	created() {
		this.isShow = this.show;
		this.selected = this.current.id;
	},
	props: {
		selections: {
			type: Array,
			default: []
		},
		show: {
			type: Boolean,
			default: false
		},
		current:{
			type: Object,
			default: {}
		}
	},
	methods:{
		handleSelect(e){
			// this.selected = e.id;
			// this.show = !this.show;
			console.log('hxd')
		},
		_updateCurrent(){
			this.$emit("click",this.selected);
		}
	}
};
</script>

<style scoped>
.item:hover{
	background-color: #73B92D;
}
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
	/* transition: 0.5s; */
	border-top-left-radius: 44rpx;
	border-top-right-radius: 44rpx;
}

/* .box-top-none {
	transition: 0.4s;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
} */

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
	padding-bottom: 88rpx;
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
	padding-bottom: 88rpx;
}
.selected{
	background-color: #73B92D;
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
