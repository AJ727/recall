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

    render() {
        return (
            <form>
                <SingleDatePicker 
                    date={this.state.date}
                    onDateChange={this.onDateChange}
                    focused={this.state.focused}
                    onFocusChange={({focused}) => this.setState({ focused })}
                    numberOfMonths={1}
                    id="FormDate"
                />
                <textarea
                    value={this.state.content}
                    onChange={this.onContentChange}
                    placeholder="Add today's journal entry!"
                />
            </form>
        )
    }
};