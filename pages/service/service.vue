<template>
	<view class="serviceView">
		<view class="titleBox"><view class="tit">应用服务</view></view>
		<!-- <navigator url="./demo">demo</navigator> -->
<!-- 		<navigator url="./s1">subNVues</navigator> -->
		<view :style="{ height: menuBoxHeight }" id="menuBox" class="menuBox bg-white">
			<view class="menuType">云交付</view>
			<view style="margin-bottom: 30px;" class="menuList flex  ">
				<view v-for="(item, index) in menuList.type1" :key="index" class="item flex flex-direction align-center">
					<image :src="item.icon" mode="aspectFill"></image>
					<text>{{ item.name }}</text>
				</view>
			</view>
			
			<view class="menuType">云维保</view>
			<view class="menuList flex  ">
				<view v-for="(item, index) in menuList.type2" :key="index" class="item flex flex-direction align-center">
					<image :src="item.icon" mode="aspectFill"></image>
					<text>{{ item.name }}</text>
				</view>
			</view>
		</view>

		<willTabbar :nowTabIdx="2"></willTabbar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			menuBoxHeight: 'calc(100vh - 187.36px)',
			menuList: {
				type1: [
					{ icon: '/static/service_img1.png', path: '', name: '专项检查' },
					{ icon: '/static/service_img2.png', path: '', name: '分户验收' },
					{ icon: '/static/service_img3.png', path: '', name: '正式交付' },
					{ icon: '/static/service_img4.png', path: '', name: '交付预约' }
				],
				type2: [
					{ icon: '/static/service_img5.png', path: '', name: '报事报修' },
					{ icon: '/static/service_img6.png', path: '', name: '公区报修' },
					{ icon: '/static/service_img7.png', path: '', name: '工单管理' },
					{ icon: '/static/service_img8.png', path: '', name: '报事回访' },
					{ icon: '/static/service_img9.png', path: '', name: '活动管理' },
					{ icon: '/static/service_img10.png', path: '', name: '一档一户' },
					{ icon: '/static/service_img11.png', path: '', name: '公告通知' }
				]
			}
		};
	},
	onReady() {
		const query = uni.createSelectorQuery().in(this);
		query
			.select('#menuBox')
			.boundingClientRect(data => {
				let top = data.top.toFixed(2) + 'px';
				this.menuBoxHeight = 'calc(100vh - ' + top + ')';
			})
			.exec();
	},
	methods: {}
};
</script>

<style scoped lang="scss">
.serviceView {
	background-color: #4c64fe;
	// padding-bottom: 60px;
	.titleBox {
		padding: 40px 30px 0 30px;
		.tit {
			color: #fff;
			font-size: 25px;
			letter-spacing: 2px;
		}
	}
	.menuBox {
		// padding: 57px 60rpx 0px 60rpx;
		padding-top: 32px;
		border-radius: 35px 35px 0 0;
		margin-top: 24px;
		.menuType {
			margin-left: 50rpx;
			margin-bottom: 14px;
			color: #16123F;
			font-size: 16px;
			font-weight: 700;
		}
		.menuList {
			flex-wrap: wrap;
			.item {
				width: 25%;
				margin-bottom: 16px;
				image {
					width: 100rpx;
					height: 100rpx;
				}
				text {
					font-size: 12px;
					color: #16123f;
					margin-top: 8px;
				}
			}
		}
	}
}
</style>
