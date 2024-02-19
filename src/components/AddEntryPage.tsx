import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import DateEntryForm from './DateEntryForm';
import { startAddEntry } from '../actions/entries';
import selectEntries from '../selectors/entries';
import { Entry } from '../interfaces/Actions';
import { History } from 'history';

// This Component renders a form, and upon submission, calls dispatch(addEntry(entryObj))
// which adds an instance of an entryObj into the entries array

interface IProps {
    startAddEntry: (entryObj: Entry) => void;
    history: History<any>;
    entry: Entry;
}

export const AddEntryPage = (props: IProps) => {
    const { startAddEntry, history, entry: entryObj } = props;
    // TODO: Implement a 1 entry per day limit
    const [atEntryLimit, setAtEntryLimit] = useState<boolean>(false);

    const onSubmit = (entryObj: Entry): void => {
        startAddEntry(entryObj);
        history.push('/');
    }

    return (
        <div className="content-container">
            <div>
                <h1>Add Journal Entry</h1>
            </div>
            <div className="form">
                    <DateEntryForm 
                        onSubmit={onSubmit}
                        // Note: I added this due to typescript complaining about this object not being passed in. I think "connect" at the bottom
                        // was already taking care of this, but I'm not sure so I'm passing it in anyway
                        entry={entryObj}
                    />
            </div>
        </div>
    )
}

// Hoping to use this to limit the entry per day in the future
const mapStateToProps = (state: any) => ({
    entries: selectEntries(state.entries, state.filters) 
})

const mapDispatchToProps = (dispatch: any) => ({
    startAddEntry : (entryObj: Entry) => dispatch(startAddEntry(entryObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEntryPage);