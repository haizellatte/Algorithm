function solution(sides) {
let min;
    sides[0] > sides[1] ? min = sides[1] : min = sides[0];
    return 2*min - 1;
 }