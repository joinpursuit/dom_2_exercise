class Stack {
  constructor() {
    this.arr = [];
  }

  push(value) {
    this.arr.push(value);
  }

  pop() {
    return this.arr.pop();
  }

  peek() {
    let lastIndex = this.arr.length - 1;
    return this.arr[lastIndex];
  }

  isEmpty() {
    if (this.arr.length === 0) {
      return true;
    }
  }
}

//-------------//
class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(value) {
    this.arr.push(value);
  }

  dequeue() {
    return this.arr.shift();
  }

  peek() {
    let firstIdx = 0;
    return this.arr[firstIdx];
  }

  isEmpty() {
    if (this.arr.length === 0) {
      return true;
    }
  }
}
