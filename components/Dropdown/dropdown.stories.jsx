import Dropdown from '.'
import { useState } from 'react'
import '@testing-library/jest-dom'

export default {
    title: 'Dropdown',
    component: Dropdown,
    args: {
        size: 'medium',
        options: [
            {
                label: 'Option 1',
                value: 1,
                isDisabled: false,
                caption: 'test caption',
            },
            {
                label: 'Option 2',
                value: 2,
                isDisabled: false,
            },
            {
                label: 'Option 3',
                value: 3,
                isDisabled: true,
                caption: 'disabled!',
            },
        ],
    },
}

const Template = (args) => {
    const [mockSelectedValue, setMockSelectedValue] = useState()
    return (
        <Dropdown
            {...args}
            selectedValue={mockSelectedValue}
            handleSelection={setMockSelectedValue}
        ></Dropdown>
    )
}

export const PrimaryTemplate = Template.bind({})
PrimaryTemplate.args = {
    variant: 'primary',
}
