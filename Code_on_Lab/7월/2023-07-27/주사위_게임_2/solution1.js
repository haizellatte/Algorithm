// https://school.programmers.co.kr/learn/courses/30/lessons/181930

// 문제 : 주사위를 세 번 굴려 나온 숫자를 각각 a, b, c라고 했을 때 조건에 맞는 점수를 리턴하세요.

/*
* [조건]
* 1. 세 숫자 모두 다르다면 --> a + b + c
* 2. 하나라도 같으면 --> (a + b + c) × (a2 + b2 + c2)
* 3. 모두 같으면 --> (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )
*/

function pow(a, b, c, n) {
  return (Math.pow(a, n) + Math.pow(b, n) + Math.pow(c, n));
}

function solution(a, b, c) {
  const x = pow(a, b, c, 1)
  const y = x * pow(a, b, c, 2);
  const z = x * pow(a, b, c, 2) * pow(a, b, c, 3);
    
  return (a === b && b === c && c === a) ? z : (a !== b && b !== c && c !== a) ? x : y; 
}

console.log(solution(2, 6, 1)); // 9
console.log(solution(5, 3, 3)); // 473
console.log(solution(4, 4, 4)); // 110592