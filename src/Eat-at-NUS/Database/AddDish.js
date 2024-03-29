// Importing the required stuff
import { push, ref, set } from "firebase/database";
import { db } from "../../../firebase/Eat-at-NUS_config";

const addDish = (stallID, name, price, description, calories, allergenInfo) => {

    // Adding the data to dishes
    const dishesReference = ref(db, 'dishes')
    const newdishReference = push(dishesReference);
    const newDishID = newdishReference.key;

    set(newdishReference, {
        name: name,
        price: price,
        description: description,
        calories: calories,
        imageURL: '',

        // Setting availability to false when a new dish is added
        // Food Stall Owners have to make it available after adding
        availability: false,
        
        allergenInfo: allergenInfo,

        // Average Rating = 0 => No Ratings Yet
        rating: 0,
        
        numberOfRatings: 0
    });

    // Adding the data to dishesMetadata
    const dishMetadataReference = ref(db, 'dishesMetadata/' + stallID + '/' + newDishID);

    set(dishMetadataReference, {
        name: name,
        price: price,
        rating: 0,
        imageURL: '',
        availability: false
    });

    return newDishID;

}

export default addDish;