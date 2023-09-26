
import Styles from './Table.module.css'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { 
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable 
} from '@tanstack/react-table'
import Content from '../../content.json'
import { info } from 'autoprefixer'


export default function Table(
    tableHeaderCols, 
    withMultiSelect
) {
    console.log(tableHeaderCols)
    // TO DO get the request list from parenet component 
    const requestList = [
        {
            id: 0, 
            userName: 'cheaney', 
            identityType: 'idir',
            firstName: 'casandra',
            lastName: 'Heaney',
            organization: 'CleanBC', 
            email: 'cleaney@gov.bc.ca', 
            accessStatus: 'Not granted',
            roleType: 'Client Support', 
            createdAt: '2023-05-20 16:30', 
            reason: 'reason text'
        },
        {
            id: 1, 
            userName: 'tcummerata', 
            identityType: 'Business BCeID',
            firstName: 'Trevion',
            lastName: 'Cummerata',
            organization: 'ServiceBC', 
            email: 'tcummerata@gov.bc.ca', 
            accessStatus: 'Not granted',
            roleType: 'Admin', 
            createdAt: '2023-05-20 16:30', 
            reason: 'reason text'
        },
    ]


    const columnHelper = createColumnHelper()

    const columns = []

    Object.keys(tableHeaderCols).forEach(key => {
        const colItem = columnHelper.accessor(tableHeaderCols[key], {
            cell: info => info.getValue(),
            header: () => tableHeaderCols[key],
            footer: info => info.column.id
        })
        columns.push(colItem)
    })

    const table = useReactTable({
        tableHeaderCols,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <>
            <div>
                {/* <table>
                    <thead>
                        {table.getHeaderGroup().map(headerGroup => (
                          <tr key={headerGroup.id}>
                            {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                          </tr>  
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table> */}
            </div>
        </>
    )
}


Table.prototype = {
    tableHeaderCols: PropTypes.array.isRequired,
    withMultiSelect: PropTypes.bool
}

Table.defaultProps = {
    // TO DO: this will be move to access request table
    tableHeaderCols: [
        { "userName": Content.accessRequest.table.userName }, 
        { "identityType": Content.accessRequest.table.identityType }, 
        { "firstName": Content.accessRequest.table.firstName }, 
        { "lastName": Content.accessRequest.table.lastName }, 
        { "organization": Content.accessRequest.table.organization }, 
        { "email": Content.accessRequest.table.email }, 
        { "accessStatus": Content.accessRequest.table.accessStatus },  
        { "roleType": Content.accessRequest.table.roleType }, 
        { "createdAt": Content.accessRequest.table.createdAt }, 
        { "reason": Content.accessRequest.table.reason }
    ], 
    withMultiSelect: false
}