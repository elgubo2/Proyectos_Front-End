
//temp
function test(data) {
    $('#temp').text(": " + data.main.temp);
    $('#temp_max').text(": " + data.main.temp_max);
    $('#temp_min').text(": " + data.main.temp_min);
    $('#descripcion').text(": " + data.weather[0].description);
    $('#velocidad').text(": " + data.wind.speed);

}
$.get('http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=95176c8edea30e33338e0eaddd53a916').success(test);
document.querySelector("p").innerHTML="<p>Buenos Aires</p>";

//botones
/*
$("#berlin").on("click", function () {

    $.get('http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=95176c8edea30e33338e0eaddd53a916').success(test);

})

$("#ny").on("click", function () {

    $.get('http://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=95176c8edea30e33338e0eaddd53a916').success(test);

})

$("#londres").on("click", function () {

    $.get('http://api.openweathermap.org/data/2.5/weather?q=Londres&appid=95176c8edea30e33338e0eaddd53a916').success(test);

})
*/



//buscador



$("#boton_buscar").on("click"||"onFocus", inputCiudad);


function inputCiudad() {

    var ciudad = document.getElementById("buscador").value;
if (ciudad==""){
    alert("Ingrese datos");
}

else{
//reemplazar mientras busca

    $("ul").html("<h2>Estamos buscando los datos</h2>")

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&appid=95176c8edea30e33338e0eaddd53a916').success(cargado).fail( function( jqXHR, textStatus, errorThrown ) {
        alert( 'Ciudad no encontrada' );
    });

}


function cargado(data){
    $("ul").html('<li>Temperatura actual<span id="temp"></span></li><li>Temperatura máxima<span id="temp_max"></span></li><li>Temperatura mínima<span id="temp_min"></span></li><li>Descripción de las condiciones actuales<span id="descripcion"></span></li><li>Velocidad del viento<span id="velocidad"></span></li>');

    test(data);
        
    document.getElementById("buscador").value="";

    document.getElementById("status").innerHTML=ciudad;

}

}






