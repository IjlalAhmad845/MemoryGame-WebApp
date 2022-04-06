const cardList = [];
const score = document.querySelector("#Score");
const cardClick = (card, iconsIDs, icons) => {
  card.classList.add("item-clicked");

  card.style.backgroundColor = "#525E75";

  if (!cardList.includes(card)) {
    const icon = document.createElement("i");
    icon.className = `${
      icons[iconsIDs.indexOf(card.classList[1].split("-")[1])]
    }`;

    icon.style.transform = "rotateY(180deg)";
    card.appendChild(icon);

    cardList.push(card);
  }
};

const clickCheck = (scoreBoard) => {
  if (cardList.length >= 2) {
    const card1 = cardList[0];
    const card2 = cardList[1];

    setTimeout(() => {
      if (card1.classList[1] == card2.classList[1]) {
        card1.style.visibility = "hidden";
        card2.style.visibility = "hidden";

        card1.classList.add("hidden");
        card2.classList.add("hidden");

        score.innerHTML = parseInt(score.innerHTML) + 100;

        isFinished(scoreBoard, score);
      } else {
        card1.classList.remove("item-clicked");
        card1.style.backgroundColor = "";
        card2.classList.remove("item-clicked");
        card2.style.backgroundColor = "";

        while (card1.firstChild) card1.removeChild(card1.firstChild);
        while (card2.firstChild) card2.removeChild(card2.firstChild);

        if (score.innerHTML > 0)
          score.innerHTML = parseInt(score.innerHTML) - 20;
      }
    }, 300);

    cardList.pop(card1);
    cardList.pop(card2);
  }
};

const isFinished = (scoreBoard, score) => {
  const cards = document.querySelectorAll(".item");
  let count = 0;
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains("hidden")) {
      count++;
    }
  }
  if (count === cards.length) {
    scoreBoard.style.visibility = "hidden";
    reset(score);
  }
};

const reset = (score) => {
  const finish = document.createElement("div");
  setTimeout(() => {
    finish.classList.add("finish");
    finish.innerHTML = `You Win! <br/> Score: ${score.innerHTML} <br/><i class="fa-solid fa-arrow-rotate-right"></i> Restart`;
  }, 100);
  document.body.appendChild(finish);

  finish.addEventListener("click", () => {
    location.reload();
  });
};

export { cardClick, clickCheck };
