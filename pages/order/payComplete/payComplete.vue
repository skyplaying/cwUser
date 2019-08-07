<!-- 付款完成页面 -->
<template>
	<view class="page">
		<view class="container" v-if="isok">
			<view class="orderInfoBox">
				<text class="title">订单信息</text>
				<view class="content">
					<view class="">
						<text>下单时间</text>
						<text class="mleft">2019-07-04 12:10</text>
					</view>
					<view class="">
						<text>支付金额</text>
						<text class="mleft">￥650</text>
					</view>
					<view class=" ">
						<text>支付状态</text>
						<text class="mleft">已支付</text>
					</view>
					<view class="borderB"></view>
					<view class="">
						<text>地址</text>
						<text class="mleft">南山区桃园田下大厦B座1124</text>
					</view>
				</view>
			</view>
			<view class="percentBall" @click="toPetInfo">
				<view class="ball">30%</view>
				<text class="t1">完善订单信息</text>
				<image src="../../../static/shop/toTop.png" mode="aspectFit" class="toTop"></image>
			</view>
			<view class="tipText">为了给您更好的服务，请您告诉我们更多信息</view>
			<!--  地址 自送展示 -->
			<view class="shopAdress">
				<!--  区名 -->
				<text>深圳市龙华区</text>
				<!--  距离我多远 -->
				<text class="distance">距离你6公里></text>
				<image src="../../../static/shop/blackRight.png" class="toRight" mode="aspectFit"></image>
			</view>

			<!--  商家卡片 -->
			<view class="shopCard">
				<image src="../../../static/mine/yinyeshijian.png" mode="aspectFit" class="shopLogo"></image>
				<view class="ct">
					<view class="info">
						<view class="shopDes">
							<text class="shopName">宠慕火化中心\n</text>
							<text class="hasDo">已服务1200只宠物</text>
						</view>
						<!-- 自送 时间不显示 -->
						<view class="dayInfo">
							<text class="tt">预计上门时间\n</text>
							<view class="tDay">今天</view>
						</view>
						<view class="time">18:00</view>
					</view>
					<view class="tip">我们怀着感恩和不舍为离世的小动物提供最后的归属，也希望我们感同身受的心能带给宠物主人一丝安慰。</view>
				</view>
			</view>

			<!--  善后服务 -->
			<view class="afterService">
				<text class="tit">善后服务</text>
				<view class="goodInfo">
					<view class="">
						<image src="../../../static/shop/mountainType.png" mode="aspectFill"></image>
						<text class="t1">克隆\n</text>
						<text class="t1">￥20000</text>
					</view>
					<view class="">
						<image src="../../../static/shop/mountainType.png" mode="aspectFill"></image>
						<text class="t1">标本服务\n</text>
						<text class="t1">￥20000</text>
					</view>
				</view>
			</view>

			<!-- 底部按钮 -->
			<view class="submitBtn">
				<view class="" @click="toPetInfo">
					<image src="../../../static/mine/shenzhua.png" mode="aspectFit" class="petIcon"></image>
					<text class="t1">完善宠物信息</text>
				</view>
				<view class="" @click="online">
					<image src="../../../static/mine/kefu.png" mode="aspectFit" class="petIcon m2"></image>
					<text class="t1">在线客服</text>
				</view>
			</view>
			
			<view style="width: 100%;height: 20upx;position: fixed;background: white;bottom: 0;"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isok: true
		};
	},
	onLoad() {
		
	},
	methods:{
		toPetInfo(){
			uni.navigateTo({
				url:'../petInfo/petInfo'
			})
		},

	}
};
</script>

<style lang="less">
.submitBtn {
	display: flex;
	margin-left: 20upx;
	position: fixed;
	bottom: 20upx;
	width: 710upx;
	height: 98upx;
	line-height: 98upx;
	border-radius: 10upx;
	background-color: rgba(168, 216, 185, 1);
	color: rgba(255, 255, 255, 1);
	font-size: 28upx;
	font-family: Arial;
	border: 2upx solid rgba(255, 255, 255, 0);
	.petIcon {
		margin-left: 52upx;
		width: 32upx;
		height: 32upx;
		vertical-align: middle;
	}
	.t1 {
		margin-left: 10upx;
		color: rgba(14, 94, 86, 1);
		font-size: 28upx;
		text-align: left;
	}
	.m2{
		margin-left: 245upx;
	}
}

.afterService {
	margin-left: 20upx;
	padding: 30upx 0;
	height: 600upx;
	.tit {
		color: rgba(16, 16, 16, 1);
		font-size: 36upx;
		margin-top: 18upx;
		display: block;
	}
	.goodInfo {
		display: flex;
		margin-top: 18upx;
		.t1 {
			margin-left: 20upx;
			color: rgba(16, 16, 16, 1);
			font-size: 28upx;
		}
		image {
			display: block;
			width: 315upx;
			height: 166upx;
			border-radius: 20upx 20upx 0upx 0upx;
			margin-right: 25upx;
			margin-bottom: 29upx;
		}
	}
}

.shopAdress {
	margin-left: 34upx;
	margin-top: 30upx;
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	font-family: PingFangSC-regular;
	position: relative;

	.distance {
		margin-left: 208upx;
	}
}

.shopCard {
	padding: 38upx 20upx;
	display: flex;
	position: relative;
	margin-top: 75upx;
	.info {
		display: flex;
	}
	.time {
		position: absolute;
		right: 20upx;
		color: rgba(16, 16, 16, 1);
		font-size: 56upx;
		font-family: PingFangSC-regular;
	}
	.shopLogo {
		width: 120upx;
		height: 116upx;
		margin-left: 12upx;
		display: inline-block;
	}
	.ct {
		width: 520upx;
		margin-left: 16upx;
		.tip {
			color: rgba(16, 16, 16, 1);
			font-size: 24upx;
			margin-top: 36upx;
			line-height: 40upx;
			width: 505upx;
		}
		.shopName {
			color: rgba(16, 16, 16, 1);
			font-size: 32upx;
			text-align: left;
		}
		.hasDo {
			color: rgba(16, 16, 16, 1);
			font-size: 24upx;
			text-align: left;
		}
		.tt {
			color: rgba(153, 153, 153, 1);
			font-size: 12px;
			position: absolute;
			right: 170upx;
		}
		.tDay {
			color: rgba(153, 153, 153, 1);
			font-size: 12px;
			position: absolute;
			right: 170upx;
			top: 88upx;
		}
	}
}
.toRight {
	position: absolute;
	width: 28upx;
	height: 28upx;
	right: 20upx;
	vertical-align: middle;
}
.tipText {
	color: rgba(153, 153, 153, 1);
	font-size: 24upx;
	text-align: center;
	font-family: PingFangSC-regular;
	margin-top: 16upx;
}
.orderInfoBox {
	padding: 20upx 30upx;
	position: relative;
	.dName {
	}
	.borderB {
		width: 614upx;
		border-bottom: 2px solid rgba(234, 234, 234, 1);
	}
	.dNum {
		margin-left: 430upx;
	}
	.mleft {
		position: absolute;
		right: 58upx;
	}
	.title {
		width: 100%;
		display: block;
		text-align: center;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		font-family: PingFangSC-regular;
	}
	.content {
		padding: 10upx 26upx;
		color: rgba(16, 16, 16, 1);
		font-size: 24upx;
		font-family: PingFangSC-regular;
	}
	.content > view {
		margin-top: 20upx;
	}
}

.percentBall {
	width: 480upx;
	height: 120upx;
	line-height: 120upx;
	border-radius: 80upx;
	background-color: rgba(255, 255, 255, 1);
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	text-align: center;
	box-shadow: 0upx 0upx 16upx 4upx rgba(14, 94, 86, 0.06);
	font-family: Arial;
	border: 2upx solid rgba(255, 255, 255, 0);
	margin-left: 130upx;
	position: relative;
	z-index: 20;
	.ball {
		width: 72upx;
		height: 72upx;
		line-height: 72upx;
		background-color: rgba(255, 255, 255, 0);
		color: rgba(14, 94, 86, 1);
		font-size: 24upx;
		text-align: center;
		font-family: Arial;
		border: 2upx solid rgba(14, 94, 86, 1);
		border-radius: 50%;
		display: inline-block;
		vertical-align: middle;
	}
	.t1 {
		margin-left: 58upx;
		color: rgba(14, 94, 86, 1);
		font-size: 28upx;
		vertical-align: middle;
	}
	.toTop {
		margin-left: 46upx;
		width: 30upx;
		height: 30upx;
		vertical-align: middle;
	}
}
</style>
