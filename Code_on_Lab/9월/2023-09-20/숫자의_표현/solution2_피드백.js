// https://school.programmers.co.kr/learn/courses/30/lessons/12924
//! ⏳시간 초과 발생 

const sum = (arr, start, end) => {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += arr[i];
  }
  return total;
};

function solution(n) {
  const lastN= (n / 2 + 0.5);
  const arr = Array.from({length: lastN}, (_, i) => i + 1);
  let [start, end] = [0, lastN - 1];
  let count = 1;

  while (start !== end) {
    // const sumN = sum(arr, start, end);
    const sumN = arr.slice(start, end).reduce((a, b) => a + b);
    if (sumN === n) {
      count++;
    }
    if (sumN > n) {
      end--;
    } else {
      start++;
      end = lastN - 1;
    }
  }

  return count;
}

console.log(solution(15)); // 4
