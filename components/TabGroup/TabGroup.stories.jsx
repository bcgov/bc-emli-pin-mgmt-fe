import TabGroup from "."

export default {
    title: 'TabGroup',
    component: TabGroup,
    args: {
        types: [
            {
                label: 'lable',
                value: 'value',
            }
        ]
    },
}

const Template = (args) => <TabGroup {...args}></TabGroup>

export const PrimaryTemplate = Template.bind({})