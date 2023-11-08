import Content from '../../../assets/content/content.json'
import Dropdown from '../../Dropdown/index'
import PropTypes from 'prop-types'

export default function ManagePINDropdown({
    handleSelection,
    role
}) {
    function getSelection(value) {
        handleSelection(value)
    }

    const options = [
        {
            label: Content.managePINDropdown.recreateOption,
            value: Content.managePINDropdown.valueOptions.regenerate,
            isDisabled: false,
        },
        // Commenting out expire PIN option
        // {
        //     label: Content.managePINDropdown.expireOption,
        //     value: Content.managePINDropdown.valueOptions.expire,
        //     isDisabled: false,
        // },
    ]

    if (role.role === "SuperAdmin") {
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
    handleSelection: PropTypes.func,
    role: PropTypes.string,
}
