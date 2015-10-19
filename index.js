var babel = require('./node_modules/babel/index');
var babylon = require('./node_modules/babylon/lib/index');

var input = "export class Fil{  getStuff(){ var stName = 7; return stName;  } }";

var babelResult = babel.transform(input,{sourceType : 'module'});
var babylonResult = babylon.parse(input,{sourceType : 'module'});

console.log(babelResult.ast.program.body);
console.log(babylonResult.program.body);