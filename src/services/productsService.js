import { getRequest, putRequest, postRequest } from './requests'
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        getRequest('/products').then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        getRequest('/products/' + id).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const updateProduct = (id, data) => {
    return new Promise((resolve, reject) => {
        putRequest(`/products/${id}`, data).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const saveProduct = (data) => {
    return new Promise((resolve, reject) => {
        postRequest(`/products`, data).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}