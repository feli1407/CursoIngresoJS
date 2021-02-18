function mostrar()
{
	let destinoingresado;
	destinoingresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoingresado)
	{
		case "Bariloche":
		case "Ushuaia":

			mensaje = "en este destino hace frio";
			break;
		
		case "Cataratas":
		case "Mar del plata":
			
			mensaje = "en este destino hace calor";
			break;
		
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN