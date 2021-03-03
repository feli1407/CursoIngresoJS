/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero",
 "casado" o "viudo")y temperatura corporal.
a)El nombre de la persona con mas temperatura.
b)Cuantos mayores de edad estan viudos
c)La cantidad de hombres que hay solteros  o viudos.
d)cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e)El promedio de edad entre los hombres solteros.

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
*/
/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") estado civil("soltero",
 "casado" o "viudo")y temperatura corporal.
a)El nombre de la persona con mas temperatura.
b)Cuantos mayores de edad estan viudos
c)La cantidad de hombres que hay solteros o viudos.
d)cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e)El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
let nombre;
let sexo;
let edad;
let estadocivil;
let temperaturacorporal;
let respuesta;
let flagtemperatura;
let personaconmastemperatura;
let temperaturamasalta;
let contadormayoresdeedadviudos;
let cantidadahombresolteroviudo;
let contadormas60conmasde38detemperatura;
let acumuladoredadsolteros;
let cantidadsolteros;
let promedioedadhombresoltero;

cantidadsolteros=0;
acumuladoredadsolteros=0;
contadormas60conmasde38detemperatura=0;
cantidadahombresolteroviudo=0;
contadormayoresdeedadviudos=0;
temperaturamasalta=0;
flagtemperatura=0;

do
{
	nombre=prompt("ingrese nombre del pasajero");
	while(isNaN(nombre) == false)
	{
		nombre=prompt("error, ingrese nombre del pasajero");
	}

	edad=prompt("ingrese edad");
	while(isNaN(edad) == true || edad < 0 || edad > 130)
	{
		edad=prompt("error, ingrese edad");
	}

	sexo=prompt("ingrese sexo del pasajero (f o m)");
	while(isNaN(sexo) == false || sexo != "f" && sexo != "m")
	{
		sexo=prompt("error, ingrese sexo del pasajero");
	}
	
	estadocivil=prompt("ingrese estadocivil del pasajero (soltero, casado o viudo)");
	while(isNaN(estadocivil) == false || estadocivil != "soltero" && estadocivil != "casado" && estadocivil != "viudo")
	{
		estadocivil=prompt("error, ingrese estadocivil del pasajero");
	}

	temperaturacorporal=prompt("ingrese la temperatura corporal del pasajero");
	while(isNaN(temperaturacorporal) == true || temperaturacorporal < 30 || temperaturacorporal > 45)
	{
		temperaturacorporal=prompt("error, ingrese la temperatura croporal del pasajero");
	}

if(flagtemperatura == 0)
{
	temperaturamasalta=temperaturacorporal;
	personaconmastemperatura=nombre;
	flagtemperatura=1;
}
else
{
	if(temperaturacorporal>temperaturamasalta)
	{
		temperaturamasalta=temperaturacorporal;
		personaconmastemperatura=nombre;
	}
}

if(edad>18 && estadocivil == "viudo")
{
	contadormayoresdeedadviudos++;
}
else if(edad>60 && temperaturacorporal>38)
{
	contadormas60conmasde38detemperatura++;
}


switch(sexo)
{
	case "m":
		if(estadocivil == "soltero")
		{
			acumuladoredadsolteros=acumuladoredadsolteros+edad;
			cantidadsolteros++;
			cantidadahombresolteroviudo++;
		}
		else if(estadocivil == "viudo")
		{
			cantidadahombresolteroviudo++;
		}
		break;
}
	
	respuesta=prompt("quiere seguir ingresando pasajeros? (si o no)");
}while(respuesta == "si");

alert("el nombre de la persona con mas temperatura es: "+personaconmastemperatura);

if(contadormayoresdeedadviudos>0)
{
	alert(contadormayoresdeedadviudos+" mayores de edad estan viudos");
}

if(cantidadahombresolteroviudo>0)
{
	alert("la cantidad de hombres que hay solteros o viudos es: "+cantidadahombresolteroviudo);
}

if(contadormas60conmasde38detemperatura>0)
{
	alert("hay "+contadormas60conmasde38detemperatura+" personas de tercera edad con mas de 38 de temperatura");
}

if(cantidadsolteros>0)
{
	promedioedadhombresoltero=acumuladoredadsolteros/cantidadsolteros;
	alert("el promedio de edad de los hombres solteros es: "+promedioedadhombresoltero);
}
}