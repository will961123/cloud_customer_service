<template>
	<view class="myView">
		<view class="px-50">
			<view class="userBox flex justify-between align-center">
				<view class="flex align-center">
					<image class="head" src="/static/logo.png" mode="aspectFill"></image>
					<view class="userInfo">
						<view class="name">张天成</view>
						<view class="id">youmaztc1234</view>
					</view>
				</view>
				<button class="btn cu-btn">退出登录</button>
			</view>

			<view class="statisticsBox flex align-center justify-around">
				<view class="item">
					<view class="number">120</view>
					<view class="desc">接待问题数</view>
				</view>
				<view class="item">
					<view class="number blue">50%</view>
					<view class="desc">按时回复率</view>
				</view>
				<view class="item">
					<view class="number">92%</view>
					<view class="desc">好评率</view>
				</view>
			</view>

			<view class="menuList">
				<view v-for="(item, index) in metuList" :key="index" class="item flex align-center justify-between">
					<view class="flex align-center">
						<image :class="index === 2 ? 'icon3' : ''" class="icon" :src="item.icon" mode="aspectFill"></image>
						<text class="name">{{ item.name }}</text>
					</view>
					<text class="cuIcon cuIcon-right"></text>
				</view>
			</view>
		</view>

		<willTabbar :nowTabIdx="3"></willTabbar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			metuList: [{ icon: '/static/my_pic1.png', name: '清除缓存' }, { icon: '/static/my_pic2.png', name: '检查更新' }, { icon: '/static/my_pic3.png', name: '关于我们' }]
		};
	}
};
</script>

<style lang="scss">
.myView {
	min-height: 100vh;
	background-color: #fff;
	.px-50 {
		padding: 0 50rpx;
	}
	.userBox {
		padding-top: 42px;
		.head {
			width: 140rpx;
			height: 140rpx;
			border-radius: 50%;
		}
		.userInfo {
			margin-left: 40rpx;
			.name {
				color: #333;
				font-size: 20px;
				font-weight: 700;
				margin-bottom: 4px;
			}
			.id {
				color: #707070;
				font-size: 12px;
			}
		}
		.btn {
			padding: 0;
			width: 172rpx;
			height: 32px;
			line-height: 32px;
			text-align: center;
			background: rgba(239, 243, 251, 1);
			border-radius: 8px;
			color: #16123f;
			font-size: 12px;
			font-weight: 700;
		}
	}
	.statisticsBox {
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 4px 9px 0px rgba(143, 143, 143, 0.11);
		border-radius: 14px;
		border: 1px solid rgba(239, 243, 251, 1);
		padding: 20px 0;
		margin-top: 24px;
		margin-bottom: 46px;
		.item {
			text-align: center;
			.number {
				font-family: DINAlternate-Bold, DINAlternate;
				font-weight: 700;
				font-size: 25px;
				color: #16123f;
				margin-bottom: 5px;
				&.blue {
					color: #4c64fe;
				}
			}
			.desc {
				color: #aaaaaa;
				font-size: 11px;
			}
		}
	}
	.menuList {
		.item {
			margin-bottom: 30px;
			.icon {
				width: 44rpx;
				height: 44rpx;
				&.icon3 {
					width: 40rpx;
					height: 40rpx;
				}
			}
			.name {
				font-size: 26rpx;
				color: #333;
				margin-left: 26rpx;
			}
			.cuIcon {
				margin-right: 20rpx;
				color: #d5d4dd;
				font-size: 12px;
			}
		}
	}
}
</style>
