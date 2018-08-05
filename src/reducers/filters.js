import moment from 'moment';

const filtersReducerDefaultState = {
    // Defaults the filter to the current day
    date: moment().startOf('day'),
    text: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_DATE':
            return {
                ...state,
                date: action.date
            }
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        default: 
            return state;
    }
};