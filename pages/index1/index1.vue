<template>
	<view class="page">
		<view class="conatiner" v-if="isok">
			<view class="mc-bg-white p15">
				<view class="mc-space-between mc-f14">
					<view class="icon-location mc-light-gray" @click="chooseCity">
						<text class="ml5 mc-black">{{city}}</text>
					</view>
					<view class="icon-scan mc-blue">
						<text class="ml5 mc-black" @click="img1">获取用户信息</text>
					</view>
				</view>
				<view class="banner mt15">
					<image src="../../static/banner.png" mode="widthFix"></image>
				</view>
			</view>
			<button @click="pay"> 支付</button>
			<button @click="toPing">跳转评论</button>

			<view>
				<mc-image-upload :limit="6"></mc-image-upload>
				<!--  属性  photoPath (图片文件路径数组) 从数据库获取h  enableDrag 能够拖动  severUrl 图片上传地址  formData 附带上传的数据 -->
			</view>

			<text>{{msg}}</text>

			<!-- 数据是否加载完 -->
			<!-- <uni-load-more :status="status"></uni-load-more> -->
			
			
		</view>

		<view class="container-loading" v-else>
			<image src="../../static/loading.gif"></image>
		</view>

	</view>
</template>

<script>
	let _self;
	import {
		mapActions
	} from 'vuex';

	import mcImageUpload from '../../components/mc-image-upload/mc-image-upload.vue';
	

	export default {
		data() {
			return {
				isok: true,
				provider: '',
				city: '',
				total: 0,
				status: "more",
				imgIndex: '',
				indicatorDots: false, //  是否显示面板指示点
				autoplay: true, // 是否自动切换
				circular: true, // 是否采用衔接滑动
				current: 0, // 当前所在页面的 index
				interval: 5000, // 自动切换时间间隔
				duration: 1000, // 滑动动画时长
				limit: 0,
				msg: '',
				photoPath: [],
				bannerList: [{
					img: 'http://image.qipinke.com/banner/banner180912.png',
					navType: 'navigateTo',
					jumpPath: '{ "url": "/pages/family/flow/flow" }',
				}, {
					img: 'http://image.qipinke.com/banner/banner_shs_20181030.png',
					navType: 'navigateToMiniProgram',
					navObj: '{ "appId": "2017082808428283","path": "pages/home/home" }',
				}, {
					img: 'http://image.qipinke.com/banner/banner180920.png',
					navType: 'navigateToMiniProgram',
					navObj: '{ "appId": "2018122562686742","path": "pages/index/index?originAppId=2017090608580011&newUserTemplate=20190104000000101476" }',
				}],
      
			}
		},
		onLoad() {
			let _self = this;

		},
		onShow() {


		},
		// 关闭页面
		onUnload() {
		},
		// 下拉刷新页面 （全局）
		onPullDownRefresh() {},

		//上拉加载 (查询新的列表数据添加到数组里)
		onReachBottom() {},

		components: {
			mcImageUpload,

		},
		methods: {
			// 获取当前城市 登录
			...mapActions(["getCity", "doLogin"]),

			getIndex(index) {
				console.log(index)
			},
			toPing() {
				uni.navigateTo({
					url: '../test/test'
				});
			},

			chooseCity() {
				//选择地理位置 ,进行导航
				uni.getLocation({
					type: 'gcj02',
					success: function(res) {
						console.log(res)

						if (res) {
							uni.openLocation({
								latitude: res.latitude,
								longitude: res.longitude,
								name: res.name,
								address: res.address,
								success: (data) => {
									console.log(data)
								}
							})
						}
					}
				});


			},
			img1() {
				_self = this;
				uni.login({
					success: (res) => {
						console.log(res)
						if (res.code) {
							let code = res.code
							_self.$http.request({
								url: '/api/login/getAlipayToken',
								type: 'POST',
								data: {
									code
								},
								success(res) {
									console.log(res)
									let userId = res.data.userId
									_self.$api.setStorageSync('userId', userId)

								}
							})

						}
					}
				})
				let ii = _self.$api.getAliUserInfo()
				console.log(ii)


			},
			pay() {
				_self = this;
				let msg = _self.$api.commonPayment()
				console.log(msg)
			}


		}
	}
</script>


<style>
	/* 列表 */
	.uni-list:after,
	.uni-list:before {
		height: 0;
	}

	.page {
		background: white;
	}

	/* 	.banner-img{
		height: 300upx;
	} */
	.addr {
		color: #BBBBBB;
	}

	.shopType {
		color: #848484;
	}

	.content {
		text-align: center;
		height: 400upx;
	}

	.banner {
		height: 300upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.listFont {
		font-size: 32upx;
		color: black;
	}

	.shop-distance {
		display: inline-block;
		color: #888888;
		position: absolute;
		right: 30upx;
	}

	.shopBox {
		background-color: white;
		padding: 30upx;
		width: 100%;
		display: flex;
		box-sizing: border-box;
	}

	.shopImage {
		width: 150upx;
		height: 140upx;
		border-radius: 10upx;
		overflow: hidden;
	}

	.shopInfo {
		margin-left: 30upx;
	}
</style>
