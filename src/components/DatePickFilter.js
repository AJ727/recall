import React from 'react';
import { SingleDatePicker } from 'react-dates';

export default class DatePickFilter extends React.Component {
    state = {
        date: null,
        focused: null
    }
    render(){
        return (
            <div>
                <SingleDatePicker 
                    date={this.state.date}
                    onDateChange={date => this.setState({ date })}
                    focused={this.state.focused}
                    onFocusChange={({focused}) => this.setState({ focused })}
                    numberOfMonths={1}
                    id="Pick A Date!"
                />
            </div>
        )
    }
}
