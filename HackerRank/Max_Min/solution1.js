// https://www.hackerrank.com/challenges/one-month-preparation-kit-angry-children/problem
/*
* [문제 해석]
* n개의 값을 가진 배열 arr에서 k만큼 값을 선택했을 때, Max(arr) - Min(arr) 값이 가장 작은 경우의 값을 출력한다.
* 매개변수 : k, arr
*/

function maxMin(k, arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i <= sortedArr.length - k; i++) {
    const point = sortedArr[i + k - 1] - sortedArr[i];
    console.log(point);
    
    result.push(point);
  }
  return Math.min(...result);
}

console.log(maxMin(2, [1, 4, 7, 2]));

