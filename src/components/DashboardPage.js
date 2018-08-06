import React from 'react';
import DatePickFilter from './DatePickFilter';
import DateEntry from './DateEntry';
import { Link } from 'react-router-dom';

// DatePickFilter will contain the filter that has the SingleDatePicker
// DateEntry will be the contents of the that day, determined by DatePickFilter
// The Link element renders the ViewAllPage
const DashboardPage = () => (
    <div>
        <DatePickFilter />
        <DateEntry />
        <Link to="/all">
            <button>View All</button>
        </Link>
    </div>
);

export default DashboardPage;
