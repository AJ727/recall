const entryReducerDefaultState = [];
export default (state = entryReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_ENTRY':
            // return all the previous objects, along with the new object appended to it
            return [
                ...state,
                action.entryObj
            ];
        case 'EDIT_ENTRY':
            // return the new object, along with it's new data
            return state.map((entryObj) => {
                if(entryObj.id === action.id) {
                    return {
                        ...entryObj,
                        ...action.updates
                    }
                }
                else {
                    return entryObj;
                }
            });
            // HELP: why does this work? I thought if id == action.id, that would make sense
        case 'REMOVE_ENTRY':
            return state.filter(({ id }) => 
                id !== action.id
            );
        
        default:
            return state; 
    }
}; 