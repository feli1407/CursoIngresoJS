/*Para una institución educativa se necesitan registrar los datos de 15 alumnos.
 Nos solicitan nombre, carrera , edad, sexo("f" o "m") y 
 modalidad("presencial", "a distancia" o "semi-presencial")y promedio general.
  Luego nos solicitan los siguientes informes: 
  a) La Carrera de la persona con mas promedio general. 
  b) Cuantos mayores de edad(más de 17) cursan presencial. 
  c) La cantidad de Mujeres que cursan a distancia o semi-presencial. 
  d) Cuantas personas adultas(mas de 40 años), tienen mas de 7 de promedio general. 
  e) El promedio de edad entre las mujeres que cursan a distancia.
 
function mostrar()
{
	let contador;
	let nombre;
	let carrera;
	let edad;
	let sexo;
	let modalidad;
	let promediogeneral;
	let promediogeneralmasalto;
	let carrerapromediomasalto;
	let contadormayoresdeedadpresencial;
	let personasmascuarentaconpromediomasdesiete;
	let contadormujeresdistosemi;
	let contadormujeresdist;
	let promedioedadmujeresdist;
	let acumuladoredadmujeresadistancia;

    acumuladoredadmujeresadistancia=0;
    promedioedadmujeresdist=0;
    contadormujeresdist=0;
    contadormujeresdistosemi=0;
    personasmascuarentaconpromediomasdesiete=0;
	contadormayoresdeedadpresencial=0;
    promediogeneralmasalto=0;
	contador=0;
	
	for(contador=0;contador<15;contador++)
	{
		nombre = prompt("ingrese nombre");
		while(isNaN(nombre) == false)
		{
			nombre = prompt("error, ingrese nombre");
		}

		carrera = prompt("ingrese carrera");
		while(isNaN(carrera) == false)
		{
			carrera = prompt("error, ingrese carrera");
		}

		edad = prompt("ingrese edad");
		edad = parseInt(edad);
		while(isNaN(edad) == true || edad > 120 || edad < 0)
		{
			edad = prompt("error, ingrese edad");
			edad = parseInt(edad);
		}

		promediogeneral = prompt("ingrese promedio general");
		promediogeneral = parseInt(edad);
		while(isNaN(promediogeneral) == true)
		{
			promediogeneral = prompt("error, ingrese promedio general");
			promediogeneral = parseInt(promediogeneral);
		}

		sexo = prompt("ingrese sexo");
		while(isNaN(sexo) == false || sexo != "f" && sexo != "m")
		{
			sexo = prompt("error, ingrese sexo");
		}

		modalidad = prompt("ingrese modalidad (presencial, a distancia o semipresencial)");
		while(isNaN(modalidad) == false || modalidad != "presencial" && modalidad != "a distancia" && modalidad != "semiprecencial")
		{
			modalidad = prompt("error, ingrese modalidad (presencial, a distancia o semipresencial)");
		}

		if(contador == 0)
		{
			promediogeneralmasalto = promediogeneral;
			carrerapromediomasalto = carrera;
		}
		else
		{
			if(promediogeneral > promediogeneralmasalto)
			{
				promediogeneralmasalto = promediogeneral;
				carrerapromediomasalto = carrera;
			}
		}

		if(edad > 17 && modalidad == "presencial")
		{
			contadormayoresdeedadpresencial++;
		}

		if(edad > 40 && promediogeneral >7)
		{
			personasmascuarentaconpromediomasdesiete++;
		}

		if(sexo == "f")
		{
			switch(modalidad)
			{
				case "a distancia":
					contadormujeresdistosemi++;
					contadormujeresdist++;
					acumuladoredadmujeresadistancia = acumuladoredadmujeresadistancia + edad;
					break;
				case "semipresencial":
					contadormujeresdistosemi++;
					break;

			}

		}

	}

promedioedadmujeresdist = acumuladoredadmujeresadistancia / contadormujeresdist;

alert("La Carrera de la persona con mas promedio general: "+carrerapromediomasalto);
alert("mayores de edad(más de 17) que cursan presencial: "+contadormayoresdeedadpresencial);
alert("La cantidad de Mujeres que cursan a distancia o semi-presencial: "+contadormujeresdistosemi);
alert("personas mayores de 40 con promedio + de 7: "+personasmascuarentaconpromediomasdesiete);
alert("El promedio de edad entre las mujeres que cursan a distancia: "+promedioedadmujeresdist);

}
*/
/*Casco Felipe
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
*/ 

function mostrar()
{

let tipodemascota;
let tipodepelaje;
let edad;
let nombre;
let raza;
let peso;
let estadoclinico;
let temperaturacorporal;
let respuesta;
let pesoperromaspesado;
let nombreperromaspesado;
let contadormascotas;
let cantidaddeenfermos;
let porcentajeenfermos;
let ultimonombreotracosa;
let razasinpeloconmenortemperatura;
let flagsinpelo;
let temperaturamenorsinpelo;
let acumuladortemperaturagato;
let acumuladortemperaturaperro;
let acumuladortemperaturaotracosa;
let contadorgato;
let contadorperro;
let contadorotracosa;
let promediotemperaturagato;
let promediotemperaturaperro;
let promediotemperaturaotracosa;
let mensajepromediotemperatura;
let porcentajegatoyperro;
let cantidadinternado;
let cantidadadopcion;
let acumuladorpeso;
let promediodekilos;
let gatosinpelomasliviano;
let nombregatosinpelomasliviano;
let razagatosinpelomasliviano;

promediodekilos=0;
acumuladorpeso=0;
cantidadinternado=0;
cantidadadopcion=0;
promediotemperaturagato=0;
promediotemperaturaperro=0;
promediotemperaturaotracosa=0;
contadorgato=0;
contadorperro=0;
contadorotracosa=0;
acumuladortemperaturagato=0;
acumuladortemperaturaperro=0;
acumuladortemperaturaotracosa=0;
temperaturamenorsinpelo=0;
flagsinpelo=0;
cantidaddeenfermos=0;
contadormascotas=0;
nombreperromaspesado=0;
pesoperromaspesado=0;


do
{
	tipodemascota = prompt("ingrese tipo de mascota (gato, perro u otra cosa)");
	while(isNaN(tipodemascota) == false || tipodemascota != "gato" && tipodemascota !="perro" && tipodemascota != "otra cosa")
	{
		tipodemascota = prompt("error, ingrese tipo de mascota (gato, perro u otra cosa)");
	}

	tipodepelaje = prompt("ingrese tipo de pelaje (corto, largo o sin pelo)");
	while(isNaN(tipodepelaje) == false || tipodepelaje != "corto" && tipodepelaje !="largo" && tipodepelaje != "sin pelo")
	{
		tipodepelaje = prompt("error, ingrese tipo de pelaje (corto, largo o sin pelo)");
	}

	nombre = prompt("ingrese nombre");
	while(isNaN(nombre) == false)
	{
		nombre = prompt("error, ingrese nombre");
	}

	raza = prompt("ingrese raza");
	while(isNaN(raza) == false)
	{
		raza = prompt("error, ingrese raza");
	}

	edad = prompt("ingrese edad");
	edad = parseInt(edad);
	while(isNaN(edad) == true || edad < 0 || edad >100)
	{
		edad = prompt("error, ingrese edad");
		edad = parseInt(edad);
	}

	peso = prompt("ingrese peso");
	peso = parseInt(peso);
	while(isNaN(peso) == true || peso < 0 || peso >100)
	{
		peso = prompt("error, ingrese peso");
		peso = parseInt(peso);
	}

	estadoclinico = prompt("ingrese estado clinico (enfermo,internado o adopcion)");
	while(isNaN(estadoclinico) == false || estadoclinico != "enfermo" && estadoclinico != "internado" && estadoclinico != "adopcion")
	{
		estadoclinico = prompt("error, ingrese estado clinico (enfermo,internado o adopcion)");
	}

	temperaturacorporal = prompt("ingrese temperatura corporal");
	temperaturacorporal = parseInt(temperaturacorporal);
	while(isNaN(temperaturacorporal) == true || temperaturacorporal < 0 || temperaturacorporal > 60)
	{
		temperaturacorporal = prompt("error, ingrese temperatura corporal");
		temperaturacorporal = parseInt(temperaturacorporal);
	}

	switch(tipodemascota)
	{
		case "perro":
			if(contadorperro == 0)
			{
				pesoperromaspesado = peso;
				nombreperromaspesado = nombre;
				acumuladortemperaturaperro = acumuladortemperaturaperro + temperaturacorporal;
				contadorperro++;
				contadormascotas++;
			}
			else
			{
				if(peso > pesoperromaspesado)
				{
					pesoperromaspesado = peso;
					nombreperromaspesado = nombre;
					acumuladortemperaturaperro = acumuladortemperaturaperro + temperaturacorporal;
					contadorperro++;
					contadormascotas++;
				}
				else
				{
					acumuladortemperaturaperro = acumuladortemperaturaperro + temperaturacorporal;
					contadorperro++;
					contadormascotas++;
				}
			}
			break;
		case "gato":
				contadorgato++;
				contadormascotas++;
				acumuladortemperaturagato = acumuladortemperaturagato + temperaturacorporal;
			break;
		case "otra cosa":
				contadorotracosa++;
				contadormascotas++;
				acumuladortemperaturaotracosa = acumuladortemperaturaotracosa + temperaturacorporal;
			break;
				
        
	}

	if(estadoclinico == "enfermo")
	{
		cantidaddeenfermos++;
	}
	else if(estadoclinico == "internado")
	{
		cantidadinternado++;
	}
	else if(estadoclinico == "adopcion")
	{
		cantidadadopcion++;
	}


	switch(tipodepelaje)
	{
		case "corto":
			break;
		case "largo":
			break;
		case "sin pelo":
			if(flagsinpelo == 0)
			{
				temperaturamenorsinpelo = temperaturacorporal;
				razasinpeloconmenortemperatura = raza;
				if(tipodemascota == "gato")
				{
				    nombregatosinpelomasliviano = nombre;
				    gatosinpelomasliviano = peso;
				    razagatosinpelomasliviano = raza;
				}
				flagsinpelo=1;
			}
			else
			{
				if(temperaturacorporal < temperaturamenorsinpelo)
				{
					temperaturamenorsinpelo = temperaturacorporal;
					razasinpeloconmenortemperatura = raza;
				}
				if(tipodemascota == "gato" && peso < gatosinpelomasliviano)
				{
					nombregatosinpelomasliviano = nombre;
				    gatosinpelomasliviano = peso;
				    razagatosinpelomasliviano = raza;
				}
				
			}
			break;		
	}

acumuladorpeso = acumuladorpeso + peso;

respuesta = prompt("quiere ingresar otra mascota? (responda con si o no)");
}while(respuesta == "si");

porcentajeenfermos = (100 * cantidaddeenfermos) / contadormascotas;

promediotemperaturagato = acumuladortemperaturagato / contadorgato;
promediotemperaturaperro = acumuladortemperaturaperro / contadorgato;
promediotemperaturaotracosa = acumuladortemperaturaotracosa / contadorotracosa;

if(promediotemperaturagato > promediotemperaturaotracosa && promediotemperaturagato > promediotemperaturaperro)
{
	mensajepromediotemperatura = "la mascota que tiene el mayor promedio de temperatura corporal es el gato";
}
else if(promediotemperaturaperro > promediotemperaturaotracosa && promediotemperaturaperro > promediotemperaturagato)
{
	mensajepromediotemperatura = "la mascota que tiene el mayor promedio de temperatura corporal es el perro";
}
else if(promediotemperaturaotracosa > promediotemperaturaperro && promediotemperaturaotracosa > promediotemperaturagato)
{
	mensajepromediotemperatura = "la mascota que tiene el mayor promedio de temperatura corporal es otra cosa";
}

porcentajegatoyperro = ((contadorgato + contadorperro) * 100) / contadormascotas;

if(cantidadadopcion < cantidaddeenfermos && cantidadadopcion < cantidadinternado)
{
	alert("el estado clinico que tiene la menor cantidad de mascotas es adopcion");
}
else if(cantidadinternado < cantidaddeenfermos && cantidadinternado < cantidadadopcion)
{
	alert("el estado clinico que tiene la menor cantidad de mascotas es internado");
}
else if(cantidaddeenfermos < cantidadinternado && cantidaddeenfermos < cantidadadopcion)
{
	alert("el estado clinico que tiene la menor cantidad de mascotas es enfermo");
}

promediodekilos = acumuladorpeso / contadormascotas;

if(contadorperro>0)
{
	alert("el perro mas pesado es: "+nombreperromaspesado);
}
if(cantidaddeenfermos>0)
{
	alert("El porcentaje de enfermos sobre el total de mascotas es: "+porcentajeenfermos);
}
if(contadorotracosa>0)
{
	alert("El nombre de la ultima mascota de tipo otra cosa es: "+ultimonombreotracosa);
}
if(flagsinpelo>0)
{
	alert("El animal sin pelo con menor temperatura corporal es: "+razasinpeloconmenortemperatura);
}

alert(mensajepromediotemperatura);

if(contadorgato>0 && contadorperro>0)
{
	alert("Sumando gatos y perros son el "+porcentajegatoyperro+"del total de mascotas");
}

alert("el promedio de kilos es: "+promediodekilos);

if(flagsinpelo>0 && contadorgato>0)
{
	alert("el gato sin pelo mas liviano se llama: "+nombregatosinpelomasliviano+" y es de la raza: "+razagatosinpelomasliviano);
}

}
