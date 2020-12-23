import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import DateFilter from '../components/filter-list/DateFilter'
import TransactionList from '../components/transaction-list/TransactionList'

const txns = [
    {
      date: "2019-11-29",
      description: "HACKERBANK1 BP DES: MERCH PMT ID:1358570",
      type: 0,
      amount: 1520.34,
      balance: "$12,234.45"
    },
    {
      date: "2019-12-01",
      description: "THE HACKERUNIVERSITY DES: CCD+ ID:0000232343",
      type: 0,
      amount: 1000,
      balance: "$12,234.45"
    },
    {
      date: "2019-11-25",
      description: "HACKERBANK DES:DEBIT O ID: 0000987945787897987987",
      type: 1,
      amount: 2450.45,
      balance: "$12,234.45"
    },
    {
      date: "2019-12-03",
      description: "HACKERBANK INC. DES:CCD+ ID: 33375894749",
      type: 0,
      amount: 1985.4,
      balance: "$12,234.45"
    },
    {
      date: "2019-11-29",
      description: "HACKERBANK DES: DEBIT O ID:00097494729",
      type: "Debit",
      amount: 564,
      balance: "$12,234.45"
    },
    {
      date: "2019-11-30",
      description: "CREDIT CARD PAYMENT ID: 222349083",
      type: 1,
      amount: 1987,
      balance: "$12,234.45"
    }
  ];

const Transactions = () => {
    const [transactions, setTransactions] = useState(txns)

    const handleFilter = (date) => {
        setTransactions(txns.filter(item => item.date === date))
    }

    const handleSort = (isAscending) => {
        setTransactions(txns.sort((a, b) => {
            const firstAmount = Number(a.amount)
            const secondAmount = Number(b.amount)
            console.log("Numbers", firstAmount, secondAmount)
            return isAscending ? firstAmount - secondAmount : secondAmount - firstAmount 
        }))
    }

    return (
        <View style={styles.container}>
            <DateFilter handleFilter={handleFilter} />
            <TransactionList list={transactions} handleSort={handleSort}/>
        </View>
    )
}

export default Transactions

const styles = StyleSheet.create({
    container: {
      width: "100%"
    },
});