import Content from '../../../assets/content/content.json'
import Dropdown from '../../Dropdown/index'
import PropTypes from 'prop-types'

export default function ManagePINDropdown({ showPINOption, handleSelection }) {
    function getSelection(value) {
        handleSelection(value)
    }

    const options = [
        {
            label: Content.managePINDropdown.recreateOption,
            value: Content.managePINDropdown.valueOptions.regenerate,
            isDisabled: false,
        },
        {
            label: Content.managePINDropdown.expireOption,
            value: Content.managePINDropdown.valueOptions.expire,
            isDisabled: false,
        },
    ]

    if (showPINOption) {
        options.push({
            label: Content.managePINDropdown.viewOption,
            value: Content.managePINDropdown.valueOptions.view,
            isDisabled: false,
        })
    }

    return (
        <div>
            <Dropdown
                label={Content.managePINDropdown.label}
                options={options}
                handleSelection={getSelection}
            ></Dropdown>
        </div>
    )
}

ManagePINDropdown.protoTypes = {
    showPINOption: PropTypes.bool,
}
