// https://school.programmers.co.kr/learn/courses/30/lessons/181856

/*
[비교 조건]
1. 길이가 다르다면 -> 배열의 길이가 긴쪽이 더 큼
2. 길이가 같다면 -> 배열의 각 원소의 합이 큰 쪽이 크고
              -> 또는 같다
[출력 조건]              
1. arr1 < arr2 라면 -1
2. arrr1 > arr2 라면 1
3. arr1 = arr2 라면 0
*/

// !!! 좋아요 :)
function compare(a, b) {
  if(a === b) {
    return 0;
  } else {
    return (a > b ? 1 : -1); 
  }
}

// add??? 결국 이렇게 할지 저렇게 할지는 개발자의 몫!
function add(arr) {
  return arr.reduce((acc, cur) => (acc + cur), 0);
}

function solution(arr1, arr2) {
  let result = 0;
  
  //1. 길이가 다를때
  if (arr1.length !== arr2.length) {
    result = compare(arr1.length, arr2.length);
  } else { //2. 길이가 같을 때   
    result = compare(add(arr1), add(arr2));
  }

  return result;
}

console.log(solution([49, 13], [70, 11, 2])); // -1
console.log(solution([100, 17, 84, 1],	[55, 12, 65, 36])); // 1
console.log(solution([1, 2, 3, 4, 5],	[3, 3, 3, 3, 3])); // 0