import LoadingScreen from '.'

import LoadingIcon from 'assets/svgs/LoadingIcon'

export default {
    title: 'LoadingScreen',
    component: LoadingScreen,
}

export const Template = (args) => {
    return <LoadingScreen {...args} />
}

Template.args = {
    loadingText: 'App is Loading....',
    loaderIcon: <LoadingIcon />,
}
