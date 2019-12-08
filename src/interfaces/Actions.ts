import moment = require("moment");

export interface Entry {
    date: moment.Moment | number;
    entry: string;
    id?: number;
}

export interface AddEntry {
    type: string;
    entryObj: Entry;
}