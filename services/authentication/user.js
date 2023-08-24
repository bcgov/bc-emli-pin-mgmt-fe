const jwtDecode = require('jwt-decode');
const cookie = require('cookie');

export const getUserInfo = (req) => {
  let hasToken = cookie.parse(req.headers.cookie);
  const userInfo = jwtDecode(hasToken.token);
  return userInfo;
}

