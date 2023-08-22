// import { AppConfig } from '../../config'

const Endpoints = {
    // TODO: rename the variable
    Engagement: {
        // GET_LIST: `${AppConfig.apiUrl}/engagements/`,
        // CREATE: `${AppConfig.apiUrl}/engagements/`,
        // UPDATE: `${AppConfig.apiUrl}/engagements/`,
        // GET: `${AppConfig.apiUrl}/engagements/engagement_id`,
        GET_SEARCH_RESULTS: `${process.env.NEXT_PUBLIC_BE_APP_URL}/properties/address/`,
    },
}

export default Endpoints
