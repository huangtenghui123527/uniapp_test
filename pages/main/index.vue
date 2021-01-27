<template>
	<view id="main-app">
		<home  v-if="page_code==='home'" ></home>
		<information  v-if="page_code==='information'"></information>
		<help  v-if="page_code==='help'"></help>
		<mine  v-if="page_code==='mine'"></mine>
		
		<Navigater @swithTab="swithTab"/>
	</view>
</template>

<script>
	import Home from "../home/index.vue"
	import Information from "../information/index.vue"
	import Help from "../help/index.vue"
	import Mine from "../mine/index.vue"
	import Navigater from "../../wxComponents/Navigater/index.vue"
	export default {
		components:{
			Home,Information,Help,Mine,Navigater
		},
		data(){
			return{
				page_code:"home"
			}
		},
		methods:{
			swithTab(code){
				this.page_code = code;
			}
		}
	}
</script>

<style lang="stylus">
	// @import("./main_app.stylus");
	#main-app{
		width 100%;
		height 100%;
		position relative;
		overflow-y: scroll;
	}
</style>
