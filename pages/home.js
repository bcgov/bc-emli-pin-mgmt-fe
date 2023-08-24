import Head from 'next/head'
import Content from '../content.json'
import Header from '../components/Header/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation/index'
import PropertySearchHeader from '../components/Property/PropertySearchHeader/PropertySearchHeader'
import PropertySearch from '../components/Property/PropertySearch/PropertySearch'
import {getUserInfo} from '../services/authentication/user'

export default function Home(props) {
  const {
    userName
  } = props;
    return (
        <>
            <Head>
                <title>{Content.app.title}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header userName={userName}/>
            {/* pass role for different active tabs */}
            <Navigation role="admin" />
            <main id='main' className='w-full h-full text-center' data-testid="homepage">
                <PropertySearchHeader />
                <div className='homePropertySearchWrap'>
                    <PropertySearch/>
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

