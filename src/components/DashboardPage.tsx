import * as React from 'react';
import DatePickFilter from './DatePickFilter';
import DateEntry from './DateEntry';

// DatePickFilter will contain the filter that has the SingleDatePicker
// DateEntry will be the contents of the that day, determined by DatePickFilter
// The Link element renders the ViewAllPage button
const DashboardPage: React.FC = (): JSX.Element => (
    <div>
        <DatePickFilter />
        <DateEntry />
    </div>
);

export default DashboardPage;
