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