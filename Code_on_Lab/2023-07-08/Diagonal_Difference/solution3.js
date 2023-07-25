// https://www.hackerrank.com/challenges/one-month-preparation-kit-diagonal-difference/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

/*
! [아이디어 노트]
* 1. leftToRight : 맨 왼쪽 상단(0,0)에서 맨 오른쪽 하단 (n, n)까지
* -> 따라서 row와 column의 인덱스가 같은 값들을 반복문을 돌면서 더한다.
* 2.RightToLeft : 맨 오른쪽 상단 (0, n)에서 맨 왼쪽 하단 (n, 0)까지
* -> 반복문을 돌면서 row 인덱스 값은 증가하고, column은 [(배열 길이-1) - (row 인덱스 값)]만큼 감소시키며 더해준다.
* 3. leftToRight - RightToLeft 값의 절대값을 리턴한다.
 */

function diagonalDifference(arr) {
    const n = arr.length;
    let leftToRight = 0;
    let rightToLeft = 0;
    
    for (let i = 0; i < n ; i++) {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][(n-1)-i]; // length는 1부터 시작하므로 -1을 해준다.
    }
    const result = leftToRight - rightToLeft;
    return result > 0 ? result : -result;
}