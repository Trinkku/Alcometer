import { View, Text,StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function Radiobutton({genderOption, onPress}) {

const [choice, setChoice] = useState('Woman')

const handleRadiobuttonPress = (madeChoice) => {
  setChoice (madeChoice);
  onPress(madeChoice);
}
  return (
    <>
    {
      genderOption.map((option) => (
        <View key={option.value} style={styles.buttonContainer}>
        <Text style={styles.label}>{option.label}</Text>
        <Pressable style={styles.circle} onPress={()=> handleRadiobuttonPress(option.value)}>
          {choice === option.value && <View style={styles.checkedCircle}/>}
        </Pressable>
        </View>
      ))
    } 

    </>
   
  )
}
const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      marginbottom:30,
    },
    label: {
     marginRight:10,
    },
    circle: {
        height: 28,
        width:28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems:'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#000',
    }
  });
  