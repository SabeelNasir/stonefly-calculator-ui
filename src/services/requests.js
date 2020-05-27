import axios from './interceptors'
import { apiUrl } from '@/config/config'
import formUrlEncoded from 'form-urlencoded'
import store from '../store'
axios.defaults.baseURL = apiUrl


const getRequest = (uri) => {
   store.commit('progress/mainLoader', true)
   return new Promise((resolve, reject) => {
      axios.get(uri).then(data => {
         resolve(data.data.data)
         store.state.progress.mainLoader = false
      }).catch(error => {
         reject(error)
      })
   })
}
const postRequest = (uri, data, contentType = 'application/json') => {
   store.state.progress.mainLoader = true
   if (contentType == 'application/x-www-form-urlencoded') {
      data = formUrlEncoded(data)
   }
   return new Promise((resolve, reject) => {
      axios.post(uri, data).then(data => {
         console.log(data.headers)
         resolve(data.data.data)
         store.state.progress.mainLoader = false
      }).catch(error => {
         reject(error)
         store.state.progress.mainLoader = false
      })
   })
}
const patchRequest = (uri, data) => {
   store.state.progress.mainLoader = true
   return new Promise((resolve, reject) => {
      axios.patch(uri, data).then(data => {
         resolve(data.data.data)
         store.state.progress.mainLoader = false
      }).catch(error => {
         reject(error)
         store.state.progress.mainLoader = false
      })
   })
}
const putRequest = (uri, data) => {
   store.state.progress.mainLoader = true
   return new Promise((resolve, reject) => {
      axios.put(uri, data).then(data => {
         resolve(data.data.data)
         store.state.progress.mainLoader = false
      }).catch(error => {
         reject(error)
         store.state.progress.mainLoader = false
      })
   })
}
const deleteRequest = (uri, data) => {
   store.state.progress.mainLoader = true
   return new Promise((resolve, reject) => {
      axios.delete(uri, data).then(resp => {
         resolve(resp.data.data)
         store.state.progress.mainLoader = false
      }).catch(error => {
         reject(error)
         store.state.progress.mainLoader = false
      })
   })
}
export { getRequest, postRequest, patchRequest, deleteRequest, putRequest }