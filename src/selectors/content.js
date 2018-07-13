import moment from 'moment';

export default (content, {date}) => {
    return content.filter((entry) => {
        const dateChosen = moment(entry.date);
        const dateFiltered = date;
        return date;
    });
};