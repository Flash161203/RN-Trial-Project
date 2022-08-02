// Importing the required stuff
import { db, storage } from '../../../firebase/Eat-at-NUS_config';

import { ref, update } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const uploadDishImage = async (stallID, dishID, fileType, imgBlob) => {

    const dishImageFilePath = 'dishes/' + stallID + '/' + dishID + fileType;

    let dishImageURL = '';

    const dishImageReference = storageRef(storage, dishImageFilePath);
    await uploadBytes(dishImageReference, imgBlob).then((snapshot) => {
        console.log('Uploaded'); // To check if the function is executed
    });

    await getDownloadURL(storageRef(storage, dishImageFilePath)).then((url) => {
        dishImageURL = url;
    })

    // Updating the data in dishes
    const dishReference = ref(db, 'dishes/' + dishID);
    update(dishReference, {
        imageURL: dishImageURL
    });

    // // Updating the data in dishesMetadata
    const dishMetadataReference = ref(db, 'dishesMetadata/' + stallID + '/' + dishID);
    update(dishMetadataReference, {
        imageURL: dishImageURL
    });

};

export default uploadDishImage;
