<template>
	<view class="page-section page-section-gap">
		<map style="width: 100%; height: 100%;" 
			:latitude="latitude" 
			:longitude="longitude" 
			:markers="covers"
			@markertap="tapClick">
		</map>
	</view>
</template>
<!-- select_help -->
<script>
	export default {
		data() {
			return {
				id:0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: []
			};
		},
		mounted() {
			uni.getLocation({
				type: 'gcj02',
				success: res => {
					// console.log(res);
					this.latitude=res.latitude;
					this.longitude=res.longitude;
					this.covers=[{
						id:'001',
						latitude: res.latitude,
						longitude: res.longitude,
						iconPath: '../../static/image/nav/select_help.png'
					}]
				},
				fail: (err) => {
					console.log(err)
				},
			});
		},
		methods:{
			tapClick(event){
				console.log(event)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-section{
		width: 100%;
		height: 100%;
	}
</style>
