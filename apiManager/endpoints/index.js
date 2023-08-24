// import { AppConfig } from '../../config'

const Endpoints = {
    // TODO: rename the variable
    propertySearch: {
        GET_SEARCH_RESULTS: `${process.env.NEXT_PUBLIC_BE_APP_URL}/properties/address/`,
    },
    auth: {
      LOGIN: `${process.env.NEXT_PUBLIC_BE_APP_URL}/login`,
      LOGOUT: `${process.env.NEXT_PUBLIC_BE_APP_URL}/logout`,
    }
}

export default Endpoints
