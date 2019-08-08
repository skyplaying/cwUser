<!--  提交订单 -->

<template>
	<view class="page">
		<view class="container" v-if="isok">
			<!--  地址 -->
			<view class="box1">
				<text class="sendType">上门</text>
				<text class="addressName">田厦金牛广场B座1124</text>
				<view class="uName">
					<text class="">熊先生</text>
					<text class="phone">13368399460</text>
				</view>
			</view>
			<view class="box2">
				<image src="../../../static/index/yuyue.png" mode="aspectFit" class="pImg"></image>
				<text class="petName">多多</text>
			</view>
			<view class="box3">
				<image src="../../../static/mine/yuyue.png" mode="aspectFit" class="pImg"></image>
				<view class="" style="margin-left: 20upx;">
					<text class="shopName">宠慕火化中心</text>
					<view class="rateBox">
						<image src="../../../static/shop/star.png" mode="widthFix" class="star"></image>
						<text>4.5</text>
						<text style="margin-left: 68upx;">好评90%</text>
					</view>
				</view>
			</view>

			<view class="box4">
				<view class="">
					<text>宠物重量</text>
					<text class="kg">0-5 Kg</text>
				</view>
				<view class="">
					<text>预计价格</text>
					<text class="price">￥480</text>
				</view>
				<view class="">
					<text>运费</text>
					<text class="price">￥380</text>
				</view>
			</view>

			<view class="box5">
				<text>骨灰处理</text>
				<view class="dealBox">
					<image src="../../../static/shop/mountainType.png" mode="aspectFill" class="goodsImg"></image>
					<view class="goodDes">
						<text class="t1">海葬</text>
						<view class="t2">x1</view>
					</view>
					<view class="price3">￥300</view>
				</view>
			</view>
			<view class="box5">
				<text>附加服务</text>
				<view class="dealBox">
					<image src="../../../static/shop/mountainType.png" mode="aspectFill" class="goodsImg"></image>
					<view class="goodDes">
						<text class="t1">海葬</text>
						<view class="t2">x1</view>
					</view>
					<view class="price3">￥300</view>
				</view>
				<view class="dealBox">
					<image src="../../../static/shop/mountainType.png" mode="aspectFill" class="goodsImg"></image>
					<view class="goodDes">
						<text class="t1">海葬</text>
						<view class="t2">x1</view>
					</view>
					<view class="price3">￥300</view>
				</view>
			</view>
			<view class="box5">
				<text>宠物善后用品</text>
				<view class="dealBox">
					<image src="../../../static/shop/mountainType.png" mode="aspectFill" class="goodsImg"></image>
					<view class="goodDes">
						<text class="t1">海葬</text>
						<view class="t2">x1</view>
					</view>
					<view class="price3">￥300</view>
				</view>
				<view class="dealBox">
					<image src="../../../static/shop/mountainType.png" mode="aspectFill" class="goodsImg"></image>
					<view class="goodDes">
						<text class="t1">海葬</text>
						<view class="t2">x1</view>
					</view>
					<view class="price3">￥300</view>
				</view>
			</view>

			<view class="box6">
				<text class="t1">备注</text>
				<textarea value="" placeholder="随车人数，宠物遗物一起火化等要求" maxlength="-1" class="reMark" />
			</view>
			

		</view>
	<view class="submitBtn">
			<text style="margin-left: 145upx;">合计:</text><text>3658</text> <text style="margin-left: 300upx; display: inline-block; width: 100upx;" @click="payMoney">付款</text>
		</view>
	<view style="width: 100%;height: 20upx;position: fixed;background: white;bottom: 0;"></view>

	</view>
</template>

<script>
export default {
	data() {
		return {
			isok: true
		};
	},
	methods:{
		payMoney(){
			
		},
	}
};
</script>

<style lang="less">
.container {
	padding: 39upx;
}
.submitBtn{
margin-left: 20upx;
position: fixed;
bottom: 20upx;
width: 710upx;
height: 98upx;
line-height: 98upx;
border-radius: 10upx;
background-color: rgba(168, 216, 185, 1);
color: rgba(36, 147, 110, 1);
font-size: 28upx;
font-family: Arial;
border: 2upx solid rgba(255, 255, 255, 0);
}
.box6 {
	margin-top: 20upx;
	margin-bottom: 200upx;
	.t1 {
		font-size: 24upx;
		margin-bottom: 10upx;
		display: block;
	}
	.reMark {
		width: 630upx;
		height: 115upx;
		line-height: 34upx;
		border-radius: 10upx;
		background-color: rgba(255, 255, 255, 0);
		color: rgba(136, 136, 136, 1);
		font-size: 24upx;
		text-align: left;
		font-family: Microsoft Yahei;
		border: 2upx solid rgba(234, 234, 234, 1);
	}
}
.goodsImg {
	width: 172upx;
	height: 115upx;
	border-radius: 10upx;
	margin-bottom: 20upx;
}
.dealBox {
	display: flex;
	margin-top: 8upx;
	.goodDes {
		margin-left: 30upx;
		.t1 {
			color: rgba(16, 16, 16, 1);
			font-size: 24upx;
			margin-top: 5upx;
		}
		.t2 {
			color: rgba(153, 153, 153, 1);
			font-size: 25upx;
			margin-top: 10upx;
		}
	}
}

.price3 {
	color: rgba(36, 147, 110, 1);
	font-size: 24upx;
	margin-top: 42upx;
	position: absolute;
	right: 75upx;
}
.box5 {
	margin-top: 30upx;
}
.box3 {
	margin-top: 39upx;
	display: flex;
	.shopName {
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
	}
	.rateBox {
		font-size: 24upx;
		vertical-align: middle;
		margin-top: 10upx;
		.star {
			width: 30upx;
			height: 30upx;
		}
	}
}
.box4 {
	position: relative;
	width: 100%;
	margin-top: 56upx;
	.tname {
		color: rgba(16, 16, 16, 1);
		font-size: 24upx;
	}
	.tprice {
		color: rgba(36, 147, 110, 1);
		font-size: 28upx;
		position: absolute;
		right: 26upx;
	}
	.kg {
		position: absolute;
		right: 30upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
	}
	.price {
		position: absolute;
		right: 30upx;
		color: rgba(36, 147, 110, 1);
		font-size: 28upx;
	}
}
.box4 > view {
	margin-top: 20upx;
}
.box1 {
	.sendType {
		display: inline-block;
		width: 54upx;
		height: 36upx;
		line-height: 36upx;
		border-radius: 4upx;
		background-color: rgba(168, 216, 185, 1);
		color: rgba(14, 94, 86, 1);
		font-size: 20upx;
		text-align: center;
		font-family: Arial;
		border: 2upx solid rgba(255, 255, 255, 0);
		margin-top: 20upx;
	}
	.addressName {
		margin-left: 10upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
	}

	.uName {
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		font-family: PingFangSC-regular;
		margin-top: 20upx;
	}
	.phone {
		margin-left: 25upx;
	}
}
.pImg {
	top: 322upx;
	width: 94upx;
	height: 86upx;
	border-radius: 10upx;
	vertical-align: middle;
}
.box2 {
	margin-top: 50upx;

	.petName {
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		margin-left: 25upx;
	}
}
</style>
