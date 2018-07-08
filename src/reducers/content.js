const contentReducerDefaultState = [];
export default (state = contentReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_CONTENT':
            return [
                ...state,
                action.content
            ];
        case 'EDIT_CONTENT':
            return state.map((content) => {
                if(content.id === action.id) {
                    return {
                        ...content,
                        ...action.updates
                    }
                }
            });
        case 'REMOVE_CONTENT':
            return state.filter(({ id }) => 
            id !== action.id
        );
        default:
            return state; 
    }
}; 