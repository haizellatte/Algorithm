function solution(citations) {
  let h = Math.max(...citations);
  let moreH = citations.filter((x) => x >= h).length;

  while (h !== moreH) {
    if (h > moreH) {
      h--;
      moreH = citations.filter((x) => x >= h).length;
    }
    if (h <= moreH) {
      break;
    }
  }

  return h;
}