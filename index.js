const value = require("./information.js");

console.log(value);

let cowsay = require("cowsay");

console.log(cowsay.say({
    text: `I'm ${value.name} from ${value.campus} `,
    e: "oO",
    T: "U "
}));


