const entryReducerDefaultState = [];
export default (state = entryReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_ENTRY':
            return [
                ...state,
                action.entryObj
            ];
        case 'EDIT_ENTRY':
            return state.map((entryObj) => {
                if(entryObj.id === action.id) {
                    return {
                        ...entryObj,
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