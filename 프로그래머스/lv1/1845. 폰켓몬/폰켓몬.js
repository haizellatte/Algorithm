function solution(nums) {
    let arr = nums.filter((x, i) => nums.indexOf(x) === i).length;
    
    return (nums.length /2 < arr) ? nums.length /2 : arr;
}