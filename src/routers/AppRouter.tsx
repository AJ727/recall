import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import AddEntryPage from '../components/AddEntryPage';
import EditEntryPage from '../components/EditEntryPage';
import ViewAllPage from '../components/ViewAllPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { History } from 'history';

// Stateless functional React Component
// path = where we want to show something
// component = what we want to render, when we match the route
// exact = because it doesn't look for exact matches inherently, it will serve up anything with "/"
// <Switch> --> traverses from top to bottom and stops when the correct path is found. If none is found it'll display
// the last one which is the 404 page
// :id dynamically matches whatever comes after /edit/ such as /edit/44
export const history: History<any> = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
            <PrivateRoute path="/add" component={AddEntryPage} />
            <PrivateRoute path="/edit/:id" component={EditEntryPage} />
            <PrivateRoute path="/all" component={ViewAllPage} exact={true} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </Router>
)

export default AppRouter;
