import RegeneratePINModal from '.'

export default {
    title: 'RegeneratePINModal',
    component: RegeneratePINModal,
    args: {
        isOpen: true,
        setIsOpen: () => {}
    },
}

const Template = (args) => <RegeneratePINModal {...args} />

export const PrimaryTemplate = Template.bind({})
