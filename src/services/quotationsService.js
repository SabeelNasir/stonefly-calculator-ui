import { getRequest, putRequest, postRequest } from './requests'
export const getQuotations = () => {
    return new Promise((resolve, reject) => {
        getRequest('/quotations').then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const getQuotation = (id) => {
    return new Promise((resolve, reject) => {
        getRequest('/quotations/' + id).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const updateQuotation = (id, data) => {
    return new Promise((resolve, reject) => {
        putRequest(`/quotations/${id}`, data).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const saveQuotation = (data) => {
    return new Promise((resolve, reject) => {
        postRequest(`/quotations`, data).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}