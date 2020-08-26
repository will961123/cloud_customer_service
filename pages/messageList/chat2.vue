<template>
	<view class="chatView">
		<view class="backBox flex align-center justify-between">
			<view class="back">
				<text @click="back" style="margin-right: 4px;" class="cuIcon cuIcon-back"></text>
				张先生
			</view>
			<view @click="gotoInfomation" class="cuIcon cuIcon-more"></view>
		</view>

		<view id="chatContent" class="chatContent">
			<view class="message message-left message-text flex flex-wrap">
				<image class="head" src="/static/logo.png" mode="aspectFill"></image>
				<view style="flex: 1;margin-top: 20rpx;" class="flex align-center">
					<view class="message-content">你好，请问怎么合作？</view>
					<view class="message-time">15:01</view>
				</view>
			</view>

			<view class="message message-right message-text  flex flex-wrap ">
				<view style="flex: 1;margin-top: 20rpx;" class="flex align-center justify-end">
					<view class="message-time">15:01</view>
					<view class="message-content">你好，请问怎么合作？</view>
				</view>
				<image class="head" src="/static/logo.png" mode="aspectFill"></image>
			</view>

			<view class="message message-left message-text flex flex-wrap">
				<image class="head" src="/static/logo.png" mode="aspectFill"></image>
				<view style="flex: 1;margin-top: 20rpx;" class="flex align-center">
					<view class="message-content">
						<view class="emoji"><image src="/static/sleeping-face_1f634.png" mode="aspectFill"></image></view>
					</view>
					<view class="message-time">15:01</view>
				</view>
			</view>
			<view class="message message-right message-audio  flex flex-wrap ">
				<view style="flex: 1;margin-top: 20rpx;" class="flex align-center justify-end">
					<view class="message-time">15:01</view>
					<view class="message-content">
						<view class="audio">
							<audio src=""></audio>
							<view class="audioInfo flex align-center justify-end">
								<text>60"</text>
								<image src="/static/chat_pic4.png" mode="aspectFill"></image>
							</view>
						</view>
					</view>
				</view>
				<image class="head" src="/static/logo.png" mode="aspectFill"></image>
			</view>

			<view class="message message-right message-emoji  flex flex-wrap ">
				<view style="flex: 1;margin-top: 20rpx;" class="flex align-center justify-end">
					<view class="message-time">15:01</view>
					<view class="message-content">
						<view class="emoji"><image src="/static/smiling-face-with-open-mouth-and-cold-sweat_1f605.png" mode="aspectFill"></image></view>
					</view>
				</view>
				<image class="head" src="/static/logo.png" mode="aspectFill"></image>
			</view>

			<view class="message message-right message-image  flex flex-wrap ">
				<view style="flex: 1;margin-top: 20rpx;" class="flex align-center justify-end">
					<view class="message-time">15:01</view>
					<view class="message-content">
						<view class="image"><image src="/static/message-image1.jpg" mode="widthFix"></image></view>
					</view>
				</view>
				<image class="head" src="/static/logo.png" mode="aspectFill"></image>
			</view>

			<view id="msg1" class="message message-right message-video  flex flex-wrap ">
				<view style="flex: 1;margin-top: 20rpx;" class="flex align-center justify-end">
					<view class="message-time">15:01</view>
					<view class="message-content">
						<view class="video">
							<video
								:show-center-play-btn="true"
								:controls="false"
								:show-play-btn="false"
								objectFit="cover"
								src="https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-02.mp4"
							></video>
						</view>
					</view>
				</view>
				<image class="head" src="/static/logo.png" mode="aspectFill"></image>
			</view>

			<view class="message message-right message-map  flex flex-wrap ">
				<view style="flex: 1;margin-top: 20rpx;" class="flex align-center justify-end">
					<view class="message-time">15:01</view>
					<view class="message-content">
						<view class="map">
							<view class="mapCover">
								<view class="tit">天河广场</view>
								<view class="desc">广东省某某详细地址</view>
							</view>
							<view class="mapBg"></view>
						</view>
					</view>
				</view>
				<image class="head" src="/static/logo.png" mode="aspectFill"></image>
			</view>
		</view>

		<!-- <view style="display: none;"   id="bottomSendMessageMenu" class="bottomSendMessageMenu bg-white"> 
			<view class="content type-send flex align-center">
				<image v-show="menuType !== 'audio'" @click="changeAudioType(true)" class="microphone" src="/static/chat_pic1.png" mode="aspectFill"></image>
				<image v-show="menuType === 'audio'" @click="changeAudioType(false)" class="keyBoard" src="/static/chat_pic10.png" mode="aspectFill"></image>
				<view class="iptBox">
					<input v-show="menuType !== 'audio'" @blur="changeFocus(false)" @focus="changeFocus(true)" type="text" />
					<text @touchstart="audioTouchStart" @touchend="audioTouchEnd" v-show="menuType === 'audio'">{{ isRecording ? '松开发送' : '按住说话' }}</text>
				</view>
				<image @click="changeShowEmoji" class="emoji" src="/static/chat_pic2.png" mode="aspectFill"></image>
				<image v-show="menuType === 'text' && !iptFocus" class="moreMenu" @click="changeShowMoreMenu" src="/static/chat_pic3.png" mode="aspectFill"></image>
				<view v-show="iptFocus || menuType === 'emoji' || menuType === 'audio'" class="btn cu-btn">发送</view>
			</view>

			<view class="emojiBox" v-show="showEmoji">
				<view class="tit">最近使用</view>
				<view class="emojiList flex align-center flex-wrap">
					<view @click="emojiClick(item)" v-for="(item, index) in emojiName.recentlyUsed" :key="index" class="item">
						<image :src="'/static/emoji/' + item" mode="aspectFill"></image>
					</view>
				</view>
				<view class="tit">所有表情</view>
				<view class="emojiList flex align-center flex-wrap">
					<view @click="emojiClick(item)" v-for="(item, index) in emojiName.allEmoji" :key="index" class="item">
						<image :src="'/static/emoji/' + item" mode="aspectFill"></image>
					</view>
				</view>
			</view>

			<view class="moreMenuBox flex flex-wrap align-center" v-show="showMoreMenu">
				<view v-for="(item, index) in meunList" :key="index" class="item flex flex-direction align-center justify-center">
					<image :src="item.icon" mode="aspectFill"></image>
					<text>{{ item.name }}</text>
				</view>
			</view>
		</view> 
		<view v-show="menuType==='audio'&&isRecording" class="recordingAnimation">
			<view class="flex align-center">
				<image class="microphone" src="/static/chat_pic11.png" mode="aspectFill"></image>
				<image class="audio" src="/static/chat_pic12.png" mode="aspectFill"></image>
			</view>
			<view >
				手指上滑，取消发送
			</view>
		</view> -->
	</view>
</template>

<script>
import emojiName from '../../static/emoji/name.js';
export default {
	data() {
		return {
			showEmoji: false,
			showMoreMenu: false,
			isRecording: false,
			emojiName: emojiName,
			chatContentHeight: '507px',
			query: null,
			scrollInfo: '',
			maxHeight: '',

			menuType: 'text',
			meunList: [
				{ icon: '/static/chat_pic9.png', name: '拍摄' },
				{ icon: '/static/chat_pic5.png', name: '相册' },
				{ icon: '/static/chat_pic6.png', name: '位置' },
				{ icon: '/static/chat_pic7.png', name: '名片' },
				{ icon: '/static/chat_pic8.png', name: '文件' }
			],
			iptFocus: false
		};
	},
	onReady() {
		// const query = uni.createSelectorQuery().in(this);
		// this.query = query;
		// let chatContentHeight = '507px';
		// let chatContentTop = 98.836;
		// let bottomSendMessageMenuTop = 608.357;
		// query
		// 	.select('#chatContent')
		// 	.boundingClientRect(data => {
		// 		chatContentTop = data.top;
		// 	})
		// 	.exec();
		// query
		// 	.select('#bottomSendMessageMenu')
		// 	.boundingClientRect(data => {
		// 		bottomSendMessageMenuTop = data.top;
		// 	})
		// 	.exec();
		
		
		// // chatContentHeight = 'calc(100vh - ' + (bottomSendMessageMenuTop - chatContentTop).toFixed(2) + 'px)';
		
		// chatContentHeight = (bottomSendMessageMenuTop - chatContentTop).toFixed(2) + 'px';
		// this.chatContentHeight = chatContentHeight;
		// this.maxHeight = this.chatContentHeight;

		const subNVue = uni.getSubNVueById('popup');
		subNVue.show('slide-in-top', 250);
	},
	onLoad() {
		uni.$on('emojiname', data => {
			console.log(data.name);
		});
		uni.$on('audioTouchStart', data => {
			console.log('开始');
		});
		uni.$on('audioTouchEnd', data => {
			console.log('结束');
		});
	},
	methods: {
		gotoInfomation() {
			uni.navigateTo({
				url: '/pages/messageList/contactInformation'
			});
		},
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		changeFocus(type) {
			console.log(type);
			this.iptFocus = type;
		},
		audioTouchStart() {
			console.log('start');
			this.isRecording = true;

			// const subNVue = uni.getSubNVueById('popup'); // 通过 id 获取 nvue 子窗体
			// subNVue.show('slide-in-top', 250); // 打开 nvue 子窗体
		},
		audioTouchEnd() {
			console.log('end');
			this.isRecording = false;

			// const subNVue = uni.getSubNVueById('popup'); // 通过 id 获取 nvue 子窗体
			// subNVue.hide('slide-in-top', 250); // 打开 nvue 子窗体
		},
		changeAudioType(type) {
			this.menuType = type ? 'audio' : 'text';
			this.isRecording = false;
		},
		changeShowEmoji() {
			this.showEmoji = !this.showEmoji;
			this.showMoreMenu = false;
			let chatContentHeight = '265.53px';
			let chatContentTop = 98.836;
			let bottomSendMessageMenuTop = 364.361;
			this.menuType = 'emoji';
			setTimeout(() => {
				this.query
					.select('#chatContent')
					.boundingClientRect(data => {
						chatContentTop = data.top;
					})
					.exec();
				this.query
					.select('#bottomSendMessageMenu')
					.boundingClientRect(data => {
						bottomSendMessageMenuTop = data.top;
					})
					.exec();
				chatContentHeight = (bottomSendMessageMenuTop - chatContentTop).toFixed(2) + 'px';
				this.chatContentHeight = chatContentHeight;
				this.scrollInfo = 'msg1';
				if (!this.showEmoji) {
					this.chatContentHeight = this.maxHeight;
				}
			}, 600);
		},
		changeShowMoreMenu() {
			this.menuType = 'text';
			this.showMoreMenu = !this.showMoreMenu;
			this.showEmoji = false;
			let chatContentHeight = '255.53px';
			let chatContentTop = 98.836;
			let bottomSendMessageMenuTop = 354.365;
			setTimeout(() => {
				this.query
					.select('#chatContent')
					.boundingClientRect(data => {
						chatContentTop = data.top;
					})
					.exec();
				this.query
					.select('#bottomSendMessageMenu')
					.boundingClientRect(data => {
						bottomSendMessageMenuTop = data.top;
					})
					.exec();
				chatContentHeight = (bottomSendMessageMenuTop - chatContentTop).toFixed(2) + 'px';
				this.chatContentHeight = chatContentHeight;
				this.scrollInfo = 'msg1';
				if (!this.showMoreMenu) {
					this.chatContentHeight = this.maxHeight;
				}
			}, 600);
		},
		emojiClick(item) {
			console.log(item);
		}
	}
};
</script>

<style lang="scss">
@import '/colorui/main.css';
@import '/colorui/animation.css';
@import '/colorui/icon.css';
page {
	background-color: #fff;
}
.chatView {
	min-height: 100vh;
	background-color: #fff;
	padding-top: 54px;
	overflow: hidden;
	.backBox {
		padding: 0 50rpx;
		padding-top: 23px; 
		position: fixed;
		z-index: 999;
		left: 0;
		top: 0;
		width: 100%;
		height: 54px; 
		background-color: #fff;
		.back {
			font-size: 46rpx;
			color: #333;
			font-weight: 700;
		}
		.cuIcon {
			font-weight: 700;
			color: #333;
			font-size: 48rpx;
		}
	}
	.chatContent {
		margin-top: 46px;
		padding-left: 66rpx;
		padding-right: 66rpx;
		padding-bottom: 116rpx;
		.message {
			margin-bottom: 40px;
			.head {
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
			}
			.message-content {
				font-size: 24rpx;
				padding: 26rpx;
				max-width: 60%;
				.emoji {
					image {
						width: 44rpx;
						height: 44rpx;
						margin-right: 20rpx;
						&:last-child {
							margin-right: 0;
						}
					}
				}
				.image {
					image {
						max-width: 240rpx;
					}
				}
				.video {
					width: 160rpx;
					height: 163px;
					display: flex;
					align-items: center;
					justify-content: center;
					overflow: hidden;
					// position: relative;
					video {
						width: 160rpx;
						height: 163px; 
						// width: 100%;
						// height: 100%;
						// position: absolute;
						// left: 0;
						// top: 0;
					}
				}
				.map {
					width: 360rpx;
					height: 230rpx;
					overflow: hidden;
					position: relative;
					.mapBg {
						width: 100%;
						height: calc(100% - 42px);
						position: absolute;
						left: 0;
						bottom: 0;
						background-color: rgba(0, 0, 0, 0.3);
					}
					.mapCover {
						background-color: #4c64fe;
						height: 42px;
						padding-top: 7px;
						padding-left: 18rpx;
						padding-bottom: 10rpx;
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						.tit {
							font-size: 28rpx;
							font-weight: 700;
						}
						.desc {
							color: rgba(255, 255, 255, 0.45);
							font-size: 24rpx;
						}
					}
				}
			}
			.message-time {
				color: rgba(51, 51, 51, 0.45);
				font-size: 24rpx;
			}
			&.message-left {
				.message-content {
					margin-left: 12rpx;
					color: #333;
					font-weight: 700;
					background-color: #f7f7f8;
					border-radius: 0rpx 28rpx 28rpx 28rpx;
				}
				video {
					border-radius: 0rpx 28rpx 28rpx 28rpx;
				}
				.message-time {
					margin-left: 28rpx;
				}
			}
			&.message-right {
				.message-content {
					margin-right: 12rpx;
					color: #fff;
					font-weight: 700;
					border-radius: 28rpx 0rpx 28rpx 28rpx;
					background-color: #4c64fe;
				}
				video {
					border-radius: 28rpx 0rpx 28rpx 28rpx;
				}
				.message-time {
					margin-right: 28rpx;
				}
				&.message-audio {
					.audioInfo {
						image {
							transform: rotate(180deg);
							margin-left: 4px;
						}
					}
				}
			}
			&.message-audio {
				.message-content {
					width: 240rpx;
					.audio {
						position: relative;
						audio {
							position: absolute;
							left: 0;
							top: 0;
							width: 100%;
							height: 100%;
							opacity: 0;
						}
						.audioInfo {
							image {
								width: 30rpx;
								height: 32rpx;
							}
						}
					}
				}
			}
			&.message-image {
				.message-content {
					padding: 0;
					overflow: hidden;
					background-color: transparent;
				}
			}
			&.message-video {
				.message-content {
					padding: 0;
					overflow: hidden;
					background-color: transparent;
				}
			}
			&.message-map {
				.message-content {
					padding: 0;
					overflow: hidden;
					background-color: transparent;
				}
			}
		}
	}

	.bottomSendMessageMenu {
		position: fixed;
		z-index: 9999;
		left: 0;
		bottom: 0;
		width: 100%;
		border-top: 1rpx solid #979797;
		.content {
			height: 116rpx;
			padding-left: 32rpx;
			background-color: #fff;
			.microphone {
				width: 46rpx;
				height: 54rpx;
			}
			.keyBoard {
				width: 56rpx;
				height: 56rpx;
			}
			.iptBox {
				flex: 1;
				margin-left: 20rpx;
				margin-right: 30rpx;
				background: rgba(247, 247, 248, 1);
				height: 70rpx;
				border-radius: 35rpx;
				border: 1px solid rgba(76, 100, 254, 0.07);
				padding: 0 32rpx;
				text-align: center;
				input {
					text-align: left;
					width: 100%;
					height: 100%;
					font-size: 28rpx;
					color: #666;
				}
				text {
					display: inline-block;
					width: 100%;
					height: 100%;
					color: #333;
					font-size: 12px;
					font-weight: 700;
					line-height: 70rpx;
				}
			}
			.emoji {
				width: 60rpx;
				height: 60rpx;
			}
			.moreMenu {
				width: 68rpx;
				height: 68rpx;
				margin-left: 26rpx;
				margin-right: 20rpx;
			}
			.btn {
				padding: 0;
				width: 132rpx;
				height: 60rpx;
				line-height: 60rpx;
				background: rgba(76, 100, 254, 1);
				box-shadow: 0px 2px 5px 0px rgba(92, 102, 162, 0.17), 0px 2px 7px 0px rgba(102, 114, 251, 0.6);
				border-radius: 14rpx;
				color: #fff;
				text-align: center;
				margin-left: 22rpx;
			}
		}

		.emojiBox {
			padding: 11px 28rpx 0 28rpx;
			background-color: #f5f5f8;
			height: 244px;
			overflow-y: auto;
			.tit {
				color: #666;
				font-size: 12px;
				font-weight: 700;
				margin-bottom: 6px;
			}
			.emojiList {
				.item {
					width: 12.5%;
					text-align: center;
					image {
						width: 44rpx;
						height: 44rpx;
					}
				}
			}
		}

		.moreMenuBox {
			background-color: #f5f5f8;
			padding: 0 28rpx;

			padding-top: 18px;
			.item {
				width: 180rpx;
				height: 180rpx;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 8rpx 18rpx 0px rgba(143, 143, 143, 0.11);
				border-radius: 28rpx;
				border: 1rpx solid rgba(239, 243, 251, 1);
				margin-right: 76rpx;
				margin-bottom: 28px;
				&:nth-child(3n) {
					margin-right: 0;
				}
				image {
					width: 96rpx;
					height: 94rpx;
				}
				text {
					font-size: 14px;
					color: #666;
				}
			}
		}
	}

	.recordingAnimation {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		border-radius: 14px;
		background-color: rgba(0, 0, 0, 0.9);
		font-size: 12px;
		padding: 4px 0px 19px 5px;
		text-align: center;
		color: #fff;
		.microphone {
			width: 80px;
			height: 98px;
		}
		.audio {
			width: 35px;
			height: 35px;
			margin-right: 25px;
		}
	}
}
</style>
