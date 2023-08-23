import Dropdown from '../components/Dropdown/index'

export default function PropertyDetails() {
    return (
        <div>
            <Dropdown
                label={'Manage PIN'}
                options={[
                    {
                        label: 'Recreate PIN',
                        value: 'recreate-pin',
                        isDisabled: false,
                    },
                    {
                        label: 'Expire PIN',
                        value: 'expire-pin',
                        isDisabled: false,
                    },
                    {
                        label: 'View PIN',
                        value: 'view-pin',
                        isDisabled: false,
                    },

                ]}
            ></Dropdown>
        </div>
    )
}
