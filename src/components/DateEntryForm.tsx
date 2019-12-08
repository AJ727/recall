import * as React from 'react';
import * as moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export interface IDateEntryFormProps {
    onSubmit(entry: Object): void;
}

export interface IDateEntryFormState {
    date: Object;
    entry: any;
    focused: boolean;
    error: string;
}

export default class DateEntryForm extends React.Component<IDateEntryFormProps, IDateEntryFormState> {
    constructor(props) {
        // We call the constructor and super, in order to pass props upstream
        super(props);
        this.state = {
            // If there's an entryObj, set the date equal to the object's date (same for entry basically)
            date: props.entryObj ? moment(props.entryObj.date) : moment(),
            entry: props.entryObj ? props.entryObj.entry : '',
            focused: false,
            error: ''
        }
    }
    // On date change, grab the new data and update the state
    private onDateChange = (date: moment.Moment): void => {
        this.setState({date})
    }
    // Whenever the user types something, update the state
    private onEntryChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const entry = event.target.value;
        this.setState(() => ({entry}))
    }
    // On submit, pass in the event
    private onSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        // Prevent the page from reloading
        event.preventDefault();
        // If nothing was typed into the textarea
        if(!this.state.entry) {
            this.setState(() => ({ error: 'Provide a valid journal entry!' }));
        }
        // Clear the error, and submit the new entry and date
        else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                entry: this.state.entry,
                date: this.state.date.valueOf()
            });
        }
    };

    public render(): JSX.Element {
        return (
            <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
                <div>
                    <SingleDatePicker 
                        date={this.state.date}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={({focused}) => this.setState({ focused })}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        id="FormDate"
                    />  
                </div>
                <div>
                    <textarea
                        value={this.state.entry}
                        onChange={this.onEntryChange}
                        placeholder="Add today's journal entry!"
                    />
                </div>
                <div>
                    <button className="button">Save Journal Entry</button>
                </div>
            </form>
        )
    }
};