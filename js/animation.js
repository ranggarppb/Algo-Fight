export function SortAnimation() {
  this.timer = 0;
  this.arrDomBox = {};
  this.animationArr = [];
  this.sortMethod = {};
  this.currentMethod = "";
}

SortAnimation.prototype = {
  getData: function (arrDomBox, method) {
    this.arrDomBox = arrDomBox;
    this.currentMethod = method;
    this.animationArr = this.sortMethod[method].method(arrDomBox.children);
  },
  ownedMethod: function (methodObj) {
    this.sortMethod = methodObj;
  },
  startAnimation: function () {
    var that = this;
    return function () {
      if (that.animationArr.length === 0) {
        for (let i = 0; i < that.arrDomBox.children.length; i++) {
          that.arrDomBox.children[i].classList.remove(
            "item--target",
            "item--current",
            "item--selected",
            "item--checked"
          );
        }
        clearTimeout(that.timer);
      } else if (that.animationArr[0].length > 0) {
        that.sortMethod[that.currentMethod].animationMethod(
          that.arrDomBox,
          that.animationArr[0][0]
        );
        that.animationArr[0].shift();
      } else {
        for (let i = 0; i < that.arrDomBox.children.length; i++) {
          that.arrDomBox.children[i].classList.remove(
            "item--target",
            "item--current",
            "item--selected",
            "item--checked"
          );
        }
        that.animationArr.shift();
      }
    };
  },
};