import store from '../store'
import axios from 'axios'
import router from '../router'
import { Notification } from 'element-ui'

axios.defaults.withCredentials = true       // Allow cookie to add in request-headers automatically

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // config.headers.Authorization = 'Bearer ' + store.state.auth.token
    return config;
}, function (error) {
    return Promise.reject(error);
});
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error) {
        if (error.response.status == 401) {
            router.push({ path: '/logout' })
        } else {
            const { data } = error.response
            if (data) {
                Notification.error(data)
            } else {
                Notification.error(error.toString())
            }
        }
    }
    return Promise.reject(error);
});

export default axios