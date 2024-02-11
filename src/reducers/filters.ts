import * as moment from 'moment';

const filtersReducerDefaultState = {
    // Defaults the filter to the current day, and text to an empty string
    date: moment().startOf('day'),
    text: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        // return the new date filter, and then the rest of the object's properties
        case 'SET_DATE':
            return {
                ...state,
                date: action.date
            }
        // same as above, just with text
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        default: 
            return state;
    }
};