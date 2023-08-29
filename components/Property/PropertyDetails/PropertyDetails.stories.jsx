
import  PropertyDetails  from './PropertyDetails'

export default {
	title: 'PropertyDetails',
	component: PropertyDetails,
  args:{
    title: 'test',
    userName: ' Heps nejj',
  },
}


const Template = (args) => <PropertyDetails {...args}/>

export const PrimaryTemplate = Template.bind({})