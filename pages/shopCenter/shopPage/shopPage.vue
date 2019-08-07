<template>
	<view class="page">
		<view class="container" v-if="isok">
			<view class="swiperBox">
				<swiper class="shopSwiper"  :indicator-dots="false" :autoplay="autoplay" :circular="true" :interval="3000" :duration="2000">
						<swiper-item class="shopSwiper" v-for="(item, index) in bannerList1" :key="index">
							<view @click="" class="Img"><image :src="item.img" mode="widthFix" class="bannerImg" /></view>
						</swiper-item>
				</swiper>
			</view>

			<view class="shopTopBox">
				<view class="deName">宠慕火化殡葬中心</view>
				<view class="infoText">门店信息</view>
				<view class="infoBox">
					<view class="t1">
						<image src="../../../static/mine/yinyeshijian.png" class="icon1" mode="aspectFit"></image>
						<text class="name1">营业时间</text>
						<text class="name2">09:00-22:00</text>
					</view>
					<view class="t1">
						<image src="../../../static/mine/yingyezhizhao.png" class="icon1" mode="aspectFit"></image>
						<text class="name1">实名认证</text>
						<image src="../../../static/mine/gerenrenzheng.png" class="icon1 name2" mode="aspectFit"></image>
						<text class="name1">营业执照</text>
					</view>
					<view class="addressBox">
						<image src="../../../static/mine/xiantiaodingwei.png" mode="aspectFit" class="icon2"></image>
						<text class="name1">深圳市龙华新区观澜乐善宠物服务部</text>
						<image src="../../../static/shop/blackRight.png" mode="aspectFit" class="icon3"></image>
					</view>
				</view>
			</view>

			<view class="shopMiddleBox">
				<text class="t1">门店介绍</text>
				<view class="shopIntroduce">
					彩虹桥宠物善终服务是广州市海珠区新港金穗动物医院的一个服务项目，是广东周边地区最早成立，最专业，档次最高，
					服务条件最好的宠物火化殡葬善终服务。除了提供宠物善终服务，我们还提供宠物善后用品的销售和定制。
				</view>
				<text class="deName">宠物善后用品</text>

				<!-- 宠物善后用品 -->
				<view class="otherBox">
					<view class="">
						<view class="otherGood">
							<image src="../../../static/index/huiyi.png" mode="aspectFit" class="goodsImg"></image>
							<view class="g1">骨灰盒</view>
							<view class="g2">有温度的纪念卡片，打印您与爱宠的回忆。</view>
							<view class="price">￥90</view>
						</view>
						<view class="otherGood">
							<image src="../../../static/index/huiyi.png" mode="aspectFit" class="goodsImg"></image>
							<view class="g1">骨灰盒</view>
							<view class="g2">有温度的纪念卡片，打印您与爱宠的回忆。</view>
							<view class="price">￥90</view>
						</view>
					</view>
					<view class="">
						<view class="otherGood">
							<image src="../../../static/index/huiyi.png" mode="aspectFit" class="goodsImg"></image>
							<view class="g1">骨灰盒</view>
							<view class="g2">有温度的纪念卡片，打印您与爱宠的回忆。</view>
							<view class="price">￥90</view>
						</view>
						<view class="otherGood">
							<image src="../../../static/index/huiyi.png" mode="aspectFit" class="goodsImg"></image>
							<view class="g1">骨灰盒</view>
							<view class="g2">有温度的纪念卡片，打印您与爱宠的回忆。</view>
							<view class="price">￥90</view>
						</view>
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
	}
};
</script>

<style lang="less">
*{
margin:0px;
padding:0px;
border:0px;
outline:none 0px;
background:transparent;
}	
	
.page {
	font-family: PingFangSC-regular;
}

.swiperBox{
height: auto;
position: relative;
width: 100%;
}
.shopSwiper {
	width: 100%;
	height: 350upx;
}
.deName {
	color: rgba(16, 16, 16, 1);
	font-size: 36upx;
	text-align: left;
	width: 100%;
	height: 106upx;
	line-height: 106upx;
}
.bannerImg {
	width: 100%;
	height: 350upx;
}

.otherBox {
	width: 100%;
	display: flex;
	height: auto;
	flex-direction: row;
	margin-bottom: 50upx;
}

.otherBox > view {
	width: 350upx;
	margin-right: 14upx;
}
.shopMiddleBox {
	padding: 20upx;
	.t1 {
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
	}
	.shopIntroduce {
		width: 710upx;
		height: 186upx;
		color: rgba(153, 153, 153, 1);
		font-size: 24upx;
		text-align: left;
		margin-top: 15upx;
	}
	.otherGood {
		flex: 1;
		.goodsImg {
			width: 350upx;
			height: 305upx;
			border-radius: 10upx 10upx 0px 0px;
		}
		.g1 {
			color: rgba(16, 16, 16, 1);
			font-size: 28upx;
			text-align: center;
			font-family: Arial-regular;
		}
		.g2 {
			color: rgba(153, 153, 153, 1);
			font-size: 24upx;
			text-align: left;
			font-family: Arial-regular;
		}
		.price {
			color: rgba(16, 16, 16, 1);
			font-size: 16px;
			text-align: center;
			font-family: Arial-regular;
			margin-top: 35upx;
		}
	}
}
.shopTopBox {
	padding: 28upx 32upx;
	width: 685upx;
	height: auto;
	.addressBox {
		position: relative;
	}
	.t1 {
		height: 90upx;
		margin-top: 32upx;
	}
	.name1 {
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
		margin-left: 12upx;
		vertical-align: middle;
	}
	.name2 {
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
		margin-left: 228upx;
		vertical-align: middle;
	}
	.icon1 {
		width: 32upx;
		height: 32upx;
		vertical-align: middle;
	}
	.icon2 {
		width: 26upx;
		height: 40upx;
		vertical-align: middle;
	}
	.icon3 {
		position: absolute;
		right: 45upx;
		width: 30upx;
		height: 30upx;
		vertical-align: middle;
		top: 5upx;
	}

	.infoText {
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
	}
}
</style>
