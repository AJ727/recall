import React from 'react';
import { connect } from 'react-redux';

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
                props.content
            )
        }
    </div>
)

export default connect()(DateContent);