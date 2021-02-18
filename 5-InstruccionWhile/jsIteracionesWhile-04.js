/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroingresado;
	
	do
	{
		numeroingresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	}
    while(numeroingresado > 9 || numeroingresado < 0);
	
	
	document.getElementById("txtIdNumero").value=numeroingresado;
}//FIN DE LA FUNCIÓN