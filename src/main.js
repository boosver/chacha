import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
Vue.config.productionTip = false;
// Axios.defaults.headers.common = {
//   'X-CSRF-TOKEN':document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
//   'X-Requested-With': 'XMLHttpRequest'
// };
 //将axios挂载在Vue扩展上
 axios.defaults.withCredentials = true
 Vue.prototype.$ajax=axios

Vue.apis = 'https://wx.gkapay.com/'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
