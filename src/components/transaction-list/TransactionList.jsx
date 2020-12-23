import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';

const TransactionList = ({ list, handleSort }) => {
    const [ isSortTypeAscending, setIsSortTypeAscending ] = useState(false)
    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Date</DataTable.Title>
                <DataTable.Title>Description</DataTable.Title>
                <DataTable.Title>Type</DataTable.Title>
                <TouchableOpacity onPress={() => { setIsSortTypeAscending(!isSortTypeAscending); handleSort(!isSortTypeAscending) }}><DataTable.Title>Amount ($)</DataTable.Title></TouchableOpacity>
                <DataTable.Title>Balance</DataTable.Title>
            </DataTable.Header>
            {list.map(listItem => (
                <DataTable.Row>
                    <DataTable.Cell>{listItem.date}</DataTable.Cell>
                    <DataTable.Cell>{listItem.description}</DataTable.Cell>
                    <DataTable.Cell>{listItem.type}</DataTable.Cell>
                    <DataTable.Cell>{listItem.amount}</DataTable.Cell>
                    <DataTable.Cell>{listItem.balance}</DataTable.Cell>
                </DataTable.Row>
            ))}
            
        </DataTable>
    )
}

export default TransactionList