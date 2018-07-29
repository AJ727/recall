import React from 'react';
import { connect } from 'react-redux';
import DateEntryForm from './DateEntryForm';
import { startEditEntry, startRemoveEntry } from '../actions/entries';

// REMINDER ABOUT mapDispatchToProps:
// Right now "this.props.dispatch(editContent(stuff))" is being used
// Using mapDispatchToProps allows the use of "this.props.editContent(stuff)" instead
export class EditEntryPage extends React.Component {
    onSubmit = (entryObj) => {
        this.props.startEditEntry(this.props.entryObj.id, entryObj);
        this.props.history.push('/');
    }
    removeEntry = () => {
        this.props.startRemoveEntry({ id: this.props.entryObj.id });
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="content-container">
                <h1>Edit Journal Entry</h1>
                <DateEntryForm 
                    entry={this.props.entry}
                    onSubmit={this.onSubmit}
                />
                <button className="button" onClick={this.removeEntry}>Remove Entry</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    entryObj: state.entries.find((entryObj) => entryObj.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditEntry: (id, entryObj) => dispatch(startEditEntry(id, entryObj)), 
    startRemoveEntry: ({ id }) => dispatch(startRemoveEntry({ id }))
});

export default connect (mapStateToProps, mapDispatchToProps)(EditEntryPage);