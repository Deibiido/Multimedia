class Bala{
        constructor(){
          this.x = jugador.x;                               // La bala sale de la x del jugador
          this.y = jugador.y;                               // La bala sale de la y del jugador
          this.vx = 10;                                     // Velocidad a mayor numero más velocidad
          if(jugador.direccion == "izquierda"){             // Si el jugador va hacia la izquierda
            this.direccion = -1                             // En ese caso la velociad de la bala es negativa, es decir, la bala recorre la x en negativo
          }else{                                            // Si el personaje va hacia la derecha
            this.direccion = 1                              // En ese caso la velocidad es positiva, es decir, la bala recorre la x en positivo
          }
        }
        mueve(){                                            // Método que mueve la bala
          this.x += this.direccion*this.vx                  // Actualiza su posición
        }
        dibuja(){                                           // Lo que dibuja la bala
          contexto.beginPath()
          contexto.arc(this.x-desfase_global_x,this.y,10,0,Math.PI*2)
          contexto.fill()
        }
      }
