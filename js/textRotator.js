var rotateSentences = (function () {
  let words = [
    "ALGO-FIGHT!",
    "Select the Task",
    "Pick Your Fighter",
    "Let The Fight Begin!",
  ];
  let duration = 4000
  // var _getIndex = function (max, min) {
  var _getIndex = function () {
    let el = document.querySelector(".hero-text")
    let currentWord = el.innerHTML
    let index;
    if (currentWord === "" || currentWord === "Let The Fight Begin!") {
      index = 0;
    } else {
      index = words.indexOf(currentWord) + 1;
    }

    return index;
  };

  var _clearClass = function (element) {
    setTimeout(function () {
      element.className = "hero-text";
    }, duration / 4);
  };

  var _toggleWord = function () {
    setInterval(function () {
      //Stores value of previous word
      // let prevWord = currentWord;

      //Generate new current word
      // currentWord = words[_getIndex(words.length - 1, 0)];
      let nextWord = words[_getIndex()];

      //Generate new word if prev matches current
      // if (prevWord === currentWord) {
      //   currentWord = words[_getIndex(words.length - 1, 0)];
      // }

      //Swap new value
      document.querySelector(".hero-text").innerHTML = nextWord;

      //Clear class styles, to bring back initial class
      _clearClass(document.querySelector(".hero-text"));

      //Fade in word
      document.querySelector(".hero-text").classList.add("js-block", "js-fade-in-hero-text");
    }, duration);
  };

  var _init = function () {
    _toggleWord();
  };

  //Public API
  return {
    init: function () {
      _init();
    },
  };
})();

rotateSentences.init();
