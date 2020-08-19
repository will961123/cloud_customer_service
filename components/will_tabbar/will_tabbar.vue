<template>
	<view class="tabbarBox flex justify-around align-center">
		<view
			@click="navgater(item, index)"
			v-for="(item, index) in tabList"
			:key="index"
			:class="index === nowTabIdx ? 'select' : ''"
			class="item  flex flex-direction align-center"
		>
			<image :class="index === 3 ? 'tab4' : index === 1 ? 'tab2' : ''" :src="nowTabIdx === index ? item.selectIcon : item.icon" mode="aspectFill"></image>
			<text>{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		nowTabIdx: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			tabList: [
				{ icon: '/static/tab11.png', selectIcon: '/static/tab12.png', name: '首页', path: '/pages/index/index' },
				{ icon: '/static/tab31.png', selectIcon: '/static/tab32.png', name: '聊天', path: '/pages/messageList/messageList' },
				{ icon: '/static/tab21.png', selectIcon: '/static/tab22.png', name: '服务', path: '/pages/service/service' },
				{ icon: '/static/tab41.png', selectIcon: '/static/tab42.png', name: '我的', path: '/pages/my/my' }
			]
		};
	},
	methods: {
		navgater(item, idx) {
			if (idx === this.nowTabIdx) {
				return false;
			}
			// uni.navigateTo({
			// 		url:item.path
			// })
			uni.redirectTo({
				url: item.path
			});
		}
	}
};
</script>

<style lang="scss">
.tabbarBox {
	position: fixed;
	z-index: 99999;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 80px;
	box-shadow: 0px -4px 14px 0px rgba(40, 51, 173, 0.06);
	border-radius: 35px 35px 0px 0px;
	background-color: #fff;
	.item {
		&.select {
			text {
				color: #4c64fe;
			}
		}
		image {
			width: 30px;
			height: 28px;
		}
		.tab2 {
			width: 33px;
			height: 28px;
		}
		.tab4 {
			width: 24px;
			height: 28px;
		}
		text {
			color: #767789;
			font-size: 11px;
			margin-top: 6px;
			font-weight: 700;
		}
	}
}
</style>
