export const addEntry = (entry) => ({
    type: 'ADD_ENTRY',
    entry
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

