import Content from '../../../content.json'
import Dropdown from '../../Dropdown/index'

export default function ManagePINDropdown({ role }) {
    const options = [
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
    ]

    if (role === 'SuperAdmin') {
        options.push({
            label: Content.managePINDropdown.viewOption,
            value: 'view-pin',
            isDisabled: false,
        })
    }
    return (
        <div>
            <Dropdown
                label={Content.managePINDropdown.label}
                options={options}
            ></Dropdown>
        </div>
    )
}
