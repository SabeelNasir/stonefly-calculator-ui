
export const apiUrl = process.env.NODE_ENV == 'development' ?
    'https://stonefly-api.herokuapp.com/api' : 'https://stonefly-api.herokuapp.com/api'

/* App Related constants */
const constants = {
    appTitle: 'Stonefly Calculator',
    companyUrl: "https://stonefly.com",
    companyTitle: "StoneFly",
    appLogo: "/img/brand/stonefly.jpg",
    currency: "$ "
}

export default {
    install(Vue) {
        Vue.prototype.$config = constants
    }
}