const solution = (maps) => {
  const [yLen, xLen] = [maps.length, maps[0].length]; // maps의 세로와 가로 길이
  const [goalY, goalX] = [yLen - 1, xLen - 1]; // 최종 목적지 좌표
  const dy = [0, 0, 1, -1]; // 좌우상하 움직일 때의 y좌표
  const dx = [-1, 1, 0, 0]; // 좌우상하 움직일 때의 x좌표
  const queue = [];

  queue.push([0, 0, 1]); // [y좌표, x좌표, 이동한 칸 수] 시작은 무조건 가장 좌측의 가장 상단에서 시작

  while (queue.length) {
    const [curY, curX, move] = queue.shift(); // 현재 좌표와 이동한 칸 수
    
    if (curY === goalY && curX === goalX) return move; //최종 좌표에 도착하면 이동한 수 리턴

    // 도착하지 않은 경우, 상하좌우 이동을 위한 4번의 반복문 동작
    for (let i = 0; i < 4; i++) {
      const moveY = curY + dy[i]; // 이동 후의 y좌표
      const moveX = curX + dx[i]; // 이동 후의 x좌표

      // 이동한 좌표가 map을 벗어나지 않고, 해당 좌표값이 1이라면
      if (moveY >= 0 && moveY < yLen && moveX >= 0 && moveX < xLen && maps[moveY][moveX] == 1) {
        queue.push([moveY, moveX, move + 1]); //이동한 좌표와 이동 횟수에 1을 더한 값을 큐에 담는다.
        maps[moveY][moveX] = 0; // 현재 좌표는 다시 지나지 않도록 0으로 변경한다.
      }
    }
  }
  return -1; // while문을 나왔다는 것은 도착할 수 없음을 의미함으로 -1을 반환
}