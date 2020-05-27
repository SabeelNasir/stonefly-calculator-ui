/** Custom css files */
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
// import '../assets/icons/themify-icons.css'

/** Some useful plugins import */
import { putRequest, postRequest, getRequest, deleteRequest } from '@/services/requests'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import VueFormWizard from 'vue-form-wizard'


/* Custom validation messages */
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule])
})
import validationMessages from '../utils/validation_custom_messages'
validationMessages(extend)


export default {
    install(Vue) {
        Vue.prototype.$postRequest = postRequest
        Vue.prototype.$putRequest = putRequest
        Vue.component('ValidationProvider', ValidationProvider)
        Vue.component('ValidationObserver', ValidationObserver)
        Vue.use(VueFormWizard)
    }
}