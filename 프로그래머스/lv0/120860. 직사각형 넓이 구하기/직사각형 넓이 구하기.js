function solution(dots) {
/* 1. dots를 오름차순으로 정렬한다.
sort 결과 : [[1,1], [2,1], [2,2], [1,2]] -> [[1,1],[1,2],[2,1],[2,2]] */
  dots.sort((a,b) => a[0] - b[0]);
/* 2. sort 결과 -> [ [작은x , 작은y],[작은x, 큰y],[큰x, 작은y],[큰x, 큰y] ] 순으로,
      인덱스가 0, 1 이면 x축이 같아 -> y축(세로) 길이를 구할 수 있고,
      인덱스가 0, 2 이면 y축이 같아 -> x축(가로) 길이를 구할 수 있다. */  
    const ySide = Math.abs(dots[0][1] - dots[1][1]); //1-2
    const xSide = Math.abs(dots[0][0] - dots[2][0]); //1-2
    
    return ySide * xSide;
}