
var colors = generateRandomColor(6)
const cuadrado = document.querySelectorAll(".square");
var clickedColor;
var pickedColor = colors[pickColor(6)];
var test = document.getElementById("colorDisplay");
var mensaje = document.getElementById("message");
var hard = document.getElementById("reset_hard");
var easy = document.getElementById("reset_easy");
var body = document.body;
var mode = 6;
var reset = document.getElementById("reset1");


//for principal que recorre todos los cuadrados
for (var i = 0; i < cuadrado.length; i++) {

  cuadrado[i].style.backgroundColor = colors[i]

  cuadrado[i].addEventListener("click", function () {
    clickedColor = this.style.backgroundColor

    if (clickedColor != pickedColor) {



      this.style.backgroundColor = "black"
      var $span = document.querySelector("#message");
      $span.textContent = "Try Again"

    }

    else {
      var $h1 = document.querySelector("h1");
      $h1.style.backgroundColor = pickedColor;

      var $span = document.querySelector("#message");
      $span.textContent = "Correct";
      var button = document.querySelector("#reset1");
      button.textContent = "PLAY AGAIN"


      for (var i = 0; i < cuadrado.length; i++) {

        cuadrado[i].style.backgroundColor = pickedColor;
        /* cuadrado.forEach(function(cuadrados){
           cuadrados.style.backgroundColor=pickedColor;
         })
        */

      }
    }
  })
}
/*
function changeColors(colorCorrecto) {
  for (var i = 0; i < cuadrado.length; i++) {

    cuadrado[i].style.backgroundColor = colorCorrecto;
  }
}*/
test.textContent = pickedColor.toUpperCase();

//selecciona un numero dentro del array
function pickColor(num) {
  return Math.floor(Math.random() * num)
}

//genera array con randomColors
function generateRandomColor(num) {
  var arr = []
  for (var i = 0; i < num; i++) {
    arr[i] = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
  }
  return arr;
}


//boton que genera nuevos colores

reset.addEventListener("click", function () {
  var colors = generateRandomColor(mode);
  pickedColor=colors[pickColor(mode)];
  test.textContent = pickedColor.toUpperCase();



var $h1=document.querySelector("h1");
$h1.style.backgroundColor="#5008d0";




  var $span = document.querySelector("#message");
  $span.textContent = ""

  var button = document.querySelector("#reset1");
  button.textContent = "NEW COLORS"

  if (mode === 3) {

    for (var i = 3; i < cuadrado.length; i++) {

      cuadrado[i].style.display = "none";

    }

  }
  for (var i = 0; i < cuadrado.length; i++) {
    cuadrado[i].style.backgroundColor = colors[i]

  }
})
//boton easy
easy.addEventListener("click", function () {
  mode=3;
  hard.classList.remove("selected");
  easy.classList.add("selected");
  Reset(mode);
  test.textContent = pickedColor.toUpperCase();
  var $span = document.querySelector("#message");
  $span.textContent = ""



//
  var $h1=document.querySelector("h1");
  $h1.style.backgroundColor="#5008d0";
//

  for (var i = 3; i < cuadrado.length; i++) {
    colors[i]=generateRandomColor(mode);
    cuadrado[i].style.display = "none";


  }
  pickedColor=colors[pickColor(mode)];

 

})

//boton hard
hard.addEventListener("click", function () {
mode=6;
  easy.classList.remove("selected")
  hard.classList.add("selected")
  Reset(mode);
  test.textContent = pickedColor.toUpperCase();
  var $span = document.querySelector("#message");
  $span.textContent = ""

//
  var $h1=document.querySelector("h1");
  $h1.style.backgroundColor="#5008d0";

  //
})


console.log(colors);

function Reset(mode){
  colors=generateRandomColor(mode);
  pickedColor=colors[pickColor(mode)];
  console.log(colors);
 
  var button = document.querySelector("#reset1");
      button.textContent = "NEW COLORS"



  if (mode === 3) {
    pickedColor = colors[pickColor(mode)]
    for (var i = 3; i < cuadrado.length; i++) {

      cuadrado[i].style.display = "none";

    }

  }
else{
  pickedColor = colors[pickColor(mode)]
for (var i=0; i<cuadrado.length ; i++){

  cuadrado[i].style.display="block"
}

}

  for (var i = 0; i < cuadrado.length; i++) {
    cuadrado[i].style.backgroundColor = colors[i]

  }

}