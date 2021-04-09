import { swapArrayElement } from "../utils.js";

export let quickSortDom = (arrDom) => {
  // initialization of array of numbers from the dom
  let arr = [],
    animationArr = [];
  for (let i = 0; i < arrDom.length; i++) {
    arr.push(Number(arrDom[i].innerHTML));
  }
  let quickSort = (leftIndex, rightIndex) => {
    // only do sorting if the length of array to be sorted > 1 (base case)
    if (arr.slice(leftIndex, rightIndex + 1).length > 1) {
      // initialization of array of animation per recursive step
      let animationArrStep = [
        {
          currentArrStart: leftIndex,
          currentArrEnd: rightIndex,
        },
        { target: leftIndex },
      ];
      // 2. Initialize left pointer and right pointer
      let leftPointer = leftIndex;
      let rightPointer = rightIndex;
      // 3. Scan the left part and right part of the array
      let lpLastPosition = scanLeftandRight(
          arr,
          leftPointer,
          rightPointer,
          animationArrStep
        );
      animationArr.push(animationArrStep);
      // 4.
      if (lpLastPosition > leftIndex + 1) {
        quickSort(leftIndex, lpLastPosition - 1);
      }
      // 5.
      if (lpLastPosition < rightIndex) {
        quickSort(lpLastPosition, rightIndex);
      }
    }
    return arr;
  };
  quickSort(0, arr.length - 1);
  return animationArr;
};

let findMiddleIndex = (rightIndex, leftIndex) => {
  let idx = Math.floor((rightIndex + leftIndex) / 2);
  return idx;
};

let scanLeftandRight = (
  arr,
  leftPointer,
  rightPointer,
  animationArrStep
) => {
  //   scan the array until left pointer meets right pointer
  //   we move the left pointer if the array value less than the array value in middle index
  //   we move the right pointer if the array value greater than the array value in middle index
  //   by this logic, the pointer will never pass the middle index and making sure that left pointer meets the right pointer at middle index
  //   also by this logic, the middle index's value can be changed dynamically if left pointer or right pointer reach it first
  let middleIndex = findMiddleIndex(rightPointer, leftPointer)
  let middleValue = arr[middleIndex]
  while (leftPointer <= rightPointer) {
    while (arr[leftPointer] < middleValue) {
      animationArrStep.push({ checked: leftPointer });
      leftPointer++;
    }
    while (arr[rightPointer] > middleValue) {
      animationArrStep.push({ checked: rightPointer });
      rightPointer--;
    }
    if (leftPointer <= rightPointer) {
      swapArrayElement(arr, leftPointer, rightPointer);
      animationArrStep.push({
        target: rightPointer,
        selected: leftPointer,
      });
      animationArrStep.push({
        removeSelected: leftPointer,
      });
      leftPointer++;
      rightPointer--;
    }
  }
  return leftPointer;
};

export let quickSortAnimateDom = (
  arrDomBox,
  {
    currentArrStart = undefined,
    currentArrEnd = undefined,
    target = undefined,
    selected = undefined,
    checked = undefined,
    removeSelected = undefined,
  }
) => {
  if (checked !== undefined) {
    arrDomBox.children[checked].classList.add("item--checked");
  } else if (target !== undefined) {
    arrDomBox.children[target].classList.add("item--target");
    if (selected !== undefined) {
      arrDomBox.children[selected].classList.add("item--selected");
      let a = arrDomBox.children[target].cloneNode(true),
        b = arrDomBox.children[selected].cloneNode(true);
      arrDomBox.replaceChild(b, arrDomBox.children[target]);
      arrDomBox.replaceChild(a, arrDomBox.children[selected]);
    }
  } else if (removeSelected !== undefined) {
    arrDomBox.children[removeSelected].classList.remove("item--selected");
  } else if (currentArrStart !== undefined && currentArrEnd !== undefined) {
    for (let i = currentArrStart; i <= currentArrEnd; i++) {
      arrDomBox.children[i].classList.add("item--current");
    }
  }
};
