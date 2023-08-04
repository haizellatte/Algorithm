// https://school.programmers.co.kr/learn/courses/30/lessons/181934

function withEqual(ineq, n, m) {
  if (ineq === "<") {
    return n <= m ? 1 : 0;
  } else {
    return n >= m ? 1 : 0;
  }
}

function withoutEqual(ineq, n, m) {
  if (ineq === "<") {
    return n < m ? 1 : 0;
  } else {
    return n >  m ? 1 : 0;
  }
}

function solution(ineq, eq, n, m) {
  return (eq === "=") ? withEqual(ineq, n, m) : withoutEqual(ineq, n, m);
}

console.log(solution("<", "=", 20, 50)); // 1 
console.log(solution(">", "!", 41, 78)); // 0 