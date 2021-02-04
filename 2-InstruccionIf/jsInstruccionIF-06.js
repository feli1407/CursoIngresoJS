function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad)
	
	// se puede usar else, else if y switch en una funcion
	if(edad<13)
	{
		alert("usted es un niño");
	}
	else if(edad>18)
	{
		alert("usted es un adulto");
	}
	switch(edad)
	{
		case 13:
		    {
		        alert("usted es un adolecente");
		        break;
		    }
		case 14:
			{
				alert("usted es un adolecente");
				break;
			}
	    case 15:
			{
				alert("usted es un adolecente");
				break;
			}
		case 16:
			{
				alert("usted es un adolecente");
				break;
			}
		case 17:
			{
				alert("usted es un adolecente");
				break;
			}
		
	}

}//FIN DE LA FUNCIÓN