// https://school.programmers.co.kr/learn/courses/30/lessons/181916

/*
* 4개가 다 같으면 -> 1111 * p
* 3개가 같으면 -> Math.pow(10*p+q , 2)
* 2개씩 같으면 ->  (p + q) × |p - q|
* 2개가(p) 같고 2개(q, r)는 다르면 -> q * r
* 다 다르면 -> 그 중 가장 작은 숫자만큼 점수를 같는다.
*/

function solution(a, b, c, d) {
  const arr = [a, b, c, d].reduce(
    (ac, v) => ({...ac, [v]: (ac[v] || 0) + 1}),
    {}
  );
  const diceKeys = Object.keys(arr);
  const diceValues = Object.values(arr);
  
  if (diceKeys.length === 1) {
    return 1111 * diceKeys;
  }
  if (diceKeys.length === 2) {
    if (diceValues[0] === diceValues[1]) {
      return (
        (Number(diceKeys[0]) + Number(diceKeys[1])) *
        Math.abs(Number(diceKeys[0]) - Number(diceKeys[1]))
      );
    } else {
      if (diceValues[0] > diceValues[1]) {
        return Math.pow(10 * Number(diceKeys[0]) + Number(diceKeys[1]), 2);
      } else {
        return Math.pow(10 * Number(diceKeys[1]) + Number(diceKeys[0]), 2);
      }
    }
  }
  if (diceKeys.length === 3) {
    if (diceValues[0] === 2) {
      return Number(diceKeys[1]) * Number(diceKeys[2]);
    }
    if (diceValues[1] === 2) {
      return Number(diceKeys[0]) * Number(diceKeys[2]);
    }
    if (diceValues[2] === 2) {
      return Number(diceKeys[0]) * Number(diceKeys[1]);
    }
  }
    if (diceKeys.length === 4) {
      return Math.min(...diceKeys);
    }
}

console.log(solution(2, 2, 2, 2)); // 2222
console.log(solution(4, 1, 4, 4)); // 1681
console.log(solution(6, 3, 3, 6)); // 27
console.log(solution(2, 5, 2, 6)); // 30
console.log(solution(6, 5, 2, 6)); // 10
console.log(solution(6, 4, 2, 5)); // 2 