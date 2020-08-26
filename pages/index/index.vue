<template>
	<view class="indexView">
		<view class="px-50">
			<view class="projectBox flex align-center justify-between">
				<view>
					<view class="projectNume">四季花城</view>
					<view class="tip">当前项目</view>
				</view>
				<button class="btn cu-btn">切换项目</button>
			</view>

			<view class="canvasAndTodoList flex align-center">
				<view :style="{ width: cWidth + 'px', height: cHeight + 'px', overflow: 'hidden' }" class="canvasBox">
					<canvas canvas-id="canvasRing" id="canvasRing" class="charts"></canvas>
				</view>
				<view class="infoBox">
					<view class="tit">我的待办汇总</view>
					<view class="desc">本月待办事件</view>
					<view class="legend flex align-center">
						<view class="item blue">交付问题</view>
						<view class="item yellow">维保问题</view>
						<view class="item red">业主审核</view>
					</view>
				</view>
			</view>

			<view class="noteBox flex align-center">
				<view class="left">
					<view>公告</view>
					<view>信息</view>
				</view>
				<swiper :vertical="true">
					<swiper-item class="flex align-center">
						<view class="noteContent flex flex-direction justify-between">
							<view class="author">四季花城物业服务总指挥部</view>
							<view class="titleBox flex align-center">
								<view class="marker">头条</view>
								<view class="tit textov1">重要通知：即日起实施即日起实施</view>
							</view>
						</view>
						<view class="gotoDetail"><text class="cuIcon cuIcon-right"></text></view>
					</swiper-item>
				</swiper>
			</view>

			<view class="myTodoList">
				<view class="tit">我的待办</view>
				<view class="item type1 flex align-start">
					<view class="timeBox">09:30 AM</view>
					<view style="flex: 1;padding-left: 8px;">
						<view class="contenBox flex align-start">
							<view class="iconBox flex align-center justify-center"><image src="/static/index_pic1.png" mode="aspectFill"></image></view>
							<view class="infoBox">
								<view class="infoTit">待整改：防火条-短缺</view>
								<view class="infoAddress">1号楼-1-19-1902-厨房</view>
								<view class="infoDesc">一期 专项检查</view>
							</view>
						</view>
						<view class="progressBox"></view>
					</view>
				</view>
				<view class="item type2 flex align-start">
					<view class="timeBox">09:30 AM</view>
					<view style="flex: 1;padding-left: 8px;">
						<view class="contenBox flex align-start">
							<view class="iconBox flex align-center justify-center"><image src="/static/index_pic2.png" mode="aspectFill"></image></view>
							<view class="infoBox">
								<view class="infoTit">待派单：电梯坏了</view>
								<view class="infoAddress">1号楼-1-19-1902</view>
								<view class="infoDesc">一期 报事报修</view>
							</view>
						</view>
						<view class="progressBox"></view>
					</view>
				</view>
			</view>
		</view>

		<willTabbar :nowTabIdx="0"></willTabbar>
	</view>
</template>

<script>
import uCharts from '@/components/u-charts/u-charts.js';
var canvaRing = null;
export default {
	data() {
		return {
			cWidth: '175',
			cHeight: '140',
			pixelRatio: 1,
			serverData: ''
		};
	},
	onLoad() {
		this.cWidth = uni.upx2px(320);
		this.cHeight = uni.upx2px(260);
		let pageConfig = {
			canvas: 'canvasRing',
			totNum: 73,
			series: [{ name: '1', data: 2 }, { name: '2', data: 1 }, { name: '3', data: 1 }, { name: '4', data: 1 }]
		};
		this.showRing(pageConfig);
	},
	methods: {
		// 初始化canvas
		showRing(config) {
			let that = this;
			canvaRing = new uCharts({
				$this: that,
				canvasId: config.canvas,
				type: 'ring',
				fontSize: 10,
				// legend: true,
				// 右侧配置
				// 配置为不显示右侧图例 用dom生成 不然canvas太宽了
				legend: {
					show: false,
					position: 'right',
					float: 'center',
					itemGap: 10,
					padding: 5,
					lineHeight: 26,
					margin: 5,
					borderWidth: 1
				},
				colors: ['#E8523F', '#F8B849', '#4C64FE', '#EFF3FB'],
				title: {
					name: config.totNum,
					color: '#000000',
					fontSize: 18 * that.pixelRatio,
					fontWeight: 700,
					offsetY: -4 * that.pixelRatio
				},
				// subtitle: {
				// 	name: '收益率',
				// 	color: '#666666',
				// 	fontSize: 15 * that.pixelRatio,
				// 	offsetY: 30 * that.pixelRatio
				// },
				extra: {
					pie: {
						offsetAngle: -45,
						// 圆环宽度
						ringWidth: 12 * that.pixelRatio,
						// 标线
						labelWidth: 10,
						border: false
					}
				},
				background: '#FFFFFF',
				pixelRatio: that.pixelRatio,
				series: config.series,
				animation: true,
				width: that.cWidth * that.pixelRatio,
				height: that.cHeight * that.pixelRatio,
				disablePieStroke: true,
				// 圆环外的标线
				dataLabel: false
			});
		}
	}
};
</script>

<style scoped lang="scss">
@import '/colorui/main.css';
@import '/colorui/animation.css';
@import '/colorui/icon.css';
.textov1 {
	/* display: block; */
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
page {
	background-color: #fff;
}
.indexView {
	padding-bottom: 100px;
	background-color: #fff;
	.px-50 {
		padding: 0 50rpx;
	}
	.projectBox {
		padding-top: 18px;
		color: #333;
		.projectNume {
			font-size: 19px;
			font-weight: 700;
		}
		.tip {
			font-size: 12px;
			color: rgba(51, 51, 51, 1);
			margin-top: 4px;
		}
		.btn {
			width: 86px;
			height: 32px;
			line-height: 32px;
			background: rgba(239, 243, 251, 1);
			border-radius: 8px;
			font-size: 12px;
			color: #16123f;
			font-weight: 700;
		}
	}
	.canvasAndTodoList {
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 7px 28px 0px rgba(0, 0, 0, 0.11);
		border-radius: 14px;
		border: 1px solid rgba(239, 243, 251, 1);
		margin-top: 18px;
		.canvasBox {
			margin-left: -14px;
		}
		.infoBox {
			margin-left: -16px;
			.tit {
				color: #16123f;
				font-size: 18px;
				font-weight: 700;
			}
			.desc {
				color: #3d3b5a;
				font-size: 13px;
				font-weight: 700;
				margin: 4px 0;
			}
			.legend {
				font-size: 22rpx;
				color: #aaaaaa;
				.item {
					padding-left: 6px;
					position: relative;
					margin-right: 8px;
					&::after {
						position: absolute;
						left: -4px;
						top: 50%;
						transform: translateY(-50%);
						content: '';
						width: 6px;
						height: 6px;
						border-radius: 50%;
					}
					&.blue {
						&::after {
							background-color: #4c64fe;
						}
					}
					&.yellow {
						&::after {
							background-color: #f8b849;
						}
					}
					&.red {
						&::after {
							background-color: #e8523f;
						}
					}
				}
			}
		}
	}
	.noteBox {
		background: rgba(251, 251, 251, 1);
		border-radius: 14px;
		height: 74px;
		padding: 15px 0 15px 22px;
		margin-top: 30px;
		.left {
			color: #333333;
			font-weight: 700;
			font-size: 16px;
			padding-right: 15px;
			border-right: 1rpx solid #979797;
		}
		swiper {
			flex: 1;
			height: 100%;
			padding-left: 14px;
			padding-right: 8px;
			.noteContent {
				width: calc(100% - 30px);
				height: 100%;
				// flex: 1;
				.author {
					font-size: 12px;
					color: #3d3b5a;
				}
				.titleBox {
					width: 100%;
					.marker {
						width: 31px;
						height: 16px;
						line-height: 16px;
						background: rgba(51, 51, 51, 1);
						border-radius: 5px;
						color: #fff;
						font-size: 11px;
						text-align: center;
						margin-right: 6px;
					}
					.tit {
						height: 1.4em;
						font-size: 24rpx;
					}
				}
			}
			.gotoDetail {
				width: 24px;
				height: 24px;
				line-height: 24px;
				color: #fff;
				text-align: center;
				background: rgba(76, 100, 254, 1);
				border-radius: 7px;
				margin-left: 6px;
			}
		}
	}
	.myTodoList {
		margin-top: 30px;
		.tit {
			font-size: 16px;
			color: #16123f;
			line-height: 20px;
			font-weight: 700;
		}
		.item {
			margin-top: 15px;
			.timeBox {
				color: #3d3b5a;
				font-size: 12px;
			}
			&.type1 {
				.contenBox {
					background: rgba(76, 100, 254, 0.1);
					.iconBox {
						background-color: #4c64fe;
					}
				}
				.progressBox {
					&::after {
						background-color: #4c64fe;
					}
				}
			}
			&.type2 {
				.contenBox {
					background: rgba(255, 183, 63, 0.1);
					.iconBox {
						background-color: #f8b849;
					}
				}
				.progressBox {
					&::after {
						background-color: #f8b849;
					}
				}
			}
			.contenBox {
				padding: 16px 0 7px 20px;
				border-radius: 14px 14px 14px 0px;
				margin-left: 5px;
				.iconBox {
					width: 30px;
					height: 30px;
					border-radius: 8px;
					margin-right: 10px;
					image {
						width: 20px;
						height: 20px;
					}
				}
				.infoBox {
					color: #3d3b5a;
					font-size: 12px;
					.infoTit {
						color: #16123f;
						font-size: 13px;
						font-weight: 700;
					}
					.infoAddress {
						margin: 6px 0;
					}
					.infoDesc {
					}
				}
			}
			.progressBox {
				width: 100%;
				height: 1px;
				background-color: #979797;
				margin-top: 16px;
				position: relative;
				&::after {
					width: 6px;
					height: 6px;
					content: '';
					position: absolute;
					left: -3px;
					top: -3px;
					border-radius: 50%;
				}
			}
		}
	}
}
</style>
