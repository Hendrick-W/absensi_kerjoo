import React, {useEffect, useState} from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker'
import {useSelector} from 'react-redux'
import { Table, Col, TableWrapper, Cols} from 'react-native-table-component';
import authAPI from '../../api'

const DataAbsenPage = ({
    navigation,
}) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const {id, access_token} = useSelector(state=>state.user)
  const column = ['Masuk', 'Keluar', 'Istirahat', 'Selesai Istirahat', 'Mulai Lembur', 'Selesai Lembur']
  const [colTime, setColTime] = useState(['-', '-', '-', '-', '-', '-'])
  const [colMap, setColMap] = useState(['-', '-', '-', '-', '-', '-'])

  const getHistory=()=>{
    authAPI.get('/attendances', {'headers': { 'Authorization': `Bearer ${access_token}`}},  {id: id, log_date:date})
      .then((value)=>{
        setColTime(['-', '-', '-', '-', '-', '-'])
        setColMap(['-', '-', '-', '-', '-', '-'])
        let updatedTime= ['-', '-', '-', '-', '-', '-'];
        let updatedMap = ['-', '-', '-', '-', '-', '-'];
        value.data.data.map((arr)=>{
          if(arr.log_date == date){
            updatedTime[arr.type_id-1] = arr.log_time
            updatedMap[arr.type_id-1] = 
            <TouchableOpacity
            onPress={()=>{
              console.log('hello')
              navigation.navigate('Map', {longitude: arr.longitude, latitude: arr.latitude})
            }}
            >
              <Text style={{color:'red'}}>View Map</Text>
            </TouchableOpacity>            
          }
        })
      setColTime(colTime.map((value, idx)=> updatedTime[idx]))
      setColMap(colMap.map((value, idx)=> updatedMap[idx]))
    })
      .catch((err)=>console.log(err))
  }
  useEffect(()=>{
    console.log(colTime)
  },[colTime])
  return(
    <View style={{flex:1}}>
      <Text>Select Date*:</Text>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <DatePicker
          style={{width:200, alignSelf: 'center',}}
          date={date}
          onDateChange={setDate}
          mode='date'
          format="YYYY-MM-DD"
          placeholder="select date"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
        />
        <Button
          title="Submit"
          onPress={()=>{
            getHistory()
          }}
        />
      </View>
      <View style={{flex: 1, padding: 16, paddingTop: 30}}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <TableWrapper style={{flexDirection:'row'}}>
              <Col data={column} heightArr={[60,60,60,60,60,60]} style={{backgroundColor: '#f1f8ff',}}/>
              <Col data={colTime} heightArr={[60,60,60,60,60,60]} style={{backgroundColor: '#f1f8ff'}}/>
              <Col data={colMap} heightArr={[60,60,60,60,60,60]} style={{backgroundColor: '#f1f8ff'}}/>
          </TableWrapper>
        </Table>
      </View>
    </View>
)};

export default DataAbsenPage;
