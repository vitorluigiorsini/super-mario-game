// Capturar código da tecla pressionada
// ***********************************************
// document.addEventListener("keydown", () => {
//   const keyCode = event.keyCode;
//   console.log(keyCode);
// });
// ***********************************************

const mario = document.querySelector(".mario-running");
const pipe = document.querySelector(".pipe");

document.addEventListener("click", () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
});

document.addEventListener("keydown", () => {
  if (event.keyCode === 38) {
    mario.classList.add("jump");
    setTimeout(() => {
      mario.classList.remove("jump");
    }, 500);
  } else if (event.keyCode === 27) {
    location.reload();
  }
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
