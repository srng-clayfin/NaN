import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { arr } from './data'

const Srng = () => 
{   
    const [flag,setFlag]  = useState(false);
    const [list,setList] = useState(arr);
    const [obj,setObj] = useState({});


    const handleplus = (j) =>
    {
        list.forEach((ele) =>
        {
            if(ele.id === j)
            {
                ele.No = ele.No+1
                setFlag(!flag);
                return;               
            }
        }) 
        // console.log(list);
    }

    const handleminus = (j) =>
    {
        list.forEach((ele) =>
        {
            if(ele.id === j)
            {
                ele.No = ele.No-1;
                setFlag(!flag);
                return;               
            }
        })         
    }
  
    return (    
        <ScrollView>
            <View>
            {list.map((e,k) =>
                <View style={styles.parent}  key={k}>            
                    <Button onPress={() => handleminus(e.id)} title="       -       "/>            
                    <Text style={styles.child}>{e.No}</Text>            
                    <Button onPress={() => handleplus(e.id)} title="       +       " />   
                </View>     
            )}      
            </View>
        </ScrollView>    
  )
}

export default Srng

const styles = StyleSheet.create({
    parent:
    {           
        flexDirection:'row',        
        justifyContent:'center',        
        height: 60,    
        padding :10,
    },
    child:
    {
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold',
        marginLeft:10,
        marginRight:10,
    },
    btn:
    {
        width: 20,
        height: 20,
        
    }
})