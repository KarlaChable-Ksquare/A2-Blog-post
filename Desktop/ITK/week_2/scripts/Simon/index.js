console.log("Live reloading");
//our colors
const colorsChoise = {
  purple,
  greenyellow,
  palevioletred,
  yellow,
};

/* SOUND */
/*const cargarSonido = function (fuente) {
  const sonido = document.createElement("audio");
  sonido.src = fuente;
  sonido.setAttribute("preload", "auto");
  sonido.setAttribute("controls", "none");
  sonido.style.display = "none";
  document.body.appendChild(sonido);
  return sonido;
};

const sonidoSuperiorIzquierda = cargarSonido("./media/simonSound1.mp3"),
  sonidoSuperiorDerecha = cargarSonido("./media/simonSound2.mp3"),
  sonidoInferiorIzquierda = cargarSonido("./media/simonSound3.mp3"),
  sonidoInferiorDerecha = cargarSonido("./media/simonSound4.mp3");*/

//Sound for button
//button start
let soundStart = document.querySelector(".startBtn");
soundStart.addEventListener("click", function () {
  let tagAudio = document.createElement("audio");
  tagAudio.setAttribute("src", "./media/simonClick.mp3");
  tagAudio.play();
});

//button purple
let soundPurple = document.querySelector("#purple");
soundPurple.addEventListener("click", function () {
  let tagAudio = document.createElement("audio");
  tagAudio.setAttribute("src", "./media/simonSound1.mp3");
  tagAudio.play();
});

//button greenyellow
let soundGreenyellow = document.querySelector("#greenyellow");
soundGreenyellow.addEventListener("click", function () {
  let tagAudio = document.createElement("audio");
  tagAudio.setAttribute("src", "./media/simonSound2.mp3");
  tagAudio.play();
});

//button palevioletred
let soundPalevioletred = document.querySelector("#palevioletred");
soundPalevioletred.addEventListener("click", function () {
  let tagAudio = document.createElement("audio");
  tagAudio.setAttribute("src", "./media/simonSound3.mp3");
  tagAudio.play();
});

//button yellow
let soundYellow = document.querySelector("#yellow");
soundYellow.addEventListener("click", function () {
  let tagAudio = document.createElement("audio");
  tagAudio.setAttribute("src", "./media/simonSound4.mp3");
  tagAudio.play();
});

//whitch color was choosen
const numberToColor = (index) => {
  if (index === 0) return "purple";
  if (index === 1) return "greenyellow";
  if (index === 2) return "palevioletred";
  if (index === 3) return "yellow";
};

//simon Say
let sequence = [];
const stages = 20;
const numberPGPY = 4;
let levels = 0;
let sublevels = 0;

//Start
const playGame = () => {
  sequence = new Array(stages);
  sequence = sequence
    .fill(0)
    .map((pattern) => Math.floor(Math.random() * numberPGPY));
  levels = 0;
  sublevels = 0;
  startBtn.classList.add("hideIt");
  lightUpPattern();
};

//End
const endGame = () => {
  startBtn.classList.remove("hideIt");
  //falsy value
  levels = -1;
};

/* LIGTHS */
//light up pattern
const hideColor = 350;
const waiting = 600;
const mediumWait = 1200;

const lightUpPattern = async () => {
  for (let index = 0; index <= levels; index++) {
    const color = numberToColor(sequence[index]);
    setTimeout(() => glowUpPattern(color), waiting * index);
    console.log(color);
  }
};

//glow up
const glowUpPattern = (color) => {
  colorsChoise[color].classList.add("glowUp");
  setTimeout(() => turnOffPattern(color), hideColor);
};

//turn off color
const turnOffPattern = (color) => {
  colorsChoise[color].classList.remove("glowUp");
};

//to choose the color according to the user
const userColorClick = (onClick) => {
  //static game.
  if (levels === -1) return;
  // retrieve active color name based on color-data (html)
  const chosenColor = onClick.target.dataset.color;
  // we find out your position according to the case (if.)
  const caseColor = colorToNumber(chosenColor);
  // turn light.
  glowUpPattern(chosenColor);

  //If the pressed button corresponds to the pattern.
  if (caseColor === sequence[sublevels]) {
    //continue the event.
    sublevels++;
    //next stage.
    if (sublevels > levels) {
      //next step.
      levels++;

      //If we win.
      if (levels === stages) {
        console.log("Ganaste!");
        /*
        Warnings here!!!
        */
        endGame();
      } else {
        //reset it.
        sublevels = 0;
        //next pattern in screen.
        setTimeout(lightUpPattern, mediumWait);
      }
    }
  } else {
    //if user fails
    console.log("perdiste");
    /*
    Warnings here!!!
    */
    endGame();
  }
};

// Return the assigned number by color
const colorToNumber = (color) => {
  if (color === "purple") return 0;
  if (color === "greenyellow") return 1;
  if (color === "palevioletred") return 2;
  if (color === "yellow") return 3;
};

//buttons in DOM.
colorsChoise.purple.addEventListener("click", userColorClick);
colorsChoise.greenyellow.addEventListener("click", userColorClick);
colorsChoise.palevioletred.addEventListener("click", userColorClick);
colorsChoise.yellow.addEventListener("click", userColorClick);

/*const loadSound = function (fuente) {
  const sound = document.createElement("audio");
  sound.src = fuente;
  sound.setAttribute("preload", "auto");
  sound.setAttribute("controls", "none");
  sound.style.display = "none";
  document.body.section.appendChild(sound);
  return sound;
};
const sound01 = loadSound("./media/simonSound1.mp3");*/
