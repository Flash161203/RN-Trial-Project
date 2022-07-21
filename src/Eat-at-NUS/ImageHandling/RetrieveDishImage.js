// Importing the required stuff
import React from "react";
import { useState, useEffect } from "react";
import { db, storage } from "../../../firebase/Eat-at-NUS_config";
import { ref, onValue } from "firebase/database";
import { ref as storageRef, getDownloadURL } from "firebase/storage";

const retrieveDishImage = (dishID) => {

    const [dishImageFilePath, setDishImageFilePath] = useState('empty');
    const [dishImageURL, setDishImageURL] = useState('nope');

    useEffect(() => {
        onValue(ref(db, 'dishes/' + dishID + '/' + 'imageURL'), (snapshot) => {
            const data = snapshot.val();
            setDishImageFilePath(data);
        });
    }, []);

    getDownloadURL(storageRef(storage, dishImageFilePath)).then((url) => {
        setDishImageURL(url);
    })


    return dishImageURL;

}

export default retrieveDishImage;
