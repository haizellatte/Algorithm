// https://school.programmers.co.kr/learn/courses/30/lessons/181866

function solution(myString) {
  let str = myString.split("x").sort();
  
  for (let i = 0; i < myString.length; i++) {
    if (str[0] === ""){
      str.shift();
    }
  }
  
  return str;
}

console.log(solution("axbxcxdx")); // ["a","b","c","d"]
console.log(solution("dxccxbbbxaaaa")); // ["aaaa","bbb","cc","d"]