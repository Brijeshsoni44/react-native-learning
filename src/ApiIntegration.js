import React, {useEffect, useState} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';

const ApiIntegration = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = 'https://reqres.in/api/users?page=2';
    let result = await fetch(url);
    result = await result.json();
    console.log('res----', result.data);
    let res = result.data;
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Text style={{fontSize: 30, textAlign: 'center'}}>User Data Lsit</Text>
        {data.length
          ? data.map(item => (
              <View style={{flex: 1}}>
                <Image
                  style={{
                    height: 70,
                    width: 70,
                    borderRadius: 35,
                    marginHorizontal: 10,
                  }}
                  source={{uri: `${item.avatar}`}}
                />
                <Text style={{fontSize: 20, marginHorizontal: 10}}>
                  {' '}
                  Id: {item.id}
                </Text>

                <Text style={{fontSize: 20, marginHorizontal: 10}}>
                  {' '}
                  First Name: {item.first_name}
                </Text>
                <Text style={{fontSize: 20, marginHorizontal: 10}}>
                  {' '}
                  Last Name: {item.last_name}
                </Text>
                <Text style={{fontSize: 20, marginHorizontal: 10}}>
                  {' '}
                  Email: {item.email}
                </Text>
              </View>
            ))
          : null}
      </ScrollView>
    </View>
  );
};
export default ApiIntegration;
