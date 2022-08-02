import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import retrieveDishImage from './RetrieveDishImage';

import { storage } from '../../../firebase/Eat-at-NUS_config';
import { ref, getDownloadURL } from 'firebase/storage';

const RetrieveImageTest = () => {

    // const [imageURL, setImageURL] = useState('ope');
    // let imageURL = 'Gaali';
    // const f = async () => {
    //     imageURL = await retrieveDishImage('trial1');
    //     console.log('Ippo', imageURL);
    // }

    const imageURL = fetch(retrieveDishImage('trial1'));

    // const func = async () => {
    //     const dishImageReference = ref(storage, 'dishes/S1/trial1.jpg');
    //     // console.log(dishImageReference);
    //     await getDownloadURL(dishImageReference).then(
    //         (url) => {
    //             setImageURL(url);
    //             console.log(imageURL);
    //         }
    //     );
    // }

    return (
        <View style={styles.container}>
            <Text>Retrieve Image Test</Text>
            <Text onPress = {() => {
                console.log('Pressed');
                // f();
            }}>Press to check</Text>
            <Text>{imageURL}</Text>
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

export default RetrieveImageTest;
