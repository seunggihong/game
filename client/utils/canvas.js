const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = canvas.clientWidth;
let y = canvas.clientHeight;

const rectWidth = 10;
const rectHeight = 5;

let rectX = 0;
let rectY = 0;

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == 37 || e.key == "ArrowRight") {
    rightPressed = true;
    console.log("r");
  } else if (e.key == 39 || e.key == "ArrowLeft") {
    leftPressed = true;
    console.log("l");
  } else if (e.key == 38 || e.key == "ArrowUp") {
    upPressed = true;
    console.log("u");
  } else if (e.key == 40 || e.key == "ArrowDown") {
    downPressed = true;
    console.log("d");
  }
}

function keyUpHandler(e) {
  if (e.key == 37 || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == 39 || e.key == "ArrowLeft") {
    leftPressed = false;
  } else if (e.key == 38 || e.key == "ArrowUp") {
    upPressed = false;
  } else if (e.key == 40 || e.key == "ArrowDown") {
    downPressed = false;
  }
}

function drawRect() {
  ctx.fillStyle = "green";
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawRect();

  if (rightPressed && rectX < canvas.width - rectWidth) {
    rectX += 5;
  } else if (leftPressed && rectX > 0) {
    rectX -= 5;
  } else if (downPressed && rectY < canvas.height - rectHeight) {
    rectY += 5;
  } else if (upPressed && rectY > 0) {
    rectY -= 5;
  }
}

setInterval(draw, 1000 / 15);
