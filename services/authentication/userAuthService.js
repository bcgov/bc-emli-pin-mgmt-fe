import jwtDecode from 'jwt-decode'
import { parseCookies } from 'nookies'

const getUserInfo = (token) => {
  const userInfo = token ? jwtDecode(token): {};
  return userInfo;
}

const getTokenInfo = (ctx) => {
  const cookies = parseCookies(ctx);
  return cookies.token;
}


const checkRegisteredUser = (userInfo) =>{
  return userInfo.hasOwnProperty('role') && userInfo.hasOwnProperty('permissions')

}

const checkAuthentication = (ctx) =>{
  const token = getTokenInfo(ctx)
  const hasToken = token !== undefined
  const userInfo = hasToken ? getUserInfo(token) : ''
  const registration = checkRegisteredUser(userInfo)
  return {
    userAuthenticated: hasToken,
    userRegistered: registration,
  };
}

export {
  getUserInfo,
  checkAuthentication,
  getTokenInfo,
  checkRegisteredUser
}
