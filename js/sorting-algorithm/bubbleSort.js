const utilityFunction = require("../utils");

let bubbleSort = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
    let j = 0;
    while (j < i) {
        if (arr[j+1] < arr[j]) {
            utilityFunction.swapArrayElement(arr, j+1, j)
        }
        j++;
    }
  }
  return arr
};