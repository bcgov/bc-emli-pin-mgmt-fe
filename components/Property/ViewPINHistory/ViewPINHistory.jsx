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
    console.log(pinHistory[0].date)
    return (
        <div className={`${styles.pinHistoryTable}`}>
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
                                {row.updatedBy}
                            </td>
                            <td className={`${styles.usernameRow}`}>
                                {row.username}
                            </td>
                            <td className={`${styles.modifiedOnRow}`}>
                                {row.modifiedOn.toString()}
                            </td>
                            <td className={`${styles.actionRow}`}>
                                {row.action}
                            </td>
                            <td className={`${styles.typeRow}`}>{row.type}</td>
                            <td className={`${styles.notificationViaRow}`}>
                                {row.notificationViaPhone && (
                                    <div>
                                        <PhoneIcon />
                                        {row.notificationViaPhone}
                                    </div>
                                )}
                                {row.notificationViaPhone && (
                                    <div>
                                        <EmailIcon />
                                        {row.notificationViaEmail}
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

ViewPINHistory.propTypes = {
    pinHistory: PropTypes.arrayOf(
        PropTypes.shape({
            updatedBy: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            modifiedOn: PropTypes.string,
            action: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            notificationViaPhone: PropTypes.string,
            notificationViaEmail: PropTypes.string,
        })
    ),
}
