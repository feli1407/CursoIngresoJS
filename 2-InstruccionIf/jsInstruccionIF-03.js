function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad>=18)
	{
		alert("usted es mayor de edad");
	}
	
	else
	{
		alert("usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN