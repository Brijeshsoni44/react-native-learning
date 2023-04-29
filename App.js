/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {index} from './src/index';
import Create from './src/Create';
import FetchList from './src/FetchList';
import ProductFilterScreen from  './src/ProductFilterScreen';
import HighOrderComponent from './src/HighOrderComponent';
import ApiIntegration from './src/ApiIntegration';

const App = () =>{
  return(
    <View style={{flex:1}}>
      {/* <index/> */}
      {/* <Create/> */}
      {/* <FetchList/> */}
      {/* <Create/> */}
      {/* <ProductFilterScreen/> */}
      {/* <HighOrderComponent/> */}
      <ApiIntegration/>

    </View>
  )

}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
