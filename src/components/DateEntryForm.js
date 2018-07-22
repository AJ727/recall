import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class DateEntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.entryObj ? moment(props.entryObj.date) : moment(),
            entry: props.entryObj ? props.entryObj.entry : '',
            focused: false,
            error: ''
        }
    }
    onDateChange = (date) => {
        this.setState({date})
    }
    onEntryChange = (e) => {
        const entry = e.target.value;
        this.setState(() => ({entry}))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.entry) {
            this.setState(() => ({ error: 'Provide a valid journal entry!' }));
        }
        else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                entry: this.state.entry,
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
                    value={this.state.entry}
                    onChange={this.onEntryChange}
                    placeholder="Add today's journal entry!"
                />
                <div>
                    <button>Save Journal Entry</button>
                </div>
            </form>
        )
    }
};