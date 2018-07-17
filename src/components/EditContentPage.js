import React from 'react';
import { connect } from 'react-redux';
import DateContentEntryForm from './DateContentEntryForm';
import { editContent, removeContent } from '../actions/content';

// REMINDER ABOUT mapDispatchToProps:
// Right now "this.props.dispatch(editContent(stuff))" is being used
// Using mapDispatchToProps allows the use of "this.props.editContent(stuff)" instead
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
const mapDispatchToProps = (dispatch) => ({
    editContent: (id, content) => dispatch(editContent(id, content)), 
    removeContent: ({ id }) => dispatch(removeContent({ id }))
});

export default connect (undefined, mapDispatchToProps)(EditContentPage);
