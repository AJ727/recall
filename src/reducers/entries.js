const entryReducerDefaultState = [];
export default (state = entryReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_ENTRY':
            return [
                ...state,
                action.entry
            ];
        case 'EDIT_ENTRY':
            return state.map((entry) => {
                if(entry.id === action.id) {
                    return {
                        ...entry,
                        ...action.updates
                    }
                }
            });
        case 'REMOVE_ENTRY':
            return state.filter(({ id }) => 
                id !== action.id
            );
        
        default:
            return state; 
    }
}; 