let next = document.querySelector(".next");
const progress = document.getElementById("progress");
let prev = document.querySelector(".prev");
let num = document.querySelectorAll(".box");
let c = 1;
next.onclick = () => {
  c++;
  if (c > num.length ) {
    c = num.length;
  }
  update();
}
prev.onclick = () => {
  c--;
  if (c <1) {
    c = 1;
  }
  update();
};

function update() {
  num.forEach((circle, idx) => {
    if (idx < c) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (num.length - 1)) * 100 + "%";

  if (c === 1) {
    prev.disabled = true;
  } else if (c === num.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}