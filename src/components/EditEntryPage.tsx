import * as React from 'react';
import { connect } from 'react-redux';
import DateEntryForm from './DateEntryForm';
import { startEditEntry, startRemoveEntry } from '../actions/entries';
import { Entry } from '../interfaces/Actions';

// REMINDER ABOUT mapDispatchToProps:
// Right now "this.props.dispatch(editContent(stuff))" is being used
// Using mapDispatchToProps allows the use of "this.props.editContent(stuff)" instead

export interface IEditEntryPageProps {
    entryObj: Entry;
    startEditEntry: (id: number, entryObj: Entry) => void;
    // id is destructured off of Entry
    startRemoveEntry: ({ id }) => void;
    history: any;
}

export const EditEntryPage = (props: IEditEntryPageProps) => {
    const { entryObj, startEditEntry, startRemoveEntry, history } = props;

    const onSubmit = (entryObj: Entry): void => {
        startEditEntry(entryObj.id, entryObj);
        history.push('/');
    }
    const removeEntry = (): void => {
        startRemoveEntry({id: entryObj.id});
        history.push('/');
    }
        return (
            <div className="content-container">
                <h1>Edit Journal Entry</h1>
                <DateEntryForm 
                    entry={entryObj}
                    onSubmit={onSubmit}
                />
                <button className="button" onClick={removeEntry}>Remove Entry</button>
            </div>
        )
}

// This finds the entryObj, who's ID matches the URL's ID, returning something like:
// entryObj : {
//      id: someID1234,
//      date: 129093918,
//      entry: "Well today I did blah..."
// }
const mapStateToProps = (state, props) => ({
    entryObj: state.entries.find((entryObj) => entryObj.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditEntry: (id, entryObj) => dispatch(startEditEntry(id, entryObj)), 
    startRemoveEntry: ({ id }) => dispatch(startRemoveEntry({ id }))
});

export default connect (mapStateToProps, mapDispatchToProps)(EditEntryPage);