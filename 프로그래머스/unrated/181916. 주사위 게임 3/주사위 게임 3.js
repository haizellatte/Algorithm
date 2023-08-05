function solution(a, b, c, d) {
  const arr = [a, b, c, d].reduce(
    (ac, v) => ({...ac, [v]: (ac[v] || 0) + 1}),
    {}
  );
  const checkDice = Object.keys(arr);

  if (checkDice.length === 1) {
    return 1111 * checkDice;
  }
  if (checkDice.length === 2) {
    if (Object.values(arr)[0] === Object.values(arr)[1]) {
      return (
        (Number(checkDice[0]) + Number(checkDice[1])) *
        Math.abs(Number(checkDice[0]) - Number(checkDice[1]))
      );
    } else {
      if (Object.values(arr)[0] > Object.values(arr)[1]) {
        return Math.pow(10 * Number(checkDice[0]) + Number(checkDice[1]), 2);
      } else {
        return Math.pow(10 * Number(checkDice[1]) + Number(checkDice[0]), 2);
      }
    }
  }
  if (checkDice.length === 3) {
    if (Object.values(arr)[0] === 2) {
      return Number(checkDice[1]) * Number(checkDice[2]);
    }
    if (Object.values(arr)[1] === 2) {
      return Number(checkDice[0]) * Number(checkDice[2]);
    }
    if (Object.values(arr)[2] === 2) {
      return Number(checkDice[0]) * Number(checkDice[1]);
    }
  }
    if (checkDice.length === 4) {
      return Math.min(...checkDice);
    }
}