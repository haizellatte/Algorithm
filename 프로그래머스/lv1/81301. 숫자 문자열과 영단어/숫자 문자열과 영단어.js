function solution(s) {
    let answer = s;
    let numbers = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    
    /*
    1. 반복문을 돌면서 숫자를 기준으로 문자열을 잘라준다.
    2. 자른 단어가 numbers 배열과 일치하면 해당 index를 반환하여 출력
    3. 문자열로 잘리는게 없다면 그대로 둔다.
    */
    
    for(let i = 0; i < numbers.length; i++) {
        let newArr = answer.split(numbers[i]);
        answer = newArr.join(i)
    }
    return Number(answer);
}