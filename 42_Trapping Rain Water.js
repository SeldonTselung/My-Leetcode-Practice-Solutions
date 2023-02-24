/* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

Input: height = [4,2,0,3,2,5]
Output: 9
*/

/* =========================== MY APPROACH ===========================

*/

/* =========================== MY SOLUTION =========================== */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let totalRain = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                totalRain += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                totalRain += maxRight - height[right];
            }
            right--;
        } 
    } 
    return totalRain; 
};
