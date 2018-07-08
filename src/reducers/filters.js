import moment from 'moment';


const filtersReducerDefaultState = {
    date: moment().startOf('month')
};

// I know I don't need a switch, but I'm planning on future action objects to add
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