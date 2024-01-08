import Link from '.'

export default {
    title: 'Link',
    component: Link,
    args: {
        linkId: 'btnBasic',
        href: 'https://www.google.com/',
    },
}

const Template = (args) => <Link {...args}>Click me!</Link>

export const PrimaryTemplate = Template.bind({})

export const DangerTemplate = Template.bind({})
DangerTemplate.args = {
    variant: 'danger',
}

export const WarningTemplate = Template.bind({})
WarningTemplate.args = {
    variant: 'warning',
}

export const SecondaryTemplate = Template.bind({})
SecondaryTemplate.args = {
    variant: 'secondary',
}

export const SuccessTemplate = Template.bind({})
SuccessTemplate.args = {
    variant: 'success',
}

export const DisabledTemplate = Template.bind({})
DisabledTemplate.args = {
    variant: 'disabled',
}
