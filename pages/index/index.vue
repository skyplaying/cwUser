<template>
	<view class="page">
		<view class="conatiner" v-if="isok">
			<!-- 第一个轮播图 -->
			<view class="bannerBox">
				<swiper class="banner1" style="height: 328upx;" :indicator-dots="indicatorDots" :autoplay="autoplay" :circular="true" :interval="interval" :duration="duration">
					<block v-for="(item, index) in bannerList1" :key="index">
						<swiper-item>
							<view @click="getIndex(index)" class="Img"><image :src="item.img" mode="widthFix" /></view>
						</swiper-item>
					</block>
				</swiper>

				<!-- 第二个轮播图 -->
				<swiper class="banner2" style="height: 268upx;" :indicator-dots="indicatorDots" :autoplay="autoplay" :circular="true" :interval="interval" :duration="duration">
					<block v-for="(item, index) in bannerList1" :key="index">
						<swiper-item class="sw2">
							<view @click="getIndex(index)" class="Img"><image :src="item.img" mode="widthFix" /></view>
						</swiper-item>
					</block>
				</swiper>
			</view>
			<!--  流程图 -->
			<view class="flowBox">
				<view>
					<image src="/static/index/yuyue.png"></image>
					<view>预约服务</view>
				</view>
				<view>
					<image src="/static/index/shangmen.png"></image>
					<view>上门迎接</view>
				</view>
				<view>
					<image src="/static/index/qingjie.png"></image>
					<view>清洁整理</view>
				</view>
				<view>
					<image src="/static/index/yuyue.png"></image>
					<view>正式告别</view>
				</view>
				<view>
					<image src="/static/index/huiyi.png"></image>
					<view>永恒回忆</view>
				</view>
			</view>
			<!--  预约服务按钮 -->
			<!-- 			<picker
				class="reserve"
				mode="multiSelector"
				@change="bindMultiPickerChange"
				@columnchange="bindMultiPickerColumnChange"
				:value="multiIndex"
				@cancel=""
				:range="dateList"
				@click="next"
			>
				预约服务
			</picker> -->
			<button class="reserve" @click="next">预约服务</button>
			<!-- <view @click="yuyue"></view> -->
			<!--  文字轮播 -->
			<view>
				<swiper class="tipList" :autoplay="autoplay" :vertical="true" :circular="true" :interval="interval" :duration="500">
					<block v-for="(item, index) in fontList" :key="index">
						<swiper-item class="">
							<image class="tipImg" src="../../static/index/jingao.png"></image>
							<text>香港法规</text>
							<text>{{ item }}</text>
						</swiper-item>
					</block>
				</swiper>
			</view>
			<!--  送别故事 -->
			<view class="story">
				<image src="../../static/index/gushi.png" class="gushi"></image>
				<text class="fontSmall">送别故事</text>
				<!-- 				<view v-for="(item,index) in storyList" :key="index" class="storyList">
					<view class="stroryBox">
						<view class="">
							<view class="storyTitle"> 乐乐的这些年是怎么爱我的细节</view>
							<text class="watchNum">698</text>
							<text class="storyTime">2019-07-18</text>
						</view>
						<image class="storyPhoto" src="../../static/index/huiyi.png"></image>
					</view>
				</view> -->
				<view class="stroryBox">
					<view class="">
						<view class="storyTitle">乐乐的这些年是怎么爱我的细节</view>
						<text class="watchNum">698</text>
						<text class="storyTime">2019-07-18</text>
					</view>
					<image class="storyPhoto" src="../../static/index/huiyi.png"></image>
				</view>
								<view class="stroryBox">
					<view class="">
						<view class="storyTitle">谢谢你的陪伴</view>
						<text class="watchNum">698</text>
						<text class="storyTime">2019-07-18</text>
					</view>
					<image class="storyPhoto" src="../../static/index/huiyi.png"></image>
				</view>
			</view>

			<!-- <button class="test" @click="totest">测试</button> -->

			<!-- 弹出层部分 -->
			<!--  选择服务时间 -->
			<uni-popup ref="time" type="bottom" class="selectTimeBox">
				<view class="titBox top39">
					<text class="petTit" style="margin-left: 20upx;">服务时间</text>
					<text class="ccPet" @click="ccTime">取消</text>
				</view>
				<view class="dayBox" style="width: 100%;display: flex; height: 420upx;">
					<view class="dateBox">
						<view v-for="(item, index) in dateList[0]" class="hover">{{ item }}</view>
					</view>
					<picker-view @change="bindTimePickerChange" :value="timeValue" class="pickH">
						<picker-view-column class="">
							<view class="timeSelect" v-for="(item2, index) in dateList[1]" :key="index">{{ item2 }}</view>
						</picker-view-column>
					</picker-view>
				</view>

				<view class="nextStep" @click="nextStep" v-if="nextTime">下一步</view>
			</uni-popup>

			<!--  填写宠物信息弹窗 -->
			<uni-popup ref="pet" type="bottom" class="petBox">
				<view class="content">
					<view class="titBox">
						<text class="petTit">宠物信息填写</text>
						<text @click="ccPet" class="ccPet">取消</text>
					</view>
					<view class="">
						<image src="../../static/mine/chongwuming.png" mode="aspectFit" class="icon"></image>
						<input type="text" value="" placeholder="填写宠物昵称" class="input1" />
					</view>

					<view class="petPhoto">
						<image src="../../static/mine/xiangce.png" mode="aspectFit" class="icon"></image>
						<text class="petPN">上传宠物照片</text>
						<!--  上传图片 -->
						<view class="petImgBox">
							<mc-image-upload class="testImg" :limit="6"></mc-image-upload>

							<view class="photoTip">上传宠物照片可以更好为您服务，包括照片打印，其他物品图像制作等。</view>
						</view>

						<!-- 宠物重量预估 -->
						<view class="kg">
							<image src="../../static/mine/chengzhong.png" mode="aspectFit" class="icon"></image>
							<text class="petPN">预估宠物重量</text>
							<view class="">
								<input type="number" maxlength="5" class="kgNum" />
								<text class="kgUnit">公斤</text>
							</view>
						</view>
						<button type="primary" class="petNext" @click="petNext">下一步</button>
					</view>
				</view>
			</uni-popup>

			<!--  填写宠物主信息弹窗 -->
			<uni-popup ref="petUser" type="bottom" class="petUserBox">
				<view class="content">
					<view class="titBox">
						<text class="petTit">主人信息填写</text>
						<text @click="ccUser" class="ccPet">取消</text>
					</view>
					<view class="">
						<image src="../../static/mine/zhurenxingming.png" mode="aspectFit" class="icon"></image>
						<input placeholder="填写饲主姓名" class="input1" v-model="userName" style="margin-left: 0;" />
					</view>
					<view class="" open-type="getPhoneNumber">
						<image src="../../static/mine/zhurenshoujihao.png" mode="aspectFit" class="icon"></image>
						<text class="petName">添加手机号</text>
						<!-- <text class="clickText">{{userPhone?userPhone:'点击获取饲主手机号'}}</text> -->
						<button class="clickText" open-type="getPhoneNumber" @bindgetphonenumber="getUserPhone">点击获取饲主手机号</button>
						<image src="../../static/mine/rightGray.png" mode="aspectFit" class="toRight"></image>
					</view>
					<view class="addressBox" @click="getLocation">
						<image src="../../static/mine/zhurenweizhi.png" mode="aspectFit" class="icon"></image>
						<text class="petName">添加地址</text>
						<text class="clickText text2">{{ userLocation ? userLocation : '点击获取位置' }}</text>
						<image src="../../static/mine/rightGray.png" mode="aspectFit" class="toRight"></image>
					</view>
					<button class="petNext" @click="sureCommit">确认</button>
				</view>
			</uni-popup>
		</view>
		<view class="container-loading" v-else><image src="../../static/loading.gif"></image></view>
	</view>
</template>

<script>
let _self;
import { mapActions, mapMutations } from 'vuex';
import uniPopup from '../../components/uni-popup/uni-popup.vue';
import mcImageUpload from '../../components/mc-image-upload/mc-image-upload.vue';
export default {
	data() {
		return {
			isok: true,
			provider: '',
			indicatorDots: false, // 是否显示面板指示点
			autoplay: true, // 是否自动切换
			circular: true, // 是否采用衔接滑动
			current: 0, // 当前所在页面的 index
			interval: 5000, // 自动切换时间间隔
			duration: 1000, // 滑动动画时长
			fontDirection: 'vertical', //横向horizontal
			nextTime: false,
			userName: '',
			userPhone: '',
			userLocation: '',
			timeValue: '',
			// value: [9999, 1, 1],
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
			],
			fontList: ['1', '2', '3', '4', '5', '6'],
			dateList: [
				['今天', '明天', '后天'],
				[
					'08:00~09:00',
					'09:00~10:00',
					'10:00~11:00',
					'11:00~12:00',
					'12:00~13:00',
					'13:00~14:00',
					'14:00~15:00',
					'15:00~16:00',
					'16:00~17:00',
					'17:00~18:00',
					'18:00~19:00',
					'19:00~20:00',
					'20:00~21:00',
					'21:00~22:00'
				]
			],
			multiIndex: [0, 0, 0]
		};
	},

	onLoad() {
		_self = this;
		_self.getSite();
		let user = _self.$api.getUserBaseInfo();
		console.log(user);
	},
	onShow() {},
	// 关闭页面
	onUnload() {},
	// 下拉刷新页面 （全局）
	onPullDownRefresh() {},

	//上拉加载 (查询新的列表数据添加到数组里)
	onReachBottom() {},

	components: {
		uniPopup,
		mcImageUpload
	},
	methods: {
		// 获取当前城市 登录
		// ...mapActions(["getCity", "doLogin"]),
		...mapMutations(['setUserInfo']),
		getSite() {
			uni.getLocation({
				success: e => {
					console.log(e);
				}
			});
		},
		totest() {
			uni.navigateTo({
				url: '../index1/index1'
			});
		},
		next() {
			_self.nextTime = true;
			this.$refs.time.open();
		},
		bindTimePickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.detail.value);
			_self.timeValue = e.detail.value;
		},

		bindMultiPickerColumnChange: function(e) {
			console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
			// 知道修改的列以后，就可以通过修改multiIndex中对应元素的值，然后再修改multiArray
		},
		nextStep() {
			_self.$refs.pet.open();
		},
		ccPet() {
			_self.$refs.pet.close();
		},
		//  填写宠物主信息
		petNext() {
			_self.$refs.petUser.open();
		},
		ccUser() {
			_self.$refs.petUser.close();
		},
		ccTime() {
			_self.$refs.time.close();
			// uni.showTabBar({})
		},
		getLocation() {
			_self.$api.chooseTheLoaction();
		},
		getUserPhone(e) {
			uni.showToast({
				title: e.detail.errMsg
			});
			console.log(e.detail.errMsg);
			console.log(e.detail.iv);
			console.log(e.detail.encryptedData);
		},
		sureCommit() {
			//  服务商列表页面
			uni.navigateTo({
				url: '../shopCenter/sevicersList/sevicersList'
			});
		}
	}
};
</script>

<style lang="less">
.page {
	background: white;
}
.content {
	padding: 40upx 20upx;
}

.addressBox {
	margin-bottom: 200upx;
	margin-top: -25upx;
	.text2 {
		margin-left: 32upx;
	}
}
.petUserBox {
}
.top39 {
	margin-top: 39upx;
	line-height: 120upx;
}

.input1 {
	width: 400upx;
	height: 90upx;
	background-color: rgba(255, 255, 255, 0);
	color: rgba(51, 51, 51, 1);
	font-size: 28upx;
	text-align: left;
	font-family: Microsoft Yahei;
	border: 2upx solid rgba(255, 255, 255, 0);
}
.bannerBox image {
	width: 100%;
}
.petNext {
	width: 100%;
	height: 98upx;
	line-height: 98upx;
	background-color: rgba(168, 216, 185, 1);
	color: rgba(36, 147, 110, 1);
	font-size: 28upx;
	text-align: center;
	font-family: Arial;
	border: 2upx solid rgba(255, 255, 255, 0);
	position: absolute;
	bottom: 0;
	left: 0;
}
.petPN {
	margin-left: 15upx;
}
.toRight {
	width: 35upx;
	height: 35upx;
	position: absolute;
	right: 30upx;
	vertical-align: middle;
	margin-top: 25upx;
	display: inline-block;
}

.clickText {
	// margin-left: 78upx;
	width: 315upx;
	height: 40upx;
	line-height: 40upx;
	color: rgba(153, 153, 153, 1);
	font-size: 28upx;
	// text-align: center;
	font-family: PingFangSC-regular;
	display: inline-block;
	vertical-align: middle;
}

.icon {
	width: 40upx;
	height: 40px;
	vertical-align: middle;
}
.petName {
	width: 230upx;
	height: 90upx;
	background-color: rgba(255, 255, 255, 0);
	color: rgba(51, 51, 51, 1);
	font-size: 28upx;
	text-align: left;
	font-family: Microsoft Yahei;
	border: 2upx solid rgba(255, 255, 255, 0);
	display: inline-block;
	margin-left: 20upx;
}
.timeSelect {
width:390upx;
height: 88upx;
line-height: 88upx;
// background-color: rgba(255, 255, 255, 1);
color: #101010;
font-size: 28upx;
text-align: center;
font-family: Arial;
// border: 2upx solid rgba(255, 255, 255, 0);

}
.timeSelect:hover{
		background-color: rgba(234, 234, 234, 1);

}

.titBox {
	width: 100%;
	height: 120upx;
	.petTit {
		width: 200upx;
		height: 46upx;
		color: rgba(16, 16, 16, 1);
		font-size: 32upx;
		text-align: left;
		display: inline-block;
	}
	.ccPet {
		margin-left: 456upx;
		width: 48upx;
		height: 34upx;
		color: rgba(153, 153, 153, 1);
		font-size: 24upx;
		text-align: left;
		display: inline-block;
	}
}

swiper-item {
	view {
		display: block;
	}
}

.kg {
	margin-top: 20upx;
	margin-bottom: 200upx;
	.kgNum {
		margin-left: 50upx;
		width: 180upx;
		height: 88upx;
		line-height: 40upx;
		border-radius: 10upx;
		// text-align: ;

		text-indent: 30upx;
		border: 2upx solid rgba(234, 234, 234, 1);
		display: inline-block;
	}
	.kgUnit {
		position: relative;
		left: -72upx;
		width: 58upx;
		height: 32upx;
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
		font-family: Arial-regular;
		display: inline-block;
	}
}

.petBox {
	.petNext {
		width: 100%;
		height: 98upx;
		line-height: 98upx;
		background-color: rgba(168, 216, 185, 1);
		color: rgba(36, 147, 110, 1);
		font-size: 28upx;
		text-align: center;
		font-family: Arial;
		border: 2upx solid rgba(255, 255, 255, 0);
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.petPN {
		margin-left: 10upx;
		height: 40upx;
		color: rgba(51, 51, 51, 1);
		font-size: 28upx;
		text-align: left;
	}
}
.bannerBox {
	/* height: ; */
}
.photoTip {
	margin-left: 42upx;
	width: 620upx;
	height: 58upx;
	color: rgba(204, 204, 204, 1);
	font-size: 24upx;
	text-align: left;
	font-family: PingFangSC-regular;
}
.timeHover {
	background-color: rgba(234, 234, 234, 1);
	border: 2upx solid rgba(255, 255, 255, 0);
	flex: 1;
	text-align: center;
}
.nextStep {
	width: 100%;
	height: 98upx;
	line-height: 98upx;
	background-color: rgba(168, 216, 185, 1);
	color: rgba(36, 147, 110, 1);
	font-size: 28upx;
	text-align: center;
	font-family: Arial;
	border: 2upx solid rgba(255, 255, 255, 0);
	position: absolute;
	bottom: 0;
	z-index: 10000;
}
.banner1 {
	width: 100%;
	height: 328upx;
	.Img {
		width: 100%;
		height: 328upx;
	}
}

.story {
	margin-bottom: 50upx;
}

.banner2 {
	width: 710upx;
	height: 268upx;
	margin-left: 20upx;
	z-index: 20;
	position: absolute;
	top: 250upx;
	.Img {
		width: 100%;
		height: 268upx;
	}
}

.stroryBox {
	display: flex;
}

.storyList {
	margin-left: 20upx;
	width: 710upx;
	height: 188upx;
	line-height: 40upx;
	border-radius: 10upx;
	text-align: center;
	border: 2upx solid rgba(255, 255, 255, 0);
}

.fontSmall {
	color: rgba(16, 16, 16, 1);
	font-size: 12px;
	text-align: left;
	font-family: PingFangSC-regular;
}

.gushi {
	margin-left: 44upx;
	width: 32upx;
	height: 34upx;
	margin-right: 14upx;
	vertical-align: middle;
}

.tipList {
	width: 610upx;
	height: 102upx;
	color: rgba(16, 16, 16, 1);
	font-size: 24upx;
	text-align: left;
	font-family: PingFangSC-regular;
	line-height: 68upx;
	margin-left: 44upx;
	margin-top: 10upx;
}

.tipImg {
	width: 32upx;
	height: 34upx;
	vertical-align: middle;
	margin-right: 14upx;
}

.sw2 {
	border-radius: 8upx;
}

.test {
	position: fixed;
	bottom: 0;
	width: 300upx;
}

.flowBox {
	display: flex;
	width: 710upx;
	margin-left: 20upx;
	text-align: center;
	margin-top: 228upx;
}

.flowBox image {
	width: 50upx;
	height: 50upx;
}

.flowBox image + view {
	font-size: 24upx;
	color: #666666;
}

.flowBox > view {
	flex: 1;
}

.reserve {
	width: 710upx;
	height: 98upx;
	line-height: 98upx;
	border-radius: 10upx;
	background-color: rgba(168, 216, 185, 1);
	color: rgba(36, 147, 110, 1);
	font-size: 32upx;
	text-align: center;
	box-shadow: 0upx 0upx 7upx 0upx rgba(255, 255, 255, 0);
	font-family: Arial;
	border: 2upx solid rgba(255, 255, 255, 0);
	margin-left: 15upx;
	margin-top: 43upx;
}

/*  故事列表 */
.storyTitle {
	margin-left: 46upx;
	/* top: 544px; */
	width: 338upx;
	height: 80upx;
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	text-align: left;
	font-family: PingFangSC-regular;
	margin-bottom: 46upx;
	margin-top: 20upx;
}

.watchNum {
	margin-left: 46upx;
	width: 95upx;
	height: 34upx;
	color: rgba(16, 16, 16, 1);
	font-size: 24upx;
	text-align: left;
	font-family: PingFangSC-regular;
	background: url(../../static/index/eye.png) no-repeat;
	background-size: 24upx;
	background-position-y: 9upx;
	padding-left: 38upx;
}

.storyTime {
	margin-left: 119upx;
	width: 146upx;
	height: 34upx;
	color: rgba(16, 16, 16, 1);
	font-size: 24upx;
	text-align: left;
	font-family: PingFangSC-regular;
}

.storyPhoto {
	margin-left: 46upx;
	width: 272upx;
	height: 170upx;
	border-radius: 10upx;
	vertical-align: middle;
	margin-top: 20upx;
}

.pickH {
	width: 350upx;
	height: 409upx;
	overflow: hidden;
}
.selectTimeBox {
	width: 100%;
	height: 600upx;
}

.titBox {
	width: 100%;
	height: 120upx;
}

.tit {
	padding: 20upx;
	width: 200upx;
	height: 42upx;
	color: rgba(51, 51, 51, 1);
	font-size: 32upx;
	text-align: left;
	margin-top: 20upx;
	display: inline-block;
}
.cancel {
	margin-left: 430upx;
	margin-top: 20upx;
	width: 48upx;
	height: 32upx;
	color: rgba(153, 153, 153, 1);
	font-size: 24upx;
	text-align: left;
	display: inline-block;
}
.dateBox {
	width: 350upx;
	height: 409upx;
	line-height: 98upx;
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	text-align: center;
	font-family: Arial;
	border: 2upx solid rgba(255, 255, 255, 0);
}

.timeBox {
	width: 350upx;
	height: 270upx;
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	text-align: center;
	font-family: Arial;
	border: 2upx solid rgba(255, 255, 255, 0);
}
.time2 {
	height: 98upx;
	line-height: 98upx;
}

.hover:hover {
	background-color: rgba(234, 234, 234, 1);
}

.date {
	transition-property: false;
}
.hover {
	width: 350upx;
	height: 98upx;
	line-height: 98upx;
	background-color: rgba(255, 255, 255, 1);
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	text-align: center;
	font-family: Arial;
	border: 2upx solid rgba(255, 255, 255, 0);
}
</style>
