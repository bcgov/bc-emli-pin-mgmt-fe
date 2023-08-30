// import { AppConfig } from '../../config'

const Endpoints = {
    // TODO: rename the variable
    propertySearch: {
        GET_SEARCH_RESULTS: `${process.env.NEXT_PUBLIC_BE_APP_URL}/properties/address/`,
    },
    managePIN: {
        EXPIRE_PIN: `${process.env.NEXT_PUBLIC_BE_APP_URL}/pins/expire/`,
        VIEW_PIN_HISTORY: `${process.env.NEXT_PUBLIC_BE_APP_URL}/audit-trails?livePinIds=`,
    },
    auth: {
        LOGIN: `${process.env.NEXT_PUBLIC_BE_APP_URL}/login`,
        LOGOUT: `${process.env.NEXT_PUBLIC_BE_APP_URL}/logout`,
    },
}

export default Endpoints
