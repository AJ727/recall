import React from 'react';
import { connect } from 'react-redux';
import DateEntryForm from './DateEntryForm';
import { editEntry, removeEntry } from '../actions/entries';

// REMINDER ABOUT mapDispatchToProps:
// Right now "this.props.dispatch(editContent(stuff))" is being used
// Using mapDispatchToProps allows the use of "this.props.editContent(stuff)" instead
export class EditEntryPage extends React.Component {
    onSubmit = (entry) => {
        this.props.editEntry(this.props.content.id, entry);
    }
    removeEntry = () => {
        this.props.removeEntry({ id: this.props.entry.id });
    }
    render() {
        return (
            <div>
                <h1>Edit Journal Entry</h1>
                <DateContentForm 
                    entry={this.props.entry}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.removeEntry}>Remove Entry</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    entry: state.entries.find((entry) => entry.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    editEntry: (id, content) => dispatch(editEntry(id, entry)), 
    removeEntry: ({ id }) => dispatch(removeEntry({ id }))
});

export default connect (mapStateToProps, mapDispatchToProps)(EditEntryPage);
