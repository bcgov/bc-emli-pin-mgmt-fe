import { useEffect } from "react";
import { useRouter } from "next/router";
import Endpoints from '../apiManager/endpoints'
import { checkAuthentication } from "../services/authentication/userAuthService";

export default function Index(props) {
  const {
    isAuthenticated,
    isRegistered,
    login,
    logout
  } = props;
  const router = useRouter();
  console.log('Endpoint', login, logout );
  useEffect(() => {
    console.log('calling from useEffect');
    if (!isAuthenticated) {
      console.log('calling from useEffect in if !isAuthenticated');
      window.location.replace(login)
    } else if (isAuthenticated) {
      const path = isRegistered ? '/home' : '/request-access'
      void router.push(path);
    }
  }, [isAuthenticated, isRegistered, login, logout]);

  return <div></div>;
}

export async function getServerSideProps(ctx) {
  const { userAuthenticated, userRegistered } = checkAuthentication(ctx);
  const login = Endpoints.auth.LOGIN
  const logout = Endpoints.auth.LOGOUT

  console.log(userAuthenticated,'-', userRegistered);
  console.log('Endpoint server side',Endpoints.auth.LOGIN, Endpoints.auth.LOGOUT );

  return {
    props: {
      isAuthenticated: userAuthenticated,
      isRegistered: userRegistered,
      login: login,
      logout: logout
    },
  };
}
