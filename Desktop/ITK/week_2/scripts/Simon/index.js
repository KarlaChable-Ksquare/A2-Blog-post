console.log("Live reloading");
//Buttons
const purple = document.getElementById("purple");
const greenyellow = document.getElementById("greenyellow");
const palevioletred = document.getElementById("palevioletred");
const yellow = document.getElementById("yellow");
const startBtn = document.getElementById("startBtn");

//Colection of colors
const colorsChoise = {
  purple,
  greenyellow,
  palevioletred,
  yellow,
};

//Secuencia
let sequence = [];
let levels = 0;
let sublevels = 0;
const stages = 20;
const numberPGPY = 4;

//timers
const waiting = 600;
const mediumWait = 1200;
const hideColor = 350;

//Inicio del juego.
const playGame = () => {
  //Secuencia para los botones
  sequence = new Array(stages);
  //sequence = sequence.fill(0);
  sequence = sequence
    .fill(0)
    .map((pattern) => Math.floor(Math.random() * numberPGPY));
  levels = 0;
  sublevels = 0;

  //Escondemos el boton de inicio.
  startBtn.classList.add("hideIt");

  //Se iluminan el patron random.
  lightUpPattern();
};

//final de juego
const endGame = () => {
  startBtn.classList.remove("hideIt");
  levels = -1;
};

//Secuencia de iluminacion actual
const lightUpPattern = () => {
  for (let index = 0; index <= levels; index++) {
    const color = numberToColor(sequence[index]);
    setTimeout(() => glowUpPattern(color), waiting * index);
  }
};

//iluminar color especificado
const glowUpPattern = (color) => {
  colorsChoise[color].classList.add("glowUp");
  setTimeout(() => turnOffPattern(color), hideColor);
};

//apagar boton especificado
const turnOffPattern = (color) => {
  colorsChoise[color].classList.remove("glowUp");
};

//recuperar el color utilizando la posicion indicada
const numberToColor = (index) => {
  if (index === 0) return "purple";
  if (index === 1) return "greenyellow";
  if (index === 2) return "paleviolet";
  if (index === 3) return "yellow";

  /*switch (index) {
    case 0:
      return "purple";
    case 1:
      return "greenyellow";
    case 2:
      return "palevioletred";
    case 3:
      return "yellow";
  }*/
};

//funcion de elegir le color
const userColorClick = (onClick) => {
  //juego inactivo, regresamos
  if (levels === -1) return;

  // recupera el nombre del color activo en base al data-color (html)
  const chosenColor = onClick.target.dataset.color;
  // averiguamos su posición segun el switch case.
  const caseColor = colorToNumber(chosenColor);
  // mostramos el color en pantalla para confirmar la lectura
  glowUpPattern(chosenColor);

  //Si el boton presionado corresponde al de la sequence
  if (caseColor === sequence[sublevels]) {
    //siguiente secuencia
    sublevels++;

    //si no hay secuencia pasamos al siguiente level
    if (sublevels > levels) {
      //next level
      levels++;

      //si pasamos al final stage.
      if (levels === stages) {
        alert("You Wins!!!");
        endGame();
      } else {
        //reseteamos para que la proxima vez valida desde inicio de secuencia.
        sublevels = 0;
        // mostramos la siguiente secuencia
        setTimeout(lightUpPattern, mediumWait);
      }
    }
  } else {
    alert("You lose");
    endGame();
  }
};

//interaccion con User
colorsChoise.purple.addEventListener("click", userColorClick);
colorsChoise.greenyellow.addEventListener("click", userColorClick);
colorsChoise.palevioletred.addEventListener("click", userColorClick);
colorsChoise.yellow.addEventListener("click", userColorClick);

//recuperar la posicion por medio del color indicado
const colorToNumber = (color) => {
  if (color === "purple") return 0;
  if (color === "greenyellow") return 1;
  if (color === "palevioletred") return 2;
  if (color === "yellow") return 3;

  /*switch (color) {
    case "purple":
      return 0;
    case "greenyellow":
      return 1;
    case "palevioletred":
      return 2;
    case "yellow":
      return 3;
  }*/
};

/*
//Sound for button
//buttonBegin
let soundB = document.querySelector(".soundB");
soundB.addEventListener("click", function () {
  let tagAudio = document.createElement("audio");
  tagAudio.setAttribute("src", "./media/simonClick.mp3");
  tagAudio.play();
});


const loadSound = function (fuente) {
  const sound = document.createElement("audio");
  sound.src = fuente;
  sound.setAttribute("preload", "auto");
  sound.setAttribute("controls", "none");
  sound.style.display = "none";
  document.body.section.appendChild(sound);
  return sound;
};
const sound01 = loadSound("./media/simonSound1.mp3");

//button1
let sound1 = document.querySelector(".sound1");
sound1.addEventListener("click", function () {
  let tagAudio = document.createElement("audio");
  tagAudio.setAttribute("src", "./media/simonSound1.mp3");
  tagAudio.play();
});

//button2
let sound2 = document.querySelector(".sound2");
sound2.addEventListener("click", function () {
  let tagAudio = document.createElement("audio");
  tagAudio.setAttribute("src", "./media/simonSound2.mp3");
  tagAudio.play();
});

//button3
let sound3 = document.querySelector(".sound3");
sound3.addEventListener("click", function () {
  let tagAudio = document.createElement("audio");
  tagAudio.setAttribute("src", "./media/simonSound3.mp3");
  tagAudio.play();
});

//button4
let sound4 = document.querySelector(".sound4");
sound4.addEventListener("click", function () {
  let tagAudio = document.createElement("audio");
  tagAudio.setAttribute("src", "./media/simonSound4.mp3");
  tagAudio.play();
});

*/
