
//*  알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
function validationDataType(s) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const symbol = "-_."; 
  const number = '0123456789';
  if (number.includes(s) || alpha.includes(s) || symbol.includes(s)) {
    return s;
  }
  return "";
}

//* 아이디 맨 앞이나 맨 뒤에 마침표가 있을 경우 제거
function isDotFirst(s) {
  let arr = s;
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === ".") { // 맨 앞에 .이 있다면 제거
      arr.shift();
    } else if (arr[arr.length - 1] === '.') { // 맨 뒤에 .이 있다면 제거
      arr.pop(); 
    }
    else {
      break;
    }
    isDotFirst(arr);
  }
  return arr;
}

//* 길이가 0이면 a를 추가하고 3이하이면 마지막 문자를 길이가 3이 될때까지 반복한다. 그리고 길이가 16이상일 경우 15까지만 짜르고, 이때 마지막 문자가 .이라면 제외한다.
function validationLength(s) {
  let arr = s;
  if (arr.length === 0) {
    arr.push('a');
  }
  if (arr.length < 3) {
    while (arr.length < 3) {
      arr.push(arr[arr.length-1])
    }
  }
  if (arr.length >= 16) {
    arr = arr.slice(0, 15);
    if (arr[arr.length - 1] === '.') {
      arr = arr.slice(0, 14);
    }
  }
  return arr;
}

function solution(new_id) {
  let result = [...new_id]
    .map((s) => s.toLowerCase()) // 소문자로 변환
    .map((s) => validationDataType(s)) // 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
    .filter((s) => s !== "") // 공백 제거
    .reduce((acc, cur, i, arr) => { // 연속된 . 제거
      if (cur === '.' && arr[i + 1] === '.') {
        return acc;
      }
      acc.push(cur);
      return acc;
    }, [])
  
  return validationLength(isDotFirst(result)).join(''); // 앞뒤 .제거 및 글자 수 맞춤
}