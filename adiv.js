var pistast = [ '', '', 'El roer es mi trabajo...<br> <br>',
  'el queso mi aperitivo  <br> <br>', 'y el gato ha sido siempre, mi más temido enemigo ' ];
 
var clases = [ "alert alert-secondary", "alert alert-success", "alert alert-danger",
"alert alert-warning"]

var i = 1;
var div = document.getElementById('darpista');
var intentos = document.getElementById('intentos');
var vidas = 4;
const btn1 = document.getElementById('btn1');
const quien = document.getElementById('quien');
const raton = ["ratón", "raton"];
const sound = new Audio()


function perdiste() { 
  event.preventDefault()
  div.className = "h4 text-danger font-weight-bold animate__animated animate__backInDown"
  div.innerHTML = "<br> Fin del juego " + 'Perdiste...la respuesta es <br>' + " ratón <br>"
  var image = document.getElementById('log1');
  image.className = "img-fluid max-width: 100% ml-2 animate__animated animate__bounceIn"
  image.src = "img2/mouse-a-1.png" ;
  // btn1.style.visibility = "hidden"
  quien.style.visibility = "hidden";
  var boton = document.getElementById('boton');
  boton.style.visibility = "hidden";
};

function ganaste() { 
  event.preventDefault()
  div.className = "h4 text-success font-weight-bold animate__animated animate__backInDown"
  
  quien.style.visibility = "hidden";
  var boton = document.getElementById('boton');
  boton.style.visibility = "hidden";
  sound.src = 'img2/Ta-Da.mp3'
  sound.play() 
  var image = document.getElementById('log1');
  image.style.visibility = "hidden";
  image.className = "img-fluid max-width: 100% ml-2 animate__animated animate__bounceIn"
  // image.src = "img2/mouse-a-1.png";
  setTimeout(() => { image.src = "img2/mouse-a-1.png"; }, 1100);
  image.style.visibility = "visible";
  div.innerHTML = "Ganaste <br> La respuesta es ratón!!!!";
}

function arriesgar() {
  event.preventDefault()
  var arriesgo = document.getElementById("quien").value;
  arriesgol = arriesgo.toLowerCase();
console.log(arriesgol);  
  vidas = vidas - 1;
  i = i + 1;
  intentos.innerHTML = 'Vidas: ' + vidas + '<br>';

  // var n = raton.includes(arriesgo);
  if (arriesgol == "raton" || arriesgol == "ratón" ) {
    ganaste()
}
 else if (vidas < 1 ) {
    perdiste()       
  } else {
   
  console.log(i);
  div.className = clases[i] ;
    div.innerHTML = `pista ${i} ${pistast[i]} <br>`;

  
  };
return
}
