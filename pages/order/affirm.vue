<template>
	<view class="order-affirm">
		<ul class="order-heard flex_bet">
			<li @tap="goBack()"><i class="icon iconfont icon-left"></i></li>
			<li>确认订单</li>
			<li><i class="icon iconfont icon-gouwuche"></i></li>
		</ul>
		<ul class="ul-address">
			<li class="contact">
				<span class="contact-name">小虎牙</span><span>157*****456</span>
			</li>
			<li class="flex_bet"><span>湖南省保靖县</span><i class="icon iconfont icon-Right"></i></li>
			<li>收货时间不限</li>
			<li class="progress-bar"></li>
		</ul>
		<ul class="order-list">
			<li class="clearfix">
				<view class="ol-img-warp">
					<image class="ol-img" :src="imgPath" mode="widthFix"></image>
				</view>
				<view class="ol-content">
					<p class=" flex_bet"><span class="content-mainTitle">主标题</span><span>x1</span></p>
					<p class="content-subtitle">副标题</p>
					<p class="content-laber">七天退换</p>
					<p class="content-price"><span>￥</span>1314</p>
				</view>
			</li>
		</ul>
		<ul class="order-cost">
			<li class="flex_bet">
				<p>运费</p>
				<p>快递费：￥0</p>
			</li>
			<li class="flex_bet">
				<p>现金券 <span>无可用</span></p>
				<p>使用现金券 <i class="icon iconfont icon-Right"></i></p>
			</li>
			<li class="flex_bet">
				<p>红包 <span>无可用</span></p>
				<p>使用红包 <i class="icon iconfont icon-Right"></i></p>
			</li>		
			<li class="flex_bet">
				<p>小计</p>
				<p class="cost-price">￥1314</p>
			</li>
		</ul>
		<ul class="ul-payment clearfix">
			<li class="payment-price">应付：￥1314</li>
			<li class="payment-btn">去付款</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgPath:this.http+'/banner/case.png'
			}
		},
		methods: {
			goBack(){
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-affirm{
		.order-heard{
			width: 100%;
			height: 50px;
			padding: 0 20px;
			background-color: #fff;
			box-sizing: border-box;
			font-size: 16px;
			border-bottom: 1px solid #ccc;
		}
		.ul-address{
			padding: 20px 20px 0 20px;
			font-size: 16px;
			color: #9c9c9c;
			background-color:#fff;
			li{
				margin-bottom: 15px;
			}
			.contact{
				color: #333;
				.contact-name{
					margin-right: 20px;
				}
			}
			.progress-bar{
				width: 100%;
				height: 5px;
				background-color: #5448c6;
				background-size: 40px 40px;
				background-image: linear-gradient(-45deg,rgba(255,255,255,1.5) 25%,transparent 25%,transparent 50%,rgba(238,39,39,25) 50%,rgba(255,255,255,15) 75%,transparent 75%,transparent);
			}
		}
		.order-list{
			margin-top: 20px;
			width: 100%;
			padding: 20px;
			background: #fff;
			li{
				width: 100%;
				.ol-img-warp{
					width: 100px;
					height: 120px;
					overflow: hidden;
					float: left;
					.ol-img{
						width: 100%;
					}
				}
				.ol-content{
					width: calc(100% - 160px);
					margin-left: 20px;
					float: left;
					p{
						margin-bottom: 10px;
					}
					.content-mainTitle{
						font-size: 18px;
						color: #000;
					}
					.content-subtitle{
						font-size: 14px;
					}
					.content-laber{
						color: #f00;
						border: 1px solid;
						display: inline-block;
						padding: 0px 3px;
						border-radius: 5px;
					}
					.content-price{
						font-size: 24px;
						span{
							font-size: 14px;
						}
					}
				}
			}
		}
		.order-cost{
			margin-top: 20px;
			padding:0 20px 20px 20px;
			background-color: #fff;
			li{
				padding: 15px 0;
				color: #000000;
				font-size: 16px;
				border-bottom: 1px solid #cfcfcf;
				.cost-price{
					color: #f00;
				}
				i{
					margin-left: 10px;
					display: inline-block;
				}
			}
		}
		.ul-payment{
			width: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
			height: 50px;
			line-height: 50px;
			background-color: #fff;
			border-top: 1px solid #ccc;
			font-size: 18px;
			.payment-price{
				float: left;
				color: #f00;
				margin-left: 20px;
			}
			.payment-btn{
				width: 150px;
				height: 50px;
				text-align: center;
				color: #fff;
				background-color: #f00;
				float: right;
			}
		}
	}
</style>
