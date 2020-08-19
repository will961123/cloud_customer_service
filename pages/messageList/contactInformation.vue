<template>
	<view class="contactInformationView">
		<view class="filterBox">
			<view class="filterBoxBg">
				<view class="filterBoxContet"><text @click="back" class="cuIcon cuIcon-back"></text></view>
			</view>
		</view>
		<view class="px-50">
			<view class="userHead"><image src="/static/logo.png" mode="aspectFill"></image></view>
			<view class="userInfo flex align-center justify-between">
				<view>
					<view class="name">常女士</view>
					<view class="phone">手机号：12345646546</view>
				</view>
				<button class="btn cu-btn">特别关注</button>
			</view>
			<view class="detailBox">
				<view class="item flex align-center">
					<view class="label">所在地</view>
					<view class="value">北京-朝阳区</view>
				</view>
				<view class="item flex align-center">
					<view class="label">生日</view>
					<view class="value">1990-04</view>
				</view>
				<view class="item flex align-center">
					<view class="label">好友来源</view>
					<view class="value">对方通过手机号添加</view>
				</view>
				<view class="item flex align-center">
					<view class="label">所在地</view>
					<view class="value">
						<text class="blue">2</text>
						个共同好友
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods:{
		back(){
			uni.navigateBack({
				delta:1
			})
		},
	}
};
</script>

<style lang="scss">
page {
	background-color: #fff;
}
.px-50 {
	padding: 0 50rpx;
}
.contactInformationView {
	min-height: 100vh;
	background-color: #fff;
	.filterBox {
		width: 100%;
		overflow: hidden;
		.filterBoxBg {
			position: relative;
			width: 100%;
			height: 174px;
			text-align: center;
			line-height: 50px;
			z-index: 999;
			&::after {
				width: 140%;
				height: 174px;
				position: absolute;
				left: -20%;
				top: 0;
				z-index: -1;
				content: '';
				border-radius: 0 0 50% 50%;
				background-image: url(../../static/logo.png);
				background-size: 80% auto;
				background-position: center;
				background-repeat: no-repeat;
				filter: blur(4px);
			}
			&::before {
				width: 140%;
				height: 174px;
				position: absolute;
				left: -20%;
				top: 0;
				z-index: -1;
				content: '';
				border-radius: 0 0 50% 50%;
				background-color: rgba(82, 107, 233, 0.8);
				background-size: cover;
				background-repeat: no-repeat;
				// filter: blur(4px);
				z-index: 2;
			}
			.filterBoxContet {
				position: absolute;
				z-index: 3;
				left: 50rpx;
				top: 28px;
				.cuIcon {
					font-size: 46rpx;
					color: #fff;
					font-weight: 700;
				}
			}
		}
	}
	.userHead {
		width: 160rpx;
		height: 160rpx;
		border-radius: 50%;
		border: 1px solid #fff;
		border-radius: 50%;
		overflow: hidden;
		margin-top: -90rpx;
		position: relative;
		z-index: 1000;
		& > image {
			width: 100%;
			height: 100%;
		}
	}
	.userInfo {
		.name {
			font-size: 46rpx;
			color: #000;
			margin-top: 10px;
			margin-bottom: 4px;
			font-weight: 700;
		}
		.phone {
			color: rgba(51, 51, 51, 1);
			font-size: 24rpx;
		}
		.btn {
			padding: 0;
			width: 132rpx;
			height: 60rpx;
			line-height: 60rpx;
			background: rgba(76, 100, 254, 1);
			box-shadow: 0px 2px 5px 0px rgba(92, 102, 162, 0.17), 0px 2px 7px 0px rgba(102, 114, 251, 0.6);
			border-radius: 14rpx;
			font-size: 24rpx;
			color: #fff;
		}
	}
	.detailBox {
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 4px 9px 0px rgba(143, 143, 143, 0.11);
		border-radius: 28rpx;
		border: 1px solid rgba(239, 243, 251, 1);
		padding: 0 44rpx;
		padding-top: 20px;
		margin-top: 20px;
		.item{
			margin-bottom: 20px;
			.label{
				width: 160rpx;
				font-size: 28rpx;
				color:rgba(153,153,153,1);
				font-weight: 700;
			}
			.value{
				font-size: 28rpx;
				color:#333;
				font-weight: 700;
				.blue{
					color: #546eea;
				}
			}
		}
	}
}
</style>
