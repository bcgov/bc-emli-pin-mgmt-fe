import Head from 'next/head'
import Text from '../assets/content/content.json'
import Header from '../components/Header/index'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation/index'
import { UserManagementProvider } from '../context/userManagementContext/UserManagementState'
import UserManagementLayout from '../components/UserManagement/UserManagementLayout'
import {getUserInfo, getTokenInfo} from '../services/authentication/userAuthService'
import checkAuthorization from '../services/authorization/accessService'
import { getUserName } from '../utils/helper'

export default function UserManagement(props) {
  const {
    userName,
    userInfo,
    supportTicketUrl
  } = props;
  return (
    <>
      <Head>
        <title>{Text.userManagement.pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header userName={userName} supportTicketUrl={supportTicketUrl} />
      {/* pass role for different active tabs */}
      <Navigation role={userInfo?.role} isUserRegistered={true}/>
      <main id="main">
        <div role="heading" aria-level="2">
          <UserManagementProvider>
            <UserManagementLayout role={userInfo?.role}/>
          </UserManagementProvider>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps(ctx) {
  const authInfo = getTokenInfo(ctx)
  const currentPath = '/user-management'
  if (!authInfo) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const supportTicketUrl = process.env.NEXT_PUBLIC_SUBMIT_SUPPORT_TICKET_URL
  const userInfo = getUserInfo(authInfo);
  checkAuthorization(ctx, currentPath, userInfo)
  return {
    props: {
      userName: getUserName(userInfo),
      userInfo,
      supportTicketUrl
    },
  };
}
