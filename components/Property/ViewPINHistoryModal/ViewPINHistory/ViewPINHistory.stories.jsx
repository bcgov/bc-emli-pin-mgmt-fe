import ViewPINHistory from '.'

export default {
    title: 'ViewPINHistory',
    component: ViewPINHistory,
    args: {},
}

const Template = (args) => <ViewPINHistory {...args} />

export const PrimaryTemplate = Template.bind({})

export const MultipleRowsTemplate = Template.bind({})
MultipleRowsTemplate.args = {
    pinHistory: [
        {
            action: 'D',
            expirationReason: 'OP',
            expiredAt: '2023-08-30T14:02:53.863Z',
            alteredByName: 'John Smith',
            alteredByUsername: 'jsmith1',
            livePinId: 'bc7140ec-9f7b-4dde-960a-9ae9438318b1',
            logCreatedAt: '2023-08-30T14:02:53.863Z',
            logId: 'b0c4ab8f-5423-45fc-af76-80e0418be4a3',
            pinCreatedAt: '2023-08-30T14:02:31.157Z',
            sentToEmail: 'tahmid16@gmail.com',
            sentToPhone: null,
            updatedAt: '2023-08-31T18:58:36.628Z',
        },
        {
            action: 'C',
            expirationReason: 'CC',
            expiredAt: '2023-08-30T14:02:53.863Z',
            alteredByName: 'John Smith',
            alteredByUsername: 'jsmith2',
            livePinId: 'bc7140ec-9f7b-4dde-960a-9ae9438318b1',
            logCreatedAt: '2023-08-30T14:02:53.863Z',
            logId: 'b0c4ab8f-5423-45fc-af76-80e0418be4a3',
            pinCreatedAt: '2023-08-30T14:02:31.157Z',
            sentToEmail: 'tahmid16@gmail.com',
            sentToPhone: null,
            updatedAt: '2023-08-31T18:58:36.628Z',
        },
        {
            action: 'R',
            expirationReason: 'OR',
            expiredAt: '2023-08-30T14:02:53.863Z',
            alteredByName: 'John Smith',
            alteredByUsername: 'jsmith3',
            livePinId: 'bc7140ec-9f7b-4dde-960a-9ae9438318b1',
            logCreatedAt: '2023-08-30T14:02:53.863Z',
            logId: 'b0c4ab8f-5423-45fc-af76-80e0418be4a3',
            pinCreatedAt: '2023-08-30T14:02:31.157Z',
            sentToEmail: 'tahmid16@gmail.com',
            sentToPhone: null,
            updatedAt: '2023-08-31T18:58:36.628Z',
        },
        {
            action: 'D',
            expirationReason: 'CO',
            expiredAt: '2023-08-30T14:02:53.863Z',
            alteredByName: 'John Smith',
            alteredByUsername: 'jsmith4',
            livePinId: 'bc7140ec-9f7b-4dde-960a-9ae9438318b1',
            logCreatedAt: '2023-08-30T14:02:53.863Z',
            logId: 'b0c4ab8f-5423-45fc-af76-80e0418be4a3',
            pinCreatedAt: '2023-08-30T14:02:31.157Z',
            sentToEmail: 'tahmid16@gmail.com',
            sentToPhone: null,
            updatedAt: '2023-08-31T18:58:36.628Z',
        },
    ],
}
