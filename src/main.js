import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import config from './config/config'
import BootstrapVuePlugins from './plugins/bootstrap-vue-plugins'
import ElementUiPlugins from './plugins/element-ui-plugins'
import MyPluginsComponentsFunctions from './utils/globalFunctionsAndPlugins'

Vue.config.productionTip = false

Vue.use(ArgonDashboard)
Vue.use(config)
Vue.use(BootstrapVuePlugins)
Vue.use(ElementUiPlugins)
Vue.use(MyPluginsComponentsFunctions)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
