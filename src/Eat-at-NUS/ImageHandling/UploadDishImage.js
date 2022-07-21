// Importing the required stuff
import { db } from '../../../firebase/Eat-at-NUS_config';
import { ref, update } from 'firebase/database';

import { storage } from '../../../firebase/Eat-at-NUS_config';
import { ref as storageRef, uploadBytes } from 'firebase/storage';

const uploadDishImage = (stallID, dishID, fileType, imgBlob) => {

    const dishImageFilePath = 'dishes/' + stallID + '/' + dishID + fileType;

    // Updating the data in dishes
    const dishReference = ref(db, 'dishes/' + dishID);
    update(dishReference, {
        imageURL: dishImageFilePath
    });

    // Updating the data in dishesMetadata
    const dishMetadataReference = ref(db, 'dishesMetadata/' + stallID + '/' + dishID);
    update(dishMetadataReference, {
        imageURL: dishImageFilePath
    });

    const dishImageReference = storageRef(storage, dishImageFilePath);
    uploadBytes(dishImageReference, imgBlob);

};

export default uploadDishImage;
