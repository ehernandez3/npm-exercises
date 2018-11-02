"use strict";
const $ = require('jquery');

const sayHello = () => {
    console.log("Hola!!!!!!!");
};

sayHello();


$('h1').click(function () {
    $(this).css('color', 'red');
});