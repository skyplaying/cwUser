<template>
	<view class="page">
		<view class="container">
			<!-- 搜索条-开始 -->
			<view class="navbar">
				<view class="navbar-search">
					<view class="navbar-search-input">
						<input placeholder="搜索宠物/地区/关键词等" @input="inputTyping" :value="petVarietyName" onConfirm="searchconfirm" />
						<view class="weui-icon-clear" v-if="petVarietyName.length > 0" @click="clearInput"><icon type="cancel" size="14"></icon></view>
					</view>
				</view>
			</view>
			<!-- 搜索条-结束 -->
			<view class="bgwh" v-if="petVarietyName.length > 0">
				<block v-for="(item, index) in varietyList" :key="petCategoryId">
					<view class="weui-select" @click="selectVariety" :data-index="index">
						<view>{{ item.petVarietyName }}</view>
					</view>
				</block>
			</view>
			<view class="fss" v-else>
				<view class="left-box">
					<block v-for="(item, index) in categoryList" :key="petCategoryId">
						<view class="p10-15 bgwh" @click="selectCategory" :data-id="item.petCategoryId">
							<view :class="petCategoryId == item.petCategoryId ? 'gor' : ''">{{ item.categoryName }}</view>
						</view>
					</block>
				</view>
				<view class="right-box">
					<block v-for="(item, index) in varietyList" :key="petCategoryId">
						<view class="weui-select bgwh" @click="selectVariety" :data-index="index">
							<view>{{ item.petVarietyName }}</view>
						</view>
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
let that;
export default {
	data() {
		return {
			
		};
	},
	onLoad(options) {
		that = this;
		// key = options.key || 'petVariety';
		petCategoryId = options.petCategoryId || null;
		that.queryCategoryList();
	},

	onUnload() {
		// 页面卸载时还原页面的全局变量（因为全局变量会保存，再次打开该页面时会造成一些数据错误）
		(key = undefined), (petCategoryId = undefined);
	},
	methods: {
		// 获取宠物类别
		queryCategoryList() {
			const that = this;
			uni.showNavigationBarLoading()
			mcdj.queryCategoryList({
				success(categoryList) {
					petCategoryId = petCategoryId ? petCategoryId : categoryList[0].petCategoryId;
					that.setData({ categoryList, petCategoryId });
					uni.hideNavigationBarLoading()
					that.queryVarietyList();
				}
			});
		},

		// 获取宠物品种
		queryVarietyList() {
			const that = this;
			const petVarietyName = that.data.petVarietyName;
			const petCategoryId = petVarietyName ? null : that.data.petCategoryId;
			uni.showNavigationBarLoading()
			mcdj.queryByPetVarietyList({
				petCategoryId,
				petVarietyName,
				success(list) {
					that.setData({ varietyList: list });
					my.hideNavigationBarLoading();
				}
			});
		},

		// 选中类别
		selectCategory(e) {
			const petCategoryId = e.currentTarget.dataset.id;
			this.setData({ petCategoryId });
			this.queryVarietyList();
		},

		// 删除输入的内容
		clearInput() {
			this.setData({ petVarietyName: '' });
			const petCategoryId = this.data.petCategoryId;
			this.setData({ petCategoryId });
			this.queryVarietyList();
		},

		// 输入搜索内容
		inputTyping(e) {
			that.petVarietyName= e.detail.value
			that.queryVarietyList();
		},

		// 选中品种
		selectVariety(e) {
			const {
				currentTarget: {
					dataset: { index }
				}
			} = e;
			const petVariety = this.data.varietyList[index];
			uni.setStorageSync(key, petVariety);
			uni.navigateBack({})
				
			
		}
	}
};
</script>

<style lang="less">
.navbar {
	background-color: #f6ca80;
}
.navbar-search-btn {
	color: white;
}

.left-box {
	width: 250upx;
	text-align: center;
	height: 100%;
	flex: none;
	color: #888;
}

.right-box {
	width: 500upx;
	text-align: left;
	height: 100%;
	flex: none;
}
</style>
