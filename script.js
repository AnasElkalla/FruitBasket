const basket = document.querySelector(".basket");
const container = document.querySelector(".container");
const slider = document.querySelector("input");
const trials = document.querySelector(".opportunity");
const image = document.querySelector(".basket img");
const startGame = document.querySelector(".basket .btn");
container.style.cursor = "pointer";
let start = 0;
let lives = 10;
let gameStarted = false;
trials.textContent = 10;
basket.style.zIndex = "5";
let basketPosition;
startGame.addEventListener("click", function () {
  image.style.visibility = "visible";
  startGame.style.display = "none";
  trials.textContent = 10;
  lives = 10;
  function clicker() {
    let click = new audio(click.mp3);
    click.play();
  }
  clicker();
  container.addEventListener(
    "mousemove",
    function (e) {
      container.style.cursor = "none";
    },
    10
  );
  gameStarted = true;
});
function gameOver() {
  basket.innerHTML = "<h1>GAME OVER</h1>";
  let gameOver = new audio(draw.mp3);
  gameOver.play();
  image.style.visibility = "hidden";
  trials.textContent = 0;
  count = count;
}

slider.oninput = function () {
  start = this.value;
  basket.style.left = `${start}px`;

  let basketmeter = function () {
    basketPosition = basket.getBoundingClientRect();
  };
  setInterval(basketmeter, 5);
};
document.addEventListener(
  "keydown",
  function (e) {
    if (e.key === "ArrowLeft") {
      start += 10;
      basket.style.right = `${start}px`;
      if (start > 450) {
        basket.style.right = "0px";
        start = 0;
      }
    }
    if (e.key === "ArrowRight") {
      start -= 10;
      basket.style.right = `${start}px`;
    }
    if (start < 0) {
      basket.style.right = "450px";
      start = 450;
    }
    let basketmeter = function () {
      basketPosition = basket.getBoundingClientRect();
    };
    setInterval(basketmeter, 5);
  },
  setTimeout(100)
);

container.addEventListener(
  "mousemove",
  function (e) {
    if (gameStarted) {
      if (e.movementX < 0) {
        start += 10;
        basket.style.right = `${start}px`;
        if (start > 450) {
          basket.style.right = "0px";
          start = 0;
        }
      } else {
        start -= 10;
        basket.style.right = `${start}px`;

        if (start < 0) {
          basket.style.right = "450px";
          start = 450;
        }
      }
      let basketmeter = function () {
        basketPosition = basket.getBoundingClientRect();
      };
      setInterval(basketmeter, 5);
    }
  },
  setInterval(1000)
);
let fruitStart = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];
let count = 0;
let opportunity = 10;
let result = document.querySelector(".result");
let fruits = [
  "apple",
  "orange",
  "bananas",
  "grape",
  "pineapple",
  "watermelon",
  "apricot",
];
let smashed = [1, 2, 3, 4];
let lostfruit = [];
let good;

const game = function () {
  let fruitPosition;
  let roll = Math.floor(Math.random() * 25);
  let fruitPositioning = roll * fruitStart[roll];
  let fruit = document.createElement("div");
  let fruitRoll = Math.floor(Math.random() * fruits.length);
  let fruitname = fruits[fruitRoll];
  console.log(fruitname);
  fruit.style.backgroundImage = `url('${fruitname}.png')`;
  fruit.classList.add("fruit");
  container.appendChild(fruit);
  if (fruitPositioning) {
    fruit.style.left = `${fruitPositioning}px`;
    let checkPosition = function () {
      if ((fruit.style.display = "inline-block")) {
        fruitPosition = fruit.getBoundingClientRect();

        if (
          Math.floor(fruitPosition.bottom) -
            Math.floor(basketPosition.bottom) >=
            -20 &&
          Math.floor(fruitPosition.bottom) -
            Math.floor(basketPosition.bottom) <=
            20
        ) {
          good = true;
          if (
            Math.floor(fruitPosition.left) - Math.floor(basketPosition.left) >=
              -30 &&
            Math.floor(fruitPosition.left) - Math.floor(basketPosition.left) <=
              30
          ) {
            console.log("good");
            let grapped = new Audio("basket.mp3");
            grapped.play();
            fruit.style.display = "none";
            count++;
            result.textContent = count;
          }
        } else if (
          Math.floor(fruitPosition.bottom) > 580 &&
          Math.floor(fruitPosition.bottom) < 590
        ) {
          good = false;
          switch (fruitname) {
            case "apple":
              fruit.style.backgroundImage = `url('${smashed[1]}.png')`;

              break;
            case "orange":
              fruit.style.backgroundImage = `url('${smashed[0]}.png')`;

              break;
            case "apricot":
              fruit.style.backgroundImage = `url('${smashed[0]}.png')`;

              break;
            case "pineapple":
              fruit.style.backgroundImage = `url('${smashed[3]}.png')`;

              break;
            case "watermelon":
              fruit.style.backgroundImage = `url('${smashed[1]}.png')`;

              break;
            case "bananas":
              fruit.style.backgroundImage = `url('${smashed[3]}.png')`;

              break;
            case "grape":
              fruit.style.backgroundImage = `url('${smashed[2]}.png')`;

              break;
          }
          console.log("false");
          lives = trials.textContent - 1;
          return false;
        }
      }
    };
    trials.textContent = lives;
    setInterval(checkPosition, 5);
    if (lives === 0) {
      gameOver();
    }
  }
};
setInterval(game, 3000);
