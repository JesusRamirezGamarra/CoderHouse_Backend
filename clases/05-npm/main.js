// https://www.npmjs.com/package/console-log-colors
// npm install console-log-colors --save-dev
// npm uninstall console-log-colors --save-dev

const { color, log } = require('console-log-colors');
const { red, green, cyan } = color;

console.log(red("color.red('text')"));


log.red("log.red('text')", 'test');
log.green("log.green('text')");


log.red(green('green'));
log.red('red', green('green'), 'default', cyan('cyan'), 'default');
log.red(color.whiteBG('red and whiteBG'));
log.red('red', color.yellowBG('red and yellowBG'), 'red');