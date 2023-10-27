import axios from 'axios'
import Endpoints from '../endpoints/index'
import { data } from 'autoprefixer'

let config = {
    withCredentials: true,
    credentials: 'include',
}

const getSearchResults = (address) => {
    return axios.get(
        `${Endpoints.propertySearch.GET_SEARCH_RESULTS}${address}`,
        config
    )
}

const getPINHistory = (livePinId) => {
    return axios.get(
        `${Endpoints.managePIN.VIEW_PIN_HISTORY}${livePinId}`,
        config
    )
}

const getPropertyDetail = (siteID) => {
    return axios.get(
        `${Endpoints.propertySearch.GET_PROPERTY_DETATIL}?siteID=${siteID}`,
        config
    )
}

const expirePIN = (data) => {
    return axios.post(`${Endpoints.managePIN.EXPIRE_PIN}`, data, config)
}

const regeneratePIN = (data) => {
    return axios.post(`${Endpoints.managePIN.REGENERATE_PIN}`, data, config)
}

const submitUserAccessRequest = (data) => {
    return axios.post(Endpoints.requestAccess.REQUEST_ACCESS, data, config)
}

const getRequestList = (requestStatus) => {
  return axios.get(
    `${Endpoints.accessManagement.GET_REQUESTS}${requestStatus}`,
    config
  )
}

const updateAccessRequest = (data) => {
  return axios.put (Endpoints.requestAccess.REQUEST_ACCESS, data, config)
}

const HttpRequest = {
    expirePIN,
    getSearchResults,
    getPINHistory,
    getPropertyDetail,
    regeneratePIN,
    submitUserAccessRequest,
    getRequestList,
    updateAccessRequest,
}

export default HttpRequest
