import { capitalize } from "./utils.js";
import { orchestrateSorting } from "./sortingArenaOrchestration.js";

let taskSelected = document
  .getElementById("task-select")
  .getElementsByTagName("select")[0];
let algo1Options = document
  .getElementById("algo1-select")
  .getElementsByTagName("select")[0];
let algo2Options = document
  .getElementById("algo2-select")
  .getElementsByTagName("select")[0];
let sortingAlgos = [
  "algo",
  "quick",
  "selection",
  "bubble",
  "merge",
  "insertion",
  "heap",
  "radix",
  "shell",
  "gnome",
  "comb",
];
let pathFindingAlgos = [
  "algo",
  "dfs",
  "recursive",
  "iterative",
  "dijkstra",
  "greedy",
  "a*",
];
taskSelected.onchange = function () {
  let algorithms1 = "";
  let algorithms2 = "";
  if (taskSelected.value === "sorting") {
    for (const algo of sortingAlgos) {
      if (algo === "algo") {
        algorithms1 += `<option value=${algo} selected disabled hidden>Algo Fighter 1</option> \n`;
        algorithms2 += `<option value=${algo} selected disabled hidden>Algo Fighter 2</option> \n`;
      } else {
        algorithms1 += `<option value=${algo}>${capitalize(
          algo
        )} Sort</option> \n`;
        algorithms2 += `<option value=${algo}>${capitalize(
          algo
        )} Sort</option> \n`;
      }
    }
    algo1Options.innerHTML = algorithms1;
    algo2Options.innerHTML = algorithms2;
  } else if (taskSelected.value === "path-finding") {
    for (const algo of pathFindingAlgos) {
      if (algo === "algo") {
        algorithms1 += `<option value=${algo} selected disabled hidden>Algo Fighter 1</option> \n`;
        algorithms2 += `<option value=${algo} selected disabled hidden>Algo Fighter 2</option> \n`;
      } else {
        algorithms1 += `<option value=${algo}>${capitalize(
          algo
        )} Search</option> \n`;
        algorithms2 += `<option value=${algo}>${capitalize(
          algo
        )} Search</option> \n`;
      }
    }
    algo1Options.innerHTML = algorithms1;
    algo2Options.innerHTML = algorithms2;
  }
  let algos1 = [];
  for (let i = 0; i < algo1Options.options.length; i++) {
    algos1.push(algo1Options.options[i].value);
  }
  let algos2 = [];
  for (let i = 0; i < algo2Options.options.length; i++) {
    algos2.push(algo2Options.options[i].value);
  }
  let suffix = taskSelected.value === "sorting" ? "Sort" : "Search";
  algo1Options.onchange = function () {
    let initialAlgos2 = "";
    for (let i = 0; i < algos2.length; i++) {
      if (i === 0) {
        initialAlgos2 += `<option value=${algos2[i]} selected disabled hidden>Algo Fighter 2</option>`;
      } else {
        initialAlgos2 += `<option value=${algos2[i]}>${capitalize(
          algos2[i]
        )} ${suffix}</option>`;
      }
    }
    if (algo2Options.value === "algo") {
      algo2Options.innerHTML = initialAlgos2;
      let selectedValue = algo1Options.value;
      let idxSelectedValue = algos1.indexOf(selectedValue);
      algo2Options.options[idxSelectedValue] = null;
    } else {
      let selectedValueAlgo2 = algo2Options.value;
      let resultAlgo2 = "";
      for (let i = 0; i < algos2.length; i++) {
        if (algos2[i] === selectedValueAlgo2) {
          resultAlgo2 += `<option value=${algos2[i]} selected >${capitalize(
            algos2[i]
          )} ${suffix}</option>`;
        } else if (algos2[i] !== "algo" && algos2[i] !== algo1Options.value) {
          resultAlgo2 += `<option value=${algos2[i]}>${capitalize(
            algos2[i]
          )} ${suffix}</option>`;
        }
      }
      algo2Options.innerHTML = resultAlgo2;
    }
  };
  algo2Options.onchange = function () {
    let initialAlgos1 = "";
    for (let i = 0; i < algos1.length; i++) {
      if (i === 0) {
        initialAlgos1 += `<option value=${algos1[i]} selected disabled hidden>Algo Fighter 1</option>`;
      } else {
        initialAlgos1 += `<option value=${algos1[i]}>${capitalize(
          algos1[i]
        )} ${suffix}</option>`;
      }
    }
    if (algo1Options.value === "Algo Fighter 1") {
      algo1Options.innerHTML = initialAlgos1;
      let selectedValue = algo2Options.value;
      let idxSelectedValue = algos1.indexOf(selectedValue);
      algo1Options.options[idxSelectedValue] = null;
    } else {
      let selectedValueAlgo1 = algo1Options.value;
      let resultAlgo1 = "";
      for (let i = 0; i < algos1.length; i++) {
        if (algos1[i] === selectedValueAlgo1) {
          resultAlgo1 += `<option value=${algos1[i]} selected >${capitalize(
            algos1[i]
          )} ${suffix}</option>`;
        } else if (algos1[i] !== "algo" && algos1[i] !== algo2Options.value) {
          resultAlgo1 += `<option value=${algos1[i]}>${capitalize(
            algos1[i]
          )} ${suffix}</option>`;
        }
      }
      algo1Options.innerHTML = resultAlgo1;
    }
  };
  if (taskSelected.value === "sorting") {
    let arena = document.getElementById("arena");
    let arenaSorting = `
      <div class="arena-sorting">
      <div class="slider" id="slider-count-number">
        <p class="slider-detail" id="count-number-detail">
          Numbers: <span></span>
        </p>
        <input
          class="input-range"
          type="range"
          step="1"
          value="50"
          min="10"
          max="85"
        />
      </div>
      <div id="box1"></div>
      <div id="box2"></div>
      <div class="slider" id="slider-speed">
        <p class="slider-detail" id="speed-detail">Speed: <span></span></p>
        <input
          class="input-range"
          id="input-range-speed"
          type="range"
          step="0.25"
          value="2"
          min="0.25"
          max="4"
        />
      </div>
    </div>
      `;
    arena.innerHTML = arenaSorting;
    orchestrateSorting();
  }
};
