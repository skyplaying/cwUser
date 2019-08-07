<template>
	<view class="page">
		<view class="container" v-if="isok">
			<!-- 			<view v-for="(item, index) in orderList" :key="index">
				<view class="orderCard">
					<view >
						<text class="numName">订单号</text>
						<text class="orderNo">20190703131265</text>
						<text class="orderStatus">进行中</text>
					</view>
				</view>
			</view> -->

			<!--  商品 -->
			<view class="orderCard">
				<view class="">
					<text class="numName">订单号</text>
					<text class="orderNo">20190703131265</text>
					<text class="orderStatus">进行中</text>
				</view>
				<view class="shop">
					<image class="shopImg" src="../../../static/mine/manyi.png"></image>
					<text class="shopName">宠慕火化中心</text>
					<image class="toRight" src="../../../static/mine/rightGray.png"></image>
				</view>
				<view class="goodsList">
					<text class="goodsName">篮子</text>
					<text class="goodsPrice">￥100\n</text>
					<text class="goodsName">篮子</text>
					<text class="goodsPrice">￥100\n</text>
				</view>
				<view class="line"></view>
				<view class="">
					<text class="total">合计</text>
					<text class="totalPay">￥11111</text>
				</view>
			</view>

			<!-- 服务 墓地-->
			<view class="orderCard">
				<view class="">
					<text class="numName">订单号</text>
					<text class="orderNo">20190703131265</text>
					<text class="orderStatus">已付款</text>
				</view>
				<view class="singleGood">
					<image class="img" src="../../../static/index/banner.png"></image>
					<view class="info">
						<text class="goodName">宠物墓地\n</text>
						<text class="price">价格￥5000</text>
					</view>
					<image class="right" src="../../../static/mine/rightGray.png"></image>
				</view>
				<!--  评价 -->
				<button type="" @click="" class="evaluate">评价</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isok: true
		};
	}
};
</script>

<style lang="less">
.page {
	background-color: #f2f2f2;
}
.orderCard {
	margin-left: 32upx;
	margin-top: 20upx;
	padding-top: 20upx;
	width: 686upx;
	line-height: 40upx;
	border-radius: 20upx;
	background-color: white;
	border: 2upx solid rgba(255, 255, 255, 0);
	padding-bottom: 24upx;

	.numName {
		margin-left: 24upx;
		color: rgba(16, 16, 16, 1);
		font-size: 24upx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.orderNo {
		margin-left: 32upx;
		color: rgba(16, 16, 16, 1);
		font-size: 24upx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.orderStatus {
		margin-left: 118upx;
		height: 44upx;
		color: rgba(14, 94, 86, 1);
		font-size: 32upx;
		font-family: PingFangSC-regular;
	}
}

.shop {
	margin-top: 40upx;
	.shopImg {
		margin-left: 24upx;
		width: 54upx;
		height: 50upx;
		border-radius: 10upx;
		vertical-align: middle;
	}
	.shopName {
		margin-left: 18upx;
		height: 40upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
		font-family: PingFangSC-regular;
		vertical-align: middle;
	}
	.toRight {
		margin-left: 368upx;
		width: 30upx;
		height: 30upx;
		vertical-align: middle;
	}
}
.goodsList {
	.goodsName {
		margin-left: 96upx;
		height: 34upx;
		color: rgba(16, 16, 16, 1);
		font-size: 24upx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
	.goodsPrice {
		margin-left: 450upx;
		height: 34upx;
		color: rgba(16, 16, 16, 1);
		font-size: 24upx;
		text-align: left;
		font-family: PingFangSC-regular;
	}
}
.line {
	margin-left: 96upx;
	width: 562upx;
	height: 2upx;
	border-bottom: 2upx solid rgba(234, 234, 234, 1);
	margin-top: 14upx;
}
.total {
	margin-left: 456upx;
	margin-top: 8upx;
	width: 48upx;
	height: 34upx;
	color: rgba(16, 16, 16, 1);
	font-size: 24upx;
	text-align: left;
	font-family: PingFangSC-regular;
}
.totalPay {
	margin-left: 22upx;
	height: 50upx;
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	text-align: left;
	font-family: PingFangSC-regular;
}
.singleGood {
	// display: flex;
	.img {
		margin-left: 24upx;
		width: 124upx;
		height: 98upx;
		border-radius: 10upx;
		vertical-align: middle;
		display: inline-block;
	}
	.info {
		margin-left: 68upx;
		vertical-align: middle;
		display: inline-block;

		.goodName {
			height: 40upx;
			width: 300upx;
			color: rgba(16, 16, 16, 1);
			font-size: 28upx;
			text-align: left;
			font-family: PingFangSC-regular;
		}
		.price {
			height: 40upx;
			color: rgba(16, 16, 16, 1);
			font-size: 28upx;
			text-align: left;
			font-family: PingFangSC-regular;
		}
	}
	.right {
		display: inline-block;
		margin-left: 250upx;
		width: 30upx;
		height: 30upx;
		vertical-align: middle;
	}
}
//  评价
.evaluate {
	margin-left: 482upx;
	width: 180upx;
	height: 60upx;
	line-height: 60upx;
	border-radius: 120upx;
	color: rgba(168, 216, 185, 1);
	font-size: 28upx;
	text-align: center;
	font-family: Arial;
	border: 2upx solid rgba(168, 216, 185, 1);
	
}
</style>
