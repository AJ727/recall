import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectEntries from '../selectors/entries';

// This Component's Purpose - Upon receiving a date from DatePickFilter, render corresponding journal entry
// Ex. 4/23/2017 --> serve up the entry from that day

// HELP: Is there a way to display the message, "Limit 1 entry per day" here?
export const DateEntry = ({entries}) => (
    <div>
        { 
            entries.length === 0 ? (
                <div className="entry-item entry-item--message">
                    <span>No entry for today</span>
                </div>
            ) : (
                /* I wanted to use the date as the unique identifier instead of the id, but couldn't do it correctly
                    `/edit/${moment(props.entries[0].date).format('MMMDYY')}`
                */
                <Link className="entry-item" to={`/edit/${entries.map((entry) => entry.id)}`}> 
                    <div>
                        {/* New problem, clicking edit on an entry auto enters in the current date,
                        but I want it to put the date the entry contains, into the date picker */}
                        {entries[0].entry}
                    </div>
                </Link>
            )
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        // state.entry and state.filters are the 2 params in the selectors/entry function
        // with state.filters being destructured for only the { date }
        entries: selectEntries(state.entries, state.filters)
    }
};

export default connect(mapStateToProps)(DateEntry);