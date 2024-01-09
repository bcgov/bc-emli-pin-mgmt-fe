import DeactivateModal from '.'
import { useState } from 'react'

export default {
    title: 'Deactivate Modal',
    component: DeactivateModal,
    args: {},
}

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <DeactivateModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    )
}

export const PrimaryTemplate = Template.bind({})