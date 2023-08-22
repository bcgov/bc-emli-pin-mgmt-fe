import '../styles/globals.css'

console.log(process.env.NEXT_PUBLIC_BE_APP_URL)
console.log(process.env.BE_APP_URL)

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
