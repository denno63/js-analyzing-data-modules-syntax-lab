// Require datejs for date formatting
require('datejs');

// Step 1: Create combineUsers function with rest argument
function combineUsers(...args) {
    // Step 2: Initialize the return object
    const combinedObject = {
        users: []
    };

    // Step 3 & 4: Loop through args and merge arrays using spread operator
    for (let i = 0; i < args.length; i++) {
        combinedObject.users = [...combinedObject.users, ...args[i]];
    }

    // Step 5: Add merge_date attribute using datejs (format M/d/yyyy)
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");

    // Step 7: Return the object
    return combinedObject;
}

// Export the function for testing
module.exports = { combineUsers };


