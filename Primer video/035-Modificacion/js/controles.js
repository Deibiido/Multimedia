// Controles para mover al jugador con las teclas del teclado ////////////////////////////////
      
      document.onkeydown = function(e){
      console.log(e)
        if(e.key == "ArrowUp" && jugador.cayendo == false){                                 //Si aprieto la flecha arriba y jugador no tiene cayendo
          jugador.y -= 5;                                                                   //Le añado y
          jugador.vy = salto;                                                               //Y digo que está saltando
          }
        if(e.key == "ArrowDown"){jugador.y += 5}                                            //Si aprieto flecha abajo le quito y
        if(e.key == "ArrowLeft"){jugador.x -= 5;jugador.direccion = "izquierda";}           //Si aprieto izquierda le resto x al jugador y le aplico el sprite mirando a la izquierda
        if(e.key == "ArrowRight"){jugador.x += 5;jugador.direccion = "derecha"}             //Si aprieto derecha le añado a la x y le aplico el sprite mirando a la derecha
        if(e.keyCode == 32){console.log("ok disparo");balas.push(new Bala());}              //Cuando aprieto la barra espaciadora creo una nueva bala
      }
      
      // Controles para mover al jugador con las teclas del teclado ////////////////////////////////
