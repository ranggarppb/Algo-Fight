export const swapArrayElement = (arr, idx1, idx2) => {
  let tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
};
export const createRandomNumbers = (length, max) =>
  Array(length)
    .fill()
    .map(() => Math.round(Math.random() * max));

export const capitalize = (s) => {
  return s[0].toUpperCase() + s.slice(1);
};

export const loadHTML = (href) => {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", href, false);
  xmlhttp.send();
  return xmlhttp.responseText;
};

export const loadScripts = (scripts, complete) => {
  var loadScript = function (src) {
    var xmlhttp, next;
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        return;
      }
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        eval(xmlhttp.responseText);
        next = scripts.shift();
        if (next) {
          loadScript(next);
        } else if (typeof complete == "function") {
          complete();
        }
      }
    };
    xmlhttp.open("GET", src, true);
    xmlhttp.send();
  };

  loadScript(scripts.shift());
};
