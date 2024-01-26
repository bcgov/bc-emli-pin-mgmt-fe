import { headers } from 'next/headers'

const nonce = headers().get('x-nonce')

export default nonce