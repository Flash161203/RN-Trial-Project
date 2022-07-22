// Importing the required stuff
import React from "react";
import { useState, useEffect } from "react";

import { db } from "../../../firebase/Eat-at-NUS_config";
import { onValue, ref, query, orderByChild, equalTo } from "firebase/database";

const filterData = (name, cuisines) => {

    const [stallIDs, setStallIDs] = useState(new Set());
    const [dishresult, setDishResult] = useState([]);
    const [stallResult, setStallResult] = useState([]);

    
    // Filtering by name

    // Finding stalls that serve the dish with the given name
    const dishesReference = ref(db, 'dishes');
    const stallIDsQuery = query(dishesReference, orderByChild('name'), equalTo(name));

    useEffect(() => {
        onValue(stallIDsQuery, (snapshot) => {
            const data = snapshot.val();

            if (data) {
                const stallIDsAnswer = new Set();
                Object.values(data).forEach((obj) => {
                    stallIDsAnswer.add(obj.stall);
                });
                setStallIDs(stallIDsAnswer);
            }

        });
    }, []);

    const stallsMetadataReference = ref(db, 'stallsMetadata');

    if (stallIDs.size > 0) {
        useEffect(() => {
            onValue(stallsMetadataReference, (snapshot) => {
                const data = snapshot.val();
                const stallsList = [];
                Object.keys(data).forEach((key) => {
                    if (stallIDs.has(key)) {
                        stallsList.push(data[key]);
                    }
                });
                setDishResult(stallsList);
            });
        }, []);
    }


    // Finding stalls with the given name
    const stallNameQuery = query(stallsMetadataReference, orderByChild('name'), equalTo(name));

    useEffect(() => {
        onValue(stallNameQuery, (snapshot) => {
            const data = snapshot.val();

            if (data) {
                setStallResult(Object.values(data));
            }

        });
    });

    // Filtering by cuisines


    return [dishresult, stallResult];

}

export default filterData;