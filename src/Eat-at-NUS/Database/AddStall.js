// Importing the required stuff
import { ref, set } from "firebase/database";
import { db } from "../../../firebase/Eat-at-NUS_config";

const addStall = (stallID, name, address, openingTime, closingTime, cuisine) => {

    // Adding the data to stalls
    const stallsReference = ref(db, 'stalls/' + stallID);
    set(stallsReference, {
        name: name,
        address: address,
        openingTime: openingTime,
        closingTime: closingTime,
        cuisine: cuisine,
        imageURL: '',

        // Average Rating 0 => No Ratings Yet
        rating: 0,

        numberOfRatings: 0
    });

    // Adding the data to stallsMetadata
    const stallsMetadataReference = ref(db, 'stallsMetadata/' + stallID);
    set(stallsMetadataReference, {
        name: name,
        cuisine: cuisine,
        rating: 0
    });

}

export default addStall;
