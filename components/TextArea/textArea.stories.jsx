import TextArea from '.'

export default {
	title: 'TextArea',
	component: TextArea,
}

export const Template = (args) => {
	return <TextArea {...args}></TextArea>
}

Template.args = {
	textAreaName: 'I am a textarea',
}
