import router from '../router'
import store from '../store'
import { postRequest } from './requests'

const logout = () => {
    alert('asdfadsfsdaf')
    return new Promise(resolve, reject => postRequest('/logout')
        .then(() => resolve())).catch((error) => reject(error))
}


const getToken = () => {
    return localStorage.getItem('token') || ''
}
const setToken = (token) => {
    localStorage.setItem('token', token)
}

const setCurrentUser = (user) => {
    return new Promise(resolve => {
        if (user) {
            localStorage.setItem('user', user)
        } else {
            localStorage.removeItem('user')
        }
        resolve()
    })

}

export default {
    logout, getToken, setToken, setCurrentUser
}