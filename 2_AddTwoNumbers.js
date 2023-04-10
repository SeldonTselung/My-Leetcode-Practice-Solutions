/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Input: l1 = [0], l2 = [0]
Output: [0]
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

/* =========================== MY APPROACH ===========================
since the linked lists are in reverse order we can use the traditional addition method with carryover 
to add the digits from the head of the linked lists and make our way down to the tail. As we collect 
each little sum, we will create the resulting linked list with those values, one node at a time. 
*/

/* =========================== MY SOLUTION =========================== */

var addTwoNumbers = function(l1, l2) {
    let carryOver = 0;
    let output = new ListNode(0);
    let head = output;
    let sum = 0;
    
    while (l1 || l2) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;            
        } 
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carryOver;
        let q = Math.floor(sum / 10);
        let m = sum % 10; 
        if (q === 0) {
            head.next = new ListNode(m);
            head = head.next;
        } else {
            head.next = new ListNode(m);
            head = head.next;
        }
        sum = 0;
        carryOver = q;
    }
    if (carryOver) {
        head.next = new ListNode(1);
    }
    
    return output.next;    
};
