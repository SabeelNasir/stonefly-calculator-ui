import auth from './modules/auth'
import progress from './modules/progress'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        auth,
        progress
    }
})
export default store