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
    startEditEntry(id: number, entryObj: Entry): void;
    startRemoveEntry(entryObj: Entry): void;
    history: any;
}

export class EditEntryPage extends React.Component<IEditEntryPageProps, any> {
    public onSubmit = (entryObj: Entry): void => {
        this.props.startEditEntry(this.props.entryObj.id, entryObj);
        this.props.history.push('/');
    }
    public removeEntry = () => {
        this.props.startRemoveEntry({ id: this.props.entryObj.id });
        this.props.history.push('/');
    }
    public render(): JSX.Element {
        return (
            <div className="content-container">
                <h1>Edit Journal Entry</h1>
                <DateEntryForm 
                    entryObj={this.props.entryObj}
                    onSubmit={this.onSubmit}
                />
                <button className="button" onClick={this.removeEntry}>Remove Entry</button>
            </div>
        )
    }
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