<template>
	<view class="goods-detail">
		<image class="detail-img" :src="imgPath" mode="widthFix"></image>
		<view class="detail-message">
			<p class="dm-title">时尚潮男居家旅行必备，走过路过千万不能错过！</p>
			<p class="dm-price"><span>￥</span>5200<span>.00</span></p>
			<ul class="flex_bet">
				<li><i class="icon iconfont icon-kuaidiyunshu"></i>快递：包邮</li>
				<li><i class="icon iconfont icon-huojianjiasu_o"></i>月销量：988</li>
				<li><i class="icon iconfont icon-dingwei"></i>湖南省-保靖县</li>
			</ul>
		</view>
		<view class="detail-info">
			<view class="di-title">商品服务</view>
			<ul class="ul-tab flex_bet">
				<li :class="select==1?'select':''" @tap="serveSelect(1)">商品详情</li>
				<li :class="select==2?'select':''" @tap="serveSelect(2)">用户评论</li>
				<li :class="select==3?'select':''" @tap="serveSelect(3)">退货政策</li>
			</ul>
			<ul class="ul-detail" v-if="select==1">
				<li class="di-title">商品参数</li>
				<li class="ul-img"><image :src="imgUrl"></image></li>
				<li class="params-info flex_bet">
					<view class="params">年龄：25岁</view>
					<view class="params">姓别：女</view>
				</li>
				<li class="params-info flex_bet">
					<view class="params">体重：52.2kg</view>
					<view class="params">身高：158cm</view>
				</li>
				<li class="params-info flex_bet">
					<view class="params">胸围：80.58</view>
					<view class="params">腰围：53.72</view>
				</li>			
				<li class="params-info">爱好：一天天的就刷抖音</li>
			</ul>
			<ul class="ul-comment" v-if="select==2">
				<li>小老头：</li>
				<li>糟老头</li>
				<li>坏老头</li>
				<li>花老头</li>
			</ul>
			<ul class="ul-policy" v-if="select==3">
				<li>1、线上所有的商品说明的解释权归本商品所有</li>
				<li>2、商品一经出售概不退货</li>
				<li>3、浏览商品必须购买此商品。如有违规，等着被起诉吧</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgPath:this.http+'/banner/case.png',
				imgUrl:this.http+'/banner/celebration.png',
				select:1,
				
			}
		},
		methods: {
			serveSelect(val){
				this.select= val;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-detail{
		width: 100%;
		height: 100%;
		background-color: #F3F4F6;
		.detail-img{
			width: 100%;
		}
		.detail-message{
			width: 100%;
			padding:10px 15px;
			background-color: #fff;
			.dm-title{
				font-size: 16px;
				color: #000;
				font-weight: 999;
			}
			.dm-price{
				color: #EF3A25;
				font-size: 20px;
				padding:10px 0;
				span{
					font-size: 14px;
				}
			}
			ul{
				width: 100%;
				color: #333;
				li{
					font-size: 14px;
					i{
						display: inline-block;
						color: #EF3A25;
						font-size: 18px;
						margin-right: 5px;
					}
				}
		
			}
		}
		.detail-info{
			width: 100%;
			margin-top:20px;
			padding: 20px;
			background-color: #fff;
			.di-title{
				font-size: 24px;
				color: #000;
				padding: 20px 0;
			}
			.ul-tab{
				width: 100%;
				li{
					width: 90px;
					height: 40px;
					text-align: center;
					line-height: 40px;
					font-size: 16px;
					color: #B6B6B6;
					border: 1px solid;
				}
				.select{
					color: #2D2D2D;
				}
			}
			.ul-detail{
				width: 100%;
				li{
					width: 100%;
					image{
						width: 100%;
					}
				}
				.ul-img{
					border-radius: 10px;
					overflow: hidden;
				}
				.params-info {
					margin-top: 15px;
					color: #A0A0A0;
					font-size: 16px;
					.params{
						width: 50%;
					}
				}
			}
			.ul-comment,.ul-policy{
				width: 100%;
				font-size: 16px;
				margin-top: 20px;
				li{
					width: 100%;
					margin-top: 10px;
					color: #9A9A9A;
				}
			}
		}
	}
</style>
