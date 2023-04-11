function solution(dots) {
 let answer = 0

        let x1 = dots[0][0]
        let y1 = dots[0][1]
        let x2 = dots[1][0]
        let y2 = dots[1][1]
        let x3 = dots[2][0]
        let y3 = dots[2][1]
        let x4 = dots[3][0]
        let y4 = dots[3][1]

        if (Math.abs((x1 - x2) * (y3 - y4)) == Math.abs((y1 - y2) * (x3 - x4))) {
            return 1
        }
        if (Math.abs((x1 - x3) * (y2 - y4)) == Math.abs((y1 - y3) * (x2 - x4))) {
            return 1
        }
        if (Math.abs((x1 - x4) * (y2 - y3)) == Math.abs((y1 - y4) * (x2 - x3))) {
            return 1
        }
        return 0
    }


// //기울기 문제
// function solution(dots) {
//     dots.sort((a,b) => a[0] - b[0]); //[[1,4],[3,8],[9,2],[11,6]]
//     const xSide = Math.abs((dots[0][0] - dots[1][0])/(dots[0][1] - dots[1][1])) === Math.abs((dots[2][0] - dots[3][0])/(dots[2][1] - dots[3][1]));
//     const ySide = Math.abs(dots[0][1] - dots[1][1]) === Math.abs(dots[2][1] - dots[3][1]);
    
//     return (xSide && ySide) ? 1 : 0;

// }

//  if (((double)(dots[0][0] - dots[1][0]) / (double)(dots[0][1] - dots[1][1]))
//             == ((double)(dots[2][0] - dots[3][0]) / (double)(dots[2][1] - dots[3][1]))) {
//             return 1;
//         }
//         if (((double)(dots[0][0] - dots[2][0]) / (double)(dots[0][1] - dots[2][1]))
//             == ((double)(dots[1][0] - dots[3][0]) / (double)(dots[1][1] - dots[3][1]))) {
//             return 1;
//         }
//         if (((double)(dots[0][0] - dots[3][0]) / (double)(dots[0][1] - dots[3][1]))
//             == ((double)(dots[2][0] - dots[1][0]) / (double)(dots[2][1] - dots[1][1]))) {
//             return 1;
//         }

//         return answer;
//     }
    
//     function solution(dots) {
//     dots.sort((a,b) => a[0] - b[0]); //[[1,4],[3,8],[9,2],[11,6]]
//     const xSide = Math.abs(dots[0][0] - dots[1][0]) === Math.abs(dots[2][0] - dots[3][0]);
//     const ySide = Math.abs(dots[0][1] - dots[1][1]) === Math.abs(dots[2][1] - dots[3][1]);
    
//     return (xSide && ySide) ? 1 : 0;

// }