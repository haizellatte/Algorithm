// https://www.hackerrank.com/challenges/one-month-preparation-kit-countingsort1/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one&h_r=next-challenge&h_v=zen

/*
  ! [문제 해석]
  * 항상 100개의 요소가 있는 배열이 주어지면, 배열의 각 요소가 존재하는 횟수를 세어 요소를 -> 횟수로 바꿔 리턴하라.
*/

function countingSort(arr) {
  let resultArr = [];
  for (let i = 0; i < 100; i++) {
    resultArr.push(0);
  }
    
  // 그리고 for 루프를 통해 원래 배열인 arr를 돌면서 resultArr의 인덱스 숫자를 1씩 증가시킨다.
  for (let i of arr) {
    resultArr[i]++;
  }
    
  return resultArr;
}