import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import { setDate } from '../actions/filters';
import { Link } from 'react-router-dom';
import moment = require('moment');

interface IDatePickFilterProps {
    setDate: (date: moment.Moment) => void;
    filters: any;
}

const DatePickFilter = (props: IDatePickFilterProps): JSX.Element => {
    const { setDate, filters } = props;
    const [isFocused, setIsFocused] = useState<boolean | null>(null);

    const onDateChange = (date: moment.Moment) => {
        setDate(date);
    }

    return (
        <div className="content-container">
            <div className="input-group">
                <SingleDatePicker 
                    date={filters.date}
                    onDateChange={onDateChange}
                    focused={isFocused}
                    onFocusChange={(focusChanged: { focused: boolean }) => setIsFocused(focusChanged.focused)}
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

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setDate: (date) => dispatch(setDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePickFilter);