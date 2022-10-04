import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import Styles from '../Styles'


export default function Calculation(props) {
  return (
    
<View style={[Styles.calculateButton, props.pressed && {backgroundColor: 'red'}]}>
      <Text style={Styles.buttonText}>Calculate</Text>
    </View>
  )
}