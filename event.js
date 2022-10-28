var falak_pontjai = [
    [50,30],
    [50,650],
    [1150,30],
    [530, 650],
    [620, 650],
    [1150, 650],
    [50, 200],
    [450,200],
    [50, 425],
    [450, 425],
    [450, 650],
    [450, 500],
    [450, 345],
    [530,30],
    [530,200],
    [620,425],
    [1060,425],
    [530,425]
  ]
  var falak = [
    [0,1],
    [0,2],
    [1,3],
    [5,4],
    [5,2],
    [6, 7],
    [8, 9],
    [10, 11],
    [12, 7],
    [13, 14],
    [4,15],
    [15,16],
    [14,17]
  ]

  var ajtok_pontjai = [
    [451,200],
    [529,200],
    [450,346],
    [450,424],
    [450,426],
    [450,499],
    [531,650],
    [619,650],
    [531,425],
    [619,425],
    [1061,425],
    [1149,425]
  ]

  var ajtok=[
    [0,1],
    [2,3],
    [4,5],
    [6,7],
    [8,9],
    [10,11]
  ]

//----------------------------------------
var canvas, ctx,
  playerX = 400,
  playerY = 500,
  playerW = 20,
  playerH = 15,
  playerSpeedX = 0,
  playerSpeedY = 0;
//------------------------------onload-----------------------------------
window.onload = function() {
  canvas = document.getElementById("jatekTer");
  ctx = canvas.getContext("2d");
  var framesPerSecond = 30;
  setInterval(function() {
    playerMove();
    drawAll();
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
    
  }, 1000 / 60);
}
//------------------------------INPUT-----------------------------------
var KEY_W = 87,
 KEY_A = 65,
 KEY_S = 83,
 KEY_D = 68,

 keyHeld_Down = false,
 keyHeld_Up = false,
 keyHeld_Left = false,
 keyHeld_Right = false;

 function keyPressed(evt) {
  if (evt.keyCode == KEY_A) {
    keyHeld_Left = true;
  }
  if (evt.keyCode == KEY_D) {
    keyHeld_Right = true;
  }
  if (evt.keyCode == KEY_W) {
    keyHeld_Up = true;
  }
  if (evt.keyCode == KEY_S) {
    keyHeld_Down = true;
  }

  evt.preventDefault();
}
function keyReleased(evt) {
  if (evt.keyCode == KEY_A) {
    keyHeld_Left = false;
    playerSpeedX = 0;
  }
  if (evt.keyCode == KEY_D) {
    keyHeld_Right = false;
    playerSpeedX = 0;
  }
  if (evt.keyCode == KEY_W) {
    keyHeld_Up = false;
    playerSpeedY = 0;
  }
  if (evt.keyCode == KEY_S) {
    keyHeld_Down = false;
    playerSpeedY = 0;
  }
}
//------------------------------MOVING-----------------------------------
function playerMove() {
  playerX += playerSpeedX;
  playerY += playerSpeedY;
  

  if (keyHeld_Up) {
    playerSpeedY = -2;
    checkEdge()
  }
  if (keyHeld_Down) {
    playerSpeedY = 2;
    checkEdge()
  }
  if (keyHeld_Left) {
    playerSpeedX = -2;
    checkEdge()
  }
  if (keyHeld_Right) {
    playerSpeedX = 2;
    checkEdge()
  }
}
function checkEdge(){// ha kivul van a canvason visszadobja
  if (playerY <= 0) {
    playerY = 0
  } else if (playerY >= canvas.height - playerH) { 
    playerY = canvas.height - playerH
  }

  if (playerX >= canvas.width - playerW) {
    playerX = canvas.width - playerW
  } else if (playerX <= 0) {
    playerX = 0
  }
  return true
}
//------------------------------DRAVING-----------------------------------
function drawAll() {
  colorRect(0, 0, canvas.width, canvas.height, 'green');
  colorRect(playerX, playerY, playerW, playerH, 'white');

  var c = document.getElementById("jatekTer");
  var fal = c.getContext("2d");
  fal.beginPath();
  fal.strokeStyle ="black"
  //falak
  for (let i = 0; i < falak.length; i++) {
    fal.moveTo(falak_pontjai[falak[i][0]][0],falak_pontjai[falak[i][0]][1])
    fal.lineTo(falak_pontjai[falak[i][1]][0],falak_pontjai[falak[i][1]][1])
    fal.stroke();
  }
  //ajtok
  var ajto = c.getContext("2d");
  ajto.beginPath();
  ajto.strokeStyle = 'red';
  for (let i = 0; i < ajtok.length; i++) {
    ajto.moveTo(ajtok_pontjai[ajtok[i][0]][0],ajtok_pontjai[ajtok[i][0]][1])
    ajto.lineTo(ajtok_pontjai[ajtok[i][1]][0],ajtok_pontjai[ajtok[i][1]][1])
    ajto.stroke();
  }
}


function colorRect(leftX, topY, width, height, drawColor) {
  ctx.fillStyle = drawColor;
  ctx.fillRect(leftX, topY, width, height);
}

function colorText(shownText, xPos, yPos, drawColor) {
  ctx.fillStyle = drawColor;
  ctx.fillText(shownText, xPos, yPos);
}

