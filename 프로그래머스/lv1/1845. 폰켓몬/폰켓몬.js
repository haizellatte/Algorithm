function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)].length;

  return max < arr ? max : arr;
}