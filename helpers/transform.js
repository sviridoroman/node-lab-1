const { Transform } = require("stream");
const { findNumber  } = require('./code');

class StrTranform extends Transform {
  constructor(action) {
    super();
    this.action = action;
  }

  _transform(chunk, _, done) {
    let result = '';

    switch (this.action) {
      case 'find':
        result = findNumber(chunk.toString('utf8'), this.shift);
        break;
      default:
        process.stderr.write(' Erorr: Action not found\n');
        process.exit(1);
    }

    this.push(result);
    done();
  }
}

module.exports = StrTranform;