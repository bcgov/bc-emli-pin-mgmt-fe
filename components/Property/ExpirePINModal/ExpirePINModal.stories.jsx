import ExpirePINModal from '.'

export default {
    title: 'ExpirePINModal',
    component: ExpirePINModal,
    args: {
        livePinId: 'd0b4021e-5417-417b-af46-b7480c8eb48f'
    },
}

const Template = (args) => <ExpirePINModal {...args} />

export const PrimaryTemplate = Template.bind({})
