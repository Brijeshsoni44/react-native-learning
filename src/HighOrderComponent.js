import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const HighOrderComponent = () => {
  return (
    <View style={{top: 40}}>
      <Text style={{textAlign: 'center', fontSize: 30}}>
        High Order Component Example
      </Text>
      <HocRed cmp={Counter} />
      <HocGreen cmp={Counter} />
      <HocBlue cmp={Counter} />
    </View>
  );
};

function HocRed(props) {
  return (
    <View
      style={{
        height: 200,
        width: 200,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        left: 20,
        top: 20,
      }}>
      <props.cmp />
    </View>
  );
}

function HocGreen(props) {
  return (
    <View
      style={{
        height: 200,
        width: 200,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        left: 20,
        top: 20,
      }}>
      <props.cmp />
    </View>
  );
}
function HocBlue(props) {
  return (
    <View
      style={{
        height: 200,
        width: 200,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        left: 20,
        top: 20,
      }}>
      <props.cmp />
    </View>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () =>{
    setCount(count-1);
  }
  return (
    <View style={{flex: 1,}}>
      <Text style={{fontSize: 40, color: 'white', textAlign: 'center',}}>
        {count}
      </Text>
      <Button title="Increment Count" onPress={updateCount} color="#f194ff"/>
      <Button title="Decrement Count " onPress={decrementCount} />
    </View>
  );
}
export default HighOrderComponent;
