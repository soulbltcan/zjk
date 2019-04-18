// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

Axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
Axios.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
Axios.defaults.baseURL = "http://127.0.0.1:8080/backstage_management_system/";
Axios.defaults.transformRequest = [ function(data){
    return qs.stringify(data);
} ];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
