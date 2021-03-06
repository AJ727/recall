import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export interface IHeaderProps {
    startLogout: any;
}

// activeClassName only gets applied when the page is the one clicked on
export const Header: React.FC<IHeaderProps> = ({ startLogout }: IHeaderProps): JSX.Element => (
    <header className="header">
    <div className="content-container">
        <div className="header__content">
            <Link className="header__title" to="/dashboard">
                <h1>recall</h1>
            </Link>
            <Link className="header__title" to="/add">
                <h1>new entry</h1>
            </Link>     
            <button className="button button--link" onClick={startLogout}>Logout</button>
        </div>
    </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);