var pistast = [ 'El roer es mi trabajo...<br> <br>',
  'el queso mi aperitivo  <br> <br>', 'y el gato ha sido siempre, mi más temido enemigo ' ];
 
var clases = [ "alert alert-secondary", "alert alert-success", "alert alert-danger",
"alert alert-warning"]

var i = 0;
var div = document.getElementById('darpista');
var intentos = document.getElementById('intentos');
var vidas = 4;
const btn1 = document.getElementById('btn1');
const quien = document.getElementById('quien');
const raton = ["ratón", "raton"];

  // var image = document.getElementById('log1');
  // image.src = "img2/cat 3 w.png";
// }

function findejuego() { 
  div.innerHTML = "fin del juego <br>" + 'Has perdido...la respuesta es <br>' + " ratón <br>"
  var image = document.getElementById('log1');
  image.className = "img-fluid max-width: 100% ml-2 animate__animated animate__bounceIn"
  image.src = "img2/mouse-a-1.png" ;
  // btn1.style.visibility = "hidden"
  quien.style.visibility = "hidden";
  var boton = document.getElementById('boton');
  boton.style.visibility = "hidden";
};

function arriesgar() {
  event.preventDefault()
  var arriesgo = document.getElementById("quien").value;
  console.log(arriesgo);
  // var n = raton.includes(arriesgo);

  if (vidas < 1 ) {
    findejuego()       
} else {
  console.log(i);
  div.className = clases[i] ;
    div.innerHTML = `pista ${i + 1} ${pistast[i]} <br>`;
    vidas = vidas - 1;
  intentos.innerHTML = 'Vidas: ' + vidas + '<br>';
  i = i + 1;
    
  // console.log('vidas ', vidas);
    // mvidas();
  setTimeout(() => { console.log(arriesgo); }, 1000);
  document.getElementById('quien').value = '';
  return
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