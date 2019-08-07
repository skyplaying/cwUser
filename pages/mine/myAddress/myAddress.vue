<template>
	<view class="page">
		<view class="conatiner" v-if="isok">
			<view class="addressBar" @click="chooseAddress()">
				<image src="../../../static/mine/dingwei.png" class="addressIcon"></image>
				<text class="addressName">{{ address}}</text>
				<image src="../../../static/mine/rightGray.png" class="rightIcon"></image>
			</view>
		</view>
	</view>
</template>

<script>
let _self;
export default {
	data() {
		return {
			isok: true,
			address: ''
		};
	},
	onLoad() {
		_self = this;
		_self.getAddress();
	},
	methods: {
		getAddress() {
           let ad= uni.getStorageSync('address')
		   if(ad){
			   _self.address=ad
		   }
		},
		chooseAddress() {
			uni.chooseLocation({
				success: e => {
					console.log(e);
					_self.address = e.address;
					uni.setStorageSync("address",e.address)
					
				}
			});
		}
	}
};
</script>

<style lang="less">
.addressBar {
	margin-left: 20upx;
	margin-top: 24upx;
	width: 710upx;
	height: 90upx;
	line-height: 40upx;
	border-radius: 10upx;
	// text-align: center;
	border: 2upx solid rgba(255, 255, 255, 0);
	.addressIcon {
		margin-left: 24upx;
		width: 44upx;
		height: 44upx;
		vertical-align: middle;
		display: inline-block;
	}
	.addressName {
		margin-left: 27upx;
		height: 20upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.rightIcon {
		position: absolute;
		left:676upx;
		width: 30upx;
		height: 30upx;
		background-color: rgba(223, 223, 223, 1);
		vertical-align: middle;
		z-index: 50;
		margin-top: 5upx;
	}
}
</style>
