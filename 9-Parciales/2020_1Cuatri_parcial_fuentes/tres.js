/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero",
 "casado" o "viudo")y temperatura corporal.
a)El nombre de la persona con mas temperatura.
b)Cuantos mayores de edad estan viudos
c)La cantidad de hombres que hay solteros  o viudos.
d)cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e)El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
let nombre;
let edad; 
let sexo;
let estadocivil;
let temperaturacorporal;
let respuesta;
let contadortemperatura;
let temperaturamasalta;
let nombreconmastemperatura;
let acumuladorviudosmayoreshombres;
let acumuladorviudosmayoresmujeres;
let viudosmayores;
let hombresviudos;
let hombressolteros;
let personasterceraedadconmasde38;
let acumuladoredadsolteros;
let promedioedadsolteros;

acumuladoredadsolteros=0;
personasterceraedadconmasde38=0;
hombressolteros=0;
hombresviudos=0;
acumuladorviudosmayoresmujeres=0;
acumuladorviudosmayoreshombres=0;
temperaturamasalta=0;
contadortemperatura=0;

do
{
nombre=prompt("ingrese un nombre");
while(isNaN(nombre) == false)
{
	nombre=prompt("error, ingrese un nombre");
}

edad=prompt("ingrese edad");
edad=parseInt(edad);
while(isNaN(edad) == true || edad < 0 || edad > 130)
{
	edad=prompt("error, ingrese edad");
	edad=parseInt(edad);
}

sexo=prompt("ingrese sexo");
while(isNaN(sexo) == false || sexo != "f" && sexo != "m")
{
	sexo=prompt("error, ingrese sexo");
}

estadocivil=prompt("ingrese estado civil");
while(isNaN(estadocivil) == false || estadocivil != "soltero" && estadocivil != "casado" && estadocivil != "viudo")
{
	estadocivil=prompt("error, ingrese estado civil");
}

temperaturacorporal=prompt("ingrese temperatura corporal");
temperaturacorporal=parseInt(temperaturacorporal);
while(isNaN(temperaturacorporal) == true || temperaturacorporal < 30 || temperaturacorporal > 48)
{
	temperaturacorporal=prompt("error, ingrese temperatura corporal");
	temperaturacorporal=parseInt(temperaturacorporal);
}

if(contadortemperatura == 0)
{
	temperaturamasalta=temperaturacorporal;
	contadortemperatura=1;
	nombreconmastemperatura=nombre;
}
else
{
	if(temperaturacorporal>temperaturamasalta)
	{
		temperaturamasalta=temperaturacorporal;
		nombreconmastemperatura=nombre;
	}
}

switch(sexo)
{
	case "m":
	if(estadocivil == "viudo")
	{
		if(edad>18)
		{
			acumuladorviudosmayoreshombres++;
			hombresviudos++;
		}
		else
		{
			hombresviudos++;
		}
	}
	if(estadocivil == "soltero")
	{
		acumuladoredadsolteros=acumuladoredadsolteros+edad;
		hombressolteros++
	}
	if(edad>60 && temperaturacorporal > 38)
	{
		personasterceraedadconmasde38++;
	}
	break;
	case "f":
	if(estadocivil == "viudo" && edad>18)
	{
		acumuladorviudosmayoresmujeres++;
	}
	if(edad>60 && temperaturacorporal > 38)
	{
		personasterceraedadconmasde38++;
	}
	break;
}

respuesta=prompt("desea ingresar otra persona?");
}while(respuesta == "si");

viudosmayores=acumuladorviudosmayoresmujeres+acumuladorviudosmayoreshombres;
promedioedadsolteros=acumuladoredadsolteros/hombressolteros;

alert("la persona con mas temperatura es: "+nombreconmastemperatura+" y tiene: "+temperaturamasalta+" grados");
alert("hay "+viudosmayores+" viudos mayores de edad");
alert("hay "+hombressolteros+" hombres solteros y "+hombresviudos+" hombres viudos");
alert("hay "+personasterceraedadconmasde38+" personas de tercera edad con temperatura mayor a 38");
alert("el promedio de edad de hombres solteros es: "+promedioedadsolteros);

}
