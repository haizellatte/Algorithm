// https://school.programmers.co.kr/learn/courses/30/lessons/181840

// includes 안쓰기

function solution(num, n) {
  let answer = 0;

  for (let i of num) {
    if (i === n) {
      return 1; //  
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5],	3)); // 1 
console.log(solution([15, 98, 23, 2, 15], 20)); //0  

/*
10번 줄에 answer += 1;는 안된다.
console.log(solution([1, 2, 3, 4, 5, 3],	3)); // 1 
--> 경우 answer가 2가 되기 때문이다.
*/