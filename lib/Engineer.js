const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGitHub(){
        return this.github;
    }
}

const engineerOne = new Engineer("mom", 1, "hello", "alexmkinsman")
console.log(engineerOne.getName());

module.exports = Engineer;