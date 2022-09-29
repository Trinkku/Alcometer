import { View, Text, TextInput, StyleSheet} from 'react-native'
import React, { useLayoutEffect, useState} from 'react'
import {AntDesign} from '@expo/vector-icons'

export default function DetailsScreen({navigation}) {
const [todo, setTodo] = useState('')

useLayoutEffect (() => {
    navigation.setOptions({
        headerStyle: {
            backgroundColor: 'f0f0f0'
        },
        headerRight: () => (
            <AntDesign
            style={styles.navButton}
            name="save"
            size={24}
            color="black"
            onPress={() => navigation.navigate('Home',{todo:todo})}/>
    
    ),
    })
    }),[todo];

  return (
    <View>
      <TextInput
      style={StyleSheet.newTask} onChangeText={text => setTodo(text)}
      value={todo}
      placeholder="Add new task"
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android'? Constants.statusBarHeight: 0,
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    navButton:{
        marginRight: 5,
        fontSize: 24,
        padding:4
    },
    newTask:{
        width: '100%',
        margin: 20,
        fontSize:18
    }

});
  
