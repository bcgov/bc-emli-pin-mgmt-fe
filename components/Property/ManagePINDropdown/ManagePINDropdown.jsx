import Content from '../../../content.json'
import Dropdown from '../../Dropdown/index'
import PropTypes from 'prop-types'

export default function ManagePINDropdown({ showPINOption }) {
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

    if (showPINOption) {
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

Dropdown.protoTypes = {
    role: PropTypes.bool,
}
