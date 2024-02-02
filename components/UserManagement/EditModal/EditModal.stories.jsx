import EditModal from '.'
import { useState } from 'react'

export default {
    title: 'Edit Modal',
    component: EditModal,
    args: {
        role: 'Admin'
    },
}

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <EditModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            role={args.role}
        />
    )
}

export const PrimaryTemplate = Template.bind({})