<template>
	<view class="nav-warp">
		<ul class="btn-area clearfix">
			<li v-for="(item,index) of tabData"  @tap="swithTab(item)" :key="index" :class="item.title=='样品'?'shopping_mall':''">
				<i class="icon iconfont" :class="item.select?'current_select '+item.icon:item.icon"></i>
				<text :class="item.select?'current_select':''">{{item.title}}</text>
			</li>
		</ul>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		// computed: {
		// 	...mapState({
		// 		tabData: state => state.navigater.tabData,
		// 	}),
		// },
		data() {
			return {
				tabData:[{
					icon:'icon-home',
					title:'首页',
					name:'home',
					select:true
				},{
					icon:'icon-zixun',
					title:'案例',
					name:'information',
					select:false
				},{
					icon:'icon-suoyoushangpin2',
					title:'样品',
					name:'shoppingMall',
					select:false
				},{
					icon:'icon-help',
					title:'帮助',
					name:'help',
					select:false
				},{
					icon:'icon-mine',
					title:'我的',
					name:'mine',
					select:false
				}]
			};
		},
		created () {
          // const demo = uni.getMenuButtonBoundingClientRect()
			// demo.bottom=0;
			// demo.left=0;
        },
		methods:{
			swithTab(nav){ 
				for(let item of this.tabData){
					item.select=false;
					if(item.title==nav.title){
						item.select=true;
					}
				}
				// this.$store.dispatch('navigater/toggleSwithTab',nav)
				this.$emit("swithTab",nav.name)
			}
		}
	}
</script>

<style lang="stylus">
	@import("./nav.stylus");
</style>
