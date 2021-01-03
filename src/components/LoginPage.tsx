import * as React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import Particles from 'react-particles-js';

interface ILoginProps {
    startLogin: any;
}

export const LoginPage: React.FC<ILoginProps> = ({ startLogin }: ILoginProps): JSX.Element => (
    <div>
        {/* I think this can also be defined in the json file */}
        <Particles 
            className="particles-layout" 
            params= {
                {
                    particles: {
                        number: {
                            value: 50,
                            density: {
                                value_area: 1000
                            }
                        },
                        shape: {
                            stroke: {
                                width: 4
                            }
                        },
                        line_linked: {
                            width: .7
                        }
                    }
                }
            }
        />
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