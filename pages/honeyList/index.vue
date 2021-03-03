<template>
	<view class="honey-list">
		<ul class="order-heard flex_bet">
			<li @tap="goBack()"><i class="icon iconfont icon-left"></i></li>
			<li class="my-love">my love list</li>
			<li></li>
		</ul>
		<view class="honey-content">
			<p class="honey-title">my love</p>
			<ul class="ul-honey">
				<li class="flex_bet" v-for="(item,index) in honeyList" :key="index">
					<view class="honey-warp" @tap="lookHoney()">
						<image class="honey-img" :src="imgPath" mode="widthFix"></image>
					</view>		
					<view class="honey-warp" @tap="lookHoney()">
						<image class="honey-img" :src="imgPath" mode="widthFix"></image>
					</view>
				</li>
			</ul>
		</view>
		<view class="look-img-warp" v-if="isLook" @click="isLook=false">
			<image class="look-img" :src="imgPath" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgPath:this.http+'/banner/case.png',
				honeyList:[1,2,3,4,5,6,7,8,9,0],
				isLook:false
			}
		},
		methods: {
			goBack(){
				uni.navigateBack();
			},
			lookHoney(){
				this.isLook=true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-heard{
		width: 100%;
		height: 50px;
		padding: 0 20px;
		background-color: #fff;
		box-sizing: border-box;
		font-size: 16px;
		border-bottom: 1px solid #ccc;
	}
	.honey-content{
		width: 100%;
		margin-top: 20px;
		background-color: #fff;
		padding: 20px;
		.honey-title{
			font-size: 18px;
			color: #000;
			margin-bottom: 20px;
		}
		.ul-honey{
			width: 100%;
			box-sizing: border-box;
			li{
				margin-bottom: 25px;
				margin-bottom: 25px;
			}
			.honey-warp{
				width: 150px;
				.honey-img{
					width: 100%;
				}
			}
		}
	}
	.look-img-warp{
		width: 100%;
		height: 100%;
		background: rgba($color: #000000, $alpha: 0.5);
		position: fixed;
		left: 0;
		top: 0;
		.look-img{
			position: fixed;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			width: 80%;
		}
	}

</style>
