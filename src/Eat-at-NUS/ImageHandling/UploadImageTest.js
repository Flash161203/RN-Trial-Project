import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
// import { Button } from 'react-native-web';

import uploadDishImage from './UploadDishImage';

import addStall from '../Database/AddStall';
import addDish from '../Database/AddDish';
import * as ImagePicker from 'expo-image-picker';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../../../firebase/Eat-at-NUS_config';


const UploadImageTest = () => {

    const [image, setImage] = useState(null);
    // const [uploading, setUploading] = useState(false);
    // const [downloadURL, setDownloadURL] = useState('');

    // addStall('S1', 'Stall 1', 'Earth', '0800', '2000', 'Indian');
    // const dishID = addDish('S1', 'Dish 1', '5', 'Tasty', '200', 'None');
    
    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [10, 9],
            quality: 1,
        });
        
        // console.log(result);
        // console.log(result.uri);

        const source = {uri: result.uri};
        console.log(source);
        setImage(source);
        
        if (!result.cancelled) {
            console.log('Cool');
        }
    };

    const uploadImage = async () => {
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const fileType = image.uri.substring(image.uri.lastIndexOf('.'));
        // const reference = ref(storage, 'dishes/S1/D1' + fileType);
        // uploadBytes(reference, blob).then((snapshot) => {console.log('Done');}); // To check if the function is executed
        uploadDishImage('lKXwhClDwba0UYcliCg8CVHo02H2', '-N8Sp9FTq94_crINPhFy', fileType, blob);
        
    };

    // const dishRef = ref(storage, 'dishes/S1/D1/image.jpg');
    // getDownloadURL(dishRef).then(
    //     (url) => {
    //         setDownloadURL(url);
    //     }
    // )
    // console.log(downloadURL);




    return (
        <View style={styles.container}>
            <Text onPress={pickImage}>UploadImage Test</Text>
            <Text onPress = {() => {
                console.log('Pressed');
                uploadImage();}}>Click</Text>
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
