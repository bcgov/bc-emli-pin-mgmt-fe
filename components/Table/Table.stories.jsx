import Table from '.'

export default {
    title: 'Table',
    component: Table,
    args: {
        columns: [{ Header: 'Request ID', accessor: 'requestId' }],
        data: [{createdAt: '2023-12-19T20:55:03.570Z'}],
        initialState: {hiddenColumns: ['requestId']},
        setSelectedRows: () => {},
        showSelectBox: () => true
        
    },
}

const Template = (args) => <Table {...args}></Table>

export const PrimaryTemplate = Template.bind({})
