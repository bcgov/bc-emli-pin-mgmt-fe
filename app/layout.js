import { headers } from 'next/headers'
import Script from 'next/script'
 
export default function RootLayout({children}) {
  const nonce = headers().get('x-nonce')
 
  return (
    <>
      {/* <html>
        <body>
          {children}
        </body>
      </html> */}
      <Script src="snowplow.js" strategy="beforeInteractive" nonce={nonce} />
    </>
  )
}