import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import retrieveDishImage from './RetrieveDishImage';

import { storage } from '../../../firebase/Eat-at-NUS_config';
import { ref, getDownloadURL } from 'firebase/storage';

const RetrieveImageTest = () => {

    const [imageURL, setImageURL] = useState('ope');

    // useEffect(() => {
        


    //     func();
    // }, [])
    // -N7VFvkKRBInZVnad6aJ

    const func = async () => {
        const dishImageReference = ref(storage, 'dishes/S1/image.jpg');
        console.log(dishImageReference);
        await getDownloadURL(dishImageReference).then(
            (url) => {
                setImageURL(url);
                console.log(imageURL);
            }
        );
    }

    return (
        <View style={styles.container}>
            <Text>Retrieve Image Test</Text>
            <Text onPress = {func}>Press to check</Text>
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
