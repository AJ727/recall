import React from 'react';
import { connect } from 'react-redux';
import DateContentEntryForm from './DateContentEntryForm';
import { editContent, removeContent } from '../actions/content';

export class EditContentPage extends React.Component {
    onSubmit = (content) => {
        this.props.dispatch(editContent(this.props.content.id, content));
    }
    removeEntry = () => {
        this.props.dispatch(removeContent({ id: this.props.content.id }));
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

// I think I'll need mapDispatchToProps later when I use firebase

export default connect ()(EditContentPage);
