import axios from 'axios'
import Endpoints from '../endpoints/index'

// GET request example
const GetRequest = (url, params = {}, headers = {}) => {
    return axios.get(url, {
        params: params,
        headers: {
            // 'Content-type': 'application/json',
            // Authorization: `Bearer ${UserService.getToken()}`,
            // 'tenant-id': `${sessionStorage.getItem('tenantId')}`,
            // ...headers,
        },
    })
}

const getSearchResults = (address) => {
    return axios.get(
        `${Endpoints.propertySearch.GET_SEARCH_RESULTS}${address}`,
        {
            mode: 'cors',
            withCredentials: false,
        }
    )
}

const getPINHistory = (livePinId) => {
    return axios.get(`${Endpoints.managePIN.VIEW_PIN_HISTORY}${livePinId}`, {
        mode: 'cors',
        withCredentials: false,
    })
}

// POST request example
const PostRequest = (url, data = {}, params = {}) => {
    return axios.post(url, data, {
        params,
        headers: {
            // 'Content-type': 'application/json',
            // Authorization: `Bearer ${UserService.getToken()}`,
            // 'tenant-id': `${sessionStorage.getItem('tenantId')}`,
        },
    })
}

const expirePIN = (data) => {
    return axios.post(`${Endpoints.managePIN.EXPIRE_PIN}`, data)
}

// PUT request example
const PutRequest = (url, data = {}, params = {}) => {
    return axios.put(url, data, {
        params,
        headers: {
            // 'Content-type': 'application/json',
            // Authorization: `Bearer ${UserService.getToken()}`,
            // 'tenant-id': `${sessionStorage.getItem('tenantId')}`,
        },
    })
}

// PATCH request example
const PatchRequest = (url, data = {}) => {
    return axios.patch(url, data, {
        headers: {
            // 'Content-type': 'application/json',
            // Authorization: `Bearer ${UserService.getToken()}`,
            // 'tenant-id': `${sessionStorage.getItem('tenantId')}`,
        },
    })
}

// DELETE request example
const DeleteRequest = (url, params = {}) => {
    return axios.delete(url, {
        params: params,
        headers: {
            // 'Content-type': 'application/json',
            // Authorization: `Bearer ${UserService.getToken()}`,
            // 'tenant-id': `${sessionStorage.getItem('tenantId')}`,
        },
    })
}

export const OSSGetRequest = (url, requestOptions) => {
    return axios.get(url, {
        headers: {
            // 'X-Amz-Date': requestOptions.amzDate,
            // Authorization: requestOptions.authHeader,
            // 'tenant-id': `${sessionStorage.getItem('tenantId')}`,
        },
        responseType: 'blob',
    })
}

export const OSSPutRequest = (url, data, requestOptions) => {
    return axios.put(url, data, {
        headers: {
            // 'X-Amz-Date': requestOptions.amzDate,
            // Authorization: requestOptions.authHeader,
            // 'tenant-id': `${sessionStorage.getItem('tenantId')}`,
        },
    })
}

const HttpRequest = {
    GetRequest,
    PostRequest,
    PutRequest,
    PatchRequest,
    DeleteRequest,
    OSSGetRequest,
    OSSPutRequest,
    expirePIN,
    getSearchResults,
    getPINHistory,
}

export default HttpRequest
