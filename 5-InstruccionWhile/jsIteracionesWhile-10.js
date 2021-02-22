/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	 
	let respuesta;
	let numeroingresado;
	let sumanegativos;
	let sumapositivos;
	let contadorpos;
	let contadorneg;
	let cantidaddeceros;
	let cantidaddenumpares;
	let promediopos;
	let promedioneg;
	let difposyneg;
    
	numeroingresado = 0;
	sumanegativos = 0;
	sumapositivos = 0;
	contadorpos = 0;
	contadorneg = 0;
	cantidaddeceros = 0;
	cantidaddenumpares = 0; 

	respuesta="si";

	while(respuesta=="si")
	{
        numeroingresado = parseInt(prompt("ingrese un numero"));

		if(numeroingresado>0)//positivo
		{
			sumapositivos = sumapositivos + numeroingresado;
			contadorpos = contadorpos + 1;
			promediopos = sumapositivos / contadorpos;
		}
		else if(numeroingresado<0)
		{
			sumanegativos = sumanegativos+numeroingresado;
			contadorneg = contadorneg + 1;
			promedioneg = sumanegativos / contadorneg;
		}
		if(numeroingresado%2==0 && numeroingresado != 0)
		{
			cantidaddenumpares = cantidaddenumpares + 1;
		}
		else if(numeroingresado == 0)
		{
			cantidaddeceros = cantidaddeceros + 1;
		}

        difposyneg = sumapositivos - sumanegativos;

		respuesta=prompt("desea continuar?");
	}

	document.write("la suma de negativos es :"+sumanegativos+"<br>");
	document.write("la suma de positivos es :"+sumapositivos+"<br>");
	document.write("la cantidad de negativos es :"+contadorneg+"<br>");
	document.write("la cantidad de positivos es :"+contadorpos+"<br>");
	document.write("el promedio negativo es :"+promedioneg+"<br>");
	document.write("el promedio positivo es :"+promediopos+"<br>");
	document.write("la diferencia entre positivos y negativos es :"+difposyneg+"<br>");
	document.write("la cantidad de numeros pares es :"+cantidaddenumpares+"<br>");
	document.write("la cantidad de ceros es :"+cantidaddeceros+"<br>");
}