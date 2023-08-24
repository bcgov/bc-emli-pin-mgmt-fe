import { useEffect } from "react";
import { useRouter } from "next/router";
import * as cookie from 'cookie'
import Endpoints from '../apiManager/endpoints'

export default function Index(props) {
  const {
    isAuthenticated,
  } = props;
  const router = useRouter();
  console.log('props valie',isAuthenticated);
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
  let hasToken = cookie.parse(req.headers.cookie);
  const userAuthenticated = hasToken.token === undefined ? false : true;
  console.log(userAuthenticated);
  return {
    props: {
      isAuthenticated: userAuthenticated,
    },
  };
}
