// Importing the required stuff
import React from "react";
import { useState, useEffect } from "react";
import { db, storage } from "../../../firebase/Eat-at-NUS_config";
import { ref, onValue } from "firebase/database";
import { ref as storageRef, deleteObject } from "firebase/storage";

const deleteDishImage = (dishID) => {

    const [dishImageFilePath, setDishImageFilePath] = useState('');

    useEffect(() => {
        onValue(ref(db, 'dishes/' + dishID + '/' + 'imageURL'), (snapshot) => {
            const data = snapshot.val();
            setDishImageFilePath(data);
        });
    }, []);

    deleteObject(storageRef(storage, dishImageFilePath));

}

export default deleteDishImage;
