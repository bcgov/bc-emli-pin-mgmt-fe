import PropertySearch from '.'

export default {
	title: 'PropertySearch',
	component: PropertySearch,
  args:{
    title: 'test',
    userName: ' Heps nejj',
  },
}


const Template = (args) => <PropertySearch {...args}/>

export const PrimaryTemplate = Template.bind({})