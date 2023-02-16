function solution(numbers) {
    let Num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    for(let i = 0 ; i < Num.length; i++){
        numbers = numbers.split(Num[i]).join(i);
    }
     return Number(numbers); 
}

