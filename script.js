const basket = document.querySelector(".basket");
const container = document.querySelector(".container");
const slider = document.querySelector("input");

let start = 0;

basket.style.zIndex = "5";
let basketPosition;
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
    if (e.movementX < 0) {
      start += 5;
      basket.style.right = `${start}px`;
      if (start > 450) {
        basket.style.right = "0px";
        start = 0;
      }
    } else {
      start -= 5;
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
  },
  setInterval(1000)
);
let fruitStart = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];
let count = 0;
let opportunity = 5;
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
const game = function () {
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
        let fruitPosition = fruit.getBoundingClientRect();
        if (
          Math.floor(fruitPosition.bottom) -
            Math.floor(basketPosition.bottom) >=
            -10 &&
          Math.floor(fruitPosition.bottom) -
            Math.floor(basketPosition.bottom) <=
            10
        ) {
          if (
            Math.floor(fruitPosition.left) - Math.floor(basketPosition.left) >=
              -20 &&
            Math.floor(fruitPosition.left) - Math.floor(basketPosition.left) <=
              30
          ) {
            console.log("good");
            fruit.style.display = "none";
            count++;
            result.textContent = count;
          }
        } else if (Math.floor(fruitPosition.bottom) === 0) {
          console.log("lost fruit");
          fruit.style.display = "none";
        } else {
          opportunity--;
          return basketPosition.bottom;
        }
      }
    };

    setInterval(checkPosition, 100);
  }
};

setInterval(game, 3000);
container.addEventListener(
  "mousemove",
  function (e) {
    container.style.cursor = "none";
  },
  10
);
