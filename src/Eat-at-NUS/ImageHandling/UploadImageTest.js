import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import uploadImage from './UploadImage';
import * as ImagePicker from 'expo-image-picker';

const UploadImageTest = () => {
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            allowsEditing: true,
            aspect: [10, 9],
            quality: 1,
        });
        
        console.log(result);
        
        if (!result.cancelled) {
            //   setImageURI(result.uri);
            uploadImage('S1', 'Dish 1', result.uri);
        }
    };


    return (
        <View style={styles.container}>
            <Text>UploadImage Test</Text>
            <button onClick={pickImage}>Upload an Image</button>
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

export default UploadImageTest;
