import { useEffect } from "react";
import { useRouter } from "next/router";
import Endpoints from '../apiManager/endpoints'
import { checkAuthentication } from "../services/authentication/userAuthService";

export default function Index(props) {
  const {
    isAuthenticated,
    isRegistered,
  } = props;
  const router = useRouter();
  console.log('Endpoint',Endpoints.auth.LOGIN, Endpoints.auth.LOGOUT );
  useEffect(() => {
    console.log('calling from useEffect');
    if (!isAuthenticated) {
      console.log('calling from useEffect in if !isAuthenticated');
      window.location.replace("https://bc-emli-pin-mgmt-prod-be.apps.silver.devops.gov.bc.ca/login")
    } else if (isAuthenticated) {
      const path = isRegistered ? '/home' : '/request-access'
      void router.push(path);
    }
  }, [isAuthenticated, isRegistered, router]);

  return <div></div>;
}

export async function getServerSideProps(ctx) {
  const { userAuthenticated, userRegistered } = checkAuthentication(ctx);
  console.log(userAuthenticated,'-', userRegistered);
  console.log('Endpoint server side',Endpoints.auth.LOGIN, Endpoints.auth.LOGOUT );

  return {
    props: {
      isAuthenticated: userAuthenticated,
      isRegistered: userRegistered,
    },
  };
}
