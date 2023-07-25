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

function solution(arr1, arr2) {
  let result = 0;
  
  //1. 길이가 다를때

  // !!! 긍정을 사용할 수 있다면 긍정을 사용하세요!

  if (arr1.length !== arr2.length) {
    result = (arr1.length < arr2.length) ? -1 : 1;
  } else { //2. 길이가 같을 때

    // !!! 변수 이름을 대문자로 사용하지 않아요!

    const Arr1 = arr1.reduce((acc, cur) => (acc + cur), 0);
    const Arr2 = arr2.reduce((acc, cur) => (acc + cur), 0);
      
    result = (Arr1 < Arr2) ? -1 : (Arr1 > Arr2) ? 1 : 0;
  }

  return result;
}

console.log(solution([49, 13], [70, 11, 2])); // -1
console.log(solution([100, 17, 84, 1],	[55, 12, 65, 36])); // 1
console.log(solution([1, 2, 3, 4, 5],	[3, 3, 3, 3, 3])); // 0