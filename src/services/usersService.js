import { getRequest } from './requests'
export const getUsers = () => {
    return new Promise((resolve, reject) => {
        getRequest('/users').then(data => {
            resolve(data)
        }).catch(error => reject(error))
    })
}