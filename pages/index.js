import { useEffect } from "react";
import { useRouter } from "next/router";
import * as cookie from 'cookie'

export default function Index(props) {
  const {
    isAuthenticated,
  } = props;
  const router = useRouter();
  console.log('props valie',isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {

      console.log("No JWT");
      window.location = 'http://localhost:3000/login';
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
