const chalk = require('chalk');
const validator = require('validator');




const res = validator.isEmail("tej.bijay@gmail.com");
console.log(res ? chalk.green.bgYellowBright(res) : chalk.black.bgYellowBright(res));

// console.log(chalk.green.underline.bgBlack('Success!'));