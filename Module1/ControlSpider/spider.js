const spider_width = "70px";
const spider_height = "70px";
const arrow_left = 37;
const arrow_right = 39;
const arrow_up = 38;
const arrow_down = 40;
const a_key = 65;
const w_key = 87;
const d_key = 68;
const s_key = 83;
const step = 10;

function init() {
  let spider = document.querySelector("#spider");
  spider.style.width = spider_width;
  spider.style.height = spider_height;
  spider.style.position = "relative";
  spider.style.top = 0;
  spider.style.left = 0;

  document.addEventListener("keydown", controlSpider);
}

function controlSpider(event) {
  switch (event.keyCode) {
    case arrow_left:
    case a_key: {
      moveToLeft();
      break;
    }
    case arrow_right:
    case d_key: {
      moveToRight();
      break;
    }
    case arrow_up:
    case w_key: {
      moveToUp();
      break;
    }
    case arrow_down:
    case s_key: {
      moveToDown();
      break;
    }
    default: {
      alert("please using arrow keys");
    }
  }
}
function moveToLeft() {
  let spider = document.querySelector("#spider");
  spider.src = "images/left.jpg";
  spider.style.transition = ".2s";
  if (parseInt(spider.style.left) > 0) {
    spider.style.left = parseInt(spider.style.left) - step + "px";
  }
}
function moveToUp() {
  let spider = document.querySelector("#spider");
  spider.src = "images/up.jpg";
  spider.style.transition = ".2s";
  if (parseInt(spider.style.top) > 0) {
    spider.style.top = parseInt(spider.style.top) - step + "px";
  }
}

function moveToRight() {
  let spider = document.querySelector("#spider");
  spider.src = "images/right.jpg";
  spider.style.transition = ".2s";
  if (
    parseInt(spider.style.left) + parseInt(spider_width) + step <
    window.innerWidth
  ) {
    spider.style.left = parseInt(spider.style.left) + step + "px";
  }
}
function moveToDown() {
  let spider = document.querySelector("#spider");
  spider.src = "images/down.jpg";
  spider.style.transition = ".2s";
  if (
    parseInt(spider.style.top) + parseInt(spider_height) + step <
    window.innerHeight
  ) {
    spider.style.top = parseInt(spider.style.top) + step + "px";
  }
}

init();
