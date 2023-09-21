// https://school.programmers.co.kr/learn/courses/30/lessons/72410

//! 좀더 정리 

//*  알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
function validationDataType(s) {
  const allow = "abcdefghijklmnopqrstuvwxyz-_.0123456789";
  return allow.includes(s) ? s : '';
}

//* 아이디 맨 앞이나 맨 뒤에 마침표가 있을 경우 제거
function isDot(s) {
  return s.reduce((acc, cur, i, arr) => { // 연속된 . 제거
      if ((cur === '.' && arr[i + 1] === '.') || (cur === '.' && i === 0) || (cur === '.' && i === arr.length -1)) {
        return acc;
      }
      acc.push(cur);
      return acc;
    }, [])
}

//* 길이가 0이면 a를 추가하고 3이하이면 마지막 문자를 길이가 3이 될때까지 반복한다. 그리고 길이가 16이상일 경우 15까지만 짜르고, 이때 마지막 문자가 .이라면 제외한다.
function validationLength(s) {
  let arr = s; 
  if (arr.length === 0) {
    arr.push('a');
  }
  if (arr.length < 3) {
    arr.push(arr[arr.length - 1].repeat(3 - arr.length))
  }
  if (arr.length >= 16) {
    arr = arr.slice(0, 15);
  } 
  return arr[arr.length - 1] === '.' ? arr.slice(0, 14) : arr[0] === '.' ? arr.slice(1) : arr;
}

function solution(new_id) {
  let result = [...new_id]
    .map((s) => s.toLowerCase()) // 소문자로 변환
    .map((s) => validationDataType(s)) // 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
    .filter((s) => s !== "") // 공백 제거
  
  return isDot(result).join(''); 
  return validationLength(isDot(result)).join(''); // .제거 및 글자 수 맞춤
}

//.bat.y.abcdefghijklm

console.log(solution("...!@BaT#*..y.abcdefghijklm")); // "bat.y.abcdefghi"
// console.log(solution("z-+.^.")); // "z--"
// console.log(solution("=.=")); // "aaa"
// console.log(solution("abcdefghijklmn.p")); // "abcdefghijklmn"
// console.log(solution("123_.def")); // "123_.def"
// console.log(solution("123_..def.")); // "123_.def"