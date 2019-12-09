import moment = require("moment");

export interface Entry {
    date: moment.Moment | number;
    entry: string;
    id: number;
}

// Base Fgnctions and variations
export interface BaseActionFunction {
    type: string;
}

export interface AddEntry extends BaseActionFunction {
    entryObj: Entry;
}

export interface EditEntry extends BaseActionFunction {
    id: number;
    updates: any;
}

export interface RemoveEntry extends BaseActionFunction {
    id: number;
}

export interface SetEntries extends BaseActionFunction {
    entries: any;
}