import { Link } from "../components/Link"
// import CheckBox from "../components/CheckBox"
export default function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
      <Link 
        href={'https://www.google.com/search?q=if+statement+html&rlz=1C5GCEM_en&oq=if+statement+html&aqs=chrome..69i57j0i512l3j0i22i30l6.12221j0j7&sourceid=chrome&ie=UTF-8'}
        content={'click here'}
        external={false}
      />
    </div>
  )
}
