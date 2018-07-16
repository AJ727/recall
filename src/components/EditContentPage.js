import React from 'react';
import { connect } from 'react-redux';
import DateContentEntryForm from './DateContentEntryForm';

export class EditContentPage extends React.Component {
    onSubmit = () => {

    }
    removeEntry = () => {
        
    }
    render() {
        return (
            <div>
                <h1>Edit Journal Entry</h1>
                <DateContentEntryForm 
                    content={this.props.content}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.removeEntry}>Remove Entry</button>
            </div>
        )
    }
}
