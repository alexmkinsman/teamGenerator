const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
//path and fs are built in
//path generates a path in both systems - mac and pc
const path = require("path");
// fs creates files or reads files
const fs = require("fs");

console.log("Welcome to the team generator");
