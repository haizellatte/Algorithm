function solution(my_string, num1, num2) {
//스프레드 배열로 복사한다.
const result = [...my_string];
    //splice(변경시작할 인덱스, 제거할 갯수, 추가할 요소)
    result.splice(num1, 1, my_string[num2]);
    result.splice(num2, 1, my_string[num1]);
//배열 -> 문자열로 바꿔준다.
return result.join('');
}