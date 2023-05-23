#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const showBanner = require('node-banner');

const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

program.version('1.0.0').description('Password Generator');

program
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

//getting the values from CLI object
const { length, save, numbers, symbols } = program.opts();

//
(async () => {
  await showBanner(
    'PASSGEN',
    'Generates safe and secure password for you\n',
    'green',
    'green',
  );

  setTimeout(() => {
    //generate password
    const generatedPassword = createPassword(length, numbers, symbols);

    //Save to file
    if (save) {
      savePassword(generatedPassword);
    }

    //copy to clipboard
    clipboardy.writeSync(generatedPassword);

    //output generated password
    console.log(
      chalk.blueBright('Generated Password: ') + chalk.bold(generatedPassword),
    );

    console.log(chalk.yellow('Password copied to clipboard 📋'));
  }, 500);
})();
