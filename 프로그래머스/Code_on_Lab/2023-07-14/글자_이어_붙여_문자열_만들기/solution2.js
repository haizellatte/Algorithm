// https://school.programmers.co.kr/learn/courses/30/lessons/181915

function solution(my_string, index_list) {
  return index_list.map(i => my_string[i]).join('');
}

console.log(solution("cvsgiorszzzmrpaqpe",	[16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])); // "programmers"
console.log(solution("zpiaz",	[1, 2, 0, 0, 3])); // "pizza"
