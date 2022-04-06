const title = document.querySelector(".title");
const startBtn = document.querySelector(".start");
const difficulty = document.querySelector(".difficulty");
const easyBtn = document.querySelector("#easy");
const mediumBtn = document.querySelector("#medium");
const hardBtn = document.querySelector("#hard");

import buildUI from "./buildUI.js";

startBtn.addEventListener("click", () => {
  title.style.visibility = "hidden";
  startBtn.style.transform = "rotateY(90deg)";

  startBtn.addEventListener("transitionend", () => {
    difficulty.style.transform = "rotateY(0deg)";
    startBtn.style.display = "none";
  });
});

let diff = "";
easyBtn.addEventListener("click", (e) => {
  diff = "easy";

  buildUI(diff);

  difficulty.style.transform = "rotateY(90deg)";
  difficulty.addEventListener("transitionend", () => {
    hideDifficulty();
  });
});

mediumBtn.addEventListener("click", (e) => {
  diff = "medium";
  buildUI(diff);

  difficulty.style.transform = "rotateY(90deg)";
  difficulty.addEventListener("transitionend", () => {
    hideDifficulty();
  });
});

hardBtn.addEventListener("click", (e) => {
  diff = "hard";
  buildUI(diff);

  difficulty.style.transform = "rotateY(90deg)";
  difficulty.addEventListener("transitionend", () => {
    hideDifficulty();
  });
});

const hideDifficulty = () => {
  difficulty.style.display = "none";
};
