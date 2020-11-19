import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios';
import qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css'
// import VueCompositionApi from '@vue/composition-api'

Vue.use(ElementUI)
// Vue.use(VueCompositionApi)
Vue.config.productionTip = false
Vue.prototype.$qs = qs
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
}).$mount('#app')
