// TODO * split 안쓰고 푸는 방법 생각해보기 !
// https://school.programmers.co.kr/learn/courses/30/lessons/181868
function solution(my_string) {
  let str = my_string.split(" ")
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "" ) {
      arr.push(str[i])
    }
  }
  return arr;
}

console.log(solution(" i    love  you"))