import React from 'react';
import { connect } from 'react-redux';
import database from '../firebase/firebase';

// Component Specification: This component will query firebase and return all entries
// and a text filter will allow them to be searched through

export class RenderAllEntries extends React.Component {
    render() {
        return (
            <div>
                {
                    database.ref('/').once("value")
                    .then((snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            return childSnapshot
                        }) 
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    entries: state.entries
});

export default connect (mapStateToProps, undefined)(RenderAllEntries);