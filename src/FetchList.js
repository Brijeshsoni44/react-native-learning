import React, { useCallback, useEffect, useState } from 'react'
import {Text, View,StyleSheet, FlatList,Image} from 'react-native'

const FetchList = () =>{
    const[data, setData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = () =>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => {
            console.log('data--',res.products)
            setData(res.products);
        }).catch((error=>{
            console.log("Error raised during ftech", error);
        }))

    }

   
const renderItem = useCallback( (item) =>{
    return(
        <View style={{flex:1,}}>
            <Image
            source={{uri:item.thumbnail}}

            />
            <View>
            <Text>{item.brand}</Text>
            </View>
            
        </View>
    )

})


    return(
        <View style={styles.container}>
            <FlatList
            data = {data}
            renderItem = {renderItem}
            keyExtractor={(item)=>{item.id.toString()}}
            
            />

        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
export default FetchList;