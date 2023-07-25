import { Link } from '.'

export default {
    title: 'Link',
    component: Link,
}

const Template = (args) => <Link {...args}>Click me!</Link>

export const InternalLink = Template.bind({})
export const ExternalLink = Template.bind({})

InternalLink.args = {
    external: false,
}

ExternalLink.args = {
    external: true,
}