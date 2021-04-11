import { createRandomNumbers } from "./utils.js";
import { SortAnimation } from "./animation.js";

export const orchestrateSorting = (sortingAnimations) => {
  // orchestrate the number bar

  // variables to be used
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
  let arrDomBox1 = document.querySelector("#box1"),
    arrDomBox2 = document.querySelector("#box2");
  let fightButton = document.querySelector(".fight-button");

  // change event of slider of count number
  sliderCountNumber.onchange = function () {
    // reset the dom
    arrDomBox1.innerHTML = "";
    arrDomBox2.innerHTML = "";

    // changing count number detail text
    let countNumberValue = sliderCountNumber.value;
    detailCountNumber.innerText = countNumberValue;

    // create array of random numbers based on count number selected
    let arrayNumbers = createRandomNumbers(Number(countNumberValue), 100);
    var toAdd1 = document.createDocumentFragment(),
      toAdd2 = document.createDocumentFragment();

    // width for each bar based on the count number
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

    // append creted element to dom box
    for (let i = 0; i < arrayNumbers.length; i++) {
      let newDiv1 = document.createElement("div"),
        newDiv2 = document.createElement("div");
      newDiv1.className = "item";
      newDiv2.className = "item";
      newDiv1.style = `height: ${arrayNumbers[i] * 2}px; width: ${width}px`;
      newDiv2.style = `height: ${arrayNumbers[i] * 2}px; width: ${width}px`;
      newDiv1.innerText = arrayNumbers[i];
      newDiv2.innerText = arrayNumbers[i];
      toAdd1.appendChild(newDiv1);
      toAdd2.appendChild(newDiv2);
    }
    arrDomBox1.appendChild(toAdd1);
    arrDomBox2.appendChild(toAdd2);
  };

  // changing event of slider of count number
  sliderSpeed.onchange = function () {
    let speedValue = sliderSpeed.value;
    detailSpeed.innerText = `${speedValue} x`;
  };

  // orchestrate the animations of selected sort algorithm by fight button

  // variabels to be used
  let sortAnimation1 = new SortAnimation();
  let sortAnimation2 = new SortAnimation();
  sortAnimation1.ownedMethod(sortingAnimations);
  sortAnimation2.ownedMethod(sortingAnimations);

  // event of clicked fight button
  fightButton.onclick = function () {
    setTimeout(function () {
      let DomBox1 = document.querySelector("#box1");
      let DomBox2 = document.querySelector("#box2");
      var speed = document
        .getElementById("speed-detail")
        .getElementsByTagName("span")[0].innerText;
      speed = Number(4 / speed.split(" ")[0]) * 40;
      let algoSelected1 = document
        .getElementById("algo1-select")
        .getElementsByTagName("select")[0].value;
      let algoSelected2 = document
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
