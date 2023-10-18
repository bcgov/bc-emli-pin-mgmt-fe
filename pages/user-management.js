import Head from 'next/head'
import Text from '../assets/content/content.json'
import Header from '../components/Header/index'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation/index'
import {getUserInfo, getTokenInfo} from '../services/authentication/userAuthService'


export default function UserManagement(props) {
  const {
    userName,
    userInfo
  } = props;
  return (
    <>
      <Head>
        <title>{Text.userManagement.pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header userName={userName}/>
      {/* pass role for different active tabs */}
      <Navigation role={userInfo?.role} isUserRegistered={true}/>
      <main id="main">
        <div role="heading" aria-level="2">
        {Text.userManagement.pageTitle}
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps(ctx) {
  const authInfo = getTokenInfo(ctx)
  if (!authInfo) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const userInfo = getUserInfo(authInfo);
  return {
    props: {
      userName: `${userInfo.given_name} ${userInfo.family_name}`,
      userInfo
    },
  };
}
