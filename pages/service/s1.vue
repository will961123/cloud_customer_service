<template>
	<view>
		s1
		<video src="https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4" controls></video>
		<video src="https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4" controls></video>
		<video src="https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4" controls></video>
		<video src="https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4" controls></video>
		<video src="https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4" controls></video>
		<video src="https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4" controls></video>
		<video src="https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4" controls></video>
		<video src="https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4" controls></video>
		<video src="https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4" controls></video>
		<video src="https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4" controls></video>
	</view>
</template>

<script>
var _self;
export default {
	data() {
		return {};
	},
	methods: {
		showPopup() {
			uni.$emit('page-popup', {
				// 向 popup 传递消息
				imageUl: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
				videoUrl: 'http://img.cdn.qiniu.dcloud.net.cn/wap2appvsnative.mp4'
			});
			const subNVue = uni.getSubNVueById('popup'); // 通过 id 获取 nvue 子窗体
			subNVue.show('slide-in-top', 250); // 打开 nvue 子窗体
		}
	},
	onLoad: function() {
		const subNVue = uni.getSubNVueById('popup'); // 通过 id 获取 nvue 子窗体
		setTimeout(() => {
			subNVue.show('slide-in-top', 0);
		}, 600);
		subNVue.addEventListener(
			'maskClick',
			function() {
				console.log('遮罩点击');
				uni.showModal({
					title:'111',
					content:'222'
				})
			},
			false
		);
	}
};
</script>
