const chalk = require("chalk");

class Person {
    constructor(name, favoriteColor, backgroundColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
        this.backgroundColor= backgroundColor;

        //stops people from breaking the code.
        if(typeof this.favoriteColor != "string"){
            this.favoriteColor ="brown";
        }

    }
    speak() {
        console.log(chalk.bgKeyword(this.backgroundColor).keyword(this.favoriteColor)(this.name));
    }

}
module.exports = Person;