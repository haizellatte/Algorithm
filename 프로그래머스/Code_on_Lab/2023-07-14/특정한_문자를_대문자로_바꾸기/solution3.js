// https://school.programmers.co.kr/learn/courses/30/lessons/181873

// 왜 for of문은 통과가 안될까요? i가 몇번째 요소인지 몰라서 ?!?!?
// --> i는 원시형 타입(Call by value)이기 때문에 주소가 아닌 값이 복사되기 대문이다.

function solution(my_string, alp) {
  let arr = Array.prototype.slice.call(my_string);
  
  for (let i of arr) {
    if (i === alp) {
      i = i.toUpperCase();
    } 
  }
  return arr.join("");
}


console.log(solution("programmers", "p")); // "Programmers"
console.log(solution("lowercase",	"x")); // "lowercase"