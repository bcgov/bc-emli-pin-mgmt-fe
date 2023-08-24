import axios from 'axios'
import Endpoints from '../endpoints'
// import UserService from 'services/userService';

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
    console.log('getSearchResults')
    return axios.get(
        `${Endpoints.propertySearch.GET_SEARCH_RESULTS}${address}`,
        {
            mode: 'cors',
            withCredentials: false,
        }
    )
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
    getSearchResults,
}

export default HttpRequest
