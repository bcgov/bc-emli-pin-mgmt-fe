import Property from "."

export default {
    title: 'Property',
    component: Property,
    args: {},
}

const Template = (args) => <Property {...args}></Property>

export const PrimaryTemplate = Template.bind({})