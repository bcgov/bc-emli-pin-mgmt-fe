import ViewPINHistory from '../components/Property/ViewPINHistory'

export default function TestPage() {
    return (
        <div>
            <ViewPINHistory
                pinHistory={[
                    {
                        updatedBy: 'Test Test',
                        username: 'testtest',
                        modifiedOn: 'Jan 1',
                        action: 'Test Action',
                        type: 'Test Type',
                        notificationViaPhone: '41612131234',
                        notificationViaEmail: 'Test@test.ca',
                    },
                    {
                        updatedBy: 'Test Test',
                        username: 'testtest',
                        modifiedOn: 'Jan 1',
                        action: 'Test Action',
                        type: 'Test Type',
                        notificationViaPhone: '41612131234',
                        notificationViaEmail: 'Test@test.ca',
                    },
                ]}
            />
        </div>
    )
}
