/*//////////////////////////////IMAGENES////////////////////////////////*/
      
      var imagenbueno = new Image();                                          //Creo una variable llamada ...
      imagenbueno.src = "./img/spritesheetbueno.png"                          //Y quiero que sea esta imagen
      var imagenmalo = new Image()                                            //Creo una variable llamada ...
      imagenmalo.src = "./img/pikamalo.png"                                   //Y quiero que sea esta imagen
      
      
      var imagenfondo = new Image();                                          //Creo una variable llamada ...
      imagenfondo.src = "./img/paleta.png"                                    //Y quiero que sea esta imagen
      imagenfondo.onload = function(){                                        // Cuando la imagen de las plataformas ha cargado
        contextofondo.drawImage(imagenfondo,0,0)                              // La pinto sobre el lienzo
      }
      
      var imagennivel = new Image();                                          //Creo una variable llamada ...
      imagennivel.src = "./img/nivel1.png"                                    //Y quiero que sea esta imagen
      imagennivel.onload = function(){                                        //Y que tenga esta función
        contextoplataformas.imageSmoothingEnabled = false;
        console.log("imagen cargada")
        contextoplataformas.drawImage(imagennivel,0,0,2048,512)               //Y que me la dibujes desde x 0 a x 2048
      }
      
      /*//////////////////////////////IMAGENES////////////////////////////////*/
