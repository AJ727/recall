import React from 'react';
import { connect } from 'react-redux';
import DateEntryForm from './DateEntryForm';
import { addEntry } from '../actions/entries';

export class AddEntryPage extends React.Component {
    onSubmit = (entryObj) => {
        this.props.addEntry(entryObj);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <div>
                    <h1>Add Journal Entry</h1>
                </div>
                <DateEntryForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addEntry : (entryObj) => dispatch(addEntry(entryObj))
});

export default connect(undefined, mapDispatchToProps)(AddEntryPage);