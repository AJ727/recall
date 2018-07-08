export const addContent = (content) => ({
    type: 'ADD_CONTENT',
    content
});

export const editContent = (id, updates) => ({
    type: 'EDIT_CONTENT',
    id, 
    updates
});

export const removeContent = ({ id }) => ({
    type: 'REMOVE_CONTENT',
    id
});

