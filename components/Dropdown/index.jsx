import propTypes from 'prop-types'
// import './styles.css'

export const Dropdown = ({
    dropdownId,
    dropdownName,
    dropdownOptions,
    dropdownLabel,
    handleChange,
    selectedValue,
    dropdownAction
}) => {
    return (
        <form class="bc-gov-form" action={dropdownAction}>
            <label class="bc-gov-dropdown-label" htmlFor={dropdownId}>
                {dropdownLabel}
            </label>
            <div class="bc-gov-dropdown-wrapper">
                <i class="fas fa-chevron-down"></i>
                <select
                    class="bc-gov-dropdown"
                    name={dropdownName}
                    id={dropdownId}
                    onChange={handleChange}
                    value={selectedValue}
                >
                    <option value="Select">Select</option>
                    {dropdownOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    )
}

Dropdown.propTypes = {
    dropdownId: propTypes.string.isRequired,
    dropdownLabel: propTypes.string.isRequired,
    dropdownName: propTypes.string.isRequired,
    dropdownOptions: propTypes.array.isRequired,
    handleChange: propTypes.func
}

