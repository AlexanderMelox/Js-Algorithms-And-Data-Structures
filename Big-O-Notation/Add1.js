/**
 * Assign the project to an employee.
 * @param {number} n - The number to count up to.
 */
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += 1;
  }
  return total;
}

console.log(addUpTo(6));