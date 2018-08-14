import moment from 'moment';

export default (entries, {date}) => {
    // filter returns a new array, so if a condition passes, the item is good and is returned
    return entries.filter((entryObj) => {
        
        // CODE FOR MATCHING DATE - Call moment on the object's date
        const dateChosen = moment(entryObj.date);
        // If there is a date, and that date is the same day, return true
        const dateFiltered = date ? date.isSame(dateChosen, 'day') : true;
        
        // If true, return a new array with this specific entryObj,
        // and continue to the next object
        return dateFiltered;    
    });
};