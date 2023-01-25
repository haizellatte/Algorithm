function solution(box, n) {
let width = parseInt(box[0] / n);
let height = parseInt(box[1] / n);
let length = parseInt(box[2] / n);
    
return width * height * length;
}