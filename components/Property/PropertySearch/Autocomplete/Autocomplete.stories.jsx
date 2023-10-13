import Autocomplete from './Autocomplete'

export default {
    title: 'Autocomplete',
    component: Autocomplete,
}

const Template = () => {
    function getSiteId() {
        console.log('Getting Site ID')
    }

    function getSearchString() {
        console.log('Getting Search String')
    }

    function getShowResults() {
        console.log('Getting Show Results')
    }

    return (
        <Autocomplete
            searchString={'123 Main Street'}
            getSiteId={getSiteId}
            getSearchString={getSearchString}
            showResults={getShowResults}
        />
    )
}

export const PrimaryTemplate = Template.bind({})
