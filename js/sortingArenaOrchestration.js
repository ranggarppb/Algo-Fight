import { createRandomNumbers } from "./utils.js";
import { SortAnimation } from "./animation.js";
import {
  quickSortDom,
  quickSortAnimateDom,
} from "./sorting-algorithm/quickSort.js";

export const orchestrateSorting = () => {
  let sliderCountNumber = document
    .getElementById("slider-count-number")
    .getElementsByTagName("input")[0];
  let detailCountNumber = document
    .getElementById("count-number-detail")
    .getElementsByTagName("span")[0];
  let sliderSpeed = document
    .getElementById("slider-speed")
    .getElementsByTagName("input")[0];
  let detailSpeed = document
    .getElementById("speed-detail")
    .getElementsByTagName("span")[0];
  var arrDomBox1 = document.querySelector("#box1"),
    arrDomBox2 = document.querySelector("#box2");
  let fightButton = document.querySelector(".fight-button");
  let sortAnimation1 = new SortAnimation();
  let sortAnimation2 = new SortAnimation();
  sortAnimation1.ownedMethod({
    quick: {
      method: quickSortDom,
      animationMethod: quickSortAnimateDom,
    },
  });
  sortAnimation2.ownedMethod({
    bubble: {
      method: quickSortDom,
      animationMethod: quickSortAnimateDom,
    },
  });
  sliderCountNumber.onchange = function () {
    let countNumberValue = sliderCountNumber.value;
    detailCountNumber.innerText = countNumberValue;
    let arrayNumbers = createRandomNumbers(Number(countNumberValue), 100);
    var toAdd1 = document.createDocumentFragment(),
      toAdd2 = document.createDocumentFragment();
    let width;
    if (countNumberValue >= 10 && countNumberValue <= 20) {
      width = (20 / countNumberValue) * 60;
    } else if (countNumberValue > 20 && countNumberValue <= 40) {
      width = (40 / countNumberValue) * 27.5;
    } else if (countNumberValue > 40 && countNumberValue <= 60) {
      width = (60 / countNumberValue) * 16.5;
    } else if (countNumberValue > 60 && countNumberValue <= 80) {
      width = (80 / countNumberValue) * 11;
    } else if (countNumberValue > 80 && countNumberValue <= 85) {
      width = (90 / countNumberValue) * 0.1;
    }
    for (let i = 0; i < arrayNumbers.length; i++) {
      let newDiv1 = document.createElement("div");
      newDiv1.className = "item";
      newDiv1.style = `height: ${arrayNumbers[i] * 2}px; width: ${width}px`;
      newDiv1.innerText = arrayNumbers[i];
      toAdd1.appendChild(newDiv1);
    }
    for (let i = 0; i < arrayNumbers.length; i++) {
      let newDiv2 = document.createElement("div");
      newDiv2.className = "item";
      newDiv2.style = `height: ${arrayNumbers[i] * 2}px; width: ${width}px`;
      newDiv2.innerText = arrayNumbers[i];
      toAdd2.appendChild(newDiv2);
    }
    arrDomBox1.innerHTML = "";
    arrDomBox2.innerHTML = "";
    arrDomBox1.appendChild(toAdd1);
    arrDomBox2.appendChild(toAdd2);
  };
  sliderSpeed.onchange = function () {
    let speedValue = sliderSpeed.value;
    detailSpeed.innerText = `${speedValue} x`;
  };
  fightButton.onclick = function () {
    setTimeout(function () {
      var DomBox1 = document.querySelector("#box1");
      var DomBox2 = document.querySelector("#box2");
      var speed = document
        .getElementById("speed-detail")
        .getElementsByTagName("span")[0].innerText;
      speed = Number(4 / speed.split(" ")[0]) * 40;
      var algoSelected1 = document
        .getElementById("algo1-select")
        .getElementsByTagName("select")[0].value;
      var algoSelected2 = document
        .getElementById("algo2-select")
        .getElementsByTagName("select")[0].value;
      sortAnimation1.getData(DomBox1, algoSelected1);
      sortAnimation2.getData(DomBox2, algoSelected2);
      sortAnimation1.timer = setInterval(
        sortAnimation1.startAnimation(),
        speed
      );
      sortAnimation2.timer = setInterval(
        sortAnimation2.startAnimation(),
        speed
      );
    }, 0);
  };
};
