import moment from 'moment';

const filtersReducerDefaultState = {
    date: moment().startOf('month')
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