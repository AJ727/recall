import uuid from 'uuid';
import database from '../firebase/firebase';

export const addEntry = ({date = '', entry = ''} = {}) => ({
    type: 'ADD_ENTRY',
    entryObj: {
        id: uuid(),
        date,
        entry
    }
});

export const startAddEntry = (entryData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            date = '',
            entry = ""
        } = entryData

        const entry = {date, entry};
        return database.ref(`users/${uid}/entries`).push(entry)
            .then((ref) => {
                dispatch(addEntry({
                    id: ref.key,
                    ...entry
                }))
            })

        )
    }
};

export const editEntry = (id, updates) => ({
    type: 'EDIT_ENTRY',
    id, 
    updates
});

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
