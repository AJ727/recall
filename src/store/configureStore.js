import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import contentReducer from '../reducers/content';
import authReducer from '../reducers/auth';
import filtersReducer from '../reducers/filters';

// Store creation
// combineReducers expects an object, the root object and the reducer that manages it

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            content: contentReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}

