const Person = require("./person.js");

class Maurice extends Person {
    constructor(name,color, bgColor) {
        super(name, color, bgColor);
    }
}
module.exports = Maurice;