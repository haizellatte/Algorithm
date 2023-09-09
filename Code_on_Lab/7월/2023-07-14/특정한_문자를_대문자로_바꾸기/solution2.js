// https://school.programmers.co.kr/learn/courses/30/lessons/181873

function solution(my_string, alp) {
  let arr = Array.prototype.slice.call(my_string);
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === alp) {
      arr[i] = arr[i].toUpperCase();
    } 
  }
  return arr.join("");
}


console.log(solution("programmers", "p")); // "Programmers"
console.log(solution("lowercase",	"x")); // "lowercase"