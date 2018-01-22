import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

/* eslint-disable no-new */
Vue.use(VueLazyload,{
    load:require('common/image/default.png')
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
