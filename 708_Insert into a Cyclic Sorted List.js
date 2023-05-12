
/* Problem Statement
Given a Circular Linked List node, which is sorted in non-descending order, write a function to insert a value insertVal into the list such that it remains a sorted circular list. The given node can be a reference to any single node in the list and may not necessarily be the smallest value in the circular list.
If there are multiple suitable places for insertion, you may choose any place to insert the new value. After the insertion, the circular list should remain sorted.
If the list is empty (i.e., the given node is null), you should create a new single circular list and return the reference to that single node. Otherwise, you should return the originally given node.
*/

/* =========================== MY APPROACH ===========================
This one was tough to understand and in order to understand what the problem was asking for,
I had to look into the solution. Once I understood the problem, it didn't seem so daunting after all.
Basically we have a circular linked list with values in non-descending order, which means that the subsequent node's value
should be equal to or greater than the preceeding node's value. Of course since this is circular, there will be an 
exception to this pattern at one end (1 -> 2 -> 3 -> 5) or there may not be an exception (2 -> 2 -> 2). 
With that in mind, we have to find the right place to fit in the given value. 
First thing, we make a node out of the given value. Then we tackle the edge case when head is null.
After that, we will use 2 pointers to help insert the value. This is simple node insertion technique 
for a linked list because a single linkedlist cannot be traversed in both directions. 
As we traverse the circle, we will check for 2 conditions:

first: previous val is greater than post value (the edge condition)
    If we land in this edge condition, then it means that our given value is either 
    1) equal to or greater than the highest value or equal to or lower than the lowest value
    if so we insert the value here and return the head
    Else we continue to traverse the loop. Shift both pre and post pointers to the next.

second: previous val is less than or equal to post value 
    in this situation we only have to check if our 
    node value >= previous val && node value <= post value
    
else: continue to traverse the loop

Once we exit the loop, we are still 1 check shy of checking the entire loop, 
this means that if the value didn't get inserted previously, it has to get 
inserted into this last gap. So we make the insertion and return head.
*/

/* =========================== MY SOLUTION =========================== */
var insert = function(head, insertVal) {
    let node = new Node(insertVal);
    if (head === null) {
        head = node;
        head.next = head;
    }
    let pre = head;
    let post = pre.next;
    while (post !== head) { //when the loop hasn't completed
        if (pre.val > post.val) { //we're in the edge location
            if (node.val >= pre.val || node.val <= post.val) {
                pre.next = node;
                node.next = post;
                return head;
            }
        } else if (node.val >= pre.val && node.val <= post.val) {
                pre.next = node;
                node.next = post;
                return head;
        }
        pre = pre.next;
        post = post.next;
    } 
    pre.next = node;
    node.next = post;
    return head
};
