function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	switch(edad)
	{
		case 13:
		{
			alert("usted es adolecente");
			break;
		}
		case 14:
		{
			alert("usted es adolecente");
			break;
		}
		case 15:
		{
			alert("usted es adolecente");
			break;
		}
		case 16:
		{
			alert("usted es adolecente");
			break;
		}
		case 17:
		{
			alert("usted es adolecente");
			break;
		}
	}
// switch es para no poner tantos if, es importante poner : en los case, tambien poner el break en cada case 
// para que no se siga ejecutando.
}//FIN DE LA FUNCIÓN