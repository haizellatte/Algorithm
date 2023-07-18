// https://school.programmers.co.kr/learn/courses/30/lessons/181926

function solution(n, control) {
  let result = n;
  let arr = {
    "w": 1,
    "s": -1,
    "d": 10,
    "a": -10
  };

  for (let i = 0; i < control.length; i++) {
    result += arr[control[i]];
  }
  return result;
}


console.log(solution(0,	"wsdawsdassw")) // -1