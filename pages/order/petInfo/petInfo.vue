<!--  完善订单宠物信息 -->

<template>
	<view class="page">
		<view class="container" v-if="isok">
			<image src="../../../static/shop/petbanner.png" mode="aspectFill" class="bannerImg"></image>
			<view class="percentBall">
				<view class="ball">30%</view>
				<text class="t1">完善订单信息</text>
				<image src="../../../static/shop/toTop.png" mode="aspectFit" class="toTop"></image>
			</view>
			<view class="petBox1">
				<view class="" @click="toPetType">
					<text class="name1">宠物类型</text>
					<text class="selectedText">{{petType}}</text>
					<image class="toRight" src="../../../static/mine/rightGray.png" mode="aspectFit"></image>
				</view>
				<picker @change="bindPetAgeChange" :value="ageIndex"  :range="ageArr">
					<view class="picker">
						<text class="name1">宠物年龄</text>
						<text v-if="age" class="selectedText">{{age}}岁</text>
						<image class="toRight" src="../../../static/mine/rightGray.png" mode="aspectFit"></image>
					</view>
				</picker>
			</view>
			<view class="petBox1">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="picker">
						<text class="name1">逝去时间</text>
						<text class="selectedText">{{chinaDate}}</text>
						<image class="toRight" src="../../../static/mine/rightGray.png" mode="aspectFit"></image>
					</view>
				</picker>

				<view class="picker" @click="getAddress">
					<text class="name1">逝去地点</text>
					<text class="selectedText">{{leftAddr}}</text>
					<image class="toRight" src="../../../static/mine/rightGray.png" mode="aspectFit"></image>
				</view>

				<picker :value="index" :range="resonArr" @change="bingResonChange">
					<view class="picker">
						<text class="name1">逝去原因</text>
						<text class="selectedText">{{reson}}</text>
						<image class="toRight" src="../../../static/mine/rightGray.png" mode="aspectFit"></image>
					</view>
				</picker>
			</view>

			<!--  备注 -->
			<view class="mBox">
				<text class="m1">备注</text>
				<textarea class="tx1"  v-model="reMark" maxlength="-1" placeholder="可填写跟车人数、搬运宠物用品等需要" placeholder-style="margin-left:30upx;"/>
			</view>
			<view class="keepBtn" @click="keep">保存</view>
		</view>
	</view>
</template>

<script>
let _self;
export default {
	data() {
		const currentDate = this.getDate({
			format: true
		});
		return {
			isok: true,
			date: '',
			index: 0,
			ageIndex:0,
			reMark: '', //备注
			reson:'',
			age:'',
			petType:'',
			time:'',
			leftAddr:'',
			chinaDate:'',
			ageArr: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
			resonArr: ['意外', '病死', '自然死亡', '其他']
		};
	},
	onLoad() {
		_self = this;
	},
	computed: {
		startDate() {
			return this.getDate('start');
		},
		endDate() {
			return this.getDate('end');
		}
	},
	methods: {
		toPetType() {
			uni.navigateTo({
				url: '../../pet/petType/petType'
			});
		},
		petAge() {
			
		},
		keep(){
			
		},
		bindPetAgeChange(e) {
			_self.ageIndex=e.detail.value //必要的 赋值方法
			_self.age=_self.ageArr[_self.ageIndex]
			_self.age=parseInt(_self.age)
			console.log(_self.ageArr[_self.ageIndex]);
		
		},
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 2;
			}
			month = month > 9 ? month : '0' + month;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		},
		//  选择日期
		bindDateChange(e) {
			let date=e.target.value
			console.log(e.target.value)
			_self.chinaDate= _self.$api.formatTimeChina(date)
			console.log(date,_self.chinaDate);
		},
		//选择原因
		bingResonChange(e){
			let index=e.target.value;
			_self.reson=_self.resonArr[index]
			console.log(_self.reson)
			},
		getAddress() {
			uni.chooseLocation({
				success: e => {
					console.log(e.address+e.name);
					_self.leftAddr=e.address
					
				}
			});
		}
	}
};
</script>

<style lang="less">
.page {
	padding-bottom: 150upx;
}

.placeText{
	text-align: center;
	
}
.selectedText{
color: rgba(153, 153, 153, 1);
font-size: 24upx;
position: absolute;
right: 90upx;
}
.toRight {
	width: 30upx;
	height: 30upx;
	position: absolute;
	right: 10upx;
	margin-top: 32upx;
}
.keepBtn {
	position: fixed;
	bottom: 0;
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
.mBox {
	width: 686upx;
	height: 390upx;
	border-radius: 10upx;
	background-color: rgba(255, 255, 255, 1);
	text-align: center;
	box-shadow: 0px 0px 16upx 0px #efefef;
	border: 2upx solid #efefef;
	margin-left: 30upx;
	margin-top: 15upx;
	.m1 {
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
		font-family: PingFangSC-regular;
		position: relative;
		left: -282upx;
		top: 32upx;
	}
	.tx1 {
		margin-left: 28upx;
		margin-top: 80upx;
		width: 636upx;
		// padding: 85upx 0;
		padding-top: 40upx;
		height: 130upx;
		// line-height: 170upx;
		border-radius: 10upx;
		color: rgba(136, 136, 136, 1);
		font-size: 28upx;
		text-align: left;
		font-family: Microsoft Yahei;
		text-indent: 50upx;
		border: 2upx solid rgba(187, 187, 187, 1);
	}
}
.petBox1 {
	position: relative;
	width: 686upx;
	border-radius: 0px;
	background-color: rgba(255, 255, 255, 0);
	box-shadow: 0upx 0upx 8upx 0upx rgba(255, 255, 255, 0);
	border: 2upx solid #efefef;
	margin-left: 30upx;
	margin-bottom: 12upx;
	.name1 {
		margin-left: 28upx;
		font-size: 28upx;
	}
}
.petBox1 > view {
	width: 100%;
	height: 90upx;
	line-height: 90upx;
	border-radius: 0px;
	background-color: rgba(255, 255, 255, 0);
	box-shadow: 0upx 0upx 8upx 0upx rgba(255, 255, 255, 0);
	border: 2upx solid rgba(255, 255, 255, 0);
}

.petBox1 .picker {
	width: 100%;
	height: 90upx;
	line-height: 90upx;
	border-radius: 0px;
	background-color: rgba(255, 255, 255, 0);
	box-shadow: 0upx 0upx 8upx 0upx rgba(255, 255, 255, 0);
	border: 2upx solid rgba(255, 255, 255, 0);
}
.bannerImg {
	width: 100%;
	height: 322upx;
	display: block;
}
.banner {
	width: 100%;
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
	top: -60upx;
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
