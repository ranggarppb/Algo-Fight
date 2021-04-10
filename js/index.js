import { rotateBannerSentences } from "./bannerRotator.js"

// config variables

// banner rotation variables
let bannerClass = ".hero-text";
let bannerSentences = [
  "ALGO-FIGHT!",
  "Select the Task",
  "Pick Your Fighter",
  "Let The Fight Begin!",
];
let bannerRotationDuration = 3000

// algorithm selection pane variables
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

rotateBannerSentences.init(bannerClass, bannerSentences, bannerRotationDuration)
