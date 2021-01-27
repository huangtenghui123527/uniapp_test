<template>
	<view class="container">
		<image class="container-bg" :src="imgPath" ></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgPath:this.http+'mine/starry_sky.png'
			};
		}
	}
</script>

<style lang="stylus">
	.container{
		position relative;
		width 100%;
		height 100%;
		.container-bg{
			position absolute;
			width 100%;
			height 100%;
		}
	}
</style>
