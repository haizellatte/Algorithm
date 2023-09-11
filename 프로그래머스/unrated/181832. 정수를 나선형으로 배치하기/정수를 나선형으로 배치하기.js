function solution(n) {
  let arr = Array.from(Array(n), () => Array(n).fill(0));
  let [x, y] = [0, 0];
  let dir = 'right';

  for (let i = 1; i <= n * n; i++) {
    arr[x][y] = i;
    if (dir === 'right') {
      y += 1;
      if (y === n || arr[x][y+1] !== 0) {
        dir = "down"; // 맨 끝에 도달했거나 가려는 곳에 이미 값이 있으면 방향 전환
        y = y > n - 1 ? n - 1 : y;
      }
    }

    else if (dir === 'down') {
      x += 1;
      if (x === n - 1 || arr[x+1][y] !== 0) {
        dir = "left";
      }
    }

    else if (dir === 'left') { 
      y -= 1;
      if (y === 0 || arr[x][y-1] !== 0) {
        dir = "up";
      }
    }

    else if (dir === 'up') {
      x -= 1;
      if (x === 0 || arr[x-1][y] !== 0) {
        dir = "right";
      }
    }
  }
  

  return arr;
}