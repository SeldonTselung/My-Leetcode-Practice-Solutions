
Given a Circular Linked List node, which is sorted in non-descending order, write a function to insert a value insertVal into the list such that it remains a sorted circular list. The given node can be a reference to any single node in the list and may not necessarily be the smallest value in the circular list.

If there are multiple suitable places for insertion, you may choose any place to insert the new value. After the insertion, the circular list should remain sorted.

If the list is empty (i.e., the given node is null), you should create a new single circular list and return the reference to that single node. Otherwise, you should return the originally given node.




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
