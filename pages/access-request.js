import Head from 'next/head'
import Link from 'next/link'
import Text from '../content.json'
import Header from '../components/Header/index'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation/index'
import {getUserInfo} from '../services/authentication/user'


export default function UserManagement(props) {
  const {
    userName
  } = props;
  return (
    <>
      <Head>
        <title>{Text.accessRequest.pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header userName={userName}/>
      {/* pass role for different active tabs */}
      <Navigation role="admin"/>
      <main id="main">
        <div role="heading" aria-level="2">
        {Text.accessRequest.pageTitle}
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps({ req }) {
  const userInfo = getUserInfo(req);
  return {
    props: {
      userName: `${userInfo.given_name} ${userInfo.family_name}`,
    },
  };
}

