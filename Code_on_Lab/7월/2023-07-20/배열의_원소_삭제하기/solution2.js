// https://school.programmers.co.kr/learn/courses/30/lessons/181844

//! [해결방법]
// arr[i]번 요소를 없애는 대신 값을 delete하고 : arr.splice(i, 1) --> delete arr[i];
// filter를 통해 null 값이 아닌 값만 리턴한다.

function solution(arr, delete_list) {

  for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j < delete_list.length ; j++) {
      if (arr[i] === delete_list[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(el => el !== null);
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12])); // [293, 395, 678]
console.log(solution([110, 66, 439, 785, 1], [377, 823, 119, 43])); // [110, 66, 439, 785, 1]
console.log(solution([1, 2, 3, 4, 5], [1, 3, 2, 4])); // 5