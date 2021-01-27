<template>
	<view class="case-warp">
		<view class="case-header flex_bet">
			<view class="case-title">
				<h4>{{item.value}}</h4>
			</view>
			<view class="case-icon">
				<span>全部{{item.key}}</span>
				<i class="icon iconfont icon-Right"></i>
			</view>
		</view>
		<scroll-view scroll-x style="height: 400rpx;width: 100%;">
			<ul class="case-ul clearfix" :style="{'width':ulWidth}">
			<!-- 	<li><img class="case-image" src="../../static/image/banner/case.png" ></img></li>
				<li><img class="case-image" src="../../static/image/banner/case.png" ></img></li>
				<li><img class="case-image" src="../../static/image/banner/case.png" ></img></li>
				<li><img class="case-image" src="../../static/image/banner/case.png" ></img></li> -->
				<li @tap="gotoDetail()"><image  class="case-image" :src="imgPath" mode="aspectFill"></image></li>
				<li @tap="gotoDetail()"><image  class="case-image" :src="imgPath" mode="aspectFill"></image></li>
				<li @tap="gotoDetail()"><image  class="case-image" :src="imgPath" mode="aspectFill"></image></li>
				<li @tap="gotoDetail()"><image  class="case-image" :src="imgPath" mode="aspectFill"></image></li>
			</ul>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object
		},
		data(){
			return {
				ulWidth:'0upx',
				imgList:[1,2,3,4],
				imgPath:this.http+'/banner/case.png'
			}
		},
		mounted() {
			this.ulWidth=this.imgList.length*305+'rpx';
			// console.log(this.ulWidth)
		},
		methods:{
			gotoDetail(){
				console.log('跳转')
				uni.navigateTo({
				    url: '/pages/details/index',
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.case-warp{
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;
		.case-header{
			padding: 15upx 0;
			.case-title{
				font-size: 34upx;
				font-weight: bold;
				color: #000;
			}
			.case-icon{
				font-size: 24upx;
				i{
					display: inline-block;
					font-size: 24upx;
					margin-left: 10upx;
				}
			}
		}
		.case-ul{
			padding: 15upx 0;
			width: 100%;
			// position: relative;
			// top: 0;
			// left: 0;
			li{
				width: 280upx;
				height: 360upx;
				float: left;
				margin-right: 25upx;
				position: relative;
				// background: url('../../static/image/banner/case.png') no-repeat fixed top/100%;
				.case-image{ 
					width: 100%;
					// width: auto;
					// height: auto;
					// max-width: 100%;
					// max-height: 100%;
					// position: absolute;
					// top: 50%;
					// left: 50%;
					// transform: translate(-50%,-50%);
				}
			}
		}
	}

</style>
