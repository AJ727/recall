import React from 'react';
import DatePickFilter from './DatePickFilter';
import DateEntry from './DateEntry';

const DashboardPage = () => (
    <div>
        {/* DatePickFilter will be the DatePicker component, that renders DateContent */}
        <DatePickFilter />
        {/* DateContent will be the contents of the that day, determined by DatePickFilter */}
        <DateEntry />
    </div>
);

export default DashboardPage;
