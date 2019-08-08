<!--  服务商页面 -->

<template>
	<view class="page">
		<view class="container" v-if="isok">
			<view class="shopSwiperBox">
				<swiper class="banner1" style="height: 328upx;" :indicator-dots="true" :autoplay="true" :circular="true" :interval="3000" :duration="2000">
					<block v-for="(item, index) in bannerList1" :key="index">
						<swiper-item>
							<view @click="getIndex(index)" class="Img" style="width: 100%; height: 326upx;">
								<image :src="item.img" mode="widthFix" style="width: 100%;height: 100%;" />
							</view>
						</swiper-item>
					</block>
				</swiper>
			</view>
			<view class="content">
				<!-- 商家列表 -->
				<!-- 		<view v-for="(item,index) in shopList" :key="index">
					
				</view> -->

				<view class="shopBox">
					<image class="shopLogo" src="../../../static/index/huiyi.png" mode="aspectFit"></image>
					<view class="info">
						<text class="shopName" @click="get">宠慕火化中心</text>
						<text class="distance">距离您5km</text>
						<view class="iconBox">
							<image src="../../../static/shop/star.png" mode="aspectFit" class="star"></image>
							<text class="rateNum">4.5</text>
							<image src="../../../static/mine/yingyezhizhao.png" mode="aspectFit" class="zizhi"></image>
							<text class="zizhiTit">实名认证</text>
							<image src="../../../static/mine/gerenrenzheng.png" mode="aspectFit" class="zizhi"></image>
							<text class="zizhiTit">营业执照</text>
						</view>
						<view class="shopDes">宠慕宠物善终服务是广东周边地区最早成立，最专业，档次最高，服务条件最好的宠物火化殡葬善终服务。</view>
						<!-- 商品展示列表 -->
						<view class="goodsList">
							<!-- 商品列表 滚动框 -->

							<scroll-view class="floor-list goodSwiper" scroll-x>
								<view class="scoll-wrapper kk">
									<view v-for="(item, index) in bannerList1" :key="index" class="kk" @click="navToDetailPage(item)">
										<image :src="item.img" mode="aspectFill" class="goodImg"></image>
										<view class="goodName">仙居图</view>
										<text class="price">￥99</text>
									</view>
								</view>
							</scroll-view>
						</view>
					</view>
				</view>
				<view class="shopBox">
					<image class="shopLogo" src="../../../static/index/huiyi.png" mode="aspectFit"></image>
					<view class="info">
						<text class="shopName">宠慕火化中心</text>
						<text class="distance">距离您5km</text>
						<view class="iconBox">
							<image src="../../../static/shop/star.png" mode="aspectFit" class="star"></image>
							<text class="rateNum">4.5</text>
							<image src="../../../static/mine/yingyezhizhao.png" mode="aspectFit" class="zizhi"></image>
							<text class="zizhiTit">实名认证</text>
							<image src="../../../static/mine/gerenrenzheng.png" mode="aspectFit" class="zizhi"></image>
							<text class="zizhiTit">营业执照</text>
						</view>
						<view class="shopDes">宠慕宠物善终服务是广东周边地区最早成立，最专业，档次最高，服务条件最好的宠物火化殡葬善终服务。</view>
						<!-- 商品展示列表 -->
						<view class="goodsList">
							<!-- 商品列表 滚动框 -->

							<scroll-view class="floor-list goodSwiper" scroll-x>
								<view class="scoll-wrapper kk">
									<view v-for="(item, index) in bannerList1" :key="index" class="kk" @click="navToDetailPage(item)">
										<image :src="item.img" mode="aspectFill" class="goodImg"></image>
										<view class="goodName">仙居图</view>
										<text class="price">￥99</text>
									</view>
								</view>
							</scroll-view>
						</view>
					</view>
				</view>

				<!-- 底部按钮 -->
				<view class="bottomBtn">
					<view class="">
						<image src="../../../static/mine/quxiao.png" mode="aspectFit" class="cancelIcon"></image>
						<text class="text" @click="cancelOrder">取消订单</text>
						<image src="../../../static/mine/kefu.png" mode="aspectFit" class="cancelIcon i2"></image>
						<text class="text">在线客服</text>
					</view>
				</view>
				<view class="wh"></view>
			</view>
		</view>

		<view class="container-loading" v-else><image src="../../static/loading.gif"></image></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isok: true,
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
			]
		};
	},
	onLoad() {},
	methods: {
		cancelOrder() {
			uni.showModal({
				title: '是否取消预约',
				success: su => {
					if (su.confirm === true) {
						uni.navigateTo({
							url: '../cancelOrder/cancelOrder'
						});
					}
					console.log('sucess', su);
				},
				fail(err) {
					console.log('err', err);
				}
			});
		},
		get(){
			var oo=doc
		},
	}
};
</script>

<style lang="less">
.floor-list {
	white-space: nowrap;
	display: block;
	// width: 650upx;
	// margin-left: 90upx;
}

.scoll-wrapper {
	display: flex;
	align-items: flex-start;
	// height: 300upx;
	// width: 580upx;
	// margin-top: 38upx;
}

.shopSwiperBox {
	height: 328upx;
	width: 100%;
}
.wh {
	background-color: white;
	position: fixed;
	bottom: 0;
	height: 20upx;
	width: 100%;
}
.kk {
	width: 170upx;
	height: 200upx;
}
// .goodSw {
// 	height: 90upx;
// }
.banner1 {
	width: 100%;
	height: 326upx;
}

.go1 {
	width: 160upx;
	height: 200upx;
}
// .img image{
// 	width: 100%;
// 	height: 330upx;
// }
.content {
	overflow: hidden;
	padding: 20upx 30upx;
	width: 690upx;
	// height: auto;
	margin-bottom: 150upx;
	.bottomBtn {
		position: fixed;
		bottom: 20upx;
		width: 686upx;
		height: 98upx;
		line-height: 98upx;
		border-radius: 10upx;
		background-color: rgba(168, 216, 185, 1);
		color: rgba(255, 255, 255, 1);
		font-size: 28upx;
		// text-align: center;
		font-family: Arial;
		border: 2upx solid rgba(255, 255, 255, 0);

		.cancelIcon {
			margin-left: 28upx;
			width: 36upx;
			height: 36upx;
			vertical-align: middle;
		}
		.i2 {
			margin-left: 315upx;
			display: inline-block;
		}
		.text {
			margin-left: 10upx;
			color: rgba(36, 147, 110, 1);
			font-size: 28upx;
			text-align: left;
			font-family: PingFangSC-regular;
			display: inline-block;
			vertical-align: middle;
		}
	}

	.shopBox {
		position: relative;
		display: flex;
		// padding-bottom: 25upx;
		.shopLogo {
			padding: 34upx 22upx;
			width: 114upx;
			height: 100upx;
			border-radius: 10upx;
		}
		.info {
			padding: 22upx;

			.shopName {
				height: 40upx;
				color: rgba(16, 16, 16, 1);
				font-size: 28upx;
				text-align: left;
				font-family: PingFangSC-bold;
			}
			.distance {
				position: absolute;
				right: 54upx;
				height: 34upx;
				color: rgba(51, 51, 51, 1);
				font-size: 24upx;
				text-align: left;
				font-family: PingFangSC-regular;
				margin-top: 8upx;
			}
			.iconBox {
				margin-top: 12upx;
				.star {
					left: 96px;
					width: 32upx;
					height: 30upx;
					vertical-align: middle;
				}
				.rateNum {
					margin-left: 8upx;
					color: rgba(16, 16, 16, 1);
					font-size: 24upx;
					text-align: left;
					font-family: PingFangSC-regular;
					position: relative;
					top: 2.8upx;
				}

				.zizhi {
					margin-left: 20upx;
					width: 36upx;
					height: 30upx;
					vertical-align: middle;
				}
				.zizhiTit {
					margin-left: 8upx;
					height: 34upx;
					color: rgba(16, 16, 16, 1);
					font-size: 20upx;
					text-align: left;
					font-family: PingFangSC-regular;
				}
			}
			.shopDes {
				width: 504upx;
				color: rgba(153, 153, 153, 1);
				font-size: 20upx;
				text-align: left;
				font-family: PingFangSC-regular;
				margin-top: 14upx;
			}
			.goodsList {
				width: 505upx;
				height: 200upx;
				margin-top: 16upx;
				// swiper {
				// 	height: 200upx;
				// 	width: 100%;
				// }

				.goodSwiper {
					height: 200upx;
					width: 100%;
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
				.price {
					height: 32upx;
					color: rgba(16, 16, 16, 1);
					font-size: 28upx;
					text-align: center;
					font-family: Arial-regular;
					margin-top: 12upx;
					display: block;
				}
			}
		}
	}
}
</style>
