import * as React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { startSetEntries } from './actions/entries';

// TODO:
// Change from class based to functional components
// Type everything with TS
// Redo this project but with .NET as a backend instead
// Change to PostGres
// Testing?

const store = configureStore();

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(
            <Provider store={store}>
                <AppRouter />
            </Provider>
        , document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// When authenticted state is changed (ex unauth --> auth, auth --> unauth)
firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetEntries())
            .then(() => {
                renderApp();
                    if(history.location.pathname === '/') {
                        history.push('/dashboard'); 
                    }
            })
    }
    else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
