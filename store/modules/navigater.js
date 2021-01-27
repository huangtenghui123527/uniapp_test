const state = {
	tabData:[{
		path:'/pages/home/index',
		iconPath:'/static/image/nav/home.png',
		selectPath:'/static/image/nav/select_home.png',
		title:'首页',
		select:true
	},{
		path:'/pages/information/index',
		iconPath:'/static/image/nav/Information.png',
		selectPath:'/static/image/nav/select_Information.png',
		title:'资讯',
		select:false
	},{
		path:'/pages/help/index',
		iconPath:'/static/image/nav/Help.png',
		selectPath:'/static/image/nav/select_help.png',
		title:'帮助',
		select:false
	},{
		path:'/pages/mine/index',
		iconPath:'/static/image/nav/user.png',
		selectPath:'/static/image/nav/select_user.png',
		title:'我的',
		select:false
	}]
};

const mutations ={
	SET_TAB:(state,tabData)=>{
		state.tabData=tabData;
	}
}

const actions={
	toggleSwithTab({commit,state},nav){
		let tabArr=state.tabData;
		for(let item of tabArr){
			item.select=false;
			if(item.title==nav.title){
				item.select=true;
				// uni.navigateTo({
				// 	url:nav.path,
				// 	animationType:"none",
				// 	animationDuration:0
				// })
			}
		}
		commit("SET_TAB",tabArr)
		// this.tabData=tab;
	}
}

export default{
	namespaced:true,
	state,
	mutations,
	actions
}