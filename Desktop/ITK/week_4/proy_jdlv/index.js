/* ==============================  USER STORIES  ============================== */
// 1. As a user, whenever I navigate to the website and see an empty grid with the option to let the user set up the initial configuration.
// 2. If the game is paused I can resume it
// 3. I can clear the board
// 4. I can click a 'Randomize' button that will generate an initial configuration for the game to play and this can only be done when the games has not started or is paused.
// 5. I can see the amount of generation has passed since the start of the game
// 6. (Optional) Research know patterns that occurs in the Game Of Life and allow the  user to see those patterns.

// DOM selectors
const play = document.querySelector(".play");
const stop = document.querySelector(".stop");
const random = document.querySelector(".random");
const clear = document.querySelector(".clr");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //to acces the drawing context

/* ==============================  BUILDING THE CANVAS GRID  ============================== */

// Defining the canvas size
const resolution = 10;
canvas.width = 100;
canvas.height = 100;

const cols = canvas.width / resolution; //10 (0-9)
const rows = canvas.height / resolution; //10 (0-9)
//console.log(cols, rows);

// Creating an empty canvas OR clearing the current canvas
function buildEmptyGrid() {
  return new Array(cols).fill(null).map(() => new Array(rows).fill(0));
}

// Creating a NEW random canvas
function buildRandomGrid() {
  return new Array(cols)
    .fill(null)
    .map(() => new Array(rows).fill(0).map(() => Math.round(Math.random())));
}

// Function to actually draw the grid
let accCell = cols * rows;
let cellLive = 0;
let cellDead = accCell - cellLive;
function render(grid) {
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];

      ctx.beginPath();
      // Adds a rectangle to the current path, takes in (x position, y position, width, height)
      ctx.rect(col * resolution, row * resolution, resolution, resolution);
      // Using the ternary operator to pick the cell filling color
      ctx.fillStyle = cell ? "pink" : "white";
      //console.log(cell); //celulas maximas
      // drawing the filling of the grid
      ctx.fill();
      // drawing the grid path
      ctx.stroke();

      /*if (!cell) {
        cellDead++;
      }*/
      if (cell) {
        cellLive++;
      }
    }
  }
  //alive cells - initial state
  //console.log(`celulas vivas ${cellLive}`); //constante
  //console.log(`celulas muertas ${cellDead}`);
  //console.log(`accCell ${accCell}`);
}

// To visualize the inital empty grid
let grid = buildEmptyGrid();
let randGrid = buildRandomGrid();
let started; //true
let stoped = false; //true
render(grid);

/* ==============================  BUTTONS FUNCTIONALITY  ============================== */
// Each frame update, rewrites the grid with the values of the grid's next generation
let reqAnimation;
function randUpdate() {
  randGrid = nextGeneration(randGrid);
  render(randGrid);
  reqAnimation = requestAnimationFrame(randUpdate);
  play.classList.add("hideIt");
}

play.addEventListener("click", function () {
  // Give life to the game animation
  reqAnimation = requestAnimationFrame(randUpdate);
  started = true;
  stoped = false;

  if (stoped === false) {
    stop.classList.remove("hideIt");
  }
});

// stop button.
stop.addEventListener("click", function () {
  cancelAnimationFrame(reqAnimation);
  started = false;
  stoped = true;

  if ((stoped = true)) {
    play.classList.remove("hideIt");
    stop.classList.add("hideIt");
  }
});

// Later throughout the game, we can modify the grid with the randomize and clear buttons
random.addEventListener("click", function () {
  render(buildRandomGrid());
  genText();
  if (started) {
    requestAnimationFrame(randUpdate);
  }
});

clickCount = 0;
clear.addEventListener("click", function () {
  clickCount++; //contador clears
  console.log(clickCount);
  render(buildEmptyGrid());

  genText();
  started = false;
  stoped = true;

  /*if (clickCount === 1) {
    clickCount = 0;
  }

  if ((started = false)) {
    return (acountGen = 0);
  }*/

  //requestAnimationFrame(update);
  // Each frame update, rewrites the grid with the values of the grid's next generation
  /*
  function update() {
    grid = nextGeneration(grid);
    render(grid);
    requestAnimationFrame(update);
  }
  */
});

/* ==================================  GAME LOGIC  ================================== */

// // Give life to the game animation
// requestAnimationFrame(update);

// // Each frame update, rewrites the grid with the values of the grid's next generation
// function update(){
//     grid = nextGeneration(grid);
//     render(grid);
//     requestAnimationFrame(update);
// }

/* Acount of generations, 1 per loop (cycle) */
let acountGen = 0;
let arrVivo = new Array();
// Function that creates the next cells generation
function nextGeneration(grid) {
  // making a copy of the current grid to edit on the next gen
  const nextGeneration = grid.map((arr) => [...arr]);

  // looping through all of the grid
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row]; // coordinates in x and y
      let numNeighbors = 0;
      /* Looping around the nearest neighbors around the cell, placed in (0,0)
            
             ===================  CELLS  =================== 
            corners = 3 neighbors
            (-1,-1)  (-1,0) |
            (0,-1)   (0,0)  |
            -----------------

            borders = 5 neighbors
            __________________
            | (-1,0)  (-1,1)
            | (0,0)   (0,1)
            | (1,0)   (1,1)
            -----------------

            centrals = 8 neighbors
            ___________________________
            | (-1,-1)  (-1,0)  (-1,1) |
            |  (0,-1)   (0,0)   (0,1) |
            |  (1,-1)   (1,0)   (1,1) |
            ---------------------------
            */
      //console.log(col, row);
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue;
          }
          // Solving the borders/corners issue
          const x_cell = col + i;
          const y_cell = row + j;

          if (x_cell >= 0 && y_cell >= 0 && x_cell < cols && y_cell < rows) {
            const currentNeighbor = grid[col + i][row + j];
            numNeighbors += currentNeighbor;
          }
        }
      }
      // Moodle Game Rules
      // 1. Any live cell with fewer than two live neighbours
      if (cell === 1 && numNeighbors < 2) {
        // dies in next gen by underpopulation
        nextGeneration[col][row] = 0;
      } // 2. Any live cell with two or three live neighbours
      else if (cell === 1 && (numNeighbors === 3 || numNeighbors === 2)) {
        // lives on to the next generation
        nextGeneration[col][row] = 1;
      } // 3. Any live cell with more than three live neighbours
      else if (cell === 1 && numNeighbors > 3) {
        // dies, as if by overpopulation
        nextGeneration[col][row] = 0;
      } // 4. Any dead cell with exactly three live neighbours
      else if (cell === 0 && numNeighbors === 3) {
        // becomes a live cell, as if by reproduction.
        nextGeneration[col][row] = 1;
      }
      /*
      if (nextGeneration[col][row] === 1) {
        arrVivo.push(nextGeneration[col][row]);
      }
      */
    }
  }
  /* No olvidar que debe detenerse tambien cuando haya pausa en el juego */
  acountGen++;
  genText();
  /*
   //console.warn("Next Generation");
  //console.log(`The Gen is ${acountGen}`);
 
  let losVivos = arrVivo.reduce(function (a, b) {
    return a + b;
  });
 
  //console.log(`los vivos son ${losVivos}`);
  //console.log(`nextG ${nextGeneration}`); //array TF
 */

  return nextGeneration; //array con cells V o M.
}

//Texto de Generaciones
function genText() {
  if (clickCount >= 1) {
    document.querySelector(".info-gen").textContent = "You kill everyones!";
    document
      .querySelector(".ico-gen")
      .setAttribute("src", "./image/nuclear.png");
    return (clickCount = 0);
  } else {
    document.querySelector(
      ".info-gen"
    ).textContent = `Have passed ${acountGen} generations`;
    document.querySelector(".ico-gen").setAttribute("src", "./image/pato.png");
    return (clickCount = 0);
  }
}

/*
function cellText() {
  document.querySelector(
    ".info-cell"
  ).textContent = `Are alive ${accCell} cells`;
}
*/
