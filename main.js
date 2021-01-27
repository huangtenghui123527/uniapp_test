import Vue from 'vue'
import App from './App'
import store from './store'
import uView from "uview-ui";
// import VueiClient from '@supermap/vue-iclient-mapboxgl';
import "@/static/css/reset.css"
import "@/static/font/iconfont.css"
Vue.config.productionTip = false
Vue.use(uView);
// Vue.use(VueiClient);
 Vue.prototype.http = 'http://192.168.12.218:8080/'
 
App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
