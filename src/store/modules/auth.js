/* eslint-disable */
const state = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
}
const mutations = {
    setUser(state, data) {
        localStorage.setItem('user', JSON.stringify(data.profile))
        localStorage.setItem('token', data.token)
        state.user = data.user
        state.token = data.token
    },
    logout(state) {
        console.log('removing localstorage')
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        state.user = {
            email: null,
            role: null
        }
        state.token = null
    }
}
const getters = {
    getUser: () => {
        return state.user
    },
    isLoggedIn: () => {
        return state.token != null
    }
}
const actions = {
    logout(context) {
        context.commit('logout')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}