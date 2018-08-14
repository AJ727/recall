export default (entries, {text}) => {
    // filter returns a new array, so if a condition passes, the item is good and is returned
    return entries.filter((entryObj) => {
        // CODE FOR MATCHING TEXT - 
        const textMatch = entryObj.entry.toLowerCase().includes(text.toLowerCase());
        
        // If true, return a new array with this specific entryObj,
        // and continue to the next object
        return textMatch;    
    });
};