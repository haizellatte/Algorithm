// https://school.programmers.co.kr/learn/courses/30/lessons/181855

// 문제 : 각 원소들을 길이가 같은 것끼리 그룹으로 묶었을 때, 최대가 되는 개수값을 리턴하세요.

/*
* 🤔
* 1. 풀이가 너무 복잡허다. 근데 다른 풀이 방법을 모르겠어요 🥲
* 배열 요소 중복 횟수 구하는 방법 중 reduce를 사용한 방법이 이해하기 어려워요 👉 https://jsikim1.tistory.com/274
*/

function solution(strArr) {
  // 1. 각 원소들을 원소의 길이로 값을 바꾸고 오름차순 정렬
  changeToLen = strArr.map(v => v.length).sort();

  // 2. 문자열 길이에 따른 갯수를 객체(키-벨류)형태로 만든다.   
  const result = {};
  changeToLen.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });
  
  // 2번에서 만든 객체의 값만 가져와 내림차순으로 정렬한 후, 0번째 인덱스 값을 리턴한다.
  return Object.values(result).sort((a, b) => b - a)[0]
}

console.log(solution(["a", "bc", "d", "efg", "hi"])); // 2