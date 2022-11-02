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
  
  var ablakok = [
    [50,80],
    [50,130],
    [800,30],
    [870,30],
    [1150,530],
    [1150,600],
    [120,650],
    [200,650]

  ]
  //----------------------------------------
var canvas, ctx,
  playerX = 566,
  playerY = 670,
  playerW = 20,
  playerH = 20,
  playerX2 = playerX+playerW,
  playerY2 = playerY+playerH,
  playerSpeedX = 0,
  playerSpeedY = 0;
var hang = new Image();
hang.src = 'img/mic.png';
var mozgas = new Image();
mozgas.src = 'img/motion.png'

//------------------------------onload-----------------------------------
var fps = 60;
var interval;
window.onload = function() {
  canvas = document.getElementById("jatekTer");
  ctx = canvas.getContext("2d");
  MozgasErzekeloLetrehozas();
  Interval();
  
}
function Interval() {
  interval = setInterval(function() {
    document.getElementById("h1").innerHTML=playerX +' ; '+ playerY;
    drawAll();
    playerMove();
    
    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
  }, 1000 / fps);
}
//------------------------------INPUT-----------------------------------
var KEY_W = 87,
 KEY_A = 65,
 KEY_S = 83,
 KEY_D = 68,
 KEY_SHIFT = 16,
 KEY_SPACE = 32,

 keyHeld_Down = false,
 keyHeld_Up = false,
 keyHeld_Left = false,
 keyHeld_Right = false,
 keyHeld_Shift = false,
 keyHeld_Space = false;

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
  if (evt.keyCode == KEY_SHIFT && !keyHeld_Space) {
    fps = 120;
    keyHeld_Shift = true;
    clearInterval(interval);
    Interval();
  }
  if (evt.keyCode == KEY_SPACE && !keyHeld_Shift) {
    fps = 40;
    keyHeld_Space = true;
    clearInterval(interval);
    Interval();
  }

  evt.preventDefault();
}
function keyReleased(evt) {
  if (evt.keyCode == KEY_A) {
    keyHeld_Left = false;
    playerSpeedX = 0;
    playerSpeedY = 0;
  }
  if (evt.keyCode == KEY_D) {
    keyHeld_Right = false;
    playerSpeedX = 0;
    playerSpeedY = 0;
  }
  if (evt.keyCode == KEY_W) {
    keyHeld_Up = false;
    playerSpeedY = 0;
    playerSpeedX = 0;
  }
  if (evt.keyCode == KEY_S) {
    keyHeld_Down = false;
    playerSpeedY = 0;
    playerSpeedX = 0;
  }
  if (evt.keyCode == KEY_SHIFT) {
    fps = 60;
    keyHeld_Shift = false;
    clearInterval(interval);
    Interval();
  }
  if (evt.keyCode == KEY_SPACE) {
    fps = 60;
    keyHeld_Space = false;
    clearInterval(interval);
    Interval();
  }
  
}
//------------------------------MOVING-----------------------------------
function HangErzekeles() {
  if (keyHeld_Shift) {
    if (euklidesziTav(620,270,playerX+playerW/2,playerY+playerH/2)<=230) {
      ctx.beginPath();
      ctx.strokeStyle="yellow"
      ctx.lineWidth = 3;
      ctx.arc(600+20, 250+20, 230, 0, 2 * Math.PI);
      ctx.stroke()
    }  
  }
  else if ( keyHeld_Space){
    if (euklidesziTav(620,270,playerX+playerW/2,playerY+playerH/2)<=100) {
      ctx.beginPath();
      ctx.strokeStyle="yellow";
      ctx.lineWidth = 3;
      ctx.arc(600+20, 250+20, 100, 0, 2 * Math.PI);
      ctx.stroke();
    } 
  }
  else{
    if (euklidesziTav(620,270,playerX+playerW/2,playerY+playerH/2)<=150) {
      ctx.beginPath();
      ctx.strokeStyle="yellow";
      ctx.lineWidth = 3;
      ctx.arc(600+20, 250+20, 150, 0, 2 * Math.PI);
      ctx.stroke();
    } 
  }
}
function MozgasErzekeles() {
  let x1 = me_pontja[0]
  let x2 = me_pontja[1]
  for (let i = 0; i < mePontjai.length; i+=5) {
    for (let k = playerY; k < playerY+playerH; k++) {
        let y1 = mePontjai[i][0]
        let y2 = mePontjai[i][1]
        if (Math.round(euklidesziTav(x1,x2,y1,y2)) == Math.round(euklidesziTav(playerX,k,x1,x2))+Math.round(euklidesziTav(playerX,k,y1,y2))) {
          var mozg = canvas.getContext("2d");
          mozg.beginPath();
          mozg.lineWidth = 1;
          mozg.strokeStyle = 'yellow';
          for (let i = 0; i < mePontjai.length; i+=5) {
            mozg.moveTo(me_pontja[0],me_pontja[1])
            mozg.lineTo(mePontjai[i][0], mePontjai[i][1])
            mozg.stroke()
          }
        } 
    }
    /*
    for (let k = playerX; k < playerX+ playerW; k++) {
      let y1 = mePontjai[i][0]
      let y2 = mePontjai[i][1]
      if (euklidesziTav(x1,x2,y1,y2) >= euklidesziTav(k,playerY+playerH,x1,x2)+euklidesziTav(k,playerY+playerH,y1,y2) ) {
        var mozg = canvas.getContext("2d");
        mozg.beginPath();
        mozg.lineWidth = 1;
        mozg.strokeStyle = 'yellow';
        for (let i = 0; i < mePontjai.length; i+=1) {
          mozg.moveTo(me_pontja[0],me_pontja[1])
          mozg.lineTo(mePontjai[i][0], mePontjai[i][1])
          mozg.stroke()
        }
      } 
    }*/
  }
}

function playerMove() {
    playerX += playerSpeedX;
    playerY += playerSpeedY;
  
    
    if (keyHeld_Up && !keyHeld_Down) {
      HangErzekeles();
      MozgasErzekeles();
      playerSpeedY = -1;
      checkEdge();
      if (Utkozes(falak,falak_pontjai)[0]) {
        playerY -= playerSpeedY;
        playerSpeedY =0;
      }
      
    }
    else if (keyHeld_Down && !keyHeld_Up) {
      HangErzekeles();
      MozgasErzekeles();
      playerSpeedY = 1;
      checkEdge();
      if (Utkozes(falak,falak_pontjai)[0]) {
        playerY -= playerSpeedY;
        playerSpeedY =0;
      }
    }
    else if(keyHeld_Down && keyHeld_Up){
      playerY -= playerSpeedY;
      playerSpeedY =0;
    }
    if (keyHeld_Left && !keyHeld_Right) {
      HangErzekeles();
      MozgasErzekeles();
      playerSpeedX = -1;
      checkEdge();
      if (Utkozes(falak,falak_pontjai)[0]) {
        playerX -= playerSpeedX;
        playerSpeedX = 0;
      }
      
    }
    else if (keyHeld_Right  && !keyHeld_Left) {
      HangErzekeles();
      MozgasErzekeles();
      playerSpeedX = 1;
      checkEdge();
      if (Utkozes(falak,falak_pontjai)[0]) {
        playerX -= playerSpeedX;
        playerSpeedX = 0;
      }
    }
    else if(keyHeld_Right  && keyHeld_Left){
      playerX -= playerSpeedX;
      playerSpeedX = 0;
    }
  
  //console.log("P1"+playerX+';'+playerY + "P2"+playerX2+';'+playerY2)

}
function checkEdge(){// ha kivul van a canvason visszadobja
  if (playerY <= 0) {
    playerY = 0;
  } else if (playerY >= canvas.height - playerH) { 
    playerY = canvas.height - playerH;
  }

  if (playerX >= canvas.width - playerW) {
    playerX = canvas.width - playerW;
  } else if (playerX <= 0) {
    playerX = 0;
  }
  return true;
}
//------------------------------DRAVING-----------------------------------
function drawAll() {
  colorRect(0, 0, canvas.width, canvas.height, 'green');
  
  
  var c = document.getElementById("jatekTer");
  

  var ajto = c.getContext("2d");
  ajto.beginPath();
  ajto.lineWidth = 5;
  ajto.strokeStyle = 'red';
  for (let i = 0; i < ajtok.length; i++) {
    ajto.moveTo(ajtok_pontjai[ajtok[i][0]][0],ajtok_pontjai[ajtok[i][0]][1]);
    ajto.lineTo(ajtok_pontjai[ajtok[i][1]][0],ajtok_pontjai[ajtok[i][1]][1]);
    ajto.stroke();
  }
  var fal = c.getContext("2d");
  fal.beginPath();
  fal.strokeStyle ="black"
  fal.lineWidth = 1;
  //falak
  for (let i = 0; i < falak.length; i++) {
    fal.moveTo(falak_pontjai[falak[i][0]][0],falak_pontjai[falak[i][0]][1]);
    fal.lineTo(falak_pontjai[falak[i][1]][0],falak_pontjai[falak[i][1]][1]);
    fal.stroke();
  }
  //ajtok
  //ablakok
  var ablak = c.getContext("2d");
  ablak.beginPath();
  ablak.strokeStyle ="lightblue"
  ablak.lineWidth = 2;
  for (let i = 0; i < ablakok.length; i+=2) {
    ablak.moveTo(ablakok[i][0],ablakok[i][1]);
    ablak.lineTo(ablakok[i+1][0],ablakok[i+1][1]);
    ablak.stroke();
  }
  //mozgas szenzor
  ctx.drawImage(mozgas, 37, 620,40,40);
  //hang szenzor 620,270
  ctx.drawImage(hang, 600, 250,40,40);
  ctx.beginPath();
  ctx.strokeStyle="red";
  ctx.lineWidth = 3;
  ctx.arc(600+20, 250+20, 100, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle="red";
  ctx.lineWidth = 3;
  ctx.arc(600+20, 250+20, 150, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle="red";
  ctx.lineWidth = 3;
  ctx.arc(600+20, 250+20, 230, 0, 2 * Math.PI);
  ctx.stroke();
  //erzekelo ajtok
  var xy = Utkozes(ajtok, ajtok_pontjai)
  if(xy[0]){//true / false
      xy[1];
      let x1 = xy[1][0];
      let x2 = xy[1][1];
      let y1 = xy[1][2];
      let y2 = xy[1][3];
      colorChange(x1,x2,y1,y2,"yellow");
  
  }
  //mozgerz
  /*
  var mozg = c.getContext("2d");
  mozg.beginPath();
  mozg.lineWidth = 1;
  mozg.strokeStyle = 'red';
  for (let i = 0; i < mePontjai.length; i+=1) {
    mozg.moveTo(me_pontja[0],me_pontja[1]);
    mozg.lineTo(mePontjai[i][0], mePontjai[i][1]);
    mozg.stroke();
  }*/
  //player
  colorRect(playerX, playerY, playerW, playerH, 'white');
}


function colorRect(leftX, topY, width, height, drawColor) {
  ctx.beginPath();
  ctx.fillStyle = drawColor;
  ctx.fillRect(leftX, topY, width, height);
}
function colorChange(x1,x2,y1,y2,color){
  var c = document.getElementById("jatekTer");
  var atszin = c.getContext("2d");
  atszin.beginPath();
  atszin.moveTo(x1,x2);
  atszin.lineTo(y1,y2);
  atszin.lineWidth = 5;
  atszin.strokeStyle = color;
  atszin.stroke();
}
function colorText(shownText, xPos, yPos, drawColor) {
  ctx.beginPath();
  ctx.fillStyle = drawColor;
  ctx.fillText(shownText, xPos, yPos);
}
//------------------------------EGYENES KÉPLETE-----------------------------------

function Utkozes(elem,elem_pontjai){
  for (let i = 0; i < elem.length; i++) {
    var x1 = elem_pontjai[elem[i][0]][0]; //p1
    var x2= elem_pontjai[elem[i][0]][1]; //p1
    var y1 = elem_pontjai[elem[i][1]][0]; //p2
    var y2= elem_pontjai[elem[i][1]][1];//p2

    //-----hatekonysag javitasat igenyli
    for (let i = playerX; i < playerX+ playerW; i++) {
      for (let j = playerY; j < playerY+ playerH; j++) {
        if (euklidesziTav(x1,x2,y1,y2) >= euklidesziTav(i,j,x1,x2)+euklidesziTav(i,j,y1,y2) && euklidesziTav(x1,x2,y1,y2) <= euklidesziTav(i,j,x1,x2)+euklidesziTav(i,j,y1,y2)) {
          return [true,[x1,x2,y1,y2]];
        } 
      }
    }
    
  }
  return false;
}
function euklidesziTav(x1,x2,y1,y2) {
  return Math.sqrt(Math.pow(x1-y1,2)+Math.pow(x2-y2,2));
}



//var me_pontja = [463,634]
var me_pontja = [60,640];
var mePontjai=[];
function MozgasErzekeloLetrehozas() {
  var falak_e = FalakEgyenesEgyenlete();
  Abc(60,1150,30,falak_e);
  Abc(30,640,1150,falak_e);
}
function Abc(n,m,k,falak_e){
  var x1 = me_pontja[0]; // B
  var y1 = me_pontja[1];
  for (let i = n; i <= m; i+=10) {
    let x2 = i; //A
    let y2 = k;
    if (k == 1150) {//----szar---------------------------
      x2 = k;
      y2 = i;
    }
    let irany_vektor = IranyVektor(x1,y1,x2,y2);
    let normal_vektor = NormalVektor(irany_vektor);
    var abc = EgyenesEgyenlete(normal_vektor,[x2,y2]);
    var sv = [];
    var sv2 = [];
    for (let j = 0; j < falak_e.length; j++) {
      var mecc =EgyenletRendszer(falak_e[j],abc);
      if (mecc!=-1) {
        if (euklidesziTav(x2,y2,x1,y1) >= euklidesziTav(x2,y2,mecc[0],mecc[1]) + euklidesziTav(mecc[0],mecc[1],x1,y1)-10 && euklidesziTav(x2,y2,x1,y1) <= euklidesziTav(x2,y2,mecc[0],mecc[1]) + euklidesziTav(mecc[0],mecc[1],x1,y1)+10) {
          let A =[falak_pontjai[falak[j][0]][0],falak_pontjai[falak[j][0]][1]]; //mettol x,y
          let B = [falak_pontjai[falak[j][1]][0],falak_pontjai[falak[j][1]][1]]; // meddig x,y
          if (euklidesziTav(A[0],A[1],B[0],B[1]) >= euklidesziTav(mecc[0],mecc[1],A[0],A[1])+euklidesziTav(mecc[0],mecc[1],B[0],B[1])-5 && euklidesziTav(A[0],A[1],B[0],B[1]) <= euklidesziTav(mecc[0],mecc[1],A[0],A[1])+euklidesziTav(mecc[0],mecc[1],B[0],B[1])+5) {
            sv.push(mecc);
            sv2.push(euklidesziTav(mecc[0],mecc[1],x1,y1));
            
          }
        }
      }
    }

    var abc2 = sv[sv2.indexOf(Math.min(...sv2))];
    if (abc2 != undefined) {
      mePontjai.push([Math.round(abc2[0]),Math.round(abc2[1])]);
    }

    //sv2.push()
  }
    //console.log(sv)
    //console.log(abc2)
    
  
}
function EgyenletRendszer(abc2,abc1) {
  let y = (abc2[2]*abc1[0]-abc2[0]*abc1[2]) / (abc1[0]*abc2[1] - abc2[0]*abc1[1]);
  let x = (abc1[2]-abc1[1]*y)/abc1[0];
  if (x>=50 && x<= 1150 && y>=30 && y<=650) {
    return [x,y];
  }
  return -1;
}
function FalakEgyenesEgyenlete() {
  var egyenesek = [];
  for (let i = 0; i < falak.length; i++) {
    let A =[falak_pontjai[falak[i][0]][0],falak_pontjai[falak[i][0]][1]]; //mettol x,y
    let B = [falak_pontjai[falak[i][1]][0],falak_pontjai[falak[i][1]][1]]; // meddig x,y
    let irany_vektor = IranyVektor(B[0],B[1],A[0],A[1]);
    let normal_vektor = NormalVektor(irany_vektor);
    var abc = EgyenesEgyenlete(normal_vektor,A);
    egyenesek.push(abc);
  }
  return egyenesek;
}

function IranyVektor(x1,y1,x2,y2) {
  return [x1-x2,y1-y2];
}
function NormalVektor(iv) {
  return [iv[1],iv[0]*(-1)];
}
function EgyenesEgyenlete(nv,A){
  var a = nv[0];
  var b = nv[1];
  var c = a*A[0] + b*A[1];
  return [a,b,c];
}


