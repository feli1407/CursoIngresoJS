function mostrar()
{
	let edad;
	let valor;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	valor = document.getElementById("estadoCivil").values;

	if(valor = "Casado")
	{
		if(edad<18)
		{
			alert("es muy pequeño para NO ser soltero");
		}

	}
	else if(valor = "Divorciado")
    {
		if(edad<18)
		{
			alert("es muy pequeño para NO ser soltero");
		}
	}


}//FIN DE LA FUNCIÓN