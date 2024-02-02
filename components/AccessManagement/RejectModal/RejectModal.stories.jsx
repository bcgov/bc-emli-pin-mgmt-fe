import RejectModal from './index'
import { useState } from 'react'

export default {
    title: 'Reject Modal',
    component: RejectModal,
    args: {},
}

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(true)

    return <RejectModal isOpen={isOpen} setIsOpen={setIsOpen} />
}

export const PrimaryTemplate = Template.bind({})
