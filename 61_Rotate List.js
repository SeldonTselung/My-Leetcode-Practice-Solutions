
/* ======================== Problem Statement ========================
Given the head of a linked list, rotate the list to the right by k places.
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Input: head = [0,1,2], k = 4
Output: [2,0,1]
*/

/* ========================== MY APPROACH =============================
When the list is rotated by k places, the new head ends up being in length-k places
and the new tail ends up being length-k-1 places and the old head and tails connect.
But because we don't have a length yet and to connect the old head and tails, we have 
to traverse the entire list by nature of a linked list, we will traverse the length once first.
After that we have the length value and a circular list. 
Next it's time to find the new head and tails by starting at the current head and 
traversing uncil length-k-1 to mark it as a new tail and traverse to length-k to 
mark the new head. Once the new head has been marked, the new tail can be disconnected 
from the new head by pointing it to null. Thus, we have our new rotated linked list.  
*/

/* =========================== MY SOLUTION =========================== */
var rotateRight = function(head, k) {
    if (head === null || k === 0) return head;
    let temp = head;
    let length = 1;
    while (temp.next) {
        length++; 
        temp = temp.next;
    }
    temp.next = head;
    temp = head;
    k = length - (k % length) - 1;
    while (k) {
        temp = temp.next;
        k--;
    }
    head = temp.next;
    temp.next = null;
    return head;
};
