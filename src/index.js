"use strict";
// const $ = require('jquery');

// const sayHello = () => {
//     console.log("Hola!!!!!!!");
// };
//
// sayHello();
//
//
// $('h1').click(function () {
//     $(this).css('color', 'red');
// });



// const messageModule = require("./say-hello"); //---require method
// console.log(messageModule); //---require method

// import messageModule from './say-hello'  //--- import method #1 - Using a single variable
// console.log(messageModule);  //--- import method #1 - Using a single variable

// import messageModule from './say-hello'  //--- import method #2 using a single function
// console.log(messageModule);  //--- import method single function





//================ Justin's Solutions

// const $ = require('jquery');
// const {niceMessage} = require("./say-hello"); //============ require method
// console.log(niceMessage());

const $ = require('jquery');
import {niceMessage} from "./say-hello"; //============ import method
console.log(niceMessage());