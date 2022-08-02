import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import deleteDishImage from './DeleteDishImage';


const DeleteImageTest = () => {

    return (
        <View style={styles.container}>
            <Text>Delete Image Test</Text>
            <Text onPress = {() => {
                console.log('Pressed');
                deleteDishImage('lKXwhClDwba0UYcliCg8CVHo02H2', '-N8Sp9FTq94_crINPhFy');
                }}>Press to check</Text>
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

export default DeleteImageTest;
