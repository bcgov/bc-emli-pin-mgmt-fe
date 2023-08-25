import { useEffect } from "react";
import { useRouter } from "next/router";
import Endpoints from '../apiManager/endpoints'
import { checkAuthentication } from "../services/authentication/user";

export default function Index(props) {
  const {
    isAuthenticated,
  } = props;
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      window.location = Endpoints.auth.LOGIN;
    } else if (isAuthenticated) {
      void router.push("/home");
    }
  }, [isAuthenticated]);

  return <div></div>;
}

export async function getServerSideProps({ req, res, query: params }) {
  console.log(res);
  const userAuthenticated = true; //checkAuthentication(req);
  return {
    props: {
      isAuthenticated: userAuthenticated,
    },
  };
}
