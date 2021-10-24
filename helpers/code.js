module.exports.findNumber = function findNumber(str){
    let output = str;
    const words = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eigt',
      'nine',
    ];
    
    for (let i = 0; i < words.length; i++) {
      if (output.includes(words[i])) {
        output = output.replace(words[i], words[i] + ' ');
      }
    }
    return `${output}`;
};