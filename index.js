function hasTargetSum(array, target) {
  // Write your algorithm here

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  iterate over the array using two loops. 
  outer loop starts from the first element and goes up to the second-to-last element. 
  inner loop starts from the next element after the outer loop index and goes up to the last element of the array.
  Within the loops, compare each pair of numbers by summing arrays and checking if it equals the target value. If a pair is found, we immediately return true. If no pair is found after exhausting all combinations, we return false.

*/

/*
  Add written explanation of your solution here
  The hasPairWithSum function aims to determine whether there exists a pair of numbers in the given array arr that adds up to the target number.
  To accomplish this, the function uses a brute-force approach by checking each possible pair of numbers in the array. It does this by employing two nested loops. The outer loop iterates over the array from the first element to the second-to-last element, while the inner loop iterates over the remaining elements from the next position after the outer loop index to the last element of the array.
  If the loops complete without finding any matching pair, the function reaches the end and returns false, indicating that no such pair exists in the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
