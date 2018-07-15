import moment from 'moment';

// For this, I want to return the selected day's data
// Step 1. dateChosen should use moment to get the entry's date
// Step 2. 
export default (content, {date}) => {
    return content.filter((entry) => {
        const dateChosen = moment(entry.date);
        const dateFiltered = date ? date.isSame(dateChosen, 'day') : true ;
        return dateFiltered;    
    });
};