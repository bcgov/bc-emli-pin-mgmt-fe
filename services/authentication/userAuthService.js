const jwtDecode = require('jwt-decode')
const cookie = require('cookie')

const getUserInfo = (token) => {
  const userInfo = token ? jwtDecode(token): {};
  return userInfo;
}

const checkAuthorization = (userInfo) =>{
  return userInfo.hasOwnProperty('role') && userInfo.hasOwnProperty('permissions')

}

const checkAuthentication = (params) =>{
  let hasToken = params.token !== undefined;
  console.log(typeof window)
  if (hasToken) {
    cookie.serialize('s-token', params.token)
  }
  const userInfo = hasToken ? getUserInfo(params.token) : ''
  const registration = checkAuthorization(userInfo)
  return {
    userAuthenticated: hasToken,
    userRegistered: registration,
  };
}

export {
  getUserInfo,
  checkAuthentication
}
