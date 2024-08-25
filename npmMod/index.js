import chalk from 'chalk';
import validator from "validator";
// console.log(chalk.blue('Hello world!'));
// console.log(chalk.green.underline.inverse('Success'));

const res = validator.isEmail('bharal@bharal.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))
console.log("vikash");