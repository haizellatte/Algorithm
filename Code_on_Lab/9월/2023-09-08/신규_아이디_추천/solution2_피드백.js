// https://school.programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

function toLowerCase(s) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < s.length; i++) {
    let temp = s[i];

    for (let j = 0; j < upper.length; j++) {
      if (temp === upper[j]) {
        temp = lower[j];
      }
    }

    result += temp;
  }

  return result;
}

// console.log(toLowerCase('ABCdef')); // 'abcdef'

function replaceAll(s) {
  const allow = 'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '-_.';
  let result = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < allow.length; j++) {
      if (s[i] === allow[j]) {
        result += s[i];
        break;
      }
    }
  }

  return result;
}

// console.log(replaceAll('a@b#c&')); // 'abc

function dotless(s) {
  let result = '';
  let prevChar = '';

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    if (prevChar === '.' && currentChar === '.') {
      continue;
    }

    result += currentChar;
    prevChar = currentChar;
  }

  return result;
}

// console.log(dotless('...abc..de')); // '.abc.de

function substring(s, start, end) {
  if (end === undefined) {
    end = s.length;
  }

  let result = '';

  for (let i = start; i < end; i++) {
    result += s[i];
  }

  return result;
}

// console.log(substring('abc', 1));
// console.log(substring('abc', 2));
// console.log(substring('abcef', 1, 3));

function trimDots(s) {

  while (s[0] === '.') {
    s = substring(s, 1);
  }

  while (s[s.length - 1] === '.') {
    s = substring(s, 0, s.length - 1);
  }

  return s;
}

// console.log(trimDots('...abc..')); // 'abc'
// console.log(trimDots('...a..bc..')); // 'a..bc'
// console.log(trimDots('...a..bc.')); // 'a..bc'
// console.log('|' + trimDots('.') + '|'); // ''
// console.log('|' + trimDots('') + '|'); // ''
// console.log('|' + trimDots('a') + '|'); // 'a'

function emptyToA(s) {
  if (s === '') {
    return 'a';
  }

  return s;
}

function length15(s) {
  if (s.length < 15) {
    return s;
  }

  let result = '';

  for (let i = 0; i < 15; i++) {
    result += s[i];
  }

  return result;
}

// console.log(length15('abcdefghijklmnopqrstu')); // 'abcdefghijklmno'

function repeatLastChar(s) {
  if (s.length > 2) {
    return s;
  }

  let result = s;
  for (let i = result.length; i < 3; i++) {
    result += result[result.length - 1];
  }

  return result;
}

// console.log(repeatLastChar('ab')); // 'abb'
// console.log(repeatLastChar('a')); // 'aaa'

function solution(newId) {
  newId = toLowerCase(newId);
  newId = replaceAll(newId);
  newId = dotless(newId);
  newId = trimDots(newId);
  newId = emptyToA(newId);
  newId = length15(newId);
  newId = trimDots(newId);
  newId = repeatLastChar(newId);

  return newId;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm")); // "bat.y.abcdefghi"
console.log(solution("z-+.^.")); // "z--"
console.log(solution("=.=")); // "aaa"
console.log(solution("123_.def")); // "123_.def"
console.log(solution("abcdefghijklmn.p")); // "abcdefghijklmn"