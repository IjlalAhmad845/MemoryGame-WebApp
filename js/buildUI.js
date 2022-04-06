import generateIcons from "./util.js";
import { cardClick, clickCheck } from "./controller.js";
const buildUI = (diff) => {
  const board = document.querySelector(".board");
  const scoreBoard = document.querySelector(".score-board");

  scoreBoard.style.visibility = "visible";

  let rows;
  let cols;
  let iconsCount;
  let lineHeight;

  if (diff === "easy") {
    rows = 3;
    cols = 4;
    iconsCount = 6;
    lineHeight = "170px";
  } else if (diff === "medium") {
    rows = 4;
    cols = 5;
    iconsCount = 10;
    lineHeight = "120px";
  } else if (diff === "hard") {
    rows = 6;
    cols = 6;
    iconsCount = 18;
    lineHeight = "80px";
  }

  const { iconsIDs, icons } = generateIcons(iconsCount);

  board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  for (let i = 0; i < rows * cols; i++) {
    const card = document.createElement("div");
    card.className = "item";
    card.style.lineHeight = lineHeight;

    card.style.animation = `cards-animation ease .3s`;
    card.style.animationIterationCount = "1";

    card.classList.add(`item-${iconsIDs[i]}`);

    card.addEventListener("click", () => cardClick(card, iconsIDs, icons));
    card.addEventListener("transitionend", () => clickCheck(scoreBoard));

    board.appendChild(card);
  }
};

export default buildUI;
