import { capitalize } from "./utils.js";

export var getAlgoChoices = function (
  taskClass,
  algo1OptionsClass,
  algo2OptionsClass,
  sortingAlgos,
  pathFindingAlgos
) {
  let taskElement = document
    .getElementById(taskClass)
    .getElementsByTagName("select")[0];
  let algo1Element = document
    .getElementById(algo1OptionsClass)
    .getElementsByTagName("select")[0];
  let algo2Element = document
    .getElementById(algo2OptionsClass)
    .getElementsByTagName("select")[0];

  let taskElementValue = taskElement.value;
  let algorithms1 = "";
  let algorithms2 = "";
  if (taskElementValue === "sorting") {
    for (const algo of sortingAlgos) {
      if (algo === "algo") {
        algorithms1 += templateGetter(algo, "default", "1");
        algorithms2 += templateGetter(algo, "default", "2");
      } else {
        algorithms1 += templateGetter(algo, "sorting", "");
        algorithms2 += templateGetter(algo, "sorting", "");
      }
    }
  } else if (taskElementValue === "path-finding") {
    for (const algo of pathFindingAlgos) {
      if (algo === "algo") {
        algorithms1 += templateGetter(algo, "default", "1");
        algorithms2 += templateGetter(algo, "default", "2");
      } else {
        algorithms1 += templateGetter(algo, "path-finding", "");
        algorithms2 += templateGetter(algo, "path-finding", "");
      }
    }
  }
  algo1Element.innerHTML = algorithms1;
  algo2Element.innerHTML = algorithms2;
};

var templateGetter = function (algo, mode, elementSelected) {
  let result;
  switch (mode) {
    case "default":
      result = `<option value=${algo} selected disabled hidden>Algo Fighter ${elementSelected}</option> \n`;
      break;
    case "sorting":
      result = `<option value=${algo}>${capitalize(algo)} Sort</option> \n`;
      break;
    case "path-finding":
      result = `<option value=${algo}>${capitalize(algo)} Search</option> \n`;
  }
  return result;
};
