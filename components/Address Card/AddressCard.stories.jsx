import AddressCard from './AddressCard'

export default {
    title: 'Link',
    component: AddressCard,
    args: {
        address: '123 Main Street',
        city: 'Victoria',
    },
}

const Template = (args) => <AddressCard></AddressCard>

export const PrimaryTemplate = Template.bind({})
