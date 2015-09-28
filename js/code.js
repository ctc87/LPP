//hay que ver como creo el objeto para utilizar sus metodos
function cuadroPractica() {
   this.array_size = 9;
   this.images = new Array();
   this.images[0] = "./Index_files/0.png";
   this.images[1] = "./Index_files/1.png";
   this.images[2] = "./Index_files/2.png";
   this.images[3] = "./Index_files/3.png";
   this.images[4] = "./Index_files/4.png";
   this.images[5] = "./Index_files/5.png";
   this.images[6] = "./Index_files/6.png";
   this.images[7] = "./Index_files/7.png";
   this.images[8] = "./Index_files/8.png";
   this.abierto = false;
   this.transition_image = function(imgg) {
	if(!this.abierto) {
  		for (i = 0; i < this.array_size ; i++) {
    			setTimeout("document.getElementById('"+imgg+"').src = '" + this.images[i] + "'",  i * 75);
   		}
		this.abierto = true;
	}
   };

   this.des_transition_image =	function(imgg) {
		if(this.abierto) {
  			for (i = this.array_size; i>0 ;i--){
    				setTimeout("document.getElementById('"+imgg+"').src = '" + this.images[i-1] + "'",(this.array_size - i) * 50);
   			}
		this.abierto = false;
		}
   };
	
}

var x=1;
        var cuadro1 = new cuadroPractica();
        var cuadro2 = new cuadroPractica();
        var cuadro3 = new cuadroPractica();
        var cuadro4 = new cuadroPractica();
        var cuadro5 = new cuadroPractica();
        var cuadro6 = new cuadroPractica();
        var cuadro7 = new cuadroPractica();
        var cuadro8 = new cuadroPractica();
        var cuadro9 = new cuadroPractica();
        var cuadro10 = new cuadroPractica();
        var cuadro11 = new cuadroPractica();
        var cuadro12 = new cuadroPractica();






function tortuga_desplazard(){
  if (x==1){
    for (x = 1; x<window.innerWidth-55 ;x++){
      setTimeout("document.getElementById('turt').style.left = '" + x + "px'", x*3 );
    }
    x=window.innerWidth-55;
  }else if(x==window.innerWidth-55){
    for (x = window.innerWidth-55; x>1 ;x--){
    setTimeout("document.getElementById('turt').style.left = '" + x + "px'", ((window.innerWidth-55) - x)*3  );
   }
   x=1;
  }
}

function cont_ejec() {	
	setInterval('tortuga_desplazard()',(window.innerWidth-55)*3);	
}




  
 
