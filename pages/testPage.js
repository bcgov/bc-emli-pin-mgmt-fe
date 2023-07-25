import { Link } from '../components/Link'
import { RadioButton } from '../components/Radio Button List'

export default function TestPage() {
    return (
        <div>
            <h1>Test Page</h1>
            <Link
                href={'https://www.google.com'}
                content={'click here'}
                external={false}
            />
            <RadioButton
                radioButtonLabel={'Radio Button 1'}
                radioButtonId={'one'}
                radioButtonName={'one'}
                hasError={false}
                isDisabled={false}
            />
            <RadioButton
                radioButtonLabel={'Radio Button 2'}
                radioButtonId={'two'}
                radioButtonName={'one'}
                hasError={false}
                isDisabled={false}
            />
            <RadioButton
                radioButtonLabel={'Radio Button 3'}
                radioButtonId={'three'}
                radioButtonName={'one'}
                hasError={false}
                isDisabled={false}
            />
        </div>
    )
}
