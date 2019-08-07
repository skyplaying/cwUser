import http from '@/common/http/interface'

var provider = getprovider();
//  获取小程序应用端
function getprovider() {
	uni.getProvider({
		success: (res) => {
			return res
		}
	})
}

//反解析定位
export const analysisLocation = (obj) => {
	const latPoint = obj.latPoint;
	const lngPoint = obj.lngPoint;
	return http.request({
		url: 'common/location',
		data: {
			latPoint,
			lngPoint
		},
	})
}


//  获取用户的基本信息
export const getUserBaseInfo = () => {
	let user;
	// #ifndef MP-ALIPAY
	uni.getUserInfo({
		success(res) {
			// return res;	
			user = res.userInfo;
			uni.setStorageSync('user', user)
		}
	})
	// #endif

	//#ifdef MP-ALIPAY
	my.getAuthCode({
		scopes: 'auth_user,auth_base',
		success: (res) => {
			const authCode = res.authCode
			console.log(authCode)
			// 在成功回调中执行获取用户信息的方法
			// 		my.getOpenUserInfo({
			// 			success: (res) => {
			// 				console.log(res)
			// 				let userInfo = res// 以下方的报文格式解析两层 response
			// 				// return userInfo;
			// 			console.log(userInfo)
			// 			my.alert({
			// 				content:userInfo
			// 			})
			// 
			// 			}
			// 		});
			// 		
			uni.getUserInfo({
				success: (e) => {
					console.log(e.userInfo)
					uni.setStorageSync('user', e.userInfo)
				}
			})
		},
	});

	//#endif


}




















export default {
	analysisLocation: analysisLocation,
	getUserBaseInfo: getUserBaseInfo,
}
