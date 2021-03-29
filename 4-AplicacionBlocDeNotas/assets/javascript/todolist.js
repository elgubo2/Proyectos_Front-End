
  // Agregar el contenido del input a la lista
$("input[type='text']").keypress(function(event){
    //filtrar para que sólo se active cuando aprietan Enter
    if(event.key == "Enter") {
      $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ $(this).val() + "</li>");
      // se borra el contenido del input
      $(this).val("");
      event.stopPropagation();
    }
  });

  // Añadir el efecto de tachado a los items completados
  $("ul").on("click", "li", function(){
    $(this).toggleClass("completado")
  });
  // Borrar los items completados
  $("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
    event.stopPropagation();
  });


  $("h1").click(function(){
    $("input").slideToggle()
   })


   //agrego un comentario mio, y otrooo

   //listo 2 

   //3333