<!--  预约服务 -->

<template>
	<view class="page">
		<view class="container" v-if="isok">
			<!--服务时间 -->
			<!-- 		<uni-popup ref="time" type="bottom" maskClick="false" custom="true" animation="true">
				
			</uni-popup> -->

<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
                        <view class="uni-input">{{date}}</view>
                    </picker>
<!-- 			<w-picker
				mode="limit"
				dayStep="3"
				startHour="8"
				endHour="20"
				:defaultVal="[0, 0,0]"
				:current="true"
				ref="picker"
				themeColor="#999999"
			></w-picker> -->
			<!-- 宠物信息填写 -->
			<uni-popup ref="pet" type="bottom"></uni-popup>
			<!-- 主人信息填写 -->
			<uni-popup ref="user" type="bottom"></uni-popup>

			<!--蒙层 -->
			<view class="layer" v-if="lay"></view>
		</view>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import wPicker from '../../../components/w-picker/w-picker.vue';
let _self;
export default {
	data() {
		return {
			isok: true,
			lay: false
		};
	},
	components: {
		uniPopup,
		wPicker
	},
	onLoad() {
		_self = this;
		uni.login({
			success: e => {
				console.log(e);
			}
		});

		uni.checkSession({
			success: e => {
				console.log(e);
			}
		});
	},
	onShow() {
		_self.openTimePop();
	},
	methods: {
		openTimePop() {
			_self.$refs.time.show()

			// this.$refs.picker.show();
		}
	}
};
</script>

<style lang="less">
.layer {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
    background: rgba(0,0,0,.6);
	z-index: 10;
	opacity: 0.5;
}
</style>
