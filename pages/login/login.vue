<template>
	<view class="loginView">
		<view class="titleBox">
			<view class="tit">登录</view>
			<view class="welcomTip">欢迎来到云客服</view>
		</view>
		<form @submit="userLogin">
			<view :style="{ height: formHeight }" id="form" class="form bg-white">
				<view class="iptBox flex align-center">
					<image src="/static/login_pic1.png" mode="widthFix"></image>
					<input type="text" name="enterpriseId" placeholder="请输入企业号" />
				</view>
				<view class="iptBox flex align-center">
					<image src="/static/login_pic2.png" mode="widthFix"></image>
					<input type="text" name="userName" placeholder="请输入用户名" />
				</view>
				<view class="iptBox flex align-center">
					<image src="/static/login_pic3.png" mode="widthFix"></image>
					<input type="password" name="passWord" placeholder="请输入密码" />
				</view>
				<button class="btn cu-btn" form-type="submit">登录</button>
			</view>
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			formHeight: 'calc(100vh - 187.36px)'
		};
	},
	onReady() {
		const query = uni.createSelectorQuery().in(this);
		query
			.select('#form')
			.boundingClientRect(data => {
				let top = data.top.toFixed(2) + 'px';
				this.formHeight = 'calc(100vh - ' + top + ')';
			})
			.exec();
	},
	methods: {
		userLogin(e) {
			console.log(e);
			uni.redirectTo({
				url:"/pages/index/index"
			}) 
		}
	}
};
</script>

<style scoped lang="scss"> 
@import '/colorui/main.css';
@import '/colorui/animation.css';
@import '/colorui/icon.css';
.loginView {
	// min-height: 100vh;
	background-color: #4c64fe;
	.titleBox {
		padding: 58px 30px 0 30px;
		.tit {
			color: #fff;
			font-size: 34px;
			letter-spacing: 2px;
		}
		.welcomTip {
			font-size: 18px;
			letter-spacing: 1px;
			color: rgba(255, 255, 255, 0.6);
			margin-top: 10px;
		}
	}
	.form {
		padding: 57px 60rpx 0px 60rpx;
		border-radius: 35px 35px 0 0;
		margin-top: 50px;
		.iptBox {
			padding: 0 48rpx;
			height: 50px;
			border-radius: 25px;
			border: 1rpx solid rgba(239, 239, 239, 1);
			margin-bottom: 36px;
			image {
				width: 17px;
				// height: 17px;
				margin-right: 24rpx;
			}
			input {
				flex: 1;
				font-size: 14px;
			}
		}
		.btn {
			margin-top: 57px;
			width: 100%;
			color: #fff;
			padding: 0;
			height: 50px;
			line-height: 50px;
			background: rgba(76, 100, 254, 1);
			box-shadow: 0px 8px 20px 0px rgba(41, 65, 214, 0.38);
			border-radius: 25px; 
		}
	}
}
</style>
