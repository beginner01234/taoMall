import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import './css/common.css'


// const app = createApp();
Vue.use(Vant);
Vue.use(VueAxios, axios)



Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')