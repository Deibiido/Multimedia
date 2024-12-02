class Npc{
                                                                    // Función que se ejecuta cuando se instancia el objeto
        constructor(){
          this.x = Math.random()*2048;                              // Se le da una posición entre 0 y 512 en x
          this.y = Math.random()*512;                               // Se le da una posición entre 0 y 512 en y
          this.angulo = Math.random()*Math.PI*2                     // Se le da  un ángulo entre 0 y 2*PI radianes
          this.vy = 0;
        }
                                                                    // Este es un método para que se detecte la colisión con las paredes y rebote
        rebota(){
          /* en el caso de que el objeto esté fuera de los límites, 
          fuerzo a traerlo dentro de los límites
          y además le pongo 180 grados al ángulo */
          if(this.x < 0){this.x = 10;this.angulo += Math.PI;}       //Si llega a x 0 dale la vuelta 
          if(this.x > 512){this.x = 502;this.angulo += Math.PI;}    //Si supera 512 x dale la vuelta 
          if(this.y < 0){this.y = 0;this.angulo += Math.PI;}        //Si llega a y 0 dale la vuelta 
          if(this.y > 512){this.y = 502;this.angulo += Math.PI;}    //Si supera 512 y dale la vuelta 
        }
                                                                    
        mueve(){                                                    // Este método define el movimiento de la caja
          this.x += Math.cos(this.angulo);
          this.y += Math.sin(this.angulo);
        }
                                                                    // Este método es el encargado de dibujar el Npc
        dibuja(){
          contexto.drawImage(imagenmalo,this.x-desfase_global_x,this.y)
        }
      }
