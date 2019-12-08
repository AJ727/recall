import * as React from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import { setDate } from '../actions/filters';
import { Link } from 'react-router-dom';
import moment = require('moment');

export interface IDatePickFilterProps {
    setDate(date: moment.Moment): void;
    filters: any;
}

export interface IDatePickFilterState {
    focused: boolean;
}

export class DatePickFilter extends React.Component<IDatePickFilterProps, IDatePickFilterState> {
    public state = {
        focused: null
    }
    protected onDateChange = (date: moment.Moment) => {
        this.props.setDate(date);
    }
    
    public render(): JSX.Element {
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
                    <Link className="button button--viewall" to="/all">
                        View All
                    </Link>
                </div>
                
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