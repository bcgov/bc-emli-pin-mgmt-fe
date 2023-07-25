import { RadioButton } from ".";

export default {
    title: 'RadioButton',
    component: RadioButton,
}

const Template = (args) => {
    return <RadioButton {...args}/>
}

export const Default = Template.bind({})
export const Disabled = Template.bind({})
export const Error = Template.bind({})

Default.args = {
    radioButtonId: 'defaultRadioButton',
    radioButtonName: 'radioButton',
    radioButtonLabel: 'Default Radio Button',
}

Disabled.args = {
    radioButtonId: 'disabledRadioButton',
    radioButtonName: 'radioButton',
    radioButtonLabel: 'Disabled Radio Button',
    isDisabled: true,
}

Error.args = {
    radioButtonId: 'ErrorRadioButton',
    radioButtonName: 'radioButton',
    radioButtonLabel: 'Error Radio Button',
    hasError: true,
}