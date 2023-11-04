import Head from 'next/head'
import Content from '../assets/content/content.json'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation/index'
import { getUserInfo, getTokenInfo } from '../services/authentication/userAuthService'
import PropertyLayout from '../components/Property/PropertyLayout'

export default function Home(props) {
    const { userName, userInfo } = props
    return (
        <>
            <Head>
                <title>{Content.app.title}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header userName={userName} />
            {/* pass role for different active tabs */}
            <Navigation role={userInfo?.role} isUserRegistered={true}/>
            <main id='main' className='w-full h-full text-center' data-testid="homepage">
                <PropertyLayout />
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
      userName: getUserName(userInfo),
      userInfo: userInfo
    },
  };
}