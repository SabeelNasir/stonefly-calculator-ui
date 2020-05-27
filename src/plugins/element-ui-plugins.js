import 'element-ui/lib/theme-chalk/index.css';
/* import {
    Input,
    Icon,
    Button,
    Select,
    Option,
    OptionGroup,
    Checkbox,
    CheckboxGroup,
    Notification,
    Message,
    Slider
} from 'element-ui'

export default {
    install(Vue) {
        Vue.use(Input)
        Vue.use(Icon)
        Vue.use(Button)
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(OptionGroup)
        Vue.use(Checkbox)
        Vue.use(CheckboxGroup)
        Vue.use(Message)
        Vue.use(Notification({
            iconClass: 'fa fa-check'
        }))
        Vue.use(Slider)
        Vue.prototype.message = Message
        // Vue.prototype.$notify = Notification
    }
} */
import ElementUi from 'element-ui'
export default {
    install(Vue) {
        Vue.use(ElementUi)
    }
}