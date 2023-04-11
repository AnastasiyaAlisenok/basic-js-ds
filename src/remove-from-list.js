const { NotImplementedError, ListNode } = require('../extensions/index.js');

//const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * 
 * }
 */
function removeKFromList(l, k) {
  let current = l;
  let index = indexOf(l, k);

  while(index !== -1 && current.next !== null) {
    if(index === 0) {
      l = current.next
    } else {
    let prev = null;
    let number = 0;

    while(number < index) {
      prev = current;
      current = current.next;
      number++
    }
    prev.next = current.next;
    
  }
  l = removeKFromList(l, k)
  index = indexOf(l, k)
}


  return l;

  function indexOf(l, k) {
    let current = l;
    let index = 0;
    while(current.next) {
     if(current.value === k) {
      return index
     } 
     current = current.next
     index++
     }
     if(current.value === k) {
      return index;
     }
     return -1;
    }
}




module.exports = {
  removeKFromList
};
