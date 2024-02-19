import * as React from 'react';
import { useState } from 'react';
import * as moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { Entry } from '../interfaces/Actions';

export interface IDateEntryFormProps {
    onSubmit(entryObj: Entry): void;
    entry: Entry;
}

export default (props: IDateEntryFormProps) => {
    const { onSubmit: onSubmitHandler, entry: entryProp } = props;
    const [date, setDate] = useState<moment.Moment>(entryProp ? moment(entryProp.date) : moment());
    const [entry, setEntry] = useState<string>(entryProp ? entryProp.entry : '');
    const [focused, setFocused] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    // Whenever the user types something, update the state
    const onEntryChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setEntry(event.target.value);
    }
    // On submit, pass in the event
    const onSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        // Prevent the page from reloading
        event.preventDefault();

        // If nothing was typed into the textarea
        if (!entry) {
            setError('Provide a valid journal entry!');
        }
        // Clear the error, and submit the new entry and date
        else {
            setError('');
            // This onSubmit function is passed in from AddEntryPage
            onSubmitHandler({
                entry: entry,
                date: date.valueOf()
            });
        }
    };

    return (
        <form className="form" onSubmit={onSubmit}>
        {error && <p className="form__error">{error}</p>}
            <div>
                <SingleDatePicker 
                    date={date}
                    onDateChange={(dateChange: moment.Moment) => setDate(dateChange)}
                    focused={focused}
                    onFocusChange={(focusChanged: { focused: boolean }) => setFocused(focusChanged.focused)}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    id="FormDate"
                />  
            </div>
            <div>
                <textarea
                    value={entry}
                    onChange={onEntryChange}
                    placeholder="Add today's journal entry!"
                />
            </div>
            <div>
                <button className="button">Save Journal Entry</button>
            </div>
        </form>
    )
}
