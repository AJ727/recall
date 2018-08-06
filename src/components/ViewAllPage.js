import React from 'react';
import { setTextFilter } from '../actions/filters';
import { connect } from 'react-redux';
import { RenderAllEntries } from './RenderAllEntries';

// Component Specification: On the dashboard page, a button will be clicked to render 
// this page, which returns ALL entries. A search feature will also be implemented into this

export class ViewAllPage extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
     }
    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        placeholder="Search entries"
                        // value={this.props.filters.text}
                        // onChange={this.onTextChange}
                    />
                </div>
                <RenderAllEntries />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect (undefined, mapDispatchToProps)(ViewAllPage);