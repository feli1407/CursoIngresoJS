function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	if(edad<13)
	{
		alert("el usuario no es adolecente");
	}
	else if(edad>17)
	{
		alert("el usuario no es adolecente");
	}
}//FIN DE LA FUNCIÓN