// const check = require("./script.js");
import {add, subtract, PI} from "./exportfiles.mjs"
console.log("Add: ", add(2,3));
console.log("Subtract", subtract(4,3));
console.log("PI: ",PI);



let clickBtn = document.getElementById('btn');
clickBtn.addEventListener('click', () => {

    document.getElementById('para').innerHTML = "Hiii"
    document.getElementById('add').innerText = `Add: ${add(2,8)}`;
    document.getElementById('subtract').innerText = `Subtract: ${subtract(8,2)}`;
    document.getElementById('PI').innerText = `PI`;
})