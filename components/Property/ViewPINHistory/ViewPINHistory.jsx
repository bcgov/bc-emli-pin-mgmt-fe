import Content from '../../../assets/content/content.json'
import styles from './ViewPINHistory.module.css'
import PhoneIcon from '../../../assets/svgs/PhoneIcon'
import EmailIcon from '../../../assets/svgs/EmailIcon'

export default function ViewPINHistory({ pinHistory }) {
    function formatType(type) {
        if (type === Content.pinHistoryModal.typeCode.optOut) {
            return Content.pinHistoryModal.types.optOut
        } else if (type === Content.pinHistoryModal.typeCode.callCenter) {
            return Content.pinHistoryModal.types.callCenter
        } else if (type === Content.pinHistoryModal.typeCode.onlineReset) {
            return Content.pinHistoryModal.types.onlineReset
        } else if (type === Content.pinHistoryModal.typeCode.changeOfOwnership) {
            return Content.pinHistoryModal.types.changeOfOwnership
        } else {
            return type
        }
    }

    function formatAction(action) {
        if (action === 'D') {
            return Content.pinHistoryModal.actions.deleted
        } else if (action === 'C') {
            return Content.pinHistoryModal.actions.created
        } else if (action === 'R') {
            return Content.pinHistoryModal.actions.recreated
        }
    }

    return (
        <div className={`${styles.pinHistoryTable} ${styles.scrollable}`}>
            <table>
                <thead>
                    <tr>
                        <th className={`${styles.numberRow}`}>
                            {Content.pinHistoryModal.table.numberColumn}
                        </th>
                        <th className={`${styles.updatedByRow}`}>
                            {Content.pinHistoryModal.table.UpdatedByColumn}
                        </th>
                        <th className={`${styles.usernameRow}`}>
                            {Content.pinHistoryModal.table.UsernameColumn}
                        </th>
                        <th className={`${styles.modifiedOnRow}`}>
                            {Content.pinHistoryModal.table.ModifiedOnColumn}
                        </th>
                        <th className={`${styles.actionRow}`}>
                            {Content.pinHistoryModal.table.ActionColumn}
                        </th>
                        <th className={`${styles.typeRow}`}>
                            {Content.pinHistoryModal.table.TypeColumn}
                        </th>
                        <th className={`${styles.notificationViaRow}`}>
                            {
                                Content.pinHistoryModal.table
                                    .NotificationViaColumn
                            }
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {pinHistory?.map((row, i) => (
                        <tr key={i}>
                            <td className={`${styles.numberRow}`}>{i + 1}</td>
                            <td className={`${styles.updatedByRow}`}>
                                {row.alteredByName}
                            </td>
                            <td className={`${styles.usernameRow}`}>
                                {row.alteredByUsername}
                            </td>
                            <td className={`${styles.modifiedOnRow}`}>
                                {new Date(row.updatedAt)
                                    .toISOString()
                                    .split('T')[0] +
                                    ' ' +
                                    new Date(row.updatedAt)
                                        .toISOString()
                                        .split('T')[1]
                                        .split(':')[0] +
                                    ':' +
                                    new Date(row.updatedAt)
                                        .toISOString()
                                        .split('T')[1]
                                        .split(':')[1]}
                            </td>
                            <td className={`${styles.actionRow}`}>
                                {formatAction(row.action)}
                            </td>
                            <td className={`${styles.typeRow}`}>
                                {formatType(row.expirationReason)}
                            </td>
                            <td className={`${styles.notificationViaRow}`}>
                                {row?.sentToPhone ||
                                    (row?.sentToEmail && (
                                        <div>
                                            <div>
                                                <PhoneIcon />
                                                {row?.sentToPhone}
                                            </div>
                                            <div>
                                                <EmailIcon />
                                                <span>{row?.sentToEmail}</span>
                                            </div>
                                        </div>
                                    ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
