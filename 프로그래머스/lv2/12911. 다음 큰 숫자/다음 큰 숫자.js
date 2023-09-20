const CountOne = (n) => {
  return [...n.toString(2)].filter((v) => v === "1").length;
}

function solution(n) {
  const countN = CountOne(n);
  let NextN = n + 1;

  while (true) {
    if (CountOne(NextN) === countN) {
      return NextN;
    } else {
      NextN++;
    }
  }
}