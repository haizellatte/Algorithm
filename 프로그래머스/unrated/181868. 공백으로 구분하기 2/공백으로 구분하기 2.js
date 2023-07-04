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