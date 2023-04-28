
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(0);
    let i = list1;
    let j = list2;
    let k = head;
    while (i && j) {
        if (i.val <= j.val) {
            k.next = i;
            k = k.next;
            i = i.next;
        } else {
            k.next = j;
            k = k.next;
            j = j.next;
        }
    }
    if (i) {
        k.next = i; 
    } else {
        k.next = j;
    }
    return head.next;
};
