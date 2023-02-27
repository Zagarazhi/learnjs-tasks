let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };


function printListRecursional(list) {
    console.log(list.value);
    if(list.next) {
        printListRecursional(list.next);
    }
}

function printListIterational(list) {
    let temp = list;
    while(temp) {
        console.log(temp.value);
        temp = temp.next;
    }
}

printListRecursional(list);
printListIterational(list);