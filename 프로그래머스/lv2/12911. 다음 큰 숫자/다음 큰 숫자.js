const CountOne = (n) => {
  return [...n.toString(2)].filter((v) => v === "1").length;
}

function solution(n) {
  const countN = CountOne(n);
  let NextN = n + 1;
  flag = true;

  while (flag) {
    if (CountOne(NextN) === countN) {
      flag = false;
      return NextN;
    } else {
      NextN++;
    }
  }
}