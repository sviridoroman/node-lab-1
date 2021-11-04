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

module.exports.matrixAddition = function matrixAddition(payload){
    const [arg1, arg2] = payload.split(":");
    const mat1 = JSON.parse(arg1); 
    const mat2 = JSON.parse(arg2);
    let output = [[],[]];
    for (let n = 0; n < mat1.length; n++) {
        for (let m = 0; m < mat1[n].length; m++) {
            output[n][m] = mat1[n][m] + mat2[n][m];
        }
      }
    return `${output}`;
};