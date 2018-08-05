// SET_DATE
export const setDate = (date = undefined) => ({
    type: 'SET_DATE',
    date
});

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});