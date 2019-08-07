<!--  进行中的订单 -->
<template>
	<view class="page">
		<view class="container" v-if="isok">
			<view class="status">订单进行中</view>

			<view class="orderCard">
				<text class="info">订单信息</text>
				<view class="shop">
					<image src="../../../static/index/yuyue.png" mode="aspectFit"></image>
					<text class="shopName">宠慕火化中心</text>
				</view>
				<view class="orderInfo">
					<text class="goodsName">订单号码</text>
					<text class="orderNo">20190704312132\n</text>
					<text class="goodsName">下单时间</text>
					<text class="time">2019-07-04 12:10\n</text>
					<text class="goodsName">支付方式</text>
					<text class="payType">在线支付\n</text>
				</view>
			</view>

			<!--  流程图片和视频 -->
			<view class="petSwiper">
				<view class="content">
					<text class="flowTitle">流程图片和视频</text>

					<swiper class="swiper-box" :indicator-dots="true" :autoplay="true" :circular="true" :interval="5000" :duration="3000">
						<block v-for="(item, index) in bannerList1" :key="index">
							<swiper-item>
								<view @click="getIndex(index)" hover-class="none"><image :src="item.img" mode="widthFix" class="banner-img" /></view>
							</swiper-item>
						</block>
					</swiper>
				</view>
			</view>

			<!--  选择的服务 -->

			<view class="serviceList">
				<view class="content">
					<view class="tit">选择的服务</view>

					<text class="name">接送</text>
					<text class="price">￥120\n</text>
					<text class="name">接送</text>
					<text class="price">￥120\n</text>
					<text class="name">接送</text>
					<text class="price">￥120\n</text>
					<view class="total">
						<text class="totalName">合计</text>
						<text class="totalPay">￥12000</text>
					</view>
				</view>
			</view>

			<!--  取消订单按钮 -->
			<button type="" @click="" class="cancel">取消订单</button>
		</view>
	</view>
</template>

<script>
let _self;
export default {
	data() {
		return {
			isok: true,
			//轮播图图片数据
			bannerList1: [
				{
					img: 'http://image.qipinke.com/banner/banner180912.png',
					navType: 'navigateTo',
					jumpPath: '{ "url": "/pages/family/flow/flow" }'
				},
				{
					img: 'http://image.qipinke.com/banner/banner_shs_20181030.png',
					navType: 'navigateToMiniProgram',
					navObj: '{ "appId": "2017082808428283","path": "pages/home/home" }'
				},
				{
					img: 'http://image.qipinke.com/banner/banner180920.png',
					navType: 'navigateToMiniProgram',
					navObj: '{ "appId": "2018122562686742","path":"pages/index/index?originAppId=2017090608580011&newUserTemplate=20190104000000101476" }'
				}
			]
		};
	},
	onLoad() {
		_self = this;
		_self.getUserInfo();
	},
	methods: {
		getUserInfo() {
			uni.login({
				success(e) {
					console.log(e);
				}
			});
		}
	}
};
</script>

<style lang="less">
.page {
	background-color: #f2f2f2;
	font-family: PingFangSC-regular;
}
.status {
	padding: 48upx 550upx 20upx 20upx;
	height: 50upx;
	color: rgba(16, 16, 16, 1);
	font-size: 36upx;
	text-align: left;
}
.swiper-box {
	width: 662upx;
	height: 260upx;
}
.orderCard {
	margin: 20upx;
	width: 712upx;
	line-height: 40upx;
	border-radius: 20upx;
	background-color: rgba(255, 255, 255, 1);
	border: 2upx solid rgba(255, 255, 255, 0);
	.info {
		margin: 16upx 22upx;
		height: 40upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
	}
	.shop {
		margin-top: 30upx;
		image {
			margin-left: 26upx;
			width: 54upx;
			height: 50upx;
			border-radius: 10upx;
			vertical-align: middle;
		}
		.shopName {
			margin-left: 18upx;
			width: 168upx;
			height: 40upx;
			color: rgba(16, 16, 16, 1);
			font-size: 28upx;
			text-align: left;
		}
	}
	.orderInfo {
		margin-left: 26upx;
		margin-top: 18upx;
		text {
			vertical-align: middle;
			line-height: 40px;
		}
		.goodName {
			height: 40upx;
			color: rgba(16, 16, 16, 1);
			font-size: 28upx;
			text-align: left;
			margin-top: 8upx;
		}
		.orderNo {
			margin-left: 250upx;
			height: 40upx;
			color: rgba(16, 16, 16, 1);
			font-size: 28upx;
			text-align: left;
		}
		.time {
			margin-left: 214upx;
			height: 40upx;
			color: rgba(16, 16, 16, 1);
			font-size: 28upx;
			text-align: left;
		}
		.payType {
			margin-left: 384upx;
			height: 40upx;
			color: rgba(16, 16, 16, 1);
			font-size: 28upx;
			text-align: left;
		}
	}
}

.petSwiper {
	padding: 20upx;
	.content {
		padding: 20upx;
		background-color: white;
	}
	.flowTitle {
		height: 40upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
		padding: 20upx;
		margin-bottom: 10upx;
	}
}
.serviceList {
	padding: 20upx;
	margin-bottom: 40upx;
	.content {
		padding: 20upx 40upx;
		background-color: white;
	}
	.tit {
		height: 40upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
	}
	.name {
		height: 34upx;
		color: rgba(16, 16, 16, 1);
		font-size: 24upx;
		text-align: left;
	}
	.price {
		color: rgba(16, 16, 16, 1);
		font-size: 24upx;
		margin-left: 480upx;
	}
}

.total {
	.totalName {
		margin-left: 415upx;
		height: 34upx;
		color: rgba(16, 16, 16, 1);
		font-size: 24upx;
		text-align: left;
	}
	.totalPay {
		margin-left: 22upx;
		height: 50upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
		padding-right: 58upx;
	}
}
.cancel {
	width: 100%;
	height: 98upx;
	line-height: 98upx;
	background-color: rgba(168, 216, 185, 1);
	text-align: center;
	border: 2upx solid rgba(255, 255, 255, 0);
	color: #0e5e56;
}
</style>
