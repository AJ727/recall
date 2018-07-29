import moment from 'moment';

const filtersReducerDefaultState = {
    // Defaults the filter to the current day
    date: moment().startOf('day')
};

export default (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_DATE':
            return {
                ...state,
                date: action.date
            }
        default: 
            return state;
    }
};