import { Entry } from "../interfaces/Actions";

export default (entries: Entry[], {text}: any): Entry[] => {
    // filter returns a new array, so if a condition passes, the item is good and is returned
    return entries.filter((entryObj: Entry): boolean => { 
        const textMatch: boolean = entryObj.entry.toLowerCase().includes(text.toLowerCase());
        // If true, return a new array with this specific entryObj, and continue to the next object
        return textMatch;    
    }).sort((a: Entry, b: Entry): number => {
        // compare function that sorts from newest to oldest
        // if a's date is newer than b's, return true
        return a.date < b.date ? 1 : -1;
    });
};