function solution(picture, k) {
  let expansionPic = [];

  // 1. picture의 각 문자열에 map을 돌려 반복한다.
  picture.map(x => {
    // 2. picture[i]의 각 자리수를 배열로 만든 후 돌면서(map), 각 값을 k만큼 반복한 후 문자열로 변환하여 변수에 담는다.
    const bucket = [...x].map(v => v.repeat(k)).join('');
    // 3. 2번에서 만든 배열을 k번만큼 반복해 리턴할 배열에 담는다.
    for (let i = 0; i < k; i++) {
      expansionPic.push(bucket);
    }

  })

    return expansionPic;
}