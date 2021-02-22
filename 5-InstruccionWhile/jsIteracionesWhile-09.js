/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numeroingresado;
	let numeromaximo;
	let numerominimo;
	let respuesta;
	let flag;

	flag = true;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroingresado = parseInt(prompt("ingrese un numero"));

		if(flag == true)
		{
			numeromaximo = numeroingresado;
		    numerominimo = numeroingresado;
			flag = false;
		}
	    if(numeroingresado<numerominimo)
		{
			numerominimo = numeroingresado;
		}
		else if(numeroingresado>numeromaximo)
		{
			numeromaximo = numeroingresado;
		}
		
		respuesta=prompt("desea continuar?");
		
	}
	
	document.getElementById("txtIdMaximo").value=numeromaximo;
	document.getElementById("txtIdMinimo").value=numerominimo;
}//FIN DE LA FUNCIÓN