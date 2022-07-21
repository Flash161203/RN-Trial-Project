// Importing the required stuff
import React from "react";
import { useState } from "react";

import { storage } from "../../../firebase/Eat-at-NUS_config";
import { ref, list } from "firebase/storage"

const retrieveStallImage = async (stallID) => {

    const [items, setItems] = useState(null);
    
    const stallImageReference = ref(storage, 'dishes/' + stallID);

    const firstImage = await list(stallImageReference, { maxResults: 1 });

    firstImage.then((result) => {
        setItems(result.items);
        console.log('Done');
    })

    return items;
}

export default retrieveStallImage;