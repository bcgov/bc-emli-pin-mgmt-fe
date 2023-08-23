import Dropdown from '../components/Dropdown/index'
import Content from '../content.json'

export default function PropertyDetails() {
    return (
        <div>
            <Dropdown
                label={Content.managePINDropdown.label}
                options={[
                    {
                        label: Content.managePINDropdown.recreateOption,
                        value: 'recreate-pin',
                        isDisabled: false,
                    },
                    {
                        label: Content.managePINDropdown.expireOption,
                        value: 'expire-pin',
                        isDisabled: false,
                    },
                    {
                        label: Content.managePINDropdown.viewOption,
                        value: 'view-pin',
                        isDisabled: false,
                    },
                ]}
            ></Dropdown>
        </div>
    )
}
