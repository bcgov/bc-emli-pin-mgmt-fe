import TextBox from '.'

export default {
	title: 'TextBox',
	component: TextBox,
}

export const Template = (args) => {
	return <TextBox {...args}></TextBox>
}

Template.args = {
	textBoxName: 'I am a textbox',
}
