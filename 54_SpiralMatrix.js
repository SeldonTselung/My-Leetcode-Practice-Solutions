/* Given an m x n matrix, return all elements of the matrix in spiral order.

    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [1,2,3,6,9,8,7,4,5]

    Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]

    Constraints:
      m == matrix.length
      n == matrix[i].length
      1 <= m, n <= 10
      -100 <= matrix[i][j] <= 100
*/

/* =========================== MY APPROACH ===========================

Since it's a matrix, I can assume it has no more than 4 corners.
Since it's asking me to go in spiral order, I will assume the direction to be clockwise. That means it's going right, down, left, up on a loop until it reaches the end.

Initializing some boundaries such rowMin = 0 and colMin = 0,rowMax = m - 1, colMax = n - 1 will help me shrink the size of the matrix so I can continue to spiral inwards.

right ---> staying at rowMin, iterate from colMin - colMax (rowMin++)
down --->  staying at colMax, iterate from rowMin - rowMax (colMax--)
left --->  staying at rowMax, iterate from colMax - colMin (rowMax--)
up --->  staying at colMin, iterate from rowMax - rowMin (colMin++)

How will I know that I have hit the end of the spiral?
  - Since m * n gives us the exact number of elements that should be there in this matrix. If we spiral inwards pushing elements into our result, we can check if the length of the result = size of the matrix.
  - So our stopping condition would be when the length of the result is equal to the size of the matrix.

What if my array is []?
  - I can return null or anything that is required of that edge case.

Will this work for single row or column?
  - It should because a single row will enter into the right dir loop and upon exiting the loop will check the length of result against the matrix size. It will then return the row elements.
  - For a column, it will go right once, then go down and after that it will do a length check and exit the loop by returning the result.
*/

/* =========================== MY SOLUTION =========================== */

  var spiralOrder = function(matrix) {
    let rowMin = 0;
    let colMin = 0;
    let rowMax = matrix.length - 1;
    let colMax = matrix[0].length - 1;
    let matrixSize = matrix.length * matrix[0].length;
    let result = [];
    let row = rowMin;
    let col = colMin;

    while (result.length < matrixSize) {
        for (col = colMin; col <= colMax; col++) {
            result.push(matrix[row][col]);
        }
        if (result.length === matrixSize) {
                return result;
            }
        col--;
        rowMin++;

        for (row = rowMin; row <= rowMax; row++) {
            result.push(matrix[row][col]);
        }
        if (result.length === matrixSize) {
               return result;
            }
        row--;
        colMax--;

        for (col = colMax; col >= colMin; col--) {
            result.push(matrix[row][col]);
        }
        if (result.length === matrixSize) {
               return result;
            }
        col++;
        rowMax--;

        for (row = rowMax; row >= rowMin; row--) {
            result.push(matrix[row][col]);
        }
        if (result.length === matrixSize) {
                return result;
            }
        row++;
        colMin++;
    }
    return result;
  };


