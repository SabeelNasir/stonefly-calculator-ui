import { getRequest, putRequest, postRequest } from './requests'
export const getCompanies = () => {
    return new Promise((resolve, reject) => {
        getRequest('/companies').then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const getCompany = (id) => {
    return new Promise((resolve, reject) => {
        getRequest('/companies/' + id).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const updateCompany = (id, data) => {
    return new Promise((resolve, reject) => {
        putRequest(`/companies/${id}`, data).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}
export const saveCompany = (data) => {
    return new Promise((resolve, reject) => {
        postRequest(`/companies`, data).then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}