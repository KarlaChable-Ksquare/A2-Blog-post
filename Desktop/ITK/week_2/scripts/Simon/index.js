console.log("Live reloading");
//constantes y variables
const startBtn = document.getElementById("startBtn");
const purple = document.getElementById("purple");
const greenyellow = document.getElementById("greenyellow");
const palevioletred = document.getElementById("palevioletred");
const yellow = document.getElementById("yellow");

const colores = {
  purple,
  greenyellow,
  palevioletred,
  yellow,
};

//Secuencia
let secuencia = [];
let nivel = 0;
let subnivel = 0;
const ultimo = 20;
const espera = 750;
const esperaMedia = 1500;
const eliminarColor = 350;
const numColores = 4;

//Inicio del juego.
function playGame() {
  //Secuencia para los botones
  secuencia = new Array(ultimo);
  secuencia = secuencia.fill(0);
  secuencia = secuencia.map((element) =>
    Math.floor(Math.random() * numColores)
  );
  nivel = 0;
  subnivel = 0;

  //preparamos la interfaz
  startBtn.classList.add("hide");

  //primer secuencia del juego.
  iluminarSecuencia();
}

//final de juego
function endGame() {
  startBtn.classList.remove("hide");
  nivel = -1;
}

//Secuencia de iluminacion actual
function iluminarSecuencia() {
  for (let index = 0; index <= nivel; index++) {
    const color = transformarNumeroAColor(secuencia[index]);
    setTimeout(() => iluminarColor(color), espera * index);
  }
}

//iluminar color especificado
function iluminarColor(color) {
  colores[color].classList.add("light");
  setTimeout(() => apagarColor(color), eliminarColor);
}

//apagar boton especificado
function apagarColor(color) {
  colores[color].classList.remove("light");
}

//recuperar el color utilizando la posicion indicada
function transformarNumeroAColor(numero) {
  switch (numero) {
    case 0:
      return "purple";
    case 1:
      return "greenyellow";
    case 2:
      return "palevioletred";
    case 3:
      return "yellow";
  }
}

//funcion de elegir le color
const elegirColor = (ev) => {
  //juego inactivo, regresamos
  if (nivel === -1) return;

  // recupera el nombre del color activo
  const nombreColor = ev.target.dataset.color;
  // averiguamos su posición
  const numeroColor = transformarColorANumero(nombreColor);
  // mostramos el color en pantalla para confirmar la lectura
  iluminarColor(nombreColor);

  //Si el boton presionado corresponde al de la secuencia
  if (numeroColor === secuencia[subnivel]) {
    //siguiente secuencia
    subnivel++;

    //si no hay secuencia pasamos al siguiente level
    if (subnivel > nivel) {
      //next level
      nivel++;

      //si llegamos la final del juego
      if (nivel === ultimo) {
        alert("You Wins!!!");
        endGame();
      } else {
        //reseteamos para que la proxima vez valida desde inicio de secuencia.
        subnivel = 0;
        // mostramos la siguiente secuencia
        setTimeout(iluminarSecuencia, esperaMedia);
      }
    }
  } else {
    alert("You lose");
    endGame();
  }
};

//interaccion con User
colores.purple.addEventListener("click", elegirColor);
colores.greenyellow.addEventListener("click", elegirColor);
colores.palevioletred.addEventListener("click", elegirColor);
colores.yellow.addEventListener("click", elegirColor);

//recuperar la posicion por medio del color indicado
function transformarColorANumero(color) {
  switch (color) {
    case "purple":
      return 0;
    case "greenyellow":
      return 1;
    case "palevioletred":
      return 2;
    case "yellow":
      return 3;
  }
}

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
