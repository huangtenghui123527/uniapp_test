<template>
	<view class="goods-detail">
		<image class="detail-img" :src="imgPath" mode="widthFix"></image>
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
			
		}
	}
</script>

<style lang="scss" scoped>
	.goods-detail{
		width: 100%;
		height: 100%;
		.detail-img{
			width: 100%;
		}
	}
</style>
