<!-- 商品详情 -->
<template>
	<view class="page">
		<view class="container" v-if="isok">
			<!-- 顶部 轮播 -->
			<swiper class="shopSw" :indicator-dots="false" :autoplay="true" :circular="true" :interval="5000" :duration="1000">
				<block v-for="(item, index) in goodsImgList" :key="index">
					<swiper-item>
						<view @click="" class="shopSw"><image :src="item.img" mode="scaleToFill" style="height: 100%;width: 100%;" /></view>
					</swiper-item>
				</block>
			</swiper>

			<!--  选择商品分类 -->
			<view class="selectBox">
				<view class="price">￥99</view>
				<view class="" style="margin-top: 20upx;">
					<text>宠物骨灰盒爱宠纪念品</text>
					<image src="../../../static/mine/rightGray.png" mode="aspectFit" class="toRight"></image>
				</view>
				<view class="tit1" style="margin-top: 20upx;">
					<view class="" @click="openSelectPop">
						<text>选择</text>
						<text style="margin-left: 30upx;">颜色分类</text>
					</view>

					<!--  商品选项 滚动框-->
					<view class="">
						<scroll-view class="floor-list goodSwiper" scroll-x>
							<view class="scoll-wrapper">
								<view v-for="(item, index) in goodsImgList" :key="index" class="kk" @click="navToDetailPage(item)">
									<image :src="item.img" mode="aspectFill" class="goodImg"></image>
									<view class="goodName">仙居图</view>
									<text class="price2">￥99</text>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>

			<!--  商品详情 -->
			<view class="shopDetail">
				<view style="padding: 20upx 0;color: #999999;">商品详情</view>
				<image src="../../../static/banner.png" mode="widthFix" class="shopDesImg"></image>
				<image src="../../../static/banner.png" mode="widthFix" class="shopDesImg"></image>
				<image src="../../../static/banner.png" mode="widthFix" class="shopDesImg"></image>
			</view>

			<view class="buyRightNow" @click="buyRightNow">立即购买</view>

			<!--  弹窗 -->
			<uni-popup ref="selectBuyPop" type="bottom">
				<view class="selectBuyPop">
					<view class="head1">
						<image src="../../../static/shop/gouwuche.png" mode="aspectFit" class="img1"></image>
						<view class="text1">
							<view class="price">￥99</view>
							<text class="">选择</text>
							<text style="margin-left: 25upx;">颜色分类</text>
						</view>
					</view>
					<view class="" style="font-size: 28upx;">
						<view style="margin-top: 10upx;margin-bottom: 15upx;">颜色分类</view>
						<view class="typeBox">
							<image src="../../../static/shop/gouwuche.png" mode="aspectFit" class="typeImg"></image>
							<text style="margin-left: 10upx;">仙居图 直径11cm高14cm</text>
						</view>
						<view class="typeBox">
							<image src="../../../static/shop/gouwuche.png" mode="aspectFit" class="typeImg"></image>
							<text style="margin-left: 10upx;">仙居图 直径11cm高14cm</text>
						</view>
						<view class="typeBox">
							<image src="../../../static/shop/gouwuche.png" mode="aspectFit" class="typeImg"></image>
							<text style="margin-left: 10upx;">仙居图 直径11cm高14cm</text>
						</view>
					</view>
					<view style="margin-top: 25upx;">花呗分期（可选）</view>
					<!--  花呗选项 -->

					<scroll-view class="" style="white-space: nowrap;display: block;" scroll-x>
						<view class="huabeiBox">
							<view class="" style="width: 288upx;">
								<view class="">
									<text>分3期</text>
									<text>（0手续费）</text>
								</view>
								<view class="">￥15.33/期</view>
							</view>
							<view class="">
								<view class="">
									<text>分3期</text>
									<text>（0手续费）</text>
								</view>

								<view class="">￥15.33/期</view>
							</view>
							<view class="">
								<view class="">
									<text>分3期</text>
									<text>（0手续费）</text>
								</view>

								<view class="">￥15.33/期</view>
							</view>
						</view>
					</scroll-view>
					<!--  底部按钮 -->
					<view class="popBuyBtn" @click="nowPopBuy()">立即购买</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
let that;
export default {
	data() {
		return {
			isok: true,
			//轮播图图片数据
			goodsImgList: [
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
				},
				{
					img: 'http://image.qipinke.com/banner/banner180920.png',
					navType: 'navigateToMiniProgram',
					navObj: '{ "appId": "2018122562686742","path":"pages/index/index?originAppId=2017090608580011&newUserTemplate=20190104000000101476" }'
				},
				{
					img: 'http://image.qipinke.com/banner/banner180920.png',
					navType: 'navigateToMiniProgram',
					navObj: '{ "appId": "2018122562686742","path":"pages/index/index?originAppId=2017090608580011&newUserTemplate=20190104000000101476" }'
				},
				{
					img: 'http://image.qipinke.com/banner/banner180920.png',
					navType: 'navigateToMiniProgram',
					navObj: '{ "appId": "2018122562686742","path":"pages/index/index?originAppId=2017090608580011&newUserTemplate=20190104000000101476" }'
				}
			],
			goodTypeList: [{}, {}, {}]
		};
	},
	components: {
		uniPopup
	},
	onLoad() {
		that = this;
	},
	methods: {
		openSelectPop() {
			that.$refs.selectBuyPop.open();
		},
		nowPopBuy() {
			that.$refs.selectBuyPop.close();
		},
		buyRightNow(){
			//  跳转买单页面
			uni.navigateTo({
				url:'../palceOrder/palceOrder'
			})
		},
		
	}
};
</script>

<style lang="less">
.buyRightNow {
	width: 100%;
	height: 98upx;
	line-height: 98upx;
	background-color: rgba(168, 216, 185, 1);
	color: rgba(14, 94, 86, 1);
	font-size: 28upx;
	text-align: center;
	font-family: Arial;
	border: 2upx solid rgba(255, 255, 255, 0);
	position: fixed;
	bottom: 0;
}
.shopDetail {
	width: 710upx;
	height: auto;
	margin-left: 20upx;
	margin-top: 20upx;
	margin-bottom: 150upx;
	image {
		display: block;
		width: 100%;
		height: 710upx;
	}
}

.selectBuyPop {
	padding-left: 20upx;
	height: 900upx;
	.popBuyBtn {
		margin-top: 32upx;
		width: 706upx;
		height: 88upx;
		line-height: 88upx;
		border-radius: 40upx;
		background-color: rgba(14, 94, 86, 1);
		color: rgba(255, 255, 255, 1);
		font-size: 28upx;
		text-align: center;
		font-family: Microsoft Yahei;
		border: 2upx solid rgba(255, 255, 255, 0);
	}
	.img1 {
		width: 122upx;
		height: 116upx;
		margin-top: 20upx;
	}
	.text1 {
		margin-left: 25upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		margin-top: 30upx;
	}
	.head1 {
		display: flex;
		margin-top: 20upx;
		.price {
			left: 81px;
			color: rgba(16, 16, 16, 1);
			font-size: 32upx;
		}
	}
	.typeBox {
		width: 528upx;
		height: 88upx;
		line-height: 88upx;
		border-radius: 10upx;
		background-color: rgba(244, 244, 244, 1);
		text-align: center;
		border: 2upx solid rgba(255, 255, 255, 0);
		.typeImg {
			margin-left: -105upx;
			width: 72upx;
			height: 66upx;
			border-radius: 10upx;
			vertical-align: middle;
		}
	}
	.typeBox:hover {
		background: #a8d8b9;
	}
	.huabeiBox {
		display: flex;
		align-items: flex-start;
		height: 160upx;
		width: 1000upx;
		margin-top: 20upx;
	}
	.huabeiBox > view {
		margin-left: 20upx;
		width: 285upx;
		height: 88upx;
		border-radius: 20upx;
		background-color: rgba(244, 244, 244, 1);
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: center;
		font-family: Arial;
		border: 2upx solid rgba(255, 255, 255, 0);
	}
	.huabeiBox > view :hover {
		background-color: #a8d8b9;
	}
}

.floor-list {
	white-space: nowrap;
	display: block;
	width: 650upx;
	margin-left: 90upx;
}

.scoll-wrapper {
	display: flex;
	align-items: flex-start;
	height: 300upx;
	width: 580upx;
	margin-top: 38upx;
}

.shopSw {
	width: 100%;
	height: 520upx;
}
.toRight {
	width: 28upx;
	height: 28upx;
	position: absolute;
	right: 20upx;
}
.selectBox {
	height: 420upx;
	padding: 20upx;
	.price {
		color: rgba(14, 94, 86, 1);
		font-size: 32upx;
		font-family: PingFangSC-bold;
	}
	.tit1 {
		color: rgba(153, 153, 153, 1);
		font-size: 28upx;
		font-family: PingFangSC-regular;
	}
}

.goodSwiper {
	.kk {
		width: 170upx;
		height: 200upx;
	}
	.goodsBox {
		width: 170upx;
		height: 200upx;
	}
	.goodImg {
		margin-right: 8upx;
		width: 160upx;
		height: 102upx;
		border-radius: 6upx;
		display: inline-block;
	}
	.goodName {
		height: 28upx;
		color: rgba(16, 16, 16, 1);
		font-size: 24upx;
		text-align: center;
		font-family: Arial-regular;
	}
	.price2 {
		height: 32upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: center;
		font-family: Arial-regular;
		display: block;
		width: 100%;
		margin-top: 12upx;
	}
}
</style>
