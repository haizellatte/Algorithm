function solution(num_list) {
let 짝수 = 0;
let 홀수 = 0;
    for(i = 0; i < num_list.length ; i++){
        if(num_list[i] % 2 === 0){
            짝수++;
        } else {
            홀수++;
        }
    }
    return [짝수, 홀수]
}