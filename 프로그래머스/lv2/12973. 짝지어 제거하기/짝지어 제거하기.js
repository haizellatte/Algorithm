function solution(s) {
  let set = [];

  for (let i = 0; i < s.length; i++) {
    if (set[set.length - 1] === s[i]) {
      set.pop();
    } else {
      set.push(s[i])
    }
  }

  return set.length === 0 ? 1 : 0;
}