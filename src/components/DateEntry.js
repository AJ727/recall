import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectEntries from '../selectors/entries';

// Specification for this component:
// Main Objective - Upon receiving a date from DatePickFilter, render corresponding journal entry
// Ex. 4/23/2017 --> serve up the entry from that day

// Destructure content off of props
export const DateEntry = (props) => (
    <div>
        { 
            props.entries.length === 0 ? (
                <div>
                    <span>No entry for today</span>
                </div>
            ) : (
                /*For right now, I'm just going to use the default moment, I'll use this later to make it look good
                    `/edit/${moment(props.entries[0].date).format('MMMDYY')}`
                */
                <Link to={`/edit/${props.entries[0].date}`}> 
                    <div>
                        {/* using entry[0].entry is ugly, how do I make this better? */}
                        {console.log(props.entries)}
                        {props.entries[0].entry}
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