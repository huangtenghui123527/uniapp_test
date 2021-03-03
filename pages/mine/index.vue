<template>
	<view class="container">
		<image class="container-bg" :src="imgbgPath" ></image>
		<div class="box-wrap">   
		    <div class="rect">   
		        <div class="top slide"><img :src="imgCubePath"></div>   
		        <div class="bottom slide"><img :src="imgCubePath"></div>
		        <div class="left slide"><img :src="imgCubePath"></div>
		        <div class="right slide"><img :src="imgCubePath"></div>
		        <div class="front slide"><img :src="imgCubePath"></div>
		        <div class="back slide"><img :src="imgCubePath"></div>
		    </div>
		 </div>
		 <div class="photo_wrap">
			<div class="photo_box">
			    <img v-for="(item,index) of photoRow" :key="index" :src="imgCubePath">
<!-- 			    <img :src="imgCubePath">
			    <img :src="imgCubePath">
			    <img :src="imgCubePath">
			    <img :src="imgCubePath">
			    <img :src="imgCubePath">
			    <img :src="imgCubePath">
			    <img :src="imgCubePath">
			    <img :src="imgCubePath">
			    <img :src="imgCubePath">
			    <img :src="imgCubePath"> -->
			</div>
		 </div> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgbgPath:this.http+'mine/starry_sky.png',
				imgCubePath:this.http+'mine/timg.jpg',
				photoRow:[1,2,3,4,5,6,7,8,9,10,11,12]
			};
		}
	}
</script>

<style lang="stylus">
	@import("./cubeRotating.stylus");
	@import("./annulusRotating.stylus");
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
