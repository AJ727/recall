import React from 'react';
import { connect } from 'react-redux';
import DateContentEntryForm from './DateContentEntryForm';
import { addContent } from '../actions/content';

export default class AddContentPage extends React.Component {
    onSubmit = (content) => {
        this.props.addContent(content);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <div>
                    <h1>Add Journal Entry</h1>
                </div>
                <DateContentEntryForm />
            </div>
        )
    }
}