<!-- 页面基本结构 -->
<template>
	<view class="page">
		<view class="conatiner" v-if="isok">




		<!--  数据加载状态 -->
			<uni-load-more :status="status"></uni-load-more>
		</view>
		
		<view class="container-loading" v-else>
			<image src="../../static/loading.gif"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isok:false,
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
