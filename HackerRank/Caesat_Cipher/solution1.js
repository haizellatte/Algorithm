// https://www.hackerrank.com/challenges/one-month-preparation-kit-caesar-cipher-1/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-two

/**
 * (% 26) 를 하는 이유
 * z + k를 하게 되면 알파벳.length를 넘어가게 된다. 
 * -> 이때 (% 26)를 하게 되면, 26 -> 27이 되는게 아니라, 다시 1로 넘어간다.
 * 따라서 26이 넘지 않은 인덱스는 영향 받지 않지만 --> 16 % 26 = 16;
 * 26이 넘어가는 인덱스는 해당 값에 - 26 처리 된다 --> 29 % 26 = 3;
 */

function caesarCipher(s, k) {
  const lowAlpha = "abcdefghijklmnopqrstuvwxyz";
  const upperAlpha = lowAlpha.toUpperCase();

  const trans = s.split("").map(letter => {
    if (lowAlpha.includes(letter)) return lowAlpha[(lowAlpha.indexOf(letter) + k) % 26];
    else if (upperAlpha.includes(letter)) return upperAlpha[(upperAlpha.indexOf(letter) + k) % 26];
    else return letter; // 알파벳이 아닌 특수 기호라면,
  });
  return trans.join("");
}

console.log(caesarCipher('middle - Outz', 2)); // okffng-Qwvb