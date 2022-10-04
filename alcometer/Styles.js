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
      result:{
        flex:1,
        fontSize: 32,
        marginLeft:100
      },
      calculateButton: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 12,
        marginTop: 24,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 12,
        paddingLeft: 12,
        backgroundColor: '#08467c',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 1,
        shadowOpacity: 0.45,
      },
      buttonText: {
        fontSize: 24,
        color: '#fdead8'
      }
})