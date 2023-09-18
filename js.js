const main = document.getElementById("main");

function makePlease() {
  let newPlease = document.createElement("div");
  newPlease.style.top = Math.floor(Math.random() * 88) + "vh";
  newPlease.style.left = Math.floor(Math.random() * 88) + "vw";
  newPlease.className = "please";
  main?.appendChild(newPlease);
  newPlease.setAttribute("onclick", "remove(this)");
  setTimeout(function () {
    newPlease.remove();
    // clean up neglected begging
  }, 10000);
}

function startCrying() {
  makePlease();
}

let i = 0;
let pleasePleasePlease = setInterval(() => {
  i += 1;
  startCrying();
  if (i > 88) {
    clearInterval(pleasePleasePlease);
  }
}, 800);

function remove(e) {
  var element = e;
  element.className = "please clicked";
  setTimeout(function () {
    element.remove();
  }, 1200);
}

setTimeout(function () {
  let clicked = document.getElementsByClassName("clicked");
  for (let i of clicked) {
    main?.removeChild(i);
  }
}, 5000);
