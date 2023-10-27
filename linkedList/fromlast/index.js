// --- Directions
// Given a linked list and integer n, return the element n
// spaces from the last node in the list.  Do not call the
// 'size' method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let p1 = list.head;
  let p2 = list.head;

  // make p1 n steps ahead from p1
  for (let i = 0; i < n; i++) {
    p2 = p2.next;
  }

  // loop through the list and move each of the pointers
  // one step ahead as long as p2.next is defined
  // thus p2 will point to nth node to the last
  // when p2 is pointing to the last node
  while (p2.next) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}

module.exports = fromLast;
