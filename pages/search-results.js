import { useEffect, useState } from 'react'
import axios from 'axios'
import AddressCard from '../components/Address Card'

export default function SearchResults() {
    const [results, setResults] = useState()

    useEffect(() => {
        axios
            .get(
                'http://localhost:3000/properties/address/50%20main%20street',
                {
                    mode: 'cors',
                }
            )
            .then((response) => {
                console.log(response.data.results)
                setResults(response.data.results)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <h1>{results?.length} addresses found.</h1>
            <div>
                {results?.map((result) => (
                    <AddressCard
                        key={result.siteID}
                        address={result.fullAddress.split(', ')[0]}
                        city={result.fullAddress.split(', ')[1]}
                    />
                ))}
            </div>
        </div>
    )
}
