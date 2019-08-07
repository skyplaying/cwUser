<!-- 点击商家列表下单页面 -->
<template>
	<view class="page">
		<view class="container" v-if="isok">
			<view class="shopSwiperBox">
				<swiper style="" :indicator-dots="false" :autoplay="true" :circular="true" :interval="2000" :duration="2000">
					<block v-for="(item, index) in bannerList1" :key="index">
						<swiper-item>
							<view @click="getIndex(index)" class="Img"><image :src="item.img" style="330upx;width: 100%;" mode="widthFix" /></view>
						</swiper-item>
					</block>
				</swiper>
			</view>
			<view class="shopCard">
				<view class=""><image src="../../../static/index/huiyi.png" mode="aspectFit" class="shopLogo"></image></view>
				<view class="info">
					<text class="shopName">宠慕火化中心</text>
					<image src="../../../static/mine/rightGray.png" mode="aspectFit" class="toright"></image>
					<view class="rateBox">
						<image src="../../../static/shop/star.png" mode="aspectFit" class="star"></image>
						<text class="rateNum">4.5</text>
						<text class="goodEva">好评90%</text>
					</view>
					<view class="shopDes">
						宠慕宠物善终服务是广州市海珠区新港金穗动物医院的一个服务项目， 是广东周边地区最早成立，最专业，档次最高，服务条件最好的宠物
						火化殡葬善终服务。除了提供宠物善终服务，我们还提供宠物善后用品 的销售和定制。
					</view>
				</view>
			</view>

			<view class="contentBox ma_top60">
				<view class="petkgBox">
					<text class="deName">宠物重量</text>
					<text class="deNum">0-5kg</text>
				</view>
				<view class="">
					<text class="deName">预计价格</text>
					<text class="deNum">480元</text>
				</view>
				<!-- 运送方式 -->
				<view class="transType">
					<text :style="doorCss" @click="shopto">上门</text>
					<text :style="sendCss" @click="tosend">自送</text>
				</view>
			</view>

			<!--  上门接 -->
			<view class="contentBox" v-if="todoor">
				<view class="addrBox" @click="chooseLoaction">
					<text class="addrName">{{ address ? address : '田下金牛大厦' }}</text>
					<image src="../../../static/mine/rightGray.png" mode="aspectFit" class="toright"></image>
				</view>
				<view class="top50">
					<text class="doorNum">门牌号</text>
					<input class="doorNumInput" placeholder="输入门牌号" />
				</view>
				<view class="bottom90">
					<text class="cesuan">根据地图自驾模式距离测算</text>
					<text class="deNum">预计费用 ￥120</text>
				</view>
			</view>

			<!-- 自己送 -->
			<view class="contentBox shopBySelfBox" v-if="sendSelf">
				<image src="../../../static/index/yuyue.png" mode="aspectFit" class="shopLogo"></image>
				<view class="">
					<text class="shopName">宠木\n</text>
					<text class="shopAddress">田下金牛大厦</text>
				</view>
			</view>

			<view class="contentBox top90 ">
				<view class="deName">骨灰处理</view>
				<view class="">
					<text class="deName">邮寄到家</text>
					<image class="radio" :src="btnImg1" @click="(isPostHome = !isPostHome), (btnImg1 = isPostHome ? bc1 : bc2)"></image>
				</view>
				<!--  选择邮寄 地址 -->
				<view class="" v-if="isPostHome">
					<text class="deName">地址</text>
					<text class="deName ml65">深圳市南山区</text>
					<text class="deName upbtn" @click="upMailAdrr">修改</text>
				</view>
				<!-- 门牌号 -->
				<view class="" v-if="isPostHome">
					<text class="deName">门牌号</text>
					<input class="deName input" type="text" value="" placeholder="详细地址，例：16号6层201" />
					<text class="deName upbtn" @click="upDoorNo">修改</text>
				</view>
				<view class="" @click="dealClick">
					<text class="deName">火化中心代处理</text>
					<image class="radio" :src="btnImg2" @click=""></image>
				</view>
				<!--  山葬海葬 展示框 -->
				<view class="dealShowBox" style="height: 250upx;" v-if="isDaili && dealType">
					<image :src="dealImg" mode="aspectFit" class="image"></image>
					<text>{{ dealName }}\n</text>
					<text>免费</text>
				</view>

				<view class="" @click="(isJiCun = !isJiCun), (btnImg3 = isJiCun ? bc1 : bc2)">
					<text class="deName">骨灰寄存</text>
					<text class="deName tr">1200元/每年</text>
					<image class="radio" :src="btnImg3"></image>
				</view>
				<view class="deName"><text>附加服务</text></view>
				<view class="" @click="ritePopShow">
					<text class="deName">宠物仪式</text>
					<image class="radio" :src="btnImg4"></image>
				</view>
				<!--  仪式选择完成 -->
				<view class="dealShowBox" style="height: 250upx;" v-if="isYishi && riteType">
					<image :src="riteImg" mode="aspectFit" class="image"></image>
					<text>{{ riteName }}\n</text>
					<text>免费</text>
				</view>
				<view class="" @click="(isHezi = !isHezi), (btnImg5 = isHezi ? bc1 : bc2)">
					<text class="deName">精美骨灰盒</text>
					<image class="radio" :src="btnImg5"></image>
				</view>
				<view class=""><text class="deName">宠物善后用品</text></view>
			</view>

			<!--宠物善后用品 -->
			<view class="otherBox">
				<view class="">
					<image src="../../../static/index/huiyi.png" mode="aspectFit" class="otherImg"></image>
					<text class="t1">纪念卡片</text>
					<text class="t2">有温度的纪念卡片，打印您与爱宠的回忆。</text>
					<text class="pr1">￥10</text>
					<uni-number class="numberBtn"></uni-number>

					<!-- <button class="buyBtn">购买</button> -->
				</view>
				<view class="">
					<image src="../../../static/index/huiyi.png" mode="aspectFit" class="otherImg"></image>
					<text class="t1">宠物墓地</text>
					<text class="t2">有温度的纪念卡片，打印您与爱宠的回忆。</text>
					<text class="pr1">￥9000/年</text>
					<uni-number class="numberBtn"></uni-number>

					<!-- <button class="buyBtn">购买</button> -->
				</view>
			</view>
			<view class="showMore" @click="showMore">查看更多</view>

			<!--  底部提交订单按钮 -->
			<view class="submitBox">
				<image src="../../../static/shop/gouwuche.png" mode="aspectFit" class="shoppCart"></image>
				<view class="shoppNum">2</view>
				<text class="totalPay">合计：3780</text>
				<text class="submitText">提交订单</text>
			</view>
			<view class="gai"></view>

			<!--  弹框区域 -->
			<!--  火化处理方式 -->
			<uni-popup type="bottom" ref="deal" class="dealTypeBox">
				<view class="dealContent">
					<view class="d1">
						<image src="../../../static/shop/mountainType.png" mode="aspectFill" class="typeImg"></image>
						<view class="tit ">山葬</view>
						<view class=" des">将收集好的宠物骨灰，统一葬在特定的山上</view>
						<view class="addr">龙岗区挂宝山</view>
						<view class="dealBtn" @click="sureDealType(1)">确认</view>
					</view>
					<view class="d1">
						<image src="../../../static/shop/seaType.jpg" mode="aspectFill" class="typeImg"></image>
						<view class="tit">山葬</view>
						<view class="des ">将收集好的宠物骨灰，统一葬在特定的山上</view>
						<view class="addr">龙岗区挂宝山</view>
						<view class="dealBtn" @click="sureDealType(2)">确认</view>
					</view>
				</view>
			</uni-popup>
			<!--  仪式选择弹框 -->
			<uni-popup type="bottom" ref="rite" class="ritePop">
						<view class="dealContent">
					<view class="d1">
						<image src="../../../static/shop/chinaRite.png" mode="aspectFill" class="typeImg"></image>
						<view class="tit ">中式</view>
						<view class="des">暂定</view>
						<view class="addr">暂定</view>
						<view class="dealBtn" @click="sureRiteType(1)">确认</view>
					</view>
					<view class="d1">
						<image src="../../../static/shop/chinaRite.png" mode="aspectFill" class="typeImg"></image>
						<view class="tit">西式</view>
						<view class="des">暂定</view>
						<view class="addr">暂定</view>
						<view class="dealBtn" @click="sureRiteType(2)">确认</view>
					</view>
				</view>
		
			</uni-popup>
			
			<!-- <uni-number></uni-number> -->
		</view>
	</view>
</template>

<script>
let _self;
import uniPopup from '../../../components/uni-popup/uni-popup.vue';
import uniNumber from '../../../components/uni-number-box/uni-number-box.vue';
export default {
	data() {
		return {
			isok: true,
			isPostHome: false,
			isHezi: false,
			isDaili: false,
			isJiCun: false,
			isYishi: false,
			address: '',
			btnImg1: '',
			btnImg2: '',
			btnImg3: '',
			btnImg4: '',
			btnImg5: '',
			bc1: '../../../static/shop/clicked.png',
			bc2: '../../../static/shop/noClick.png',
			doorCss: '',
			sendCss: 'background-color: #f2f2f2;',
			todoor: false,
			sendSelf: false,
			bm1: 'background-color: #f2f2f2;',
			dealType: '', //山葬或海葬
			dealName: '',
			dealImg: '',
			riteType:'', //仪式类型
			riteImg:'',//仪式图片
			riteName:'', //仪式名称
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
	},
	//  打开页面加载
	onLoad() {
		_self = this;
		_self.$refs.deal.open();
	},
	onShow() {
	},
	components: {
		uniPopup,
		uniNumber
	},
	methods: {
		getShopInfo() {
			// 查询商家信息
			uni.setNavigationBarTitle({
				title: ''
			});
		},
		showMore() {
			uni.showLoading({
				title: '加载中'
			});
			//如果有数据即中断加载
		},
		ritePopShow(){
			_self.isYishi=!_self.isYishi
			_self.btnImg4=_self.isYishi?_self.bc1:_self.bc2
			if(_self.isYishi){
				_self.$refs.rite.open()
			}
		},
		postHome() {
			_self.isPostHome = !_self.isPostHome;
			if (_self.isPostHome) {
				_self.btnImg1 = _self.bc1;
			} else {
				_self.btnImg1 = _self.bc2;
			}

			console.log(_self.isPostHome);
		},
		daili() {
			_self.isDaili = !_self.isDaili;
		},
		jicun() {
			_self.isJiCun = !_self.isJiCun;
		},
		yishi() {
			_self.isYishi = !_self.isYishi;
		},
		hezi() {
			_self.isHezi = !_self.isHezi;
		},
		shopto() {
			_self.todoor = !_self.todoor;
			_self.cssChange();
		},
		tosend() {
			_self.sendSelf = !_self.sendSelf;
			_self.cssChange();
		},
		cssChange() {
			if (_self.todoor) {
				_self.sendCss = _self.bm1;
				_self.doorCss = '';
			}
			if (_self.sendSelf) {
				_self.doorCss = _self.bm1;
				_self.sendCss = '';
			}
		},
		chooseLoaction() {
			uni.chooseLocation({
				success(e) {
					console.log(e);
				}
			});
		},
		dealClick() {
			_self.isDaili = !_self.isDaili;
			_self.btnImg2 = _self.isDaili ? _self.bc1 : _self.bc2;
			if (_self.isDaili) {
				this.$refs.deal.open();
			}
		},
		//  确认海葬还是山葬
		sureDealType(tp) {
			this.$refs.deal.close();
			if(!_self.isDaili){
				_self.dealType=0
				tp=''
			}else{
				_self.dealType = tp;
			}
			if (tp == 1) {
				_self.dealName = '山葬';
				_self.dealImg = '../../../static/shop/mountainType.png';
			} else if (tp == 2) {
				_self.dealName = '海葬';
				_self.dealImg = '../../../static/shop/seaType.jpg';
			}
		},
		//确定仪式类t型
		sureRiteType(tt){
			_self.$refs.rite.close()
			if(!_self.isYishi){
				_self.riteType=0
				tt=''
			}else{
				_self.riteType=tt
			}
			if(tt==1){
				_self.riteImg='/static/shop/chinaRite.png'
				_self.riteName='中式'
			}else if(tt==2){
				_self.riteImg='/static/shop/chinaRite.png'; //暂时没图
				_self.riteName='欧式'
			}
		},
		test() {
			_self.$http.request({
				url: '/api/user/test',
				data: {
					data: 'eIw3nIMjeYF1X1s09Aivyu0YmKe5CtfNx/+zfcNHldbiCKjTlr3t2eyXudq9UcdQax8v7fs/dVJMbM3wts5Etw=='
				},
				success(e) {
					console.log(e);
				}
			});
		}
	}
};
</script>

<style lang="less">
.contentBox > view {
	height: 90upx;
	position: relative;
}
//  选择
.dealShowBox {
	width: 232upx;
	height: 232upx;
	border-radius: 10upx;
	text-align: center;
	border: 2upx solid rgba(14, 94, 86, 1);
	margin-bottom: 30upx;
	margin-top: -20upx;
	.image {
		margin: 16upx 28upx;
		width: 172upx;
		height: 114upx;
		border-radius: 10upx;
	}
}
.dealContent {
	width: 100%;
	display: flex;
	height: 600upx;
	.dealBtn {
		width: 240upx;
		height: 64upx;
		line-height: 64upx;
		border-radius: 40upx;
		background-color: rgba(168, 216, 185, 1);
		color: rgba(14, 94, 86, 1);
		font-size: 28upx;
		text-align: center;
		font-family: Arial;
		border: 2upx solid rgba(255, 255, 255, 0);
		margin-left: 66upx;
		margin-top: 22upx;
	}
}

.d1 {
	height: 488upx;
	flex: 1;
	width: 50%;
	text-align: center;
	border: 2upx solid rgba(255, 255, 255, 0);
	// flex-direction: row;
	.tit {
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		font-family: Arial-regular;
		margin-top: 12upx;
	}
	.des {
		color: rgba(16, 16, 16, 1);
		font-size: 24upx;
		text-align: left;
		font-family: Arial-regular;
		margin-top: 18upx;
		margin-left: 34upx;
		width: 320upx;
	}
	.addr {
		font-size: 24upx;
		margin-top: 14upx;
	}
}

.typeImg {
	margin-left: 20upx;
	margin-top: 28upx;
	width: 342upx;
	height: 206upx;
	border-radius: 10upx 10upx 0upx 0upx;
}

.Img {
	height: 328upx;
	width: 100%;
}
.btnImg {
	background: url(../../../static/shop/clicked.png) no-repeat;
}
.ml65 {
	margin-left: 130upx;
}
.upbtn {
	position: absolute;
	right: 30upx;
}
.uni-numbox {
	// margin-left: 60upx;
	margin-top: 20upx;
}

.shopBySelfBox {
	display: flex;
	.shopLogo {
		width: 130upx;
		height: 130upx;
		vertical-align: middle;
	}
	.shopName {
		font-size: 28upx;
		padding: 30upx;
	}
	.shopAddress {
		font-size: 28upx;
		padding: 30upx;
		position: relative;
		top: 20upx;
	}
}
.input {
	display: inline-block;
	vertical-align: middle;
	width: 350upx;
	margin-left: 50upx;
}
.shopSwiperBox {
	width: 100%;
	height: 328upx;
}
.checkBox {
	border-radius: 50%;
}
.checkBox:hover {
	background-color: #007aff;
	color: white;
}
.top50 {
	margin-top: 50upx;
}
.top90 {
	margin-top: 90upx;
}
.bottom90 {
	margin-bottom: 90upx;
}
.ma_top60 {
	margin-top: -60upx;
}
.tr {
}
.gai {
	width: 100%;
	height: 20upx;
	position: fixed;
	bottom: 0;
	background: white;
}
.shoppCart {
	margin-left: 60upx;
	width: 34upx;
	height: 38upx;
	vertical-align: middle;
}
.submitBox {
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

	.submitText {
		margin-left: 260upx;
	}
	.shoppNum {
		position: relative;
		top: -20upx;
		left: -6upx;
		width: 24upx;
		height: 24upx;
		line-height: 24upx;
		background-color: rgba(36, 147, 110, 1);
		color: rgba(251, 251, 251, 1);
		font-size: 24upx;
		text-align: center;
		font-family: Arial;
		border: 2upx solid rgba(255, 255, 255, 0);
		border-radius: 50%;
		display: inline-block;
	}
}

.radio {
	position: absolute;
	right: 40upx;
	width: 40upx;
	height: 40upx;
	background: url('../../../static/shop/noClick.png') no-repeat;
	vertical-align: middle;
	background-size: cover;
}

.showMore {
	// width:100%;
	// height: 40upx;
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	text-align: center;
	font-family: PingFangSC-regular;
	margin-top: 30upx;
	margin-bottom: 250upx;
	display: block;
}
.otherBox {
	display: flex;
	widows: 710upx;
	margin-left: 20upx;
	.otherImg {
		width: 350upx;
		height: 290upx;
		border-radius: 10upx 10upx 0upx 0upx;
	}
	.t1 {
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: center;
		font-family: Arial-regular;
		display: block;
		margin-top: 30upx;
	}
	.t2 {
		width: 320upx;
		height: 95upx;
		display: block;
		color: rgba(153, 153, 153, 1);
		font-size: 24upx;
		text-align: left;
		font-family: Arial-regular;
		margin-top: 16upx;
	}
	.pr1 {
		display: block;
		color: rgba(16, 16, 16, 1);
		font-size: 32upx;
		text-align: center;
		font-family: Arial-regular;
	}
	.buyBtn {
		margin-left: 52upx;
		width: 238upx;
		height: 64upx;
		line-height: 64upx;
		border-radius: 40upx;
		background-color: rgba(168, 216, 185, 1);
		color: rgba(36, 147, 110, 1);
		font-size: 28upx;
		text-align: center;
		font-family: Arial;
		border: 2upx solid rgba(255, 255, 255, 0);
		margin-top: 16upx;
	}
}
.doorNum {
	height: 34upx;
	color: rgba(51, 51, 51, 1);
	font-size: 24upx;
	text-align: left;
	font-family: PingFangSC-regular;
}
.doorNumInput {
	display: inline-block;
	margin-left: 75upx;
	height: 40upx;
	width: 200upx;
	color: rgba(153, 153, 153, 1);
	font-size: 28upx;
	text-align: left;
}
.deName {
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	text-align: left;
	font-family: PingFangSC-regular;
}
.addrBox {
	position: relative;
	.addrName {
		color: rgba(16, 16, 16, 1);
		font-size: 28upx;
		text-align: left;
		font-family: PingFangSC-regular;
		margin-top: 29upx;
		display: inline-block;
	}
}
.deNum {
	position: absolute;
	right: 50upx;
	color: rgba(16, 16, 16, 1);
	font-size: 28upx;
	text-align: left;
	font-family: PingFangSC-regular;
	display: inline-block;
}
.toright {
	position: absolute;
	right: 35upx;
	top: 32upx;
	width: 36upx;
	height: 36upx;
	vertical-align: middle;
}
.star {
	width: 32upx;
	height: 30upx;
}

.contentBox {
	margin-left: 44upx;
	// margin-top: -60upx;
	width: 660upx;
	.cesuan {
		height: 34upx;
		color: rgba(153, 153, 153, 1);
		font-size: 24upx;
		text-align: left;
		font-family: PingFangSC-regular;
		display: inline-block;
		vertical-align: middle;
	}
}

.transType {
	// margin-top: 30upx;
	position: relative;
	left: -20upx;
	margin-bottom: 50upx;
	text {
		// left: 10px;
		width: 180upx;
		height: 90upx;
		line-height: 90upx;
		background-color: rgba(255, 255, 255, 1);
		text-align: center;
		border: 2upx solid rgba(255, 255, 255, 0);
		display: inline-block;
	}

	// text:hover {
	// 	background-color: #f2f2f2;
	// }
}
.shopCard {
	margin-left: 20upx;
	width: 710upx;
	border-radius: 10upx;
	background-color: rgba(255, 255, 255, 1);
	box-shadow: 0upx 0upx 16upx 4upx rgba(255, 255, 255, 0);
	border: 2upx solid rgba(255, 255, 255, 0);
	position: relative;
	top: -110upx;
	z-index: 20;
	display: flex;
	.shopLogo {
		margin-left: 24upx;
		margin-top: 20upx;
		width: 47px;
		height: 43px;
		border-radius: 5px;
	}
	.info {
		width: 550upx;
		height: auto;
		margin-left: 20upx;
		margin-top: 16upx;
		.shopDes {
			width: 502upx;
			color: rgba(153, 153, 153, 1);
			font-size: 24upx;
			text-align: left;
			font-family: PingFangSC-regular;
			margin-top: 18upx;
			line-height: 40upx;
		}

		.shopName {
			height: 40upx;
			color: rgba(16, 16, 16, 1);
			font-size: 28upx;
			text-align: left;
			font-family: PingFangSC-regular;
		}
		.rateBox {
			font-size: 24upx;
			text-align: left;
			font-family: PingFangSC-regular;
			color: rgba(16, 16, 16, 1);
			margin-top: 10upx;
		}
		.rateNum {
			margin-left: 8upx;
		}
		.goodEva {
			margin-left: 68upx;
			height: 34upx;
		}
	}
}
</style>
