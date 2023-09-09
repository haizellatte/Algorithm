// https://school.programmers.co.kr/learn/courses/30/lessons/181897

/*
* 문제 : num_list를 조건 n에 따라 자른 배열을 리턴하세요.
* [조건]
*  1. slicer에 담긴 정수는 차례대로 a, b, c이다.
* 2. n의 조건은 다음과 같다.
* - n = 1 : 0번째 인덱스 ~ b번 인덱스까지
* - n = 2 : a번째 인덱스 ~ 마지막 인덱스까지
* - n = 3 : a번째 인덱스 ~ b번 인덱스까지
* - n = 4 : a번째 인덱스 ~ b번 인덱스까지 c간격으로
*/

/*
* 객체 활용하기
* 4번의 경우, c 간격으로 인덱스에 해당하는 요소를 골라줘야 하기 때문에 idx % c === 0 인 요소들을 필터링한다.
*/ 

const sliceList = {
  1: (arr, [a, b, c]) => arr.slice(0, b + 1),
  2: (arr, [a, b, c]) => arr.slice(a),
  3: (arr, [a, b, c]) => arr.slice(a, b + 1),
  4: (arr, [a, b, c]) => arr.slice(a, b + 1).filter((_, idx) => idx % c === 0)
}

function solution(n, slicer, num_list) {
  return sliceList[n](num_list, slicer);
}


console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 3, 4, 5, 6]
console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 4, 6]