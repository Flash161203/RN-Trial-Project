// Importing the required stuff
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import filterData from './FilterData';

const FilterDataTest = () => {

  const filterPress = () => {
    const result = filterData('Pasta algio e olio', ["Western"]);
    console.log(result);
  }
  
  return (
  <View style={styles.container}>
    <Text>Filter Data Test</Text>
    <Text onPress={filterPress}>Press to check</Text>
  </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FilterDataTest;
