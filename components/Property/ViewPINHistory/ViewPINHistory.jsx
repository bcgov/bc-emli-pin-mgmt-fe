import Content from '../../../content.json'
import Dropdown from '../../Dropdown/index'
import PropTypes from 'prop-types'
import Modal from '../../Modal'
import { useState } from 'react'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import styles from './ViewPINHistory.module.css'
import PhoneIcon from '../../../assets/svgs/PhoneIcon'
import EmailIcon from '../../../assets/svgs/EmailIcon'

export default function ViewPINHistory({ pinHistory }) {
    // console.log(pinHistory[0].updatedAt)

    return (
        <div className={`${styles.pinHistoryTable} ${styles.scrollable}`}>
            <table>
                <thead>
                    <tr>
                        <th className={`${styles.numberRow}`}>#</th>
                        <th className={`${styles.updatedByRow}`}>Updated by</th>
                        <th className={`${styles.usernameRow}`}>Username</th>
                        <th className={`${styles.modifiedOnRow}`}>
                            Modified on
                        </th>
                        <th className={`${styles.actionRow}`}>Action</th>
                        <th className={`${styles.typeRow}`}>Type</th>
                        <th className={`${styles.notificationViaRow}`}>
                            Notification Via
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {pinHistory.map((row, i) => (
                        <tr key={i}>
                            <td className={`${styles.numberRow}`}>{i + 1}</td>
                            <td className={`${styles.updatedByRow}`}>
                                {row.expiredByName}
                            </td>
                            <td className={`${styles.usernameRow}`}>
                                {row.expiredByUsername}
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
                                {row.action}
                            </td>
                            <td className={`${styles.typeRow}`}>
                                {row.expirationReason}
                            </td>
                            <td className={`${styles.notificationViaRow}`}>
                                {row.sentToPhone && (
                                    <div>
                                        <PhoneIcon />
                                        {row.sentToPhone}
                                    </div>
                                )}
                                {row.sentToEmail && (
                                    <div>
                                        <EmailIcon />
                                        {row.sentToEmail}
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
