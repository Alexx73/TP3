var pistast = [ '','El roer es mi trabajo...<br> <br>',
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

  // var image = document.getElementById('log1');
  // image.src = "img2/cat 3 w.png";
// }

function perdiste() { 
  event.preventDefault()
  div.className = "display-3 font-weight-bold"
  div.innerHTML = "Fin del juego " + 'Perdiste...la respuesta es <br>' + " ratón <br>"
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
  div.className = "display-3 font-weight-bold"
  
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
  console.log(arriesgo);
  vidas = vidas - 1;
  i = i + 1;
  intentos.innerHTML = 'Vidas: ' + vidas + '<br>';

  // var n = raton.includes(arriesgo);
  if (arriesgo == "raton" || arriesgo == "ratón") {
    ganaste()
}
 else if (vidas < 1 ) {
    perdiste()       
  } else {
   
  console.log(i);
  div.className = clases[i] ;
    div.innerHTML = `pista ${i} ${pistast[i]} <br>`;
    
  // intentos.innerHTML = 'Vidas: ' + vidas + '<br>';
  
    
  // console.log('vidas ', vidas);
    // mvidas();
  // setTimeout(() => { console.log(arriesgo); }, 1000);
  // document.getElementById('quien').value = '';
  
  };
return
}




// const arriesgar = document.getElementById('arriesgar');
// arriesgar.addEventListener(submit, arriesgo)
// const log = document.getElementById('log');
// form.addEventListener('click', pista);

const form2 = document.getElementById('form2');
// form2.addEventListener('submit', pista);

const username = document.getElementById('username');
// const pista = document.getElementById('pista');

function mvidas() {
    intentos.innerHTML = 'Vidas: ' + vidas;
};

function pista() {

    event.preventDefault()
    
    if (vidas < 1) {
        findejuego()       
    } else {
      console.log(i);
      div.className = clases[i] ;
      div.innerHTML = `pista ${i + 1} ${pistast[i]} <br>`;
      intentos.innerHTML = 'Vidas: ' + vidas + '<br>';
      i = i + 1;
      vidas = vidas - 1
      console.log('vidas ', vidas);
      mvidas();
      return
  }
  

  return
}


// document.getElementById("myEle").className = "container-fluid";
      // 'pista ', i + 1, pistast[i];