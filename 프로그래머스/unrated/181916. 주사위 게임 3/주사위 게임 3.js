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


function solution(a, b, c, d) {
  const arr = [a, b, c, d].reduce(
    (ac, v) => ({...ac, [v]: (ac[v] || 0) + 1}),
    {}
  );

  return doDice(arr);
}