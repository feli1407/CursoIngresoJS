function mostrar()
{
	let edad;
	let resultado;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	resultado = edad == 15;
//la variable resultado existe si la edad es igual a 15.
	if(resultado)
	{
		alert("niña bonita");
	}
	
	else
	{

	}

}//FIN DE LA FUNCIÓN