function solution(citations) {
  let h = Math.max(...citations);
  
  while (true) {
    let moreH = citations.filter((x) => x >= h).length;
    if (h <= moreH) {
      break;
    }
    h--;
  }

  return h;
}