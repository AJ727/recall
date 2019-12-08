import * as React from 'react';
import { connect } from 'react-redux';
import DateEntryForm from './DateEntryForm';
import { startAddEntry } from '../actions/entries';
import selectEntries from '../selectors/entries';
import { Entry } from '../interfaces/Actions';

// This Component renders a form, and upon submission, calls dispatch(addEntry(entryObj))
// which adds an instance of an entryObj into the entries array

export interface IProps {
    startAddEntry(entryObj: Entry): void;
    history: any;
}

// TODO: Implement a 1 entry per day limit
export class AddEntryPage extends React.Component<IProps, object> {
    public state = {
        at_entry_limit : false
    }
    protected onSubmit = (entryObj: Entry): void => {
        const { startAddEntry, history } = this.props;
        startAddEntry(entryObj);
        history.push('/');
    }
    public render(): JSX.Element {
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
const mapStateToProps = (state: any) => ({
    entries: selectEntries(state.entries, state.filters) 
})

const mapDispatchToProps = (dispatch: any) => ({
    startAddEntry : (entryObj: any) => dispatch(startAddEntry(entryObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEntryPage);