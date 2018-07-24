import moment from 'moment';

// HELP: This is a modified version of the selector I used in the course I just took
// so I don't understand it entirely, but it seems to work! I'll add comments inside the body real quick
export default (entries, {date}) => {
    return entries.filter((entryObj) => {
        // Call moment on the object's date
        const dateChosen = moment(entryObj.date);
        // HELP: This right here works, and I understand it a little, but not entirely
        // doesn't date.isSame(dateChosen, 'day') return a boolean?
        // and why is the boolen true, on the false side of the ternary operator? This was the setup in my course for some reason
        const dateFiltered = date ? date.isSame(dateChosen, 'day') : true ;
        return dateFiltered;    
    });
};