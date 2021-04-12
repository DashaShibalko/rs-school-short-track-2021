// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.queque = [];
  }

  get size() {
    return this.queque.length;
  }

  enqueue(element) {
    this.queque.push(new ListNode(element));
  }

  dequeue() {
    return this.queque.shift().value;
  }
}

module.exports = Queue;
