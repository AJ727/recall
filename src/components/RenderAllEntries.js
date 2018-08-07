import React from 'react';
import { connect } from 'react-redux';
import database from '../firebase/firebase';

// Component Specification: This component will query firebase and return all entries
// and a text filter will allow them to be searched through

export class RenderAllEntries extends React.Component {
    state = {
        
    }
    componentDidMount(getState) {
        const uid = getState().auth.uid;
        const rootRef = database.ref(`users/${uid}/entries`);
        return rootRef.once('value')
        .then((snapshot) => console.log(snapshot))
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect ()(RenderAllEntries);