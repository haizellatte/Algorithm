// https://school.programmers.co.kr/learn/courses/30/lessons/181857

// 문제 :  arr의 길이가 2의 거듭 제곱이 되도록 arr에 최소한의 개수로 0을 추가한 배열을 리턴하세요.

/*
 * 조건 정리)
 * 1. arr.length가 1인 경우 2^1이므로 pow는 2이다.
 * 2. arrlength가 0인 경우 2^0이므로 pow는 1이다.
 * 3. arr.length가 1보다 큰 경우 pow는 2^(arr.length/2)이다.
 */

//! ❌ 런타임 에러는 안나지만, 여전히 통과되지 않는다.

function solution(arr) {
  // 1. 런타임 에러를 막기 위해 pow 배열을 미리 지정해준다.
  const powArr = [1,2,4,8,16,32,64,128,256,512,1024,2048];
    
  for (let i = 0; i < powArr.length; i++) {
    if(powArr.includes(arr.length)) {
      break;
    } 
    arr.push(0);
  }
    
  // 엣지케이스) 길이가 1인 경우 2^1 = 2로 arr를 바로 리턴한다.
  if(arr.length === 1) {
    return arr;
  }
  
  return arr;
}

console.log(solution([1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 0, 0]
console.log(solution([58, 172, 746, 89])); // [58, 172, 746, 89]
