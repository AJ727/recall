import React from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import { setDate, setTextFilter } from '../actions/filters';

export class DatePickFilter extends React.Component {
    state = {
        focused: null
    }
    onDateChange = (date) => {
        this.props.setDate(date);
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    render(){
        return (
            <div className="content-container">
                <div className="input-group">
                    <SingleDatePicker 
                        date={this.props.filters.date}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={({focused}) => this.setState({ focused })}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        id="FilterDate"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search entries"
                        value={this.props.filters.text}
                        onChange={this.onTextChange}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setDate: (date) => dispatch(setDate(date)),
    setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePickFilter);