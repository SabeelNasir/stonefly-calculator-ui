import { apiUrl } from '../config/config'
export const getFileUrl = (imageName) => {
    return `${apiUrl}/files/${imageName}`
}
export const getUploadFileUrl = () => {
    return `${apiUrl}/products/upload-image`
}