console.log("done")
//------------------------------RAJZOLAS-----------------------------------
Start()
function Start() {
    var canvas = document.getElementById("jatekTer");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var c = document.getElementById("jatekTer");
    var fal = c.getContext("2d");
    fal.moveTo(50, 30);
    fal.lineTo(50, 650);    
    fal.lineTo(530, 650);
    fal.moveTo(620, 650);
    fal.lineTo(1150, 650);
    fal.lineTo(1150, 30);
    fal.lineTo(50,30);
    
    fal.moveTo(50, 200);
    fal.lineTo(450, 200);

    fal.moveTo(525, 200);
    fal.lineTo(530, 200);
    fal.lineTo(530, 30);

    fal.moveTo(50, 425);
    fal.lineTo(450,425);
    
    fal.stroke();
}




//----------------------------WASD move-------------------------------
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

function onKeyDown(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 68: //d
      keyD = true;
        Moving(px, py+tick)
      break;
    case 83: //s
      keyS = true;
      Moving(px+tick, py)
      break;
    case 65: //a
      keyA = true;
      Moving(px,py-tick)
      break;
    case 87: //w
      keyW = true;
      Moving(px-tick,py)
      break;
  }
}

function onKeyUp(event) {
  var keyCode = event.keyCode;

  switch (keyCode) {
    case 68: //d
      keyD = false;
      break;
    case 83: //s
      keyS = false;
      break;
    case 65: //a
      keyA = false;
      break;
    case 87: //w
      keyW = false;
      break;
  }
}

//fontos variables
var tick = 1;//sebesseg 


var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

var px=540
var py=680

function Moving(x,y) {  
    px = x
    py = y
    console.log(x,y)

}