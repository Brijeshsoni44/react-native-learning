//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

// create a component
const ProductFilterScreen = () => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const url = 'https://fakestoreapi.com/products';
    let result = await fetch(url);
    result = await result.json();
     console.log('res-', result);
    // let res = result.products;
    setData(result);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, textAlign: 'center', top: 20}}>
        Show tha Data
      </Text>

      <ScrollView>
        {data.length
          ? data.map(item => (
              <View style={{flex: 1, margin: 10}}>
                <Text style={{fontSize: 20}}>{item.id}</Text>
                {/* <Text style={{fontSize: 20}}>{item.title}</Text> */}
                <Image
                  style={{width: '100%', height: 160,borderRadius:5}}
                  source={{uri: `${item.avatar}`}}
                />
<Text style={{fontSize: 20}}>{item.price}</Text>
                <Text style={{fontSize: 16}}>
                  Description:- {item.description}
                </Text>
              </View>
            ))
          : null}
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default ProductFilterScreen;
