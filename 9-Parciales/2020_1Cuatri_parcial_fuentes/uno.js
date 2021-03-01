/*	
Debemos realizar la carga de 5(cinco) productos de prevención de contagio, 
de cada una debo obtener los siguientes datos: 
el tipo (validar "barbijo" , "jabón" o "alcohol") , 
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
la Marca y el fabricante. 
Se debe Informar al usuario lo siguiente:

a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra 
c) Cuántas unidades de jabones hay en total 
*/
function mostrar()
{
let contadordevueltas;
let tipoingresado;
let precioingresado;
let cantidaddeunidades;
let marcaingresada;
let fabricanteingresado;
let alcoholmasbarato;
let cantidaddeunidadesalcoholbarato;
let fabricantealcoholbarato;
//let flagprimeralcohol;
let contadordealcohol;
let contadordebarbijo;
let contadordejabon;
let acumuladordealcohol;
let acumuladordebarbijo;
let acumuladordejabon;
let promedio;
let mensaje;

promedio=0;
contadordealcohol=0;
contadordebarbijo=0;
contadordejabon=0;
acumuladordealcohol=0;
acumuladordebarbijo=0;
acumuladordejabon=0;
flagprimeralcohol=true;
contadordevueltas=0;

while(contadordevueltas<5)
{
tipoingresado = prompt("ingrese tipo");
    while(isNaN(tipoingresado) == false || tipoingresado!="barbijo" && tipoingresado!="jabon" && tipoingresado!="alcohol")
    {
		tipoingresado = prompt("Error, ingrese tipo");
    }

precioingresado = prompt("ingrese precio");
precioingresado = parseInt(precioingresado);
    while(isNaN(precioingresado) == true || precioingresado<100 || precioingresado>300)
	{
		precioingresado = prompt("Error, ingrese precio");
		precioingresado = parseInt(precioingresado);
	}

cantidaddeunidades = prompt("ingrese cantidad");
cantidaddeunidades = parseInt(cantidaddeunidades);
    while(isNaN(cantidaddeunidades) == true || cantidaddeunidades<=0 || cantidaddeunidades>1000)
	{
		cantidaddeunidades = prompt("ingrese cantidad");
		cantidaddeunidades = parseInt(cantidaddeunidades);
	}

marcaingresada = prompt("ingrese marca");
    while(isNaN(marcaingresada) == false)
    {
		marcaingresada = prompt("Error, ingrese marca");
    }

fabricanteingresado = prompt("ingrese fabricante");
    while(isNaN(fabricanteingresado) == false)
    {
		fabricanteingresado = prompt("Error, ingrese fabricante");
    }

//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

if(tipoingresado == "alcohol" )
{
	//if(flagprimeralcohol == true)
	if(contadordealcohol == 0)
	{
		precioingresado = alcoholmasbarato;
		cantidaddeunidadesalcoholbarato = cantidaddeunidades;
		fabricantealcoholbarato = fabricanteingresado;
		//flagprimeralcohol = false;
	}
	else
	{
		if(precioingresado<alcoholmasbarato)
		{
			precioingresado = alcoholmasbarato;
			cantidaddeunidadesalcoholbarato = cantidaddeunidades;
		    fabricantealcoholbarato = fabricanteingresado;
		}
	}
}

//b) Del tipo con mas unidades, el promedio por compra
switch(tipoingresado)
{
	case "alcohol":
		contadordealcohol++;
		acumuladordealcohol = acumuladordealcohol + cantidaddeunidades;
		break;
	case "jabon":
		contadordejabon++;
		acumuladordejabon = acumuladordejabon + cantidaddeunidades;
		break;
	case "barbijos":
		contadordealcohol++;
		acumuladordealcohol = acumuladordealcohol + cantidaddeunidades;
		break;	
}

contadordevueltas++;
}

if(acumuladordealcohol>acumuladordejabon && acumuladordealcohol>acumuladordebarbijo)
{
    promedio = acumuladordealcohol / contadordealcohol;
    mensaje = "el promedio por compra de alcohol es: "+promedio;
}
else if(acumuladordejabon>acumuladordealcohol && acumuladordejabon>acumuladordebarbijo)
{
	promedio = acumuladordejabon/contadordejabon;
    mensaje = "el promedio por compra de jabon es: "+promedio;
}
else if(acumuladordebarbijo>acumuladordealcohol && acumuladordebarbijo>acumuladordejabon)
{
	promedio = acumuladordebarbijo / contadordebarbijo;
	mensaje = "el promedio por compra de jabon es: "+promedio;
}

//c) Cuántas unidades de jabones hay en total
alert("hay "+acumuladordejabon+" unidades de jabon en total.");
alert(mensaje);
alert("la cantidad de unidades del alcohol mas barato: "+cantidaddeunidades+ " y el fabricante es: "+fabricanteingresado);

}
