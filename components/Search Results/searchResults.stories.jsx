import SearchResults from '.'

export default {
    title: 'SearchResults',
    component: SearchResults,
}

export const Template = (args) => {
    return <SearchResults {...args}></SearchResults>
}

Template.args = {
    searchString: '50 Main Street',
    handleCallback: console.log('')
}
