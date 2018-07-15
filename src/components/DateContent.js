import React from 'react';
import { connect } from 'react-redux';
import selectContent from '../selectors/content';

// Specification for this component:
// Main Objective - Upon receiving a date from DatePickFilter, render corresponding journal entry
// Ex. 4/23/2017 --> serve up the entry from that day

export const DateContent = (props) => (
    <div>
        {
            props.content.length === 0 ? (
                <div>
                    <span>No entry for today</span>
                </div>
            ) : (
                <div>
                    {props.date}
                </div>
            )
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        content: selectContent(state.content, state.filters)
    }
};

export default connect(mapStateToProps)(DateContent);