function isDuplication(n) {
  const arr = [...String(n)]; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return ''
    } 
  }
  return n;   
}

function solution(babbling) {
  return babbling
    .map((v) =>
      v
        .replace(/aya/g, 1)
        .replace(/ye/g, 2)
        .replace(/woo/g, 3)
        .replace(/ma/g, 4)
  )
  .map(Number)
  .map((v) => isDuplication(v))
  .filter((v) => v).length;
}