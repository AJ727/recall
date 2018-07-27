import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import Particles from 'react-particles-js';

export const LoginPage = ({ startLogin }) => (
    <div>
        <Particles className="particles-layout" />
        <div className="box-layout__box">
            <h1 className="box-layout__title">R E C A L L</h1>
            <p>Remember the past</p>
            <button className="button--particles" onClick={startLogin}>Login with Google</button>
        </div>
       
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);