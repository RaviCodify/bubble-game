const pbtm = document.querySelector("#pbtm");
const finalscore = document.querySelector("#finalscore");
const scrbox = document.querySelector(".scrbox");
const tmrbox = document.querySelector(".tmrbox");
const hitbox = document.querySelector(".hitbox");

let score = 0;
let time = 60;
let totalBubbles = 60;

function generateBubbles() {
  pbtm.innerHTML = "";
  for (var i = 1; i <= totalBubbles; i++) {
    let rn = Math.floor(Math.random() * 10);
    pbtm.innerHTML += `<div class = bubble>${rn}</div>`;
  }
  hitbox.innerHTML = Math.floor(Math.random() * 10);
}

function scoreLogic() {
  const bubbles = document.querySelectorAll(".bubble");
  bubbles.forEach((bubble) => {
    bubble.addEventListener("click", function () {
      if (bubble.innerHTML === hitbox.innerHTML) {
        score += 10;
        scrbox.innerHTML = score;
      } else {
        score -= 10;
        scrbox.innerHTML = score;
      }
      generateBubbles();
      scoreLogic();
    });
  });
}
function endGame() {
  pbtm.innerHTML = `<div id = finalscore>You scored: ${scrbox.innerHTML}</div>`;
  pbtm.style.backgroundColor = "black"
  pbtm.style.backgroundImage =
    "url('https://media1.giphy.com/media/YOcTikSFwS3Go/giphy.gif?cid=ecf05e4730xougfk32az245l3w9m8xvgdyhkm4mr5xzm5jps&ep=v1_gifs_search&rid=giphy.gif&ct=g')";
    setTimeout(() => {location.reload()}, 5000);
}

function timer() {
  const timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      tmrbox.innerHTML = time;
    } else {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

generateBubbles();
scoreLogic();
timer();
