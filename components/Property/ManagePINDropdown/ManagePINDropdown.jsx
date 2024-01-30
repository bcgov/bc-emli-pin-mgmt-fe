import Content from '../../../assets/content/content.json'
import Dropdown from '../../Dropdown/index'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { customSnowplowCall } from '../../../public/snowplow'

export default function ManagePINDropdown({
    handleSelection,
    role,
    ariaLabel,
    livePinId,
    userName
}) {
    useEffect(() => {
        const viewPINButton = document.getElementById(`view-pin-${livePinId}`)
        viewPINButton?.addEventListener('click', function() {
            customSnowplowCall(
                'pin_view',
                userName,
                '',
                '',
                '',
                '',
                '',
                livePinId
            )
        })
        const viewPINHistoryButton = document.getElementById(`view-pin-history-${livePinId}`)
        viewPINHistoryButton?.addEventListener("click", function() {
            customSnowplowCall(
                "pin_history",
                userName,
                "",
                "",
                "",
                "",
                "",
                livePinId
            )
        })
    }, [])

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

    if (role.role === 'SuperAdmin') {
        options.push({
            label: Content.managePINDropdown.viewOption,
            value: Content.managePINDropdown.valueOptions.view,
            isDisabled: false,
        })
    }

    options.push({
        label: Content.managePINDropdown.viewHistoryOption,
        value: Content.managePINDropdown.valueOptions['view-history'],
        isDisabled: false,
    })

    return (
        <div>
            <Dropdown
                label={Content.managePINDropdown.label}
                options={options}
                handleSelection={getSelection}
                ariaLabel={ariaLabel}
                dropdownId={livePinId}
            ></Dropdown>
        </div>
    )
}

ManagePINDropdown.protoTypes = {
    handleSelection: PropTypes.func,
    role: PropTypes.string,
}
