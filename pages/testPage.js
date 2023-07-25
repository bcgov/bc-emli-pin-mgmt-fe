import { Link } from "../components/Link"

export default function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
      <Link 
        href={'https://www.google.com'}
        content={'click here'}
        external={false}
      />
    </div>
  )
}
