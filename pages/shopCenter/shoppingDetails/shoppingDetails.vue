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
					<text>选择</text>
					<text style="margin-left: 30upx;">颜色分类</text>
					<!--  商品选项轮播 -->
					<view class="">
						<swiper
							class="goodSwiper"
							style=""
							:display-multiple-items="4"
							:indicator-dots="false"
							:autoplay="false"
							:circular="true"
							:interval="0"
							:duration="0"
						>
							<block>
								<swiper-item class="goodsBox" v-for="(item, index) in goodsImgList" :key="index">
									<view @click="getIndex(index)" class="kk">
										<image :src="item.img" mode="widthFix" class="goodImg" />
										<view class="goodName">仙居图</view>
										<view class="price">￥99</view>
									</view>
								</swiper-item>
							</block>
						</swiper>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
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
				}
			]
		};
	}
};
</script>

<style lang="less">
.shopSw {
	width: 100%;
	height: 520upx;
	overflow: hidden;
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
	height: 200upx;
	width: 300upx;
	margin-left: 90upx;
	margin-top: 38upx;
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
	.price {
		height: 32upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: center;
		font-family: Arial-regular;
		margin-top: 12upx;
	}
}

</style>
