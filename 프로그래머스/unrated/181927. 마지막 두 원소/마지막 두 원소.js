function solution(num_list) {
  let end = num_list[num_list.length - 1];
  let frontEnd = num_list[num_list.length - 2];

  if (end > frontEnd) {
    num_list.push(end - frontEnd);
  } else { 
    num_list.push(end * 2);
  }
  return num_list;
}