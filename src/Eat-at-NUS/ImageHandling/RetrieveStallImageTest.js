import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import retrieveStallImage from './RetrieveStallImage';

const RetrieveStallImageTest = () => {

    const result = retrieveStallImage('S1');
    console.log(result);

    return (
        <View style={styles.container}>
            <Text>Retrieve Stall Image Test</Text>
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

export default RetrieveStallImageTest;
