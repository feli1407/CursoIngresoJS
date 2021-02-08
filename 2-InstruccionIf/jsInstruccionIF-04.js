function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);


	if(edad>=13 && edad<=17)
	{
		alert("usted es adolecente");
	}
// switch es para no poner tantos if, es importante poner : en los case, tambien poner el break en cada case 
// para que no se siga ejecutando.
}//FIN DE LA FUNCIÓN