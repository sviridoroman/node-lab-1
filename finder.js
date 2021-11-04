#!/usr/bin/env node

const fs = require('fs');
const stream = require('stream');
const util = require('util');
const program = require('commander');

const validator = require('./helpers/validator');
const StrTranform = require('./helpers/transform');

const pipeline = util.promisify(stream.pipeline);

const actions = async()=> {
    const { input, output, action } = program.opts();

    if (action !== 'find' && action !== 'add') {
        process.stderr.write(`Action must be "find" or "add" \n`);
        process.exit(1);
    }

    validator.isEmpty(input) && process.stdout.write('Enter the text and press ENTER to find numbers | press CTRL + C to exit: ')

    try {
      await pipeline(
        !validator.isEmpty(input) ? fs.createReadStream(input) : process.stdin,
        new StrTranform(action),
        !validator.isEmpty(output) 
         ? fs.createWriteStream((output), { flags: 'a' })
         : process.stdout
      );
      process.stdout.write(`Text ${action}d\n`);
    } catch (e) {
      process.stderr.write(` ${e.message}\n`);
      process.exit(1);
    }
}

process.stdin.setEncoding('utf8');
process.on('exit', code => console.log(('Code: ') + code));
process.on('SIGINT', _ => { process.exit(0); });

program
  .requiredOption('-a --action <action>', 'An action find')
  .option('-i, --input <filename>', 'An input file')
  .option('-o --output <filename>', 'An output file')
  .action(actions)

program.parse(process.argv);