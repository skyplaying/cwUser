<template>
	<view class="page">
		<view class="conatiner" v-if="isok">
			<view class="backCard">
				<!-- 用户微信头像 -->
				<image :src="headImg" class="headImg"></image>
				<view class="nickName">{{ nickName }}</view>
			</view>

			<view v-for="(item, index) in imgList" :key="index">
				<button class="myList" @click="toPage(index)" :open-type="index == 2 ? 'contact' : ''">
					<image class="img" :src="item"></image>
					<text class="myListName">{{ titList[index] }}</text>
					<image class="toPage" src="../../../static/mine/rightGray.png"></image>
				</button>
			</view>

			<!-- <uni-load-more :status="status"></uni-load-more> -->
		</view>
		<view class="container-loading" v-else><image src="../../static/loading.gif"></image></view>
	</view>
</template>

<script>
let _self;
export default {
	data() {
		return {
			headImg: '',
			isok: true,
			nickName: '',
			cc: '',
			imgList: ['/static/mine/dingdan.png', '/static/mine/address.png', '/static/mine/wokefu.png', '/static/mine/Q.png','/static/shop/shop.png'],
			titList: ['我的订单', '我的地址', '在线客服', '常见问题','商家入口']
		};
	},
	onLoad() {
		_self = this;
		_self.getUserInfo();
	},
	methods: {
		getUserInfo() {
			//  获取用户头像
			uni.getStorage({
				key: 'user',
				success(e) {
					console.log(e);
					_self.headImg = e.data.avatarUrl;
					_self.nickName = e.data.nickName;
				}
			});
		},
		toPage(index) {
			let page = '';
			switch (index) {
				case 0:
					page = '../../order/myOrder/myOrder';
					break;
				case 1:
					page = '../myAddress/myAddress';
					break;
				case 2:
					// page = '../withdraw/withdraw';
					break;
				case 3:
					page = '../uniQuestion/uniQuestion';
					break;
				case 4:
				page='';
					break;
			}
			if (page) {
				uni.navigateTo({
					url: page
				});
			}
		}
	}
};
</script>

<style>
.backCard {
	background: url(../../../static/mine/myBack.png) no-repeat;
	background-size: 100%;
	width: 100%;
	height: 324upx;
	border-radius: 0upx 0upx 0upx 120upx;
}

.headImg {
	width: 150upx;
	height: 150upx;
	border-radius: 50%;
	margin-left: 300upx;
	margin-top: 38upx;
}

.nickName {
	color: rgba(255, 255, 255, 1);
	font-size: 28upx;
	text-align: center;
	font-family: PingFangSC-regular;
}

.myList {
	margin-left: 20upx;
	width: 710upx;
	height: 90upx;
	line-height: 90upx;
	border-radius: 20upx 20upx 0px 0px;
	text-align: center;
	border: 2upx solid rgba(255, 255, 255, 0);
	background-color: white;
}

.myList .img {
	margin-left: 44upx;
	width: 44upx;
	height: 44upx;
	vertical-align: middle;
	display: inline-block;
}

.myListName {
	margin-left: 54upx;
	height: 40upx;
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	text-align: left;
	font-family: PingFangSC-regular;
}

.toPage {
	margin-left: 338upx;
	width: 15px;
	height: 15px;
}
</style>
