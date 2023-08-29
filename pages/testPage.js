import { useState } from 'react'
import ManagePINDropdown from '../components/Property/ManagePINDropdown/ManagePINDropdown'

export default function TestPage() {
    return (
        <div>
            <ManagePINDropdown
                livePinId="1234"
                expirationReason="OP"
                expiredByName="John Smith"
                expiredByUsername="jsmith"
            />
        </div>
    )
}
