<template>
	<view class="messageListView bg-white">
		<view class="topBox flex align-end justify-between">
			<view class="messageType flex align-end">
				<view @click="messageType = 0" :class="messageType === 0 ? 'select' : ''" class="item">消息</view>
				<view @click="messageType = 1" :class="messageType === 1 ? 'select' : ''" class="item">未读</view>
			</view>
			<text class="cuIcon cuIcon-search"></text>
		</view>
		<view class="messageList">
			<view @click="gotoChat" class="item flex  ">
				<image class="head" src="/static/logo.png" mode="aspectFill"></image>
				<view class="messageInfo">
					<view class="nameBox flex align-center justify-between">
						<view class="name">张先生</view>
						<view class="time">3分种前</view>
					</view>
					<view class="message flex align-center justify-between"><text>这样啊，知道啦谢谢</text></view>
				</view>
			</view>
			<view @click="gotoChat" class="item flex  ">
				<image class="head" src="/static/logo.png" mode="aspectFill"></image>
				<view class="messageInfo">
					<view class="nameBox flex align-center justify-between">
						<view class="name">张先生</view>
						<view class="time">3分种前</view>
					</view>
					<view class="message flex align-center justify-between">
						<text>这样啊，知道啦谢谢</text>
						<view class="label">2</view>
					</view>
				</view>
			</view>
			<view @click="gotoChat" class="item group flex  ">
				<view class="groupHead p5">
					<image class="img1" src="/static/logo.png" mode="aspectFill"></image>
					<image class="img2" src="/static/logo.png" mode="aspectFill"></image>
					<image class="img3" src="/static/logo.png" mode="aspectFill"></image>
					<image class="img4" src="/static/logo.png" mode="aspectFill"></image>
					<image class="img5" src="/static/logo.png" mode="aspectFill"></image>
				</view>
				<view class="messageInfo">
					<view class="nameBox flex align-center justify-between">
						<view class="name">这是一个群组</view>
						<view class="time">3分种前</view>
					</view>
					<view class="message flex align-center justify-between"><text>这样啊，知道啦谢谢</text></view>
				</view>
			</view>
		</view>

		<willTabbar :nowTabIdx="1"></willTabbar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			messageType: 0
		};
	},
	methods:{
		gotoChat(id,type){
			uni.navigateTo({
				url:"/pages/messageList/chat?id=1&type=2"
			})
		}
	}
};
</script>

<style lang="scss">
.messageListView {
	padding-bottom: 100px;
	min-height: 100vh;
	.topBox {
		padding: 24px 50rpx 0 50rpx;
		margin-bottom: 40px;
		.item {
			color: #c1c1c1;
			font-size: 16px;
			letter-spacing: 1px;
			margin-right: 40rpx;
			&.select {
				color: #333;
				font-size: 23px;
				letter-spacing: 1px;
				font-weight: 700;
			}
		}
		.cuIcon {
			font-size: 24px;
			color: #333;
		}
	}
	.messageList {
		padding-left: 50rpx;
		.item {
			margin-bottom: 16px;
			&.group {
				.groupHead {
					width: 100rpx;
					height: 100rpx;
					margin-right: 28rpx;
					position: relative;
					&.p5 {
						image {
							position: absolute;
							width: 48rpx;
							height: 48rpx;
							border-radius: 50%;
						}
						.img1 {
							top: 24rpx;
							left: 0;
						}
						.img2 {
							top: 0;
							left: 26rpx;
						}
						.img3 {
							top: 24rpx;
							right: 0;
							z-index: 2;
						}
						.img4 {
							bottom: 0;
							right: 13rpx;
						}
						.img5 {
							bottom: 0;
							left: 13rpx;
						}
					}
				}
			}
			.head {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				margin-right: 28rpx;
			}
			.messageInfo {
				flex: 1;
				padding-right: 32rpx;
				border-bottom: 1rpx solid #979797;
				.nameBox {
					.name {
						font-size: 16px;
						color: #333;
						margin-top: 4px;
					}
					.time {
						font-size: 12px;
						color: #c1c1c1;
					}
				}
				.message {
					color: #727272;
					font-size: 12px;
					margin-top: 12rpx;
					margin-bottom: 24rpx;
					.label {
						width: 28rpx;
						height: 28rpx;
						line-height: 28rp;
						text-align: center;
						border-radius: 50%;
						font-size: 9px;
						color: #fff;
						background-color: #ff5643;
					}
				}
			}
		}
	}
}
</style>
