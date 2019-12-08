import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

// Unconnected Stateless Functional Component
// ...rest gets the rest of the props (so not isAuth or component)

// Need to figure this one out
export interface AuthComponent {
    isAuthenticated: boolean;
    component: any;
}

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest}: any) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )}/>
);

// !! <-- converts the string to a boolean, if it exists
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);