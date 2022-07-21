const mario = document.querySelector(".mario-running");
const pipe = document.querySelector(".pipe");

window.addEventListener("keydown", () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
});

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 85 && pipePosition > -35 && marioPosition < 100) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./img/super-mario-death.png";
    mario.style.width = "80px";
    mario.style.marginLeft = "25px";
  }
});
