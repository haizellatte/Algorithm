function solution(arr, commands) {
  let answer = [];

  commands.map(([i, j, k]) => {
    let sliceArr = arr.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(sliceArr[k-1]); 
  });

  return answer;
}