/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov,direccion/*, parametro/s extra de ZombieConductor*/) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov, direccion);
}
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

ZombieConductor.prototype.mover = function(){
	if (this.direccion === "horizontal") {
		if (this.x < 850) {
	    	this.x += this.velocidad;
		} else if(this.x >= 850) {
		    this.x = 0;
		}
	}
	
	if (this.direccion === "vertical") {
		if (this.y < 478) {
	    	this.y += this.velocidad;
		} else if(this.y >= 478) {
		    this.y = 0;

		}
	}
  
};
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */



/* Completar creacion del ZombieConductor */

/* Completar metodos para el movimiento y el ataque */
