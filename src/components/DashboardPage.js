import React from 'react';
import DatePickFilter from './DatePickFilter';
import DateEntry from './DateEntry';

// DatePickFilter will contain the filter that has the SingleDatePicker
// DateEntry will be the contents of the that day, determined by DatePickFilter
const DashboardPage = () => (
    <div>
        <DatePickFilter />
        <DateEntry />
        <button onClick={console.log('click')}>View All</button>
    </div>
);

export default DashboardPage;
