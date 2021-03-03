<template>
	<view class="home">
		<u-swiper :list="bannerList" :height="360"></u-swiper>
		<u-tabs ref="tabs" name="value" :is-scroll="true" :list="tabList" :current="current" active-color="#f1170c" @change="swithTab"></u-tabs>
		<scroll-view class="tab-scroll" :scroll-into-view="scrollViewId" scroll-y="true" scroll-with-animation="true" @scroll="onScroll">
		  <view class="tab-item" v-for="item of tabList" :id="item.id" :key="item.key">
			   <Case :item="item"></Case>
		   </view>
		</scroll-view>
	</view>
</template>

<script>
	import {banner,tabs} from "@/static/js/datas.js";
	import Case from "./case.vue"
	export default {
		components:{Case},
		data() { 
			return {
				scrollTop:0,
				current:0,
				scrollViewId:'tab_01',
				bannerList: [],
				tabList: [],
				topList:[]
			};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		created(){
			this.bannerList = banner;
			this.tabList = tabs;
		},
		mounted(){
			this.$nextTick(()=>{
				this.getNodesInfo()
			})
		},
		methods:{
			swithTab(index){
				this.current = index;
				this.scrollViewId = this.tabList[index].id;
			},
				
			onScroll(event){
				let scrollTop = event.target.scrollTop;
				if(this.topList.length){
					if(scrollTop>=0&&scrollTop<this.topList[0]){
						this.current = 0;
						return ;
					}
					for(let i =0;i<this.topList.length;i++){
						let h1 = this.topList[i]
						let h2 = this.topList[i+1]
						if(scrollTop>=h1&&scrollTop<h2){
							this.current = i+1
						}
					}
				}else{
					this.current = 0
				}
	
			},
			getNodesInfo(){
				const query = uni.createSelectorQuery().in(this);
				query.selectAll('.tab-item').boundingClientRect().exec((res)=>{
					let nodes = res[0]
					let rel =[];
					nodes.map(item=>{
						rel.push(item.top)
					})
					this.topList =rel
				})
			}
		}
	}
</script>

<style lang="scss">
	.home{
		width: 100%;
		height: 100%;
		.tab-scroll{
			width: 100%;
			height: calc(100% - 450rpx);
		}
	}

</style>
