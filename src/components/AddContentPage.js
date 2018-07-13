import React from 'react';
import { connect } from 'react-redux';
import DateContentEntryForm from './DateContentEntryForm';
import { addContent } from '../actions/content';

export class AddContentPage extends React.Component {
    onSubmit = (content) => {
        this.props.dispatch(addContent(content));
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <div>
                    <h1>Add Journal Entry</h1>
                </div>
                <DateContentEntryForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     startAddExpense : (expense) => dispatch(startAddExpense(expense))
// });

// undefined, mapDispatchToProps

export default connect()(AddContentPage);