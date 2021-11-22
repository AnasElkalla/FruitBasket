const basket = document.querySelector(".basket");
const container = document.querySelector(".container");
let start = 0;

basket.style.zIndex = "5";
let basketPosition;

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
      console.log(basketPosition.item(0).left);
    };
    setTimeout(basketmeter, 5);
  },
  setTimeout(100)
);
document.addEventListener(
  "keyup",
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
      console.log(basketPosition.item(0).left);
    };
    setTimeout(basketmeter, 5);
  },
  10
);

let fruitStart = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let count = 0;
let opportunity = 5;
let result = document.querySelector(".result");

const game = function () {
  let roll = Math.floor(Math.random() * 25);
  let fruitPositioning = roll * fruitStart[roll];
  let fruit = document.createElement("div");
  if (fruitPositioning) {
    fruit.classList.add("fruit");
    fruit.style.left = `${fruitPositioning}px`;
    container.appendChild(fruit);
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
          } else {
            opportunity--;
          }
        }
      }
    };

    setInterval(checkPosition, 100);
  }
};

setInterval(game, 3000);
