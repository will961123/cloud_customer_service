<template>
	<view class="chatView">
		<view class="backBox flex align-center justify-between">
			<view class="back">
				<text @click="back" style="margin-right: 4px;" class="cuIcon cuIcon-back"></text>
				张先生
			</view>
			<view @click="gotoInfomation" class="cuIcon cuIcon-more"></view>
		</view>

		<!-- <scroll-view :style="{ height: chatContentHeight }" scroll-y="true" scroll-with-animation  :scroll-into-view="scrollInfo" id="chatContent" class="chatContent"> -->
		<view :style="{ height: chatContentHeight }" id="chatContent" class="chatContent">
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

			<!-- <view class="message message-left message-audio flex flex-wrap">
				<image class="head" src="/static/logo.png" mode="aspectFill"></image>
				<view style="flex: 1;margin-top: 20rpx;" class="flex align-center">
					<view class="message-content">
						<view class="audio">
							<audio src=""></audio>
							<view class="audioInfo flex align-center">
								<text>60"</text>
								<image src="/static/chat_pic4l.png" mode="aspectFill"></image>
							</view>
						</view>
					</view>
					<view class="message-time">15:01</view>
				</view>
			</view>
 -->
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

			<!-- <view class="message message-left message-image flex flex-wrap">
				<image class="head" src="/static/logo.png" mode="aspectFill"></image>
				<view style="flex: 1;margin-top: 20rpx;" class="flex align-center">
					<view class="message-content">
						<view class="image"><image src="/static/message-image1.jpg" mode="widthFix"></image></view>
					</view>
					<view class="message-time">15:01</view>
				</view>
			</view> -->

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
							<video :controls="false" :show-play-btn="false" objectFit="cover" src="https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4"></video>
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
							<map latitude="33.589570296081575" longitude="114.02628449882506"></map>
						</view>
					</view>
				</view>
				<image class="head" src="/static/logo.png" mode="aspectFill"></image>
			</view>
		</view>

		<view id="bottomSendMessageMenu" class="bottomSendMessageMenu bg-white">
			<view class="content type-send flex align-center">
				<image class="microphone" src="/static/chat_pic1.png" mode="aspectFill"></image>
				<view class="iptBox"><input @blur="changeFocus(false)" @focus="changeFocus(true)" type="text" /></view>
				<image @click="changeShowEmoji" class="emoji" src="/static/chat_pic2.png" mode="aspectFill"></image>
				<image v-show="menuType==='text'&&!iptFocus" class="moreMenu" @click="changeShowMoreMenu" src="/static/chat_pic3.png" mode="aspectFill"></image>
				<view v-show="iptFocus||menuType==='emoji'" class="btn cu-btn">发送</view>
			</view>

			<view class="emojiBox" v-show="showEmoji">
				<!-- 			<view class="emojiBox" v-show="showEmoji" :class="showEmoji ? 'animation-slide-bottom' : ''"> -->
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
			
			<view  class="moreMenuBox flex flex-wrap align-center" v-show="showMoreMenu" >
				 <view v-for="(item,index) in meunList" :key="index" class="item flex flex-direction align-center justify-center">
				 	<image :src="item.icon" mode="aspectFill"></image>
					<text>{{item.name}}</text>
				 </view>
			</view>
		</view>
	</view>
</template>

<script>
import emojiName from '../../static/emoji/name.js';
export default {
	data() {
		return {
			showEmoji: false,
			showMoreMenu:false,
			emojiName: emojiName,
			chatContentHeight: '507px',
			query: null,
			scrollInfo: '',
			maxHeight: '',
			
			menuType:'text',
			meunList:[
				{icon:'/static/chat_pic9.png',name:'拍摄'},
				{icon:'/static/chat_pic5.png',name:'相册'},
				{icon:'/static/chat_pic6.png',name:'位置'},
				{icon:'/static/chat_pic7.png',name:'名片'},
				{icon:'/static/chat_pic8.png',name:'文件'},
			],
			iptFocus:false
		};
	},
	onReady() {
		const query = uni.createSelectorQuery().in(this);
		this.query = query;
		let chatContentHeight = '507px';
		let chatContentTop = 98.836;
		let bottomSendMessageMenuTop = 608.357;
		query
			.select('#chatContent')
			.boundingClientRect(data => {
				chatContentTop = data.top;
			})
			.exec();
		query
			.select('#bottomSendMessageMenu')
			.boundingClientRect(data => {
				bottomSendMessageMenuTop = data.top;
			})
			.exec();
		// chatContentHeight = 'calc(100vh - ' + (bottomSendMessageMenuTop - chatContentTop).toFixed(2) + 'px)';
		chatContentHeight = (bottomSendMessageMenuTop - chatContentTop).toFixed(2) + 'px';
		this.chatContentHeight = chatContentHeight;
		this.maxHeight = this.chatContentHeight;
	},
	methods: {
		gotoInfomation(){
			uni.navigateTo({
				url:"/pages/messageList/contactInformation"
			})
		},
		back(){
			uni.navigateBack({
				delta:1
			})
		},
		changeFocus(type){
			console.log(type);
			this.iptFocus = type
		},
		changeShowEmoji() {
			this.showEmoji = !this.showEmoji;
			this.showMoreMenu = false
			let chatContentHeight = '265.53px';
			let chatContentTop = 98.836;
			let bottomSendMessageMenuTop = 364.361;
			this.menuType = 'emoji'
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
		changeShowMoreMenu(){
			this.menuType = 'text'
			this.showMoreMenu = !this.showMoreMenu 
			this.showEmoji = false 
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
				console.log(bottomSendMessageMenuTop,chatContentTop,chatContentHeight)
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
page {
	background-color: #fff;
}
.chatView {
	min-height: 100vh;
	background-color: #fff;
	.backBox {
		padding: 0 50rpx;
		padding-top: 23px;
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
		overflow-y: auto;
		margin-top: 46px;
		padding-left: 66rpx;
		// padding-bottom: 116rpx;
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
					overflow: hidden;
					video {
						width: 100%;
					}
				}
				.map {
					width: 360rpx;
					height: 230rpx;
					overflow: hidden;
					position: relative;
					map {
						width: 100%;
						height: calc(100% - 42px);
						position: absolute;
						left: 0;
						bottom: 0;
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
			.iptBox {
				flex: 1;
				margin-left: 20rpx;
				margin-right: 30rpx;
				background: rgba(247, 247, 248, 1);
				height: 70rpx;
				border-radius: 35rpx;
				border: 1px solid rgba(76, 100, 254, 0.07);
				padding: 0 32rpx;
				input {
					width: 100%;
					height: 100%;
					font-size: 28rpx;
					color: #666;
				}
			}
			.emoji {
				width: 60rpx;
				height: 60rpx;
			}
			.moreMenu{
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
		
		.moreMenuBox{
			background-color: #f5f5f8;
			padding: 0 28rpx;
			
			padding-top: 18px;
			.item{
				width:180rpx;
				height:180rpx;
				background:rgba(255,255,255,1);
				box-shadow:0px 8rpx 18rpx 0px rgba(143,143,143,0.11);
				border-radius:28rpx;
				border:1rpx solid rgba(239,243,251,1); 
				margin-right: 76rpx;
				margin-bottom: 28px;
				&:nth-child(3n){
					margin-right: 0;
				}
				image{
					width: 96rpx;
					height: 94rpx;
				}
				text{
					font-size: 14px;
					color: #666;
				}
			}
		}
	}
}
</style>
