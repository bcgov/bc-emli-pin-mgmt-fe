import PropertyOwner from './PropertyOwner'

export default {
    title: 'PropertyOwner',
    component: PropertyOwner,
    args: {
        role: {
            role: 'Admin',
        },
    },
}

const Template = (args) => <PropertyOwner {...args} />

export const PrimaryTemplate = Template.bind({})
