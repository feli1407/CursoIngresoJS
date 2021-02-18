function mostrar()
{
	let estaciondelaño;
	let destino;
	let mensaje;
	
	destino = document.getElementById("txtIdDestino").value;
	estaciondelaño = document.getElementById("txtIdEstacion").value;

	switch(estaciondelaño)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "se viaja";
					break;
				default:
					mensaje = "no se viaja";
					break;
			}
			break;
		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje = "se viaja";
					break;
				default:
					mensaje = "no se viaja";
					break;
			}
			break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "no se viaja";
					break;
				default:
					mensaje = "se viaja";
					break;
				
			}
			break;
		default:
			mensaje = "se viaja";
			break;
	}

	alert(mensaje);
	

}//FIN DE LA FUNCIÓN