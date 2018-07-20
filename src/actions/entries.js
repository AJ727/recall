import uuid from 'uuid';

// Restructuring this data because it was garbage before
export const addEntry = ({date = '', entry = ''} = {}) => ({
    type: 'ADD_ENTRY',
    entryObj: {
        id: uuid(),
        date,
        entry
    }
});

export const editEntry = (id, updates) => ({
    type: 'EDIT_ENTRY',
    id, 
    updates
});

export const removeEntry = ({ id }) => ({
    type: 'REMOVE_ENTRY',
    id
});

