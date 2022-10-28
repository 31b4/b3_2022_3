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
  playerH = 16,
  playerSpeedX = 0,
  playerSpeedY = 0;
//------------------------------onload-----------------------------------
window.onload = function() {
  canvas = document.getElementById("jatekTer");
  ctx = canvas.getContext("2d");
  var fps = 60;
  setInterval(function() {
    document.getElementById("h1").innerHTML=playerX +' ; '+ playerY
    playerMove();
    drawAll();
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
    
  }, 1000 / fps);
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
    playerSpeedY = -1;
    checkEdge()
    EgyenesKeplet();
  }
  if (keyHeld_Down) {
    playerSpeedY = 1;
    checkEdge()
    EgyenesKeplet();
  }
  if (keyHeld_Left) {
    playerSpeedX = -1;
    checkEdge()
    EgyenesKeplet();
  }
  if (keyHeld_Right) {
    playerSpeedX = 1;
    checkEdge()
    EgyenesKeplet();
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
  colorRect(playerX-playerW/2, playerY-playerH/2, playerW, playerH, 'white');

  var c = document.getElementById("jatekTer");
  var ajto = c.getContext("2d");
  ajto.beginPath();
  ajto.lineWidth = 5;
  ajto.strokeStyle = 'red';
  for (let i = 0; i < ajtok.length; i++) {
    ajto.moveTo(ajtok_pontjai[ajtok[i][0]][0],ajtok_pontjai[ajtok[i][0]][1])
    ajto.lineTo(ajtok_pontjai[ajtok[i][1]][0],ajtok_pontjai[ajtok[i][1]][1])
    ajto.stroke();
  }
  var fal = c.getContext("2d");
  fal.beginPath();
  fal.strokeStyle ="black"
  fal.lineWidth = 5;
  //falak
  for (let i = 0; i < falak.length; i++) {
    fal.moveTo(falak_pontjai[falak[i][0]][0],falak_pontjai[falak[i][0]][1])
    fal.lineTo(falak_pontjai[falak[i][1]][0],falak_pontjai[falak[i][1]][1])
    fal.stroke();
  }
  //ajtok
}


function colorRect(leftX, topY, width, height, drawColor) {
  ctx.fillStyle = drawColor;
  ctx.fillRect(leftX, topY, width, height);
}

function colorText(shownText, xPos, yPos, drawColor) {
  ctx.fillStyle = drawColor;
  ctx.fillText(shownText, xPos, yPos);
}
//------------------------------EGYENES KÉPLETE-----------------------------------

function EgyenesKeplet(){
  for (let i = 0; i < falak.length; i++) {
    var x1 = falak_pontjai[falak[i][0]][0] //p1
    var x2= falak_pontjai[falak[i][0]][1] //p1
    var y1 = falak_pontjai[falak[i][1]][0] //p2
    var y2= falak_pontjai[falak[i][1]][1] //p2
    console.log("player: "+ playerX+";"+playerY)
    console.log(x1+';'+x2)
    console.log(y1+';'+y2)
    if (euklidesziTav(x1,x2,y1,y2) >= euklidesziTav(playerX,playerY,x1,x2)+euklidesziTav(playerX,playerY,y1,y2)-2 && euklidesziTav(x1,x2,y1,y2) <= euklidesziTav(playerX,playerY,x1,x2)+euklidesziTav(playerX,playerY,y1,y2)+2 ) {

        alert("utkozes")
      
    }
    //(playerX>=x1 && playerY <x2) || (playerX<=y1 && playerY >y2)
    /*
    if (true) {
      var vektor = [y1-x1,y2-x2]
      console.log(vektor)
      var normalVektor = [vektor[1],vektor[0]*(-1)]
      console.log(normalVektor)
  
      var jo_eredmeny = (normalVektor[0]*x1) + (normalVektor[1]*x2)
      var p_eredmeny = (normalVektor[0]*playerX) + (normalVektor[1]*playerY)
      console.log(jo_eredmeny)
      console.log(p_eredmeny)
      
      
    }*/

  }
}
function euklidesziTav(x1,x2,y1,y2) {
 
  return Math.sqrt(Math.pow(x1-y1,2)+Math.pow(x2-y2,2))
}