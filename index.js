let molino ={
  
/*Paso 1 - Triturar los granos con el molino cónico integrado. La función de Presionar y Mantener ofrece café recién molido para cada taza EN ESTE CASO LO REQUERIDO ES 22gr.*/

btn_moler:function(){

  if(cantidad_cafe > 22){
    console.log("error mucho cafe")
  }else{
  console.log("Moliendo Cafesito");
  }
},

btn_encender_cafetera:function(){
 alert("Encendida")
}
}


let entradas1 = Object.entries(molino);
console.log(entradas1);



/*LLENAR EL TANQUE DE AGUA HASTA QUE ESTE  LLENO POR ENCIMA DEL NIVEL MINIMO*/

let tanque_de_agua ={

  llenar_tanque:function(){
    //1 litro
    var  llenito =  1;
    if (tanque_agua === llenito){
       console.log("Listo")
    }else{
      alert("Necesitamos agua hey");
    }
  },
}
let ent_agua = Object.entries(tanque_de_agua);
console.log(ent_agua);

/*Paso 3: Extraer un espresso corto. La función automática garantiza que la cantidad precisa de café se vierta con solo tocar un botón. */
let filtros = {

extraer_cafésito:function(){
alert("Bien echo ")
},
//
 Texturizar_la_leche:function(){
//LLENAR LA JARRA CON LECHE PARA TEXTURIZAR LA Texturizar_la_leche
},

fun_vapor:function(){
  /*EL TUBO DE VALOR DEBE ESTAR EN LA POSICION DE RELOJ 12 Y 3 Y 1 DEDO DE ANCHO DESDE EL BORDE */

}

}
let fil = Object.entries(filtros);
console.log(fil);



let Cafetera = {

 molino:molino,
 tanque_de_agua:tanque_de_agua,
 filtros:filtros,

Material:"Acero inoxidable",
Marca:"Oster®",
Color:"Brusched Steel",
Capacidad:"1 Tazas",
Comando_de_voz: 	"Pantalla táctil"

}
let holis = Object.entries(Cafetera);
console.log(holis);
  

