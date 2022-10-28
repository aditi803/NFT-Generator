const API_BASE_URL = 'https://nftsgenerator.herokuapp.com';
const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
const LOGIN_API = getApiUrl('/api/user/login');
const SIGN_UP_API = getApiUrl('/api/user/register');
export {
     SIGN_UP_API,LOGIN_API
}