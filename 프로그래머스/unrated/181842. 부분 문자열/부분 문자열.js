function solution(str1, str2) {
 // for (let i = 0; i <= str2.length; i++) {
 //     for (let j = i+1; j <= str2.length; j++) {
 //         if (str2.slice(i, j) === str1) {
 //             return 1;
 //         }
 //         return 0;
 //     }
 // }
    
    return str2.slice(1,4) === str1 ? 1: 0
}