import React from 'react';
import { connect } from 'react-redux';
import DateEntryForm from './DateEntryForm';
import { startAddEntry } from '../actions/entries';
import selectEntries from '../selectors/entries';

// This Component renders a form, and upon submission, calls dispatch(addEntry(entryObj))
// which adds an instance of an entryObj into the entries array

// TODO: Implement a 1 entry per day limit
export class AddEntryPage extends React.Component {
    state = {
        at_entry_limit : false
    }
    onSubmit = (entryObj) => {
        this.props.startAddEntry(entryObj);
        this.props.history.push('/');
    }
    render(){
        return (
            <div className="content-container">
                <div>
                    <h1>Add Journal Entry</h1>
                </div>
                <div className="form">
                        <DateEntryForm 
                            onSubmit={this.onSubmit}
                        />
                    </div>
            </div>
        )
    }
}

// Hoping to use this to limit the entry per day in the future
const mapStateToProps = (state) => ({
    entries: selectEntries(state.entries, state.filters) 
})

const mapDispatchToProps = (dispatch) => ({
    startAddEntry : (entryObj) => dispatch(startAddEntry(entryObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEntryPage);