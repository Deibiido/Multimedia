var temporizador = setTimeout("bucle()",1000);
      
      
      function bucle(){                                                             //Esto lo hacemos para que el nivel avance, no sea estático
        if(jugador.x+desfase_global_x > 400){                                       //Si la x del jugador aumenta más que 400
          desfase_global_x += 2                                                     //Mueve todo a la izquierda
        }
        if(jugador.x+desfase_global_x < 120){                                       //Si la x del jugador llega cerca de x 120
          desfase_global_x -=2                                                      //Desplazate a la derecha
        }
        
        contexto.clearRect(0,0,512,512);                                            // Limpio el lienzo 1
        contexto2.clearRect(0,0,512,512);                                           // Limpio el lienzo 2
        
        contextoplataformas.clearRect(0,0,512,512);                                 // Esto es para que conforme vaya avanzando el nivel se limpien las plataformas antiguas
        
        contextoplataformas.drawImage(imagennivel,0-desfase_global_x,0,2048,512)    // Y ahora pinto las nuevas
        
        for(let i = 0;i<misnpcs.length;i++){                                        // Con esto movemos a todos los npc junto a sus metodos
          misnpcs[i].mueve()
          misnpcs[i].rebota();
          misnpcs[i].dibuja();
        }
        
        for(let i = 0;i<balas.length;i++){                                          // Hacemos lo mismo con las balas
          balas[i].mueve()                                                          //Cada bala se mueve de forma independiente
          balas[i].dibuja();                                                        //Dibujamos la bala en el lienzo
        }
        
                                                                                    //Esto es por si alguna bala choca con un npc
                                                                                    //Que lo borre del lienzo
        for(let i = 0;i<balas.length;i++){                                          // Para cada una de las balas
          for(let j = 0;j<misnpcs.length;j++){                                      // Y a la vez para cada uno de los npc
            if(calculateDistance(                   
              balas[i].x, 
              balas[i].y, 
              misnpcs[j].x, 
              misnpcs[j].y                                                          //Calculo la distancia de la x e y de las balas y npcs
            )  < 20){                                                               // Si la distancia es menor que 20 pixeles                                          
              misnpcs.splice(j,1)                                                   // Elimino un npc y no vuelve a aparecer
            }
          }
        }
        
        jugador.mueve();                                              
        jugador.dibuja();                                                           //Dibujamos al protagonista
        
        var datos = contexto.getImageData(jugador.x,jugador.y,1,1).data;            // Mediante la siguiente linea soy capaz de obtener un array con los componentes de color de un pixel
        var alpha = datos[3];                                                       // El índice 3 es la transparencia
        if(alpha == 255){
          window.location = window.location                                         // Esto es recargar la página, lo que viene a querer decir que has perdido
        }
        clearTimeout(temporizador);
        temporizador = setTimeout("bucle()",30);
      }
