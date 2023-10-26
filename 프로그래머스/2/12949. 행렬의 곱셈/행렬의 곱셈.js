function solution(arr1, arr2) {
  const column = arr1.length; // 행 길이
  const row = arr2[0].length; // 열 길이
  let answer = [];

  for (let y = 0; y < column; y++) {
    const arr = [];
    for (let x = 0; x < row; x++) {
      let sum = 0;
      for (let i = 0; i < arr1[0].length; i++) {
        sum += arr1[y][i] * arr2[i][x];
      }
      arr.push(sum);
    }
    answer.push(arr);
  }

  return answer;
}