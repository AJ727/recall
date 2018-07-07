import React from 'react';
import DatePickFilter from './DatePickFilter';
import DateContent from './DateContent';

const DashboardPage = () => (
    <div>
        {/* DatePickFilter will be the DatePicker component, that renders DateContent */}
        <DatePickFilter />
        {/* DateContent will be the contents of the that day, determined by DatePickFilter */}
        <DateContent />
    </div>
);

export default DashboardPage;
