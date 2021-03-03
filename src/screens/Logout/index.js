import React from 'react';
import { Text, View, Button } from 'react-native';
import {useDispatch} from 'react-redux';

import {signOut} from '../../store/action'

const LogOutPage = ({
    params,
}) => {
  const dispatch = useDispatch();
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
      <Button
       title="Log Out"
       onPress={()=>{
         dispatch(signOut())
       }}
      />
    </View>
)};

export default LogOutPage;
