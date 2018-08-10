import React from 'react';
import { connect } from 'react-redux';
import { startSetEntries } from '../actions/entries';

// Component Specification: This component will query firebase and return all entries
// and a text filter will allow them to be searched through

// I can use startSetEntries() here somehow, no need to write 
// any excess code if possible
export class RenderAllEntries extends React.Component {
    componentDidMount() {
        this.props.startSetEntries();
    }
    render() {
        return (
            <div>
                Show
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startSetEntries: () => dispatch(startSetEntries())
});

export default connect(undefined, mapDispatchToProps)(RenderAllEntries);