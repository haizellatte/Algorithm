let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 또는
let input = require('fs').readFileSync('dev/stdin').toString().split(' ');
