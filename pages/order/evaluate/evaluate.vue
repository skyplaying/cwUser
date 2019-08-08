<!--  订单评价 -->

<template>
	<view class="page">
		<view class="container" v-if="isok">
			<view class="rateBox">
				<text class="tit">您对服务满意吗</text>
				<view class="rateIconBox">
					<!--  满意 -->
					<view class="satisfy">
						<image src="../../../static/mine/manyi.png" mode="aspectFit"></image>
						<view class="">满意</view>
					</view>
					<!--  不满意 -->
					<view class="unSatisfy">
						<image src="../../../static/mine/bumanyi.png" mode="aspectFit"></image>
						<view class="">不满意</view>
					</view>
				</view>
			</view>
			<!--  打星评价 -->
			<view class="starBox"><uni-rate max="5" value="0" size="32" margin="33" isFill="false" class="star"></uni-rate></view>

			<!--  评价输入 -->
			<view class=" suggestBox">
				<text class="tit">评价</text>
				<!-- <rich-text class="richText"></rich-text> -->
				<textarea value="" class="richText" maxlength="-1" />
			</view>

			<!--  上传图片 -->
			<view class=" uploadImgBox">
				<text class="tit2">上传图片</text>
				<image-upload :limit="3"></image-upload>
			</view>

			<button @click="" class="submit">提交评价</button>
		</view>
	</view>
</template>

<script>
import uniRate from '@/components/uni-rate/uni-rate.vue';
import imageUpload from '../../../components/mc-image-upload/mc-image-upload.vue';

export default {
	data() {
		return {
			isok: true
		};
	},
	components: {
		uniRate,
		imageUpload
	}
};
</script>

<style lang="less">
.page {
	background-color: #f9f9f9;
	font-family: PingFangSC-regular;
}
.imageUpload {
	display: inline-block;
	width: 124upx;
	height: 124upx;
	border-radius: 4upx;
	background-color: rgba(240, 240, 240, 1);
	text-align: center;
	border: 2upx solid rgba(229, 229, 229, 1);
	margin-left: 500upx;
	position: absolute;
	right: 78upx;
	top: 90upx;
}
.imageItem image,
.moveImage,
.imageCover {
	width: 124upx;
	height: 124upx;
}

.uploadImgBox {
	margin-left: 32upx;
	width: 686upx;
	height: 170upx;
	line-height: 170upx;
	position: relative;
	.tit2 {
		margin-left: 25upx;
		margin-top: 85upx;
		display: inline-block;
	}
}
.rateBox > view {
	vertical-align: middle;
}
.rateBox {
	width: 686upx;
	height: 316upx;
	border-radius: 10upx;
	background-color: rgba(255, 255, 255, 1);
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	text-align: center;
	font-family: Arial;
	border: 2upx solid rgba(255, 255, 255, 0);
	padding: 34upx 32upx 10upx 32upx;

	.satisfy {
		flex: 1;
		text-align: center;
		margin: 0 auto;
	}

	.unSatisfy {
		flex: 1;
		text-align: center;
		margin: 0 auto;
	}

	.tit {
		height: 40upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
		margin-top: 12upx;
	}
	.rateIconBox {
		margin-top: 60upx;
		display: flex;
		width: 100%;
	}
	image {
		width: 94upx;
		height: 94upx;
		border-radius: 160upx;
	}
}

.starBox {
	width: 686upx;
	height: 152upx;
	line-height: 40upx;
	border-radius: 10upx;
	background-color: rgba(255, 255, 255, 1);
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	text-align: center;
	font-family: Arial;
	border: 2upx solid rgba(255, 255, 255, 0);
}

.suggestBox {
	padding: 10upx 32upx;
	line-height: 40upx;
	border-radius: 10upx;
	background-color: rgba(255, 255, 255, 1);
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	font-family: Arial;
	border: 2upx solid rgba(255, 255, 255, 0);
	width: 686upx;
	height: 242upx;
	.tit {
		width: 56upx;
		height: 40upx;
		display: block;
		padding: 24upx 0;
		text-align: left;
	}
	.richText {
		margin-top: 20upx;
		// left: 28px;
		width: 640upx;
		height: 134upx;
		line-height: 40upx;
		border-radius: 10upx;
		background-color: rgba(247, 247, 247, 1);
		border: 2px solid #efefef;
		display: block;
	}
}
.submit {
	margin-top: 334upx;
	width: 100%;
	height: 98upx;
	line-height: 98upx;
	background-color: rgba(168, 216, 185, 1);
	color: rgba(14, 94, 86, 1);
	font-size: 28upx;
	text-align: center;
	font-family: Arial;
	border: 2upx solid rgba(255, 255, 255, 0);
}
</style>
