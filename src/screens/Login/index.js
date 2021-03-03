import React, {useState} from 'react';
import { Text, View, 
  TextInput, TouchableOpacity, 
  StyleSheet, Dimensions } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {requestSignIn} from '../../store/action'

const height = Dimensions.get("screen").height
const width = Math.round(Dimensions.get("screen").width)

const LoginPage = ({
    params,
}) => {
  const [email, setEmail] = useState('hendrickwijaya21@gmail.com')
  const [password, setPassword] = useState('CKP0A8M2qM')
  const dispatch = useDispatch();

  /**Function Login */
  const logIn = () => {
    dispatch(requestSignIn({email: email, password: password}))
  }
  return (
    <View style={{
      flex:1,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center'
    }}>
      <Text>
        Email*:
      </Text>
      <TextInput
        style={STYLES.inputForm}
        placeholder="Your Email"
        value={email}
        onChangeText={(email)=>setEmail(email)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>
        Password*:
      </Text>
      <TextInput
        style={STYLES.inputForm}
        placeholder="Your Password"
        value={password}
        onChangeText={(password)=>setPassword(password)}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity 
        style={STYLES.buttonForm}
        onPress={()=>logIn()}
      >
        <Text style={{color:'#fff'}}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
)};

const STYLES = StyleSheet.create({
  inputForm:{
    borderBottomWidth: 1,
    fontSize:height*0.015,
    color:'#000',
    padding:15,
    width:width*0.85,
    height:height*0.06,
    backgroundColor:'#FFFFFF',
    marginBottom:25
  },
  buttonForm:{
    width:width*0.4, 
    height:height*0.05, 
    backgroundColor:'#009b72',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:height*0.035
  },
})

export default LoginPage;
