// Importing the required stuff
import { db, storage } from "../../../firebase/Eat-at-NUS_config";
import { ref, get } from "firebase/database";
import { ref as storageRef, getDownloadURL } from "firebase/storage";

const retrieveDishImage = async (dishID) => {

    let dishImageFilePath = 'Empty path';
    const setDishImageFilePath = (path) => {
        dishImageFilePath = path;
    }

    let dishImageURL = 'Empty';
    const setDishImageURL = (url) => {
        dishImageURL = url;
    }

    await get(ref(db, 'dishes/' + dishID + '/imageURL')).then((snapshot) => {
        setDishImageFilePath(snapshot.val());
    });

    if (dishImageFilePath == '') {
        return '';
    }

    await getDownloadURL(storageRef(storage, dishImageFilePath)).then((url) => {
        console.log(typeof url)
        setDishImageURL(url);
        console.log('URL set', dishImageURL);
    });


    return dishImageURL;

}

export default retrieveDishImage;
