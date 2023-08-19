// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  const isNum = [...s].map(Number).filter((v) => v >= 0); // 숫자만 남김

  if ((s.length === 4 || s.length === 6) && s.length === isNum.length) {
    return true;
  }
  return false;
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true

// console.log(Number('')); // 0
// console.log(Number(' ')); // 0

// console.log('1a34', solution('1a34')); // false
// console.log('123a', solution('123a')); // false
// console.log(' 123', solution(' 123')); // false
// console.log('123 ', solution('123 ')); // false
// console.log('12 3', solution('12 3')); // false
