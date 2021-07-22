// Your code will go here

// Open up your console - if everything loaded properly you should see the version number
// corresponding to the latest version of ml5 printed to the console and in the p5.js canvas.
let player;
let bgImage;
let playerImage;
let obstacleImage;
let obstacles = [];
let wordClassifier;

function preload() {
  bgImage = loadImage("background.png");
  playerImage = loadImage("player1.png");
  obstacleImage = loadImage("images.png");
  let optios = {
    probabilityThreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", optios);
}

function setup() {
  createCanvas(800, 500);
  player = new Player();
  wordClassifier.classify(heardWord);
}
{
  function heardWord(errors, results) {
    let word = results[0].label;
    if (word == "up") {
      player.jump();
    }
    console.log(results[0].label, results[0].confidence);
  }
}
function keyPressed() {
  if (key == " ") {
    player.jump();
  }
}
function draw() {
  background(bgImage);
  if (random(1) < 0.01) {
    obstacles.push(new obstacle());
  }

  player.Show();
  player.move();

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      console.log("GAME OVER!!");
      noLoop();
    }
  }
}
