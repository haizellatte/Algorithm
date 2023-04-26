function solution(common) {
    //등비수열인 경우
  if(common[1] - common[0] === common[2] - common[1]) {
        return common[common.length - 1] + (common[1] - common[0]);
    }
    //등차수열인 경우
    return common[common.length - 1] * (common[1] / common[0]);
}