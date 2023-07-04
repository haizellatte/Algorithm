function solution(num_list) {
  let sum = 0;  //합
  let total = 1; //곱

  for (let i = 0; i < num_list.length; i++) {
    sum += num_list[i];
    total *= num_list[i];
  }
  sum = sum * sum;

  return total < sum ? 1 : 0;
}