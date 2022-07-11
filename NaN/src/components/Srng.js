import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { arr } from './data'

const Srng = () => 
{
  
    return (
    <View>
        {arr.map((e) =>
        <View style={styles.parent}>
            <Text style={styles.child}>{e.No}</Text>
        </View>            
        )}      
    </View>
  )
}

export default Srng

const styles = StyleSheet.create({
    parent:
    {
        alignItems:'center',
        borderWidth:'2px'
    },
    child:
    {
        textAlign:'center',
        fontSize:28,        
    }
})