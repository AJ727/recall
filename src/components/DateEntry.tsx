import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectEntries from '../selectors/entries';

// This Component's Purpose - Upon receiving a date from DatePickFilter, render corresponding journal entry
// Ex. 4/23/2017 --> serve up the entry from that day

export interface IEntries {
    entries: any;
}

// Stateless functional component DateEntry
export const DateEntry: React.FC<IEntries> = ({entries}): JSX.Element => (
    <div>
        { 
            // If there are no entries, return "No Entry For Today"
            entries.length === 0 ? (
                <div className="entry-item entry-item--message">
                    <span>No entry for today</span>
                </div>
            ) : (
                /* I wanted to use the date as the unique identifier instead of the id, but couldn't do it correctly
                    `/edit/${moment(props.entries[0].date).format('MMMDYY')}`
                */
                entries.map(({ entry, id }) => (
                    <Link className="entry-item" to={`/edit/${id}`} key={id}>
                        <div>
                            {entry}
                        </div>
                    </Link>
                ))
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