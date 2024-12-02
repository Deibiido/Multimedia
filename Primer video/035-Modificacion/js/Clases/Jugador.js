class Jugador{                                                                // Clase Jugador con sus variables
        constructor(){                                                        // Define las propiedades predeterminadas del jugador
          this.x = 256                                                        // El jugador empieza en la x 256
          this.y = 256;                                                       // El jugador empieza en la y 256
          this.vy = 0;  
          this.cayendo = true;                                                //Esto es para que no pueda realizar doble salto
          this.direccion = "izquierda"                                        //Dirección por defecto del sprite
          
        }
        dibuja(){                                                             // Esto lo hacemos xq tenemos la derecha e izquierda en el mismo sprite, así que le decimos de donde queremos que coga la imagen
          if(this.direccion == "izquierda"){                                  // Si la direccion es izquierda, toma desde 0 x 0 y a 35 x 35 y
            contexto.drawImage(imagenbueno, 
              0, 0, 35, 35,                                                   // Source: x, y, width, height (on the sprite sheet)
              this.x-desfase_global_x, this.y, 35, 35                         // Destination: x, y, width, height (on the canvas)
            );
          }else{                                                              // En caso contrario, toma desde 36x 36y al final
            contexto.drawImage(imagenbueno, 
              35, 0, 35, 35,                                                  // Source: x, y, width, height (on the sprite sheet)
              this.x-desfase_global_x, this.y, 35, 35                         // Destination: x, y, width, height (on the canvas)
            );
          }
        }
        mueve(){                                                              // Variables del movimiento del personaje
          if(this.cayendo == true){                                           //Si cayendo es verdad
            jugador.vy += gravedad;                                           //Aplica gravedad al jugador
            jugador.y += jugador.vy                                           // La posición del jugador se modifica
          }
          this.muere();
          this.colisionaPlataformas()
        }
        muere(){                                                              // Condición de muerte del personaje
          if(this.y > 512){                                                   //Si la Y es inferior a 512
            window.location = window.location;                                // Recarga la página web
          }
        }
        colisionaPlataformas(){                                               //Lo que esto hace es que si la opacidad del pixel que tiene debajo es inferior a 3 hace que no se caiga
          let pixel = contextoplataformas.getImageData(this.x-desfase_global_x,this.y+35,1,1)
          if(pixel.data[3] > 0){                                              // Para detectar si se cae o no
            this.cayendo = false;
          }else{
            this.cayendo = true;
          }
        }
      }
