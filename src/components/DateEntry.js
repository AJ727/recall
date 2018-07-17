import React from 'react';
import { connect } from 'react-redux';
import selectEntries from '../selectors/entries';

// Specification for this component:
// Main Objective - Upon receiving a date from DatePickFilter, render corresponding journal entry
// Ex. 4/23/2017 --> serve up the entry from that day

// Destructure content off of props
export const DateEntry = ({entries}) => (
    <div>
        {
            entries.length === 0 ? (
                <div>
                    <span>No entry for today</span>
                </div>
            ) : (
                <div>
                    {/* using entry[0].entry is ugly, how do I make this better? */}
                    {entries[0].entry}
                </div>
            )
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        // entry becomes whatever the result of selectentry() is
        // state.entry and state.filters are the 2 params in the selectors/entry function
        // with state.filters being destructured for only the { date }
        entries: selectEntries(state.entries, state.filters)
    }
};

export default connect(mapStateToProps)(DateEntry);