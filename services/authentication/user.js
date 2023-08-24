const jwtDecode = require('jwt-decode');
const cookie = require('cookie');

const getUserInfo = (req) => {
  // TODO: check is token in present
  // TODO: if token expires or not available redirect to index page for triggering login flow
  let hasToken = cookie.parse(req.headers.cookie);
  const userInfo = jwtDecode(hasToken.token);
  return userInfo;
}

const checkAuthentication = (req) =>{
  let hasToken = cookie.parse(req.headers.cookie);
  return hasToken.token === undefined ? false : true;
}

export {
  getUserInfo,
  checkAuthentication
}
