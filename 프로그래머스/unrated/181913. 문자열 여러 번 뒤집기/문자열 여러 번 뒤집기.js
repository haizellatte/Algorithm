// 문제 : 2차원 배열 queries가 각 [s, e] 형태로 주어질 때, my_string의 인덱스 s부터 인덱스 e까지를 뒤집어 처리한 문자열을 리턴하세요.

function solution(my_string, queries) {  

     queries.forEach(([s, e]) => {
         // my_string 복사
        const str = [...my_string];
         // str의 s ~ e까지 reverse해 문자열로 변환
        const reverseStr = str.slice(s, e + 1).reverse().join("");
         // splice로 배열 요소 바꾸기
        str.splice(s, e-s+1, reverseStr);
         // 처리한 문자열을 my_string에 재할당
        my_string  = str.join("");
    })
    
    return my_string;
}
     
// splice 참고 자료 : https://www.freecodecamp.org/korean/news/javascript-splice-method/