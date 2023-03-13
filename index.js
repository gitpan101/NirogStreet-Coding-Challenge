// Encoder: encode ("aaaabccaadeeee")
// Output should be nested array
// [[4, a] [1, b] [2, c] [2, a] [1, d][4, e]]

// let str = "aaaabccaadeeee";

// let temp = str[0];
// let count = 0;

// let arr = [];
// for (let i = 0; i < str.length; i++) {
//   if (temp === str[i]) {
//     count++;
//   } else {
//     arr.push([count, temp]);
//     temp = str[i];
//     count = 1;
//   }
// }

// arr.push([count, temp]);
// console.log(arr);

/* Second Problem */

// Print a pattern of numbers from to as shown below. Each of the numbers is separated by a single space.
// For n = 2
// 2 2 2
// 2 1 2
// 2 2 2

// n = 3
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3

// For n = 4
// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

// 00 01 02 03 04
// 10 11 12 13 14
// 20 21 22 23 24
// 30 31 32 33 34
// 40 41 42 43 44

/* Initial Attempt */

// let n = 3;
// let last = n * 2 - 1;
// for (let i = 0; i < last; i++) {
//   let str = "";
//   for (let j = 0; j < last; j++) {
//     if (i === 0 || j === 0 || i === last - 1 || j === last - 1) {
//       str += last - 2;
//     } else {
//       str += i >= last - n ? i - 1 : i + 1;
//     }
//   }
//   console.log(str);
// }

/* New attempt - exact solution */

const MAX = 100;

// function to Print array pattern row-wise
function prints(a, size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += a[i][j];
    }
    console.log(row);
  }
}

// function to compute pattern
function innerPattern(n) {
  // Pattern Size
  const size = 2 * n - 1;
  let front = 0;
  let back = size - 1;

  // Creating an empty 2d array for storing pattern row-wise
  let a = new Array(MAX).fill(0).map(() => new Array(MAX).fill(0));

  while (n !== 0) {
    for (let i = front; i <= back; i++) {
      for (let j = front; j <= back; j++) {
        // Only storing perimeter elements in 2d array row
        if (i === front || i === back || j === front || j === back) {
          a[i][j] = n;
        }
      }
    }

    // Shifting boundaries to inner perimeter, since we already got outer perimeter elements in 2d array
    front += 1;
    back -= 1;
    n -= 1;
  }

  // Printing each row one by one
  prints(a, size);
}

// Driver code

// Input
const n = 4;

// function calling
innerPattern(n);
