import GrantModal from "./index"
import { useState } from 'react'

export default {
    title: 'Grant Modal',
    component: GrantModal,
    args: {},
}

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <GrantModal 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    )
}

export const PrimaryTemplate = Template.bind({})