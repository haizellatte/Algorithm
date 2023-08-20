function solution(nums) {
    const max = nums.length /2;
    const arr = nums.filter((x, i) => nums.indexOf(x) === i).length;
    
    return max < arr ? max : arr;
}