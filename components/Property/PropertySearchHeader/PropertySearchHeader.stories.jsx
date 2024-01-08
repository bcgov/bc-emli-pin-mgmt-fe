
import  PropertySearchHeader  from '.'

export default {
	title: 'PropertySearchHeader',
	component: PropertySearchHeader,
  args:{
    title: 'test',
    userName: ' Heps nejj',
  },
}


const Template = (args) => <PropertySearchHeader {...args}/>

export const PrimaryTemplate = Template.bind({})