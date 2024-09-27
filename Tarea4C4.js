const numeroA = Number(prompt(" Por favor, digitar el primer número"));
const numeroB = Number(prompt("Por favor, digitar el segundo número"));
if(numeroA < numeroB ){
document.write("el número menor es " ,numeroA);
}
else if(numeroA > numeroB ){
document.write("el número menor es " ,numeroB);
}    
else{
document.write("ambos números son iguales");
}   