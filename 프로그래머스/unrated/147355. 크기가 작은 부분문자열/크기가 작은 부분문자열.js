function solution(t, p) {
    let cnt = 0;
    
    for(let i = 0; i < t.length; i++) {
      const temp = t.slice(i, p.length + i);
      if (temp.length === p.length && Number(temp) <= Number(p)) {
        cnt++;
      }
    }
  
  return cnt;
}