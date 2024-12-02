/*/////////////////////////////////// DECLARACIONES INICIALES //////////////////////////////////////*/
      
      // Declaro variables globales en uso en todo el juego /////////////////////////////////////////////////////////////
      
      var gravedad = 1;                                                             //Variable que dice la fuerza de la gravedad. Esta variable hacemos que aumente de forma exponencial para hacer efecto gravedad
      var salto = -16;                                                              //Hacemos que el salto no sea tan fuerte restandole
      
      var desfase_global_x = 0;                                                     // Inicialmente el desfase es de 0
      
      var jugador = new Jugador();                                                  //Solo existe un jugador
      
      var misnpcs = [];                                                             //Aquí digo que hay un array de npc
      var balas = [];                                                               //Aquí digo que hay un array de balas
      var numeronpc = 12;                                                           //Defino el número de npc
      for(let i = 0;i<numeronpc;i++){                                               //Por cada numero que haya hasta el 12
        misnpcs[i] = new Npc();                                                     //Meto una nueva instancia de Npc
      }
      
      /*/////////////////////////////////// DECLARACIONES INICIALES //////////////////////////////////////*/
