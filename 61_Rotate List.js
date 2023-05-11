
/* ======================== Problem Statement ========================
Given the head of a linked list, rotate the list to the right by k places.
*/

/* =========================== MY APPROACH ===========================
Find the new head 



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