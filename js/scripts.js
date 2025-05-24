import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js';

import {
    getDatabase,
    ref,
    push,
    set,
    get,
    child
} from "https://www.gstatic.com/firebasejs/11.8.0/firebase-database.js";

export async function getFactions(apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, measurementId) {

    const firebaseConfig = {
        apiKey: apiKey,
        authDomain: authDomain,
        databaseURL: databaseURL,
        projectId: projectId,
        storageBucket: storageBucket,
        messagingSenderId: messagingSenderId,
        appId: appId,
        measurementId: measurementId
    };

    var app = null;
    app = initializeApp(firebaseConfig);
    var db = getDatabase(app);

    var factionArray = [];

    var dbref = ref(db);
    await get(child(dbref, 'factions')).then((factions => {
        factions.forEach(faction => {
            let value = faction.val();
            factionArray.push(value);
        });
    }));
    return factionArray;
}
