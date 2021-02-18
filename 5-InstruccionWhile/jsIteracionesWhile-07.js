/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numero;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta == "si")
	{
    numero = parseInt(prompt("ingrese un numero"));
	acumulador = acumulador + numero;
	contador = contador + 1;
	respuesta = prompt("ingrese si, si desea seguir agregando numeros, ingrese no en caso de no querer agregar numeros");
	}

    document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN