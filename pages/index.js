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
  useEffect(() => {
    if (!isAuthenticated) {
      window.location.replace(Endpoints.auth.LOGIN)
    } else if (isAuthenticated) {
      const path = isRegistered ? '/home' : '/request-access'
      void router.push(path);
    }
  }, [isAuthenticated, isRegistered]);

  return <div></div>;
}

export async function getServerSideProps(ctx) {
  const { userAuthenticated, userRegistered } = checkAuthentication(ctx);

  return {
    props: {
      isAuthenticated: userAuthenticated,
      isRegistered: userRegistered,
    },
  };
}
