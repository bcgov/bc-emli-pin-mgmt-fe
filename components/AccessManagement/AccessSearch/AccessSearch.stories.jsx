import AccessSearch from "./index"

export default {
    title: 'Access Search',
    component: AccessSearch,
    args: {},
}

const Template = (args) => <AccessSearch></AccessSearch>

export const PrimaryTemplate = Template.bind({})

export const SearchStringTemplate = Template.bind({})
SearchStringTemplate.args = {
    searchString: 'Test address',
}