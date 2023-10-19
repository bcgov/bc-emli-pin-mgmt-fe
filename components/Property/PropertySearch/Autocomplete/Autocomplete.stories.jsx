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

    return (
        <Autocomplete
            searchString={'123 Main Street'}
            getSiteId={getSiteId}
            getSearchString={getSearchString}
            showResults={true}
        />
    )
}

export const PrimaryTemplate = Template.bind({})
