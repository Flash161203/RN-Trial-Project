// Importing the required stuff
import React from "react";
import { useState, useEffect } from "react";
import { db, storage } from "../../../firebase/Eat-at-NUS_config";
import { ref, get, update } from "firebase/database";
import { ref as storageRef, deleteObject } from "firebase/storage";

const deleteDishImage = async (stallID, dishID) => {

    let fileType = '';

    await get(ref(db, 'dishes/' + dishID + '/imageURL')).then((snapshot) => {
        const dishImageURL = snapshot.val();
        fileType = dishImageURL.slice(
            dishImageURL.lastIndexOf('.'),
            dishImageURL.lastIndexOf('?'));
    });
    
    const dishImageFilePath = 'dishes/' + stallID + '/' + dishID + fileType;

    await deleteObject(storageRef(storage, dishImageFilePath)).catch((error) => {
        console.log(error);
    });

    // Updating the data in dishes
    update(ref(db, 'dishes/' + dishID), {
        imageURL: ''
    });

    // Updating the data in dishesMetadata
    update(ref(db, 'dishesMetadata/' + stallID + '/' + dishID), {
        imageURL: ''
    });

}

export default deleteDishImage;
