<template>
	<view class="page">
		<view class="container" v-if="isok">
			<view class="content">
				<text class="t1">订单已取消</text>
				<view class="t2" @click="reOrder">重新预约</view>

				<view class="resonBox">
					<text class="r1">请告诉我们原因</text>
					<radio-group @change="radioChange" class="radioGroup">
						<label v-for="(item, index) in items" :key="index">
							<radio :checked="item.checked" :value="item.name" @click=""></radio>
							<text>{{ item.value }}</text>
						</label>
					</radio-group>
				</view>
			</view>
			<view class="submitBtn" @click="submitBtn">提交</view>
		</view>
	</view>
</template>

<script>
let _self;
export default {
	data() {
		return {
			isok: true,
			items: [
				{ name: '1', value: '计划有变，暂时不需要服务了' },
				{ name: '2', value: '赶时间，更改为其他服务方式' },
				{ name: '3', value: '预约信息有误' },
				{ name: '4', value: '误发预约' },
				{ name: '5', value: '其他' }
			]
		};
	},
	onLoad() {
		_self = this;
	},
	methods: {
		reOrder() {
			uni.navigateTo({
				url:'../sevicersList/sevicersList'
			})
		},
		plan() {
			_self.isPlan = !_self.isPlan;
		},
		radioChange(e) {
			console.log(e.detail.value);
		},
		submitBtn(){
			uni.showToast({
				title:'谢谢您的反馈',
				duration:1500,
				success() {
				//  提交完成回到首页
					uni.navigateTo({
						url:'../../index/index'
					})
				}
			})
		
		},
	}
};
</script>

<style lang="less">
.submitBtn {
	color: #0e5e56;
	font-size: 32upx;
	width: 100%;
	height: 90upx;
	line-height: 90upx;
	border-radius: 0px;
	background-color: rgba(168, 216, 185, 1);
	text-align: center;
	border: 2upx solid rgba(255, 255, 255, 0);
	position: absolute;
	bottom: 0;
}

.content {
	padding: 50upx 60upx;
	text-align: left;
	font-family: PingFangSC-regular;
	.t1 {
		color: rgba(16, 16, 16, 1);
		font-size: 56upx;
	}
	.t2 {
		margin-left: 145upx;
		background-color: rgba(255, 255, 255, 1);
		color: rgba(153, 153, 153, 1);
		font-size: 28upx;
		text-align: center;
		font-family: Arial;
		border: 2upx solid rgba(255, 255, 255, 0);
		display: inline-block;
		vertical-align: middle;
		position: relative;
		top: -15upx;
	}

	.radioGroup {
		height: 430upx;
	}
	.radioGroup > label {
		margin-top: 25upx;
		width: 100%;
		height: 45upx;
		display: block;
	}
	.radioGroup > label > text {
		margin-left: 15upx;
		vertical-align: middle;
	}

	.resonBox {
		margin-top: 80upx;
		.r1 {
			color: rgba(16, 16, 16, 1);
			font-size: 28upx;
		}
		radio {
			vertical-align: middle;
		}
	}
}
</style>
