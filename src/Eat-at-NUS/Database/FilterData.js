// Importing the required stuff
import { useState, useEffect } from "react";

import { db } from "../../../firebase/Eat-at-NUS_config";
import { onValue, ref, query, orderByChild, equalTo } from "firebase/database";

const filterData = (name, cuisines) => {

    // const [stallIDs, setStallIDs] = useState(new Set());
    // const [dishResult, setDishResult] = useState([]);
    // const [stallResult, setStallResult] = useState([]);

    const stallIDs = new Set();
    const setStallIDs = (val) => { stallIDs = val; }

    const dishResult = [];
    const setDishResult = (val) => { dishResult = val; }

    const stallResult = [];
    const setStallResult = (val) => { stallResult = val; }


    // Filtering by name

    // Finding stalls that serve the dish with the given name
    // useEffect(() => {}, [db]);

    if (name != '') {
        const dishesReference = ref(db, 'dishes');
        const stallIDsQuery = query(dishesReference, orderByChild('name'), equalTo(name));

        onValue(stallIDsQuery, (snapshot) => {
            const stallIDsAnswer = new Set();

            snapshot.forEach((child) => {
                stallIDsAnswer.add(child.val().stall);
            });

            setStallIDs(stallIDsAnswer);

        });
    }

    // useEffect(() => {}, [db]);
    if (stallIDs.size > 0) {
        const stallsMetadataReference = ref(db, 'stallsMetadata');

        onValue(stallsMetadataReference, (snapshot) => {
            const stallsMetadataList = [];

            snapshot.forEach((child) => {
                if (stallIDs.has(child.key)){
                    stallsMetadataList.push({
                        id: child.key,
                        name: child.val().name,
                        cuisine: child.val().cuisine,
                        rating: child.val().rating
                    });
                }
            });

            setDishResult(stallsMetadataList);

        });
    }


    // Finding stalls with the given name
    // useEffect(() => {}, [db]);
    if (name != '') {
        const stallsMetadataReference = ref(db, 'stallsMetadata');
        const stallNameQuery = query(stallsMetadataReference, orderByChild('name'), equalTo(name));

        onValue(stallNameQuery, (snapshot) => {
            const stallResultAnswer = [];

            snapshot.forEach((child) => {
                stallResultAnswer.push({
                    id: child.key,
                    name: child.val().name,
                    cuisine: child.val().cuisine,
                    rating: child.val().rating
                });
            });

            setStallResult(stallResultAnswer)

        });
    }


    // Filtering by cuisines

    // useEffect(() => {}, [db]);
    if (cuisines != []) {
        const cuisineSet = new Set(cuisines);
        
        if (name == '') {
            const stallsMetadataReference = ref(db, 'stallsMetadata');                

            onValue(stallsMetadataReference, (snapshot) => {
                const stallResultAnswer = [];

                snapshot.forEach((child) => {
                    if (cuisineSet.has(child.val().cuisine)) {
                        stallResultAnswer.push({
                            id: child.key,
                            name: child.val().name,
                            rating: child.val().rating,
                            cuisine: child.val().cuisine
                        });
                    }
                });
            });

        } else {
            const dishResultAnswer = [];
            const stallResultAnswer = [];

            dishResult.forEach((obj) => {
                if (cuisineSet.has(obj.cuisine)) {
                    dishResultAnswer.push(obj);
                }
            });

            stallResult.forEach((obj) => {
                if (cuisineSet.has(obj.cuisine)) {
                    stallResultAnswer.push(obj);
                }
            });

            setDishResult(dishResultAnswer);
            setStallResult(stallResultAnswer);
        }
    }

    return [dishResult, stallResult];

}

export default filterData;
