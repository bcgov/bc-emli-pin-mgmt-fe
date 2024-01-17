// import { AppConfig } from '../../config'
import beUrlConfig from '../../api-url.config'

import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig();
const {
  appEnv
} = publicRuntimeConfig;

let beAppUrl;

if (process.env.ENV) {
  beAppUrl = beUrlConfig[process.env.ENV]
}

// const isServer = typeof window === 'undefined';
const backendApiUrl = process.env.NEXT_PUBLIC_BE_APP_URL ? process.env.NEXT_PUBLIC_BE_APP_URL : beAppUrl;
const Endpoints = {
    // TODO: rename the variable
    propertySearch: {
        GET_SEARCH_RESULTS: `${backendApiUrl}/properties/address/`,
        GET_PROPERTY_DETATIL: `${backendApiUrl}/properties/details`
    },
    managePIN: {
        EXPIRE_PIN: `${backendApiUrl}/pins/expire/`,
        VIEW_PIN_HISTORY: `${backendApiUrl}/audit-trails?livePinIds=`,
        REGENERATE_PIN: `${backendApiUrl}/pins/regenerate/`,
    },
    auth: {
        LOGIN: `${backendApiUrl}/login`,
        LOGOUT: `${backendApiUrl}/logout`,
    },
    requestAccess: {
      REQUEST_ACCESS: `${backendApiUrl}/user-requests`,
    },
    accessManagement: {
      GET_REQUESTS: `${backendApiUrl}/user-requests/?status=`,
    },
    userManagement: {
      GET_USERS: `${backendApiUrl}/users/?active=`,
      DEACTIVATE_USER: `${backendApiUrl}/users/deactivate`,
      UPDATE_USER: `${backendApiUrl}/users`
    },
    dashboard: {
      GET_URL: `${backendApiUrl}/dashboard`
    }
}

export default Endpoints
