import { rotateBannerSentences } from "./bannerRotator.js";
import { getAlgoChoices } from "./algorithmsGetter.js";
import { filterAlgoChoice } from "./algorithmsFilter.js";
import { getArena } from "./arenaGetter.js";
import { orchestrateSorting } from "./sortingOrchestrator.js";
import {
  quickSortAnimateDom,
  quickSortDom,
} from "./sorting-algorithm/quickSort.js";

// config variables

// banner rotation variables
let bannerClass = ".hero-text";
let bannerSentences = [
  "ALGO-FIGHT!",
  "Select the Task",
  "Pick Your Fighter",
  "Let The Fight Begin!",
];
let bannerRotationDuration = 3000;

// algorithm selection pane variables
let taskClass = "task-select";
let algo1OptionsClass = "algo1-select";
let algo2OptionsClass = "algo2-select";
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

// arena configuration variables
let arenaClass = "arena";

// animation method variables
let sortingAnimations = {
  quick: {
    method: quickSortDom,
    animationMethod: quickSortAnimateDom,
  },
  bubble: {
    method: quickSortDom,
    animationMethod: quickSortAnimateDom,
  },
};

// rotating the banner
rotateBannerSentences.init(
  bannerClass,
  bannerSentences,
  bannerRotationDuration
);

// get the algorithms based on the task selected and apply filtering algorithm selection
let taskElement = document
  .getElementById(taskClass)
  .getElementsByTagName("select")[0];
let algo1Element = document
  .getElementById(algo1OptionsClass)
  .getElementsByTagName("select")[0];
let algo2Element = document
  .getElementById(algo2OptionsClass)
  .getElementsByTagName("select")[0];
let arena = document.getElementById(arenaClass);

taskElement.onchange = function () {
  // get options in algorithm selection pane based on the task
  getAlgoChoices(
    taskClass,
    algo1OptionsClass,
    algo2OptionsClass,
    sortingAlgos,
    pathFindingAlgos
  );
  // apply filtering of the algorithm choices
  setTimeout(function () {
    filterAlgoChoice(taskElement, algo1Element, algo2Element);
    getArena(taskElement, arena);
    if (taskElement.value === "sorting") {
      orchestrateSorting(sortingAnimations);
    }
  }, 0);
};
