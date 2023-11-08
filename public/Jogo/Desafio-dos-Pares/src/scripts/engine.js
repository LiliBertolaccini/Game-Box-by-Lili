const images = [
  "src/images/baleia.png",
  "src/images/baleia.png",
  "src/images/book.png",
  "src/images/book.png",
  "src/images/carro.png",
  "src/images/carro.png",
  "src/images/cat.png",
  "src/images/cat.png",
  "src/images/espada.png",
  "src/images/espada.png",
  "src/images/hamburguer.png",
  "src/images/hamburguer.png",
  "src/images/maca.png",
  "src/images/maca.png",
  "src/images/robo.png",
  "src/images/robo.png",
];

let openCards = [];

let shuffleImages = images.sort(() => (Math.random() > 0.5 ? 2 : -1));

const gameContainer = document.querySelector(".game");

for (let i = 0; i < images.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  const image = document.createElement("img");
  image.src = images[i];
  box.appendChild(image);
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const image1Src = openCards[0].querySelector("img").src;
  const image2Src = openCards[1].querySelector("img").src;

  if (image1Src === image2Src) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === images.length) {
    alert("Você venceu!");
  }
}
