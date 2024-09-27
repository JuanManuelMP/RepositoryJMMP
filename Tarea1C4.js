const edadUsuario = Number(prompt("Escriba su edad"));
const ingreso = Number(prompt("ingrese sus ingresos mensuales"));
if(edadUsuario >= 16 && ingreso >= 1000){
document.write("Usted tiene que tributar");
}
else if(ingreso < 1000 && edadUsuario >= 16){
    document.write("Su edad está en regla, pero sus ingresos son menores a 1000€, no es necesario tributar");
}
else if(ingreso >= 1000 && edadUsuario < 16){
    document.write("Sus ingresos son mayores a 1000€ pero su edad no es suficiente, no es necesario tributar");
}
else document.write ("Ni su edad, ni sus ingresos le permiten tributar");


