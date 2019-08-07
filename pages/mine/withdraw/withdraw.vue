<!--  提现 -->
<template>
	<view class="page">
		<view class="conatiner" v-if="isok">
			<!-- #ifdef MP-WEIXIN -->
				<button open-type='contact' class="online" id="on" @click="online">联系客服</button>
				<!-- <contact-button></contact-button> -->
			<!-- #endif -->
	</view>
	</view>
</template>

<script>
	let _self;
export default {
	data() {
		return {
			isok:true,
		}
	},
	onLoad() {
	_self=this
    _self.online()
	},
	methods: {
 // 打开页面即唤起客服
     online(){
		 
let query = wx.createSelectorQuery()
query=query.select("#on")
query.click;
 console.log(query)
	  // wx.createSelectorQuery().select('#on').click();
	},
	
	
	}
}
</script>

<style lang="less">
	// .online
</style>
