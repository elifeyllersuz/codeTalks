import React from 'react';
import { TextInput,View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Inputstyle';

const Input = ({placeholder,onType,value,iconName,isSecure}) => {
  return(
   <View style={styles.container}>
    <TextInput
    autoCapitalize='none'
    style={styles.input} placeholder={placeholder} onChangeText={onType}
    value={value}
    secureTextEntry={isSecure}
    placeholderTextColor="white"
    />
    <Icon name={iconName} size={30}/>
   </View>
  )
}

export default Input;
