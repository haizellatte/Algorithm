// https://school.programmers.co.kr/learn/courses/30/lessons/181844

// 테스트케이스 3개는 통과되는데, 제출시 통과되지 않음 !

function solution(arr, delete_list) {

  for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j < delete_list.length ; j++) {
      if (arr[i] === delete_list[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12])); // [293, 395, 678]
console.log(solution([110, 66, 439, 785, 1], [377, 823, 119, 43])); // [110, 66, 439, 785, 1]

// ! 반례 : arr의 원소를 지우면서 arr의 원소값들의 인덱스가 재조정되는데 그게 i에는 반영이 안되서 틀리게 된다.
console.log(solution([1, 2, 3, 4, 5], [1, 3, 2, 4])); // 5