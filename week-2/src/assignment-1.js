/**
 * find the max number of the passing array of numbers.
 * And, you can't use built-in Math.max() or sort() to
 * complete this assignment.
 * @param {Array<Object>} numbers
 */
// solution 1
function max(numbers) {
  let maxVal = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxVal) {
      maxVal = numbers[i];
    }
  }
  return maxVal;
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

// solution 2: use two-pointer technique
function max(numbers) {
  let maxVal = numbers[0];
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    if (numbers[left] > maxVal) {
      maxVal = numbers[left];
    }
    if (numbers[right] > maxVal) {
      maxVal = numbers[right];
    }
    left++;
    right--;
  }
  return maxVal;
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7
