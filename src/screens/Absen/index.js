import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import { Text, TouchableOpacity, 
  View, StyleSheet,
Dimensions } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import FormData from 'form-data';

import authAPI from '../../api'
import { log } from 'react-native-reanimated';

  const height = Dimensions.get("screen").height
  const width = Math.round(Dimensions.get("screen").width)

const AbsenPage = ({
    params,
}) => {
  const [typeAbsensi, setTypeAbsensi] = useState('')
  const {access_token} = useSelector(state=>state.user)
  const postAttendance = () => {
    Geolocation.getCurrentPosition(position=>{
      // alert(JSON.stringify(position))
      const {longitude, latitude} = position.coords;
      let data = new FormData();
      var d = new Date();
      var year = d.getFullYear()
      var month = d.getMonth() < 10 ? '0'+ d.getMonth() : d.getMonth()
      var day = d.getDate() < 10 ? '0'+ d.getDate() : d.getDate()
      var log_date = `${year}-${month}-${day}`
      var log_time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
      console.log(longitude)
      data.append('type_id', typeAbsensi)
      data.append('log_date', log_date)
      data.append('log_time', log_time)
      data.append('longitude',longitude)
      data.append('latitude', latitude)
      /**Send Data */
      authAPI.post('/attendances', data, {'headers': { 'Authorization': `Bearer ${access_token}`}})
      .then(()=>alert('Success'))
      .catch((err)=>alert('There is an error!'))
    }, 
    error => alert(error.message),
    {timeout: 20000, maximumAge: 1000, enableHighAccuracy: true}
    )
  }
  return (
    <View style={{
      flex:1,
      backgroundColor:'white',
      justifyContent:'center'
    }}>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View>
          <Text>Tipe Absensi</Text>
          <TouchableOpacity
            style={typeAbsensi == 1 ? STYLES.selectedButton:STYLES.nonSelecterdButton}
            onPress={()=>{
              setTypeAbsensi('1')
            }}
          >
            <Text>1. Masuk</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={typeAbsensi == 2 ? STYLES.selectedButton:STYLES.nonSelecterdButton}
            onPress={()=>{
              setTypeAbsensi('2')
            }}
          >
              <Text>2. Keluar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={typeAbsensi == 3 ? STYLES.selectedButton:STYLES.nonSelecterdButton}
            onPress={()=>{
              setTypeAbsensi('3')
            }}
          >
            <Text>3. Istirahat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={typeAbsensi == 4 ? STYLES.selectedButton:STYLES.nonSelecterdButton}
            onPress={()=>{
              setTypeAbsensi('4')
            }}
          >
            <Text>4. Selesai Istirahat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={typeAbsensi == 5 ? STYLES.selectedButton:STYLES.nonSelecterdButton}
            onPress={()=>{
              setTypeAbsensi('5')
            }}
          >
            <Text>5. Mulai Lembur</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={typeAbsensi == 6 ? STYLES.selectedButton:STYLES.nonSelecterdButton}
            onPress={()=>{
              setTypeAbsensi('6')
            }}
          >
            <Text>6. Selesai Lembur</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignSelf:'center'}}>
          <TouchableOpacity
            style={STYLES.buttonForm}
            onPress={()=>{
              postAttendance()
            }}
          >
            <Text style={{color:'white'}}>Absen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
)};
const STYLES = StyleSheet.create({
  selectedButton:{
    width:width*0.3, 
    height:height*0.05, 
    backgroundColor:'#009b72',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:height*0.01
  },
  nonSelecterdButton:{
    width:width*0.3, 
    height:height*0.05, 
    backgroundColor:'#fff',
    borderColor:'#009b72',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:height*0.01
  },
  buttonForm:{
    width:width*0.3, 
    height:height*0.05, 
    backgroundColor:'#009b72',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:height*0.01,
    borderRadius: 25
  }
})
export default AbsenPage;
