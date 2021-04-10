export var rotateBannerSentences = (function () {
  // index of sentence to be returned
  // get 0 if it's initial condition or at the end of the array
  // get next of the current index if its not initial or at the end of the array
  var _getIndex = function (banner, sentences) {
    let currentSentence = banner.innerHTML;
    let index;
    if (currentSentence === "" || currentSentence === "Let The Fight Begin!") {
      index = 0;
    } else {
      index = sentences.indexOf(currentSentence) + 1;
    }
    return index;
  };

  // clear fade-in and block class and put it back to hero-text
  // to show up the banner text
  var _clearClass = function (
    bannerElement,
    bannerClassWithoutDot,
    sentences,
    duration
  ) {
    setTimeout(function () {
      bannerElement.className = bannerClassWithoutDot;
    }, duration / sentences.length);
  };

  // sequence to toggle and animate the sentences
  var _toggleSentence = function (bannerClass, sentences, duration) {
    setInterval(function () {
      let banner = document.querySelector(bannerClass);
      let bannerClassWithoutDot = bannerClass.substring(1, bannerClass.length);
      let nextSentence = sentences[_getIndex(banner, sentences)];

      // swap new value
      banner.innerHTML = nextSentence;

      // clear class
      _clearClass(banner, bannerClassWithoutDot, sentences, duration);

      // add class to make the sentence fade in
      banner.classList.add("js-block", `js-fade-in-${bannerClassWithoutDot}`);
    }, duration);
  };

  var _init = function (bannerClass, sentences, duration) {
    _toggleSentence(bannerClass, sentences, duration);
  };

  return {
    init: function (bannerClass, sentences, duration) {
      _init(bannerClass, sentences, duration);
    },
  };
})();
