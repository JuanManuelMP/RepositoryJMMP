const baseCuadrado = Number(prompt(" Por favor, digitar la longitud de la base del cuadrado"));
const altoCuadrado = Number(prompt("Por favor, digitar el altro del cuadrado"));
if(baseCuadrado === altoCuadrado ){
document.write("esto es un cuadrado");
}
else if(baseCuadrado > altoCuadrado ){
document.write("esto es un rectangulo horizontal");
}    
else if(baseCuadrado < altoCuadrado ){
document.write("esto es un rectangulo vertical");
}   