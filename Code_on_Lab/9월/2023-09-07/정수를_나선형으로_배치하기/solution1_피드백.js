// https://school.programmers.co.kr/learn/courses/30/lessons/181832

/*
 * n = 4일 경우
 * [0, 0] -> [0, 1] -> [0, 2] -> [0, 3] -> 오른쪽
 * [1, 3] -> [2, 3] -> [3, 3] -> 아래
 * [3, 2] -> [3, 1] -> [3, 1] -> [3, 0] -> 왼쪽
 * [2, 0] -> [1, 0] -> 위
 * [1, 1] -> [1, 2] -> 오른쪽
 * [2, 2] -> 아래
 * [2, 1] -> 왼쪽
 * ==> 순서 : right -> down -> left -> up (단 이미 값이 있는 경우는 뛰어넘는다)
 */

function f(a, b, prev, next) {
    if (a || b) {
      return next;
    }

    return prev;
}

function solution(n) {
    let arr = Array.from(Array(n), () => Array(n).fill(0));
    let [x, y] = [0, 0];
    let dir = 'right';

    for (let i = 1; i <= n * n; i++) {
        arr[x][y] = i;

        if (dir === 'right') {
            y += 1;
            dir = f(y === n - 1, arr[x][y + 1] !== 0, dir, 'down');
            // if (y === n - 1 || arr[x][y + 1] !== 0) {
            //     // 맨 끝에 도달했거나 가려는 곳에 이미 값이 있으면 방향 전환
            //     dir = "down";
            // }
        } else if (dir === 'down') {
            x += 1;
            // console.log(x === n - 1);
            // console.log(arr[x + 1][y] !== 0);
            dir = f(x === n - 1, arr[x + 1][y] !== 0, dir, 'left');
            // if (x === n - 1 || arr[x + 1][y] !== 0) {
            //     dir = "left";
            // }
        } else if (dir === 'left') {
            y -= 1;
            dir = f(y === 0, arr[x][y - 1] !== 0, dir, 'up');
            // if (y === 0 || arr[x][y - 1] !== 0) {
            //     dir = "up";
            // }
        } else if (dir === 'up') {
            x -= 1;
            dir = f(x === 0, arr[x - 1][y] !== 0, dir, 'right');
            // if (x === 0 || arr[x - 1][y] !== 0) {
            //     dir = "right";
            // }
        }
    }


    return arr;
}

console.log(solution(4)); // [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
// console.log(solution(5)); // [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]
// console.log(solution(1)); // [[1]]