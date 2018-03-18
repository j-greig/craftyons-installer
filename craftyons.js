const ora = require('ora');
const chalk = require('chalk');
const log = console.log;
const rule = chalk.blue('\n------------------');


log(rule);
log(chalk.blue('Craftyons is go 💪🏻'));
log(rule);

// Nest styles of the same type even (color, underline, background)
log(chalk.yellow(
	'I am a yellow line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

log(rule);

const spinner = ora('Loading Craftyons').start();

setTimeout(() => {
  log(rule);
	spinner.color = 'yellow';
	spinner.text = 'Loading some rainbows because why not';

  // Combine styled and normal strings
  log(chalk.blue('Hello') + ' World' + chalk.red('!'));

  // Compose multiple styles using the chainable API
  log(chalk.blue.bgRed.bold('Hello world!'));

  log(rule);

  // Pass in multiple arguments
  log(chalk.blue('Hello', 'World! ') + chalk.red('Eat', 'my', 'shorts'));

  // Nest styles
  log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

  // ES2015 template literal
  log(`
  CPU: ${chalk.red('90%')}
  RAM: ${chalk.green('40%')}
  DISK: ${chalk.yellow('70%')}
  `);

  log(rule);

  // Use RGB colors in terminal emulators that support it.
  log(chalk.cyanBright('Yay for cyan ') + chalk.white.bgCyanBright('colored text!'));
  log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
  log(rule);
}, 1500);
