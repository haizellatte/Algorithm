function solution(hp) {
let count = 0;
    while(hp){
        if(hp >= 5){
            hp -= 5;
            count++
        }
        if(hp >= 3 && hp < 5){
            hp -=3;
            count++
        }
        if(hp >= 1 && hp <3){
            hp -= 1;
            count++
        }
    }
    return count;
}