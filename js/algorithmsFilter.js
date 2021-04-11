import { capitalize } from "./utils.js";

export var filterAlgoChoice = function (taskElement, algo1Element, algo2Element) {
  let allAlgos1 = [],
    allAlgos2 = [];
  let suffix = taskElement.value === "sorting" ? "Sort" : "Search";

  for (let i = 0; i < algo1Element.options.length; i++) {
    allAlgos1.push(algo1Element.options[i].value);
    allAlgos2.push(algo2Element.options[i].value);
  }
  algo1Element.onchange = function () {
    let initialAlgos2 = "";
    for (let i = 0; i < allAlgos2.length; i++) {
      if (i === 0) {
        initialAlgos2 += `<option value=${allAlgos2[i]} selected disabled hidden>Algo Fighter 2</option>`;
      } else {
        initialAlgos2 += `<option value=${allAlgos2[i]}>${capitalize(
          allAlgos2[i]
        )} ${suffix}</option>`;
      }
    }
    if (algo2Element.value === "algo") {
      algo2Element.innerHTML = initialAlgos2;
      let selectedValue = algo1Element.value;
      let idxSelectedValue = allAlgos1.indexOf(selectedValue);
      algo2Element.options[idxSelectedValue] = null;
    } else {
      let selectedValueAlgo2 = algo2Element.value;
      let resultAlgo2 = "";
      for (let i = 0; i < allAlgos2.length; i++) {
        if (allAlgos2[i] === selectedValueAlgo2) {
          resultAlgo2 += `<option value=${allAlgos2[i]} selected >${capitalize(
            allAlgos2[i]
          )} ${suffix}</option>`;
        } else if (
          allAlgos2[i] !== "algo" &&
          allAlgos2[i] !== algo1Element.value
        ) {
          resultAlgo2 += `<option value=${allAlgos2[i]}>${capitalize(
            allAlgos2[i]
          )} ${suffix}</option>`;
        }
      }
      algo2Element.innerHTML = resultAlgo2;
    }
  };
  algo2Element.onchange = function () {
    let initialAlgos1 = "";
    for (let i = 0; i < allAlgos1.length; i++) {
      if (i === 0) {
        initialAlgos1 += `<option value=${allAlgos1[i]} selected disabled hidden>Algo Fighter 1</option>`;
      } else {
        initialAlgos1 += `<option value=${allAlgos1[i]}>${capitalize(
          allAlgos1[i]
        )} ${suffix}</option>`;
      }
    }
    if (algo1Element.value === "Algo Fighter 1") {
      algo1Element.innerHTML = initialAlgos1;
      let selectedValue = algo2Element.value;
      let idxSelectedValue = allAlgos1.indexOf(selectedValue);
      algo1Element.options[idxSelectedValue] = null;
    } else {
      let selectedValueAlgo1 = algo1Element.value;
      let resultAlgo1 = "";
      for (let i = 0; i < allAlgos1.length; i++) {
        if (allAlgos1[i] === selectedValueAlgo1) {
          resultAlgo1 += `<option value=${allAlgos1[i]} selected >${capitalize(
            allAlgos1[i]
          )} ${suffix}</option>`;
        } else if (
          allAlgos1[i] !== "algo" &&
          allAlgos1[i] !== algo2Element.value
        ) {
          resultAlgo1 += `<option value=${allAlgos1[i]}>${capitalize(
            allAlgos1[i]
          )} ${suffix}</option>`;
        }
      }
      algo1Element.innerHTML = resultAlgo1;
    }
  };
};
