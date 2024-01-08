import  Header  from '.'

export default {
	title: 'Header',
	component: Header,
  args:{
    title: 'test',
    userName: ' Heps nejj',
  },
}


const Template = (args) => <Header {...args}/>

export const PrimaryTemplate = Template.bind({})