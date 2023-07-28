import ArrowDown from 'assets/svgs/ArrowDown'

export default {
    title: 'ArrowDown',
    component: ArrowDown,
}

export const Template = (args) => {
    return <ArrowDown {...args} />
}

Template.args = {
    fillColor: '#000',
}
