function solution(X, Y) {
  const a = Array(10).fill(0);
  const b = Array(10).fill(0);
  [...X].forEach(v => a[v]++);
  [...Y].forEach(v => b[v]++);
  let arr = [];
  
  // return a.map((v, i) => {
  //   if (a[i] && b[i]) {
  //     return i;
  //   }
  //   return ''
  // }).filter(x => x !== '').sort((a, b) => b - a)

  for (let i = 0; i < a.length; i++) {
    if (a[i] && b[i]) {
      if (a[i] > 1 && b[i] > 1) {
        let n = 1;
        const min = Math.min(a[i], b[i]);
        while (n < min) {
          arr.push(i);
          n++;
        }
      }
      arr.push(i)
    }
  }
  const result = arr.sort((a, b) => b - a);

  if (arr.length > 0 && arr.every(x => x === 0)) {
    return '0'
  } else if (arr.length === 0) {
    return "-1";
  } else {
    return result.sort((a, b) => b - a).join("");
  }
}