const numberA = Number(prompt(" Por favor, ingrese el primer número"));
const numberB = Number(prompt("Por favor, ingrese el segundo número"));
const op = prompt("Por favor, ingrese la operación matematica que desea realizar(suma,resta,multiplicación o división)").toLowerCase() ;
if(op == "suma" ){
document.write("la suma de los números es " ,numberA + numberB);
}else if(op == "resta" ){
document.write("la resta de los números es " ,numberA - numberB);
}else if(op === "division" || "división" ){
document.write("la división de los números es " ,numberA / numberB);
}else if(op == "multiplicacion" || "multiplicación" ){
document.write("la multiplicación de los números es " ,numberA * numberB);
}
