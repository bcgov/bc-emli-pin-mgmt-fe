import { hasKey } from 'utils';

APP_API_URL = '';
APP_PUBLIC_URL = '';
APP_REDASH_PUBLIC_URL = '';
APP_REDASH_COMMENTS_PUBLIC_URL = '';

// Analytics
APP_ANALYTICS_API_URL = '';

// Keycloak
APP_KEYCLOAK_URL = '';
APP_KEYCLOAK_CLIENT = '';
APP_KEYCLOAK_REALM = '';
APP_KEYCLOAK_ADMIN_ROLE = '';

// Constants
APP_ENGAGEMENT_PROJECT_TYPES = '';


// adding localStorage to access the MET API from external sources(eg: web-components)
const API_URL = localStorage.getItem('met-api-url') || getEnv('REACT_APP_API_URL');
const PUBLIC_URL = localStorage.getItem('met-public-url') || getEnv('REACT_APP_PUBLIC_URL');
// const REDASH_DASHBOARD_URL = getEnv('REACT_APP_REDASH_PUBLIC_URL');
// const REDASH_CMNTS_DASHBOARD_URL = getEnv('REACT_APP_REDASH_COMMENTS_PUBLIC_URL');

// Keycloak Environment Variables
const KC_URL = APP_API_URL; 
const KC_CLIENT = APP_KEYCLOAK_CLIENT;
const KC_REALM = APP_KEYCLOAK_REALM;
const KC_ADMIN_ROLE = APP_KEYCLOAK_ADMIN_ROLE;

const AppConfig = {
    apiUrl: API_URL,
    publicUrl: PUBLIC_URL,
    keycloak: {
        url: KC_URL || '',
        clientId: KC_CLIENT || '',
        realm: KC_REALM || '',
        adminRole: KC_ADMIN_ROLE || 'admin',
    },
    constants: {
        engagementProjectTypes: ENGAGEMENT_PROJECT_TYPES,
    },
};

module.exports = AppConfig
