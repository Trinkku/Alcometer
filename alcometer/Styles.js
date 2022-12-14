import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#fff',
        fontSize: 20,
        alignItems:'center',
        justifyContent:'center'
      },
      scrollView: {
        width: '100%',
        marginTop: 40,
      },
      form:{
        marginLeft: 10,

      },
      heading:{
        color: 'pink',
        fontSize: 32,
        fontWeight: 'bold',
        paddingTop: 10,

      },
      label:{
        fontSize:24,
        marginBottom:4
      },
        Input: {
          height: 50,
          backgroundColor: 'lightGrey',

      },
      result:{
        flex:1,
        fontSize: 32,
        marginLeft:100
      },
      calculateButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'pink',
      },
      buttonText: {
        fontSize: 24,
        color: 'white'
      },
      resultContainer: {
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop: 64,
        marginBottom: 24,
      },
      resultTextGreen: {
        fontSize: 48,

        color: '#00a650',
        zIndex: 8
      },
      resultTextYellow: {
        fontSize: 48,
        color: '#e7fa09',
        
      },
      resultTextRed: {
        fontSize: 48,
        color: '#ed1c24'
      },
   
    
})