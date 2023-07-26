/*
[아이디어 노트]
1. 년, 월, 일이 다 같다면 0
1. 년, 월이 같다면 day 비교
2. 년만 같다면 month를 비교
3. 다 다르다면 year를 비교
*/

function compare(a, b) {
    return (a < b) ? 1 : 0;
}


function solution(date1, date2) {
    const checkY = date1[0] === date2[0];
    const checkM = date1[1] === date2[1];
    const checkD = date1[2] === date2[2];
    
   if (checkY && checkM && checkD) {
       return 0;
   } else if (checkY && checkM && !checkD) {
       return compare(date1[2], date2[2])
   } else if (checkY && !checkM && !checkD) {
       return compare(date1[1], date2[1])
   } else {
       return compare(date1[0], date2[0])
   }
}