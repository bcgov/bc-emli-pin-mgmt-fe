// import { AppConfig } from '../../config'

const Endpoints = {
    // TODO: rename the variable
    propertySearch: {
        GET_SEARCH_RESULTS: `${process.env.NEXT_PUBLIC_BE_APP_URL}/properties/address/`,
        GET_PROPERTY_DETATIL: `${process.env.NEXT_PUBLIC_BE_APP_URL}/properties/details`
    },
    managePIN: {
        EXPIRE_PIN: `${process.env.NEXT_PUBLIC_BE_APP_URL}/pins/expire/`,
        VIEW_PIN_HISTORY: `${process.env.NEXT_PUBLIC_BE_APP_URL}/audit-trails?livePinIds=`,
        REGENERATE_PIN: `${process.env.NEXT_PUBLIC_BE_APP_URL}/pins/regenerate/`,
    },
    auth: {
        LOGIN: `${process.env.NEXT_PUBLIC_BE_APP_URL}/login`,
        LOGOUT: `${process.env.NEXT_PUBLIC_BE_APP_URL}/logout`,
    },
    requestAccess: {
      REQUEST_ACCESS: `${process.env.NEXT_PUBLIC_BE_APP_URL}/user-requests`,
    },
    accessManagement: {
      GET_REQUESTS: `${process.env.NEXT_PUBLIC_BE_APP_URL}/user-requests/?status=`,
    }
}

export default Endpoints
