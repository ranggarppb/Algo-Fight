import { loadHTML } from "./utils.js";

export var getArena = function (taskElement, arenaElement) {
  let arenaBasedOnTask;
  if (taskElement.value === "sorting") {
    arenaBasedOnTask = loadHTML("../sortingArena.html");
  } else if (taskElement.value === "path-finding") {
    arenaBasedOnTask = loadHTML("../pathFindingArena.html");
  }
  arenaElement.innerHTML = arenaBasedOnTask;
};
