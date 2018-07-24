import React from 'react';
import { connect } from 'react-redux';
import DateEntryForm from './DateEntryForm';
import { addEntry } from '../actions/entries';
import selectEntries from '../selectors/entries';

// This Component renders a form, and upon submission, calls dispatch(addEntry(entryObj))
// which adds an instance of an entryObj into the entries array

export class AddEntryPage extends React.Component {
    onSubmit = (entryObj) => {
        // HELP: Right here is where I'm limiting the entries (it seems to be working), but this doesn't allow me to 
        // render anything to the screen, for instance saying "Limit 1 entry!"
        // I feel like I should be rendering a message in DateEntry to show the limit message
        // NOTE: A modal could be good here?
        this.props.entries.length >= 2 ? null : this.props.addEntry(entryObj);
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

// HELP: So right here, I'm trying to use mapStateToProps, in order to give myself ALL 
// the entries for the day, and limiting it to 1 per day by checking the length, but when I do this, it does not
// work as expected. It works in DateEntry.js but not here for some reason. 
const mapStateToProps = (state) => ({
    entries: selectEntries(state.entries, state.filters) 
})

const mapDispatchToProps = (dispatch) => ({
    addEntry : (entryObj) => dispatch(addEntry(entryObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEntryPage);