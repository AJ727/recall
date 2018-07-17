import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class DateContentEntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.content ? moment(props.content.date) : moment(),
            content: props.content ? props.content.content : '',
            focused: false,
            error: ''
        }
    }
    onDateChange = (date) => {
        this.setState({date})
    }
    onContentChange = (e) => {
        const content = e.target.value;
        this.setState(() => ({content}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.content) {
            this.setState(() => ({ error: 'Provide a valid journal entry!' }));
        }
        else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                content: this.state.content,
                date: this.state.date.valueOf()
            });
        }
    };
    render() {
        return (
            <form onSubmit={this.onSubmit}>
            {this.state.error && <p>{this.state.error}</p>}
                <SingleDatePicker 
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    focused={this.state.focused}
                    onFocusChange={({focused}) => this.setState({ focused })}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    id="FormDate"
                />
                <textarea
                    value={this.state.content}
                    onChange={this.onContentChange}
                    placeholder="Add today's journal entry!"
                />
                <div>
                    <button>Save Journal Entry</button>
                </div>
            </form>
        )
    }
};