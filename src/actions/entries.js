import uuid from 'uuid';
import database from '../firebase/firebase';

export const addEntry = (entryObj) => ({
    type: 'ADD_ENTRY',
    entryObj
    // For this, I think startAddEntry is creating the data structure,
    // for entry, and in the dispatch call, id is set, then the rest
    // of the entry is returned?
    // entryObj: {
    //     id: uuid(),
    //     date,
    //     entry
    // }
});

export const startAddEntry = (entryData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        // Destructure off entryData?
        const {
            date = '',
            entry = ''
        } = entryData;

        const entryObj = {date, entry};
        return database.ref(`users/${uid}/entries`).push(entryObj)
            .then((ref) => {
                dispatch(addEntry({
                    id: ref.key,
                    ...entryObj
                }));
            });
    };
};

export const editEntry = (id, updates) => ({
    type: 'EDIT_ENTRY',
    id, 
    updates
});

export const startEditEntry = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/entries/${id}`).update(updates)
        .then(() => {
            dispatch(editEntry(id, updates))
        })
    }
};

export const removeEntry = ({ id }) => ({
    type: 'REMOVE_ENTRY',
    id
});

export const startRemoveEntry = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/entries/${id}`).remove()
        .then(() => {
            dispatch(removeEntry({ id }))
        })
    }
};

export const setEntries = (entries) => ({
    type: 'SET_ENTRIES',
    entries
});

export const startSetEntries = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/entries`).once('value')
        .then((snapshot) => {
            const entries = [];
            snapshot.forEach((childSnapshot) => {
                entries.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            // Pass in the newly made entries array
            dispatch(setEntries(entries));
        })
    }
}