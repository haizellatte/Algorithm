function solution(str_list, ex) {
  let result = "";
  for (let el of str_list) {
    if (!el.includes(ex)) {
      result += el;
    }
  }
  return result;
}