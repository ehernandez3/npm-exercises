"use strict";

// const $ = require('jquery');

// const niceMessage = "If an egg is broken by outside force, life ends. If broken by inside force, life begins." +
//     " Great things always begin from inside.";  //--- Use with any method #1

// module.exports = niceMessage; //--- require method #1  - Using a single variable

// export default niceMessage; //--- import method #1 - Using a single variable



// const niceMessage = () => {
//     return "If an egg is broken by outside force, life ends. If broken by inside force, life begins." +
//     " Great things always begin from inside."; //--- import method #2
// };
//
// export default niceMessage() //--- import method #2



//================= Justin's Solutions

// const niceMessage = () => "You are great!"; //============ require method
// module.exports = {niceMessage};


export const niceMessage = () => "You are great!!!"; //============ import method
