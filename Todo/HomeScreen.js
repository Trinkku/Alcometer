import { View, Text, StyleSheet,Platform, ScrollView, SafeAreaView} from 'react-native'
import React, { useEffect, useLayoutEffect, useState} from 'react'
import Constants  from 'expo-constants';
import {AntDesign} from '@expo/vector-icons'

export default function HomeScreen({route, navigation}) {

const [todos, setTodos] = useState(
    Array(20).fill('').map((_,i) => (`Test ${i}`))
);

useEffect(() => {
    if (route.params?.todo) { //jos route saa luettua annettua arvoa
        const newTodos = [...todos, route.params.todo]; //taulukko, jossa yhdistetty todos taulukko + uudet annetut ''arvot'' 
        setTodos(newTodos); //tilamuuttuja päivitetään annetulla taulukolla
    }
},[route.params?. todo])

/* A new array undernname newTodos is created by combining todos (state variable) array (using spread operator ...) 
and new value passed from DetailsScreen. State variable is updated (and therefore UI and list updates as well). 
UseEffect is executed, if there is a new route parameter (route.params?.todo is inside square brackets)
 */


useLayoutEffect (() => {
navigation.setOptions({
    headerStyle: {
        backgroundColor: 'f0f0f0'
    },
    headerRight: () => (
        <AntDesign
        style={styles.navButton}
        name="plus"
        size={24}
        color="black"
        onPress={() => navigation.navigate('Todo')}/>

)})
},)



  return (
<SafeAreaView style={styles.container}>
<ScrollView>
{
todos.map((tehtävä,index) => (
    <View key={index} style={styles.rowcontainer}>
        <Text style={styles.rowText}>     {tehtävä}       </Text>
    </View>
))
}
</ScrollView>
</SafeAreaView>

  )
}




const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android'? Constants.statusBarHeight: 0,
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    rowcontainer:{
      flex:1,
      flexDirection:'row',
      marginTop: 5,
      marginBottom: 5,  
    },
    rowText:{
        fontSize:20,
        marginLeft:5,
    },
    navButton:{
        marginRight: 5,
        fontSize: 24,
        padding:4
    },
 });
  
