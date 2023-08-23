function price(arr, m) {
  let min = Math.min(...arr);
  return Number(min * m);
}

function solution(k, m, score) {
  score.sort((a, b) => b - a);
  console.log(score)
  let result = 0;
  score.forEach((s, i) => {
    // m개씩 box를 만든다.
    if (i % m === 0) {
      const box = score.slice(i, i + m);

      if (box.length === m) {
        result += price(box, m);
      }
    }
  });

  return result;
}
