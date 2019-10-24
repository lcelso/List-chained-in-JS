function chainedList() {

  let init = null;
  let length = 0;
  
  const Node = (value) => {
    return {
      value,
      next: null
    }
  }

  const Add = (value) => {
    if (!init) {
      init = Node(value)
      length++;
      return init
    }

    let node = init;
    while (node.next) {
      node = node.next
    }
    node.next = Node(value);
    length++
    return node.next;
  }

  const getByIndex = (index) => {
    if (length === 0 || index >= length) {
      return null
    }

    let node = init;
    let count = 0;

    while(count < index && node.next) {
      node = node.next;
      count++;
    }

    return node;
  }

  const getByValue = (value) => {
    if (value === 0) return null

    let node = init;
    if (node.value === value) return node;

    while (node.next) {
      node = node.next

      if (node.value === value) return node;
    }
    return null;
  }

  const remove = (node) => {
    // lista vazia
    if (length === 0) return false;

    // remover primeiro item
    if (node === init) {
      init = node.next;
      return false
    }

    let currentNode = init;
    while (currentNode.next && currentNode.next !== node) {
      currentNode = currentNode.next;
    }
    currentNode.next = node.next;
    return true;
  }

  return {
    length: () => length,
    add: (value) => Add(value),
    print: () => console.log(init),
    getByIndex: (index) => getByIndex(index),
    getByValue: (index) => getByValue(index),
    remove: (node) => remove(node),
  }
}

const list = chainedList();
// console.log(list.length());
list.add(1);
list.add(2);
list.add(3);
list.add(4);
// console.log(list.length());
list.print();
list.remove(list.getByValue(3));
// console.log(list.getByIndex(2));
// console.log(list.getByValue(0));
list.print();
