import React, { useState } from 'react'
import { View } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { Button } from 'react-native-paper'

const DateFilter = ({ handleFilter }) => {
    const [selectedDate, setSelectedDate] = useState('')
    return(
      <View style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
        <DatePicker
            format="YYYY-MM-DD"
            date={selectedDate}
            customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
            }}
            onDateChange={date => setSelectedDate(date)}
        />
        <Button onPress={() => handleFilter(selectedDate)}>Filter</Button>
      </View>
        
    )

}

export default DateFilter