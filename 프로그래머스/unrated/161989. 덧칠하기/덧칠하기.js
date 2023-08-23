function solution(n, m, section) {
  let painting = 0;
  let start = 0;
  
  section.map(s => {
    if (start < s) {
      painting++;
      start = s + m - 1;
    }
  })
    
  return painting;
}