/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	let respuesta;
	let numeros;
	let sumapositivos;
	let multiplicacionnegativos;
	let flag; //se usa para controlar

	flag=0;
	sumapositivos=0;
	multiplicacionnegativos=1;
	respuesta="si";
//pongo que respuesta es si porque sino no entra al while, podria usar do while para no ponerlo
    while(respuesta == "si")
	{
		numeros = parseInt(prompt("ingrese un numero"));
        
		if(numeros>0)
		{
			sumapositivos = sumapositivos + numeros;
		}

		else(numeros<0)
		{
			multiplicacionnegativos = multiplicacionnegativos * numeros;
			flag=1;
		}

		respuesta = prompt("quiere agregar mas numeros?");
	}


	document.getElementById("txtIdSuma").value=sumapositivos;

	if(flag==0)//si no se ingresa un numero negativo no se multiplica y el resultado seria 0
	{
		multiplicacionnegativos = 0;
	}

	document.getElementById("txtIdProducto").value=multiplicacionnegativos;

}//FIN DE LA FUNCIÓN