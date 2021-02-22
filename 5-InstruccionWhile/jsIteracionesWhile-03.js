/* el do while hace que si o si se lea el codigo una vez aunque sea
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;
	
	do
	{

	claveingresada = prompt("ingrese la clave");

	}while(claveingresada != "utn750");
	
	
	alert("la clave es correcta");
}//FIN DE LA FUNCIÓN
/*function mostrar()
{
	let clave;
	
	claveingresada = prompt("ingrese la clave");
    
	
	while(claveingresada != "utn750")
	{
		claveingresada = prompt("error, ingrese la clave");
	}
	
	alert("la clave es correcta");
}tambien se puede hacer asi solo con while
*/