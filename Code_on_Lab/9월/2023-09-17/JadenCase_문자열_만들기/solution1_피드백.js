// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
    s = [...s.toLowerCase()];
    // console.log('s', s);

    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            s[i] = s[i].toUpperCase();
        }

        if (s[i - 1] === ' ') {
            s[i] = s[i].toUpperCase();
        }
    }

    return s.join('');
}

console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"
console.log(solution("for the last week")); // "For The Last Week"


console.log(solution("3people      unFollowed me")); // "3people Unfollowed Me"
