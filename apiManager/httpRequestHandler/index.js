import axios from 'axios'
import Endpoints from '../endpoints/index'
import { data } from 'autoprefixer'



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

const getPropertyDetail = (siteID) => {
    return axios.get(
        `${Endpoints.propertySearch.GET_PROPERTY_DETATIL}?siteID=${siteID}`,
        {
            mode: 'cors',
            withCredentials: false,
        }
    )
}

const expirePIN = (data) => {
    return axios.post(`${Endpoints.managePIN.EXPIRE_PIN}`, data)
}

const regeneratePIN = (data) =>{
    return axios.post(`${Endpoints.managePIN.REGENERATE_PIN}`, data)
}

const submitUserAccessRequest = (data) => {
  let config = {
    withCredentials: true,
    credentials: 'include',
  }
  return axios.post (Endpoints.requestAccess.REQUEST_ACCESS, data, config)
}

const HttpRequest = {
    expirePIN,
    getSearchResults,
    getPINHistory,
    getPropertyDetail,
    regeneratePIN,
    submitUserAccessRequest
}

export default HttpRequest
