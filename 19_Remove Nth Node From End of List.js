/* ======================= PROBLEM STATEMENT ======================
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Examples:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Input: head = [1], n = 1
Output: []

Input: head = [1,2], n = 1
Output: [1]
*/

/* =========================== MY APPROACH ===========================
The complexity of this problem has to do with the fact that the nth node is being referenced from the 
end of the list. So in order to figure the count from the head, we need run a first pass through the 
list to figure out the length of the linked list. Then set count = length - n. Run a second pass from the 
head to remove the node after the count, which is a simple remove node operation. 

          c    n
          |    |
1 -> 2 -> 3 -> 4 -> 5 -> null
|
h

However, the problem also suggests to solve this in 1 pass. That is possible through a creative approach.
Instead of one pointer, we will use 2 pointers, starting at the head, one to track current and one to 
track the node to remove. In the one pass, we will iterate until the current reaches null while also tracking
the difference between the n and curr pointers. We want to make sure that the difference between n and curr
is the same as the n value so that at the end, the pointers reflect the correct place. Once we have that 
placement, then we can easily remove the node. 
Edge Case: If n is equal to length and curr pointer ends up in null, then it means that we have to remove 
the first node, so we simply return head.next as our solution or assign head to head.next and return head.

          n       curr
          |         |
1 -> 2 -> 3 -> 4 -> 5 -> null
|
h
*/

/* =========================== MY SOLUTION =========================== */

var removeNthFromEnd = function(head, n) {
    let curr = head;
    let n2r = head;
    let count = 0;
    while (count < n) {
        count++;
        curr = curr.next;
    }
    if (curr === null) {
        let temp = head;
        head = head.next;
        temp.next = null;
        return head;
    }
    while (curr.next) {
        curr = curr.next;
        n2r = n2r.next;
    }
    let temp = n2r.next;
    n2r.next = temp.next;
    temp.next = null;
    return head;
};
