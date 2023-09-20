
function sum(i, total, n) {
  if (total === n) {
    return true;
  } else if (total > n) {
    return false;
  } else {
    return sum(i + 1, total + i, n);
  }
}

function solution(n) {
  let answer = 1;
  const lastN = n / 2 + 0.5;
  console.log(lastN)

  for (let i = 1; i < lastN; i++) {
    answer += sum(i, 0, n);
    // console.log(answer);
  }

  return answer;
}