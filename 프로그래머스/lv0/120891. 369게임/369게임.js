function solution(order) {
let count = 0;
let string = (order).toString(); "29423";


    for (let el of string) {
        if (el.includes(3)) {
          count++;
        } if (el.includes(6)) {
          count++;
        }  if (el.includes(9)) {
          count++;
        }
    }

    return count;
}