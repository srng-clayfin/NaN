import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { arr } from './data';

const Srng = () => 
{   
    const [flag,setFlag]  = useState(false);    
    
    const handleplus = (j) =>
    {
        arr.forEach((ele) =>
        {
            if(ele.id === j)
            {
                ele.No = ele.No+1;
                setFlag(!flag);
                return;               
            }
        }) 
    }

    const handleminus = (j) =>
    {
        arr.forEach((ele) =>
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
                {arr.map((ele,k) =>
                    <View style={styles.parent}  key={k}>            
                        <Button onPress={() => handleminus(ele.id)} title="       -       "/>            
                            <Text style={styles.child}>
                                {ele.No}
                            </Text>
                        <Button onPress={() => handleplus(ele.id)} title="       +       " />   
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