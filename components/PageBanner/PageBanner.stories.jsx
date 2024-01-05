import PageBanner from "."

export default {
    title: 'PageBanner',
    component: PageBanner,
}

const Template = (args) => <PageBanner {...args}></PageBanner>

export const PrimaryTemplate = Template.bind({})