var Lexer = require('./lib/util-lexer');

var lex = new Lexer();

lex.ios2json('sample7010full.txt', function (json) {
	console.log(JSON.stringify(json,null,'\t'));
});