// https://school.programmers.co.kr/learn/courses/30/lessons/181916

function doDice(arr) {
  const diceKeys = Object.keys(arr);
  const diceValues = Object.values(arr);
  const threeNumSame = diceValues.map((v, i) => v !== 2 ? diceKeys[i] : "").filter(v => v !== "");

  switch (diceKeys.length) {
    case 1: return 1111 * diceKeys;
    case 2: return twoDice(diceKeys, diceValues);
    case 3: return Number(threeNumSame[0]) * Number(threeNumSame[1]);
    case 4: return Math.min(...diceKeys);
  }
}

function twoDice(diceKeys, diceValues) {
  const a = Number(diceKeys[0]);
  const b = Number(diceKeys[1]);

  if (diceValues[0] === diceValues[1]) {
    return (a + b) * Math.abs(a - b);
  } else {
    return (diceValues[0] > diceValues[1]) ?  Math.pow(10  * a + b, 2) : Math.pow(10 * b + a, 2);
    }
}

function solution(a, b, c, d) {
  const arr = [a, b, c, d].reduce(
    (ac, v) => ({...ac, [v]: (ac[v] || 0) + 1}),
    {}
  );

  return doDice(arr);
}

console.log(solution(2, 2, 2, 2)); // 2222
console.log(solution(4, 1, 4, 4)); // 1681
console.log(solution(6, 3, 3, 6)); // 27
console.log(solution(2, 5, 2, 6)); // 30
console.log(solution(6, 4, 2, 5)); // 2