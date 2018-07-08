import React from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import { setDate } from '../actions/filters';

export class DatePickFilter extends React.Component {
    state = {
        focused: null
    }
    onDateChange = (date) => {
        this.props.setDate(date);
    }
    render(){
        return (
            <div>
                {console.log(this.props.filters.date)}
                <SingleDatePicker 
                    date={this.props.filters.date}
                    onDateChange={this.onDateChange}
                    focused={this.state.focused}
                    onFocusChange={({focused}) => this.setState({ focused })}
                    numberOfMonths={1}
                    id="Pick A Date!"
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setDate: (date) => dispatch(setDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePickFilter);